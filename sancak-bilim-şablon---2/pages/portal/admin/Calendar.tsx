
import React from 'react';
import { Calendar as CalendarIcon, ChevronLeft, ChevronRight, Plus, Clock, MapPin } from 'lucide-react';

const AdminCalendar: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
            <CalendarIcon className="text-primary" /> Kurumsal Takvim
        </h1>
        <button className="px-4 py-2 bg-primary text-white rounded-xl text-sm font-bold flex items-center gap-2">
            <Plus size={18} /> Etkinlik Ekle
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
              <div className="flex items-center justify-between mb-8">
                  <h3 className="font-bold text-lg">Mayıs 2024</h3>
                  <div className="flex gap-2">
                      <button className="p-2 hover:bg-gray-100 rounded-lg text-gray-400"><ChevronLeft size={20} /></button>
                      <button className="p-2 hover:bg-gray-100 rounded-lg text-gray-400"><ChevronRight size={20} /></button>
                  </div>
              </div>
              <div className="grid grid-cols-7 gap-px bg-gray-100 border border-gray-100 rounded-xl overflow-hidden shadow-inner">
                  {['Pzt', 'Sal', 'Çar', 'Per', 'Cum', 'Cmt', 'Paz'].map(d => (
                      <div key={d} className="bg-gray-50 py-3 text-center text-[10px] font-bold text-gray-400 uppercase tracking-widest">{d}</div>
                  ))}
                  {Array.from({length: 31}).map((_, i) => (
                      <div key={i} className={`bg-white h-24 md:h-32 p-2 transition-colors hover:bg-gray-50 cursor-pointer border-t border-l border-gray-100 ${[12, 15, 20].includes(i+1) ? 'bg-primary/5' : ''}`}>
                          <span className={`text-xs font-bold ${(i+1) === 15 ? 'bg-primary text-white w-6 h-6 flex items-center justify-center rounded-full' : 'text-gray-400'}`}>{i+1}</span>
                          {(i+1) === 12 && <div className="mt-2 p-1 bg-accent/10 border-l-2 border-accent text-[9px] font-bold text-accent truncate">TYT Deneme</div>}
                          {(i+1) === 20 && <div className="mt-2 p-1 bg-blue-50 border-l-2 border-blue-500 text-[9px] font-bold text-blue-600 truncate">Veli Toplantısı</div>}
                      </div>
                  ))}
              </div>
          </div>

          <div className="space-y-6">
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                  <h3 className="font-bold mb-6">Ajanda</h3>
                  <div className="space-y-6">
                      {[
                          { title: 'Deneme Sınavı-5', time: '12 Mayıs, 09:00', room: 'Genel Sınav Salonu', color: 'bg-accent' },
                          { title: 'Veli Bilgilendirme', time: '20 Mayıs, 18:30', room: 'Konferans Salonu', color: 'bg-blue-500' },
                          { title: 'Deneme Analiz Toplantısı', time: '22 Mayıs, 17:00', room: 'Öğretmenler Odası', color: 'bg-purple-500' },
                      ].map((item, idx) => (
                          <div key={idx} className="flex gap-4">
                              <div className={`w-1 shrink-0 rounded-full ${item.color}`}></div>
                              <div>
                                  <h4 className="text-sm font-bold text-gray-900">{item.title}</h4>
                                  <div className="flex items-center gap-2 text-xs text-gray-500 mt-1">
                                      <Clock size={12} /> {item.time}
                                  </div>
                                  <div className="flex items-center gap-2 text-xs text-gray-400 mt-1">
                                      <MapPin size={12} /> {item.room}
                                  </div>
                              </div>
                          </div>
                      ))}
                  </div>
              </div>
          </div>
      </div>
    </div>
  );
};

export default AdminCalendar;
