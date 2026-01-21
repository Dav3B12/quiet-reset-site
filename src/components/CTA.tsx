export default function CTA({
    href,
    children,
  }: {
    href: string;
    children: React.ReactNode;
  }) {
    return (
      <a className="btn" href={href} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    );
  }
  