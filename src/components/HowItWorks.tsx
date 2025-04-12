
import React from "react";
import { ArrowRight, MessageSquare, Image, Zap, Shield } from "lucide-react";
import { cn } from "@/lib/utils";

const HowItWorks = () => {
  const steps = [
    {
      icon: <MessageSquare className="h-8 w-8 text-primary" />,
      altIcon: <Image className="h-8 w-8 text-primary" />,
      title: "Share Your Concerns",
      description:
        "Simply describe your skin concern with as much detail as possible, or share an image link. The more information you provide, the more helpful our analysis can be.",
    },
    {
      icon: <Zap className="h-8 w-8 text-secondary" />,
      title: "Advanced AI Analysis",
      description:
        "ChatGPT instantly processes your information, comparing it with patterns from medical research and dermatological knowledge to identify potential concerns.",
    },
    {
      icon: <ArrowRight className="h-8 w-8 text-accent" />,
      title: "Receive Instant Feedback",
      description:
        "Within seconds, you'll get personalized feedback about your skin concern, including potential issues to be aware of and recommendations for next steps.",
    },
    {
      icon: <Shield className="h-8 w-8 text-green-500" />,
      title: "Privacy Protected",
      description:
        "Your health information is never stored or shared without your consent. Create a free account to save your history and get personalized recommendations.",
    },
  ];

  return (
    <section id="how-it-works" className="w-full py-12 md:py-20 bg-muted/30">
      <div className="container px-4 md:px-6 max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter">How SkinWhisper Works</h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
            SkinWhisper makes skin health monitoring simple, accessible, and private. Here's how our AI-powered tool helps you take control of your skin health.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <div
              key={index}
              className={cn(
                "relative flex flex-col items-center text-center p-6 rounded-lg bg-background shadow-sm border",
                index === 0 && "md:col-span-2 lg:col-span-1"
              )}
            >
              <div className="flex flex-col items-center lg:flex-row lg:items-start gap-3">
                <div className="mb-4 lg:mb-0 flex items-center justify-center">
                  {index === 0 ? (
                    <div className="flex gap-2">
                      {step.icon}
                      <span className="mx-1 text-primary">or</span>
                      {step.altIcon}
                    </div>
                  ) : (
                    step.icon
                  )}
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
              </div>
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute -right-4 top-1/2 transform -translate-y-1/2 z-10">
                  <ArrowRight className="h-6 w-6 text-muted-foreground/40" />
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-muted-foreground italic">
            Remember: SkinWhisper is designed to help identify potential concerns, but it's not a replacement for 
            professional medical advice. When in doubt, always consult a healthcare provider.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
