
import React, { useState } from 'react';
import { ClipboardCheck, Plus, Clock, Users, X, Send, PlusCircle, CheckCircle2 } from 'lucide-react';

const TeacherHomework: React.FC = () => {
  const [showAddModal, setShowAddModal] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Ödev başarıyla tanımlandı ve sisteme eklendi!");
    setShowAddModal(false);
  };

  return (
    <div className="space-y-6">
      {/* Add Homework Modal */}
      {showAddModal && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setShowAddModal(null)}></div>
          <div className="relative bg-white rounded-2xl w-full max-w-lg shadow-2xl p-6 animate-in fade-in zoom-in-95">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-bold text-gray-900 flex items-center gap-2">
                <PlusCircle className="text-primary" /> Yeni Ödev Tanımla
              </h3>
              <button onClick={() => setShowAddModal(null)} className="p-2 hover:bg-gray-100 rounded-full text-gray-400">
                <X size={20} />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-gray-700 mb-1 uppercase tracking-wide">Ödev Başlığı</label>
                <input type="text" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:outline-none text-sm" placeholder="Örn: Türev Test - 1" required />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-gray-700 mb-1 uppercase tracking-wide">Sınıf</label>
                  <select className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:outline-none text-sm">
                    <option>12-A SAY</option>
                    <option>12-B SAY</option>
                    <option>Mezun-A</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-700 mb-1 uppercase tracking-wide">Son Tarih</label>
                  <input type="date" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:outline-none text-sm" required />
                </div>
              </div>
              <div>
                <label className="block text-xs font-bold text-gray-700 mb-1 uppercase tracking-wide">Açıklama / Kaynak</label>
                <textarea className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:outline-none text-sm h-32 resize-none" placeholder="Çözülecek sayfalar veya kaynak belirtin..."></textarea>
              </div>
              <button type="submit" className="w-full py-4 bg-primary text-white font-bold rounded-xl shadow-lg flex items-center justify-center gap-2 hover:bg-primary-light transition-all">
                Ödevi Yayınla <Send size={18} />
              </button>
            </form>
          </div>
        </div>
      )}

      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
          <ClipboardCheck className="text-primary" /> Ödev Yönetimi
        </h1>
        <button onClick={() => setShowAddModal(true)} className="px-6 py-2.5 bg-accent text-white font-bold rounded-xl hover:bg-accent-light transition-all flex items-center gap-2 shadow-lg shadow-accent/20">
          <Plus size={18} /> Yeni Ödev Tanımla
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm">
          <div className="p-4 bg-gray-50 border-b border-gray-200 font-bold text-gray-700">Aktif Ödevler</div>
          <div className="divide-y divide-gray-100">
            {[
              { title: 'Logaritma - Bölüm 1', class: '12-A SAY', deadline: '22 May', submitted: 14, total: 16 },
              { title: 'Türev Kuralları', class: '12-B SAY', deadline: '24 May', submitted: 8, total: 16 },
              { title: 'Karmaşık Sayılar', class: 'Mezun-A', deadline: 'Bugün', submitted: 18, total: 20 },
            ].map((hw, i) => (
              <div key={i} className="p-4 hover:bg-gray-50 transition-colors cursor-pointer">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="font-bold text-gray-900">{hw.title}</h4>
                  <span className="text-[10px] bg-blue-50 text-blue-600 px-2 py-1 rounded font-bold">{hw.class}</span>
                </div>
                <div className="flex items-center justify-between text-xs text-gray-500">
                  <div className="flex items-center gap-1"><Clock size={12} /> Son: {hw.deadline}</div>
                  <div className="flex items-center gap-1"><Users size={12} /> Teslim: {hw.submitted}/{hw.total}</div>
                </div>
                <div className="mt-3 w-full bg-gray-100 h-1.5 rounded-full overflow-hidden">
                  <div className="bg-primary h-full transition-all duration-1000" style={{ width: `${(hw.submitted / hw.total) * 100}%` }}></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm">
          <div className="p-4 bg-gray-50 border-b border-gray-200 font-bold text-gray-700">Değerlendirme Bekleyenler</div>
          <div className="divide-y divide-gray-100">
            {[
              { student: 'Zeynep Yılmaz', hw: 'Türev Test-1', time: '10 dk önce' },
              { student: 'Ali Demir', hw: 'Türev Test-1', time: '45 dk önce' },
              { student: 'Merve Kaya', hw: 'Türev Test-1', time: '1 saat önce' },
            ].map((sub, i) => (
              <div key={i} className="p-4 flex items-center justify-between hover:bg-gray-50 transition-colors">
                <div>
                  <div className="font-bold text-sm">{sub.student}</div>
                  <div className="text-[11px] text-gray-500">{sub.hw} • {sub.time}</div>
                </div>
                <button className="text-xs font-bold text-primary hover:bg-primary/5 px-3 py-1.5 rounded-lg border border-primary/20 transition-all">Şimdi Oku</button>
              </div>
            ))}
          </div>
          <button className="w-full py-3 text-xs font-bold text-gray-400 hover:bg-gray-50 border-t border-gray-100 transition-colors uppercase tracking-wider">Tüm Teslimleri Gör</button>
        </div>
      </div>
    </div>
  );
};

export default TeacherHomework;
