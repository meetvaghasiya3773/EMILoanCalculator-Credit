import { Button } from "@/components/ui/button";
import { ArrowRight, Download, Star } from "lucide-react";
import heroBg from "@assets/generated_images/abstract_financial_data_visualization_hero_background.png";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-20 pb-32 lg:pt-32 lg:pb-48">
      {/* Background Decor */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/50 to-background/90 z-10" />
        <img 
          src={heroBg} 
          alt="Background" 
          className="w-full h-full object-cover opacity-20"
        />
      </div>

      <div className="container mx-auto px-4 text-center max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            #1 Finance Utility App
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-extrabold text-foreground tracking-tight mb-6">
            Master Your Finances with <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400">Precision</span>
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
            The ultimate tool for EMI, Loan, Investment, and Tax calculations. 
            Smart financial planning made simple for everyone.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" className="h-14 px-8 text-lg rounded-full shadow-xl shadow-primary/25 hover:shadow-primary/40 hover:-translate-y-0.5 transition-all w-full sm:w-auto">
              <Download className="mr-2 w-5 h-5" />
              Download on App Store
            </Button>
            <Button variant="outline" size="lg" className="h-14 px-8 text-lg rounded-full hover:bg-secondary w-full sm:w-auto">
              Learn More <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>

          <div className="mt-12 flex items-center justify-center gap-8 text-muted-foreground grayscale opacity-60">
            <div className="flex items-center gap-2">
              <Star className="w-5 h-5 fill-current" />
              <span className="font-semibold">4.8 Rating</span>
            </div>
            <div className="h-4 w-px bg-border" />
            <div className="font-semibold">1M+ Downloads</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
