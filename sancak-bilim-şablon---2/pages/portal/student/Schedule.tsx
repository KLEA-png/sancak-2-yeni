
import React, { useState } from 'react';
import { Calendar, Clock, Plus, X, User as UserIcon, CheckCircle, GraduationCap } from 'lucide-react';
import { MOCK_TEACHERS } from '../../../constants';

const SCHEDULE = [
  { 
      time: '09:00', 
      mon: { sub: 'Matematik', tea: 'Ahmet Y.' }, 
      tue: { sub: 'Fizik', tea: 'Elif D.' }, 
      wed: { sub: 'Matematik', tea: 'Ahmet Y.' }, 
      thu: { sub: 'Geometri', tea: 'Selin K.' }, 
      fri: { sub: 'Kimya', tea: 'Murat Ş.' }, 
      sat: { sub: 'TYT Deneme', tea: 'Genel Sınav' }, 
      sun: null 
  },
  { 
      time: '10:00', 
      mon: { sub: 'Matematik', tea: 'Ahmet Y.' }, 
      tue: { sub: 'Fizik', tea: 'Elif D.' }, 
      wed: { sub: 'Matematik', tea: 'Ahmet Y.' }, 
      thu: { sub: 'Geometri', tea: 'Selin K.' }, 
      fri: { sub: 'Kimya', tea: 'Murat Ş.' }, 
      sat: { sub: 'TYT Deneme', tea: 'Devam Ediyor' }, 
      sun: null 
  },
  { 
      time: '11:00', 
      mon: { sub: 'Türkçe', tea: 'Canan K.' }, 
      tue: { sub: 'Biyoloji', tea: 'Zeynep I.' }, 
      wed: { sub: 'Türkçe', tea: 'Canan K.' }, 
      thu: { sub: 'Fizik', tea: 'Elif D.' }, 
      fri: { sub: 'Biyoloji', tea: 'Zeynep I.' }, 
      sat: { sub: 'TYT Deneme', tea: 'Bitiş: 12:15' }, 
      sun: null 
  },
  { 
      time: '12:00', 
      mon: { sub: 'Öğle Arası', tea: '' }, 
      tue: { sub: 'Öğle Arası', tea: '' }, 
      wed: { sub: 'Öğle Arası', tea: '' }, 
      thu: { sub: 'Öğle Arası', tea: '' }, 
      fri: { sub: 'Öğle Arası', tea: '' }, 
      sat: { sub: 'Sınav Sonu', tea: 'Dinlenme' }, 
      sun: null 
  },
  { 
      time: '13:00', 
      mon: { sub: 'Tarih', tea: 'Hakan Ö.' }, 
      tue: { sub: 'Kimya', tea: 'Murat Ş.' }, 
      wed: { sub: 'Coğrafya', tea: 'Berna Y.' }, 
      thu: { sub: 'Matematik', tea: 'Ahmet Y.' }, 
      fri: { sub: 'Fizik', tea: 'Elif D.' }, 
      sat: { sub: 'Soru Çözümü', tea: 'Nöbetçi Öğrt.' }, 
      sun: null 
  },
  { 
      time: '14:00', 
      mon: { sub: 'Coğrafya', tea: 'Berna Y.' }, 
      tue: { sub: 'Geometri', tea: 'Selin K.' }, 
      wed: { sub: 'Tarih', tea: 'Hakan Ö.' }, 
      thu: { sub: 'Türkçe', tea: 'Canan K.' }, 
      fri: { sub: 'Matematik', tea: 'Ahmet Y.' }, 
      sat: { sub: 'Rehberlik', tea: 'Hakan Öz' }, 
      sun: null 
  },
  { 
      time: '16:00', 
      mon: { sub: 'Etüt', tea: 'Ahmet Y. (Mat)' }, 
      tue: { sub: 'Etüt', tea: 'Elif D. (Fiz)' }, 
      wed: { sub: 'Etüt', tea: 'Selin K. (Geo)' }, 
      thu: { sub: 'Etüt', tea: 'Murat Ş. (Kim)' }, 
      fri: { sub: 'Etüt', tea: 'Canan K. (Edb)' }, 
      sat: null, 
      sun: null 
  },
  { 
      time: '17:00', 
      mon: { sub: 'Etüt', tea: 'Zeynep I. (Biyo)' }, 
      tue: { sub: 'Etüt', tea: 'Hakan Ö. (Tar)' }, 
      wed: { sub: 'Etüt', tea: 'Berna Y. (Coğ)' }, 
      thu: { sub: 'Etüt', tea: 'Ahmet Y. (Mat)' }, 
      fri: { sub: 'Etüt', tea: 'Zeynep I. (Biyo)' }, 
      sat: null, 
      sun: null 
  },
];

