import {
  Shield,
  Search,
  Users,
  BookOpen,
  Brain,
  Scale,
  Heart,
  Calculator,
  ShoppingCart,
  Factory,
  Lightbulb,
  AlertTriangle,
  Lock,
  Eye,
  FileCheck,
  GraduationCap,
  UserCheck,
  Building2,
  Stethoscope,
  Briefcase,
  Store,
  Cog,
  Microscope,
  Target,
  Clock,
  MapPin,
  LucideIcon
} from 'lucide-react';

// Map WordPress icon field values to Lucide React components
export const iconMap: Record<string, LucideIcon> = {
  // Services
  'shield': Shield,
  'search': Search,
  'users': Users,
  'book-open': BookOpen,
  'brain': Brain,
  'lock': Lock,
  'eye': Eye,
  'file-check': FileCheck,
  'graduation-cap': GraduationCap,
  'user-check': UserCheck,
  'alert-triangle': AlertTriangle,
  'check-circle': FileCheck,
  'target': Target,
  'clock': Clock,
  'map-pin': MapPin,

  // Industries
  'scale': Scale,
  'heart': Heart,
  'calculator': Calculator,
  'shopping-cart': ShoppingCart,
  'factory': Factory,
  'lightbulb': Lightbulb,
  'building': Building2,
  'stethoscope': Stethoscope,
  'briefcase': Briefcase,
  'store': Store,
  'cog': Cog,
  'microscope': Microscope,
};

/**
 * Get a Lucide icon component by name
 * Falls back to Shield icon if not found
 */
export function getIcon(name: string): LucideIcon {
  const normalizedName = name?.toLowerCase().trim() || '';
  return iconMap[normalizedName] || Shield;
}
