
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="w-full py-4 px-4 md:px-8 border-b">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
            <span className="text-white font-bold text-lg">SW</span>
          </div>
          <span className="font-bold text-xl">SkinWhisper</span>
        </div>
        
        <nav className="hidden md:flex items-center gap-6">
          <Link to="/" className="text-sm font-medium hover:text-primary transition-colors">
            Home
          </Link>
          <Link to="/about" className="text-sm font-medium hover:text-primary transition-colors">
            About
          </Link>
          <Link to="/how-it-works" className="text-sm font-medium hover:text-primary transition-colors">
            How It Works
          </Link>
          <Link to="/faq" className="text-sm font-medium hover:text-primary transition-colors">
            FAQ
          </Link>
        </nav>
        
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm">
            Log In
          </Button>
          <Button size="sm" className="bg-primary hover:bg-primary/90">
            Sign Up
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
