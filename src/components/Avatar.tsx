interface AvatarProps {
  name: string;
  src?: string;
  size?: 'sm' | 'md' | 'lg';
}

const sizes = {
  sm: 'w-8 h-8 text-micro',
  md: 'w-10 h-10 text-caption',
  lg: 'w-12 h-12 text-body',
};

export default function Avatar({ name, src, size = 'md' }: AvatarProps) {
  const initials = name
    .split(' ')
    .map((n) => n[0])
    .slice(0, 2)
    .join('')
    .toUpperCase();

  if (src) {
    return (
      <img
        src={src}
        alt={name}
        className={`${sizes[size]} rounded-full object-cover border border-surface-200`}
      />
    );
  }

  return (
    <div
      className={`${sizes[size]} rounded-full bg-primary-50 text-primary-700 font-semibold flex items-center justify-center border border-primary-100`}
    >
      {initials}
    </div>
  );
}
