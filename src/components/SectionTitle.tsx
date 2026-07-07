import useIntersection from "@/hooks/use-intersection";

interface SectionTitleProps {
  text: string;
  subtitle?: string;
  light?: boolean;
}

const SPRING = "cubic-bezier(0.16, 1, 0.3, 1)";

const SectionTitle = ({ text, subtitle, light = false }: SectionTitleProps) => {
  const [ref, visible] = useIntersection({ threshold: 0.3 });
  const words = text.split(" ");

  return (
    <div ref={ref} className="text-center mb-16">
      <div className="relative inline-block">
        {/* Word-by-word mask reveal */}
        <h2 className={`text-4xl md:text-5xl font-bold mb-4 ${light ? "text-white" : "text-foreground"}`}>
          {words.map((word, i) => (
            <span key={i} className="inline-block overflow-hidden mr-[0.28em] last:mr-0 align-bottom">
              <span
                className="inline-block"
                style={{
                  transform: visible ? "translateY(0)" : "translateY(110%)",
                  opacity: visible ? 1 : 0,
                  transition: `transform 0.75s ${SPRING} ${i * 0.1}s, opacity 0.5s ease ${i * 0.1}s`,
                }}
              >
                {word}
              </span>
            </span>
          ))}
        </h2>

        {/* Underline grows in after words */}
        <div
          className={`h-1 rounded-full ${light ? "bg-blue-light" : "bg-gradient-primary"}`}
          style={{
            width: visible ? "100%" : "0%",
            transition: `width 0.8s ${SPRING} ${words.length * 0.1 + 0.1}s`,
          }}
        />
      </div>

      {subtitle && (
        <p
          className={`text-lg max-w-2xl mx-auto mt-6 ${light ? "text-blue-light/80" : "text-muted-foreground"}`}
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(16px)",
            transition: `opacity 0.7s ease ${words.length * 0.1 + 0.25}s, transform 0.7s ${SPRING} ${words.length * 0.1 + 0.25}s`,
          }}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionTitle;
