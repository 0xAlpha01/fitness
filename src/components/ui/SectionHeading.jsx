export default function SectionHeading({
  action,
  children,
  className = "",
  label,
}) {
  return (
    <div className={`section-heading ${className}`.trim()}>
      <div>
        <p className="section-kicker">{label}</p>
        <h2>{children}</h2>
      </div>
      {action}
    </div>
  );
}
