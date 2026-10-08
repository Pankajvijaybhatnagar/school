export default function MapEmbed({ query, title = "Location map", className = "" }) {
  return (
    <div className={`overflow-hidden rounded-3xl shadow-xl ring-1 ring-slate-200 ${className}`}>
      <iframe
        title={title}
        src={`https://maps.google.com/maps?q=${encodeURIComponent(query)}&z=14&output=embed`}
        className="h-full min-h-72 w-full border-0"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  );
}
