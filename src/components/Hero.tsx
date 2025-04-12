
import { Button } from "@/components/ui/button";
import { ArrowRight, Shield } from "lucide-react";

const Hero = () => {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 hero-pattern relative overflow-hidden">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_500px]">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                Early Detection,
                <span className="gradient-text"> Peace of Mind</span>
              </h1>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl lg:text-2xl dark:text-gray-400">
                AI-powered skin analysis that helps you identify potential concerns and take action early.
              </p>
            </div>
            <div className="space-y-4 mt-4">
              <p className="text-gray-500 dark:text-gray-400">
                SkinWhisper uses advanced AI to analyze your skin concerns through text descriptions or images, providing helpful insights and guidance.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Button className="bg-primary hover:bg-primary/90" size="lg">
                  Get Started Free
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button variant="outline" size="lg">
                  How It Works
                </Button>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Shield className="h-4 w-4" />
                <span>Your privacy is our priority. Data is never shared without your consent.</span>
              </div>
            </div>
          </div>
          <div className="mx-auto flex items-center justify-center lg:justify-end">
            <div className="relative w-[300px] h-[300px] sm:w-[350px] sm:h-[350px] lg:w-[400px] lg:h-[400px] animate-float">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 blur-3xl"></div>
              <div className="absolute inset-4 bg-white dark:bg-gray-900 rounded-full flex items-center justify-center overflow-hidden border shadow-lg">
                <div className="w-full h-full bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center">
                  <div className="text-center p-6">
                    <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/20 flex items-center justify-center">
                      <span className="text-primary text-2xl font-bold">AI</span>
                    </div>
                    <h3 className="font-semibold text-lg mb-1">Powered by ChatGPT</h3>
                    <p className="text-sm text-muted-foreground">Advanced analysis that's accurate, fast & accessible</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
