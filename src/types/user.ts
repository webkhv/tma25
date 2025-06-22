export interface User {
  id: string;
  name: string;
  age: number;
  bio: string;
  photos: string[];
  location: string;
  interests: string[];
  isOnline: boolean;
  lastSeen?: Date;
  verified: boolean;
}

export interface Match {
  id: string;
  user: User;
  matchedAt: Date;
  lastMessage?: Message;
}

export interface Message {
  id: string;
  senderId: string;
  text: string;
  timestamp: Date;
  read: boolean;
}

export interface Chat {
  id: string;
  matchId: string;
  messages: Message[];
}