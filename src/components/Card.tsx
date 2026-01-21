export default function Card({
    title,
    children,
  }: {
    title?: string;
    children: React.ReactNode;
  }) {
    return (
      <div className="card">
        {title ? <h3 className="cardTitle">{title}</h3> : null}
        <div className="cardBody">{children}</div>
      </div>
    );
  }
  