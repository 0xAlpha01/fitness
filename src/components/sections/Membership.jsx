import { Check } from "lucide-react";
import membershipPlans from "../../data/membershipPlans.js";
import MembershipCard from "../ui/MembershipCard.jsx";
import SectionHeading from "../ui/SectionHeading.jsx";

export default function Membership({ onJoin }) {
  return (
    <section className="membership section-pad" id="membership">
      <div className="container membership-layout">
        <div className="membership-intro">
          <SectionHeading label="MEMBERSHIP" className="membership-heading">
            Choose Your <em>Plan</em>
          </SectionHeading>
          <p>
            Flexible membership options to fit your lifestyle and goals. Start
            where you are - we&apos;ll help you grow.
          </p>
          <div className="membership-note">
            <Check size={16} /> Simple options. No pressure.
          </div>
        </div>
        <div className="plan-grid">
          {membershipPlans.map((plan) => (
            <MembershipCard
              key={plan.name}
              plan={plan}
              onSelect={onJoin}
            />
          ))}
        </div>
      </div>
      <p className="price-disclaimer">
        Demo pricing shown for presentation. Confirm final prices and benefits
        with the gym.
      </p>
    </section>
  );
}
