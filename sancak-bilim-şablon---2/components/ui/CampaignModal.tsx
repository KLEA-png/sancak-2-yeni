
import React, { useState, useEffect } from 'react';
import { X, Percent, Trophy, ArrowRight, Sparkles, GraduationCap } from 'lucide-react';

const CampaignModal: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Check if the user has already seen the modal in this session
    const hasSeenModal = sessionStorage.getItem('sancak_campaign_seen');
    
    if (!hasSeenModal) {
      // Show modal after a small delay for better UX
      const timer = setTimeout(() => {
        setIsOpen(true);
        sessionStorage.setItem('sancak_campaign_seen', 'true');
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleAction = (action: string) => {
    // In a real app, route to specific form or page
    setIsOpen(false);
    const contactSection = document.getElementById('contact-section');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-primary-dark/80 backdrop-blur-sm transition-opacity duration-500"
        onClick={handleClose}
      ></div>

      {/* Modal Container - Optimized for Single Screen (No Scroll) */}
      <div className="relative bg-white rounded-2xl md:rounded-[2.5rem] w-full max-w-4xl shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-500">
        
        {/* Decorative Background Blobs */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 pointer-events-none"></div>

        {/* Close Button */}
        <button 
          onClick={handleClose}
          className="absolute top-4 right-4 z-20 p-2 bg-gray-100 hover:bg-gray-200 rounded-full text-gray-500 transition-colors shadow-sm"
        >
          <X size={18} />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2">
            
            {/* Left Side: Early Registration */}
            <div className="p-8 md:p-12 border-b md:border-b-0 md:border-r border-gray-100 relative group cursor-pointer hover:bg-orange-50/40 transition-colors flex flex-col items-center text-center" onClick={() => handleAction('erken-kayit')}>
                <div className="inline-flex items-center gap-1 bg-orange-100 text-orange-600 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wide mb-6">
                    <Sparkles size={12} /> Fırsat
                </div>
                
                <div className="mb-6">
                    <div className="w-16 h-16 md:w-20 md:h-20 bg-orange-50 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-500 shadow-lg shadow-orange-500/10 rotate-3 group-hover:rotate-0">
                        <Percent size={32} className="text-orange-500" />
                    </div>
                </div>

                <h3 className="font-heading font-bold text-xl md:text-2xl text-gray-900 mb-3 group-hover:text-orange-600 transition-colors">
                    Erken Kayıt İndirimi
                </h3>
                <p className="text-gray-500 text-sm mb-8 leading-relaxed max-w-[280px]">
                    2025 YKS gruplarında sınırlı kontenjan için geçerli <span className="font-bold text-gray-900">%25 avantajı</span> yakalayın.
                </p>
                <button className="px-6 py-3 bg-white border-2 border-orange-500 text-orange-600 font-bold rounded-xl hover:bg-orange-500 hover:text-white transition-all w-full max-w-[200px] flex items-center justify-center gap-2 text-sm">
                    Bilgi Al <ArrowRight size={16} />
                </button>
            </div>

            {/* Right Side: Scholarship */}
            <div className="p-8 md:p-12 relative group cursor-pointer hover:bg-blue-50/40 transition-colors flex flex-col items-center text-center" onClick={() => handleAction('burs')}>
                <div className="inline-flex items-center gap-1 bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wide mb-6">
                    <GraduationCap size={12} /> Başarı Bursu
                </div>

                <div className="mb-6">
                    <div className="w-16 h-16 md:w-20 md:h-20 bg-blue-50 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-500 shadow-lg shadow-blue-500/10 -rotate-3 group-hover:rotate-0">
                        <Trophy size={32} className="text-blue-600" />
                    </div>
                </div>

                <h3 className="font-heading font-bold text-xl md:text-2xl text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                    Derece Bursu İmkanı
                </h3>
                <p className="text-gray-500 text-sm mb-8 leading-relaxed max-w-[280px]">
                    Başarınızı ödüllendiriyoruz! Sınav sonuçlarınıza göre <span className="font-bold text-gray-900">%100'e varan burs</span> fırsatı.
                </p>
                <button className="px-6 py-3 bg-primary text-white font-bold rounded-xl hover:bg-primary-light hover:shadow-lg hover:shadow-primary/30 transition-all w-full max-w-[200px] flex items-center justify-center gap-2 text-sm">
                    Hemen Başvur <ArrowRight size={16} />
                </button>
            </div>

        </div>
        
        {/* Footer Note */}
        <div className="bg-gray-50 py-3 text-center border-t border-gray-100 relative z-10">
            <p className="text-[10px] md:text-xs text-gray-400 font-medium">Kampanyalarımız 15 Mayıs 2024 tarihine kadar geçerlidir.</p>
        </div>
      </div>
    </div>
  );
};

export default CampaignModal;
