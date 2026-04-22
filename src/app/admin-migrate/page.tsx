"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";

export default function MigratePage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<{ success: boolean; message: string } | null>(null);

  const handleMigrate = async () => {
    setLoading(true);
    setResult(null);

    try {
      const response = await fetch("/api/migrate-service", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });

      const data = await response.json();

      if (response.ok) {
        // Trigger cache revalidation
        await fetch("/api/revalidate", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ path: "/services/cyber-awareness-training" }),
        });

        setResult({ success: true, message: data.message + " Cache cleared - changes are now live!" });
        setPassword(""); // Clear password for security
      } else {
        setResult({ success: false, message: data.error });
      }
    } catch (error) {
      setResult({
        success: false,
        message: error instanceof Error ? error.message : "Unknown error",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-background p-8">
      <div className="max-w-2xl mx-auto">
        <Card>
          <CardHeader>
            <CardTitle>Migrate Cyber Awareness Training to WordPress</CardTitle>
            <CardDescription>
              This will update the Cyber Awareness Training service content in WordPress with the following changes:
              <ul className="list-disc list-inside mt-2 space-y-1">
                <li>Replace &quot;Interactive workshops&quot; with &quot;Cyber incident simulation tabletop exercises&quot;</li>
                <li>Add new FAQ about tabletop exercises</li>
              </ul>
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <label htmlFor="username" className="text-sm font-medium">
                WordPress Username
              </label>
              <Input
                id="username"
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Enter your WordPress username"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="password" className="text-sm font-medium">
                WordPress Application Password
              </label>
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your WordPress application password"
              />
              <p className="text-xs text-muted-foreground">
                Generate an application password in WordPress: Users → Profile → Application Passwords
              </p>
            </div>

            <Button
              onClick={handleMigrate}
              disabled={!username || !password || loading}
              className="w-full"
            >
              {loading ? "Migrating..." : "Migrate to WordPress"}
            </Button>

            {result && (
              <Alert variant={result.success ? "default" : "destructive"}>
                <AlertDescription>
                  {result.success ? "✅ " : "❌ "}
                  {result.message}
                </AlertDescription>
              </Alert>
            )}

            {result?.success && (
              <div className="text-sm text-muted-foreground">
                <p>The changes have been pushed to WordPress. The website should update within 5 minutes due to cache revalidation.</p>
                <p className="mt-2">You can verify the changes at:</p>
                <a
                  href="https://www.adl99.com.au/services/cyber-awareness-training"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  https://www.adl99.com.au/services/cyber-awareness-training
                </a>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
