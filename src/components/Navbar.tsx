import { Vault, Github, Menu } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

function Navbar() {
  return (
    <nav className="fixed w-full z-50 backdrop-blur-sm bg-background/80 border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16">
        <div className="flex justify-between items-center h-full">
          <div className="flex items-center space-x-3">
            <Vault className="w-8 h-8 text-primary" />
            <Link to="/" className="flex items-center">
              <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/60">
                StateVault
              </span>
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-6">
            <Link
              to="/docs"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Documentation
            </Link>
            <Link
              to="/examples"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Examples
            </Link>
            <div>
              <Button variant="outline" size="sm" className="gap-2">
                <Github className="w-4 h-4" />
                <a
                  href="https://github.com/RaviTeja884781/StateVault"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium"
                >
                  GitHub
                </a>
              </Button>
            </div>
          </div>

          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
