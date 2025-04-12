
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Check } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

const SignUpForm = () => {
  const [email, setEmail] = useState("");
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      toast({
        title: "Sign up successful!",
        description: "Check your email to complete your registration.",
      });
      setEmail("");
    }
  };

  return (
    <section className="w-full py-12 md:py-24">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
          <div className="space-y-4">
            <div>
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
                Start Your Skin Health Journey Today
              </h2>
              <p className="mt-4 text-gray-500 md:text-xl">
                Join thousands of users who are taking a proactive approach to their skin health. It's free, simple, and could make all the difference.
              </p>
            </div>
            
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center">
                  <Check className="h-3 w-3 text-primary" />
                </div>
                <p>Free to use after sign-up</p>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center">
                  <Check className="h-3 w-3 text-primary" />
                </div>
                <p>Powered by advanced AI technology</p>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center">
                  <Check className="h-3 w-3 text-primary" />
                </div>
                <p>No medical data shared without consent</p>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center">
                  <Check className="h-3 w-3 text-primary" />
                </div>
                <p>Not a replacement for professional medical advice</p>
              </div>
            </div>
          </div>
          
          <Card className="border-none shadow-xl">
            <CardHeader>
              <CardTitle>Create Your Free Account</CardTitle>
              <CardDescription>
                Sign up to start using SkinWhisper's AI-powered analysis tools.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Input
                    id="email"
                    placeholder="Enter your email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <Button type="submit" className="w-full bg-primary hover:bg-primary/90">
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </form>
            </CardContent>
            <CardFooter className="text-xs text-muted-foreground text-center">
              By signing up, you agree to our Terms of Service and Privacy Policy.
              <br />
              SkinWhisper is not a substitute for professional medical advice.
            </CardFooter>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default SignUpForm;
