
export enum UserRole {
  ADMIN = 'ADMIN',
  TEACHER = 'TEACHER',
  STUDENT = 'STUDENT',
  GUEST = 'GUEST'
}

export interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  avatar?: string;
}

export interface Course {
  id: string;
  title: string;
  description: string;
  grade: '9' | '10' | '11' | '12' | 'Mezun';
  stream: 'Sayısal' | 'Eşit Ağırlık' | 'Sözel' | 'Dil' | 'Genel';
  type: 'TYT' | 'AYT' | 'YDT' | 'YKS' | 'Okula Destek';
  format: 'Online' | 'Yüz Yüze';
  price: number;
  startDate: string;
  image: string;
}

export interface Teacher {
  id: string;
  name: string;
  branch: string; // e.g., Matematik, Fizik
  subject: string; // Specific focus e.g. Geometri
  image: string;
  bio: string;
}

export interface Stats {
  activeStudents: number;
  successRate: number;
  totalCourses: number;
  teachers: number;
}

export interface ExamResult {
  id: string;
  examName: string;
  date: string;
  score: number;
  totalQuestions: number;
  correct: number;
  wrong: number;
  empty: number;
}

export interface Announcement {
  id: string;
  title: string;
  date: string;
  category: string;
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  summary: string;
  content: string;
  date: string;
  category: 'Duyuru' | 'Haber' | 'YKS' | 'Rehberlik';
  image: string;
}

// EduChat Types
export interface ChatMessage {
  id: string;
  senderId: string;
  text?: string;
  image?: string;
  timestamp: string;
  isRead: boolean;
  type: 'text' | 'image' | 'voice' | 'system';
  role: UserRole;
}

export interface ChatConversation {
  id: string;
  contactName: string;
  contactAvatar: string;
  contactRole: string; // 'Matematik Öğretmeni' etc.
  subjectTag: string; // 'Matematik'
  lastMessage: string;
  lastMessageTime: string;
  unreadCount: number;
  isOnline: boolean;
  messages: ChatMessage[];
}