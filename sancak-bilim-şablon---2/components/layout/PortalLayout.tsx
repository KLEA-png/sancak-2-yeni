
import React, { useState, useRef, useEffect } from 'react';
import { Outlet, Link, useLocation, useNavigate } from 'react-router-dom';
import { User, UserRole } from '../../types';
import { 
  LayoutDashboard, 
  BookOpen, 
  Users, 
  Calendar, 
  FileText, 
  Settings, 
  LogOut, 
  Menu,
  GraduationCap,
  Bell,
  Search,
  PieChart,
  MessageCircle, 
  User as UserIcon,
  MessageSquareWarning,
  X,
  Send,
  ClipboardCheck,
  CreditCard
} from 'lucide-react';

interface PortalLayoutProps {
  user: User;
  onLogout: () => void;
}

const PortalLayout: React.FC<PortalLayoutProps> = ({ user, onLogout }) => {
  const [sidebarOpen, setSidebarOpen] = useState(window.innerWidth >= 768);
  const [notificationsOpen, setNotificationsOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [feedbackModalOpen, setFeedbackModalOpen] = useState(false);
  
  const notificationRef = useRef<HTMLDivElement>(null);
  const profileRef = useRef<HTMLDivElement>(null);

  const location = useLocation();
  const navigate = useNavigate();

  const notifications = [
    { id: 1, title: 'Yeni Ödev Eklendi', message: 'Matematik Türev konusu için yeni test atandı.', time: '10 dk önce', isRead: false },
    { id: 2, title: 'Ders Hatırlatması', message: 'Fizik dersiniz 15 dakika içinde başlayacak.', time: '1 saat önce', isRead: false },
    { id: 3, title: 'Sınav Sonucu', message: 'TYT Deneme-4 sonuçları açıklandı.', time: 'Dün', isRead: true },
  ];

  const unreadCount = notifications.filter(n => !n.isRead).length;

  useEffect(() => {
    const handleResize = () => {
        const mobile = window.innerWidth < 768;
        setIsMobile(mobile);
        if (mobile) setSidebarOpen(false);
        else setSidebarOpen(true);
    };
    window.addEventListener('resize', handleResize);
    function handleClickOutside(event: MouseEvent) {
      if (notificationRef.current && !notificationRef.current.contains(event.target as Node)) setNotificationsOpen(false);
      if (profileRef.current && !profileRef.current.contains(event.target as Node)) setProfileOpen(false);
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    if (isMobile) setSidebarOpen(false);
  }, [location, isMobile]);

  const handleLogoutClick = () => {
    onLogout();
    navigate('/crm/login');
  };

  const adminLinks = [
    { icon: LayoutDashboard, label: 'Dashboard', path: '/crm/dashboard' },
    { icon: Users, label: 'Öğrenciler', path: '/crm/students' },
    { icon: GraduationCap, label: 'Öğretmenler', path: '/crm/teachers' },
    { icon: BookOpen, label: 'Kurslar', path: '/crm/courses' },
    { icon: CreditCard, label: 'Ödemeler', path: '/crm/payments' },
    { icon: Calendar, label: 'Takvim', path: '/crm/calendar' },
    { icon: FileText, label: 'Raporlar', path: '/crm/reports' },
    { icon: Settings, label: 'Ayarlar', path: '/crm/settings' },
  ];

  const studentLinks = [
    { icon: LayoutDashboard, label: 'Genel Bakış', path: '/crm/dashboard' },
    { icon: Calendar, label: 'Ders Programı', path: '/crm/schedule' },
    { icon: MessageCircle, label: 'EduChat', path: '/crm/chat' },
    { icon: PieChart, label: 'Sınav Sonuçları', path: '/crm/results' },
    { icon: BookOpen, label: 'Ödevlerim', path: '/crm/homework' },
    { icon: FileText, label: 'Kaynaklar', path: '/crm/resources' },
  ];

  const teacherLinks = [
    { icon: LayoutDashboard, label: 'Genel Bakış', path: '/crm/dashboard' },
    { icon: Calendar, label: 'Ders Programım', path: '/crm/schedule' },
    { icon: MessageCircle, label: 'EduChat', path: '/crm/chat' },
    { icon: PieChart, label: 'Öğrenci Analizi', path: '/crm/results' },
    { icon: ClipboardCheck, label: 'Ödev Yönetimi', path: '/crm/homework' },
    { icon: FileText, label: 'Kaynak Paylaşımı', path: '/crm/resources' },
  ];

  const links = user.role === UserRole.ADMIN ? adminLinks : user.role === UserRole.TEACHER ? teacherLinks : studentLinks;

  return (
    <div className="min-h-screen bg-gray-50 flex overflow-x-hidden w-full max-w-full">
      {feedbackModalOpen && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
            <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setFeedbackModalOpen(false)}></div>
            <div className="relative bg-white rounded-2xl w-full max-w-md shadow-2xl p-6 animate-in fade-in zoom-in-95">
                <button onClick={() => setFeedbackModalOpen(false)} className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"><X size={20} /></button>
                <div className="flex items-center gap-3 mb-6">
                    <div className="p-3 bg-red-50 text-red-600 rounded-xl"><MessageSquareWarning size={24} /></div>
                    <div>
                        <h3 className="font-bold text-gray-900 text-lg">Geri Bildirim</h3>
                        <p className="text-xs text-gray-500">Sistemle ilgili görüşlerinizi paylaşın.</p>
                    </div>
                </div>
                <form onSubmit={(e) => { e.preventDefault(); setFeedbackModalOpen(false); }}>
                    <div className="space-y-4">
                        <select className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-primary text-sm bg-gray-50">
                            <option>Hata Bildirimi</option>
                            <option>Öneri / İstek</option>
                        </select>
                        <textarea className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-primary text-sm h-32 resize-none bg-gray-50" placeholder="Mesajınız..." required></textarea>
                        <button type="submit" className="w-full py-3 bg-primary text-white font-bold rounded-xl hover:bg-primary-light transition-colors flex items-center justify-center gap-2">Gönder <Send size={16} /></button>
                    </div>
                </form>
            </div>
        </div>
      )}

      {isMobile && sidebarOpen && (
        <div className="fixed inset-0 bg-black/50 z-40 backdrop-blur-sm transition-opacity" onClick={() => setSidebarOpen(false)}></div>
      )}

      <aside className={`bg-primary-dark text-white fixed h-full z-50 transition-all duration-300 flex flex-col shadow-2xl ${isMobile ? (sidebarOpen ? 'translate-x-0 w-64' : '-translate-x-full w-64') : (sidebarOpen ? 'w-64' : 'w-20')}`}>
        <div className="h-20 flex items-center justify-center border-b border-white/10 p-2">
           {(!isMobile && !sidebarOpen) ? (
             <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1zBZ5_L5a8zISY0-QhcP6Pf47VO4LZ-pwgA&s" alt="Logo" className="h-10 w-10 rounded-full border-2 border-white/20 cursor-pointer" onClick={() => setSidebarOpen(true)}/>
           ) : (
             <div className="flex items-center gap-3 px-2">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1zBZ5_L5a8zISY0-QhcP6Pf47VO4LZ-pwgA&s" alt="Logo" className="h-10 w-10 rounded-full shrink-0"/>
                <div className="flex flex-col">
                    <span className="font-heading font-bold text-sm leading-tight text-white">Sancak Bilim</span>
                    <span className="text-[10px] text-secondary font-bold tracking-wider uppercase">Portal</span>
                </div>
                {isMobile && <button onClick={() => setSidebarOpen(false)} className="ml-auto text-white/50 hover:text-white"><X size={20} /></button>}
             </div>
           )}
        </div>
        <nav className="flex-1 py-6 px-3 space-y-2 overflow-y-auto custom-scrollbar">
          {links.map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <Link key={link.path} to={link.path} className={`flex items-center gap-3 px-3 py-3 rounded-lg transition-all ${isActive ? 'bg-primary text-white shadow-lg' : 'text-gray-400 hover:bg-white/5 hover:text-white'}`}>
                <link.icon size={20} className="shrink-0" />
                {(isMobile || sidebarOpen) && <span className="text-sm font-medium whitespace-nowrap">{link.label}</span>}
              </Link>
            );
          })}
        </nav>
        <div className="p-4 border-t border-white/10 space-y-2">
           <button onClick={() => setFeedbackModalOpen(true)} className={`flex items-center gap-3 w-full px-3 py-2 rounded-lg text-yellow-400 hover:bg-yellow-400/10 transition-colors ${(!isMobile && !sidebarOpen) && 'justify-center'}`}>
            <MessageSquareWarning size={20} />
            {(isMobile || sidebarOpen) && <span className="text-sm font-medium">Hata Bildir</span>}
          </button>
          <button onClick={handleLogoutClick} className={`flex items-center gap-3 w-full px-3 py-2 rounded-lg text-red-400 hover:bg-red-500/10 transition-colors ${(!isMobile && !sidebarOpen) && 'justify-center'}`}>
            <LogOut size={20} />
            {(isMobile || sidebarOpen) && <span className="text-sm font-medium">Çıkış Yap</span>}
          </button>
        </div>
      </aside>

      <div className={`flex-1 flex flex-col transition-all duration-300 min-h-screen min-w-0 max-w-full ${isMobile ? 'ml-0' : (sidebarOpen ? 'ml-64' : 'ml-20')}`}>
        <header className="h-16 bg-white shadow-sm flex items-center justify-between px-4 md:px-6 sticky top-0 z-30 w-full">
          <div className="flex items-center gap-4">
            <button onClick={() => setSidebarOpen(!sidebarOpen)} className="p-2 hover:bg-gray-100 rounded-lg text-gray-600"><Menu size={24} /></button>
          </div>
          <div className="flex items-center gap-3 md:gap-4">
            <div className="relative" ref={notificationRef}>
                <button onClick={() => setNotificationsOpen(!notificationsOpen)} className="relative p-2 hover:bg-gray-100 rounded-full text-gray-600"><Bell size={20} />{unreadCount > 0 && <span className="absolute top-1 right-1 w-2.5 h-2.5 bg-red-500 rounded-full border-2 border-white"></span>}</button>
                {notificationsOpen && (
                    <div className="absolute right-0 mt-2 w-80 bg-white rounded-xl shadow-lg border border-gray-100 py-2 z-50 animate-in fade-in slide-in-from-top-2">
                        <div className="flex items-center justify-between px-4 py-2 border-b border-gray-50"><h3 className="font-bold text-gray-800 text-sm">Bildirimler</h3></div>
                        <div className="max-h-80 overflow-y-auto">
                            {notifications.map(notif => (
                                <div key={notif.id} className="px-4 py-3 hover:bg-gray-50 border-b border-gray-50 last:border-0"><div className="flex justify-between items-start mb-1"><span className={`text-sm font-semibold ${!notif.isRead ? 'text-primary' : 'text-gray-700'}`}>{notif.title}</span><span className="text-[10px] text-gray-400">{notif.time}</span></div><p className="text-xs text-gray-500 line-clamp-2">{notif.message}</p></div>
                            ))}
                        </div>
                    </div>
                )}
            </div>
            <div className="relative" ref={profileRef}>
                <button onClick={() => setProfileOpen(!profileOpen)} className="flex items-center gap-3 md:border-l md:pl-4">
                    <div className="text-right hidden md:block"><div className="text-sm font-semibold text-gray-800">{user.name}</div><div className="text-xs text-gray-500">{user.role}</div></div>
                    <img src={user.avatar} alt="Profile" className="w-8 h-8 md:w-9 md:h-9 rounded-full object-cover" />
                </button>
                {profileOpen && (
                    <div className="absolute right-0 mt-2 w-56 bg-white rounded-xl shadow-lg border border-gray-100 py-2 z-50 animate-in fade-in slide-in-from-top-2">
                        <button className="w-full flex items-center gap-3 px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 transition-colors"><UserIcon size={16} /> Profilim</button>
                        <button className="w-full flex items-center gap-3 px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 transition-colors"><Settings size={16} /> Ayarlar</button>
                        <div className="border-t border-gray-50 my-1"></div>
                        <button onClick={handleLogoutClick} className="w-full flex items-center gap-3 px-4 py-2.5 text-sm text-red-600 hover:bg-red-50 transition-colors"><LogOut size={16} /> Çıkış Yap</button>
                    </div>
                )}
            </div>
          </div>
        </header>
        <main className="flex-1 p-4 md:p-6 overflow-y-auto overflow-x-hidden min-w-0">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default PortalLayout;
