'use client';

import { useState } from 'react';
import { motion, PanInfo, useMotionValue, useTransform } from 'framer-motion';
import { Heart, X, MapPin, Shield } from 'lucide-react';
import { User } from '@/types/user';

interface SwipeCardProps {
  user: User;
  onSwipe: (direction: 'left' | 'right') => void;
  isTop: boolean;
}

export function SwipeCard({ user, onSwipe, isTop }: SwipeCardProps) {
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);
  const x = useMotionValue(0);
  const rotate = useTransform(x, [-200, 200], [-30, 30]);
  const opacity = useTransform(x, [-200, -100, 0, 100, 200], [0, 1, 1, 1, 0]);

  const handleDragEnd = (event: any, info: PanInfo) => {
    const threshold = 100;
    if (info.offset.x > threshold) {
      onSwipe('right');
    } else if (info.offset.x < -threshold) {
      onSwipe('left');
    }
  };

  const nextPhoto = () => {
    setCurrentPhotoIndex((prev) => 
      prev < user.photos.length - 1 ? prev + 1 : 0
    );
  };

  const prevPhoto = () => {
    setCurrentPhotoIndex((prev) => 
      prev > 0 ? prev - 1 : user.photos.length - 1
    );
  };

  return (
    <motion.div
      className={`absolute inset-4 bg-white rounded-2xl shadow-2xl overflow-hidden ${
        isTop ? 'z-20' : 'z-10'
      }`}
      style={{ x, rotate, opacity }}
      drag={isTop ? 'x' : false}
      dragConstraints={{ left: 0, right: 0 }}
      onDragEnd={handleDragEnd}
      whileDrag={{ scale: 1.05 }}
    >
      {/* Photo Section */}
      <div className="relative h-2/3">
        <img
          src={user.photos[currentPhotoIndex]}
          alt={user.name}
          className="w-full h-full object-cover"
        />
        
        {/* Photo Navigation */}
        <div className="absolute top-4 left-4 right-4 flex gap-1">
          {user.photos.map((_, index) => (
            <div
              key={index}
              className={`flex-1 h-1 rounded-full ${
                index === currentPhotoIndex ? 'bg-white' : 'bg-white/30'
              }`}
            />
          ))}
        </div>

        {/* Photo Navigation Buttons */}
        <button
          onClick={prevPhoto}
          className="absolute left-0 top-0 w-1/2 h-full"
        />
        <button
          onClick={nextPhoto}
          className="absolute right-0 top-0 w-1/2 h-full"
        />

        {/* Online Status */}
        {user.isOnline && (
          <div className="absolute top-4 right-4 bg-green-500 w-3 h-3 rounded-full border-2 border-white" />
        )}

        {/* Swipe Indicators */}
        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          style={{
            opacity: useTransform(x, [0, 100], [0, 1])
          }}
        >
          <div className="bg-green-500 text-white px-6 py-3 rounded-full font-bold text-xl rotate-12">
            НРАВИТСЯ
          </div>
        </motion.div>

        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          style={{
            opacity: useTransform(x, [-100, 0], [1, 0])
          }}
        >
          <div className="bg-red-500 text-white px-6 py-3 rounded-full font-bold text-xl -rotate-12">
            НЕ НРАВИТСЯ
          </div>
        </motion.div>
      </div>

      {/* Info Section */}
      <div className="p-6 h-1/3 flex flex-col justify-between">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <h2 className="text-2xl font-bold text-gray-900">{user.name}</h2>
            <span className="text-xl text-gray-600">{user.age}</span>
            {user.verified && (
              <Shield className="w-5 h-5 text-blue-500 fill-current" />
            )}
          </div>
          
          <div className="flex items-center gap-1 mb-3">
            <MapPin className="w-4 h-4 text-gray-500" />
            <span className="text-gray-600">{user.location}</span>
          </div>

          <p className="text-gray-700 text-sm leading-relaxed mb-3">
            {user.bio}
          </p>

          <div className="flex flex-wrap gap-2">
            {user.interests.slice(0, 3).map((interest) => (
              <span
                key={interest}
                className="px-3 py-1 bg-pink-100 text-pink-700 rounded-full text-xs font-medium"
              >
                {interest}
              </span>
            ))}
            {user.interests.length > 3 && (
              <span className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-xs font-medium">
                +{user.interests.length - 3}
              </span>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}