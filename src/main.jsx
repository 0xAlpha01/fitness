import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import {
  ArrowRight, Menu, X, Dumbbell, UserRound, Users, Clock3, Play,
  Check
} from "lucide-react";
import "./styles.css";

const classes = [
  { title: "Strength Training", desc: "Build muscle, increase power, get stronger.", image: "photo-1583454110551-21f2fa2afe61", tag: "BUILD STRENGTH" },
  { title: "HIIT", desc: "Burn calories, boost endurance, see results faster.", image: "photo-1517836357463-d25dfeac3438", tag: "HIGH INTENSITY" },
  { title: "Yoga", desc: "Improve flexibility, reduce stress, find balance.", image: "photo-1544367567-0f2fcb009e0b", tag: "MIND & BODY" },
  { title: "Cardio", desc: "Boost heart health and build endurance.", image: "photo-1534438327276-14e5300c3a48", tag: "GET MOVING" },
];
const plans = [
  { name: "Basic", price: "₦50,000", desc: "A strong start to your fitness journey.", features: ["Gym access (7 days)", "Basic locker", "Community support"] },
  { name: "Premium", price: "₦80,000", desc: "More coaching. More progress.", popular: true, features: ["Gym access (7 days)", "Personal trainer (1 session/week)", "Locker + towel service", "Group classes"] },
  { name: "VIP", price: "₦120,000", desc: "The complete fitness experience.", features: ["All Premium features", "Unlimited group classes", "Nutrition consultation", "Priority booking"] },
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState("Premium");
  const [modalOpen, setModalOpen] = useState(false);
  const [sent, setSent] = useState(false);

  const openJoin = (plan = "Premium") => {
    setSelectedPlan(plan);
    setSent(false);
    setModalOpen(true);
    setMenuOpen(false);
  };

  const navItems = [["Home", "#home"], ["About", "#about"], ["Classes", "#classes"], ["Membership", "#membership"], ["Gallery", "#gallery"], ["Contact", "#contact"]];

  return (
    <div className="site-shell">
      <header className="topbar">
        <a className="brand" href="#home" aria-label="Fitness Gym home">
          <span className="brand-mark"><Dumbbell size={29} strokeWidth={2.7} /></span>
          <span><b>Fitness</b> GYM</span>
        </a>
        <button className="menu-toggle" aria-label="Toggle navigation" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X /> : <Menu />}
        </button>
        <nav className={menuOpen ? "nav-links open" : "nav-links"}>
          {navItems.map(([label, href], i) => <a key={label} className={i === 0 ? "active" : ""} href={href} onClick={() => setMenuOpen(false)}>{label}</a>)}
          <button className="button button-small nav-join" onClick={() => openJoin()}>Join Now <ArrowRight size={15} /></button>
        </nav>
      </header>

      <main>
        <section className="hero" id="home">
          <div className="hero-image" />
          <div className="hero-shade" />
          <div className="container hero-content">
            <p className="eyebrow"><span /> STRONGER · HEALTHIER · HAPPIER</p>
            <h1>Your Fitness<br /><em>Journey Starts Here</em></h1>
            <p className="hero-copy">At Fitness Gym, we're more than just a gym — we're a community built to help you become the best version of yourself. Whether you're a beginner or a pro, we've got the space, support, and programs to help you reach your goals.</p>
            <div className="hero-actions">
              <button className="button" onClick={() => openJoin()}>Get Started <ArrowRight size={18} /></button>
              <a className="tour-link" href="#about"><span className="play-icon"><Play size={14} fill="currentColor" /></span> Discover the gym</a>
            </div>
            <div className="hero-proof"><div className="proof-avatars"><span>J</span><span>A</span><span>M</span></div><p><b>Good energy. Real progress.</b><br />Your fitness community starts here.</p></div>
          </div>
          <div className="hero-index"><span>01</span><i /> FITNESS FOR EVERY BODY</div>
        </section>

        <section className="features">
          <div className="container feature-grid">
            <Feature icon={<Dumbbell />} title="Modern Equipment" text="Well-maintained equipment for every workout." />
            <Feature icon={<UserRound />} title="Certified Trainers" text="Expert guidance and personalized support." />
            <Feature icon={<Users />} title="Supportive Community" text="Train with people who keep you motivated." />
            <Feature icon={<Clock3 />} title="Flexible Hours" text="A schedule that works around your life." />
          </div>
        </section>

        <section className="about section-pad" id="about">
          <div className="container about-grid">
            <div className="about-photo photo-frame" id="gallery">
              <img src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1200&q=85" alt="Modern gym interior with strength training equipment" />
              <div className="photo-label"><Dumbbell size={18} /><span>BUILT FOR YOUR NEXT LEVEL</span></div>
              <div className="photo-number">Fitness<span> / GYM</span></div>
            </div>
            <div className="about-copy">
              <p className="section-kicker">ABOUT Fitness GYM</p>
              <h2>More Than a Gym.<br /><em>It's a Lifestyle.</em></h2>
              <p>We believe fitness should feel challenging, rewarding, and welcoming. Our space is designed for people at every stage — from your very first workout to your next personal best.</p>
              <p>Train with purpose, find your people, and build habits that last beyond the gym floor.</p>
              <a className="text-link" href="#classes">Explore our approach <ArrowRight size={17} /></a>
              <div className="about-stats"><div><b>01</b><span>YOUR GOALS</span></div><div><b>100%</b><span>YOUR JOURNEY</span></div><div><b>∞</b><span>YOUR POTENTIAL</span></div></div>
            </div>
          </div>
        </section>

        <section className="classes section-pad" id="classes">
          <div className="container">
            <div className="section-heading">
              <div><p className="section-kicker">FIND YOUR FLOW</p><h2>Find the Right Workout <em>for You</em></h2></div>
              <a className="text-link desktop-link" href="#membership">Find your plan <ArrowRight size={16} /></a>
            </div>
            <div className="class-grid">
              {classes.map((item, i) => <article className="class-card" key={item.title}>
                <div className="class-image"><img src={`https://images.unsplash.com/${item.image}?auto=format&fit=crop&w=800&q=80`} alt={item.title} loading="lazy" /><span>{item.tag}</span></div>
                <div className="class-info"><div><h3>{item.title}</h3><p>{item.desc}</p></div><button aria-label={`Enquire about ${item.title}`} onClick={() => openJoin()}><ArrowRight size={17} /></button></div>
              </article>)}
            </div>
          </div>
        </section>

        <section className="membership section-pad" id="membership">
          <div className="container membership-layout">
            <div className="membership-intro"><p className="section-kicker">MEMBERSHIP</p><h2>Choose Your <em>Plan</em></h2><p>Flexible membership options to fit your lifestyle and goals. Start where you are — we'll help you grow.</p><div className="membership-note"><Check size={16} /> Simple options. No pressure.</div></div>
            <div className="plan-grid">
              {plans.map(plan => <article className={`plan-card ${plan.popular ? "featured" : ""}`} key={plan.name}>
                {plan.popular && <span className="popular-label">MOST POPULAR</span>}
                <p className="plan-name">{plan.name}</p><p className="plan-desc">{plan.desc}</p>
                <div className="price">{plan.price}<small> / month</small></div>
                <ul>{plan.features.map(feature => <li key={feature}><Check size={15} />{feature}</li>)}</ul>
                <button className={plan.popular ? "button plan-button" : "outline-button plan-button"} onClick={() => openJoin(plan.name)}>Choose {plan.name} <ArrowRight size={15} /></button>
              </article>)}
            </div>
          </div>
          <p className="price-disclaimer">Demo pricing shown for presentation. Confirm final prices and benefits with the gym.</p>
        </section>

        <section className="cta-strip">
          <div className="container cta-inner"><div><p className="section-kicker">YOUR NEXT CHAPTER STARTS NOW</p><h2>Ready to show up for <em>yourself?</em></h2></div><button className="button" onClick={() => openJoin()}>Become a Member <ArrowRight size={17} /></button></div>
        </section>
      </main>

      <footer className="footer" id="contact">
        <div className="container footer-main">
          <div><a className="brand" href="#home"><span className="brand-mark"><Dumbbell size={27} /></span><span><b>Fitness</b> GYM</span></a><p className="footer-tagline">Stronger today. Better tomorrow.</p></div>
          <div className="footer-links">{navItems.map(([label, href]) => <a key={label} href={href}>{label}</a>)}</div>
          <div className="socials"><a href="#contact" aria-label="Instagram"><span className="social-mark">IG</span></a><a href="#contact" aria-label="Facebook"><span className="social-mark">FB</span></a><a href="#contact" aria-label="YouTube"><span className="social-mark">YT</span></a></div>
        </div>
        <div className="container footer-bottom"><span>© {new Date().getFullYear()} Fitness Gym. Demo concept.</span><span>Built for stronger beginnings.</span></div>
      </footer>

      {modalOpen && <div className="modal-backdrop" role="presentation" onClick={(e) => { if (e.target === e.currentTarget) setModalOpen(false); }}>
        <div className="join-modal" role="dialog" aria-modal="true" aria-labelledby="join-title">
          <button className="modal-close" onClick={() => setModalOpen(false)} aria-label="Close"><X /></button>
          {!sent ? <>
            <p className="section-kicker">LET'S GET STARTED</p><h2 id="join-title">Your fitness journey <em>starts here.</em></h2>
            <p className="modal-copy">Leave your details and the gym team can follow up about membership.</p>
            <form onSubmit={(e) => { e.preventDefault(); setSent(true); }}>
              <label>Full name<input required name="name" placeholder="Your name" /></label>
              <label>Email or phone<input required name="contact" placeholder="How can we reach you?" /></label>
              <label>Membership plan<select value={selectedPlan} onChange={(e) => setSelectedPlan(e.target.value)}>{plans.map(p => <option key={p.name} value={p.name}>{p.name} — {p.price}/month</option>)}</select></label>
              <button className="button form-submit" type="submit">Send enquiry <ArrowRight size={17} /></button>
            </form>
            <p className="form-note">Demo form only — connect a backend or email service to receive enquiries.</p>
          </> : <div className="success-state"><span className="success-icon"><Check /></span><h2>You're on your way.</h2><p>Your demo enquiry has been submitted on this page. Connect a backend to store and deliver real enquiries.</p><button className="button" onClick={() => setModalOpen(false)}>Done <ArrowRight size={16} /></button></div>}
        </div>
      </div>}
    </div>
  );
}

function Feature({ icon, title, text }) {
  return <div className="feature-item"><div className="feature-icon">{icon}</div><div><h3>{title}</h3><p>{text}</p></div></div>;
}

createRoot(document.getElementById("root")).render(<App />);
