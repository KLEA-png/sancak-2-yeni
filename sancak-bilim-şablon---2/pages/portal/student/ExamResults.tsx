import React from 'react';
import { TrendingUp, Award, Target, Activity, ArrowUp, ArrowDown } from 'lucide-react';
import { EXAM_RESULTS } from '../../../constants';
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, 
  AreaChart, Area, Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Legend 
} from 'recharts';

// --- Mock Data Generation for Advanced Visualization ---

// 1. Comparison Data (Student vs Class Avg vs Best)
const COMPARISON_DATA = EXAM_RESULTS.map(exam => ({
  name: exam.examName.replace('Deneme-', 'D'),
  ogrenci: exam.score,
  sinif_ort: Math.round(exam.score * 0.85), // Mock: Class avg is slightly lower
  en_yuksek: Math.round(exam.score * 1.15), // Mock: Highest is slightly higher
  date: exam.date
}));

// 2. Net Progression Data (Student Net vs Class Avg Net)
const NET_DATA = EXAM_RESULTS.map(exam => {
  const net = exam.correct - (exam.wrong * 0.25);
  return {
    name: exam.examName.replace('Deneme-', 'D'),
    net: net,
    sinif_net: net * 0.8, // Mock avg net
  };
});

// 3. Subject Performance (Radar Chart Data)
const SUBJECT_DATA = [
  { subject: 'Matematik', A: 32, B: 22, fullMark: 40 },
  { subject: 'Fizik', A: 12, B: 7, fullMark: 14 },
  { subject: 'Kimya', A: 11, B: 8, fullMark: 13 },
  { subject: 'Biyoloji', A: 10, B: 8, fullMark: 13 },
  { subject: 'Türkçe', A: 34, B: 28, fullMark: 40 },
  { subject: 'Sosyal', A: 17, B: 14, fullMark: 20 },
];

