export default function MinimalFooter() {
  return (
    <footer className="py-8 border-t">
      <div className="container mx-auto text-center text-sm text-muted-foreground">
        © {new Date().getFullYear()} BitsFactor
      </div>
    </footer>
  );
}

