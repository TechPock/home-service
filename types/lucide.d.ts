declare module 'lucide-react' {
  import type { ComponentType, SVGProps } from 'react';

  type LucideIcon = ComponentType<
    SVGProps<SVGSVGElement> & {
      size?: number | string;
      color?: string;
      absoluteStrokeWidth?: boolean;
    }
  >;

  export const Phone: LucideIcon;
  export const Mail: LucideIcon;
  export const Clock: LucideIcon;
  export const Send: LucideIcon;
  export const Shield: LucideIcon;
  export const CheckCircle: LucideIcon;
  export const Users: LucideIcon;
  export const UserCheck: LucideIcon;
  export const DollarSign: LucideIcon;
  export const Award: LucideIcon;
  export const Wrench: LucideIcon;
  export const Zap: LucideIcon;
  export const Snowflake: LucideIcon;
  export const Droplet: LucideIcon;
  export const Clipboard: LucideIcon;
  export const Calendar: LucideIcon;
  export const FileText: LucideIcon;
  export const MapPin: LucideIcon;
  export const ArrowUp: LucideIcon;
  export const Star: LucideIcon;
  export const ChevronLeft: LucideIcon;
  export const ChevronRight: LucideIcon;
  export const ChevronDown: LucideIcon;
  export const Menu: LucideIcon;
  export const X: LucideIcon;
  export const Copy: LucideIcon;
  export const ExternalLink: LucideIcon;
}
