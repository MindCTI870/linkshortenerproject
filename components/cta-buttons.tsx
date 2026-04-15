"use client";

import { useClerk } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";

export function CTAButtons() {
  const { openSignUp, openSignIn } = useClerk();

  return (
    <div className="flex flex-col sm:flex-row gap-4 justify-center">
      <Button size="lg" onClick={() => openSignUp()} className="text-base px-8">
        Get Started Free
      </Button>
      <Button
        size="lg"
        variant="outline"
        onClick={() => openSignIn()}
        className="text-base px-8"
      >
        Sign In
      </Button>
    </div>
  );
}
