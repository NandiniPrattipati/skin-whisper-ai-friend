
import { MessageSquare, Image, Shield, HeartPulse } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

const Features = () => {
  return (
    <section className="w-full py-12 md:py-24 bg-muted/50">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="text-center max-w-[800px] mx-auto mb-10 md:mb-16">
          <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl">
            How SkinWhisper Helps You Stay Proactive
          </h2>
          <p className="mt-4 text-gray-500 md:text-xl">
            Our AI-powered tool makes it easy to get helpful insights about your skin concerns, encouraging regular checks and early detection.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="border-none shadow-md">
            <CardHeader className="pb-2">
              <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center mb-3">
                <MessageSquare className="h-6 w-6 text-primary" />
              </div>
              <CardTitle>Describe Your Concern</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base">
                Simply explain your skin concerns in your own words, and our AI will analyze your description.
              </CardDescription>
            </CardContent>
          </Card>
          
          <Card className="border-none shadow-md">
            <CardHeader className="pb-2">
              <div className="w-12 h-12 rounded-lg bg-secondary/20 flex items-center justify-center mb-3">
                <Image className="h-6 w-6 text-secondary" />
              </div>
              <CardTitle>Upload Images</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base">
                Share image links of your skin for more accurate analysis and personalized feedback.
              </CardDescription>
            </CardContent>
          </Card>
          
          <Card className="border-none shadow-md">
            <CardHeader className="pb-2">
              <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center mb-3">
                <HeartPulse className="h-6 w-6 text-primary" />
              </div>
              <CardTitle>Get Helpful Insights</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base">
                Receive information about potential concerns and guidance on when to seek professional care.
              </CardDescription>
            </CardContent>
          </Card>
          
          <Card className="border-none shadow-md">
            <CardHeader className="pb-2">
              <div className="w-12 h-12 rounded-lg bg-secondary/20 flex items-center justify-center mb-3">
                <Shield className="h-6 w-6 text-secondary" />
              </div>
              <CardTitle>Complete Privacy</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base">
                Your data remains private and secure. We never share your information without your explicit consent.
              </CardDescription>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Features;
