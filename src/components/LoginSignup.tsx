
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useToast } from "@/components/ui/use-toast";

const formSchema = z.object({
  email: z.string().email({ message: "Please enter a valid email address" }),
  password: z.string().min(8, { message: "Password must be at least 8 characters" }),
});

const LoginSignup = () => {
  const [isLogin, setIsLogin] = useState(true);
  const { toast } = useToast();
  
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    toast({
      title: isLogin ? "Login successful!" : "Account created!",
      description: isLogin 
        ? "Welcome back to SkinWhisper." 
        : "Check your email to confirm your account.",
    });
    console.log(values);
  };

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-white to-primary/5">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2 max-w-3xl">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Your Health Journey Begins Here
            </h1>
            <p className="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mx-auto max-w-[700px]">
              Sign up for free to access personalized skin health insights and take a proactive approach to your wellbeing.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-12 items-start max-w-5xl mx-auto my-12">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h2 className="text-2xl font-bold">Why Create an Account?</h2>
              <p className="text-gray-500">
                Your account helps us provide personalized insights while keeping your information secure.
              </p>
            </div>
            
            <ul className="space-y-4 text-left">
              <li className="flex items-start gap-2">
                <div className="h-6 w-6 rounded-full bg-primary/20 flex items-center justify-center mt-1">
                  <svg
                    className="h-4 w-4 text-primary"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                </div>
                <div>
                  <span className="font-medium">Your privacy is our priority</span>
                  <p className="text-sm text-gray-500 mt-1">
                    We never store or share your health information without your explicit consent.
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <div className="h-6 w-6 rounded-full bg-primary/20 flex items-center justify-center mt-1">
                  <svg
                    className="h-4 w-4 text-primary"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                </div>
                <div>
                  <span className="font-medium">Completely free to use</span>
                  <p className="text-sm text-gray-500 mt-1">
                    All of our AI-powered skin health analysis tools are available at no cost.
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <div className="h-6 w-6 rounded-full bg-primary/20 flex items-center justify-center mt-1">
                  <svg
                    className="h-4 w-4 text-primary"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                </div>
                <div>
                  <span className="font-medium">Track your progress</span>
                  <p className="text-sm text-gray-500 mt-1">
                    Save your results and monitor changes in your skin health over time.
                  </p>
                </div>
              </li>
            </ul>

            <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
              <p className="text-sm text-blue-800">
                <span className="font-medium">A helpful reminder:</span> SkinWhisper is designed to support—not replace—professional medical advice. We're here to help you be proactive about your skin health.
              </p>
            </div>
          </div>
          
          <Card className="shadow-lg border-0">
            <CardHeader>
              <CardTitle>{isLogin ? "Welcome Back" : "Create Your Account"}</CardTitle>
              <CardDescription>
                {isLogin 
                  ? "Sign in to access your personalized skin health insights." 
                  : "Join thousands of users taking control of their skin health."}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input placeholder="you@example.com" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="password"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Password</FormLabel>
                        <FormControl>
                          <Input type="password" placeholder="••••••••" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button type="submit" className="w-full bg-primary hover:bg-primary/90">
                    {isLogin ? "Sign In" : "Create Account"}
                  </Button>
                </form>
              </Form>
            </CardContent>
            <CardFooter className="flex flex-col space-y-4 pt-0">
              <div className="text-sm text-gray-500 text-center">
                {isLogin ? "Don't have an account?" : "Already have an account?"}
                <button
                  onClick={() => setIsLogin(!isLogin)} 
                  className="text-primary hover:underline font-medium ml-1"
                >
                  {isLogin ? "Sign up for free" : "Sign in"}
                </button>
              </div>
              <p className="text-xs text-gray-400 text-center">
                By creating an account, you agree to our Terms of Service and Privacy Policy.
                Your personal health data is never stored without your consent.
              </p>
            </CardFooter>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default LoginSignup;
