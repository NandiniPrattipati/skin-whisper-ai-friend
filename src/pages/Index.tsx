
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import HowItWorks from "@/components/HowItWorks";
import SkinAnalysisTool from "@/components/SkinAnalysisTool";
import SignUpForm from "@/components/SignUpForm";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Hero />
        <div className="max-w-7xl mx-auto px-4 py-12 md:py-16">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl">
              Why SkinWhisper?
            </h2>
            <p className="mt-4 text-lg text-gray-500 max-w-3xl mx-auto">
              Early detection is key when it comes to skin health. SkinWhisper makes it easier to monitor 
              changes, understand potential concerns, and know when to seek professional care.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <div className="text-center p-6 rounded-lg bg-primary/5">
              <div className="w-12 h-12 bg-primary/20 rounded-full mx-auto flex items-center justify-center mb-4">
                <svg
                  className="h-6 w-6 text-primary"
                  fill="none"
                  height="24"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  width="24"
                >
                  <path d="M21 7v6h-6" />
                  <path d="M3 17a9 9 0 0 1 9-9 9 9 0 0 1 6 2.3l3 2.7" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">Early Detection</h3>
              <p className="text-gray-500">
                Identify potential issues before they become serious concerns.
              </p>
            </div>
            
            <div className="text-center p-6 rounded-lg bg-secondary/5">
              <div className="w-12 h-12 bg-secondary/20 rounded-full mx-auto flex items-center justify-center mb-4">
                <svg
                  className="h-6 w-6 text-secondary"
                  fill="none"
                  height="24"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  width="24"
                >
                  <path d="M12 2H2v10l9.29 9.29c.94.94 2.48.94 3.42 0l6.58-6.58c.94-.94.94-2.48 0-3.42L12 2Z" />
                  <path d="M7 7h.01" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">Accessible</h3>
              <p className="text-gray-500">
                Free to use with an account, making skin health monitoring available to everyone.
              </p>
            </div>
            
            <div className="text-center p-6 rounded-lg bg-accent/5">
              <div className="w-12 h-12 bg-accent/20 rounded-full mx-auto flex items-center justify-center mb-4">
                <svg
                  className="h-6 w-6 text-accent"
                  fill="none"
                  height="24"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  width="24"
                >
                  <path d="M20.91 8.84 8.56 2.23a1.93 1.93 0 0 0-1.81 0L3.1 4.13a2.12 2.12 0 0 0-.05 3.69l12.22 6.93a2 2 0 0 0 1.94 0L21 12.51a2.12 2.12 0 0 0-.09-3.67Z" />
                  <path d="m3.09 8.84 12.35-6.61a1.93 1.93 0 0 1 1.81 0l3.65 1.9a2.12 2.12 0 0 1 .1 3.69L8.73 14.75a2 2 0 0 1-1.94 0L3 12.51a2.12 2.12 0 0 1 .09-3.67Z" />
                  <line x1="12" x2="12" y1="22" y2="13" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">Educational</h3>
              <p className="text-gray-500">
                Learn about skin health while getting personalized insights about your concerns.
              </p>
            </div>
          </div>
        </div>
        <HowItWorks />
        <Features />
        <SkinAnalysisTool />
        <SignUpForm />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
