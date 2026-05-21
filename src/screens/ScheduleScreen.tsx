import { Calendar, MapPin, Users, Clock } from 'lucide-react';
import Card from '../components/Card';
import Badge from '../components/Badge';
import ProgressBar from '../components/ProgressBar';

const schedules = [
  {
    id: 1,
    title: 'Arisan RT 05',
    date: 'Minggu, 25 Mei 2026',
    time: '19:00 WIB',
    location: 'Rumah Pak Ahmad',
    members: 25,
    paid: 18,
    status: 'upcoming' as const,
    daysLeft: 3,
  },
  {
    id: 2,
    title: 'Arisan Keluarga Besar',
    date: 'Sabtu, 31 Mei 2026',
    time: '10:00 WIB',
    location: 'Resto Padang Sederhana',
    members: 15,
    paid: 8,
    status: 'upcoming' as const,
    daysLeft: 9,
  },
  {
    id: 3,
    title: 'Arisan Kantor Divisi IT',
    date: 'Jumat, 6 Juni 2026',
    time: '12:00 WIB',
    location: 'Kantor Lt. 3',
    members: 20,
    paid: 5,
    status: 'upcoming' as const,
    daysLeft: 15,
  },
];

export default function ScheduleScreen() {
  return (
    <div className="bg-ambient min-h-screen pb-28">
      {/* Header */}
      <header className="px-5 pt-14 pb-2">
        <h1 className="text-heading text-ink-900">Jadwal Arisan</h1>
        <p className="text-caption text-ink-500 mt-0.5">3 jadwal mendatang</p>
      </header>

      {/* Month indicator */}
      <section className="px-5 mt-4">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-btn bg-primary-50 border border-primary-100 flex items-center justify-center">
            <Calendar size={14} className="text-primary-600" />
          </div>
          <span className="text-body text-ink-700 font-semibold">Mei — Juni 2026</span>
        </div>
      </section>

      {/* Schedule List */}
      <section className="px-5 mt-4 space-y-3">
        {schedules.map((item, i) => (
          <Card
            key={item.id}
            hoverable
            className="p-4 animate-slide-up"
            // @ts-ignore
            style={{ animationDelay: `${i * 80}ms`, animationFillMode: 'backwards' }}
          >
            <div className="flex items-start justify-between">
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2">
                  <h3 className="text-body text-ink-900 font-semibold truncate">{item.title}</h3>
                  <Badge variant={item.daysLeft <= 3 ? 'warning' : 'info'}>
                    {item.daysLeft} hari
                  </Badge>
                </div>

                <div className="mt-2.5 space-y-1.5">
                  <div className="flex items-center gap-2 text-caption text-ink-500">
                    <Clock size={13} strokeWidth={1.8} />
                    <span>{item.date} • {item.time}</span>
                  </div>
                  <div className="flex items-center gap-2 text-caption text-ink-500">
                    <MapPin size={13} strokeWidth={1.8} />
                    <span>{item.location}</span>
                  </div>
                  <div className="flex items-center gap-2 text-caption text-ink-500">
                    <Users size={13} strokeWidth={1.8} />
                    <span>{item.paid}/{item.members} anggota sudah bayar</span>
                  </div>
                </div>
              </div>
            </div>

            <ProgressBar
              percent={Math.round((item.paid / item.members) * 100)}
              showLabel
              className="mt-3"
            />
          </Card>
        ))}
      </section>
    </div>
  );
}
