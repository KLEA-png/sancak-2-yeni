
import React from 'react';
import { FileText, Download, Smartphone, Play, Video } from 'lucide-react';

const RESOURCES = [
    { id: 0, title: 'Özdebir Türkiye Geneli Deneme Çözümü', type: 'Video', subject: 'Genel', duration: '1 saat 20 dk', isNew: true },
    { id: 1, title: 'Türev Konu Anlatımı PDF', type: 'PDF', subject: 'Matematik', size: '2.4 MB' },
    { id: 2, title: 'Modern Fizik Soru Çözüm Videosu', type: 'Video', subject: 'Fizik', duration: '45 dk' },
    { id: 3, title: '2024 AYT Deneme Sınavı', type: 'PDF', subject: 'Genel', size: '5.1 MB' },
    { id: 4, title: 'Organik Kimya Notları', type: 'PDF', subject: 'Kimya', size: '1.2 MB' },
    { id: 5, title: 'Paragraf Taktikleri Semineri', type: 'Video', subject: 'Türkçe', duration: '30 dk' },
];

const StudentResources: React.FC = () => {
  const handleAction = (resource: any) => {
    if (resource.type === 'Video') {
        alert(`${resource.title} oynatılıyor...\n(Video player simülasyonu)`);
    } else {
        // Detect Mobile Platform
        const userAgent = navigator.userAgent || navigator.vendor;
        const isIOS = /iPad|iPhone|iPod/.test(userAgent);
        const isAndroid = /android/i.test(userAgent);
        
        let message = `${resource.title} indiriliyor...`;
        
        if (isIOS) {
            message += `\niOS uyumlu format (iBooks/Files) hazırlanıyor.`;
        } else if (isAndroid) {
            message += `\nAndroid uyumlu format hazırlanıyor.`;
        } else {
            message += `\nMasaüstü indirme başlatılıyor.`;
        }
        alert(message);
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <h1 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
            <FileText className="text-primary" /> Kaynaklar & Dökümanlar
        </h1>
        <div className="text-xs text-gray-500 bg-blue-50 px-3 py-1 rounded-full inline-flex items-center gap-1 w-fit">
            <Smartphone size={14} /> Mobil uyumlu içerikler
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-200 divide-y divide-gray-100">
        {RESOURCES.map((res: any) => (
            <div key={res.id} className={`p-4 flex items-center justify-between hover:bg-gray-50 transition-colors ${res.isNew ? 'bg-orange-50/30' : ''}`}>
                <div className="flex items-center gap-4 min-w-0">
                    <div className={`p-3 rounded-lg flex-shrink-0 ${
                        res.type === 'Video' ? 'bg-orange-50 text-accent' : 'bg-blue-50 text-blue-600'
                    }`}>
                        {res.type === 'Video' ? <Video size={24} /> : <FileText size={24} />}
                    </div>
                    <div className="min-w-0">
                        <div className="flex items-center gap-2">
                             <h4 className="font-bold text-gray-900 text-sm md:text-base truncate pr-2">{res.title}</h4>
                             {res.isNew && <span className="bg-red-500 text-white text-[10px] font-bold px-1.5 py-0.5 rounded animate-pulse">YENİ</span>}
                        </div>
                        <div className="flex flex-wrap items-center gap-2 md:gap-3 text-xs text-gray-500 mt-1">
                            <span className="bg-gray-100 px-2 py-0.5 rounded text-gray-600 font-medium">{res.subject}</span>
                            <span className="hidden md:inline">•</span>
                            <span>{res.type}</span>
                            <span>•</span>
                            <span>{res.size || res.duration}</span>
                        </div>
                    </div>
                </div>
                <button 
                    onClick={() => handleAction(res)}
                    className={`w-28 h-10 justify-center rounded-full transition-all active:scale-95 touch-manipulation flex items-center gap-2 font-bold text-sm shadow-sm flex-shrink-0 ${
                        res.type === 'Video' 
                        ? 'text-accent bg-orange-50 hover:bg-orange-100 border border-orange-100' 
                        : 'text-primary bg-primary/5 hover:bg-primary/10 border border-primary/10'
                    }`}
                >
                    {res.type === 'Video' ? (
                        <>
                            <Play size={16} fill="currentColor" /> <span>İzle</span>
                        </>
                    ) : (
                        <>
                            <Download size={16} /> <span>İndir</span>
                        </>
                    )}
                </button>
            </div>
        ))}
      </div>
    </div>
  );
};
export default StudentResources;
