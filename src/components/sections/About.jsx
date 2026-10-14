import { ArrowRight, Dumbbell } from "lucide-react";

export default function About() {
  return (
    <section className="about section-pad" id="about">
      <div className="container about-grid">
        <div className="about-photo photo-frame" id="gallery">
          <img
            src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1200&q=85"
            alt="Modern gym interior with strength training equipment"
          />
          <div className="photo-label">
            <Dumbbell size={18} />
            <span>BUILT FOR YOUR NEXT LEVEL</span>
          </div>
          <div className="photo-number">
            Fitness<span> / GYM</span>
          </div>
        </div>
        <div className="about-copy">
          <p className="section-kicker">ABOUT Fitness GYM</p>
          <h2>
            More Than a Gym.
            <br />
            <em>It&apos;s a Lifestyle.</em>
          </h2>
          <p>
            We believe fitness should feel challenging, rewarding, and
            welcoming. Our space is designed for people at every stage - from
            your very first workout to your next personal best.
          </p>
          <p>
            Train with purpose, find your people, and build habits that last
            beyond the gym floor.
          </p>
          <a className="text-link" href="#classes">
            Explore our approach <ArrowRight size={17} />
          </a>
          <div className="about-stats">
            <div>
              <b>01</b>
              <span>YOUR GOALS</span>
            </div>
            <div>
              <b>100%</b>
              <span>YOUR JOURNEY</span>
            </div>
            <div>
              <b>∞</b>
              <span>YOUR POTENTIAL</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
