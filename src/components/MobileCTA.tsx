"use client";

import { AlertTriangle, Calendar } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const MobileCTA = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-card/95 backdrop-blur-md border-t border-border px-4 py-3 safe-area-bottom">
      <div className="flex items-center gap-3">
        <Link href="/contact" className="flex-1">
          <Button variant="default" size="sm" className="w-full gap-2">
            <Calendar className="w-4 h-4" />
            Book Now
          </Button>
        </Link>
        <Link href="/cyber-security-urgent-help" className="flex-1">
          <Button variant="accent" size="sm" className="w-full gap-2">
            <AlertTriangle className="w-4 h-4" />
            URGENT HELP
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default MobileCTA;
