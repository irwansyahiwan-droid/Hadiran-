import { useState } from 'react';
import BottomNav from './components/BottomNav';
import HomeScreen from './screens/HomeScreen';
import ScheduleScreen from './screens/ScheduleScreen';
import ActivityScreen from './screens/ActivityScreen';
import MembersScreen from './screens/MembersScreen';
import ProfileScreen from './screens/ProfileScreen';

type Tab = 'home' | 'schedule' | 'activity' | 'members' | 'profile';

export default function App() {
  const [activeTab, setActiveTab] = useState<Tab>('home');

  const renderScreen = () => {
    switch (activeTab) {
      case 'home':
        return <HomeScreen />;
      case 'schedule':
        return <ScheduleScreen />;
      case 'activity':
        return <ActivityScreen />;
      case 'members':
        return <MembersScreen />;
      case 'profile':
        return <ProfileScreen />;
    }
  };

  return (
    <div className="relative">
      <main className="animate-fade-in" key={activeTab}>
        {renderScreen()}
      </main>
      <BottomNav active={activeTab} onChange={setActiveTab} />
    </div>
  );
}
