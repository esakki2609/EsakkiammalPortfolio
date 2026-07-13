export default function PageHeader({ title, description }) {
  return (
    <header className="mb-12 animate-rise">
      <div className="brand-rule mb-5" />
      <h1 className="font-display text-4xl md:text-5xl text-ink mb-4">{title}</h1>
      {description ? (
        <p className="max-w-2xl text-muted text-lg leading-relaxed">{description}</p>
      ) : null}
    </header>
  );
}
