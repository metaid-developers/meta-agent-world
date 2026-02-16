import { useState } from "react";
import { Menu, X } from "lucide-react";
import metabotLogo from "@/assets/metabot-logo.png";

const navItems = [
  { label: "介绍", href: "#hero" },
  { label: "如何开始", href: "#how-to-start" },
  { label: "常见问题", href: "#faq" },
  {
    label: "支持社区（链上）",
    href: "https://www.idchat.io/chat/talk/channels/public/91d644ee8482b1738fc29ce470b30ce81b7f1a87b405e02f7e38344289d1b033i0",
    external: true,
  },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleClick = (href: string, external?: boolean) => {
    setMobileOpen(false);
    if (external) {
      window.open(href, "_blank");
      return;
    }
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:px-8">
        {/* Logo */}
        <a href="#hero" onClick={() => handleClick("#hero")} className="flex items-center gap-2">
          <img src={metabotLogo} alt="MetaBot" className="h-8 w-8" />
          <span className="text-lg font-bold text-foreground">MetaBot</span>
        </a>

        {/* Desktop nav */}
        <div className="hidden items-center gap-6 md:flex">
          {navItems.map((item) => (
            <button
              key={item.label}
              onClick={() => handleClick(item.href, item.external)}
              className="text-sm text-muted-foreground transition-colors hover:text-primary"
            >
              {item.label}
            </button>
          ))}
          <a
            href="https://github.com/metaid-developers/metabot-skills"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground transition-colors hover:text-primary"
          >
            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
            </svg>
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="text-foreground md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="border-t border-border bg-background px-4 pb-4 md:hidden">
          {navItems.map((item) => (
            <button
              key={item.label}
              onClick={() => handleClick(item.href, item.external)}
              className="block w-full py-3 text-left text-sm text-muted-foreground transition-colors hover:text-primary"
            >
              {item.label}
            </button>
          ))}
          <a
            href="https://github.com/metaid-developers/metabot-skills"
            target="_blank"
            rel="noopener noreferrer"
            className="block py-3 text-sm text-muted-foreground transition-colors hover:text-primary"
          >
            GitHub
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
