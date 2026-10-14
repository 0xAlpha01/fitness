import { ArrowRight, Check } from "lucide-react";
import Button from "./Button.jsx";

export default function MembershipCard({ onSelect, plan }) {
  return (
    <article className={`plan-card ${plan.popular ? "featured" : ""}`}>
      {plan.popular && <span className="popular-label">MOST POPULAR</span>}
      <p className="plan-name">{plan.name}</p>
      <p className="plan-desc">{plan.desc}</p>
      <div className="price">
        {plan.price}
        <small> / month</small>
      </div>
      <ul>
        {plan.features.map((feature) => (
          <li key={feature}>
            <Check size={15} />
            {feature}
          </li>
        ))}
      </ul>
      <Button
        variant={plan.popular ? "primary" : "outline"}
        className="plan-button"
        icon={ArrowRight}
        iconSize={15}
        onClick={() => onSelect(plan.name)}
      >
        Choose {plan.name}
      </Button>
    </article>
  );
}
