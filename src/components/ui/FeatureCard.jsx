export default function FeatureCard({ icon: Icon, title, text }) {
  return (
    <div className="feature-item">
      <div className="feature-icon">
        <Icon />
      </div>
      <div>
        <h3>{title}</h3>
        <p>{text}</p>
      </div>
    </div>
  );
}
