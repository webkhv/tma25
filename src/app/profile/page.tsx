'use client';

import { useState } from 'react';
import { Camera, Edit3, MapPin, Shield, Settings } from 'lucide-react';
import { BottomNavigation } from '@/components/BottomNavigation/BottomNavigation';

export default function ProfilePage() {
  const [profile] = useState({
    name: 'Владислав',
    age: 28,
    bio: 'Разработчик, люблю путешествия и новые технологии. Ищу интересного собеседника и, возможно, что-то большее 🚀',
    photos: [
      'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1065084/pexels-photo-1065084.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    location: 'Москва',
    interests: ['Программирование', 'Путешествия', 'Фотография', 'Кино', 'Музыка', 'Спорт'],
    verified: true,
    completeness: 85
  });

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 p-4 pt-8 flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-900">Мой профиль</h1>
        <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
          <Settings className="w-6 h-6 text-gray-600" />
        </button>
      </div>

      {/* Profile Completeness */}
      <div className="bg-white p-4 mb-2">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-medium text-gray-700">Заполненность профиля</span>
          <span className="text-sm font-bold text-pink-500">{profile.completeness}%</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div 
            className="bg-gradient-to-r from-pink-500 to-purple-500 h-2 rounded-full transition-all duration-300"
            style={{ width: `${profile.completeness}%` }}
          />
        </div>
        <p className="text-xs text-gray-600 mt-2">
          Заполните профиль на 100% для большего количества совпадений
        </p>
      </div>

      {/* Photos */}
      <div className="bg-white p-4 mb-2">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold text-gray-900">Фотографии</h2>
          <button className="text-pink-500 font-medium text-sm flex items-center gap-1">
            <Edit3 className="w-4 h-4" />
            Изменить
          </button>
        </div>
        
        <div className="grid grid-cols-3 gap-3">
          {profile.photos.map((photo, index) => (
            <div key={index} className="relative aspect-square">
              <img
                src={photo}
                alt={`Фото ${index + 1}`}
                className="w-full h-full object-cover rounded-lg"
              />
              {index === 0 && (
                <div className="absolute top-2 left-2 bg-pink-500 text-white text-xs px-2 py-1 rounded">
                  Главная
                </div>
              )}
            </div>
          ))}
          
          {/* Add Photo Button */}
          <button className="aspect-square border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center hover:border-pink-300 transition-colors">
            <Camera className="w-8 h-8 text-gray-400" />
          </button>
        </div>
      </div>

      {/* Basic Info */}
      <div className="bg-white p-4 mb-2">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold text-gray-900">Основная информация</h2>
          <button className="text-pink-500 font-medium text-sm flex items-center gap-1">
            <Edit3 className="w-4 h-4" />
            Изменить
          </button>
        </div>
        
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-gray-600">Имя</span>
            <div className="flex items-center gap-2">
              <span className="font-medium text-gray-900">{profile.name}</span>
              {profile.verified && (
                <Shield className="w-4 h-4 text-blue-500 fill-current" />
              )}
            </div>
          </div>
          
          <div className="flex items-center justify-between">
            <span className="text-gray-600">Возраст</span>
            <span className="font-medium text-gray-900">{profile.age} лет</span>
          </div>
          
          <div className="flex items-center justify-between">
            <span className="text-gray-600">Местоположение</span>
            <div className="flex items-center gap-1">
              <MapPin className="w-4 h-4 text-gray-500" />
              <span className="font-medium text-gray-900">{profile.location}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bio */}
      <div className="bg-white p-4 mb-2">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold text-gray-900">О себе</h2>
          <button className="text-pink-500 font-medium text-sm flex items-center gap-1">
            <Edit3 className="w-4 h-4" />
            Изменить
          </button>
        </div>
        
        <p className="text-gray-700 leading-relaxed">{profile.bio}</p>
      </div>

      {/* Interests */}
      <div className="bg-white p-4 mb-2">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold text-gray-900">Интересы</h2>
          <button className="text-pink-500 font-medium text-sm flex items-center gap-1">
            <Edit3 className="w-4 h-4" />
            Изменить
          </button>
        </div>
        
        <div className="flex flex-wrap gap-2">
          {profile.interests.map((interest) => (
            <span
              key={interest}
              className="px-3 py-2 bg-pink-100 text-pink-700 rounded-full text-sm font-medium"
            >
              {interest}
            </span>
          ))}
        </div>
      </div>

      <BottomNavigation />
    </div>
  );
}