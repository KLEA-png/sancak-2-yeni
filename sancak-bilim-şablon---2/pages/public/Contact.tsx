
import React from 'react';
import { 
  MapPin, Phone, Mail, Clock, Send,
  Atom, Dna, FlaskConical, Calculator, Globe, Pencil, Variable, Binary, Music, Shapes,
  Instagram, Youtube, Linkedin, Facebook
} from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <div className="bg-background min-h-screen">
       <section className="relative bg-gradient-to-br from-[#0d1642] via-[#1a237e] to-[#3949ab] text-white pt-40 pb-24 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-blue-500/20 rounded-full blur-[100px] animate-blob"></div>
            <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-purple-500/20 rounded-full blur-[120px] animate-blob animation-delay-2000"></div>
            <div className="absolute top-[20%] left-[20%] w-[300px] h-[300px] bg-cyan-400/10 rounded-full blur-[80px] animate-blob animation-delay-4000"></div>
        </div>

        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none select-none opacity-40">
            <Variable className="absolute top-[10%] left-[5%] text-white/10 w-24 h-24 -rotate-12" strokeWidth={1} />
            <Shapes className="absolute bottom-[20%] left-[10%] text-white/10 w-16 h-16 rotate-45" strokeWidth={1.5} />
            <Calculator className="absolute top-[40%] right-[10%] text-white/10 w-20 h-20 -rotate-6" strokeWidth={1} />
            <Pencil className="absolute top-[15%] left-[30%] text-white/5 w-16 h-16 rotate-90" strokeWidth={1.5} />
            <Atom className="absolute bottom-[10%] right-[5%] text-white/10 w-32 h-32 rotate-12" strokeWidth={1} />
            <Globe className="absolute top-[20%] left-[40%] text-white/5 w-24 h-24 -rotate-12" strokeWidth={1} />
            <FlaskConical className="absolute top-[50%] right-[-2%] text-white/5 w-20 h-20 -rotate-12" strokeWidth={1.5} />
            <Dna className="absolute top-[60%] right-[30%] text-white/5 w-28 h-28 rotate-45" strokeWidth={1} />
            <Binary className="absolute bottom-[40%] left-[50%] text-white/5 w-16 h-16 rotate-6 opacity-30" strokeWidth={1} />
            <Music className="absolute top-[10%] right-[20%] text-white/5 w-14 h-14 -rotate-12" strokeWidth={1.5} />
        </div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
             <div className="inline-block px-4 py-1 bg-white/10 text-white border border-white/20 font-bold rounded-full text-xs uppercase tracking-wider mb-6 backdrop-blur-sm">
                7/24 Yanınızdayız
            </div>
            <h1 className="font-heading font-bold text-4xl md:text-6xl mb-6 text-white drop-shadow-sm">Bizimle İletişime Geçin</h1>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto leading-relaxed font-light">
                 Sorularınız, görüşleriniz veya kayıt işlemleri için bize ulaşın. Eğitim danışmanlarımız size yardımcı olmaktan mutluluk duyacaktır.
            </p>
        </div>
      </section>

      <div className="container mx-auto px-4 md:px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex items-start gap-3 bg-white p-6 rounded-2xl shadow-xl shadow-black/5 border border-gray-100 group hover:shadow-2xl hover:shadow-primary/5 transition-all">
                <div className="p-3 bg-blue-50 text-blue-600 rounded-xl group-hover:bg-blue-100 transition-colors">
                  <MapPin size={24} className="group-hover:text-accent transition-colors" />
                </div>
                <div>
                  <h5 className="font-bold text-gray-900">Adres</h5>
                  <p className="text-sm text-gray-500 mt-1">Gazi Osman Paşa, Cevatbey Sk. no:3/A, 59500 Çerkezköy/Tekirdağ</p>
                </div>
              </div>
              <div className="flex items-start gap-3 bg-white p-6 rounded-2xl shadow-xl shadow-black/5 border border-gray-100 group hover:shadow-2xl hover:shadow-primary/5 transition-all">
                <div className="p-3 bg-green-50 text-green-600 rounded-xl group-hover:bg-green-100 transition-colors">
                  <Phone size={24} className="group-hover:text-accent transition-colors" />
                </div>
                <div>
                  <h5 className="font-bold text-gray-900">Telefon</h5>
                  <p className="text-sm text-gray-500 mt-1">0549 528 72 73</p>
                </div>
              </div>
              <div className="flex items-start gap-3 bg-white p-6 rounded-2xl shadow-xl shadow-black/5 border border-gray-100 group hover:shadow-2xl hover:shadow-primary/5 transition-all">
                <div className="p-3 bg-orange-50 text-orange-600 rounded-xl group-hover:bg-orange-100 transition-colors">
                  <Mail size={24} className="group-hover:text-accent transition-colors" />
                </div>
                <div>
                  <h5 className="font-bold text-gray-900">E-Posta</h5>
                  <p className="text-sm text-gray-500 mt-1">info@sancakbilim.com</p>
                  <p className="text-sm text-gray-500">kayit@sancakbilim.com</p>
                </div>
              </div>
              <div className="flex items-start gap-3 bg-white p-6 rounded-2xl shadow-xl shadow-black/5 border border-gray-100 group hover:shadow-2xl hover:shadow-primary/5 transition-all">
                <div className="p-3 bg-purple-50 text-purple-600 rounded-xl group-hover:bg-purple-100 transition-colors">
                  <Clock size={24} className="group-hover:text-accent transition-colors" />
                </div>
                <div>
                  <h5 className="font-bold text-gray-900">Çalışma Saatleri</h5>
                  <p className="text-sm text-gray-500 mt-1">Pzt - Cmt: 09:00 - 19:00</p>
                  <p className="text-sm text-gray-500">Pazar: 09:00 - 17:00</p>
                </div>
              </div>
            </div>

            <div className="map-container h-[400px] w-full shadow-lg rounded-2xl overflow-hidden relative border border-gray-200">
               <iframe 
                 title="Sancak Bilim Map"
                 src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3005.867!2d27.995!3d41.285!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14b54f9c5c5c5c5c%3A0x1234567890abcdef!2sGazi+Osman+Paşa+Mh.%2C+Cevatbey+Sk.+No%3A3%2C+59500+Çerkezköy%2FTekirdağ!5e0!3m2!1str!2str" 
                 loading="lazy"
                 className="w-full h-full border-0"
               >
               </iframe>
               <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full text-xs font-bold shadow-md">Merkez Kampüs</div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-xl relative overflow-hidden">
             <div className="absolute top-0 right-0 w-32 h-32 bg-gray-50 rounded-bl-full -mr-8 -mt-8"></div>
            <h3 className="font-heading font-bold text-xl text-gray-900 mb-1 relative z-10">Sizi Arayalım</h3>
            <p className="text-gray-500 mb-4 text-xs relative z-10">Formu doldurun, eğitim danışmanlarımız size dönüş yapsın.</p>
            
            <form className="space-y-3 relative z-10" onSubmit={(e) => { e.preventDefault(); alert("Mesajınız iletildi."); }}>
              <div>
                <label className="block text-[10px] font-bold text-gray-700 mb-1 uppercase tracking-wide">Ad Soyad</label>
                <input type="text" className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all bg-white text-sm" placeholder="Örn: Ali Yılmaz" required />
              </div>
              <div>
                <label className="block text-[10px] font-bold text-gray-700 mb-1 uppercase tracking-wide">Telefon</label>
                <input type="tel" className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all bg-white text-sm" placeholder="05XX XXX XX XX" required />
              </div>
              <div>
                 <label className="block text-[10px] font-bold text-gray-700 mb-1 uppercase tracking-wide">İlgilendiğiniz Sınıf</label>
                 <select className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all bg-white text-sm">
                    <option>Seçiniz...</option>
                    <option>12. Sınıf (YKS)</option>
                    <option>Mezun</option>
                    <option>11. Sınıf</option>
                    <option>10. Sınıf</option>
                    <option>9. Sınıf</option>
                 </select>
              </div>
              <div>
                <label className="block text-[10px] font-bold text-gray-700 mb-1 uppercase tracking-wide">Mesajınız (Opsiyonel)</label>
                <textarea className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all bg-white h-20 resize-none text-sm" placeholder="Sorularınız..."></textarea>
              </div>
              <button type="submit" className="w-full py-3 bg-accent text-white font-bold rounded-xl shadow-lg shadow-accent/30 hover:bg-accent-light transition-all flex items-center justify-center gap-2 group hover:scale-[1.02] text-sm">
                 Gönder <Send size={16} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </form>

            <div className="mt-20 pt-10 border-t border-gray-100 relative z-10 text-center">
                <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-8">Bizi Takip Edin</p>
                <div className="flex justify-center gap-6">
                    <a href="#" className="w-14 h-14 rounded-full bg-gray-50 flex items-center justify-center text-gray-500 hover:bg-pink-50 hover:text-pink-600 transition-all hover:scale-110 shadow-sm border border-gray-200">
                        <Instagram size={24} />
                    </a>
                    <a href="#" className="w-14 h-14 rounded-full bg-gray-50 flex items-center justify-center text-gray-500 hover:bg-red-50 hover:text-red-600 transition-all hover:scale-110 shadow-sm border border-gray-200">
                        <Youtube size={24} />
                    </a>
                    <a href="#" className="w-14 h-14 rounded-full bg-gray-50 flex items-center justify-center text-gray-500 hover:bg-blue-50 hover:text-blue-700 transition-all hover:scale-110 shadow-sm border border-gray-200">
                        <Linkedin size={24} />
                    </a>
                    <a href="#" className="w-14 h-14 rounded-full bg-gray-50 flex items-center justify-center text-gray-500 hover:bg-blue-50 hover:text-blue-600 transition-all hover:scale-110 shadow-sm border border-gray-200">
                        <Facebook size={24} />
                    </a>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
