import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Home, Rocket, Lightbulb, FileCode, BookOpen } from "lucide-react";

const navigation = [
  { name: "Home", href: "/", icon: Home },
  { name: "Getting Started", href: "/getting-started", icon: Rocket },
  { name: "Core Concepts", href: "/core-concepts", icon: Lightbulb },
  { name: "Use Cases", href: "/use-cases", icon: FileCode },
  { name: "API Reference", href: "/api", icon: BookOpen },
];

function Sidebar() {
  const location = useLocation();

  return (
    <div className="fixed w-64 h-[calc(100vh-4rem)] top-16 bg-background border-r">
      <aside className="h-full pt-8 pb-4">
        <div className="px-3 pb-8">
          <div className="space-y-1">
            <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight">
              Documentation
            </h2>
            <div className="space-y-1">
              {navigation.map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.name}>
                    <Link
                      to={item.href}
                      className={cn(
                        "group flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium hover:bg-accent transition-colors",
                        location.pathname === item.href
                          ? "bg-primary/10 text-primary"
                          : "text-muted-foreground hover:text-foreground"
                      )}
                    >
                      <Icon className="w-4 h-4" />
                      {item.name}
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </aside>
    </div>
  );
}

export default Sidebar;
