
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert"; 
import { MessageSquare, Image, AlertTriangle, Info } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

const SkinAnalysisTool = () => {
  const [description, setDescription] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (type: "description" | "image") => {
    setIsAnalyzing(true);
    
    // Simulated analysis - in a real app, this would call an API
    setTimeout(() => {
      setIsAnalyzing(false);
      toast({
        title: "Analysis Complete",
        description: "Your results are ready. In a complete implementation, we would show detailed feedback here.",
      });
    }, 2000);
  };

  return (
    <section id="skin-analysis-tool" className="w-full py-12 md:py-20 bg-white">
      <div className="container px-4 md:px-6 mx-auto max-w-4xl">
        <div className="mb-10 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Skin Health Analysis Tool</h2>
          <p className="text-gray-600 md:text-lg max-w-2xl mx-auto">
            Get instant feedback about your skin concerns using our AI-powered analysis tool.
            Simply describe your symptoms or share an image.
          </p>
        </div>

        <Alert className="mb-6 bg-blue-50 border-blue-100">
          <Info className="h-5 w-5 text-blue-600" />
          <AlertTitle className="text-blue-800">How This Tool Works</AlertTitle>
          <AlertDescription className="text-blue-700">
            This tool uses ChatGPT to analyze your input and provide feedback based on 
            available medical research and pattern recognition. While it can help identify 
            potential concerns, it is not a substitute for professional medical diagnosis.
            Always consult a healthcare provider for proper evaluation.
          </AlertDescription>
        </Alert>

        <Tabs defaultValue="describe" className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-6">
            <TabsTrigger value="describe" className="flex items-center gap-2">
              <MessageSquare className="h-4 w-4" />
              <span>Describe Symptoms</span>
            </TabsTrigger>
            <TabsTrigger value="image" className="flex items-center gap-2">
              <Image className="h-4 w-4" />
              <span>Share Image</span>
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="describe" className="space-y-4">
            <div className="space-y-2">
              <h3 className="font-medium text-lg">Describe Your Skin Concern</h3>
              <p className="text-gray-500">
                Tell us about the appearance, location, and any changes you've noticed. The more 
                details you provide, the more helpful our analysis can be.
              </p>
              <Textarea 
                placeholder="Example: I have a small dark mole on my arm that has been changing shape over the last month. It's about 6mm across and has irregular edges."
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="min-h-[150px]"
              />
            </div>
            <Button 
              onClick={() => handleSubmit("description")} 
              disabled={!description.trim() || isAnalyzing}
              className="w-full md:w-auto"
            >
              {isAnalyzing ? "Analyzing..." : "Analyze Description"}
            </Button>
          </TabsContent>
          
          <TabsContent value="image" className="space-y-4">
            <div className="space-y-2">
              <h3 className="font-medium text-lg">Share an Image</h3>
              <p className="text-gray-500">
                Paste a link to an image of your skin concern. For the most accurate results, 
                ensure the image is clear, well-lit, and focused on the area of concern.
              </p>
              <Input 
                placeholder="Paste image URL here"
                value={imageUrl}
                onChange={(e) => setImageUrl(e.target.value)}
              />
              <p className="text-xs text-muted-foreground">
                Image links only - direct file uploads coming soon.
              </p>
            </div>
            <Button 
              onClick={() => handleSubmit("image")} 
              disabled={!imageUrl.trim() || isAnalyzing}
              className="w-full md:w-auto"
            >
              {isAnalyzing ? "Analyzing..." : "Analyze Image"}
            </Button>
          </TabsContent>
        </Tabs>

        <div className="mt-8 p-4 bg-amber-50 border border-amber-100 rounded-lg flex gap-3">
          <AlertTriangle className="h-5 w-5 text-amber-600 flex-shrink-0 mt-0.5" />
          <div>
            <p className="text-amber-800 font-medium">Important Health Reminder</p>
            <p className="text-amber-700 text-sm mt-1">
              While our AI tool can help identify potential concerns, it should never replace 
              professional medical advice. If you're worried about any skin changes, 
              please consult a healthcare provider promptly.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkinAnalysisTool;
