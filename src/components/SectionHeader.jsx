export default function SectionHeader({ eyebrow, title }) {
  return (
    <div className="section-header">
      <p className="section-header__eyebrow">{eyebrow}</p>
      <h2 className="section-header__title">{title}</h2>
      <div className="section-header__rule" />
    </div>
  );
}
