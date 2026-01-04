import { 
  Calculator, 
  TrendingUp, 
  PieChart, 
  DollarSign, 
  Car, 
  Landmark, 
  Fuel, 
  Percent 
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";

const features = [
  {
    title: "Loan & EMI",
    description: "Calculate monthly installments for Home, Car, and Personal loans with accurate interest breakdowns.",
    icon: Calculator,
    color: "text-blue-500",
    bg: "bg-blue-500/10",
  },
  {
    title: "Investment Growth",
    description: "Track your SIP, SWP, FD, and RD returns. Visualize how your money grows over time.",
    icon: TrendingUp,
    color: "text-green-500",
    bg: "bg-green-500/10",
  },
  {
    title: "Tax Planning",
    description: "Instant GST, VAT, and Tax calculations. Simplified tools for business and personal use.",
    icon: FileText,
    color: "text-purple-500",
    bg: "bg-purple-500/10",
  },
  {
    title: "Banking Tools",
    description: "PPF, ROI, and Annual Interest calculators to keep your savings on track.",
    icon: Landmark,
    color: "text-amber-500",
    bg: "bg-amber-500/10",
  },
  {
    title: "Business Metrics",
    description: "Calculate Margins, Markups, and Gross profits effortlessly for your business.",
    icon: PieChart,
    color: "text-rose-500",
    bg: "bg-rose-500/10",
  },
  {
    title: "Utility Tools",
    description: "Everyday tools like Fuel Cost Calculator and Discount finder.",
    icon: Fuel,
    color: "text-cyan-500",
    bg: "bg-cyan-500/10",
  },
];

import { FileText } from "lucide-react";

export default function Features() {
  return (
    <section id="features" className="py-0 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
            Everything You Need in One App
          </h2>
          <p className="text-muted-foreground text-lg">
            Whether you are a financial professional or just planning your monthly budget, we have the right calculator for you.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="h-full border-none shadow-sm hover:shadow-lg transition-all hover:-translate-y-1 duration-300">
                <CardHeader>
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${feature.bg}`}>
                    <feature.icon className={`w-6 h-6 ${feature.color}`} />
                  </div>
                  <CardTitle className="font-heading text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
