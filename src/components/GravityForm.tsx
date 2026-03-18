"use client"

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';
import { Loader2, Send, AlertCircle } from 'lucide-react';
import { Alert, AlertDescription } from '@/components/ui/alert';
import {
  fetchGravityForm,
  submitGravityFormEntry,
  GravityForm as GravityFormType,
  GravityFormField,
  GravityFormEntry,
} from '@/lib/gravity-forms';

interface GravityFormProps {
  formId: number;
  className?: string;
  onSuccess?: () => void;
  onError?: (message: string) => void;
  submitButtonClassName?: string;
  redirectOnSuccess?: string;
}

const GravityForm = ({
  formId,
  className = '',
  onSuccess,
  onError,
  submitButtonClassName = '',
  redirectOnSuccess = '/thank-you',
}: GravityFormProps) => {
  const router = useRouter();
  const [form, setForm] = useState<GravityFormType | null>(null);
  const [formData, setFormData] = useState<GravityFormEntry>({});
  const [isLoading, setIsLoading] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [formError, setFormError] = useState<string | null>(null);
  const { toast } = useToast();

  useEffect(() => {
    const loadForm = async () => {
      setIsLoading(true);
      setFormError(null);
      const formData = await fetchGravityForm(formId);

      if (!formData) {
        setFormError('Unable to load the form. Please refresh the page or try again later.');
      }

      setForm(formData);

      // Auto-populate hidden fields like source page
      if (formData && typeof window !== 'undefined') {
        const initialData: GravityFormEntry = {};

        // Find and populate source page field (field 9 or any field with inputName="source_page")
        const sourcePageField = formData.fields.find(
          f => f.inputName === 'source_page' || (f.id === 9 && f.visibility === 'hidden')
        );

        if (sourcePageField) {
          initialData[sourcePageField.id] = window.location.pathname + window.location.search;
        }

        setFormData(initialData);
      }

      setIsLoading(false);
    };
    loadForm();
  }, [formId]);

  const handleFieldChange = (fieldId: number | string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [fieldId]: value,
    }));
    // Clear error when user starts typing
    if (errors[fieldId]) {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[fieldId];
        return newErrors;
      });
    }
  };

  const validateForm = (): boolean => {
    if (!form) return false;
    
    const newErrors: Record<string, string> = {};
    
    form.fields.forEach((field) => {
      if (field.isRequired && field.visibility !== 'hidden') {
        const value = formData[field.id];
        if (!value || (typeof value === 'string' && value.trim() === '')) {
          newErrors[field.id] = `Please enter your ${field.label.toLowerCase()}`;
        }
      }
      
      // Email validation
      if (field.type === 'email' && formData[field.id]) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formData[field.id] as string)) {
          newErrors[field.id] = 'Please enter a valid email address (e.g. name@example.com)';
        }
      }

      // Phone validation
      if (field.type === 'phone' && formData[field.id]) {
        const phoneValue = (formData[field.id] as string).replace(/\s/g, '');
        if (phoneValue.length < 8) {
          newErrors[field.id] = 'Please enter a valid phone number';
        }
      }
    });

    setErrors(newErrors);
    
    // Scroll to first error
    if (Object.keys(newErrors).length > 0) {
      const firstErrorId = Object.keys(newErrors)[0];
      const el = document.getElementById(firstErrorId);
      el?.scrollIntoView({ behavior: 'smooth', block: 'center' });
      el?.focus();
    }
    
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormError(null);
    
    if (!validateForm()) {
      const errorCount = Object.keys(errors).length;
      // errors state is set async, count from validateForm
      const requiredFields = form?.fields.filter(f => f.isRequired && f.visibility !== 'hidden') || [];
      const missingFields = requiredFields
        .filter(f => !formData[f.id] || (typeof formData[f.id] === 'string' && (formData[f.id] as string).trim() === ''))
        .map(f => f.label);
      
      if (missingFields.length > 0) {
        setFormError(`Please complete the following required fields: ${missingFields.join(', ')}`);
      }
      
      toast({
        title: 'Please fix the errors below',
        description: missingFields.length > 0 
          ? `${missingFields.length} required field${missingFields.length > 1 ? 's' : ''} missing`
          : 'Some fields need your attention',
        variant: 'destructive',
      });
      return;
    }

    setIsSubmitting(true);
    
    const result = await submitGravityFormEntry(formId, formData);
    
    setIsSubmitting(false);
    
    if (result.success) {
      setFormData({});
      onSuccess?.();
      
      // Redirect to thank you page
      if (redirectOnSuccess) {
        router.push(redirectOnSuccess);
      } else {
        toast({
          title: 'Success!',
          description: result.message,
        });
      }
    } else {
      // Handle validation errors from server
      if (result.validationErrors) {
        setErrors(result.validationErrors);
      }
      
      setFormError(result.message);
      toast({
        title: 'Submission Failed',
        description: result.message,
        variant: 'destructive',
      });
      onError?.(result.message);
    }
  };

  const renderField = (field: GravityFormField) => {
    if (field.visibility === 'hidden') return null;

    const fieldId = field.id.toString();
    const hasError = !!errors[field.id];
    
    switch (field.type) {
      case 'text':
      case 'email':
      case 'phone':
      case 'website':
        return (
          <div key={field.id} className="space-y-2">
            <Label htmlFor={fieldId} className="text-foreground">
              {field.label}
              {field.isRequired && <span className="text-accent ml-1">*</span>}
            </Label>
            <Input
              id={fieldId}
              type={field.type === 'email' ? 'email' : field.type === 'phone' ? 'tel' : 'text'}
              placeholder={field.placeholder}
              value={(formData[field.id] as string) || ''}
              onChange={(e) => handleFieldChange(field.id, e.target.value)}
              maxLength={field.maxLength}
              className={hasError ? 'border-accent border-2 ring-2 ring-accent/20' : ''}
            />
            {field.description && (
              <p className="text-xs text-muted-foreground">{field.description}</p>
            )}
            {hasError && (
              <p className="text-sm font-medium text-accent flex items-center gap-1">
                <AlertCircle className="h-3.5 w-3.5" />
                {errors[field.id]}
              </p>
            )}
          </div>
        );

      case 'textarea':
        return (
          <div key={field.id} className="space-y-2">
            <Label htmlFor={fieldId} className="text-foreground">
              {field.label}
              {field.isRequired && <span className="text-accent ml-1">*</span>}
            </Label>
            <Textarea
              id={fieldId}
              placeholder={field.placeholder}
              value={(formData[field.id] as string) || ''}
              onChange={(e) => handleFieldChange(field.id, e.target.value)}
              maxLength={field.maxLength}
              rows={5}
              className={hasError ? 'border-accent border-2 ring-2 ring-accent/20' : ''}
            />
            {field.description && (
              <p className="text-xs text-muted-foreground">{field.description}</p>
            )}
            {hasError && (
              <p className="text-sm font-medium text-accent flex items-center gap-1">
                <AlertCircle className="h-3.5 w-3.5" />
                {errors[field.id]}
              </p>
            )}
          </div>
        );

      case 'select':
        return (
          <div key={field.id} className="space-y-2">
            <Label htmlFor={fieldId} className="text-foreground">
              {field.label}
              {field.isRequired && <span className="text-accent ml-1">*</span>}
            </Label>
            <Select
              value={(formData[field.id] as string) || ''}
              onValueChange={(value) => handleFieldChange(field.id, value)}
            >
              <SelectTrigger className={hasError ? 'border-accent border-2 ring-2 ring-accent/20' : ''}>
                <SelectValue placeholder={field.placeholder || 'Select an option'} />
              </SelectTrigger>
              <SelectContent>
                {field.choices?.map((choice) => (
                  <SelectItem key={choice.value} value={choice.value}>
                    {choice.text}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            {field.description && (
              <p className="text-xs text-muted-foreground">{field.description}</p>
            )}
            {hasError && (
              <p className="text-sm font-medium text-accent flex items-center gap-1">
                <AlertCircle className="h-3.5 w-3.5" />
                {errors[field.id]}
              </p>
            )}
          </div>
        );

      case 'radio':
        return (
          <div key={field.id} className="space-y-2">
            <Label className="text-foreground">
              {field.label}
              {field.isRequired && <span className="text-accent ml-1">*</span>}
            </Label>
            <RadioGroup
              value={(formData[field.id] as string) || ''}
              onValueChange={(value) => handleFieldChange(field.id, value)}
              className="space-y-2"
            >
              {field.choices?.map((choice) => (
                <div key={choice.value} className="flex items-center space-x-2">
                  <RadioGroupItem value={choice.value} id={`${fieldId}-${choice.value}`} />
                  <Label htmlFor={`${fieldId}-${choice.value}`} className="font-normal">
                    {choice.text}
                  </Label>
                </div>
              ))}
            </RadioGroup>
            {field.description && (
              <p className="text-xs text-muted-foreground">{field.description}</p>
            )}
            {hasError && (
              <p className="text-sm font-medium text-accent flex items-center gap-1">
                <AlertCircle className="h-3.5 w-3.5" />
                {errors[field.id]}
              </p>
            )}
          </div>
        );

      case 'checkbox':
        return (
          <div key={field.id} className="space-y-2">
            <Label className="text-foreground">
              {field.label}
              {field.isRequired && <span className="text-accent ml-1">*</span>}
            </Label>
            <div className="space-y-2">
              {field.choices?.map((choice, idx) => {
                const inputId = field.inputs?.[idx]?.id || `${field.id}.${idx + 1}`;
                return (
                  <div key={choice.value} className="flex items-center space-x-2">
                    <Checkbox
                      id={`${fieldId}-${choice.value}`}
                      checked={formData[inputId] === choice.value}
                      onCheckedChange={(checked) =>
                        handleFieldChange(inputId, checked ? choice.value : '')
                      }
                    />
                    <Label htmlFor={`${fieldId}-${choice.value}`} className="font-normal">
                      {choice.text}
                    </Label>
                  </div>
                );
              })}
            </div>
            {field.description && (
              <p className="text-xs text-muted-foreground">{field.description}</p>
            )}
            {hasError && (
              <p className="text-sm font-medium text-accent flex items-center gap-1">
                <AlertCircle className="h-3.5 w-3.5" />
                {errors[field.id]}
              </p>
            )}
          </div>
        );

      case 'name':
        // Name field with multiple inputs (first, last)
        return (
          <div key={field.id} className="space-y-2">
            <Label className="text-foreground">
              {field.label}
              {field.isRequired && <span className="text-accent ml-1">*</span>}
            </Label>
            <div className="grid grid-cols-2 gap-4">
              {field.inputs?.map((input) => (
                <div key={input.id} className="space-y-1">
                  <Input
                    id={input.id}
                    placeholder={input.label}
                    value={(formData[input.id] as string) || ''}
                    onChange={(e) => handleFieldChange(input.id, e.target.value)}
                  />
                  <span className="text-xs text-muted-foreground">{input.label}</span>
                </div>
              ))}
            </div>
            {hasError && (
              <p className="text-sm font-medium text-accent flex items-center gap-1">
                <AlertCircle className="h-3.5 w-3.5" />
                {errors[field.id]}
              </p>
            )}
          </div>
        );

      case 'html':
        return (
          <div
            key={field.id}
            className="prose prose-sm max-w-none text-muted-foreground"
            dangerouslySetInnerHTML={{ __html: field.label }}
          />
        );

      case 'section':
        return (
          <div key={field.id} className="py-4 border-b border-border">
            <h3 className="font-display text-lg font-semibold text-foreground">
              {field.label}
            </h3>
            {field.description && (
              <p className="text-sm text-muted-foreground mt-1">{field.description}</p>
            )}
          </div>
        );

      default:
        // Fallback for unsupported field types - render as text input
        console.warn(`Unsupported Gravity Forms field type: ${field.type}`);
        return (
          <div key={field.id} className="space-y-2">
            <Label htmlFor={fieldId} className="text-foreground">
              {field.label}
              {field.isRequired && <span className="text-accent ml-1">*</span>}
            </Label>
            <Input
              id={fieldId}
              placeholder={field.placeholder}
              value={(formData[field.id] as string) || ''}
              onChange={(e) => handleFieldChange(field.id, e.target.value)}
            />
          </div>
        );
    }
  };

  if (isLoading) {
    return (
      <div className={`flex items-center justify-center py-12 ${className}`}>
        <Loader2 className="w-8 h-8 animate-spin text-primary" />
      </div>
    );
  }

  if (!form || formError) {
    return (
      <div className={`${className}`}>
        <Alert variant="destructive">
          <AlertCircle className="h-4 w-4" />
          <AlertDescription>
            {formError || 'Unable to load the form. Please refresh the page or try again later.'}
          </AlertDescription>
        </Alert>
        <Button 
          onClick={() => window.location.reload()} 
          variant="outline" 
          className="mt-4"
        >
          Refresh Page
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className={`space-y-6 ${className}`}>
      {form.description && (
        <p className="text-muted-foreground">{form.description}</p>
      )}
      
      {formError && (
        <Alert variant="destructive">
          <AlertCircle className="h-4 w-4" />
          <AlertDescription>{formError}</AlertDescription>
        </Alert>
      )}
      
      {form.fields.map(renderField)}
      
      <Button
        type="submit"
        disabled={isSubmitting}
        className={submitButtonClassName || 'w-full'}
        variant="accent"
        size="lg"
      >
        {isSubmitting ? (
          <>
            <Loader2 className="w-4 h-4 mr-2 animate-spin" />
            Submitting...
          </>
        ) : (
          <>
            <Send className="w-4 h-4 mr-2" />
            {form.button?.text || 'Submit'}
          </>
        )}
      </Button>
    </form>
  );
};

export default GravityForm;
