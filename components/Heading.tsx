interface HeadingProps {
  title: string;
  subtitle: string;
}

const Heading = ({ title, subtitle }: HeadingProps) => {
  return (
    <div className="flex flex-col items-center gap-2 mb-6">
      <span className="text-nomal font-semibold text-secondary">{title}</span>
      <span className="text-2xl font-semibold">{subtitle}</span>
    </div>
  );
};

export default Heading;
