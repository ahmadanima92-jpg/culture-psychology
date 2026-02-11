import { useState } from 'react';
import { Link } from 'wouter';
import { Menu, X } from 'lucide-react';

/**
 * Navigation Component
 * Design Philosophy: Sustainable Modernity
 * - Clean, modern navigation bar with environmental color scheme
 * - Responsive design with mobile menu
 * - Smooth transitions and hover effects
 */
export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: 'الرئيسية', href: '/' },
    { label: 'الجغرافيا والبيئة', href: '/geography' },
    { label: 'علوم الأرض', href: '/geology' },
    { label: 'المواطنة الرقمية', href: '/digital-citizenship' },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-border shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/">
            <div className="flex items-center gap-2 cursor-pointer">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">🌍</span>
              </div>
              <span className="font-bold text-lg text-primary hidden sm:inline">البيئة والتقنية</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href}>
                <a className="text-foreground hover:text-primary transition-colors duration-200 font-medium">
                  {item.label}
                </a>
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 hover:bg-muted rounded-lg transition-colors"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-border pt-4 space-y-3">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href}>
                <a
                  onClick={() => setIsOpen(false)}
                  className="block px-4 py-2 text-foreground hover:bg-primary hover:text-white rounded-lg transition-colors"
                >
                  {item.label}
                </a>
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}
