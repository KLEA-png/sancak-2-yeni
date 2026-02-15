
import React, { useState } from 'react';
import { 
  Users, 
  Clock, 
  TrendingUp,
  ClipboardCheck,
  MessageSquare,
  Plus,
  MapPin,
  ArrowRight,
  AlertCircle,
  X,
  Megaphone,
  FilePlus,
  CalendarPlus,
  PlusCircle,
  CheckCircle2,
  Save,
  Check,
  UserCheck
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const CLASS_SUCCESS_DATA = [
  { name: '12-A SAY', success: 85 },
  { name: '12-B SAY', success: 78 },
  { name: 'Mezun-A', success: 92 },
  { name: '11-A SAY', success: 72 },
];

const UPCOMING_LESSONS = [
    { id: 1, time: '14:00', class: 'Mezun-A', subject: 'Trigonometri Soru Çözümü', room: 'Z-12', status: 'Sıradaki', students: 20 },
    { id: 2, time: '15:30', class: '12-B SAY', subject: 'İntegral Temelleri', room: '102', status: 'Yaklaşan', students: 16 },
    { id: 3, time: '17:00', class: '11-A SAY', subject: 'Polinomlar Giriş', room: '105', status: 'Akşam', students: 24 },
];

const CLASS_STUDENTS: Record<string, any[]> = {
    '12-A SAY': [
        { id: 1, name: 'Zeynep Yılmaz', present: true },
        { id: 2, name: 'Ali Demir', present: true },
        { id: 3, name: 'Merve Kaya', present: false },
        { id: 4, name: 'Can Özkan', present: true },
        { id: 5, name: 'Selin Işık', present: true },
    ],
    '12-B SAY': [
        { id: 6, name: 'Burak Ak', present: true },
        { id: 7, name: 'Deniz Gök', present: true },
        { id: 8, name: 'Ece Su', present: true },
    ],
    'Mezun-A': [
        { id: 9, name: 'Hakan Mert', present: true },
        { id: 10, name: 'Seda Nur', present: false },
    ]
};

const TeacherDashboard: React.FC = () => {
  const navigate = useNavigate();
  const [activeModal, setActiveModal] = useState<string | null>(null);
  
  // Yoklama State
  const [selectedAttendanceClass, setSelectedAttendanceClass] = useState('12-A SAY');
  const [attendanceData, setAttendanceData] = useState(CLASS_STUDENTS);

  const toggleAttendance = (studentId: number) => {
    setAttendanceData(prev => ({
        ...prev,
        [selectedAttendanceClass]: prev[selectedAttendanceClass].map(s => 
            s.id === studentId ? { ...s, present: !s.present } : s
        )
    }));
  };

  const handleSaveAttendance = () => {
    alert(`${selectedAttendanceClass} sınıfı yoklaması başarıyla kaydedildi!`);
  };

  const handleModalSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("İşlem başarıyla kaydedildi!");
    setActiveModal(null);
  };

  return (
    <div className="space-y-6">
      {/* Action Modals */}
      {activeModal && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setActiveModal(null)}></div>
          <div className="relative bg-white rounded-2xl w-full max-w-lg shadow-2xl p-6 animate-in fade-in zoom-in-95 max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-bold text-gray-900 flex items-center gap-2">
                {activeModal === 'announcement' && <><Megaphone className="text-orange-600" /> Duyuru Yap</>}
                {activeModal === 'exam' && <><FilePlus className="text-purple-600" /> Sınav Oluştur</>}
                {activeModal === 'event' && <><CalendarPlus className="text-red-600" /> Etkinlik Ekle</>}
                {activeModal === 'homework' && <><PlusCircle className="text-indigo-600" /> Ödev Ata</>}
              </h3>
              <button onClick={() => setActiveModal(null)} className="p-2 hover:bg-gray-100 rounded-full text-gray-400">
                <X size={20} />
              </button>
            </div>

            <form onSubmit={handleModalSubmit} className="space-y-4">
              <input type="text" placeholder="Başlık" className="w-full p-3 border border-gray-200 rounded-xl focus:border-primary outline-none" required />
              <select className="w-full p-3 border border-gray-200 rounded-xl focus:border-primary outline-none">
                {Object.keys(CLASS_STUDENTS).map(c => <option key={c} value={c}>{c}</option>)}
              </select>
              {activeModal === 'exam' && <input type="date" className="w-full p-3 border border-gray-200 rounded-xl" />}
              <textarea placeholder="Detaylar..." className="w-full p-3 border border-gray-200 rounded-xl h-32 resize-none focus:border-primary outline-none"></textarea>
              <button type="submit" className="w-full py-3 bg-primary text-white font-bold rounded-xl shadow-lg">Gönder / Yayınla</button>
            </form>
          </div>
        </div>
      )}

      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Hoş Geldiniz, Mehmet Hoca 👋</h1>
          <p className="text-gray-500">Örgün eğitim takip ve yönetim paneli.</p>
        </div>
        <div className="flex gap-2">
          <button onClick={() => navigate('/crm/chat')} className="px-4 py-2 bg-white border border-gray-200 rounded-lg text-sm font-bold text-gray-700 hover:bg-gray-50 flex items-center gap-2 shadow-sm transition-all">
            <MessageSquare size={18} className="text-primary" /> Soruları Yanıtla
          </button>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { label: 'Aktif Sınıflar', value: '4', icon: Users, color: 'text-blue-600', bg: 'bg-blue-50' },
          { label: 'Okunacak Ödevler', value: '24', icon: ClipboardCheck, color: 'text-orange-600', bg: 'bg-orange-50' },
          { label: 'Haftalık Ders', value: '18 Saat', icon: Clock, color: 'text-purple-600', bg: 'bg-purple-50' },
          { label: 'Gelen Sorular', value: '12', icon: MessageSquare, color: 'text-green-600', bg: 'bg-green-50' },
        ].map((stat, i) => (
          <div key={i} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <div className={`p-3 rounded-lg w-fit ${stat.bg} ${stat.color} mb-4`}>
              <stat.icon size={22} />
            </div>
            <div className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</div>
            <div className="text-sm text-gray-500">{stat.label}</div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* MAIN COLUMN (LEFT & CENTER COMBINED) */}
        <div className="lg:col-span-2 space-y-6">
          {/* Success Chart Section */}
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
            <h3 className="font-bold text-gray-800 mb-6 flex items-center gap-2">
              <TrendingUp size={18} className="text-primary" /> Sınıf Başarı Ortalamaları (%)
            </h3>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={CLASS_SUCCESS_DATA}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
                  <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fill: '#9ca3af', fontSize: 10 }} />
                  <YAxis axisLine={false} tickLine={false} tick={{ fill: '#9ca3af', fontSize: 10 }} domain={[0, 100]} />
                  <Tooltip cursor={{fill: '#f8fafc'}} contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }} />
                  <Bar dataKey="success" fill="#1a237e" radius={[4, 4, 0, 0]} barSize={40} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* ATTENDANCE MODULE - INTEGRATED BETWEEN CHART AND ACTIONS */}
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
            <div className="bg-primary/5 p-4 border-b border-gray-100 flex items-center justify-between">
                <h3 className="font-bold flex items-center gap-2 text-gray-800">
                    <UserCheck size={20} className="text-primary" /> Hızlı Yoklama Girişi
                </h3>
                <div className="flex items-center gap-3">
                    <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">Sınıf:</span>
                    <select 
                        value={selectedAttendanceClass}
                        onChange={(e) => setSelectedAttendanceClass(e.target.value)}
                        className="bg-white border border-gray-200 rounded-lg px-3 py-1.5 text-xs font-bold focus:outline-none focus:ring-2 focus:ring-primary/20"
                    >
                        {Object.keys(CLASS_STUDENTS).map(c => <option key={c} value={c}>{c}</option>)}
                    </select>
                </div>
            </div>
            
            <div className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mb-6">
                    {attendanceData[selectedAttendanceClass].map((student: any) => (
                        <div 
                            key={student.id} 
                            onClick={() => toggleAttendance(student.id)}
                            className={`flex items-center justify-between p-3 rounded-xl cursor-pointer transition-all border group ${
                                student.present 
                                ? 'bg-green-50 border-green-200' 
                                : 'bg-red-50 border-red-100 opacity-60'
                            }`}
                        >
                            <div className="flex items-center gap-3">
                                <div className={`w-2.5 h-2.5 rounded-full ${student.present ? 'bg-green-500' : 'bg-red-500'}`}></div>
                                <span className={`text-xs font-bold ${student.present ? 'text-green-800' : 'text-red-700'}`}>{student.name}</span>
                            </div>
                            <div className={`w-6 h-6 rounded-lg flex items-center justify-center border transition-colors ${
                                student.present 
                                ? 'bg-green-600 border-green-600 text-white' 
                                : 'bg-white border-red-200 text-transparent'
                            }`}>
                                <Check size={14} strokeWidth={3} />
                            </div>
                        </div>
                    ))}
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-gray-50">
                    <div className="flex items-center gap-2 text-xs text-gray-500 italic">
                        <AlertCircle size={14} className="text-primary" />
                        Seçilen öğrenciler derste var olarak sisteme işlenecektir.
                    </div>
                    <button 
                        onClick={handleSaveAttendance}
                        className="px-8 py-3 bg-primary text-white font-bold rounded-xl shadow-lg shadow-primary/20 hover:bg-primary-light transition-all flex items-center justify-center gap-2 active:scale-95"
                    >
                        <Save size={18} /> Yoklamayı Kaydet
                    </button>
                </div>
            </div>
          </div>

          {/* Quick Actions Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <button onClick={() => setActiveModal('announcement')} className="p-5 bg-orange-50 text-orange-700 rounded-2xl font-bold text-sm border border-orange-100 hover:bg-orange-100 transition-all flex flex-col items-center gap-3 shadow-sm active:scale-95">
              <div className="p-3 bg-white rounded-xl text-orange-600 shadow-sm"><Megaphone size={24} /></div>
              Duyuru Yap
            </button>
            <button onClick={() => setActiveModal('exam')} className="p-5 bg-purple-50 text-purple-700 rounded-2xl font-bold text-sm border border-purple-100 hover:bg-purple-100 transition-all flex flex-col items-center gap-3 shadow-sm active:scale-95">
              <div className="p-3 bg-white rounded-xl text-purple-600 shadow-sm"><FilePlus size={24} /></div>
              Sınav Oluştur
            </button>
            <button onClick={() => setActiveModal('event')} className="p-5 bg-red-50 text-red-700 rounded-2xl font-bold text-sm border border-red-100 hover:bg-red-100 transition-all flex flex-col items-center gap-3 shadow-sm active:scale-95">
              <div className="p-3 bg-white rounded-xl text-red-600 shadow-sm"><CalendarPlus size={24} /></div>
              Etkinlik Ekle
            </button>
            <button onClick={() => setActiveModal('homework')} className="p-5 bg-indigo-50 text-indigo-700 rounded-2xl font-bold text-sm border border-indigo-100 hover:bg-indigo-100 transition-all flex flex-col items-center gap-3 shadow-sm active:scale-95">
              <div className="p-3 bg-white rounded-xl text-indigo-600 shadow-sm"><PlusCircle size={24} /></div>
              Ödev Ata
            </button>
          </div>
        </div>

        {/* SIDEBAR COLUMN: UPCOMING LESSONS & SCHEDULE */}
        <div className="lg:col-span-1 space-y-6">
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 sticky top-24">
                <div className="flex items-center justify-between mb-6">
                    <h3 className="font-bold text-gray-800 flex items-center gap-2">
                    <Clock size={18} className="text-accent" /> Günlük Program
                    </h3>
                    <button onClick={() => navigate('/crm/schedule')} className="text-xs text-primary font-bold hover:underline">Tümünü Gör</button>
                </div>
                <div className="space-y-4">
                    {UPCOMING_LESSONS.map((lesson) => (
                    <div key={lesson.id} className={`p-4 rounded-xl border transition-all ${lesson.status === 'Sıradaki' ? 'bg-orange-50 border-orange-100 ring-1 ring-orange-200 shadow-sm' : 'bg-gray-50 border-transparent'}`}>
                        <div className="flex justify-between items-start mb-2">
                            <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${lesson.status === 'Sıradaki' ? 'bg-accent text-white' : 'bg-gray-200 text-gray-500'}`}>{lesson.time}</span>
                            <span className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">{lesson.room}</span>
                        </div>
                        <h4 className="font-bold text-sm text-gray-900">{lesson.class}</h4>
                        <p className="text-[11px] text-gray-500 truncate">{lesson.subject}</p>
                        
                        <div className="mt-3 flex items-center justify-between text-[10px] text-gray-400 border-t border-black/5 pt-2">
                            <span className="flex items-center gap-1"><Users size={12} /> {lesson.students} Öğrenci</span>
                            <span className="font-bold text-primary">Detaylar &rarr;</span>
                        </div>
                    </div>
                    ))}
                </div>

                <div className="mt-6 pt-6 border-t border-gray-100">
                    <div className="bg-blue-50 p-4 rounded-xl border border-blue-100">
                        <div className="flex items-center gap-2 text-blue-700 mb-2 font-bold text-[10px] uppercase tracking-wide">
                            <AlertCircle size={14} /> Önemli Not
                        </div>
                        <p className="text-[11px] text-blue-600 leading-relaxed">
                            Yarın yapılacak olan deneme sınavı için soru kitapçıklarını idareden teslim almayı unutmayınız.
                        </p>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default TeacherDashboard;
