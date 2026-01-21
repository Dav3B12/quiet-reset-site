export default function Section({
    id,
    className,
    children,
  }: {
    id?: string;
    className?: string;
    children: React.ReactNode;
  }) {
    return (
      <section id={id} className={["section", className].filter(Boolean).join(" ")}>
        {children}
      </section>
    );
  }
  