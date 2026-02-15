
import React, { useState } from 'react';
import { 
  Settings as SettingsIcon, 
  Bell, 
  Lock, 
  Globe, 
  Building, 
  ShieldCheck, 
  Save, 
  Smartphone,
  Mail,
  RefreshCw,
  LogOut,
  ChevronRight
} from 'lucide-react';

const AdminSettings: React.FC = () => {
  const [activeTab, setActiveTab] = useState('Genel Bilgiler');

  const tabs = [
    { label: 'Genel Bilgiler', icon: Building },
    { label: 'Bildirimler', icon: Bell },
    { label: 'Güvenlik', icon: ShieldCheck },
    { label: 'Dil & Bölge', icon: Globe },
    { label: 'Şifre Değiştir', icon: Lock },
  ];

  const renderContent = () => {
    switch (activeTab) {
      case 'Genel Bilgiler':
        return (
          <div className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-300">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
              <h3 className="font-bold text-gray-900 mb-8 border-b border-gray-50 pb-4">Kurumsal Bilgiler</h3>
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">Kurum Tam Adı</label>
                    <input type="text" defaultValue="Sancak Bilim Eğitim Kurumları" className="w-full px-4 py-3 bg-gray-50 border border-transparent rounded-xl text-sm font-semibold text-gray-700 focus:bg-white focus:border-primary transition-all" />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">Kurumsal E-posta</label>
                    <input type="email" defaultValue="info@sancakbilim.com" className="w-full px-4 py-3 bg-gray-50 border border-transparent rounded-xl text-sm font-semibold text-gray-700 focus:bg-white focus:border-primary transition-all" />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">Telefon (Sabit)</label>
                    <input type="text" defaultValue="0282 000 00 00" className="w-full px-4 py-3 bg-gray-50 border border-transparent rounded-xl text-sm font-semibold text-gray-700 focus:bg-white focus:border-primary transition-all" />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">GSM / WhatsApp</label>
                    <input type="text" defaultValue="0549 528 72 73" className="w-full px-4 py-3 bg-gray-50 border border-transparent rounded-xl text-sm font-semibold text-gray-700 focus:bg-white focus:border-primary transition-all" />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">Adres</label>
                  <textarea className="w-full px-4 py-3 bg-gray-50 border border-transparent rounded-xl text-sm font-semibold text-gray-700 h-24 resize-none focus:bg-white focus:border-primary transition-all">Gazi Osman Paşa, Cevatbey Sk. no:3/A, 59500 Çerkezköy/Tekirdağ</textarea>
                </div>
              </div>
            </div>
          </div>
        );
      case 'Bildirimler':
        return (
          <div className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-300">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
              <h3 className="font-bold text-gray-900 mb-8 border-b border-gray-50 pb-4 flex items-center justify-between">
                Sistem Bildirimleri
                <span className="text-[10px] bg-green-50 text-green-600 px-2 py-1 rounded-full uppercase tracking-widest font-bold">Aktif</span>
              </h3>
              <div className="space-y-4">
                {[
                  { label: 'Sınav Sonuçları Açıklandığında SMS Gönder', active: true, icon: Smartphone },
                  { label: 'Devamsızlık Durumunda Veliye Bildir', active: true, icon: Bell },
                  { label: 'Ödeme Hatırlatmalarını Otomatik Gönder', active: false, icon: RefreshCw },
                  { label: 'Haftalık Raporları E-posta ile Gönder', active: true, icon: Mail },
                ].map((pref, i) => (
                  <div key={i} className="flex items-center justify-between p-4 bg-gray-50 rounded-xl border border-gray-100 group hover:border-primary/20 transition-all">
                    <div className="flex items-center gap-4">
                      <div className="p-2 bg-white rounded-lg text-gray-400 group-hover:text-primary transition-colors">
                        <pref.icon size={18} />
                      </div>
                      <span className="text-sm font-medium text-gray-700">{pref.label}</span>
                    </div>
                    <div className={`w-12 h-6 rounded-full p-1 cursor-pointer transition-colors ${pref.active ? 'bg-primary' : 'bg-gray-300'}`}>
                      <div className={`w-4 h-4 bg-white rounded-full transition-transform ${pref.active ? 'translate-x-6' : 'translate-x-0'}`}></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );
      case 'Güvenlik':
        return (
          <div className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-300">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
              <h3 className="font-bold text-gray-900 mb-8 border-b border-gray-50 pb-4">Hesap Güvenliği</h3>
              <div className="space-y-6">
                <div className="flex items-center justify-between p-4 bg-blue-50 border border-blue-100 rounded-xl">
                  <div className="flex items-center gap-4">
                    <ShieldCheck className="text-blue-600" size={24} />
                    <div>
                      <div className="text-sm font-bold text-blue-900">İki Faktörlü Doğrulama (2FA)</div>
                      <div className="text-xs text-blue-700 mt-1">Giriş yaparken SMS kodu ile güvenliği artırın.</div>
                    </div>
                  </div>
                  <button className="px-4 py-2 bg-blue-600 text-white text-xs font-bold rounded-lg hover:bg-blue-700 transition-colors">Aktifleştir</button>
                </div>
                
                <div className="border-t border-gray-50 pt-6">
                  <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">Aktif Oturumlar</h4>
                  <div className="space-y-3">
                    {[
                      { device: 'MacBook Pro - Chrome', location: 'Tekirdağ, TR', status: 'Bu Cihaz', icon: Globe },
                      { device: 'iPhone 15 - Safari', location: 'İstanbul, TR', status: '2 saat önce', icon: Smartphone },
                    ].map((session, i) => (
                      <div key={i} className="flex items-center justify-between p-4 bg-gray-50 rounded-xl border border-gray-100">
                        <div className="flex items-center gap-3">
                          <session.icon size={20} className="text-gray-400" />
                          <div>
                            <div className="text-sm font-bold text-gray-800">{session.device}</div>
                            <div className="text-[10px] text-gray-500">{session.location}</div>
                          </div>
                        </div>
                        <div className="flex items-center gap-4">
                           <span className="text-[10px] font-bold text-primary uppercase">{session.status}</span>
                           {i !== 0 && <button className="text-red-500 hover:text-red-700"><LogOut size={16} /></button>}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      case 'Dil & Bölge':
        return (
          <div className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-300">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
              <h3 className="font-bold text-gray-900 mb-8 border-b border-gray-50 pb-4">Bölgesel Ayarlar</h3>
              <div className="space-y-6">
                <div>
                  <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">Varsayılan Sistem Dili</label>
                  <select className="w-full px-4 py-3 bg-gray-50 border border-transparent rounded-xl text-sm font-semibold text-gray-700 focus:bg-white focus:border-primary transition-all">
                    <option>Türkçe (TR)</option>
                    <option>English (EN)</option>
                    <option>Deutsch (DE)</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">Zaman Dilimi</label>
                  <select className="w-full px-4 py-3 bg-gray-50 border border-transparent rounded-xl text-sm font-semibold text-gray-700 focus:bg-white focus:border-primary transition-all">
                    <option>(GMT+03:00) Istanbul</option>
                    <option>(GMT+00:00) London</option>
                    <option>(GMT+01:00) Berlin</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        );
      case 'Şifre Değiştir':
        return (
          <div className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-300">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
              <h3 className="font-bold text-gray-900 mb-8 border-b border-gray-50 pb-4">Şifre İşlemleri</h3>
              <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); alert('Şifreniz başarıyla güncellendi.'); }}>
                <div>
                  <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">Mevcut Şifre</label>
                  <input type="password" placeholder="••••••••" className="w-full px-4 py-3 bg-gray-50 border border-transparent rounded-xl text-sm font-semibold text-gray-700 focus:bg-white focus:border-primary transition-all" />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">Yeni Şifre</label>
                    <input type="password" placeholder="••••••••" className="w-full px-4 py-3 bg-gray-50 border border-transparent rounded-xl text-sm font-semibold text-gray-700 focus:bg-white focus:border-primary transition-all" />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">Yeni Şifre (Tekrar)</label>
                    <input type="password" placeholder="••••••••" className="w-full px-4 py-3 bg-gray-50 border border-transparent rounded-xl text-sm font-semibold text-gray-700 focus:bg-white focus:border-primary transition-all" />
                  </div>
                </div>
                <div className="bg-orange-50 p-4 rounded-xl border border-orange-100 text-[11px] text-orange-700 leading-relaxed">
                   Şifreniz en az 8 karakter uzunluğunda olmalı, en az bir büyük harf, bir küçük harf ve bir rakam içermelidir.
                </div>
                <button type="submit" className="px-8 py-3 bg-primary text-white font-bold rounded-xl shadow-lg hover:bg-primary-light transition-all flex items-center gap-2">
                    Şifreyi Güncelle
                </button>
              </form>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
            <SettingsIcon className="text-primary" /> Sistem Ayarları
        </h1>
        <div className="hidden md:flex items-center gap-2 text-xs text-gray-400">
            Son güncelleme: 2 dakika önce <RefreshCw size={12} className="animate-spin-slow" />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
        <div className="md:col-span-1 bg-white p-4 rounded-2xl shadow-sm border border-gray-100 h-fit space-y-2">
            {tabs.map((tab, i) => (
                <button 
                  key={i} 
                  onClick={() => setActiveTab(tab.label)}
                  className={`w-full flex items-center justify-between px-4 py-3.5 rounded-xl text-sm font-bold transition-all group ${activeTab === tab.label ? 'bg-primary text-white shadow-xl shadow-primary/20 scale-[1.02]' : 'text-gray-500 hover:bg-gray-50'}`}
                >
                    <div className="flex items-center gap-3">
                        <tab.icon size={18} className={activeTab === tab.label ? 'text-white' : 'text-gray-400 group-hover:text-primary'} /> 
                        {tab.label}
                    </div>
                    {activeTab === tab.label && <ChevronRight size={16} />}
                </button>
            ))}
            
            <div className="mt-10 p-4 bg-gray-50 rounded-2xl border border-gray-100 hidden md:block">
                <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-2">Versiyon Bilgisi</div>
                <div className="text-xs font-bold text-gray-700">v2.4.0 (Stabil)</div>
                <div className="text-[10px] text-gray-500 mt-1">Son güvenlik güncellemesi: 12.05.2024</div>
            </div>
        </div>

        <div className="md:col-span-2 lg:col-span-3 space-y-6 min-h-[600px]">
            {renderContent()}
            
            <div className="flex justify-end gap-3 pt-4">
                <button className="px-8 py-3.5 bg-gray-100 text-gray-500 font-bold rounded-xl hover:bg-gray-200 transition-all text-sm">Vazgeç</button>
                <button 
                  onClick={() => alert("Tüm değişiklikler başarıyla kaydedildi.")} 
                  className="px-10 py-3.5 bg-primary text-white font-bold rounded-xl shadow-lg shadow-primary/20 hover:bg-primary-light transition-all flex items-center gap-2 text-sm"
                >
                  <Save size={18} /> Değişiklikleri Kaydet
                </button>
            </div>
        </div>
      </div>
    </div>
  );
};

export default AdminSettings;
