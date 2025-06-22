import { User } from '@/types/user';

export const mockUsers: User[] = [
  {
    id: '1',
    name: 'Анна',
    age: 24,
    bio: 'Люблю путешествия, фотографию и хорошую компанию. Ищу серьезные отношения 💕',
    photos: [
      'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1858175/pexels-photo-1858175.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    location: 'Москва',
    interests: ['Путешествия', 'Фотография', 'Кино', 'Кулинария'],
    isOnline: true,
    verified: true
  },
  {
    id: '2',
    name: 'Мария',
    age: 26,
    bio: 'Дизайнер, йога-инструктор. Ценю искренность и чувство юмора ✨',
    photos: [
      'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    location: 'Санкт-Петербург',
    interests: ['Дизайн', 'Йога', 'Искусство', 'Медитация'],
    isOnline: false,
    lastSeen: new Date(Date.now() - 2 * 60 * 60 * 1000),
    verified: true
  },
  {
    id: '3',
    name: 'Елена',
    age: 22,
    bio: 'Студентка, танцую сальсу, изучаю языки. Открыта новым знакомствам! 💃',
    photos: [
      'https://images.pexels.com/photos/1542085/pexels-photo-1542085.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1845534/pexels-photo-1845534.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    location: 'Екатеринбург',
    interests: ['Танцы', 'Языки', 'Музыка', 'Спорт'],
    isOnline: true,
    verified: false
  },
  {
    id: '4',
    name: 'София',
    age: 28,
    bio: 'Врач, люблю активный отдых и книги. Ищу того, с кем можно построить будущее 🌟',
    photos: [
      'https://images.pexels.com/photos/1065084/pexels-photo-1065084.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    location: 'Новосибирск',
    interests: ['Медицина', 'Чтение', 'Походы', 'Наука'],
    isOnline: false,
    lastSeen: new Date(Date.now() - 30 * 60 * 1000),
    verified: true
  },
  {
    id: '5',
    name: 'Дарья',
    age: 25,
    bio: 'Маркетолог, обожаю кофе и долгие прогулки. Верю в настоящую любовь ☕',
    photos: [
      'https://images.pexels.com/photos/1382731/pexels-photo-1382731.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1391498/pexels-photo-1391498.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    location: 'Казань',
    interests: ['Маркетинг', 'Кофе', 'Прогулки', 'Психология'],
    isOnline: true,
    verified: true
  }
];