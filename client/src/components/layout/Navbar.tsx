import { Button } from "@/components/ui/button";
import { Calculator } from "lucide-react";
import { Link } from "wouter";
import appIcon from "@assets/generated_images/modern_3d_app_icon_for_finance_calculator.png";

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
              EMI Calculator
            </span>
          </a>
        </Link>

        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-muted-foreground">
          <a href="#features" className="hover:text-primary transition-colors">Features</a>
          <a href="#calculators" className="hover:text-primary transition-colors">Calculators</a>
          <a href="#about" className="hover:text-primary transition-colors">About</a>
        </div>

        <div className="flex items-center gap-4">
          <Button variant="default" className="font-semibold shadow-lg shadow-primary/20 hover:shadow-primary/40 transition-all">
            Download App
          </Button>
        </div>
      </div>
    </nav>
  );
}
