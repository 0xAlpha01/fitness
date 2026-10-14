import { Clock3, Dumbbell, UserRound, Users } from "lucide-react";
import FeatureCard from "../ui/FeatureCard.jsx";

const features = [
  {
    icon: Dumbbell,
    title: "Modern Equipment",
    text: "Well-maintained equipment for every workout.",
  },
  {
    icon: UserRound,
    title: "Certified Trainers",
    text: "Expert guidance and personalized support.",
  },
  {
    icon: Users,
    title: "Supportive Community",
    text: "Train with people who keep you motivated.",
  },
  {
    icon: Clock3,
    title: "Flexible Hours",
    text: "A schedule that works around your life.",
  },
];

export default function Features() {
  return (
    <section className="features">
      <div className="container feature-grid">
        {features.map((feature) => (
          <FeatureCard key={feature.title} {...feature} />
        ))}
      </div>
    </section>
  );
}
