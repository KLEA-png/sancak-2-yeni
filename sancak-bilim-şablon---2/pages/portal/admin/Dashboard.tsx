
import React from 'react';
import { 
  Users, 
  DollarSign, 
  TrendingUp, 
  BookOpen, 
  Calendar,
  MessageSquare,
  ClipboardList,
  FilePlus,
  ArrowUpRight,
  UserPlus
} from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Rectangle } from 'recharts';
import { useNavigate } from 'react-router-dom';

const data = [
  { name: 'Oca', students: 400, income: 2400 },
  { name: 'Şub', students: 420, income: 3200 },
  { name: 'Mar', students: 460, income: 4800 },
  { name: 'Nis', students: 480, income: 5100 },
  { name: 'May', students: 500, income: 6200 },
  { name: 'Haz', students: 524, income: 6800 },
];

const AdminDashboard: React.FC = () => {
  const navigate = useNavigate();

  const quickActions = [
    { 
      label: 'Öğrenci Listeleri', 
      path: '/crm/students', 
      desc: 'Tüm şubeleri yönet', 
      icon: ClipboardList
    },
    { 
      label: 'Yoklama Takibi', 
      path: '/crm/reports', 
      desc: 'Devamsızlık durumları', 
      icon: Users
    },
    { 
      label: 'SMS Gönder', 
      path: '/crm/settings', 
      desc: 'Velilere bildirim ilet', 
      icon: MessageSquare
    },
    { 
      label: 'Sınav Oluştur', 
      path: '/crm/calendar', 
      desc: 'Yeni deneme sınavı', 
      icon: FilePlus
    },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
            <h1 className="text-2xl font-bold text-gray-900">Yönetici Dashboard</h1>
            <p className="text-gray-500">Hoşgeldiniz, kurum genel durum özeti.</p>
        </div>
        <div className="flex gap-3">
            <button onClick={() => navigate('/crm/students')} className="px-4 py-2 bg-primary text-white rounded-xl text-sm font-bold hover:bg-primary-light transition-all flex items-center gap-2 shadow-lg shadow-primary/20">
                <UserPlus size={18} /> Yeni Kayıt
            </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
            { label: 'Aktif Öğrenci', value: '524', change: '+12%', icon: Users, color: 'text-blue-600', bg: 'bg-blue-50' },
            { label: 'Aylık Gelir', value: '482.5k ₺', change: '+8.2%', icon: DollarSign, color: 'text-green-600', bg: 'bg-green-50' },
            { label: 'Aktif Kurslar', value: '24', change: '0%', icon: BookOpen, color: 'text-purple-600', bg: 'bg-purple-50' },
            { label: 'Ortalama Başarı', value: '%78', change: '+2.4%', icon: TrendingUp, color: 'text-orange-600', bg: 'bg-orange-50' },
        ].map((stat, i) => (
            <div key={i} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-all group">
                <div className="flex items-center justify-between mb-4">
                    <div className={`p-3 rounded-xl ${stat.bg} ${stat.color}`}>
                        <stat.icon size={22} />
                    </div>
                    <span className="text-[10px] font-bold text-green-600 bg-green-50 px-2 py-1 rounded-full">{stat.change}</span>
                </div>
                <div className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</div>
                <div className="text-xs text-gray-400 font-bold uppercase tracking-wider">{stat.label}</div>
            </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
            <div className="flex items-center justify-between mb-8">
                <h3 className="font-bold text-gray-800 flex items-center gap-2">
                    <TrendingUp size={20} className="text-primary" /> Kayıt & Gelir Analizi
                </h3>
            </div>
            <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={data}>
                        <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
                        <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#9ca3af', fontSize: 12}} />
                        <YAxis axisLine={false} tickLine={false} tick={{fill: '#9ca3af', fontSize: 12}} />
                        <Tooltip contentStyle={{borderRadius: '12px', border: 'none', boxShadow: '0 4px 20px rgba(0,0,0,0.1)'}} cursor={{fill: '#f9fafb'}} />
                        <Bar 
                          dataKey="students" 
                          fill="#1a237e" 
                          activeBar={<Rectangle fill="#ff6b35" />}
                          radius={[6, 6, 0, 0]} 
                          barSize={35} 
                        />
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
            <h3 className="font-bold text-gray-800 mb-6 flex items-center gap-2">
                <Calendar size={18} className="text-accent" /> Yaklaşan Etkinlikler
            </h3>
            <div className="space-y-4">
                {[
                    { title: 'Veli Toplantısı (12-A)', time: 'Yarın 18:00', type: 'meeting' },
                    { title: 'TYT Deneme-5', time: '20 Mayıs 09:00', type: 'exam' },
                    { title: 'Öğretmenler Kurulu', time: '22 Mayıs 17:30', type: 'admin' },
                ].map((event, idx) => (
                    <div key={idx} className="p-4 rounded-xl bg-gray-50 border border-transparent hover:border-primary/20 transition-all cursor-pointer">
                        <div className="text-sm font-bold text-gray-800">{event.title}</div>
                        <div className="text-xs text-gray-500 mt-1">{event.time}</div>
                    </div>
                ))}
            </div>
            <button onClick={() => navigate('/crm/calendar')} className="w-full mt-6 py-3 text-xs font-bold text-primary hover:bg-primary/5 rounded-xl transition-all uppercase tracking-widest border border-primary/10">Tüm Takvimi Gör</button>
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="font-bold text-gray-800 text-lg">Hızlı Erişim</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {quickActions.map((action, i) => (
                <button 
                    key={i} 
                    onClick={() => navigate(action.path)}
                    className="p-6 rounded-2xl bg-primary text-white transition-all shadow-lg shadow-primary/10 hover:bg-accent hover:-translate-y-1 active:scale-95 text-left group flex flex-col items-start"
                >
                    <div className="p-2 rounded-lg bg-white/20 mb-4 group-hover:scale-110 transition-transform">
                        <action.icon size={24} />
                    </div>
                    <div className="font-bold text-sm mb-1 text-white">{action.label}</div>
                    <div className="text-[10px] text-white/70 font-medium uppercase tracking-wider">{action.desc}</div>
                    <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity">
                        <ArrowUpRight size={18} className="text-white" />
                    </div>
                </button>
            ))}
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
