'use client';

import { motion } from 'framer-motion';
import { Heart, MessageCircle, X } from 'lucide-react';
import { User } from '@/types/user';

interface MatchModalProps {
  user: User;
  onClose: () => void;
  onSendMessage: () => void;
}

export function MatchModal({ user, onClose, onSendMessage }: MatchModalProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-gradient-to-br from-pink-500 via-purple-500 to-red-500 z-50 flex items-center justify-center p-4"
    >
      <button
        onClick={onClose}
        className="absolute top-6 right-6 w-10 h-10 bg-white/20 rounded-full flex items-center justify-center"
      >
        <X className="w-6 h-6 text-white" />
      </button>

      <div className="text-center">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
          className="mb-8"
        >
          <Heart className="w-20 h-20 text-white mx-auto fill-current" />
        </motion.div>

        <motion.h1
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-4xl font-bold text-white mb-4"
        >
          Взаимная симпатия!
        </motion.h1>

        <motion.p
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="text-xl text-white/90 mb-8"
        >
          Вы понравились друг другу с {user.name}
        </motion.p>

        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="flex items-center justify-center gap-4 mb-8"
        >
          <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-white">
            <img
              src={user.photos[0]}
              alt={user.name}
              className="w-full h-full object-cover"
            />
          </div>
          <Heart className="w-8 h-8 text-white fill-current" />
          <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-white bg-gray-300 flex items-center justify-center">
            <span className="text-2xl">👤</span>
          </div>
        </motion.div>

        <motion.button
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1 }}
          onClick={onSendMessage}
          className="bg-white text-purple-600 px-8 py-4 rounded-full font-bold text-lg flex items-center gap-2 mx-auto hover:bg-gray-100 transition-colors"
        >
          <MessageCircle className="w-5 h-5" />
          Написать сообщение
        </motion.button>
      </div>
    </motion.div>
  );
}