
import React from 'react';
import { TrendingUp, Users, Target, ArrowUp, ArrowDown } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';

const MOCK_NET_TABLE = [
  { id: 1, name: 'Zeynep Yılmaz', class: '12-A SAY', tytNet: 102.5, aytNet: 65.0, progress: '+2.5' },
  { id: 2, name: 'Can Özkan', class: '12-A SAY', tytNet: 98.75, aytNet: 62.25, progress: '+1.0' },
  { id: 3, name: 'Selin Işık', class: '12-A SAY', tytNet: 91.0, aytNet: 58.5, progress: '-0.5' },
  { id: 4, name: 'Ali Demir', class: '12-B SAY', tytNet: 88.0, aytNet: 55.0, progress: '+3.25' },
  { id: 5, name: 'Merve Kaya', class: '12-B SAY', tytNet: 72.25, aytNet: 48.0, progress: '+1.5' },
];

const TeacherResults: React.FC = () => {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
        <TrendingUp className="text-primary" /> Sınıf & Öğrenci Analizi
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Class Selection */}
        <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm">
          <h3 className="font-bold mb-4 text-gray-700">Analiz Edilecek Sınıf</h3>
          <select className="w-full p-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:border-primary">
            <option>TÜM SINIFLARIM</option>
            <option>12-A SAYISAL</option>
            <option>12-B SAYISAL</option>
            <option>Mezun-A</option>
          </select>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-white p-5 rounded-2xl border border-gray-200 shadow-sm flex flex-col justify-center">
            <div className="text-[10px] text-gray-400 uppercase font-bold mb-1 tracking-widest">Sınıf Ortalaması</div>
            <div className="text-2xl font-bold text-primary">345.50 Puan</div>
          </div>
          <div className="bg-white p-5 rounded-2xl border border-gray-200 shadow-sm flex flex-col justify-center">
            <div className="text-[10px] text-gray-400 uppercase font-bold mb-1 tracking-widest">Katılım Oranı</div>
            <div className="text-2xl font-bold text-green-600">%98</div>
          </div>
        </div>
      </div>

      {/* SUCCESS CHART */}
      <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm">
        <h3 className="font-bold text-gray-800 mb-6">Son 5 Deneme Sınıf Başarı Grafiği</h3>
        <div className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={[
              { name: 'TYT-1', avg: 310, best: 420 },
              { name: 'TYT-2', avg: 325, best: 435 },
              { name: 'AYT-1', avg: 280, best: 390 },
              { name: 'TYT-3', avg: 345, best: 460 },
              { name: 'Genel', avg: 338, best: 455 },
            ]}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
              <XAxis dataKey="name" axisLine={false} tickLine={false} />
              <YAxis axisLine={false} tickLine={false} />
              <Tooltip cursor={{ fill: '#f8fafc' }} contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 20px rgba(0,0,0,0.08)' }} />
              <Legend verticalAlign="top" align="right" height={36} iconType="circle" />
              <Bar name="Sınıf Ortalaması" dataKey="avg" fill="#1a237e" radius={[4, 4, 0, 0]} barSize={24} />
              <Bar name="En Yüksek Puan" dataKey="best" fill="#ff6b35" radius={[4, 4, 0, 0]} barSize={24} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* STUDENT SUCCESS TABLE - NEW SECTION */}
      <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
        <div className="p-6 border-b border-gray-100 flex items-center justify-between">
          <h3 className="font-bold text-gray-800">Öğrenci Net Takip Tablosu</h3>
          <button className="text-xs font-bold text-primary hover:underline">Tümünü İndir (.xlsx)</button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left">
            <thead className="bg-gray-50 text-gray-500 uppercase text-[10px] font-bold border-b border-gray-100">
              <tr>
                <th className="px-6 py-4">Öğrenci</th>
                <th className="px-6 py-4">Sınıf</th>
                <th className="px-6 py-4 text-center">TYT Net</th>
                <th className="px-6 py-4 text-center">AYT Net</th>
                <th className="px-6 py-4 text-center">Gelişim</th>
                <th className="px-6 py-4 text-right">Analiz</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {MOCK_NET_TABLE.map(row => (
                <tr key={row.id} className="hover:bg-gray-50/50 transition-colors">
                  <td className="px-6 py-4 font-bold text-gray-800">{row.name}</td>
                  <td className="px-6 py-4 text-gray-500">{row.class}</td>
                  <td className="px-6 py-4 text-center font-bold text-primary">{row.tytNet}</td>
                  <td className="px-6 py-4 text-center font-bold text-accent">{row.aytNet}</td>
                  <td className="px-6 py-4 text-center">
                    <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-bold ${row.progress.startsWith('+') ? 'bg-green-50 text-green-600' : 'bg-red-50 text-red-600'}`}>
                      {row.progress.startsWith('+') ? <ArrowUp size={10} /> : <ArrowDown size={10} />}
                      {row.progress}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <button className="text-[11px] font-bold text-gray-400 hover:text-primary transition-colors">Detay Gör</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default TeacherResults;
