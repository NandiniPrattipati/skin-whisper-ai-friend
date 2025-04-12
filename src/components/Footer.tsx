
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-background border-t py-8 px-4 md:px-6">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                <span className="text-white font-bold text-sm">SW</span>
              </div>
              <span className="font-bold text-lg">SkinWhisper</span>
            </div>
            <p className="text-sm text-gray-500">
              Early detection tools for skin health, powered by AI.
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold mb-3">Product</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/features" className="text-gray-500 hover:text-primary">Features</Link></li>
              <li><Link to="/how-it-works" className="text-gray-500 hover:text-primary">How It Works</Link></li>
              <li><Link to="/pricing" className="text-gray-500 hover:text-primary">Pricing</Link></li>
              <li><Link to="/faq" className="text-gray-500 hover:text-primary">FAQ</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-3">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/blog" className="text-gray-500 hover:text-primary">Blog</Link></li>
              <li><Link to="/skin-health" className="text-gray-500 hover:text-primary">Skin Health</Link></li>
              <li><a href="#" className="text-gray-500 hover:text-primary">Community</a></li>
              <li><a href="#" className="text-gray-500 hover:text-primary">Support</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-3">Company</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/about" className="text-gray-500 hover:text-primary">About</Link></li>
              <li><Link to="/privacy" className="text-gray-500 hover:text-primary">Privacy Policy</Link></li>
              <li><Link to="/terms" className="text-gray-500 hover:text-primary">Terms of Service</Link></li>
              <li><Link to="/contact" className="text-gray-500 hover:text-primary">Contact</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t mt-8 pt-8 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-xs text-gray-500">
            &copy; {new Date().getFullYear()} SkinWhisper. All rights reserved.
          </p>
          <p className="text-xs text-gray-500 mt-2 sm:mt-0">
            SkinWhisper is not a substitute for professional medical advice, diagnosis, or treatment.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
