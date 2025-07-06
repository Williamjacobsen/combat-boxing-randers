import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import "./navbar.css";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  type NavLink = { name: string; href: string };
  const navLinks: NavLink[] = [
    { name: "Træningstider", href: "#Træningstider" },
    { name: "Om os", href: "#OmOs" },
  ];

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
  }, [isOpen]);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-brand">
          <a href={"#"}>Combat Boxing Randers</a>
        </div>
        <div className="navbar-links">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="navbar-link">
              {link.name}
            </a>
          ))}
        </div>
        <div className="mobile-menu-button">
          <button
            aria-label={isOpen ? "Luk menu" : "Åbn menu"}
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="mobile-menu">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="mobile-link"
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
