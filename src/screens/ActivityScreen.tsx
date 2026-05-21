import { ArrowUpRight, ArrowDownLeft, CheckCircle2, XCircle, Filter } from 'lucide-react';
import Card from '../components/Card';
import Avatar from '../components/Avatar';

type ActivityType = 'payment_in' | 'payment_out' | 'win' | 'missed';

interface ActivityItem {
  id: number;
  type: ActivityType;
  title: string;
  description: string;
  amount: number;
  date: string;
  person: string;
}

const activities: ActivityItem[] = [
  { id: 1, type: 'win', title: 'Menerima Arisan', description: 'Arisan RT 05', amount: 12500000, date: 'Hari ini, 08:30', person: 'Irwansyah' },
  { id: 2, type: 'payment_out', title: 'Setoran Bulanan', description: 'Arisan Keluarga', amount: 500000, date: 'Kemarin, 14:20', person: 'Irwansyah' },
  { id: 3, type: 'payment_in', title: 'Pembayaran Diterima', description: 'Arisan Kantor', amount: 1000000, date: '20 Mei, 09:15', person: 'Budi Santoso' },
  { id: 4, type: 'payment_in', title: 'Pembayaran Diterima', description: 'Arisan RT 05', amount: 500000, date: '19 Mei, 16:40', person: 'Siti Aminah' },
  { id: 5, type: 'missed', title: 'Pembayaran Terlewat', description: 'Arisan Keluarga', amount: 500000, date: '18 Mei, 00:00', person: 'Andi Wijaya' },
  { id: 6, type: 'payment_out', title: 'Setoran Bulanan', description: 'Arisan Kantor', amount: 1000000, date: '15 Mei, 10:00', person: 'Irwansyah' },
  { id: 7, type: 'payment_in', title: 'Pembayaran Diterima', description: 'Arisan RT 05', amount: 500000, date: '14 Mei, 11:30', person: 'Dewi Lestari' },
];

const typeConfig: Record<ActivityType, { icon: typeof ArrowUpRight; color: string; bgColor: string; sign: string }> = {
  payment_in: { icon: ArrowDownLeft, color: 'text-primary-600', bgColor: 'bg-primary-50 border-primary-100', sign: '+' },
  payment_out: { icon: ArrowUpRight, color: 'text-ink-700', bgColor: 'bg-surface-100 border-surface-200', sign: '-' },
  win: { icon: CheckCircle2, color: 'text-primary-600', bgColor: 'bg-primary-50 border-primary-100', sign: '+' },
  missed: { icon: XCircle, color: 'text-red-600', bgColor: 'bg-red-50 border-red-100', sign: '' },
};

export default function ActivityScreen() {
  return (
    <div className="bg-ambient min-h-screen pb-28">
      {/* Header */}
      <header className="px-5 pt-14 pb-2 flex items-center justify-between">
        <div>
          <h1 className="text-heading text-ink-900">Aktivitas</h1>
          <p className="text-caption text-ink-500 mt-0.5">Riwayat transaksi arisan</p>
        </div>
        <button className="tap-scale w-9 h-9 flex items-center justify-center rounded-btn bg-surface-0 border border-surface-200 shadow-card">
          <Filter size={16} strokeWidth={1.8} className="text-ink-500" />
        </button>
      </header>

      {/* Activity List */}
      <section className="px-5 mt-4 space-y-2">
        {activities.map((item, i) => {
          const config = typeConfig[item.type];
          const Icon = config.icon;
          return (
            <Card
              key={item.id}
              hoverable
              className="p-4 flex items-center gap-3 animate-slide-up"
              // @ts-ignore
              style={{ animationDelay: `${i * 60}ms`, animationFillMode: 'backwards' }}
            >
              <div className={`w-9 h-9 rounded-btn ${config.bgColor} border flex items-center justify-center flex-shrink-0`}>
                <Icon size={16} className={config.color} />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-body text-ink-900 truncate">{item.title}</p>
                <p className="text-caption text-ink-400">{item.description} • {item.date}</p>
              </div>
              <div className="text-right flex-shrink-0">
                <p className={`text-body tabular-nums font-semibold ${item.type === 'missed' ? 'text-red-600' : config.sign === '+' ? 'text-primary-600' : 'text-ink-900'}`}>
                  {config.sign}Rp {item.amount.toLocaleString('id-ID')}
                </p>
                <p className="text-micro text-ink-400">{item.person}</p>
              </div>
            </Card>
          );
        })}
      </section>
    </div>
  );
}
