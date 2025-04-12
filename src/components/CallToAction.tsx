
import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Clock, Zap } from "lucide-react";
import { Link } from "react-router-dom";

const CallToAction = () => {
  return (
    <section className="w-full py-12 md:py-20 bg-gradient-to-r from-primary/10 to-secondary/10">
      <div className="container px-4 md:px-6 mx-auto max-w-5xl">
        <div className="flex flex-col items-center text-center space-y-6">
          <div className="space-y-3 max-w-3xl">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tighter">
              Take the First Step Towards Peace of Mind
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground">
              Skin changes can be concerning. Get a helpful first assessment in seconds, no appointment needed.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 my-8">
            <div className="flex flex-col items-center gap-2 p-4">
              <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                <Zap className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-medium">Instant Analysis</h3>
              <p className="text-sm text-muted-foreground">Powered by advanced ChatGPT technology</p>
            </div>
            
            <div className="flex flex-col items-center gap-2 p-4">
              <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center">
                <Shield className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="font-medium">100% Private</h3>
              <p className="text-sm text-muted-foreground">Your health data stays with you</p>
            </div>
            
            <div className="flex flex-col items-center gap-2 p-4">
              <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
                <Clock className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="font-medium">Fast & Easy</h3>
              <p className="text-sm text-muted-foreground">Results in seconds, not weeks</p>
            </div>
            
            <div className="flex flex-col items-center gap-2 p-4">
              <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center">
                <svg
                  className="h-6 w-6 text-purple-600"
                  fill="none"
                  height="24"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
                </svg>
              </div>
              <h3 className="font-medium">Free to Use</h3>
              <p className="text-sm text-muted-foreground">No cost, just create an account</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="bg-primary hover:bg-primary/90 animate-pulse">
              <Link to="#skin-analysis-tool" className="flex items-center">
                Try It Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button variant="outline" size="lg">
              Learn More
            </Button>
          </div>

          <div className="mt-8 max-w-2xl text-center">
            <p className="text-muted-foreground">
              While our tool can provide helpful insights, it's designed to complement—not replace—professional 
              medical advice. Early detection matters, and this is your first step towards taking control of your skin health.
            </p>
            <p className="mt-4 text-primary font-medium">
              Because when it comes to your health, knowledge is power. Start your journey today.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
