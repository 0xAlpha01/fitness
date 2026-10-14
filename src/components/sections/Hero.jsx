import { ArrowRight, Play } from "lucide-react";
import Button from "../ui/Button.jsx";

export default function Hero({ onJoin }) {
  return (
    <section className="hero" id="home">
      <div className="hero-image" />
      <div className="hero-shade" />
      <div className="container hero-content">
        <p className="eyebrow">
          <span /> STRONGER · HEALTHIER · HAPPIER
        </p>
        <h1>
          Your Fitness
          <br />
          <em>Journey Starts Here</em>
        </h1>
        <p className="hero-copy">
          At Fitness Gym, we&apos;re more than just a gym - we&apos;re a
          community built to help you become the best version of yourself.
          Whether you&apos;re a beginner or a pro, we&apos;ve got the space,
          support, and programs to help you reach your goals.
        </p>
        <div className="hero-actions">
          <Button icon={ArrowRight} iconSize={18} onClick={() => onJoin()}>
            Get Started
          </Button>
          <a className="tour-link" href="#about">
            <span className="play-icon">
              <Play size={14} fill="currentColor" />
            </span>
            Discover the gym
          </a>
        </div>
        <div className="hero-proof">
          <div className="proof-avatars">
            <span>J</span>
            <span>A</span>
            <span>M</span>
          </div>
          <p>
            <b>Good energy. Real progress.</b>
            <br />
            Your fitness community starts here.
          </p>
        </div>
      </div>
      <div className="hero-index">
        <span>01</span>
        <i />
        FITNESS FOR EVERY BODY
      </div>
    </section>
  );
}
