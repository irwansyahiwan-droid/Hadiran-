import { Home, Calendar, Activity, Users, User } from 'lucide-react';

type Tab = 'home' | 'schedule' | 'activity' | 'members' | 'profile';

interface BottomNavProps {
  active: Tab;
  onChange: (tab: Tab) => void;
}

const tabs: { id: Tab; icon: typeof Home; label: string }[] = [
  { id: 'home', icon: Home, label: 'Beranda' },
  { id: 'schedule', icon: Calendar, label: 'Jadwal' },
  { id: 'activity', icon: Activity, label: 'Aktivitas' },
  { id: 'members', icon: Users, label: 'Anggota' },
  { id: 'profile', icon: User, label: 'Profil' },
];

export default function BottomNav({ active, onChange }: BottomNavProps) {
  return (
    <nav className="fixed bottom-4 left-1/2 -translate-x-1/2 w-[calc(100%-32px)] max-w-[398px] glass-surface rounded-float shadow-float border border-surface-200/60 safe-bottom z-50">
      <div className="flex items-center justify-around h-[60px] px-1">
        {tabs.map(({ id, icon: Icon, label }) => {
          const isActive = active === id;
          return (
            <button
              key={id}
              onClick={() => onChange(id)}
              className={`tap-scale flex flex-col items-center justify-center gap-0.5 w-14 h-12 rounded-btn transition-smooth ${
                isActive
                  ? 'text-primary-600'
                  : 'text-ink-400 hover:text-ink-700'
              }`}
            >
              <Icon
                size={20}
                strokeWidth={isActive ? 2.2 : 1.8}
                className="transition-smooth"
              />
              <span className={`text-micro leading-none ${isActive ? 'font-medium' : 'font-normal'}`}>
                {label}
              </span>
              {isActive && (
                <span className="absolute -bottom-0 w-5 h-[2px] bg-primary-500 rounded-full animate-scale-in" />
              )}
            </button>
          );
        })}
      </div>
    </nav>
  );
}
