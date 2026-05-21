interface ProgressBarProps {
  percent: number;
  className?: string;
  showLabel?: boolean;
}

export default function ProgressBar({ percent, className = '', showLabel = false }: ProgressBarProps) {
  const clamped = Math.max(0, Math.min(100, percent));

  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <div className="flex-1 h-[6px] bg-surface-200 rounded-full overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-primary-500 to-primary-400 rounded-full transition-all duration-700 ease-out"
          style={{ width: `${clamped}%` }}
        />
      </div>
      {showLabel && (
        <span className="text-micro text-ink-500 tabular-nums font-medium">{clamped}%</span>
      )}
    </div>
  );
}
