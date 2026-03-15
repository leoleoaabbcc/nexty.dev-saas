"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { siteConfig } from "@/config/site";
import { useState } from "react";

type PolicyType = "terms" | "privacy" | "refund";

function TermsContent() {
  return (
    <div className="space-y-4 text-sm leading-relaxed text-slate-300">
      <section>
        <h3 className="mb-1.5 font-medium text-white">1. Acceptance</h3>
        <p>
          By accessing or using {siteConfig.name} services, you agree to be
          bound by these Terms of Service.
        </p>
      </section>
      <section>
        <h3 className="mb-1.5 font-medium text-white">2. Account</h3>
        <p>
          You are responsible for maintaining the security of your account and
          all activities that occur under it. Provide accurate and complete
          information when creating your account.
        </p>
      </section>
      <section>
        <h3 className="mb-1.5 font-medium text-white">3. Acceptable Use</h3>
        <p>
          You agree not to use our services for any illegal or unauthorized
          purpose, including violating intellectual property rights, distributing
          malware, or attempting unauthorized access to our systems.
        </p>
      </section>
      <section>
        <h3 className="mb-1.5 font-medium text-white">4. Payment</h3>
        <p>
          Payments are processed through third-party processors. Subscription
          prices are listed on our website. You may cancel at any time, effective
          at the end of the current billing cycle.
        </p>
      </section>
      <section>
        <h3 className="mb-1.5 font-medium text-white">
          5. Intellectual Property
        </h3>
        <p>
          All content on {siteConfig.name} is owned by us or our licensors. You
          retain rights to content you upload and grant us a license to use it
          solely for providing services.
        </p>
      </section>
      <section>
        <h3 className="mb-1.5 font-medium text-white">6. Disclaimer</h3>
        <p>
          Services are provided &quot;as is&quot; without warranties. We do not
          guarantee uninterrupted, error-free, or secure service.
        </p>
      </section>
      <section>
        <h3 className="mb-1.5 font-medium text-white">7. Changes</h3>
        <p>
          We may modify these terms at any time. Continued use after changes
          constitutes acceptance of the modified terms.
        </p>
      </section>
    </div>
  );
}

function PrivacyContent() {
  return (
    <div className="space-y-4 text-sm leading-relaxed text-slate-300">
      <section>
        <h3 className="mb-1.5 font-medium text-white">
          1. Information We Collect
        </h3>
        <p>
          We collect account information (name, email), payment details via
          secure processors like Stripe, and anonymous usage data (device info,
          pages viewed, cookies).
        </p>
      </section>
      <section>
        <h3 className="mb-1.5 font-medium text-white">
          2. How We Use Information
        </h3>
        <p>
          We use your information to provide and improve services, process
          transactions, communicate with you, and ensure security. We do not sell
          your personal information.
        </p>
      </section>
      <section>
        <h3 className="mb-1.5 font-medium text-white">3. Data Sharing</h3>
        <p>
          We share data only with service providers (payment, storage, email)
          needed to operate our services, and when required by law.
        </p>
      </section>
      <section>
        <h3 className="mb-1.5 font-medium text-white">4. Data Security</h3>
        <p>
          We use SSL/TLS encryption, secure payment processing, and regular
          security reviews. We do not store complete payment card details.
        </p>
      </section>
      <section>
        <h3 className="mb-1.5 font-medium text-white">5. Your Rights</h3>
        <p>
          You may access, correct, delete, or export your personal information.
          Contact us to exercise these rights.
        </p>
      </section>
      <section>
        <h3 className="mb-1.5 font-medium text-white">6. Cookies</h3>
        <p>
          We use cookies for authentication, analytics, and user experience. You
          can control cookies through your browser settings.
        </p>
      </section>
      <section>
        <h3 className="mb-1.5 font-medium text-white">7. Updates</h3>
        <p>
          We may update this policy periodically. Significant changes will be
          posted on our website.
        </p>
      </section>
    </div>
  );
}

function RefundContent() {
  return (
    <div className="space-y-4 text-sm leading-relaxed text-slate-300">
      <section>
        <h3 className="mb-1.5 font-medium text-white">1. Eligibility</h3>
        <p>
          Refunds may be available for service downtime (&gt;24h), billing
          errors, unauthorized charges, or services not as described.
        </p>
      </section>
      <section>
        <h3 className="mb-1.5 font-medium text-white">
          2. Credit-Based Services
        </h3>
        <p>
          Unused credits may be refunded within 30 days. Credits consumed due to
          platform errors will be restored.
        </p>
      </section>
      <section>
        <h3 className="mb-1.5 font-medium text-white">3. Non-Refundable</h3>
        <p>
          Consumed services, change of mind, user error, third-party issues,
          expired services, and promotional purchases are generally
          non-refundable.
        </p>
      </section>
      <section>
        <h3 className="mb-1.5 font-medium text-white">4. Process</h3>
        <p>
          Contact us with your account email, transaction ID, and reason.
          Requests are reviewed within 2 business days, investigated within 5-7
          days, and processed within 3-5 days if approved.
        </p>
      </section>
      <section>
        <h3 className="mb-1.5 font-medium text-white">5. Cancellations</h3>
        <p>
          You may cancel subscriptions at any time. Cancellation takes effect at
          the end of the current billing cycle.
        </p>
      </section>
    </div>
  );
}

const policyConfig: Record<
  PolicyType,
  { title: string; description: string; content: React.ReactNode }
> = {
  terms: {
    title: "Terms of Service",
    description: `Terms and conditions for using ${siteConfig.name}.`,
    content: <TermsContent />,
  },
  privacy: {
    title: "Privacy Policy",
    description: `How ${siteConfig.name} collects and uses your information.`,
    content: <PrivacyContent />,
  },
  refund: {
    title: "Refund Policy",
    description: `Refund guidelines for ${siteConfig.name} services.`,
    content: <RefundContent />,
  },
};

export default function LandingFooter() {
  const [openPolicy, setOpenPolicy] = useState<PolicyType | null>(null);
  const current = openPolicy ? policyConfig[openPolicy] : null;

  return (
    <>
      <footer className="relative border-t border-white/[0.06] py-8">
        <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-4 px-4 sm:flex-row sm:px-6 lg:px-8">
          <span className="text-sm text-slate-500">
            &copy; {new Date().getFullYear()} {siteConfig.name}
          </span>
          <div className="flex items-center gap-6 text-sm text-slate-500">
            <button
              type="button"
              onClick={() => setOpenPolicy("terms")}
              className="cursor-pointer transition-colors hover:text-slate-300"
            >
              Terms
            </button>
            <button
              type="button"
              onClick={() => setOpenPolicy("privacy")}
              className="cursor-pointer transition-colors hover:text-slate-300"
            >
              Privacy
            </button>
            <button
              type="button"
              onClick={() => setOpenPolicy("refund")}
              className="cursor-pointer transition-colors hover:text-slate-300"
            >
              Refund
            </button>
          </div>
        </div>
      </footer>

      <Dialog
        open={openPolicy !== null}
        onOpenChange={(open) => !open && setOpenPolicy(null)}
      >
        {current && (
          <DialogContent className="max-h-[80vh] overflow-y-auto border-white/10 bg-[#0a1025] text-white sm:max-w-lg">
            <DialogHeader>
              <DialogTitle className="text-white">
                {current.title}
              </DialogTitle>
              <DialogDescription className="text-slate-500">
                {current.description}
              </DialogDescription>
            </DialogHeader>
            {current.content}
          </DialogContent>
        )}
      </Dialog>
    </>
  );
}
