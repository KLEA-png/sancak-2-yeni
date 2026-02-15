import React, { useState } from 'react';
import { BookOpen, Clock, X, HelpCircle, FileText } from 'lucide-react';

const HOMEWORK = [
    { 
        id: 1, 
        title: 'Türev Test 1-2', 
        subject: 'Matematik', 
        dueDate: '2024-05-20', 
        status: 'Pending', 
        description: 'Limit ve Süreklilik fasikülü sayfa 45-52 arası çözülecek.',
        questions: [
            { q: 1, text: 'f(x) = x³ - 3x + 1 fonksiyonunun yerel ekstremum noktalarını bulunuz.' },
            { q: 2, text: 'y = 2x² - 4x parabolünün tepe noktasının apsisi nedir?' }
        ]
    },
    { 
        id: 2, 
        title: 'Modern Fizik Okuma', 
        subject: 'Fizik', 
        dueDate: '2024-05-18', 
        status: 'Pending', 
        description: 'Ders kitabından ilgili bölüm okunup özet çıkarılacak.',
        questions: [
            { q: 1, text: 'Fotoelektrik olayı açıklayınız ve Einstein denklemini yazınız.' },
            { q: 2, text: 'Compton saçılması ile fotoelektrik olay arasındaki farklar nelerdir?' }
        ]
    },
    { 
        id: 3, 
        title: 'Kimyasal Tepkimeler', 
        subject: 'Kimya', 
        dueDate: '2024-05-15', 
        status: 'Late', 
        description: 'Soru bankası Test 5 çözülecek.',
        questions: []
    },
    { 
        id: 4, 
        title: 'Paragraf Denemesi', 
        subject: 'Türkçe', 
        dueDate: '2024-05-10', 
        status: 'Completed', 
        description: 'Her gün 20 soru çözümü.',
        questions: []
    },
];

const StudentHomework: React.FC = () => {
  const [selectedHomework, setSelectedHomework] = useState<any>(null);

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
        <BookOpen className="text-primary" /> Ödevlerim
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {HOMEWORK.map((hw) => (
            <div key={hw.id} className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow relative overflow-hidden flex flex-col">
                <div className={`absolute top-0 left-0 w-1 h-full ${
                    hw.status === 'Completed' ? 'bg-green-500' : 
                    hw.status === 'Late' ? 'bg-red-500' : 'bg-yellow-500'
                }`}></div>
                
                <div className="flex justify-between items-start mb-3 pl-2">
                    <span className="text-xs font-bold uppercase tracking-wider text-gray-500">{hw.subject}</span>
                    <span className={`text-xs px-2 py-1 rounded-full font-bold ${
                        hw.status === 'Completed' ? 'bg-green-100 text-green-700' : 
                        hw.status === 'Late' ? 'bg-red-100 text-red-700' : 'bg-yellow-100 text-yellow-700'
                    }`}>
                        {hw.status === 'Completed' ? 'Tamamlandı' : hw.status === 'Late' ? 'Gecikti' : 'Yapılacak'}
                    </span>
                </div>
                
                <h3 className="font-bold text-lg text-gray-900 mb-2 pl-2">{hw.title}</h3>
                <p className="text-sm text-gray-600 mb-4 pl-2 line-clamp-2 flex-grow">{hw.description}</p>
                
                <div className="flex items-center justify-between text-sm text-gray-500 pl-2 mt-auto pt-4 border-t border-gray-50">
                    <div className="flex items-center gap-1">
                        <Clock size={14} />
                        <span>Son: {new Date(hw.dueDate).toLocaleDateString('tr-TR')}</span>
                    </div>
                    <button 
                        onClick={() => setSelectedHomework(hw)}
                        className="text-primary font-bold hover:text-primary-light hover:underline px-2 py-1"
                    >
                        Detay
                    </button>
                </div>
            </div>
        ))}
      </div>

      {/* Homework Detail Modal */}
      {selectedHomework && (
          <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
              <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setSelectedHomework(null)}></div>
              <div className="relative bg-white rounded-2xl w-full max-w-2xl shadow-2xl p-0 animate-in fade-in zoom-in-95 overflow-hidden flex flex-col max-h-[90vh]">
                  {/* Header */}
                  <div className="bg-gray-50 p-6 border-b border-gray-100 flex justify-between items-start">
                      <div>
                          <div className="flex items-center gap-3 mb-1">
                              <span className="text-xs font-bold uppercase tracking-wider text-primary bg-primary/10 px-2 py-1 rounded">
                                  {selectedHomework.subject}
                              </span>
                              <span className="text-xs text-gray-500 flex items-center gap-1">
                                  <Clock size={12} /> {new Date(selectedHomework.dueDate).toLocaleDateString('tr-TR')}
                              </span>
                          </div>
                          <h2 className="text-2xl font-bold text-gray-900">{selectedHomework.title}</h2>
                      </div>
                      <button 
                        onClick={() => setSelectedHomework(null)}
                        className="text-gray-400 hover:text-gray-600 bg-white p-2 rounded-full shadow-sm hover:bg-gray-100 transition-colors"
                      >
                          <X size={20} />
                      </button>
                  </div>

                  {/* Content */}
                  <div className="p-6 overflow-y-auto custom-scrollbar">
                      <div className="mb-6">
                          <h4 className="text-sm font-bold text-gray-900 mb-2 uppercase tracking-wide">Açıklama</h4>
                          <p className="text-gray-600 bg-gray-50 p-4 rounded-xl border border-gray-100">
                              {selectedHomework.description}
                          </p>
                      </div>

                      {selectedHomework.questions && selectedHomework.questions.length > 0 ? (
                          <div>
                              <h4 className="text-sm font-bold text-gray-900 mb-3 uppercase tracking-wide flex items-center gap-2">
                                  <HelpCircle size={16} /> Örnek Sorular / İçerik
                              </h4>
                              <div className="space-y-4">
                                  {selectedHomework.questions.map((q: any, i: number) => (
                                      <div key={i} className="border border-gray-200 rounded-xl p-4 hover:border-primary/30 transition-colors">
                                          <div className="flex items-start gap-3">
                                              <span className="bg-gray-100 text-gray-600 font-bold w-8 h-8 flex items-center justify-center rounded-lg text-sm shrink-0">
                                                  {q.q}
                                              </span>
                                              <p className="text-gray-800 pt-1 text-sm md:text-base">{q.text}</p>
                                          </div>
                                      </div>
                                  ))}
                              </div>
                          </div>
                      ) : (
                          <div className="text-center py-8 bg-gray-50 rounded-xl border border-dashed border-gray-200">
                              <FileText className="mx-auto text-gray-300 mb-2" size={32} />
                              <p className="text-gray-500 text-sm">Bu ödev için dijital soru içeriği girilmemiştir.<br/>Lütfen açıklamayı takip ediniz.</p>
                          </div>
                      )}
                  </div>

                  {/* Footer */}
                  <div className="p-4 border-t border-gray-100 bg-gray-50 flex justify-end">
                      <button 
                        onClick={() => setSelectedHomework(null)}
                        className="px-6 py-2 bg-gray-200 text-gray-700 font-bold rounded-xl hover:bg-gray-300 transition-colors"
                      >
                          Kapat
                      </button>
                  </div>
              </div>
          </div>
      )}
    </div>
  );
};
export default StudentHomework;