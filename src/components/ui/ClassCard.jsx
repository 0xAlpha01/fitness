import { ArrowRight } from "lucide-react";
import Button from "./Button.jsx";

export default function ClassCard({ classItem, onEnquire }) {
  return (
    <article className="class-card">
      <div className="class-image">
        <img
          src={`https://images.unsplash.com/${classItem.image}?auto=format&fit=crop&w=800&q=80`}
          alt={classItem.title}
          loading="lazy"
        />
        <span>{classItem.tag}</span>
      </div>
      <div className="class-info">
        <div>
          <h3>{classItem.title}</h3>
          <p>{classItem.desc}</p>
        </div>
        <Button
          variant="unstyled"
          className="class-enquire-button"
          icon={ArrowRight}
          iconSize={17}
          aria-label={`Enquire about ${classItem.title}`}
          onClick={onEnquire}
        />
      </div>
    </article>
  );
}
