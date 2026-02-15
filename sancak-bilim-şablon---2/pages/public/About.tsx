
import React from 'react';
import { 
  Target, Users, MapPin, BookOpen, PenTool, TrendingUp,
  Atom, Dna, FlaskConical, Calculator, Globe, Pencil, Variable, Binary, Music, Shapes
} from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="bg-background">
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

        <div className="container mx-auto px-4 relative z-10 text-center">
            <h1 className="font-heading font-bold text-4xl md:text-5xl mb-6 text-white drop-shadow-sm">Çerkezköy'ün Eğitim Üssü</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
                Biz sanal değiliz, buradayız. Modern kampüsümüz, deneyimli kadromuz ve yüz yüze eğitim modelimizle Çerkezköy'de başarı hikayeleri yazıyoruz.
            </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-24">
            <div>
                <div className="relative">
                    <div className="absolute -inset-4 bg-primary/20 rounded-[3rem] rotate-3 blur-sm"></div>
                    <img 
                        src="https://www.perabilim.com/wp-content/uploads/2025/07/bursa-en-iyi-dershane.jpg" 
                        alt="Sınıf İçi Eğitim" 
                        className="relative rounded-[3rem] shadow-2xl transition-all duration-500 border-8 border-white object-cover h-[400px] w-full"
                    />
                    <div className="absolute bottom-10 right-10 bg-white p-4 rounded-xl shadow-xl flex items-center gap-3 animate-bounce-slow">
                        <div className="bg-green-100 p-2 rounded-full text-green-600">
                            <Users size={24} />
                        </div>
                        <div>
                            <div className="text-xs text-gray-500 font-bold uppercase">Sınıf Mevcudu</div>
                            <div className="text-sm font-bold text-gray-900">Maks. 16 Kişi</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="space-y-6">
                <div className="inline-block px-4 py-1 bg-blue-50 text-primary font-bold rounded-full text-sm">Örgün Eğitim Modeli</div>
                <h2 className="font-heading font-bold text-3xl text-gray-900">Yüz Yüze Eğitim Ayrıcalığı</h2>
                <p className="text-gray-600 leading-relaxed">
                    Sancak Bilim olarak, öğrenmenin en etkili yolunun birebir etkileşimden geçtiğine inanıyoruz. Öğretmenlerimizle sınıf ortamında kuracağınız doğrudan iletişim sayesinde, sorularınıza anında yanıt bulabilir ve konuları derinlemesine kavrayabilirsiniz.
                </p>
                <p className="text-gray-600 leading-relaxed">
                    Kurumumuz, sadece derslerin işlendiği bir bina değil; kütüphanesi, etüt salonları ve sosyal alanlarıyla öğrencilerin tüm gün verimli vakit geçirebileceği tam donanımlı bir eğitim kampüsüdür.
                </p>
                
                <div className="flex gap-4 pt-4">
                    <div className="flex items-center gap-2 text-sm font-bold text-gray-700">
                        <MapPin className="text-accent" size={18} /> Merkezi Konum
                    </div>
                    <div className="flex items-center gap-2 text-sm font-bold text-gray-700">
                        <Target className="text-accent" size={18} /> Birebir İlgi
                    </div>
                </div>
            </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 text-center hover:shadow-lg transition-all hover:-translate-y-1">
                <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <PenTool size={32} />
                </div>
                <h3 className="font-bold text-xl mb-3">Fiziksel Sınıf Ortamı</h3>
                <p className="text-gray-500 text-sm">
                    Geniş, ferah ve teknolojik donanımlı sınıflarımızda dikkat dağıtıcı unsurlardan uzak, odağın sadece derste olduğu verimli öğrenme alanı.
                </p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 text-center hover:shadow-lg transition-all hover:-translate-y-1">
                <div className="w-16 h-16 bg-red-50 text-red-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Users size={32} />
                </div>
                <h3 className="font-bold text-xl mb-3">Yüz Yüze Etüt & Soru Çözümü</h3>
                <p className="text-gray-500 text-sm">
                    Anlamadığınız konuları ertelemeden, teneffüslerde veya etüt saatlerinde öğretmenlerinizle masa başında birebir çözme imkanı.
                </p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 text-center hover:shadow-lg transition-all hover:-translate-y-1">
                <div className="w-16 h-16 bg-yellow-50 text-yellow-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <BookOpen size={32} />
                </div>
                <h3 className="font-bold text-xl mb-3">Kütüphane & Çalışma Salonu</h3>
                <p className="text-gray-500 text-sm">
                    Ders saatleri dışında da kurumda kalarak, sessiz kütüphanemizde gözetmen eşliğinde çalışabilir, rakiplerinizle değil kendinizle yarışırsınız.
                </p>
            </div>
        </div>
        
        {/* Portal Info Box */}
        <div className="bg-primary/5 rounded-3xl p-8 border border-primary/10 flex flex-col md:flex-row items-center gap-8">
            <div className="flex-1">
                <h3 className="text-2xl font-bold text-primary mb-3">Sancak Portal: Eğitimin Dijital Asistanı</h3>
                <p className="text-gray-600 mb-4">
                    Kurumumuzda eğitim <strong>yüz yüze</strong> yapılır, ancak takibi dijitaldir. Sancak Portal sayesinde:
                </p>
                <ul className="space-y-2 text-sm text-gray-700">
                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-accent"></div> Deneme sınavı karnelerinizi detaylı inceleyebilirsiniz.</li>
                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-accent"></div> Öğretmenlerinizden etüt randevusu alabilirsiniz.</li>
                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-accent"></div> Devamsızlık durumunuzu kontrol edebilirsiniz.</li>
                </ul>
            </div>
            <div className="w-full md:w-1/3">
                <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 text-center">
                    <div className="text-4xl font-bold text-primary mb-1">7/24</div>
                    <div className="text-xs text-gray-500 uppercase tracking-widest font-bold">Erişim İmkanı</div>
                    <div className="mt-4 text-xs text-gray-400">Portal sadece kurum öğrencilerimize açıktır.</div>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default About;
