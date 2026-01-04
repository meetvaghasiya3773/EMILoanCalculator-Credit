import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import appIcon from "@assets/400x400bb-75_1767543270209.webp";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur-md supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/">
          <a className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <img
              src={appIcon}
              alt="Logo"
              className="w-8 h-8 rounded-lg shadow-sm"
            />
            <span className="font-heading font-bold text-xl tracking-tight text-foreground">
              EMI Loan Calculator - Credit
            </span>
          </a>
        </Link>

        <div className="flex items-center gap-4">
          <Button
            variant="default"
            className="font-semibold shadow-lg shadow-primary/20 hover:shadow-primary/40 transition-all"
            onClick={() =>
              window.open("https://apps.apple.com/app/id6756540889", "_blank")
            }
          >
            Download App
          </Button>

        </div>
      </div>
    </nav>
  );
}
