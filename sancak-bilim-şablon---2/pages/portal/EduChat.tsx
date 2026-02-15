
import React, { useState, useEffect, useRef } from 'react';
import { 
  Search, 
  MoreVertical, 
  Phone, 
  Video, 
  Paperclip, 
  Mic, 
  Send, 
  Smile, 
  CheckCheck,
  Plus,
  Image as ImageIcon,
  Camera,
  FileText,
  X,
  ChevronDown,
  Lock
} from 'lucide-react';
import { ChatConversation, ChatMessage, UserRole, User } from '../../types';

// Mock Data
const MOCK_CONVERSATIONS: ChatConversation[] = [
  {
    id: '1',
    contactName: 'Ahmet Hoca',
    contactRole: 'Matematik Öğretmeni',
    contactAvatar: 'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?auto=format&fit=crop&q=80&w=100',
    subjectTag: 'Matematik',
    lastMessage: 'Çözümü gönderdim, kontrol eder misin?',
    lastMessageTime: '14:30',
    unreadCount: 2,
    isOnline: true,
    messages: [
      { id: '1', senderId: 'teacher', text: 'Merhaba Zeynep, nasılsın?', timestamp: '14:25', isRead: true, type: 'text', role: UserRole.TEACHER },
      { id: '2', senderId: 'student', text: 'İyiyim hocam, türev sorusunda takıldım.', timestamp: '14:26', isRead: true, type: 'text', role: UserRole.STUDENT },
      { id: '3', senderId: 'student', image: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&q=80&w=400', timestamp: '14:26', isRead: true, type: 'image', role: UserRole.STUDENT },
      { id: '4', senderId: 'teacher', text: 'Bakıyorum hemen.', timestamp: '14:28', isRead: true, type: 'text', role: UserRole.TEACHER },
      { id: '5', senderId: 'teacher', text: 'Çözümü gönderdim, kontrol eder misin?', timestamp: '14:30', isRead: false, type: 'text', role: UserRole.TEACHER },
    ]
  },
  {
    id: '2',
    contactName: 'Elif Hoca',
    contactRole: 'Fizik Öğretmeni',
    contactAvatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=100',
    subjectTag: 'Fizik',
    lastMessage: 'Yarınki etütte görüşürüz.',
    lastMessageTime: 'Dün',
    unreadCount: 0,
    isOnline: false,
    messages: [
      { id: '1', senderId: 'teacher', text: 'Optik sorularını bitirdin mi?', timestamp: '10:00', isRead: true, type: 'text', role: UserRole.TEACHER },
      { id: '2', senderId: 'student', text: 'Evet hocam, son test kaldı.', timestamp: '10:15', isRead: true, type: 'text', role: UserRole.STUDENT },
    ]
  },
  {
    id: '3',
    contactName: 'Rehberlik Servisi',
    contactRole: 'Danışman',
    contactAvatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=100',
    subjectTag: 'Genel',
    lastMessage: 'Deneme sınavı sonuçların açıklandı.',
    lastMessageTime: 'Pazartesi',
    unreadCount: 0,
    isOnline: true,
    messages: []
  }
];

interface EduChatProps {
  user: User;
}

const EduChat: React.FC<EduChatProps> = ({ user }) => {
  const [activeChatId, setActiveChatId] = useState<string | null>(null);
  const [conversations, setConversations] = useState<ChatConversation[]>(MOCK_CONVERSATIONS);
  const [newMessage, setNewMessage] = useState('');
  const [showAttachments, setShowAttachments] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const activeChat = conversations.find(c => c.id === activeChatId);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [activeChat?.messages]);

  const handleSendMessage = () => {
    if (!newMessage.trim() || !activeChatId) return;

    const newMsg: ChatMessage = {
      id: Date.now().toString(),
      senderId: 'student',
      text: newMessage,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      isRead: false,
      type: 'text',
      role: user.role
    };

    setConversations(prev => prev.map(c => {
      if (c.id === activeChatId) {
        return {
          ...c,
          messages: [...c.messages, newMsg],
          lastMessage: newMessage,
          lastMessageTime: 'Şimdi'
        };
      }
      return c;
    }));

    setNewMessage('');
    setShowAttachments(false);
    
    // Simulate reply
    setTimeout(() => {
        const replyMsg: ChatMessage = {
            id: (Date.now() + 1).toString(),
            senderId: 'teacher',
            text: 'Sorunu aldım, inceliyorum.',
            timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
            isRead: true,
            type: 'text',
            role: UserRole.TEACHER
        };
        setConversations(prev => prev.map(c => {
            if (c.id === activeChatId) {
              return {
                ...c,
                messages: [...c.messages, replyMsg],
                lastMessage: 'Sorunu aldım, inceliyorum.',
                lastMessageTime: 'Şimdi'
              };
            }
            return c;
        }));
    }, 2000);
  };

  const handleAttach = (type: string) => {
    alert(`${type} yükleme ekranı açılıyor...`);
    setShowAttachments(false);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div className="flex h-[calc(100vh-8rem)] bg-white rounded-2xl overflow-hidden shadow-2xl border border-gray-200">
      {/* Sidebar */}
      <div className={`w-full md:w-[350px] bg-white border-r border-gray-200 flex flex-col ${activeChatId ? 'hidden md:flex' : 'flex'}`}>
        {/* Sidebar Header */}
        <div className="h-[60px] bg-gray-50 flex items-center justify-between px-4 border-b border-gray-200">
          <div className="flex items-center gap-3">
             <img src={user.avatar} alt="Profile" className="w-10 h-10 rounded-full cursor-pointer" />
             <span className="font-bold text-gray-700">Sohbetler</span>
          </div>
          <div className="flex gap-2 text-gray-600">
             <button className="p-2 hover:bg-gray-200 rounded-full">
                <MoreVertical size={20} />
             </button>
          </div>
        </div>

        {/* Search Bar */}
        <div className="p-2 bg-white border-b border-gray-100">
            <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                <input 
                    type="text" 
                    placeholder="Aratın veya yeni sohbet başlatın" 
                    className="w-full pl-10 pr-4 py-2 bg-gray-100 rounded-lg text-sm focus:outline-none focus:ring-1 focus:ring-whatsapp-teal"
                />
            </div>
        </div>

        {/* Chat List */}
        <div className="flex-1 overflow-y-auto custom-scrollbar">
            {conversations.map(chat => (
                <div 
                    key={chat.id} 
                    onClick={() => setActiveChatId(chat.id)}
                    className={`flex items-center gap-3 p-3 cursor-pointer border-b border-gray-50 hover:bg-gray-50 transition-colors ${activeChatId === chat.id ? 'bg-gray-100' : ''}`}
                >
                    <div className="relative">
                        <img src={chat.contactAvatar} alt={chat.contactName} className="w-12 h-12 rounded-full object-cover" />
                        {chat.isOnline && <div className="absolute bottom-0 right-0 w-3 h-3 bg-whatsapp-green border-2 border-white rounded-full"></div>}
                    </div>
                    <div className="flex-1 min-w-0">
                        <div className="flex justify-between items-baseline mb-1">
                            <h4 className="font-semibold text-gray-900 truncate">{chat.contactName}</h4>
                            <span className={`text-xs ${chat.unreadCount > 0 ? 'text-whatsapp-green font-bold' : 'text-gray-500'}`}>{chat.lastMessageTime}</span>
                        </div>
                        <div className="flex justify-between items-center">
                            <p className="text-sm text-gray-600 truncate flex-1">{chat.lastMessage}</p>
                            {chat.unreadCount > 0 && (
                                <span className="ml-2 bg-whatsapp-green text-white text-xs font-bold px-2 py-0.5 rounded-full min-w-[20px] text-center">
                                    {chat.unreadCount}
                                </span>
                            )}
                        </div>
                        <div className="mt-1">
                             <span className={`text-[10px] px-1.5 py-0.5 rounded border ${
                                chat.subjectTag === 'Matematik' ? 'bg-blue-50 text-blue-600 border-blue-200' :
                                chat.subjectTag === 'Fizik' ? 'bg-purple-50 text-purple-600 border-purple-200' :
                                'bg-gray-50 text-gray-600 border-gray-200'
                             }`}>
                                {chat.subjectTag}
                             </span>
                        </div>
                    </div>
                </div>
            ))}
        </div>
      </div>

      {/* Chat Area */}
      {activeChat ? (
        <div className={`flex-1 flex flex-col bg-whatsapp-bg h-full ${!activeChatId ? 'hidden md:flex' : 'flex'}`}>
            {/* Chat Header */}
            <div className="h-[60px] bg-gray-50 flex items-center justify-between px-4 border-b border-gray-200 z-10">
                <div className="flex items-center gap-3">
                    <button className="md:hidden text-gray-600" onClick={() => setActiveChatId(null)}>
                        <ChevronDown className="rotate-90" size={24} />
                    </button>
                    <img src={activeChat.contactAvatar} alt={activeChat.contactName} className="w-10 h-10 rounded-full cursor-pointer" />
                    <div className="flex flex-col cursor-pointer">
                        <span className="font-bold text-gray-800 leading-tight">{activeChat.contactName}</span>
                        <span className="text-xs text-gray-500">{activeChat.isOnline ? 'Çevrimiçi' : activeChat.contactRole}</span>
                    </div>
                </div>
                <div className="flex items-center gap-4 text-gray-600">
                    <button className="p-2 hover:bg-gray-200 rounded-full"><Video size={20} /></button>
                    <button className="p-2 hover:bg-gray-200 rounded-full"><Phone size={20} /></button>
                    <button className="p-2 hover:bg-gray-200 rounded-full"><Search size={20} /></button>
                    <button className="p-2 hover:bg-gray-200 rounded-full"><MoreVertical size={20} /></button>
                </div>
            </div>

            {/* Messages Area */}
            <div className="flex-1 overflow-y-auto p-4 chat-pattern custom-scrollbar relative">
                {activeChat.messages.map((msg) => {
                    const isMyMessage = msg.role === user.role;
                    return (
                        <div key={msg.id} className={`flex mb-3 ${isMyMessage ? 'justify-end' : 'justify-start'}`}>
                            <div className={`max-w-[70%] rounded-lg px-3 py-2 shadow-sm relative group ${
                                isMyMessage 
                                ? 'bg-chat-student rounded-tr-none' 
                                : 'bg-white rounded-tl-none'
                            }`}>
                                {msg.image && (
                                    <div className="mb-2 rounded-lg overflow-hidden cursor-pointer">
                                        <img src={msg.image} alt="Attachment" className="max-w-full h-auto" />
                                    </div>
                                )}
                                {msg.text && <p className="text-sm text-gray-900 leading-relaxed whitespace-pre-wrap">{msg.text}</p>}
                                <div className="flex justify-end items-center gap-1 mt-1">
                                    <span className="text-[10px] text-gray-500">{msg.timestamp}</span>
                                    {isMyMessage && (
                                        <span className={msg.isRead ? 'text-blue-500' : 'text-gray-400'}>
                                            <CheckCheck size={14} />
                                        </span>
                                    )}
                                </div>
                                <button className="absolute top-0 right-0 p-1 opacity-0 group-hover:opacity-100 transition-opacity bg-gradient-to-l from-black/10 to-transparent rounded-tr-lg">
                                    <ChevronDown size={14} className="text-gray-500" />
                                </button>
                            </div>
                        </div>
                    );
                })}
                <div ref={messagesEndRef} />
            </div>

            {/* Input Area with Attachment Menu */}
            <div className="bg-gray-50 px-4 py-2 flex items-center gap-2 z-10 relative">
                {showAttachments && (
                    <div className="absolute bottom-16 left-4 bg-white rounded-xl shadow-xl border border-gray-100 p-2 flex flex-col gap-2 animate-in fade-in slide-in-from-bottom-2 z-20 w-48">
                        <button 
                            onClick={() => handleAttach('Fotoğraf')}
                            className="flex items-center gap-3 p-3 hover:bg-gray-50 rounded-lg text-gray-700 text-sm font-medium transition-colors"
                        >
                            <div className="bg-purple-100 p-2 rounded-full text-purple-600"><ImageIcon size={18} /></div>
                            Fotoğraf & Video
                        </button>
                        <button 
                             onClick={() => handleAttach('Kamera')}
                             className="flex items-center gap-3 p-3 hover:bg-gray-50 rounded-lg text-gray-700 text-sm font-medium transition-colors"
                        >
                            <div className="bg-red-100 p-2 rounded-full text-red-600"><Camera size={18} /></div>
                            Kamera
                        </button>
                        <button 
                             onClick={() => handleAttach('Belge')}
                             className="flex items-center gap-3 p-3 hover:bg-gray-50 rounded-lg text-gray-700 text-sm font-medium transition-colors"
                        >
                            <div className="bg-blue-100 p-2 rounded-full text-blue-600"><FileText size={18} /></div>
                            Belge
                        </button>
                    </div>
                )}

                <button className="p-2 text-gray-500 hover:bg-gray-200 rounded-full">
                    <Smile size={24} />
                </button>
                <button 
                    onClick={() => setShowAttachments(!showAttachments)}
                    className={`p-2 rounded-full transition-colors ${showAttachments ? 'bg-gray-200 text-gray-800' : 'text-gray-500 hover:bg-gray-200'}`}
                >
                    <Plus size={24} className={`transition-transform duration-300 ${showAttachments ? 'rotate-45' : ''}`} />
                </button>
                <div className="flex-1 bg-white rounded-lg flex items-center px-4 py-2 border border-gray-200 focus-within:ring-1 focus-within:ring-gray-300">
                    <input 
                        type="text" 
                        className="flex-1 bg-transparent border-none focus:outline-none text-sm"
                        placeholder="Bir mesaj yazın"
                        value={newMessage}
                        onChange={(e) => setNewMessage(e.target.value)}
                        onKeyDown={handleKeyPress}
                    />
                </div>
                {newMessage.trim() ? (
                    <button 
                        onClick={handleSendMessage}
                        className="p-3 bg-whatsapp-teal text-white rounded-full hover:bg-whatsapp-dark transition-colors shadow-md transform hover:scale-105"
                    >
                        <Send size={20} />
                    </button>
                ) : (
                    <button className="p-3 text-gray-500 hover:bg-gray-200 rounded-full">
                        <Mic size={24} />
                    </button>
                )}
            </div>
        </div>
      ) : (
        <div className="hidden md:flex flex-1 flex-col items-center justify-center bg-gray-50 border-b-8 border-whatsapp-green">
            <div className="w-80 text-center">
                <div className="w-40 h-40 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-6">
                     <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRniw2GWbEN0f_ppv18dmhFf2grg5EDVNI8nw&s" alt="Logo" className="w-24 h-24 opacity-50" />
                </div>
                <h2 className="text-3xl font-light text-gray-700 mb-4">EduChat</h2>
                <p className="text-gray-500 text-sm">
                    Sorularını sor, çözümlerini al, ders notlarını paylaş.<br/>
                    WhatsApp web benzeri arayüz ile kesintisiz eğitim.
                </p>
                <div className="mt-8 flex items-center justify-center gap-2 text-xs text-gray-400">
                    <Lock size={12} />
                    Uçtan uca güvenli eğitim iletişimi
                </div>
            </div>
        </div>
      )}
    </div>
  );
};

export default EduChat;
