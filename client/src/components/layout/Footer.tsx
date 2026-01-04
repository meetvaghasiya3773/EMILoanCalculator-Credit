import { Calculator, Linkedin, Twitter, Github } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-muted/30 border-t pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="bg-primary/10 p-2 rounded-lg">
                <Calculator className="w-5 h-5 text-primary" />
              </div>
              <span className="font-heading font-bold text-lg">EMI Calculator</span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              The all-in-one financial companion for calculating loans, investments, taxes, and planning your financial future.
            </p>
          </div>
          
          <div>
            <h3 className="font-heading font-semibold mb-4">Product</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">Features</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Calculators</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Pricing</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Download</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-heading font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Contact</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Terms of Service</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-heading font-semibold mb-4">Connect</h3>
            <div className="flex gap-4">
              <a href="#" className="bg-background border p-2 rounded-full hover:border-primary/50 hover:text-primary transition-all">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" className="bg-background border p-2 rounded-full hover:border-primary/50 hover:text-primary transition-all">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="#" className="bg-background border p-2 rounded-full hover:border-primary/50 hover:text-primary transition-all">
                <Github className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <p>© 2024 EMI Loan Calculator. All rights reserved.</p>
          <p>Designed with precision.</p>
        </div>
      </div>
    </footer>
  );
}
