import { ArrowRight } from "lucide-react";
import Button from "../ui/Button.jsx";

export default function CallToAction({ onJoin }) {
  return (
    <section className="cta-strip">
      <div className="container cta-inner">
        <div>
          <p className="section-kicker">YOUR NEXT CHAPTER STARTS NOW</p>
          <h2>
            Ready to show up for <em>yourself?</em>
          </h2>
        </div>
        <Button icon={ArrowRight} iconSize={17} onClick={() => onJoin()}>
          Become a Member
        </Button>
      </div>
    </section>
  );
}
