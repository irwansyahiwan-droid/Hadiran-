import { Search, CheckCircle2, Clock, Crown } from 'lucide-react';
import Card from '../components/Card';
import Avatar from '../components/Avatar';
import Badge from '../components/Badge';

interface Member {
  id: number;
  name: string;
  role: 'admin' | 'member';
  status: 'paid' | 'pending' | 'overdue';
  totalPaid: number;
  groups: number;
}

const members: Member[] = [
  { id: 1, name: 'Irwansyah', role: 'admin', status: 'paid', totalPaid: 6000000, groups: 3 },
  { id: 2, name: 'Siti Aminah', role: 'member', status: 'paid', totalPaid: 4500000, groups: 2 },
  { id: 3, name: 'Budi Santoso', role: 'member', status: 'paid', totalPaid: 5000000, groups: 2 },
  { id: 4, name: 'Dewi Lestari', role: 'member', status: 'pending', totalPaid: 3000000, groups: 1 },
  { id: 5, name: 'Andi Wijaya', role: 'member', status: 'overdue', totalPaid: 2500000, groups: 2 },
  { id: 6, name: 'Rina Kusuma', role: 'member', status: 'paid', totalPaid: 4000000, groups: 2 },
  { id: 7, name: 'Ahmad Fauzi', role: 'member', status: 'paid', totalPaid: 3500000, groups: 1 },
  { id: 8, name: 'Yuni Astuti', role: 'member', status: 'pending', totalPaid: 2000000, groups: 1 },
];

const statusConfig = {
  paid: { label: 'Lunas', variant: 'success' as const, icon: CheckCircle2 },
  pending: { label: 'Menunggu', variant: 'warning' as const, icon: Clock },
  overdue: { label: 'Terlambat', variant: 'warning' as const, icon: Clock },
};

export default function MembersScreen() {
  return (
    <div className="bg-ambient min-h-screen pb-28">
      {/* Header */}
      <header className="px-5 pt-14 pb-2">
        <h1 className="text-heading text-ink-900">Anggota</h1>
        <p className="text-caption text-ink-500 mt-0.5">{members.length} anggota terdaftar</p>
      </header>

      {/* Search */}
      <section className="px-5 mt-4">
        <div className="relative">
          <Search size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-ink-400" />
          <input
            type="text"
            placeholder="Cari anggota..."
            className="w-full h-11 pl-10 pr-4 text-body bg-surface-0 border border-surface-200 rounded-btn shadow-card focus:outline-none focus:border-primary-300 focus:ring-2 focus:ring-primary-100 transition-smooth placeholder:text-ink-300"
          />
        </div>
      </section>

      {/* Summary */}
      <section className="px-5 mt-4 grid grid-cols-3 gap-2">
        <SummaryChip label="Lunas" count={5} variant="success" />
        <SummaryChip label="Menunggu" count={2} variant="warning" />
        <SummaryChip label="Terlambat" count={1} variant="danger" />
      </section>

      {/* Member List */}
      <section className="px-5 mt-5 space-y-2">
        {members.map((member, i) => {
          const config = statusConfig[member.status];
          const StatusIcon = config.icon;
          return (
            <Card
              key={member.id}
              hoverable
              className="p-4 flex items-center gap-3 animate-slide-up"
              // @ts-ignore
              style={{ animationDelay: `${i * 50}ms`, animationFillMode: 'backwards' }}
            >
              <Avatar name={member.name} size="md" />
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-1.5">
                  <p className="text-body text-ink-900 truncate font-medium">{member.name}</p>
                  {member.role === 'admin' && (
                    <Crown size={12} className="text-amber-500 flex-shrink-0" />
                  )}
                </div>
                <p className="text-caption text-ink-400">{member.groups} grup • Rp {member.totalPaid.toLocaleString('id-ID')}</p>
              </div>
              <Badge variant={config.variant}>
                <StatusIcon size={10} />
                {config.label}
              </Badge>
            </Card>
          );
        })}
      </section>
    </div>
  );
}

function SummaryChip({ label, count, variant }: { label: string; count: number; variant: 'success' | 'warning' | 'danger' }) {
  const colors = {
    success: 'bg-primary-50 border-primary-100 text-primary-700',
    warning: 'bg-amber-50 border-amber-100 text-amber-700',
    danger: 'bg-red-50 border-red-100 text-red-700',
  };

  return (
    <div className={`flex flex-col items-center py-2.5 rounded-btn border ${colors[variant]}`}>
      <span className="text-heading tabular-nums">{count}</span>
      <span className="text-micro mt-0.5">{label}</span>
    </div>
  );
}
