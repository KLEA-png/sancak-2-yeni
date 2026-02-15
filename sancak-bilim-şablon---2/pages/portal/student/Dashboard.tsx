
import React from 'react';
import { 
  Book, 
  Clock, 
  Calendar as CalendarIcon, 
  Target,
  ChevronRight,
  PlayCircle,
  FileText,
  TrendingUp,
  BarChart2,
  PieChart,
  Users, 
  MapPin, 
  CheckCircle, 
  Bell
} from 'lucide-react';
import { 
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area,
  BarChart, Bar, Legend, Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis,
  PieChart as RePieChart, Pie, Cell
} from 'recharts';
import { EXAM_RESULTS, ANNOUNCEMENTS } from '../../../constants';
import { useNavigate } from 'react-router-dom';

// Enhanced Mock Data for Comparisons
const NET_PROGRESS_DATA = EXAM_RESULTS.map(exam => ({
    name: exam.examName.replace('Deneme-', 'D'),
    ogrenci: exam.correct - (exam.wrong * 0.25),
    sinif_ortalamasi: (exam.correct - (exam.wrong * 0.25)) * 0.85, // Mocking class average slightly lower
}));

const SUBJECT_PERFORMANCE_DATA = [
    { subject: 'Matematik', A: 32, B: 25, fullMark: 40 },
    { subject: 'Fizik', A: 12, B: 8, fullMark: 14 },
    { subject: 'Kimya', A: 10, B: 9, fullMark: 13 },
    { subject: 'Biyoloji', A: 11, B: 8, fullMark: 13 },
    { subject: 'Türkçe', A: 35, B: 30, fullMark: 40 },
    { subject: 'Sosyal', A: 18, B: 15, fullMark: 20 },
];

const CORRECT_WRONG_DATA = [
    { name: 'Doğru', value: 98, color: '#00b894' },
    { name: 'Yanlış', value: 12, color: '#d63031' },
    { name: 'Boş', value: 10, color: '#b2bec3' },
];

