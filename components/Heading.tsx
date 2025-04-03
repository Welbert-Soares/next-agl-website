interface HeadingProps {
  title: string;
  subtitle: string;
  className?: string;
}

const Heading = ({ subtitle, title, className }: HeadingProps) => {
  return (
    <div className={className}>
      <h3>{subtitle}</h3>
      <h1>{title}</h1>
    </div>
  );
};

export { Heading };
