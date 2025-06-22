'use client';

import { useState } from 'react';
import { 
  Bell, 
  Shield, 
  MapPin, 
  Users, 
  Heart, 
  HelpCircle, 
  LogOut,
  ChevronRight,
  Toggle
} from 'lucide-react';
import { BottomNavigation } from '@/components/BottomNavigation/BottomNavigation';

export default function SettingsPage() {
  const [settings, setSettings] = useState({
    notifications: true,
    showOnline: true,
    showDistance: true,
    ageRange: [18, 35],
    maxDistance: 50
  });

  const toggleSetting = (key: keyof typeof settings) => {
    if (typeof settings[key] === 'boolean') {
      setSettings(prev => ({
        ...prev,
        [key]: !prev[key]
      }));
    }
  };

  const settingsGroups = [
    {
      title: 'Поиск',
      items: [
        {
          icon: MapPin,
          title: 'Максимальное расстояние',
          subtitle: `${settings.maxDistance} км`,
          action: 'navigate'
        },
        {
          icon: Users,
          title: 'Возрастной диапазон',
          subtitle: `${settings.ageRange[0]}-${settings.ageRange[1]} лет`,
          action: 'navigate'
        },
        {
          icon: Heart,
          title: 'Показывать только активных',
          subtitle: 'Пользователи, заходившие недавно',
          action: 'toggle',
          value: settings.showOnline,
          onChange: () => toggleSetting('showOnline')
        }
      ]
    },
    {
      title: 'Уведомления',
      items: [
        {
          icon: Bell,
          title: 'Push-уведомления',
          subtitle: 'О новых совпадениях и сообщениях',
          action: 'toggle',
          value: settings.notifications,
          onChange: () => toggleSetting('notifications')
        }
      ]
    },
    {
      title: 'Приватность',
      items: [
        {
          icon: Shield,
          title: 'Показывать статус онлайн',
          subtitle: 'Другие увидят, когда вы в сети',
          action: 'toggle',
          value: settings.showDistance,
          onChange: () => toggleSetting('showDistance')
        },
        {
          icon: MapPin,
          title: 'Показывать расстояние',
          subtitle: 'Расстояние до вас в профиле',
          action: 'toggle',
          value: settings.showDistance,
          onChange: () => toggleSetting('showDistance')
        }
      ]
    },
    {
      title: 'Поддержка',
      items: [
        {
          icon: HelpCircle,
          title: 'Помощь и поддержка',
          subtitle: 'FAQ и обратная связь',
          action: 'navigate'
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 p-4 pt-8">
        <h1 className="text-2xl font-bold text-gray-900">Настройки</h1>
      </div>

      {/* Settings Groups */}
      <div className="space-y-2 mt-2">
        {settingsGroups.map((group) => (
          <div key={group.title} className="bg-white">
            <div className="p-4 border-b border-gray-100">
              <h2 className="text-lg font-semibold text-gray-900">{group.title}</h2>
            </div>
            
            <div className="divide-y divide-gray-100">
              {group.items.map((item) => (
                <div
                  key={item.title}
                  className="p-4 flex items-center justify-between hover:bg-gray-50 transition-colors"
                >
                  <div className="flex items-center gap-3 flex-1">
                    <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
                      <item.icon className="w-5 h-5 text-gray-600" />
                    </div>
                    
                    <div className="flex-1">
                      <h3 className="font-medium text-gray-900">{item.title}</h3>
                      <p className="text-sm text-gray-600">{item.subtitle}</p>
                    </div>
                  </div>
                  
                  {item.action === 'toggle' && (
                    <button
                      onClick={item.onChange}
                      className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                        item.value ? 'bg-pink-500' : 'bg-gray-300'
                      }`}
                    >
                      <span
                        className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                          item.value ? 'translate-x-6' : 'translate-x-1'
                        }`}
                      />
                    </button>
                  )}
                  
                  {item.action === 'navigate' && (
                    <ChevronRight className="w-5 h-5 text-gray-400" />
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Logout */}
      <div className="bg-white mt-2">
        <button className="w-full p-4 flex items-center gap-3 text-red-600 hover:bg-red-50 transition-colors">
          <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center">
            <LogOut className="w-5 h-5" />
          </div>
          <span className="font-medium">Выйти из аккаунта</span>
        </button>
      </div>

      <BottomNavigation />
    </div>
  );
}