const StudentResults: React.FC = () => {
  // Calculate Summary Stats
  const totalExams = EXAM_RESULTS.length;
  const avgScore = Math.round(EXAM_RESULTS.reduce((acc, curr) => acc + curr.score, 0) / totalExams);
  const maxScore = Math.max(...EXAM_RESULTS.map(e => e.score));
  const latestNet = NET_DATA[NET_DATA.length - 1].net;

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-2">
        <h1 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
          <TrendingUp className="text-primary" /> Sınav Analizi ve Sonuçlar
        </h1>
        <div className="text-sm text-gray-500">Son Güncelleme: {new Date().toLocaleDateString('tr-TR')}</div>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white p-4 md:p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col justify-between">
            <div className="flex justify-between items-start mb-2">
                <div className="p-2 bg-blue-50 text-blue-600 rounded-lg">
                    <Activity size={20} />
                </div>
                <span className="text-xs font-bold text-green-600 bg-green-50 px-2 py-1 rounded-full">+2</span>
            </div>
            <div>
                <div className="text-xl md:text-2xl font-bold text-gray-900">{totalExams}</div>
                <div className="text-[10px] md:text-xs text-gray-500 font-medium uppercase tracking-wide">Katılınan Sınav</div>
            </div>
        </div>

        <div className="bg-white p-4 md:p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col justify-between">
            <div className="flex justify-between items-start mb-2">
                <div className="p-2 bg-purple-50 text-purple-600 rounded-lg">
                    <Target size={20} />
                </div>
                <span className="text-xs font-bold text-green-600 bg-green-50 px-2 py-1 rounded-full flex items-center gap-1">
                    <ArrowUp size={12} /> Artış
                </span>
            </div>
            <div>
                <div className="text-xl md:text-2xl font-bold text-gray-900">{latestNet.toFixed(2)}</div>
                <div className="text-[10px] md:text-xs text-gray-500 font-medium uppercase tracking-wide">Son Net</div>
            </div>
        </div>

        <div className="bg-white p-4 md:p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col justify-between">
            <div className="flex justify-between items-start mb-2">
                <div className="p-2 bg-orange-50 text-orange-600 rounded-lg">
                    <Award size={20} />
                </div>
                <span className="text-xs font-bold text-orange-600 bg-orange-50 px-2 py-1 rounded-full">Rekor</span>
            </div>
            <div>
                <div className="text-xl md:text-2xl font-bold text-gray-900">{maxScore}</div>
                <div className="text-[10px] md:text-xs text-gray-500 font-medium uppercase tracking-wide">En Yüksek Puan</div>
            </div>
        </div>

        <div className="bg-white p-4 md:p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col justify-between">
            <div className="flex justify-between items-start mb-2">
                <div className="p-2 bg-green-50 text-green-600 rounded-lg">
                    <TrendingUp size={20} />
                </div>
                <span className="text-xs font-bold text-gray-500">Genel</span>
            </div>
            <div>
                <div className="text-xl md:text-2xl font-bold text-gray-900">{avgScore}</div>
                <div className="text-[10px] md:text-xs text-gray-500 font-medium uppercase tracking-wide">Puan Ortalaması</div>
            </div>
        </div>
      </div>

      {/* Main Charts Row */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          
          {/* Net Progression Area Chart */}
          <div className="lg:col-span-2 bg-white p-6 rounded-2xl shadow-sm border border-gray-200">
              <h3 className="font-bold text-gray-800 mb-6 flex items-center gap-2">
                  <span className="w-2 h-6 bg-primary rounded-full"></span>
                  Net Gelişimi & Sınıf Ortalaması
              </h3>
              <div className="h-80">
                 <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={NET_DATA}>
                       <defs>
                          <linearGradient id="colorNet" x1="0" y1="0" x2="0" y2="1">
                             <stop offset="5%" stopColor="#1a237e" stopOpacity={0.3}/>
                             <stop offset="95%" stopColor="#1a237e" stopOpacity={0}/>
                          </linearGradient>
                          <linearGradient id="colorAvg" x1="0" y1="0" x2="0" y2="1">
                             <stop offset="5%" stopColor="#ff6b35" stopOpacity={0.1}/>
                             <stop offset="95%" stopColor="#ff6b35" stopOpacity={0}/>
                          </linearGradient>
                       </defs>
                       <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
                       <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#9ca3af', fontSize: 12}} dy={10} />
                       <YAxis axisLine={false} tickLine={false} tick={{fill: '#9ca3af', fontSize: 12}} domain={[0, 'auto']} />
                       <Tooltip 
                            contentStyle={{backgroundColor: '#fff', borderRadius: '12px', border: '1px solid #e5e7eb', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)', color: '#1f2937'}} 
                            itemStyle={{ color: '#1f2937' }}
                        />
                       <Legend verticalAlign="top" height={36} iconType="circle" />
                       <Area type="monotone" name="Senin Netin" dataKey="net" stroke="#1a237e" strokeWidth={3} fillOpacity={1} fill="url(#colorNet)" />
                       <Area type="monotone" name="Sınıf Ort." dataKey="sinif_net" stroke="#ff6b35" strokeWidth={2} strokeDasharray="5 5" fillOpacity={1} fill="url(#colorAvg)" />
                    </AreaChart>
                 </ResponsiveContainer>
              </div>
          </div>

          {/* Subject Radar Chart */}
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200">
              <h3 className="font-bold text-gray-800 mb-6 text-center">Ders Bazlı Performans</h3>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                    <RadarChart cx="50%" cy="50%" outerRadius="70%" data={SUBJECT_DATA}>
                        <PolarGrid stroke="#e5e7eb" />
                        <PolarAngleAxis dataKey="subject" tick={{ fill: '#4b5563', fontSize: 11, fontWeight: 600 }} />
                        <PolarRadiusAxis angle={30} domain={[0, 40]} tick={false} axisLine={false} />
                        <Radar name="Sen" dataKey="A" stroke="#1a237e" strokeWidth={2} fill="#1a237e" fillOpacity={0.4} />
                        <Radar name="Sınıf Ort." dataKey="B" stroke="#ff6b35" strokeWidth={2} fill="#ff6b35" fillOpacity={0.2} />
                        <Legend iconSize={8} wrapperStyle={{fontSize: '11px', marginTop: '10px'}} />
                        <Tooltip 
                            contentStyle={{backgroundColor: '#fff', borderRadius: '8px', border: '1px solid #e5e7eb', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)', color: '#1f2937', fontSize: '12px'}} 
                            itemStyle={{ color: '#1f2937' }}
                        />
                    </RadarChart>
                </ResponsiveContainer>
              </div>
          </div>
      </div>

      {/* Comparison Bar Chart */}
      <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200">
          <h3 className="font-bold text-gray-800 mb-6 flex items-center gap-2">
              <span className="w-2 h-6 bg-accent rounded-full"></span>
              Puan Karşılaştırması (Sen vs Sınıf vs Zirve)
          </h3>
          <div className="h-80">
             <ResponsiveContainer width="100%" height="100%">
                <BarChart data={COMPARISON_DATA} barSize={12}>
                   <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
                   <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#9ca3af', fontSize: 12}} dy={10} />
                   <YAxis axisLine={false} tickLine={false} tick={{fill: '#9ca3af', fontSize: 12}} />
                   <Tooltip 
                        cursor={{fill: '#f9fafb'}}
                        contentStyle={{backgroundColor: '#fff', borderRadius: '12px', border: '1px solid #e5e7eb', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)', color: '#1f2937'}} 
                        itemStyle={{ color: '#1f2937' }}
                   />
                   <Legend verticalAlign="top" height={36} iconType="circle" />
                   <Bar name="Sen" dataKey="ogrenci" fill="#1a237e" radius={[4, 4, 0, 0]} />
                   <Bar name="Sınıf Ort." dataKey="sinif_ort" fill="#9ca3af" radius={[4, 4, 0, 0]} />
                   <Bar name="En Yüksek" dataKey="en_yuksek" fill="#ff6b35" radius={[4, 4, 0, 0]} />
                </BarChart>
             </ResponsiveContainer>
          </div>
      </div>

      {/* Detailed Table */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
        <div className="p-6 border-b border-gray-100">
            <h3 className="font-bold text-gray-800">Sınav Geçmişi ve Detaylar</h3>
        </div>
        <div className="overflow-x-auto">
            <table className="w-full text-sm text-left">
                <thead className="text-xs text-gray-500 uppercase bg-gray-50/50 border-b border-gray-100">
                <tr>
                    <th className="px-6 py-4 font-bold whitespace-nowrap">Sınav Adı</th>
                    <th className="px-6 py-4 font-bold whitespace-nowrap">Tarih</th>
                    <th className="px-6 py-4 text-center font-bold">Doğru</th>
                    <th className="px-6 py-4 text-center font-bold">Yanlış</th>
                    <th className="px-6 py-4 text-center font-bold">Net</th>
                    <th className="px-6 py-4 text-center font-bold whitespace-nowrap">Sınıf Ort. Net</th>
                    <th className="px-6 py-4 text-right font-bold">Puan</th>
                </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                    {EXAM_RESULTS.map((exam, idx) => {
                        const net = exam.correct - (exam.wrong * 0.25);
                        const classAvgNet = NET_DATA[idx]?.sinif_net || 0;
                        const isAboveAvg = net > classAvgNet;

                        return (
                            <tr key={exam.id} className="hover:bg-gray-50/80 transition-colors">
                                <td className="px-6 py-4 font-bold text-gray-900">{exam.examName}</td>
                                <td className="px-6 py-4 text-gray-500 whitespace-nowrap">{new Date(exam.date).toLocaleDateString('tr-TR')}</td>
                                <td className="px-6 py-4 text-center text-green-600 font-bold bg-green-50/30">{exam.correct}</td>
                                <td className="px-6 py-4 text-center text-red-500 bg-red-50/30">{exam.wrong}</td>
                                <td className="px-6 py-4 text-center font-bold text-primary text-lg">{net.toFixed(2)}</td>
                                <td className="px-6 py-4 text-center text-gray-500">
                                    <div className="flex items-center justify-center gap-1">
                                        {classAvgNet.toFixed(2)}
                                        {isAboveAvg ? <ArrowUp size={12} className="text-green-500" /> : <ArrowDown size={12} className="text-red-500" />}
                                    </div>
                                </td>
                                <td className="px-6 py-4 text-right">
                                    <span className="inline-block px-3 py-1 bg-primary/10 text-primary font-bold rounded-lg">
                                        {exam.score}
                                    </span>
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
      </div>
    </div>
  );
};
export default StudentResults;