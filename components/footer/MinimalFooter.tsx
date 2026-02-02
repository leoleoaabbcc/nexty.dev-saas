import Link from "next/link";

export default function MinimalFooter() {
  return (
    <footer className="py-8 border-t">
      <div className="container mx-auto text-center text-sm text-muted-foreground space-y-2">
        <div className="flex items-center justify-center gap-4">
          <Link href="/terms-of-service" className="hover:text-foreground transition-colors">
            Terms of Service
          </Link>
          <span>·</span>
          <Link href="/privacy-policy" className="hover:text-foreground transition-colors">
            Privacy Policy
          </Link>
          <span>·</span>
          <Link href="/refund-policy" className="hover:text-foreground transition-colors">
            Refund Policy
          </Link>
        </div>
        <div>© {new Date().getFullYear()} BitsFactor</div>
      </div>
    </footer>
  );
}

