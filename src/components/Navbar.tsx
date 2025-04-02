
import { useState, useEffect } from "react";
import { Link, useLocation, useNavigationType } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  // Check if we're in a router context
  let location;
  let isRouterAvailable = false;
  
  try {
    location = useLocation();
    isRouterAvailable = true;
  } catch (e) {
    // We're not in a router context, use a default value
    location = { pathname: '/' };
  }

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const scrollToSection = (sectionId: string) => {
    setIsMenuOpen(false);
    
    // If we're not on the home page, navigate to home first
    if (isRouterAvailable && location.pathname !== '/') {
      window.location.href = `/#${sectionId}`;
      return;
    }
    
    // If sectionId is "beranda", scroll to top
    if (sectionId === "beranda") {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
      return;
    }
    
    const element = document.getElementById(sectionId);
    if (element) {
      const yOffset = -80; // header height + some padding
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      
      window.scrollTo({
        top: y,
        behavior: 'smooth'
      });
    }
  };

  const navLinks = [
    { name: "Beranda", href: "/#beranda", action: () => scrollToSection("beranda") },
    { name: "Fitur", href: "/#fitur", action: () => scrollToSection("fitur") },
    { name: "Tema", href: "/#tema", action: () => scrollToSection("tema") },
    { name: "Cara Kerja", href: "/#cara-kerja", action: () => scrollToSection("cara-kerja") },
    { name: "Testimonial", href: "/#testimonial", action: () => scrollToSection("testimonial") },
    { name: "FAQ", href: "/#faq", action: () => scrollToSection("faq") },
  ];

  // Helper to create safe links based on whether we're in a Router context
  const SafeLink = ({ 
    to, 
    children, 
    className = "", 
    onClick 
  }: { 
    to: string, 
    children: React.ReactNode, 
    className?: string,
    onClick?: () => void 
  }) => {
    if (isRouterAvailable) {
      return <Link to={to} className={className} onClick={onClick}>{children}</Link>;
    }
    return <a href={to} className={className} onClick={onClick}>{children}</a>;
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/90 backdrop-blur-md shadow-sm py-3"
          : "bg-white py-5"
      }`}
    >
      <div className="container flex items-center justify-between">
        <SafeLink to="/" className="flex items-center">
          <h1 className="text-xl font-bold bg-gradient-to-r from-primary to-amber-500 bg-clip-text text-transparent">
            Youvitation
          </h1>
        </SafeLink>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={link.action}
              className="text-sm font-medium text-gray-700 hover:text-amber-700 transition-colors"
            >
              {link.name}
            </button>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-4">
          <Button asChild variant="outline" size="sm" className="bg-gradient-to-r from-amber-400 to-amber-500 border-none text-white hover:opacity-90">
            <SafeLink to="/admin" onClick={() => setIsMenuOpen(false)}>Masuk</SafeLink>
          </Button>
          <Button asChild size="sm" className="bg-gradient-to-r from-primary to-purple-600 hover:opacity-90">
            <SafeLink to="/admin/create" onClick={() => setIsMenuOpen(false)}>Buat Undangan</SafeLink>
          </Button>
        </div>

        {/* Mobile menu button */}
        <button className="md:hidden" onClick={toggleMenu}>
          {isMenuOpen ? (
            <X className="h-6 w-6 text-gray-700" />
          ) : (
            <Menu className="h-6 w-6 text-gray-700" />
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg py-4">
          <div className="container flex flex-col gap-4">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={link.action}
                className="text-sm font-medium text-gray-700 hover:text-amber-700 transition-colors py-2 text-left"
              >
                {link.name}
              </button>
            ))}
            <div className="flex flex-col gap-2 mt-2">
              <Button asChild variant="outline" size="sm" className="bg-gradient-to-r from-amber-400 to-amber-500 border-none text-white hover:opacity-90">
                <SafeLink to="/admin" onClick={() => setIsMenuOpen(false)}>Masuk</SafeLink>
              </Button>
              <Button asChild size="sm" className="bg-gradient-to-r from-primary to-purple-600 hover:opacity-90">
                <SafeLink to="/admin/create" onClick={() => setIsMenuOpen(false)}>Buat Undangan</SafeLink>
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
