
import React from 'react';
import { Calendar, Clock } from 'lucide-react';

const TEACHER_SCHEDULE = [
  { time: '09:00', mon: '12-A SAY', tue: '11-B SAY', wed: '12-A SAY', thu: 'BOŞ', fri: 'Mezun-A', sat: 'DENEME (GÖZETMEN)', sun: '-' },
  { time: '10:00', mon: '12-A SAY', tue: '11-B SAY', wed: '12-A SAY', thu: 'BOŞ', fri: 'Mezun-A', sat: 'DENEME (GÖZETMEN)', sun: '-' },
  { time: '11:00', mon: '12-B SAY', tue: 'BOŞ', wed: '12-B SAY', thu: '12-B SAY', fri: 'BOŞ', sat: 'DENEME (GÖZETMEN)', sun: '-' },
  { time: '12:00', mon: 'ÖĞLE', tue: 'ÖĞLE', wed: 'ÖĞLE', thu: 'ÖĞLE', fri: 'ÖĞLE', sat: '-', sun: '-' },
  { time: '13:00', mon: 'BOŞ', tue: 'Mezun-A', wed: '11-A SAY', thu: '11-A SAY', fri: '12-A SAY', sat: 'SORU ÇÖZÜM', sun: '-' },
  { time: '14:00', mon: 'BOŞ', tue: 'Mezun-A', wed: '11-A SAY', thu: '11-A SAY', fri: '12-A SAY', sat: 'REHBERLİK', sun: '-' },
];

const TeacherSchedule: React.FC = () => {
  const days = ['Pzt', 'Sal', 'Çar', 'Per', 'Cum', 'Cmt', 'Paz'];
  const dayKeys = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
            <Calendar className="text-primary" /> Ders Programım
        </h1>
        <div className="text-sm text-gray-500 bg-white px-3 py-1 rounded-full border border-gray-200 shadow-sm">
            Haftalık Toplam: <span className="font-bold text-primary">24 Saat</span>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left">
            <thead className="bg-gray-50 text-gray-700 uppercase font-bold text-xs border-b border-gray-200">
              <tr>
                <th className="px-6 py-4">Saat</th>
                {days.map(d => <th key={d} className="px-6 py-4">{d}</th>)}
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {TEACHER_SCHEDULE.map((row: any, i) => (
                <tr key={i} className="hover:bg-gray-50/50">
                  <td className="px-6 py-4 font-bold text-gray-900 whitespace-nowrap bg-gray-50/30">
                    <div className="flex items-center gap-2"><Clock size={14} className="text-gray-400" /> {row.time}</div>
                  </td>
                  {dayKeys.map(k => {
                    const content = row[k];
                    const isDeneme = content.includes('DENEME');
                    const isEmpty = content === 'BOŞ' || content === '-';
                    const isLunch = content === 'ÖĞLE';

                    return (
                      <td key={k} className={`px-6 py-4 ${isEmpty ? 'text-gray-300' : 'font-semibold'}`}>
                        <div className={`px-3 py-1.5 rounded-lg text-center transition-all ${
                          isDeneme 
                            ? 'bg-red-50 text-red-700 border border-red-100 shadow-sm ring-1 ring-red-200' 
                            : isLunch 
                            ? 'bg-orange-50 text-orange-600'
                            : isEmpty 
                            ? '' 
                            : 'bg-primary/5 text-primary border border-primary/10'
                        }`}>
                          <span className={`${isDeneme ? 'text-[10px] font-extrabold uppercase' : 'text-xs'}`}>
                            {content}
                          </span>
                        </div>
                      </td>
                    );
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="bg-blue-50 p-4 rounded-xl border border-blue-100 flex items-start gap-3">
          <div className="p-2 bg-blue-100 rounded-lg text-blue-600">
              <Calendar size={20} />
          </div>
          <div>
              <h4 className="font-bold text-blue-900 text-sm">Gözetmenlik Bilgilendirmesi</h4>
              <p className="text-xs text-blue-700 mt-1">
                Cumartesi günleri yapılan deneme sınavlarında gözetmenlik listeniz yukarıdaki programda belirtilmiştir. 
                Sınav başlamadan 15 dakika önce idare odasında hazır bulunmanız rica olunur.
              </p>
          </div>
      </div>
    </div>
  );
};

export default TeacherSchedule;
