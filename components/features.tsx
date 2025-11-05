import { Bot, Zap, Shield, BarChart } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const features = [
  {
    name: "Advanced AI Agents",
    description: "Harness the power of next-generation artificial intelligence.
We specialize in developing intelligent AI agents capable of advanced decision-making, automation, and seamless natural language interaction. Whether it’s a customer support bot, autonomous system, or data-driven assistant, our AI solutions learn, adapt, and evolve with your business — helping you work smarter, faster, and more efficiently.",
    icon: Bot,
  },
  {
    name: "Workflow Automation",
    description: "Eliminate repetitive tasks and streamline your operations with our AI-driven workflow automation tools.
Our platform allows you to build, test, and optimize automation models quickly, ensuring faster deployment and better productivity across your organization.",
    icon: Zap,
  },
  {
    name: "App & Website Deployment",
    description: "From concept to launch — we make your digital presence come alive.
Our team ensures secure, scalable, and high-performance deployment for your apps and websites. Whether you’re launching an MVP or an enterprise platform, we deliver end-to-end deployment solutions tailored to your goals.",
    icon: monitor-check,
  },
  {
    name: "Social Media Marketing",
    description: "Maximize your brand’s visibility and performance through data-backed social media strategies.
We combine creativity with analytics to help you reach the right audience, grow engagement, and track ROI across every campaign.",
    icon: BarChart,
  },
]

export default function Features() {
  return (
    <section id="features" className="py-20 px-6">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Powerful Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {features.map((feature) => (
            <Card key={feature.name} className="transition-all hover:shadow-lg">
              <CardHeader>
                <feature.icon className="h-8 w-8 text-primary mb-2" />
                <CardTitle>{feature.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{feature.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
