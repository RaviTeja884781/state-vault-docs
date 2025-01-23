import { Box, Code, Database, Lock, Rocket, Sparkles, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

function Home() {
  const features = [
    {
      icon: <Lock className="w-6 h-6 text-primary mb-2" />,
      title: "Type-Safe by Design ✨",
      description:
        "Built with TypeScript from the ground up, providing excellent type inference and compile-time safety.",
    },
    {
      icon: <Box className="w-6 h-6 text-primary mb-2" />,
      title: "Modular Architecture 📦",
      description:
        "Organize your state logic into isolated modules using SafeDepositBox for better maintainability.",
    },
    {
      icon: <Zap className="w-6 h-6 text-primary mb-2" />,
      title: "Efficient Updates ⚡️",
      description:
        "Smart state updates that only trigger re-renders when necessary, optimizing your application's performance.",
    },
    {
      icon: <Sparkles className="w-6 h-6 text-primary mb-2" />,
      title: "Developer Friendly 🛠️",
      description:
        "Intuitive API design that feels familiar while providing powerful features for complex state management needs.",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary/20 py-12 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-6">
            <Database className="w-4 h-4" />
            <span className="text-sm font-medium">
              State Management Reimagined
            </span>
          </div>

          <h1 className="text-5xl font-bold text-foreground mb-6 bg-clip-text bg-gradient-to-r from-primary to-primary/60">
            StateVault Documentation
          </h1>

          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            A powerful and type-safe state management solution for React
            applications that helps you build better apps, faster. 🚀
          </p>

          <div className="flex gap-4 justify-center">
            <Button size="lg" className="gap-2">
              <Code className="w-4 h-4" />
              Get Started
            </Button>
            <Button size="lg" variant="outline" className="gap-2">
              <Rocket className="w-4 h-4" />
              View on GitHub
            </Button>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-16">
          {features.map((feature, index) => (
            <div key={index}>
              <Card className="p-6 h-full bg-card/50 backdrop-blur-sm border-primary/10 hover:border-primary/20 transition-colors">
                <div className="flex flex-col h-full">
                  {feature.icon}
                  <h2 className="text-xl font-semibold text-foreground mb-3">
                    {feature.title}
                  </h2>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
