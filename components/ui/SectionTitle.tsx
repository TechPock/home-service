import ScrollAnimation from "./ScrollAnimation";

interface SectionTitleProps {
  smallTitle?: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
  white?: boolean;
  className?: string;
}

export default function SectionTitle({
  smallTitle,
  title,
  subtitle,
  centered = false,
  white = false,
  className = "",
}: SectionTitleProps) {
  return (
    <ScrollAnimation
      direction="up"
      className={`section-title ${white ? "section-title-white" : ""} ${
        centered ? "text-center" : ""
      } mb-6 ${className}`}
    >
      {smallTitle && (
        <h4
          dangerouslySetInnerHTML={{
            __html: smallTitle.replace(
              /<span>(.*?)<\/span>/g,
              '<span class="text-primary">$1</span>'
            ),
          }}
          style={{ color: white ? '#FF6B35' : 'inherit' }}
        ></h4>
      )}
      {title && (
        <h2
          dangerouslySetInnerHTML={{
            __html: title.replace(
              /<span>(.*?)<\/span>/g,
              '<span class="text-primary">$1</span>'
            ),
          }}
          style={{ color: white ? '#FFFFFF' : 'inherit' }}
        ></h2>
      )}
      {subtitle && (
        <p
          dangerouslySetInnerHTML={{
            __html: subtitle.replace(
              /<span>(.*?)<\/span>/g,
              '<span class="text-primary">$1</span>'
            ),
          }}
          style={{ color: white ? '#E5E7EB' : 'inherit' }}
        ></p>
      )}
    </ScrollAnimation>
  );
}
