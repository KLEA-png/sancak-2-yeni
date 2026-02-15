
import React, { useState, useRef, useEffect } from 'react';
import { 
  CreditCard, 
  Search, 
  Filter, 
  Download, 
  DollarSign, 
  Clock, 
  AlertCircle, 
  CheckCircle2, 
  MoreVertical,
  ArrowUpRight,
  MessageSquare,
  X,
  FileText,
  Printer,
  Edit3,
  Trash2,
  ChevronDown
} from 'lucide-react';

const MOCK_PAYMENTS = [
  { id: '1', student: 'Zeynep Yılmaz', class: '12-A SAY', totalInstallments: 10, currentInstallment: 4, amount: '5.500 ₺', dueDate: '15.05.2024', status: 'Ödendi', method: 'Kredi Kartı' },
  { id: '2', student: 'Ali Demir', class: 'Mezun-A', totalInstallments: 8, currentInstallment: 3, amount: '6.000 ₺', dueDate: '10.05.2024', status: 'Bekliyor', method: 'Havale' },
  { id: '3', student: 'Merve Kaya', class: '12-B EA', totalInstallments: 12, currentInstallment: 5, amount: '4.200 ₺', dueDate: '05.05.2024', status: 'Gecikti', method: 'Nakit' },
  { id: '4', student: 'Can Özkan', class: '11-A SAY', totalInstallments: 10, currentInstallment: 2, amount: '3.500 ₺', dueDate: '20.05.2024', status: 'Bekliyor', method: 'Havale' },
  { id: '5', student: 'Selin Işık', class: '12-A SAY', totalInstallments: 10, currentInstallment: 4, amount: '5.500 ₺', dueDate: '15.05.2024', status: 'Ödendi', method: 'Kredi Kartı' },
  { id: '6', student: 'Burak Ak', class: '12-B SAY', totalInstallments: 8, currentInstallment: 8, amount: '4.000 ₺', dueDate: '01.05.2024', status: 'Ödendi', method: 'Nakit' },
];

