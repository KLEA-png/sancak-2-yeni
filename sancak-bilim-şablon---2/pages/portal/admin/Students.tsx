
import React, { useState, useRef, useEffect } from 'react';
import { 
  Users, 
  Search, 
  Filter, 
  MoreVertical, 
  UserPlus, 
  Download, 
  Phone, 
  AlertCircle,
  MessageSquare,
  X,
  User,
  Mail,
  Smartphone,
  ShieldCheck,
  ChevronRight,
  ExternalLink,
  FileText,
  FileSpreadsheet,
  CheckCircle2,
  ChevronDown
} from 'lucide-react';

const MOCK_STUDENTS = [
  { 
    id: '1', 
    name: 'Zeynep Yılmaz', 
    class: '12-A SAY', 
    phone: '0530 000 00 00', 
    status: 'Aktif', 
    hasOverdue: false,
    parent: {
      name: 'Ayşe Yılmaz',
      relation: 'Anne',
      phone: '0544 111 22 33',
      email: 'ayse.yilmaz@mail.com'
    }
  },
  { 
    id: '2', 
    name: 'Ali Demir', 
    class: 'Mezun-A', 
    phone: '0530 111 11 11', 
    status: 'Aktif', 
    hasOverdue: true,
    parent: {
      name: 'Mehmet Demir',
      relation: 'Baba',
      phone: '0544 333 44 55',
      email: 'mehmet.demir@mail.com'
    }
  },
  { 
    id: '3', 
    name: 'Merve Kaya', 
    class: '12-B EA', 
    phone: '0530 222 22 22', 
    status: 'Aktif', 
    hasOverdue: false,
    parent: {
      name: 'Fatma Kaya',
      relation: 'Anne',
      phone: '0532 555 66 77',
      email: 'fatma.kaya@mail.com'
    }
  },
  { 
    id: '4', 
    name: 'Can Özkan', 
    class: '11-A SAY', 
    phone: '0530 333 33 33', 
    status: 'Pasif', 
    hasOverdue: true,
    parent: {
      name: 'Osman Özkan',
      relation: 'Baba',
      phone: '0533 888 99 00',
      email: 'osman.ozkan@mail.com'
    }
  },
  { 
    id: '5', 
    name: 'Selin Işık', 
    class: '12-A SAY', 
    phone: '0530 444 44 44', 
    status: 'Aktif', 
    hasOverdue: false,
    parent: {
      name: 'Hülya Işık',
      relation: 'Anne',
      phone: '0541 222 33 44',
      email: 'hulya.isik@mail.com'
    }
  },
];