const StudentDashboard: React.FC = () => {
  const navigate = useNavigate();
  
  const nextClass = {
    subject: 'Matematik - Türev',
    teacher: 'Ahmet Yılmaz',
    time: '14:30',
    room: 'Derslik 3A',
    duration: '45 dk'
  };

  const handleNavigate = (path: string) => {
    navigate(path);
  };

  const handleAction = (action: string) => {
    alert(`${action} işlemi başlatılıyor...`);
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
        <div>
            <h1 className="text-2xl font-bold text-gray-900">Merhaba, Zeynep! 👋</h1>
            <p className="text-gray-500">Bugün öğrenmek için harika bir gün.</p>
        </div>
        <div className="bg-white px-4 py-2 rounded-lg shadow-sm border border-gray-100 flex items-center gap-3 w-fit">
            <div className="text-right">
                <div className="text-xs text-gray-500">Sıradaki Hedef</div>
                <div className="font-bold text-primary">TYT 100+ Net</div>
            </div>
            <div className="h-10 w-10 rounded-full border-4 border-secondary/30 border-t-secondary flex items-center justify-center text-xs font-bold">
                %85
            </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column */}
        <div className="lg:col-span-2 space-y-6">
            {/* Next Class Card */}
            <div className="bg-gradient-to-r from-primary to-primary-light rounded-2xl p-6 text-white shadow-lg relative overflow-hidden">
                <div className="absolute right-0 top-0 h-full w-1/3 bg-white/10 skew-x-12 transform translate-x-8"></div>
                <div className="relative z-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                    <div>
                        <div className="bg-white/20 inline-block px-3 py-1 rounded-full text-xs font-medium mb-3">Sıradaki Ders</div>
                        <h2 className="text-3xl font-bold mb-1">{nextClass.time}</h2>
                        <div className="text-xl font-medium mb-4">{nextClass.subject}</div>
                        <div className="flex flex-wrap items-center gap-4 text-sm opacity-90">
                            <div className="flex items-center gap-1"><Users size={16} /> {nextClass.teacher}</div>
                            <div className="flex items-center gap-1"><Clock size={16} /> {nextClass.duration}</div>
                            <div className="flex items-center gap-1"><MapPin size={16} /> {nextClass.room}</div>
                        </div>
                    </div>
                    <div className="hidden sm:block">
                        <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                            <Book size={40} />
                        </div>
                    </div>
                </div>
            </div>

            {/* ANALYTICS SECTION - MULTIPLE CHARTS */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                
                {/* Chart 1: Net Progression vs Class Average */}
                <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-100 md:col-span-2">
                    <div className="flex items-center justify-between mb-6">
                        <h3 className="font-bold text-gray-800 flex items-center gap-2">
                            <TrendingUp size={18} className="text-primary" /> 
                            Net Gelişimi & Sınıf Karşılaştırması
                        </h3>
                    </div>
                    <div className="h-64">
                        <ResponsiveContainer width="100%" height="100%">
                            <AreaChart data={NET_PROGRESS_DATA}>
                                <defs>
                                    <linearGradient id="colorStudent" x1="0" y1="0" x2="0" y2="1">
                                        <stop offset="5%" stopColor="#1a237e" stopOpacity={0.2}/>
                                        <stop offset="95%" stopColor="#1a237e" stopOpacity={0}/>
                                    </linearGradient>
                                    <linearGradient id="colorAvg" x1="0" y1="0" x2="0" y2="1">
                                        <stop offset="5%" stopColor="#ff6b35" stopOpacity={0.1}/>
                                        <stop offset="95%" stopColor="#ff6b35" stopOpacity={0}/>
                                    </linearGradient>
                                </defs>
                                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
                                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#9ca3af', fontSize: 11}} dy={10} />
                                <YAxis axisLine={false} tickLine={false} tick={{fill: '#9ca3af', fontSize: 11}} domain={[0, 120]} />
                                <Tooltip 
                                    contentStyle={{backgroundColor: '#fff', borderRadius: '8px', border: '1px solid #e5e7eb', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)', color: '#1f2937'}} 
                                    itemStyle={{ color: '#1f2937' }}
                                />
                                <Legend iconType="circle" />
                                <Area type="monotone" name="Senin Netin" dataKey="ogrenci" stroke="#1a237e" strokeWidth={3} fillOpacity={1} fill="url(#colorStudent)" />
                                <Area type="monotone" name="Sınıf Ort." dataKey="sinif_ortalamasi" stroke="#ff6b35" strokeWidth={2} strokeDasharray="5 5" fillOpacity={1} fill="url(#colorAvg)" />
                            </AreaChart>
                        </ResponsiveContainer>
                    </div>
                </div>

                {/* Chart 2: Subject Performance Radar */}
                <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-100">
                    <h3 className="font-bold text-gray-800 mb-4 text-sm flex items-center gap-2">
                         <Target size={16} className="text-secondary" />
                         Ders Bazlı Başarı Analizi
                    </h3>
                    <div className="h-60">
                         <ResponsiveContainer width="100%" height="100%">
                            <RadarChart outerRadius={70} data={SUBJECT_PERFORMANCE_DATA}>
                                <PolarGrid stroke="#e5e7eb" />
                                <PolarAngleAxis dataKey="subject" tick={{ fill: '#6b7280', fontSize: 10 }} />
                                <PolarRadiusAxis angle={30} domain={[0, 40]} tick={false} axisLine={false} />
                                <Radar name="Sen" dataKey="A" stroke="#1a237e" strokeWidth={2} fill="#1a237e" fillOpacity={0.3} />
                                <Radar name="Sınıf Ort." dataKey="B" stroke="#ff6b35" strokeWidth={2} fill="#ff6b35" fillOpacity={0.1} />
                                <Legend iconSize={8} wrapperStyle={{ fontSize: '10px' }} />
                                <Tooltip 
                                    contentStyle={{backgroundColor: '#fff', borderRadius: '8px', border: '1px solid #e5e7eb', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)', color: '#1f2937', fontSize: '12px'}} 
                                    itemStyle={{ color: '#1f2937' }}
                                />
                            </RadarChart>
                        </ResponsiveContainer>
                    </div>
                </div>

                {/* Chart 3: Success Distribution */}
                <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-100">
                    <h3 className="font-bold text-gray-800 mb-4 text-sm flex items-center gap-2">
                        <PieChart size={16} className="text-green-500" />
                        Son Deneme Analizi
                    </h3>
                    <div className="h-60 flex items-center justify-center relative">
                        <ResponsiveContainer width="100%" height="100%">
                            <RePieChart>
                                <Pie
                                    data={CORRECT_WRONG_DATA}
                                    innerRadius={50}
                                    outerRadius={70}
                                    paddingAngle={5}
                                    dataKey="value"
                                >
                                    {CORRECT_WRONG_DATA.map((entry, index) => (
                                        <Cell key={`cell-${index}`} fill={entry.color} />
                                    ))}
                                </Pie>
                                <Tooltip 
                                    contentStyle={{backgroundColor: '#fff', borderRadius: '8px', border: '1px solid #e5e7eb', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)', color: '#1f2937', padding: '8px 12px'}} 
                                    itemStyle={{ color: '#1f2937' }}
                                    wrapperStyle={{ outline: 'none' }}
                                />
                                <Legend verticalAlign="bottom" iconSize={8} wrapperStyle={{ fontSize: '11px' }} />
                            </RePieChart>
                        </ResponsiveContainer>
                        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                             <div className="text-center">
                                 <div className="text-2xl font-bold text-gray-800">120</div>
                                 <div className="text-[10px] text-gray-500">Soru</div>
                             </div>
                        </div>
                    </div>
                </div>
            </div>
            
             {/* Recent Homework */}
             <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <div className="flex items-center justify-between mb-4">
                    <h3 className="font-bold text-gray-800">Son Ödevler</h3>
                    <button 
                        onClick={() => handleNavigate('/crm/homework')} 
                        className="text-sm text-primary font-medium hover:underline"
                    >
                        Tümü
                    </button>
                </div>
                <div className="space-y-3">
                    {[
                        { title: 'Türev Test 3 - Çözülecek', date: 'Yarın', subject: 'Matematik', status: 'pending' },
                        { title: 'Modern Fizik Özeti', date: '3 gün kaldı', subject: 'Fizik', status: 'pending' },
                        { title: 'Paragraf Denemesi', date: 'Tamamlandı', subject: 'Türkçe', status: 'completed' }
                    ].map((hw, i) => (
                        <div key={i} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                            <div className="flex items-center gap-3">
                                <div className={`w-2 h-10 rounded-full ${hw.subject === 'Matematik' ? 'bg-blue-500' : hw.subject === 'Fizik' ? 'bg-purple-500' : 'bg-orange-500'}`}></div>
                                <div>
                                    <div className="font-semibold text-gray-800 text-sm">{hw.title}</div>
                                    <div className="text-xs text-gray-500">{hw.subject} • {hw.date}</div>
                                </div>
                            </div>
                            {hw.status === 'completed' ? (
                                <span className="text-green-600 bg-green-100 p-1 rounded-full"><CheckCircle size={16} /></span>
                            ) : (
                                <button 
                                    onClick={() => handleAction(`Ödev Detayı: ${hw.title}`)}
                                    className="text-xs bg-white border border-gray-300 px-3 py-1 rounded-md hover:bg-primary hover:text-white hover:border-primary transition-all"
                                >
                                    Detay
                                </button>
                            )}
                        </div>
                    ))}
                </div>
             </div>
        </div>

        {/* Right Column */}
        <div className="space-y-6">
            {/* Announcements */}
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <h3 className="font-bold text-gray-800 mb-4 flex items-center gap-2"><Bell size={18} className="text-accent" /> Duyurular</h3>
                <div className="space-y-4">
                    {ANNOUNCEMENTS.map(ann => (
                        <div key={ann.id} className="pb-3 border-b border-gray-50 last:border-0 last:pb-0">
                            <div className="flex justify-between items-start mb-1">
                                <span className="text-xs font-bold text-primary bg-primary/5 px-2 py-0.5 rounded">{ann.category}</span>
                                <span className="text-xs text-gray-400">{ann.date}</span>
                            </div>
                            <p 
                                onClick={() => handleAction(`Duyuru Detayı: ${ann.title}`)}
                                className="text-sm font-medium text-gray-700 hover:text-primary cursor-pointer transition-colors"
                            >
                                {ann.title}
                            </p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <h3 className="font-bold text-gray-800 mb-4">Hızlı İşlemler</h3>
                <div className="grid grid-cols-2 gap-3">
                    <button 
                        onClick={() => handleNavigate('/crm/resources')}
                        className="flex flex-col items-center justify-center p-4 bg-blue-50 text-blue-700 rounded-xl hover:bg-blue-100 transition-colors"
                    >
                        <PlayCircle size={24} className="mb-2" />
                        <span className="text-xs font-bold">Video İzle</span>
                    </button>
                    <button 
                        onClick={() => handleNavigate('/crm/schedule')}
                        className="flex flex-col items-center justify-center p-4 bg-orange-50 text-orange-700 rounded-xl hover:bg-orange-100 transition-colors"
                    >
                        <Target size={24} className="mb-2" />
                        <span className="text-xs font-bold">Etüt Al</span>
                    </button>
                    <button 
                        onClick={() => handleNavigate('/crm/results')}
                        className="flex flex-col items-center justify-center p-4 bg-green-50 text-green-700 rounded-xl hover:bg-green-100 transition-colors"
                    >
                        <FileText size={24} className="mb-2" />
                        <span className="text-xs font-bold">Sonuçlarım</span>
                    </button>
                    <button 
                        onClick={() => handleNavigate('/crm/chat')}
                        className="flex flex-col items-center justify-center p-4 bg-purple-50 text-purple-700 rounded-xl hover:bg-purple-100 transition-colors"
                    >
                        <Users size={24} className="mb-2" />
                        <span className="text-xs font-bold">Soru Sor</span>
                    </button>
                </div>
            </div>

            {/* Teacher Note */}
            <div className="bg-yellow-50 p-6 rounded-xl border border-yellow-100">
                <div className="flex items-center gap-3 mb-3">
                    <img src="https://picsum.photos/seed/t1/50/50" className="w-10 h-10 rounded-full" alt="Teacher" />
                    <div>
                        <div className="font-bold text-sm text-gray-800">Ahmet Hoca</div>
                        <div className="text-xs text-gray-500">Rehberlik</div>
                    </div>
                </div>
                <p className="text-sm text-gray-600 italic">"Bu hafta matematik netlerinde güzel bir artış var Zeynep, tempoyu bozmadan devam edelim. Geometri eksiklerine biraz daha ağırlık ver."</p>
            </div>
        </div>
      </div>
    </div>
  );
};

export default StudentDashboard;
