import { ArrowRight } from "lucide-react";
import classes from "../../data/classes.js";
import ClassCard from "../ui/ClassCard.jsx";
import SectionHeading from "../ui/SectionHeading.jsx";

export default function Classes({ onJoin }) {
  const findPlanLink = (
    <a className="text-link desktop-link" href="#membership">
      Find your plan <ArrowRight size={16} />
    </a>
  );

  return (
    <section className="classes section-pad" id="classes">
      <div className="container">
        <SectionHeading
          label="FIND YOUR FLOW"
          className="classes-heading"
          action={findPlanLink}
        >
          Find the Right Workout <em>for You</em>
        </SectionHeading>
        <div className="class-grid">
          {classes.map((classItem) => (
            <ClassCard
              key={classItem.title}
              classItem={classItem}
              onEnquire={() => onJoin()}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
