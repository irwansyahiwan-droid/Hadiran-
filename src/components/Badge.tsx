import { ReactNode } from 'react';

type BadgeVariant = 'success' | 'warning' | 'info' | 'neutral';

interface BadgeProps {
  children: ReactNode;
  variant?: BadgeVariant;
}

const variantStyles: Record<BadgeVariant, string> = {
  success: 'bg-primary-50 text-primary-700 border-primary-200/50',
  warning: 'bg-amber-50 text-amber-700 border-amber-200/50',
  info: 'bg-blue-50 text-blue-700 border-blue-200/50',
  neutral: 'bg-surface-100 text-ink-700 border-surface-200',
};

export default function Badge({ children, variant = 'neutral' }: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center gap-1 px-2.5 py-0.5 text-micro font-medium rounded-chip border ${variantStyles[variant]}`}
    >
      {children}
    </span>
  );
}
