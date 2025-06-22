'use client';

import { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import { SwipeCard } from '@/components/SwipeCard/SwipeCard';
import { SwipeActions } from '@/components/SwipeActions/SwipeActions';
import { MatchModal } from '@/components/MatchModal/MatchModal';
import { BottomNavigation } from '@/components/BottomNavigation/BottomNavigation';
import { mockUsers } from '@/data/mockUsers';
import { User } from '@/types/user';

export default function Home() {
  const [users, setUsers] = useState<User[]>(mockUsers);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showMatch, setShowMatch] = useState(false);
  const [matchedUser, setMatchedUser] = useState<User | null>(null);

  const currentUser = users[currentIndex];
  const nextUser = users[currentIndex + 1];

  const handleSwipe = (direction: 'left' | 'right') => {
    if (direction === 'right') {
      // Simulate match (30% chance)
      if (Math.random() < 0.3) {
        setMatchedUser(currentUser);
        setShowMatch(true);
      }
    }

    setCurrentIndex(prev => prev + 1);
  };

  const handleLike = () => handleSwipe('right');
  const handleDislike = () => handleSwipe('left');
  const handleSuperLike = () => {
    // Super like always creates a match
    setMatchedUser(currentUser);
    setShowMatch(true);
    setCurrentIndex(prev => prev + 1);
  };

  const handleCloseMatch = () => {
    setShowMatch(false);
    setMatchedUser(null);
  };

  const handleSendMessage = () => {
    setShowMatch(false);
    setMatchedUser(null);
    // Navigate to matches page
    window.location.href = '/matches';
  };

  if (currentIndex >= users.length) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-pink-100 to-purple-100 flex items-center justify-center p-4">
        <div className="text-center">
          <div className="text-6xl mb-4">💕</div>
          <h2 className="text-2xl font-bold text-gray-800 mb-2">
            Пока что всё!
          </h2>
          <p className="text-gray-600">
            Новые анкеты появятся совсем скоро
          </p>
        </div>
        <BottomNavigation />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 to-purple-100">
      {/* Header */}
      <div className="flex items-center justify-between p-4 pt-8">
        <h1 className="text-2xl font-bold bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
          TeleDate
        </h1>
        <div className="text-sm text-gray-600">
          {users.length - currentIndex} анкет
        </div>
      </div>

      {/* Cards Stack */}
      <div className="relative h-[calc(100vh-200px)] max-w-sm mx-auto">
        {nextUser && (
          <SwipeCard
            key={`${nextUser.id}-next`}
            user={nextUser}
            onSwipe={() => {}}
            isTop={false}
          />
        )}
        {currentUser && (
          <SwipeCard
            key={`${currentUser.id}-current`}
            user={currentUser}
            onSwipe={handleSwipe}
            isTop={true}
          />
        )}
      </div>

      {/* Action Buttons */}
      <SwipeActions
        onDislike={handleDislike}
        onLike={handleLike}
        onSuperLike={handleSuperLike}
      />

      {/* Bottom Navigation */}
      <BottomNavigation />

      {/* Match Modal */}
      <AnimatePresence>
        {showMatch && matchedUser && (
          <MatchModal
            user={matchedUser}
            onClose={handleCloseMatch}
            onSendMessage={handleSendMessage}
          />
        )}
      </AnimatePresence>
    </div>
  );
}