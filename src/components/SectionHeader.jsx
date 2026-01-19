import './SectionHeader.css';

export default function SectionHeader({ 
  label, 
  title, 
  description, 
  centered = true
}) {
  return (
    <div className={`section-header ${centered ? 'centered' : ''}`}>
      {label && <span className="section-label">{label}</span>}
      <h2 className="section-title">{title}</h2>
      {description && <p className="section-description">{description}</p>}
    </div>
  );
}
