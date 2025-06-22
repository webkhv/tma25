'use client';

import { useState } from 'react';
import { MessageCircle, Heart, Clock } from 'lucide-react';
import { BottomNavigation } from '@/components/BottomNavigation/BottomNavigation';
import { Match } from '@/types/user';

const mockMatches: Match[] = [
  {
    id: '1',
    user: {
      id: '1',
      name: 'Анна',
      age: 24,
      bio: 'Люблю путешествия и фотографию',
      photos: ['https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=800'],
      location: 'Москва',
      interests: ['Путешествия', 'Фотография'],
      isOnline: true,
      verified: true
    },
    matchedAt: new Date(Date.now() - 2 * 60 * 60 * 1000),
    lastMessage: {
      id: '1',
      senderId: '1',
      text: 'Привет! Как дела? 😊',
      timestamp: new Date(Date.now() - 30 * 60 * 1000),
      read: false
    }
  },
  {
    id: '2',
    user: {
      id: '2',
      name: 'Мария',
      age: 26,
      bio: 'Дизайнер, йога-инструктор',
      photos: ['https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=800'],
      location: 'Санкт-Петербург',
      interests: ['Дизайн', 'Йога'],
      isOnline: false,
      verified: true
    },
    matchedAt: new Date(Date.now() - 24 * 60 * 60 * 1000),
  },
  {
    id: '3',
    user: {
      id: '3',
      name: 'Елена',
      age: 22,
      bio: 'Студентка, танцую сальсу',
      photos: ['https://images.pexels.com/photos/1542085/pexels-photo-1542085.jpeg?auto=compress&cs=tinysrgb&w=800'],
      location: 'Екатеринбург',
      interests: ['Танцы', 'Языки'],
      isOnline: true,
      verified: false
    },
    matchedAt: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000),
    lastMessage: {
      id: '2',
      senderId: 'me',
      text: 'Спасибо за интересный разговор!',
      timestamp: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000),
      read: true
    }
  }
];

export default function MatchesPage() {
  const [matches] = useState<Match[]>(mockMatches);

  const formatTime = (date: Date) => {
    const now = new Date();
    const diff = now.getTime() - date.getTime();
    const hours = Math.floor(diff / (1000 * 60 * 60));
    const days = Math.floor(hours / 24);

    if (days > 0) {
      return `${days}д`;
    } else if (hours > 0) {
      return `${hours}ч`;
    } else {
      return 'сейчас';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 p-4 pt-8">
        <h1 className="text-2xl font-bold text-gray-900">Совпадения</h1>
        <p className="text-gray-600 mt-1">{matches.length} взаимных симпатий</p>
      </div>

      {/* New Matches */}
      <div className="bg-white p-4 mb-2">
        <h2 className="text-lg font-semibold text-gray-900 mb-3 flex items-center gap-2">
          <Heart className="w-5 h-5 text-pink-500" />
          Новые совпадения
        </h2>
        <div className="flex gap-3 overflow-x-auto pb-2">
          {matches.slice(0, 3).map((match) => (
            <div key={match.id} className="flex-shrink-0">
              <div className="relative">
                <img
                  src={match.user.photos[0]}
                  alt={match.user.name}
                  className="w-20 h-20 rounded-full object-cover border-3 border-pink-200"
                />
                {match.user.isOnline && (
                  <div className="absolute bottom-1 right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white" />
                )}
              </div>
              <p className="text-sm font-medium text-center mt-2 text-gray-900">
                {match.user.name}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Messages */}
      <div className="bg-white">
        <div className="p-4 border-b border-gray-100">
          <h2 className="text-lg font-semibold text-gray-900 flex items-center gap-2">
            <MessageCircle className="w-5 h-5 text-blue-500" />
            Сообщения
          </h2>
        </div>
        
        <div className="divide-y divide-gray-100">
          {matches.map((match) => (
            <div
              key={match.id}
              className="p-4 hover:bg-gray-50 transition-colors cursor-pointer"
            >
              <div className="flex items-center gap-3">
                <div className="relative">
                  <img
                    src={match.user.photos[0]}
                    alt={match.user.name}
                    className="w-14 h-14 rounded-full object-cover"
                  />
                  {match.user.isOnline && (
                    <div className="absolute bottom-0 right-0 w-4 h-4 bg-green-500 rounded-full border-2 border-white" />
                  )}
                </div>
                
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between mb-1">
                    <h3 className="font-semibold text-gray-900 truncate">
                      {match.user.name}
                    </h3>
                    <span className="text-xs text-gray-500 flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {formatTime(match.lastMessage?.timestamp || match.matchedAt)}
                    </span>
                  </div>
                  
                  <p className="text-sm text-gray-600 truncate">
                    {match.lastMessage?.text || 'Новое совпадение! Напишите первым'}
                  </p>
                </div>
                
                {match.lastMessage && !match.lastMessage.read && match.lastMessage.senderId !== 'me' && (
                  <div className="w-3 h-3 bg-pink-500 rounded-full" />
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      <BottomNavigation />
    </div>
  );
}