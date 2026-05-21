import {
  Settings,
  ChevronRight,
  Shield,
  Bell,
  Moon,
  HelpCircle,
  LogOut,
  Wallet,
  Users,
  Award,
} from 'lucide-react';
import Card from '../components/Card';
import Avatar from '../components/Avatar';

const stats = [
  { icon: Wallet, label: 'Grup Aktif', value: '3' },
  { icon: Users, label: 'Total Anggota', value: '60' },
  { icon: Award, label: 'Poin', value: '1.250' },
];

const menuItems = [
  { icon: Bell, label: 'Notifikasi', subtitle: 'Atur pemberitahuan' },
  { icon: Shield, label: 'Keamanan', subtitle: 'PIN & verifikasi' },
  { icon: Moon, label: 'Tampilan', subtitle: 'Mode gelap' },
  { icon: HelpCircle, label: 'Bantuan', subtitle: 'FAQ & dukungan' },
];

export default function ProfileScreen() {
  return (
    <div className="bg-ambient min-h-screen pb-28">
      {/* Header */}
      <header className="px-5 pt-14 pb-2 flex items-center justify-between">
        <h1 className="text-heading text-ink-900">Profil</h1>
        <button className="tap-scale w-9 h-9 flex items-center justify-center rounded-btn bg-surface-0 border border-surface-200 shadow-card">
          <Settings size={16} strokeWidth={1.8} className="text-ink-500" />
        </button>
      </header>

      {/* Profile Card */}
      <section className="px-5 mt-4">
        <Card className="p-5 flex flex-col items-center text-center">
          <Avatar name="Irwansyah" size="lg" />
          <h2 className="text-heading text-ink-900 mt-3">Irwansyah</h2>
          <p className="text-caption text-ink-500 mt-0.5">irwansyah@email.com</p>
          <p className="text-caption text-ink-400">Bergabung sejak Januari 2024</p>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-3 w-full mt-5">
            {stats.map(({ icon: Icon, label, value }) => (
              <div key={label} className="flex flex-col items-center py-3 rounded-btn bg-surface-50 border border-surface-200/50">
                <Icon size={16} className="text-primary-600 mb-1" />
                <span className="text-body text-ink-900 font-semibold tabular-nums">{value}</span>
                <span className="text-micro text-ink-400 mt-0.5">{label}</span>
              </div>
            ))}
          </div>
        </Card>
      </section>

      {/* Menu */}
      <section className="px-5 mt-5">
        <Card className="divide-y divide-surface-200/70">
          {menuItems.map(({ icon: Icon, label, subtitle }) => (
            <button
              key={label}
              className="tap-scale w-full flex items-center gap-3 p-4 hover:bg-surface-50 transition-smooth first:rounded-t-card last:rounded-b-card"
            >
              <div className="w-9 h-9 rounded-btn bg-surface-100 border border-surface-200/50 flex items-center justify-center flex-shrink-0">
                <Icon size={16} strokeWidth={1.8} className="text-ink-700" />
              </div>
              <div className="flex-1 text-left min-w-0">
                <p className="text-body text-ink-900">{label}</p>
                <p className="text-caption text-ink-400">{subtitle}</p>
              </div>
              <ChevronRight size={16} className="text-ink-300 flex-shrink-0" />
            </button>
          ))}
        </Card>
      </section>

      {/* Logout */}
      <section className="px-5 mt-4">
        <button className="tap-scale w-full flex items-center justify-center gap-2 h-12 rounded-btn bg-red-50 border border-red-100 text-red-600 text-body font-medium hover:bg-red-100 transition-smooth">
          <LogOut size={16} />
          Keluar
        </button>
      </section>

      {/* App version */}
      <p className="text-center text-micro text-ink-300 mt-6">Hadiran v0.1.0</p>
    </div>
  );
}
