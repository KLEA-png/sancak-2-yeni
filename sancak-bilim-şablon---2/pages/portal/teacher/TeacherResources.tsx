
import React, { useState } from 'react';
import { FileText, Plus, Video, Trash2, Edit2, Share2, X, Upload, MonitorPlay } from 'lucide-react';

const TeacherResources: React.FC = () => {
  const [activeModal, setActiveModal] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Kaynak başarıyla yüklendi!");
    setActiveModal(null);
  };

  return (
    <div className="space-y-6">
      {/* Upload Modals */}
      {activeModal && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setActiveModal(null)}></div>
          <div className="relative bg-white rounded-2xl w-full max-w-lg shadow-2xl p-6 animate-in fade-in zoom-in-95">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-bold text-gray-900 flex items-center gap-2">
                {activeModal === 'doc' ? <><Upload className="text-primary" /> Yeni Döküman Yükle</> : <><MonitorPlay className="text-accent" /> Video Kaynağı Ekle</>}
              </h3>
              <button onClick={() => setActiveModal(null)} className="p-2 hover:bg-gray-100 rounded-full text-gray-400">
                <X size={20} />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-gray-700 mb-1 uppercase tracking-wide">Kaynak Başlığı</label>
                <input type="text" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:outline-none text-sm" placeholder="Örn: 2024 AYT Matematik Çözümleri" required />
              </div>
              <div>
                <label className="block text-xs font-bold text-gray-700 mb-1 uppercase tracking-wide">Sınıf / Grup Erişimi</label>
                <select className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:outline-none text-sm">
                  <option>Genel (Tüm Öğrenciler)</option>
                  <option>12-A SAY</option>
                  <option>12-B SAY</option>
                  <option>Mezun-A</option>
                </select>
              </div>
              {activeModal === 'video' ? (
                <div>
                  <label className="block text-xs font-bold text-gray-700 mb-1 uppercase tracking-wide">Video Linki (YouTube/Vimeo)</label>
                  <input type="url" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:outline-none text-sm" placeholder="https://youtube.com/..." required />
                </div>
              ) : (
                <div className="border-2 border-dashed border-gray-200 rounded-2xl p-8 text-center hover:border-primary/50 transition-all cursor-pointer bg-gray-50 group">
                  <Upload className="mx-auto text-gray-300 mb-3 group-hover:text-primary transition-colors" size={32} />
                  <p className="text-xs text-gray-500 font-medium">Dosyayı sürükleyin veya <span className="text-primary font-bold">tıklayın</span></p>
                  <p className="text-[10px] text-gray-400 mt-1">PDF, DOCX, PNG (Maks. 20MB)</p>
                </div>
              )}
              <button type="submit" className="w-full py-4 bg-primary text-white font-bold rounded-xl shadow-lg hover:bg-primary-light transition-all">
                Sisteme Yükle & Paylaş
              </button>
            </form>
          </div>
        </div>
      )}

      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
            <FileText className="text-primary" /> Kaynak & Döküman Paylaşımı
        </h1>
        <div className="flex gap-2">
            <button onClick={() => setActiveModal('video')} className="px-4 py-2 bg-white border border-gray-200 rounded-xl text-sm font-bold text-gray-700 hover:bg-gray-50 flex items-center gap-2 transition-all shadow-sm">
                <Video size={18} className="text-accent" /> Video Yükle
            </button>
            <button onClick={() => setActiveModal('doc')} className="px-4 py-2 bg-primary text-white rounded-xl text-sm font-bold hover:bg-primary-light flex items-center gap-2 transition-all shadow-lg shadow-primary/20">
                <Plus size={18} /> Yeni Döküman
            </button>
        </div>
      </div>

      <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm">
        <table className="w-full text-sm text-left">
            <thead className="bg-gray-50 text-gray-500 uppercase text-[10px] font-bold border-b border-gray-200">
                <tr>
                    <th className="px-6 py-4">Kaynak Adı</th>
                    <th className="px-6 py-4">Sınıf / Grup</th>
                    <th className="px-6 py-4">Tarih</th>
                    <th className="px-6 py-4 text-center">İstatistik</th>
                    <th className="px-6 py-4 text-right">İşlemler</th>
                </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
                {[
                    { name: 'Türev Konu Özeti (PDF)', class: '12-SAY Tümü', date: '12.05.2024', views: 45, type: 'pdf' },
                    { name: 'İntegral Soru Çözüm Videosu', class: '12-A SAY', date: '10.05.2024', views: 12, type: 'video' },
                    { name: 'Modern Fizik El Notları', class: 'Genel', date: '05.05.2024', views: 124, type: 'pdf' },
                ].map((res, i) => (
                    <tr key={i} className="hover:bg-gray-50/50 transition-colors">
                        <td className="px-6 py-4">
                            <div className="flex items-center gap-3">
                                <div className={`p-2 rounded-lg ${res.type === 'video' ? 'bg-orange-50 text-accent' : 'bg-blue-50 text-primary'}`}>
                                  {res.type === 'video' ? <Video size={18} /> : <FileText size={18} />}
                                </div>
                                <span className="font-bold text-gray-800">{res.name}</span>
                            </div>
                        </td>
                        <td className="px-6 py-4 text-gray-500 font-medium">{res.class}</td>
                        <td className="px-6 py-4 text-gray-400 text-xs">{res.date}</td>
                        <td className="px-6 py-4 text-center">
                            <span className="bg-gray-100 px-2 py-1 rounded text-[10px] font-bold text-gray-500">{res.views} İzlenme</span>
                        </td>
                        <td className="px-6 py-4 text-right">
                            <div className="flex justify-end gap-1">
                                <button className="p-2 text-gray-400 hover:text-primary transition-colors"><Edit2 size={16} /></button>
                                <button className="p-2 text-gray-400 hover:text-blue-600 transition-colors"><Share2 size={16} /></button>
                                <button className="p-2 text-gray-400 hover:text-red-600 transition-colors"><Trash2 size={16} /></button>
                            </div>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
      </div>
    </div>
  );
};

export default TeacherResources;
