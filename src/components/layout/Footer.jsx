import { Dumbbell } from "lucide-react";
import navigationItems from "../../data/navigation.js";

export default function Footer() {
  return (
    <footer className="footer" id="contact">
      <div className="container footer-main">
        <div>
          <a className="brand" href="#home">
            <span className="brand-mark">
              <Dumbbell size={27} />
            </span>
            <span>
              <b>Fitness</b> GYM
            </span>
          </a>
          <p className="footer-tagline">Stronger today. Better tomorrow.</p>
        </div>
        <div className="footer-links">
          {navigationItems.map(([label, href]) => (
            <a key={label} href={href}>
              {label}
            </a>
          ))}
        </div>
        <div className="socials">
          <a href="#contact" aria-label="Instagram">
            <span className="social-mark">IG</span>
          </a>
          <a href="#contact" aria-label="Facebook">
            <span className="social-mark">FB</span>
          </a>
          <a href="#contact" aria-label="YouTube">
            <span className="social-mark">YT</span>
          </a>
        </div>
      </div>
      <div className="container footer-bottom">
        <span>© {new Date().getFullYear()} Fitness Gym. Demo concept.</span>
        <span>Built for stronger beginnings.</span>
      </div>
    </footer>
  );
}
