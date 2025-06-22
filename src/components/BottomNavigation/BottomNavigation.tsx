'use client';

import { Heart, MessageCircle, User, Settings } from 'lucide-react';
import { useRouter, usePathname } from 'next/navigation';

export function BottomNavigation() {
  const router = useRouter();
  const pathname = usePathname();

  const navItems = [
    { icon: Heart, label: 'Поиск', path: '/' },
    { icon: MessageCircle, label: 'Чаты', path: '/matches' },
    { icon: User, label: 'Профиль', path: '/profile' },
    { icon: Settings, label: 'Настройки', path: '/settings' },
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-4 py-2 z-30">
      <div className="flex justify-around">
        {navItems.map(({ icon: Icon, label, path }) => {
          const isActive = pathname === path;
          return (
            <button
              key={path}
              onClick={() => router.push(path)}
              className={`flex flex-col items-center py-2 px-3 rounded-lg transition-colors ${
                isActive
                  ? 'text-pink-500 bg-pink-50'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              <Icon className="w-6 h-6 mb-1" />
              <span className="text-xs font-medium">{label}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}