const AdminPayments: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [isNewPaymentModalOpen, setIsNewPaymentModalOpen] = useState(false);
  const [isReporting, setIsReporting] = useState(false);
  const [activeMenuId, setActiveMenuId] = useState<string | null>(null);
  
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setActiveMenuId(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleNewPaymentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Tahsilat başarıyla kaydedildi ve öğrenci bakiyesinden düşüldü.");
    setIsNewPaymentModalOpen(false);
  };

  const handleDownloadReport = () => {
    setIsReporting(true);
    setTimeout(() => {
      setIsReporting(false);
      alert("Finansal rapor PDF olarak hazırlandı ve indiriliyor.");
    }, 2000);
  };

  const handleAction = (type: string, student: string) => {
    alert(`${student} için ${type} işlemi başlatılıyor...`);
    setActiveMenuId(null);
  };

  return (
    <div className="space-y-6">
      {/* New Payment Modal */}
      {isNewPaymentModalOpen && (
        <div className="fixed inset-0 z-[70] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm shadow-2xl" onClick={() => setIsNewPaymentModalOpen(false)}></div>
          <div className="relative bg-white rounded-3xl w-full max-w-lg shadow-2xl p-8 animate-in fade-in zoom-in-95 overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-full -mr-8 -mt-8 pointer-events-none"></div>
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-3">
                <div className="p-2 bg-primary/10 rounded-xl text-primary">
                  <DollarSign size={24} />
                </div>
                Yeni Tahsilat Girişi
              </h2>
              <button onClick={() => setIsNewPaymentModalOpen(false)} className="p-2 hover:bg-gray-100 rounded-full text-gray-400 transition-colors">
                <X size={20} />
              </button>
            </div>

            <form onSubmit={handleNewPaymentSubmit} className="space-y-5">
              <div>
                <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">Öğrenci Seçimi</label>
                <select className="w-full px-4 py-3 bg-gray-50 border border-gray-100 rounded-xl text-sm font-semibold focus:bg-white focus:border-primary focus:ring-4 focus:ring-primary/5 transition-all outline-none">
                  <option value="">Öğrenci Seçiniz...</option>
                  {MOCK_PAYMENTS.map(p => <option key={p.id} value={p.id}>{p.student} - {p.class}</option>)}
                </select>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">Tutar (₺)</label>
                  <input type="text" placeholder="0.00" className="w-full px-4 py-3 bg-gray-50 border border-gray-100 rounded-xl text-sm font-semibold focus:bg-white focus:border-primary transition-all outline-none" required />
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">Ödeme Yöntemi</label>
                  <select className="w-full px-4 py-3 bg-gray-50 border border-gray-100 rounded-xl text-sm font-semibold focus:bg-white focus:border-primary transition-all outline-none">
                    <option>Nakit</option>
                    <option>Kredi Kartı</option>
                    <option>Havale/EFT</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">Açıklama / Not</label>
                <textarea className="w-full px-4 py-3 bg-gray-50 border border-gray-100 rounded-xl text-sm font-semibold h-24 resize-none focus:bg-white focus:border-primary transition-all outline-none" placeholder="Tahsilat detaylarını yazınız..."></textarea>
              </div>

              <div className="bg-blue-50 p-4 rounded-2xl border border-blue-100 text-[11px] text-blue-700 leading-relaxed flex gap-3">
                <AlertCircle size={16} className="shrink-0" />
                Kaydetme işlemi sonrası öğrenciye otomatik olarak SMS bilgilendirmesi gönderilecektir.
              </div>

              <button type="submit" className="w-full py-4 bg-primary text-white font-bold rounded-2xl shadow-xl shadow-primary/20 hover:bg-primary-light transition-all flex items-center justify-center gap-2 text-base group">
                Tahsilatı Tamamla <CheckCircle2 size={20} className="group-hover:scale-110 transition-transform" />
              </button>
            </form>
          </div>
        </div>
      )}

      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
            <CreditCard className="text-primary" /> Finans ve Ödeme Takibi
          </h1>
          <p className="text-gray-500 text-sm">Öğrenci taksit durumları ve kurumsal nakit akışı.</p>
        </div>
        <div className="flex gap-2">
          <button 
            onClick={handleDownloadReport}
            disabled={isReporting}
            className={`px-5 py-2.5 bg-white border border-gray-200 rounded-xl text-sm font-bold text-gray-700 hover:bg-gray-50 flex items-center gap-2 transition-all ${isReporting ? 'opacity-50 cursor-not-allowed' : ''}`}
          >
            {isReporting ? <Clock size={18} className="animate-spin" /> : <Download size={18} />}
            {isReporting ? 'Hazırlanıyor...' : 'Rapor Al'}
          </button>
          <button 
            onClick={() => setIsNewPaymentModalOpen(true)}
            className="px-5 py-2.5 bg-primary text-white rounded-xl text-sm font-bold hover:bg-primary-light flex items-center gap-2 shadow-lg shadow-primary/20 transition-all active:scale-95"
          >
            <DollarSign size={18} /> Yeni Tahsilat
          </button>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { label: 'Aylık Tahsilat', value: '284.500 ₺', icon: CheckCircle2, color: 'text-green-600', bg: 'bg-green-50' },
          { label: 'Bekleyen Ödemeler', value: '42.000 ₺', icon: Clock, color: 'text-blue-600', bg: 'bg-blue-50' },
          { label: 'Gecikmiş Taksitler', value: '18.400 ₺', icon: AlertCircle, color: 'text-red-600', bg: 'bg-red-50' },
          { label: 'Tahsilat Oranı', value: '%86', icon: ArrowUpRight, color: 'text-orange-600', bg: 'bg-orange-50' },
        ].map((stat, i) => (
          <div key={i} className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow group">
            <div className="flex items-center justify-between mb-4">
              <div className={`p-3 rounded-xl ${stat.bg} ${stat.color} group-hover:scale-110 transition-transform`}>
                <stat.icon size={22} />
              </div>
            </div>
            <div className="text-2xl font-bold text-gray-900 mb-1 tracking-tight">{stat.value}</div>
            <div className="text-xs text-gray-400 font-bold uppercase tracking-wider">{stat.label}</div>
          </div>
        ))}
      </div>

      {/* Filter Bar */}
      <div className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100 flex flex-col md:flex-row gap-4 items-center justify-between">
        <div className="relative w-full md:w-96">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
          <input 
            type="text" 
            placeholder="Öğrenci adı ile ara..." 
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

      {/* Payments Table */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead className="bg-gray-50 text-gray-400 uppercase text-[10px] font-bold border-b border-gray-100">
              <tr>
                <th className="px-6 py-4">Öğrenci / Sınıf</th>
                <th className="px-6 py-4">Taksit Planı</th>
                <th className="px-6 py-4">Tutar</th>
                <th className="px-6 py-4">Vade Tarihi</th>
                <th className="px-6 py-4">Durum</th>
                <th className="px-6 py-4">Yöntem</th>
                <th className="px-6 py-4 text-right">İşlem</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {MOCK_PAYMENTS.map((payment) => (
                <tr key={payment.id} className="hover:bg-gray-50/50 transition-colors group/row">
                  <td className="px-6 py-4">
                    <div>
                      <div className="font-bold text-gray-900 group-hover/row:text-primary transition-colors">{payment.student}</div>
                      <div className="text-[10px] text-gray-400 uppercase font-bold">{payment.class}</div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex flex-col gap-1.5 w-32">
                      <div className="flex justify-between text-[10px] font-bold text-gray-500">
                        <span>Taksit {payment.currentInstallment}/{payment.totalInstallments}</span>
                        <span>{Math.round((payment.currentInstallment / payment.totalInstallments) * 100)}%</span>
                      </div>
                      <div className="w-full bg-gray-100 h-1.5 rounded-full overflow-hidden shadow-inner">
                        <div 
                          className="h-full bg-primary transition-all duration-1000 ease-out" 
                          style={{ width: `${(payment.currentInstallment / payment.totalInstallments) * 100}%` }}
                        ></div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className="font-bold text-gray-900">{payment.amount}</span>
                  </td>
                  <td className="px-6 py-4">
                    <span className="text-gray-500 font-medium">{payment.dueDate}</span>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`px-2 py-1 rounded-full text-[10px] font-bold ${
                      payment.status === 'Ödendi' ? 'bg-green-50 text-green-600' : 
                      payment.status === 'Gecikti' ? 'bg-red-50 text-red-600' : 
                      'bg-yellow-50 text-yellow-600'
                    }`}>
                      {payment.status}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <span className="text-xs text-gray-500 font-medium">{payment.method}</span>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <div className="flex justify-end gap-1 relative">
                      {payment.status === 'Gecikti' && (
                        <button 
                          onClick={() => handleAction('SMS Hatırlatma', payment.student)}
                          className="p-2 text-primary hover:bg-primary/10 rounded-xl transition-colors" 
                          title="SMS Hatırlatması Gönder"
                        >
                          <MessageSquare size={16} />
                        </button>
                      )}
                      
                      <div className="relative">
                        <button 
                          onClick={() => setActiveMenuId(activeMenuId === payment.id ? null : payment.id)}
                          className={`p-2 rounded-xl transition-all ${activeMenuId === payment.id ? 'bg-primary text-white' : 'text-gray-400 hover:bg-gray-100 hover:text-gray-600'}`}
                        >
                          <MoreVertical size={18} />
                        </button>

                        {/* Dropdown Menu */}
                        {activeMenuId === payment.id && (
                          <div ref={menuRef} className="absolute right-0 mt-2 w-48 bg-white rounded-2xl shadow-2xl border border-gray-100 py-2 z-50 animate-in fade-in slide-in-from-top-2 overflow-hidden">
                            <button onClick={() => handleAction('Makbuz Kes', payment.student)} className="w-full flex items-center gap-3 px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 transition-colors font-medium">
                              <Printer size={16} className="text-gray-400" /> Makbuz Kes
                            </button>
                            <button onClick={() => handleAction('Düzenle', payment.student)} className="w-full flex items-center gap-3 px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 transition-colors font-medium">
                              <Edit3 size={16} className="text-gray-400" /> Düzenle
                            </button>
                            <div className="border-t border-gray-50 my-1"></div>
                            <button onClick={() => handleAction('İptal Et', payment.student)} className="w-full flex items-center gap-3 px-4 py-2.5 text-sm text-red-600 hover:bg-red-50 transition-colors font-bold">
                              <Trash2 size={16} /> Tahsilatı İptal Et
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

      {/* Info Box */}
      <div className="bg-blue-50 p-6 rounded-3xl border border-blue-100 flex items-start gap-5 shadow-sm">
        <div className="p-4 bg-white rounded-2xl text-blue-600 shadow-sm border border-blue-50">
          <CreditCard size={28} />
        </div>
        <div>
          <h4 className="font-bold text-blue-900 mb-2 flex items-center gap-2">
            Ödeme Politikası ve Tahsilat Kuralları
            <span className="px-2 py-0.5 bg-blue-100 text-blue-600 rounded text-[10px] font-bold uppercase tracking-widest">Bilgi</span>
          </h4>
          <p className="text-sm text-blue-700 leading-relaxed max-w-4xl opacity-80">
            Taksit ödemeleri her ayın 15'ine kadar tamamlanmalıdır. Geciken ödemeler için sistem üzerinden otomatik SMS hatırlatması yapabilirsiniz. 
            Tahsilat sırasında sistemden makbuz keserek veliye PDF olarak iletmeyi veya çıktı almayı unutmayınız. Nakit tahsilatlar gün sonunda kasaya teslim edilmelidir.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AdminPayments;