const StudentSchedule: React.FC = () => {
  const [isStudyModalOpen, setIsStudyModalOpen] = useState(false);
  const [selectedTeacherId, setSelectedTeacherId] = useState('');
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');

  const days = ['Pazartesi', 'Salı', 'Çarşamba', 'Perşembe', 'Cuma', 'Cumartesi', 'Pazar'];
  const dayKeys = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

  const handleSubmitRequest = (e: React.FormEvent) => {
    e.preventDefault();
    const teacher = MOCK_TEACHERS.find(t => t.id === selectedTeacherId);
    if (teacher && selectedDate && selectedTime) {
        alert(`Talebiniz alınmıştır!\n\n${teacher.name} (${teacher.branch}) öğretmenine ${selectedDate} saat ${selectedTime} için etüt isteği gönderildi.\n\nÖğretmen onayladığında bildirim alacaksınız.`);
        setIsStudyModalOpen(false);
        setSelectedTeacherId('');
        setSelectedDate('');
        setSelectedTime('');
    } else {
        alert('Lütfen tüm alanları doldurunuz.');
    }
  };
  
  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="flex items-center justify-between w-full md:w-auto">
             <h1 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
                <Calendar className="text-primary" /> Haftalık Program
            </h1>
        </div>
        
        <div className="flex items-center gap-3">
             <div className="text-sm text-gray-500 hidden md:block font-medium">12. Sınıf Sayısal - A Şubesi</div>
             <button 
                onClick={() => setIsStudyModalOpen(true)}
                className="px-4 py-2 bg-primary text-white text-sm font-bold rounded-xl hover:bg-primary-light transition-colors flex items-center gap-2 shadow-lg shadow-primary/30"
            >
                <Plus size={18} /> Etüt Talep Et
             </button>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="px-6 py-4 font-bold text-gray-900 w-24">Saat</th>
                {days.map(day => <th key={day} className="px-6 py-4 font-bold text-primary min-w-[140px]">{day}</th>)}
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {SCHEDULE.map((row: any, i) => (
                <tr key={i} className="hover:bg-gray-50/50">
                  <td className="px-6 py-4 font-bold text-gray-900 bg-gray-50/30">
                     <div className="flex items-center gap-2">
                         <Clock size={14} className="text-gray-400" /> {row.time}
                     </div>
                  </td>
                  {dayKeys.map((dayKey) => {
                      const cell = row[dayKey];
                      if (!cell) return <td key={dayKey} className="px-6 py-4 text-gray-300 text-center">-</td>;
                      
                      const isBreak = cell.sub === 'Öğle Arası';
                      const isExam = cell.sub.includes('Deneme');
                      const isEtut = cell.sub === 'Etüt';
                      
                      return (
                        <td key={dayKey} className={`px-6 py-3 align-top ${isBreak ? 'bg-orange-50/30' : isExam ? 'bg-red-50/30' : isEtut ? 'bg-indigo-50/30' : ''}`}>
                            <div className="flex items-center gap-1.5 mb-0.5">
                                {isEtut && <GraduationCap size={12} className="text-indigo-600" />}
                                <div className={`font-bold ${isExam ? 'text-red-600' : isEtut ? 'text-indigo-700' : isBreak ? 'text-orange-600' : 'text-gray-800'}`}>
                                    {cell.sub}
                                </div>
                            </div>
                            {cell.tea && (
                              <div className={`text-[11px] font-medium ${isExam ? 'text-red-400' : isEtut ? 'text-indigo-400' : 'text-gray-500'}`}>
                                {cell.tea}
                              </div>
                            )}
                        </td>
                      );
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Info Boxes */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-red-50 p-4 rounded-xl border border-red-100 flex gap-3">
             <div className="p-2 bg-white rounded-lg text-red-600 shadow-sm h-fit"><Calendar size={20} /></div>
             <div>
                <h4 className="font-bold text-red-900 text-sm">Haftalık Denemeler</h4>
                <p className="text-xs text-red-700 mt-1">Cumartesi günleri yapılan Türkiye geneli deneme sınavlarına katılım zorunludur. Sınav sonuçları aynı gün portal üzerinden açıklanır.</p>
             </div>
        </div>
        <div className="bg-indigo-50 p-4 rounded-xl border border-indigo-100 flex gap-3">
             <div className="p-2 bg-white rounded-lg text-indigo-600 shadow-sm h-fit"><UserIcon size={20} /></div>
             <div>
                <h4 className="font-bold text-indigo-900 text-sm">Birebir Etüt Sistemi</h4>
                <p className="text-xs text-indigo-700 mt-1">Programdaki "Etüt" saatleri önceden randevu alan öğrenciler için ayrılmıştır. Randevu almak için "Etüt Talep Et" butonunu kullanın.</p>
             </div>
        </div>
      </div>

      {/* Etüt Request Modal */}
      {isStudyModalOpen && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
             <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setIsStudyModalOpen(false)}></div>
             <div className="relative bg-white rounded-2xl w-full max-w-lg shadow-2xl p-6 animate-in fade-in zoom-in-95">
                <button 
                    onClick={() => setIsStudyModalOpen(false)}
                    className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
                >
                    <X size={20} />
                </button>

                <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                    <UserIcon className="text-primary" /> Birebir Etüt İsteği
                </h2>

                <form onSubmit={handleSubmitRequest} className="space-y-4">
                    <div>
                        <label className="block text-xs font-bold text-gray-700 mb-1 uppercase tracking-wide">Öğretmen Seçiniz</label>
                        <select 
                            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-primary text-sm bg-gray-50"
                            value={selectedTeacherId}
                            onChange={(e) => setSelectedTeacherId(e.target.value)}
                            required
                        >
                            <option value="">Seçiniz...</option>
                            {MOCK_TEACHERS.map(t => (
                                <option key={t.id} value={t.id}>{t.name} - {t.branch}</option>
                            ))}
                        </select>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label className="block text-xs font-bold text-gray-700 mb-1 uppercase tracking-wide">Tarih</label>
                            <input 
                                type="date" 
                                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-primary text-sm bg-gray-50"
                                value={selectedDate}
                                onChange={(e) => setSelectedDate(e.target.value)}
                                required
                            />
                        </div>
                        <div>
                            <label className="block text-xs font-bold text-gray-700 mb-1 uppercase tracking-wide">Saat</label>
                            <select 
                                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-primary text-sm bg-gray-50"
                                value={selectedTime}
                                onChange={(e) => setSelectedTime(e.target.value)}
                                required
                            >
                                <option value="">Seçiniz...</option>
                                <option value="16:00">16:00 - 16:40</option>
                                <option value="17:00">17:00 - 17:40</option>
                                <option value="18:00">18:00 - 18:40</option>
                            </select>
                        </div>
                    </div>

                    <div className="bg-blue-50 p-4 rounded-xl border border-blue-100 flex gap-3">
                        <CheckCircle size={20} className="text-blue-600 shrink-0 mt-0.5" />
                        <p className="text-xs text-blue-700 leading-relaxed">
                            Etüt talebiniz doğrudan öğretmenin paneline düşecektir. Onaylandığında veya reddedildiğinde bildirim alacaksınız.
                        </p>
                    </div>

                    <button type="submit" className="w-full py-3.5 bg-primary text-white font-bold rounded-xl hover:bg-primary-light transition-colors shadow-lg shadow-primary/20">
                        İsteği Gönder
                    </button>
                </form>
             </div>
        </div>
      )}
    </div>
  );
};
export default StudentSchedule;
