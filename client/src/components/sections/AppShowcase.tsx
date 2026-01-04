import mockupImg from "@assets/generated_images/mobile_app_ui_mockup_for_emi_calculator.png";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const benefits = [
  "Instant & Accurate Results",
  "Compare Multiple Loan Options",
  "Visual Charts & Graphs",
  "PDF Reports Export",
  "Offline Capability",
  "Dark Mode Support"
];

export default function AppShowcase() {
  return (
    <section className="py-24 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          
          <div className="flex-1 order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6">
                Designed for Simplicity, <br />
                Engineered for Accuracy
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Stop wrestling with complex spreadsheets. Our intuitive interface makes financial planning accessible to everyone, right from your pocket.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="font-medium text-foreground/80">{benefit}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          <div className="flex-1 order-1 lg:order-2 flex justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full transform scale-90" />
              <img 
                src={mockupImg} 
                alt="App Interface" 
                className="relative z-10 w-[300px] md:w-[350px] rounded-[3rem] shadow-2xl border-8 border-background"
              />
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