const AdminStudents: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedStudent, setSelectedStudent] = useState<typeof MOCK_STUDENTS[0] | null>(null);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [activeMenuId, setActiveMenuId] = useState<string | null>(null);
  const [reportDropdownOpen, setReportDropdownOpen] = useState(false);
  
  const menuRef = useRef<HTMLDivElement>(null);
  const reportRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setActiveMenuId(null);
      }
      if (reportRef.current && !reportRef.current.contains(event.target as Node)) {
        setReportDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleOpenDetail = (student: typeof MOCK_STUDENTS[0]) => {
    setSelectedStudent(student);
    setActiveMenuId(null);
  };

  const handleDownloadReport = (type: 'PDF' | 'EXCEL') => {
    alert(`Tüm öğrenci listesi ${type} formatında indiriliyor...`);
    setReportDropdownOpen(false);
  };

  const handleAddStudentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Öğrenci kaydı başarıyla oluşturuldu.");
    setIsAddModalOpen(false);
  };

  return (
    <div className="space-y-6">
      {/* Student Detail Modal */}
      {selectedStudent && (
        <div className="fixed inset-0 z-[70] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setSelectedStudent(null)}></div>
          <div className="relative bg-white rounded-3xl w-full max-w-2xl shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-300">
            <div className="absolute top-0 right-0 w-48 h-48 bg-primary/5 rounded-bl-full -mr-12 -mt-12 pointer-events-none"></div>
            
            <div className="p-8">
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-2xl bg-primary text-white flex items-center justify-center font-bold text-xl shadow-lg shadow-primary/20">
                    {selectedStudent.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900">{selectedStudent.name}</h2>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="text-xs font-bold text-primary uppercase tracking-widest">{selectedStudent.class}</span>
                      <span className="text-gray-300">•</span>
                      <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${selectedStudent.status === 'Aktif' ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-500'}`}>
                        {selectedStudent.status}
                      </span>
                    </div>
                  </div>
                </div>
                <button onClick={() => setSelectedStudent(null)} className="p-2 hover:bg-gray-100 rounded-full text-gray-400 transition-colors">
                  <X size={20} />
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Student Personal Info */}
                <div className="space-y-6">
                  <h3 className="text-xs font-bold text-gray-400 uppercase tracking-[0.2em] border-b border-gray-100 pb-2">Öğrenci Bilgileri</h3>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-gray-50 rounded-lg text-gray-400"><Smartphone size={18} /></div>
                      <div>
                        <div className="text-[10px] font-bold text-gray-400 uppercase">Telefon</div>
                        <div className="text-sm font-semibold text-gray-700">{selectedStudent.phone}</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-gray-50 rounded-lg text-gray-400"><Mail size={18} /></div>
                      <div>
                        <div className="text-[10px] font-bold text-gray-400 uppercase">E-Posta</div>
                        <div className="text-sm font-semibold text-gray-700">ogrenci@sancakbilim.com</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Parent Info */}
                <div className="space-y-6">
                  <h3 className="text-xs font-bold text-primary uppercase tracking-[0.2em] border-b border-primary/10 pb-2">Veli Bilgileri</h3>
                  <div className="space-y-4 bg-primary/5 p-4 rounded-2xl border border-primary/10">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-white rounded-lg text-primary shadow-sm"><User size={18} /></div>
                      <div>
                        <div className="text-[10px] font-bold text-gray-400 uppercase">Veli Adı / Yakınlık</div>
                        <div className="text-sm font-bold text-gray-800">{selectedStudent.parent.name} ({selectedStudent.parent.relation})</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-white rounded-lg text-primary shadow-sm"><Phone size={18} /></div>
                      <div>
                        <div className="text-[10px] font-bold text-gray-400 uppercase">Veli Telefon</div>
                        <div className="text-sm font-bold text-gray-800">{selectedStudent.parent.phone}</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-white rounded-lg text-primary shadow-sm"><Mail size={18} /></div>
                      <div>
                        <div className="text-[10px] font-bold text-gray-400 uppercase">Veli E-Posta</div>
                        <div className="text-sm font-semibold text-gray-700">{selectedStudent.parent.email}</div>
                      </div>
                    </div>
                    
                    <div className="pt-2 flex gap-2">
                        <a href={`tel:${selectedStudent.parent.phone}`} className="flex-1 py-2 bg-primary text-white text-[10px] font-bold rounded-lg flex items-center justify-center gap-2 hover:bg-primary-light transition-all">
                            <Phone size={14} /> ARA
                        </a>
                        <a href={`https://wa.me/${selectedStudent.parent.phone.replace(/ /g, '')}`} target="_blank" className="flex-1 py-2 bg-whatsapp-green text-white text-[10px] font-bold rounded-lg flex items-center justify-center gap-2 hover:opacity-90 transition-all">
                            <MessageSquare size={14} /> WHATSAPP
                        </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Status & Alerts */}
              {selectedStudent.hasOverdue && (
                <div className="mt-8 p-4 bg-red-50 border border-red-100 rounded-2xl flex items-center gap-4 animate-pulse">
                  <div className="p-3 bg-white rounded-xl text-red-500 shadow-sm"><AlertCircle size={24} /></div>
                  <div>
                    <div className="text-sm font-bold text-red-900">Ödeme Gecikmesi Mevcut</div>
                    <div className="text-xs text-red-600">Velisine otomatik ödeme hatırlatma mesajı gönderebilirsiniz.</div>
                  </div>
                  <button className="ml-auto px-4 py-2 bg-red-600 text-white text-xs font-bold rounded-lg hover:bg-red-700 transition-colors">HATIRLATMA GÖNDER</button>
                </div>
              )}

              <div className="mt-8 pt-6 border-t border-gray-100 flex justify-end gap-3">
                <button className="px-6 py-2.5 text-sm font-bold text-gray-500 hover:bg-gray-50 rounded-xl transition-all">Düzenle</button>
                <button className="px-6 py-2.5 text-sm font-bold bg-primary text-white rounded-xl shadow-lg shadow-primary/20 hover:bg-primary-light transition-all">Akademik Rapor</button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Add New Student Modal */}
      {isAddModalOpen && (
        <div className="fixed inset-0 z-[70] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setIsAddModalOpen(false)}></div>
          <div className="relative bg-white rounded-3xl w-full max-w-xl shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-300">
            <div className="p-8">
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-3">
                  <div className="p-2 bg-primary/10 rounded-xl text-primary">
                    <UserPlus size={24} />
                  </div>
                  Yeni Öğrenci Kaydı
                </h2>
                <button onClick={() => setIsAddModalOpen(false)} className="p-2 hover:bg-gray-100 rounded-full text-gray-400">
                  <X size={20} />
                </button>
              </div>

              <form onSubmit={handleAddStudentSubmit} className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">Öğrenci Ad Soyad</label>
                    <input type="text" className="w-full px-4 py-3 bg-gray-50 border border-gray-100 rounded-xl text-sm font-semibold focus:bg-white focus:border-primary transition-all outline-none" placeholder="Örn: Mert Yılmaz" required />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">Sınıf Seçimi</label>
                    <select className="w-full px-4 py-3 bg-gray-50 border border-gray-100 rounded-xl text-sm font-semibold focus:bg-white focus:border-primary transition-all outline-none" required>
                      <option value="">Seçiniz...</option>
                      <option>12-A SAY</option>
                      <option>12-B SAY</option>
                      <option>12-C EA</option>
                      <option>Mezun-A</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                   <div>
                    <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">Öğrenci Telefon</label>
                    <input type="tel" className="w-full px-4 py-3 bg-gray-50 border border-gray-100 rounded-xl text-sm font-semibold focus:bg-white focus:border-primary transition-all outline-none" placeholder="05XX XXX XX XX" />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">Cinsiyet</label>
                    <select className="w-full px-4 py-3 bg-gray-50 border border-gray-100 rounded-xl text-sm font-semibold focus:bg-white focus:border-primary transition-all outline-none">
                      <option>Erkek</option>
                      <option>Kız</option>
                    </select>
                  </div>
                </div>

                <div className="p-4 bg-gray-50 rounded-2xl border border-gray-100 space-y-4">
                  <h4 className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Veli Bilgileri</h4>
                  <div className="grid grid-cols-2 gap-4">
                    <input type="text" className="w-full px-4 py-2.5 bg-white border border-gray-100 rounded-xl text-sm font-semibold focus:border-primary transition-all outline-none" placeholder="Veli Adı" required />
                    <input type="text" className="w-full px-4 py-2.5 bg-white border border-gray-100 rounded-xl text-sm font-semibold focus:border-primary transition-all outline-none" placeholder="Veli Yakınlık" required />
                  </div>
                  <input type="tel" className="w-full px-4 py-2.5 bg-white border border-gray-100 rounded-xl text-sm font-semibold focus:border-primary transition-all outline-none" placeholder="Veli Telefon" required />
                </div>

                <button type="submit" className="w-full py-4 bg-primary text-white font-bold rounded-2xl shadow-xl shadow-primary/20 hover:bg-primary-light transition-all flex items-center justify-center gap-2 text-base">
                  Kaydı Tamamla <CheckCircle2 size={20} />
                </button>
              </form>
            </div>
          </div>
        </div>
      )}

      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
            <h1 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
                <Users className="text-primary" /> Öğrenci Yönetimi
            </h1>
            <p className="text-gray-500 text-sm">Toplam {MOCK_STUDENTS.length} kayıtlı öğrenci bulunmaktadır.</p>
        </div>
        <div className="flex gap-2">
            <div className="relative" ref={reportRef}>
              <button 
                onClick={() => setReportDropdownOpen(!reportDropdownOpen)}
                className="px-4 py-2 bg-white border border-gray-200 rounded-xl text-sm font-bold text-gray-700 hover:bg-gray-50 flex items-center gap-2 transition-all shadow-sm active:scale-95"
              >
                  <Download size={18} /> Rapor İndir <ChevronDown size={14} className={`transition-transform duration-300 ${reportDropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              {reportDropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-2xl shadow-2xl border border-gray-100 py-2 z-50 animate-in fade-in slide-in-from-top-2">
                  <button onClick={() => handleDownloadReport('PDF')} className="w-full flex items-center gap-3 px-4 py-2.5 text-sm text-gray-700 hover:bg-red-50 hover:text-red-600 transition-colors font-medium">
                    <FileText size={16} /> PDF Rapor
                  </button>
                  <button onClick={() => handleDownloadReport('EXCEL')} className="w-full flex items-center gap-3 px-4 py-2.5 text-sm text-gray-700 hover:bg-green-50 hover:text-green-600 transition-colors font-medium">
                    <FileSpreadsheet size={16} /> Excel Rapor
                  </button>
                </div>
              )}
            </div>

            <button 
              onClick={() => setIsAddModalOpen(true)}
              className="px-4 py-2 bg-primary text-white rounded-xl text-sm font-bold hover:bg-primary-light flex items-center gap-2 shadow-lg shadow-primary/20 transition-all active:scale-95"
            >
                <UserPlus size={18} /> Yeni Öğrenci
            </button>
        </div>
      </div>

      <div className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100 flex flex-col md:flex-row gap-4 items-center justify-between">
          <div className="relative w-full md:w-96">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
              <input 
                type="text" 
                placeholder="İsim veya telefon ile ara..." 
                className="w-full pl-10 pr-4 py-2 bg-gray-50 border-none rounded-xl focus:ring-2 focus:ring-primary/10 text-sm font-medium"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
          </div>
          <div className="flex items-center gap-2 w-full md:w-auto">
              <button className="flex-1 md:flex-none px-4 py-2 bg-gray-50 rounded-xl text-sm font-bold text-gray-600 flex items-center justify-center gap-2 border border-gray-100 hover:bg-gray-100 transition-colors">
                  <Filter size={16} /> Filtrele
              </button>
          </div>
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
                <thead className="bg-gray-50 text-gray-400 uppercase text-[10px] font-bold border-b border-gray-100">
                    <tr>
                        <th className="px-6 py-4">Öğrenci Adı</th>
                        <th className="px-6 py-4">Sınıf</th>
                        <th className="px-6 py-4">İletişim</th>
                        <th className="px-6 py-4">Durum</th>
                        <th className="px-6 py-4">Ödeme Kontrol</th>
                        <th className="px-6 py-4 text-right">İşlem</th>
                    </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                    {MOCK_STUDENTS.map((student) => (
                        <tr key={student.id} className="hover:bg-gray-50/50 transition-colors group">
                            <td className="px-6 py-4">
                                <div className="flex items-center gap-3">
                                    <div className="w-9 h-9 rounded-full bg-primary/5 text-primary flex items-center justify-center font-bold text-xs uppercase border border-primary/10">
                                        {student.name.split(' ').map(n => n[0]).join('')}
                                    </div>
                                    <span className="font-bold text-gray-900 group-hover:text-primary transition-colors">{student.name}</span>
                                </div>
                            </td>
                            <td className="px-6 py-4 text-gray-600 font-medium">{student.class}</td>
                            <td className="px-6 py-4">
                                <div className="flex items-center gap-2 text-gray-500 hover:text-primary cursor-pointer transition-colors">
                                    <Phone size={14} /> <span className="text-xs font-semibold">{student.phone}</span>
                                </div>
                            </td>
                            <td className="px-6 py-4">
                                <span className={`px-2.5 py-1 rounded-lg text-[10px] font-bold uppercase tracking-wider ${
                                    student.status === 'Aktif' ? 'bg-green-50 text-green-600' : 'bg-gray-100 text-gray-500'
                                }`}>
                                    {student.status}
                                </span>
                            </td>
                            <td className="px-6 py-4">
                                {student.hasOverdue ? (
                                    <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-red-50 text-red-600 text-[10px] font-bold animate-pulse border border-red-100 w-fit">
                                        <AlertCircle size={14} />
                                        ÖDEME GECİKTİ
                                    </div>
                                ) : (
                                    <span className="text-[10px] font-bold text-gray-300 uppercase tracking-widest">Düzenli</span>
                                )}
                            </td>
                            <td className="px-6 py-4 text-right">
                                <div className="flex justify-end gap-1 relative">
                                    {student.hasOverdue && (
                                        <button className="p-2 text-primary hover:bg-primary/5 rounded-lg transition-colors" title="Hatırlatma Gönder">
                                            <MessageSquare size={18} />
                                        </button>
                                    )}
                                    <div className="relative">
                                      <button 
                                        onClick={() => setActiveMenuId(activeMenuId === student.id ? null : student.id)}
                                        className={`p-2 rounded-lg transition-all ${activeMenuId === student.id ? 'bg-primary text-white shadow-md' : 'text-gray-400 hover:bg-gray-100 hover:text-gray-600'}`}
                                      >
                                          <MoreVertical size={18} />
                                      </button>
                                      
                                      {activeMenuId === student.id && (
                                        <div ref={menuRef} className="absolute right-0 mt-2 w-48 bg-white rounded-2xl shadow-2xl border border-gray-100 py-2 z-50 animate-in fade-in slide-in-from-top-2">
                                          <button 
                                            onClick={() => handleOpenDetail(student)}
                                            className="w-full flex items-center gap-3 px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 transition-colors font-medium"
                                          >
                                            <ShieldCheck size={16} className="text-primary" /> Detayları Gör
                                          </button>
                                          <button className="w-full flex items-center gap-3 px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 transition-colors font-medium">
                                            <Phone size={16} className="text-gray-400" /> Veliye Ulaş
                                          </button>
                                          <div className="border-t border-gray-50 my-1"></div>
                                          <button className="w-full flex items-center gap-3 px-4 py-2.5 text-sm text-red-600 hover:bg-red-50 transition-colors font-bold">
                                            Kayıt Sil
                                          </button>
                                        </div>
                                      )}
                                    </div>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
          </div>
      </div>
      
      {/* Legend / Info */}
      <div className="flex items-center gap-2 text-[11px] text-gray-400 font-medium px-2">
          <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></div>
          Kırmızı uyarılar, cari dönem ödemesi 5 günden fazla geciken öğrencileri temsil eder. Detay kısmından veli iletişimine ulaşabilirsiniz.
      </div>
    </div>
  );
};

export default AdminStudents;
