const Section = ({
  children,
  className = "",
  bgColor = "bg-white",
  containerSize = "max-w-7xl",
  id = "",
}) => {
  return (
    <section id={id} className={`py-12 md:py-16 ${bgColor} ${className}`}>
      <div className={`${containerSize} mx-auto px-4 sm:px-6 lg:px-8`}>
        {children}
      </div>
    </section>
  );
};

export const SectionHeader = ({
  title,
  subtitle,
  centered = true,
  className = "",
}) => {
  return (
    <div className={`mb-10 ${centered ? "text-center" : ""} ${className}`}>
      {title && (
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary-900 mb-3 tracking-tight border-b-3 border-secondary-500 inline-block pb-1">
          {title}
        </h2>
      )}
      {subtitle && (
        <p className="text-base md:text-lg text-gray-700 max-w-3xl mx-auto mt-4 leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default Section;
