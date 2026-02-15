
import React from 'react';
import { FileText, Download, TrendingUp, DollarSign, Users, PieChart as RePieChart } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, Cell, Pie, PieChart } from 'recharts';

const AdminReports: React.FC = () => {
  const pieData = [
    { name: 'Sayısal', value: 45, color: '#1a237e' },
    { name: 'EA', value: 30, color: '#ff6b35' },
    { name: 'Sözel', value: 15, color: '#4fc3f7' },
    { name: 'Dil', value: 10, color: '#9ca3af' },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
            <FileText className="text-primary" /> Raporlar & İstatistikler
        </h1>
        <button className="px-4 py-2 bg-white border border-gray-200 rounded-xl text-sm font-bold shadow-sm hover:bg-gray-50 flex items-center gap-2">
            <Download size={18} /> Tüm Verileri Dışa Aktar
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
              <h3 className="font-bold text-gray-800 mb-8 flex items-center gap-2">
                  <TrendingUp size={20} className="text-primary" /> Yıllık Kayıt Artışı
              </h3>
              <div className="h-64">
                  <ResponsiveContainer width="100%" height="100%">
                      <LineChart data={[
                          { name: 'Oca', count: 400 }, { name: 'Şub', count: 420 }, { name: 'Mar', count: 460 },
                          { name: 'Nis', count: 480 }, { name: 'May', count: 524 }, { name: 'Haz', count: 580 },
                      ]}>
                          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
                          <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#9ca3af', fontSize: 12}} />
                          <YAxis axisLine={false} tickLine={false} tick={{fill: '#9ca3af', fontSize: 12}} />
                          <Tooltip contentStyle={{borderRadius: '12px', border: 'none'}} />
                          <Line type="monotone" dataKey="count" stroke="#1a237e" strokeWidth={3} dot={{fill: '#1a237e', r: 4}} />
                      </LineChart>
                  </ResponsiveContainer>
              </div>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
              <h3 className="font-bold text-gray-800 mb-8 flex items-center gap-2">
                  <Users size={20} className="text-accent" /> Bölüm Dağılımı (%)
              </h3>
              <div className="h-64">
                  <ResponsiveContainer width="100%" height="100%">
                      <PieChart>
                          <Pie data={pieData} cx="50%" cy="50%" innerRadius={60} outerRadius={80} paddingAngle={5} dataKey="value">
                              {pieData.map((entry, index) => <Cell key={index} fill={entry.color} />)}
                          </Pie>
                          <Tooltip />
                      </PieChart>
                  </ResponsiveContainer>
              </div>
          </div>
      </div>

      <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
          <h3 className="font-bold text-gray-800 mb-6 uppercase tracking-wider text-xs opacity-50">Önemli Göstergeler</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                  { label: 'Tahsilat Oranı', value: '%92', desc: 'Son 30 gün içinde' },
                  { label: 'Ortalama Devamsızlık', value: '1.2 Gün', desc: 'Öğrenci başına / Aylık' },
                  { label: 'Deneme Katılımı', value: '%98', desc: 'Genel ortalama' },
              ].map((item, i) => (
                  <div key={i} className="p-5 bg-gray-50 rounded-2xl border border-gray-100 transition-transform hover:scale-[1.02]">
                      <div className="text-2xl font-bold text-gray-900 mb-1">{item.value}</div>
                      <div className="text-xs font-bold text-primary mb-2 uppercase tracking-wide">{item.label}</div>
                      <p className="text-[10px] text-gray-400">{item.desc}</p>
                  </div>
              ))}
          </div>
      </div>
    </div>
  );
};

export default AdminReports;
