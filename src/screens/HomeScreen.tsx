import {
  Bell,
  ChevronRight,
  TrendingUp,
  ArrowUpRight,
  ArrowDownLeft,
  Clock,
  CheckCircle2,
  AlertCircle,
} from 'lucide-react';
import Card from '../components/Card';
import Badge from '../components/Badge';
import AnimatedNumber from '../components/AnimatedNumber';
import ProgressBar from '../components/ProgressBar';
import Avatar from '../components/Avatar';

export default function HomeScreen() {
  return (
    <div className="bg-ambient min-h-screen pb-28">
      {/* Header */}
      <header className="px-5 pt-14 pb-2 flex items-center justify-between">
        <div>
          <p className="text-caption text-ink-500">Selamat pagi</p>
          <h1 className="text-heading text-ink-900">Irwansyah</h1>
        </div>
        <button className="tap-scale relative w-10 h-10 flex items-center justify-center rounded-full bg-surface-0 border border-surface-200 shadow-card">
          <Bell size={18} strokeWidth={1.8} className="text-ink-700" />
          <span className="absolute top-2 right-2 w-2 h-2 bg-primary-500 rounded-full" />
        </button>
      </header>

      {/* Balance Card */}
      <section className="px-5 mt-4">
        <Card className="p-5 relative overflow-hidden">
          {/* Subtle ambient glow on balance card */}
          <div className="absolute -top-12 -right-12 w-32 h-32 bg-primary-100/40 rounded-full blur-2xl pointer-events-none" />
          <div className="relative">
            <div className="flex items-center gap-2 mb-1">
              <p className="text-caption text-ink-500">Total Saldo Arisan</p>
              <Badge variant="success">
                <TrendingUp size={10} /> Aktif
              </Badge>
            </div>
            <AnimatedNumber
              value={12750000}
              className="text-balance text-ink-900 block mt-1"
            />
            <div className="flex items-center gap-1 mt-2">
              <span className="text-micro text-primary-600 font-medium">+Rp 750.000</span>
              <span className="text-micro text-ink-400">bulan ini</span>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="flex gap-3 mt-5">
            <QuickAction icon={<ArrowUpRight size={16} />} label="Setor" />
            <QuickAction icon={<ArrowDownLeft size={16} />} label="Tarik" />
            <QuickAction icon={<Clock size={16} />} label="Riwayat" />
          </div>
        </Card>
      </section>

      {/* Alert */}
      <section className="px-5 mt-4">
        <Card hoverable className="p-4 flex items-center gap-3">
          <div className="w-9 h-9 rounded-btn bg-amber-50 border border-amber-100 flex items-center justify-center flex-shrink-0">
            <AlertCircle size={16} className="text-amber-600" />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-body text-ink-900 truncate">Pembayaran jatuh tempo besok</p>
            <p className="text-caption text-ink-400">Arisan Keluarga — Rp 500.000</p>
          </div>
          <ChevronRight size={16} className="text-ink-300 flex-shrink-0" />
        </Card>
      </section>

      {/* Next Schedule */}
      <section className="px-5 mt-6">
        <div className="flex items-center justify-between mb-3">
          <h2 className="text-heading text-ink-900">Jadwal Berikutnya</h2>
          <button className="text-caption text-primary-600 font-medium tap-scale">Lihat semua</button>
        </div>
        <Card hoverable className="p-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-btn bg-primary-50 border border-primary-100 flex items-center justify-center flex-shrink-0">
              <Calendar size={18} className="text-primary-600" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-body text-ink-900">Arisan RT 05</p>
              <p className="text-caption text-ink-400">Minggu, 25 Mei 2026 • 19:00</p>
            </div>
            <Badge variant="info">3 hari</Badge>
          </div>
          <ProgressBar percent={72} showLabel className="mt-3" />
          <p className="text-micro text-ink-400 mt-1">18 dari 25 anggota sudah bayar</p>
        </Card>
      </section>

      {/* Recent Transactions */}
      <section className="px-5 mt-6">
        <div className="flex items-center justify-between mb-3">
          <h2 className="text-heading text-ink-900">Transaksi Terakhir</h2>
          <button className="text-caption text-primary-600 font-medium tap-scale">Semua</button>
        </div>
        <div className="space-y-2">
          <TransactionItem
            name="Siti Aminah"
            description="Menerima arisan"
            amount={2500000}
            type="in"
            time="Hari ini"
          />
          <TransactionItem
            name="Budi Santoso"
            description="Setoran bulanan"
            amount={500000}
            type="out"
            time="Kemarin"
          />
          <TransactionItem
            name="Arisan Kantor"
            description="Setoran bulanan"
            amount={1000000}
            type="out"
            time="20 Mei"
          />
        </div>
      </section>
    </div>
  );
}

/* ── Sub-components ── */

function QuickAction({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <button className="tap-scale flex-1 flex flex-col items-center gap-1.5 py-3 rounded-btn bg-surface-50 border border-surface-200/50 hover:bg-surface-100 transition-smooth">
      <span className="text-primary-600">{icon}</span>
      <span className="text-micro text-ink-700 font-medium">{label}</span>
    </button>
  );
}

function Calendar({ size, className }: { size: number; className?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
      <line x1="16" x2="16" y1="2" y2="6" />
      <line x1="8" x2="8" y1="2" y2="6" />
      <line x1="3" x2="21" y1="10" y2="10" />
    </svg>
  );
}

function TransactionItem({
  name,
  description,
  amount,
  type,
  time,
}: {
  name: string;
  description: string;
  amount: number;
  type: 'in' | 'out';
  time: string;
}) {
  return (
    <Card hoverable className="p-4 flex items-center gap-3">
      <Avatar name={name} size="sm" />
      <div className="flex-1 min-w-0">
        <p className="text-body text-ink-900 truncate">{name}</p>
        <p className="text-caption text-ink-400">{description}</p>
      </div>
      <div className="text-right flex-shrink-0">
        <p className={`text-body tabular-nums font-semibold ${type === 'in' ? 'text-primary-600' : 'text-ink-900'}`}>
          {type === 'in' ? '+' : '-'}Rp {amount.toLocaleString('id-ID')}
        </p>
        <p className="text-micro text-ink-400">{time}</p>
      </div>
    </Card>
  );
}
