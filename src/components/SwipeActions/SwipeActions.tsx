'use client';

import { Heart, X, Star, MessageCircle } from 'lucide-react';

interface SwipeActionsProps {
  onDislike: () => void;
  onLike: () => void;
  onSuperLike: () => void;
}

export function SwipeActions({ onDislike, onLike, onSuperLike }: SwipeActionsProps) {
  return (
    <div className="flex justify-center items-center gap-6 py-6">
      <button
        onClick={onDislike}
        className="w-14 h-14 bg-white rounded-full shadow-lg flex items-center justify-center border-2 border-gray-200 hover:border-red-300 transition-colors"
      >
        <X className="w-6 h-6 text-red-500" />
      </button>

      <button
        onClick={onSuperLike}
        className="w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center border-2 border-gray-200 hover:border-blue-300 transition-colors"
      >
        <Star className="w-5 h-5 text-blue-500" />
      </button>

      <button
        onClick={onLike}
        className="w-16 h-16 bg-gradient-to-r from-pink-500 to-red-500 rounded-full shadow-lg flex items-center justify-center hover:scale-105 transition-transform"
      >
        <Heart className="w-7 h-7 text-white fill-current" />
      </button>
    </div>
  );
}