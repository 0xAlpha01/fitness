import { ArrowRight, Dumbbell, Menu, X } from "lucide-react";
import { useState } from "react";
import navigationItems from "../../data/navigation.js";
import Button from "../ui/Button.jsx";

export default function Header({ onJoin }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleJoin = () => {
    setMenuOpen(false);
    onJoin();
  };

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="topbar">
      <a className="brand" href="#home" aria-label="Fitness Gym home">
        <span className="brand-mark">
          <Dumbbell size={29} strokeWidth={2.7} />
        </span>
        <span>
          <b>Fitness</b> GYM
        </span>
      </a>
      <button
        className="menu-toggle"
        type="button"
        aria-label={menuOpen ? "Close navigation" : "Open navigation"}
        aria-expanded={menuOpen}
        aria-controls="main-navigation"
        onClick={() => setMenuOpen((isOpen) => !isOpen)}
      >
        {menuOpen ? <X /> : <Menu />}
      </button>
      <nav
        className={menuOpen ? "nav-links open" : "nav-links"}
        id="main-navigation"
      >
        {navigationItems.map(([label, href], index) => (
          <a
            key={label}
            className={index === 0 ? "active" : ""}
            href={href}
            onClick={closeMenu}
          >
            {label}
          </a>
        ))}
        <Button
          className="button-small nav-join"
          icon={ArrowRight}
          iconSize={15}
          onClick={handleJoin}
        >
          Join Now
        </Button>
      </nav>
    </header>
  );
}
