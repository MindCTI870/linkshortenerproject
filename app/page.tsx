import { HugeiconsIcon } from "@hugeicons/react";
import {
  LinkSquareIcon,
  BarChartIcon,
  GlobeIcon,
  LockIcon,
  ZapIcon,
  CheckmarkCircleIcon,
} from "@hugeicons/core-free-icons";
import { CTAButtons } from "@/components/cta-buttons";

const features = [
  {
    icon: ZapIcon,
    title: "Instant Shortening",
    description:
      "Paste any long URL and get a short, clean link in milliseconds. No sign-up required to try it.",
  },
  {
    icon: BarChartIcon,
    title: "Click Analytics",
    description:
      "Track every click on your links. See where your audience comes from with real-time stats.",
  },
  {
    icon: GlobeIcon,
    title: "Custom Short Links",
    description:
      "Create branded short links with your own custom slugs to make your links memorable.",
  },
  {
    icon: LockIcon,
    title: "Secure & Reliable",
    description:
      "Your links are stored securely and reliably so they'll always resolve — no expiry surprises.",
  },
  {
    icon: LinkSquareIcon,
    title: "Manage All Your Links",
    description:
      "A clean dashboard to view, edit, and delete all your short links in one place.",
  },
  {
    icon: CheckmarkCircleIcon,
    title: "Simple & Free",
    description:
      "Get started for free with no credit card required. Upgrade when you need more.",
  },
];

const steps = [
  {
    number: "01",
    title: "Paste your URL",
    description: "Copy any long URL and paste it into the shortener.",
  },
  {
    number: "02",
    title: "Get your short link",
    description: "We generate a unique short link instantly, ready to share.",
  },
  {
    number: "03",
    title: "Share & track",
    description:
      "Share it anywhere. Watch the clicks roll in on your dashboard.",
  },
];

export default function Home() {
  return (
    <div className="flex flex-col flex-1">
      {/* Hero */}
      <section className="flex flex-col items-center justify-center gap-8 px-6 py-24 text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-border bg-muted px-4 py-1.5 text-sm text-muted-foreground">
          <HugeiconsIcon icon={ZapIcon} size={14} />
          <span>Fast, free URL shortening</span>
        </div>
        <h1 className="max-w-3xl text-4xl font-semibold tracking-tight sm:text-5xl md:text-6xl">
          Shorten links.{" "}
          <span className="text-muted-foreground">Track every click.</span>
        </h1>
        <p className="max-w-xl text-lg text-muted-foreground">
          Turn any long URL into a clean, shareable short link in seconds. Get
          real-time analytics, custom slugs, and full control from one
          dashboard.
        </p>
        <CTAButtons />
      </section>

      {/* Features */}
      <section className="border-t border-border bg-muted/30 px-6 py-20">
        <div className="mx-auto max-w-5xl">
          <div className="mb-12 text-center">
            <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
              Everything you need
            </h2>
            <p className="mt-3 text-muted-foreground">
              Powerful features packed into a clean, simple tool.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {features.map(({ icon, title, description }) => (
              <div
                key={title}
                className="rounded-xl border border-border bg-card p-6 flex flex-col gap-4"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <HugeiconsIcon icon={icon} size={20} />
                </div>
                <div>
                  <h3 className="font-semibold">{title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-4xl">
          <div className="mb-12 text-center">
            <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
              How it works
            </h2>
            <p className="mt-3 text-muted-foreground">
              Three simple steps to get your short link live.
            </p>
          </div>
          <div className="grid gap-8 sm:grid-cols-3">
            {steps.map(({ number, title, description }) => (
              <div key={number} className="flex flex-col items-center gap-4 text-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-primary text-primary font-bold text-lg">
                  {number}
                </div>
                <div>
                  <h3 className="font-semibold">{title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="border-t border-border bg-muted/30 px-6 py-20 text-center">
        <div className="mx-auto max-w-xl">
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
            Ready to get started?
          </h2>
          <p className="mt-3 mb-8 text-muted-foreground">
            Join thousands of users shortening links with ease. Free to use,
            forever.
          </p>
          <CTAButtons />
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border px-6 py-6 text-center text-sm text-muted-foreground">
        © {new Date().getFullYear()} Link Shortener. All rights reserved.
      </footer>
    </div>
  );
}
