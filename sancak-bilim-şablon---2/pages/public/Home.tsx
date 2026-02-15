
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, CheckCircle, Users, Trophy, BookOpen, Star, MapPin, Phone, Mail, Clock, Send,
  Atom, Dna, FlaskConical, Calculator, Globe, Pencil, Variable, Binary, Music, Shapes,
  Laptop, BarChart2, Bell, ShieldCheck, Smartphone, MessageCircle, ClipboardCheck, Calendar
} from 'lucide-react';
import CourseDetailModal from '../../components/ui/CourseDetailModal';
import CampaignModal from '../../components/ui/CampaignModal';
import { MOCK_COURSES } from '../../constants';
import { Course } from '../../types';

// Avatar Images for Hero Section
const AVATAR_IMAGES = [
  "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&h=100&q=80", // Woman 1
  "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=100&h=100&q=80", // Man 1
  "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=100&h=100&q=80", // Woman 2
  "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=100&h=100&q=80"  // Man 2
];

const Home: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'12' | 'Mezun'>('12');
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);

  // Filter only 12th grade and Mezun packages
  const displayCourses = MOCK_COURSES.filter(c => c.grade === activeTab).slice(0, 3);

  return (
    <div className="bg-background overflow-x-hidden">
      {/* Campaign Welcome Modal */}
      <CampaignModal />

      {/* Modal Integration */}
      <CourseDetailModal 
        course={selectedCourse} 
        isOpen={!!selectedCourse} 
        onClose={() => setSelectedCourse(null)} 
      />

      {/* Hero Section */}
      <section className="relative min-h-[600px] lg:min-h-[750px] flex items-center pt-20 pb-12 overflow-hidden bg-gradient-to-br from-[#0d1642] via-[#1a237e] to-[#3949ab] text-white">
        
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-blue-500/20 rounded-full blur-[100px] animate-blob"></div>
            <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-purple-500/20 rounded-full blur-[120px] animate-blob animation-delay-2000"></div>
            <div className="absolute top-[20%] left-[20%] w-[300px] h-[300px] bg-cyan-400/10 rounded-full blur-[80px] animate-blob animation-delay-4000"></div>
        </div>

        {/* Educational Background Pattern */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none select-none">
            <Variable className="absolute top-[8%] left-[2%] text-white/5 w-32 h-32 -rotate-12" strokeWidth={1} />
            <Shapes className="absolute top-[40%] left-[-2%] text-white/5 w-20 h-20 rotate-45" strokeWidth={1.5} />
            <Calculator className="absolute bottom-[20%] left-[2%] text-white/5 w-24 h-24 -rotate-6" strokeWidth={1} />
            <Pencil className="absolute top-[15%] left-[30%] text-white/5 w-16 h-16 rotate-90" strokeWidth={1.5} />

            <Atom className="absolute top-[5%] right-[25%] text-white/5 w-40 h-40 rotate-12" strokeWidth={1} />
            
            <FlaskConical className="absolute top-[30%] right-[-2%] text-white/5 w-24 h-24 -rotate-12" strokeWidth={1.5} />
            <Globe className="absolute bottom-[30%] right-[2%] text-white/5 w-28 h-28 -rotate-12" strokeWidth={1} />
            
            <Dna className="absolute bottom-[10%] left-[40%] text-white/5 w-36 h-36 rotate-45" strokeWidth={1} />
            <Binary className="absolute top-[60%] right-[40%] text-white/5 w-24 h-24 rotate-6 opacity-30" strokeWidth={1} />
            <Music className="absolute top-[10%] right-[5%] text-white/5 w-16 h-16 -rotate-12" strokeWidth={1.5} />
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-in slide-in-from-bottom duration-1000 fade-in">
            <Link to="/blog/2026-yks-kayitlari-basladi" className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-md text-white font-semibold text-xs tracking-wide uppercase shadow-lg shadow-black/5 hover:bg-white/20 hover:scale-105 transition-all duration-300 cursor-pointer group">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
                2026 YKS Kayıtları Başladı <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            
            <h1 className="font-heading font-extrabold text-4xl md:text-6xl leading-[1.1] tracking-tight text-white drop-shadow-sm">
              Geleceği <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-orange-500 pb-2 inline-block">
                Sancak Bilim
              </span> ile <br />
              Şekillendir.
            </h1>
            <p className="text-lg text-blue-100 max-w-lg leading-relaxed font-light">
              Çerkezköy kampüsümüzde yüz yüze eğitim ayrıcalığını, yapay zeka destekli dijital takip sistemimizle birleştiriyoruz. 
              Uzman kadromuzla sınıfta öğrenin, portal ile pekiştirin.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link to="/courses" className="px-8 py-3.5 bg-white text-primary-dark rounded-full font-bold hover:bg-accent hover:text-white transition-all shadow-lg hover:shadow-orange-500/30 hover:scale-105 flex items-center justify-center gap-2 group">
                Kursları İncele <ArrowRight size={18} className="text-accent group-hover:text-white transition-colors" />
              </Link>
              <button onClick={() => document.getElementById('contact-section')?.scrollIntoView({ behavior: 'smooth' })} className="px-8 py-3.5 bg-transparent text-white border border-white/30 rounded-full font-semibold hover:text-accent hover:border-accent hover:bg-white/5 transition-all flex items-center justify-center backdrop-blur-sm group">
                Kampüsü Ziyaret Et
              </button>
            </div>
            
            <div className="flex items-center gap-6 pt-6 border-t border-white/10">
                <div className="flex -space-x-3">
                    {AVATAR_IMAGES.map((src, i) => (
                         <img key={i} className="w-10 h-10 rounded-full border-2 border-[#1a237e] object-cover" src={src} alt={`Student ${i}`} loading="lazy" />
                    ))}
                    <div className="w-10 h-10 rounded-full border-2 border-[#1a237e] bg-white text-primary flex items-center justify-center text-xs font-bold">+2k</div>
                </div>
                <div>
                   <div className="flex text-yellow-400 text-sm">
                       <Star fill="currentColor" size={16} />
                       <Star fill="currentColor" size={16} />
                       <Star fill="currentColor" size={16} />
                       <Star fill="currentColor" size={16} />
                       <Star fill="currentColor" size={16} />
                   </div>
                    <div className="text-sm font-medium text-blue-200 mt-1">Öğrenci ve veli memnuniyeti</div>
                </div>
            </div>
          </div>

          <div className="relative animate-in slide-in-from-right duration-1000 hidden lg:block">
            <div className="relative rounded-[2rem] overflow-hidden shadow-2xl shadow-black/30 transform rotate-1 hover:rotate-0 transition-transform duration-700 ease-out border-[6px] border-white/10">
                <img 
                    src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1200&q=80" 
                    alt="University Students" 
                    className="w-full h-[500px] object-cover scale-105 hover:scale-100 transition-transform duration-1000"
                    loading="eager" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                
                <div className="absolute bottom-8 left-8 right-8">
                    <div className="glass-card p-5 rounded-2xl flex items-center gap-4 text-white border-white/20 bg-black/20 backdrop-blur-md group hover:bg-black/30 transition-colors">
                        <div className="bg-white/20 p-3 rounded-full backdrop-blur-md group-hover:bg-white/30 transition-colors">
                            <Trophy size={28} className="text-yellow-300 group-hover:scale-110 transition-transform" />
                        </div>
                        <div>
                            <div className="font-bold text-lg">2024 YKS Rekoru</div>
                            <div className="text-sm text-gray-200">İlk 1000'de 45 öğrencimiz yer aldı.</div>
                        </div>
                    </div>
                </div>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-0 left-0 right-0 z-20">
             <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 100" className="w-full h-auto text-white fill-current">
                <path d="M0,48L80,53.3C160,59,320,69,480,64C640,59,800,37,960,32C1120,27,1280,37,1360,42.7L1440,48L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
             </svg>
        </div>
      </section>

      {/* SANCAK PORTAL SECTION - UPDATED FOR PHYSICAL EDUCATION EMPHASIS */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gray-50 -skew-x-12 translate-x-32 z-0 hidden lg:block"></div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="text-center mb-16">
                <div className="inline-block px-4 py-1 bg-blue-50 text-blue-600 font-bold rounded-full text-xs uppercase tracking-wider mb-4">
                    Örgün Eğitimin Dijital Gücü
                </div>
                <h2 className="font-heading font-bold text-4xl text-gray-900 mb-4">Sancak Portal Nedir?</h2>
                <p className="text-gray-500 max-w-2xl mx-auto text-lg">
                    Kampüs içi eğitim süreçlerini, etütleri ve sınavları tek bir noktadan takip etmenizi sağlayan, 
                    örgün eğitimin tamamlayıcısı akıllı asistan.
                </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-16 items-center">
                {/* Left: Features List */}
                <div className="space-y-8">
                    {[
                        { 
                            title: "Yoklama, Devamsızlık & Sınav Karnesi", 
                            desc: "Kurumda yapılan tüm deneme sınavı sonuçlarına, detaylı konu analizlerine ve video çözümlerine anında ulaşın. Devamsızlık durumunuzu güncel takip edin.",
                            icon: ClipboardCheck,
                            color: "bg-orange-100 text-orange-600"
                        },
                        { 
                            title: "EduChat: Öğretmenine Soru Sor", 
                            desc: "Ders dışında aklınıza takılan soruları, Sancak Bilim öğretmenlerine fotoğraf olarak gönderin. Çözümler cebinize gelsin.",
                            icon: MessageCircle,
                            color: "bg-pink-100 text-pink-600"
                        },
                        { 
                            title: "Birebir Etüt & Randevu Sistemi", 
                            desc: "Kütüphane çalışma saatlerini görüntüleyin ve eksik olduğunuz konularda öğretmenlerinizden birebir etüt randevusu alın.",
                            icon: Calendar,
                            color: "bg-purple-100 text-purple-600"
                        },
                        { 
                            title: "Veli Bilgilendirme Sistemi", 
                            desc: "Velilerimiz; öğrencinin kuruma giriş-çıkış saatlerini, ödev durumunu ve akademik gelişim raporlarını anlık olarak izleyebilir.",
                            icon: Users,
                            color: "bg-blue-100 text-blue-600"
                        }
                    ].map((feature, idx) => (
                        <div key={idx} className="flex gap-5 group">
                            <div className={`w-14 h-14 rounded-2xl flex items-center justify-center shrink-0 transition-transform group-hover:scale-110 ${feature.color}`}>
                                <feature.icon size={28} />
                            </div>
                            <div>
                                <h4 className="font-bold text-xl text-gray-900 mb-2 group-hover:text-primary transition-colors">{feature.title}</h4>
                                <p className="text-gray-500 leading-relaxed text-sm">{feature.desc}</p>
                            </div>
                        </div>
                    ))}
                    
                    <div className="pt-4">
                        <Link to="/crm/login" className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white font-bold rounded-xl shadow-lg shadow-primary/25 hover:bg-primary-light transition-all hover:-translate-y-1">
                            Öğrenci Portalı Giriş <ArrowRight size={18} />
                        </Link>
                    </div>
                </div>

                {/* Right: Mockup Image */}
                <div className="relative">
                    {/* Main Laptop/Tablet Mockup */}
                    <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-black/20 border-[10px] border-gray-900 bg-gray-900">
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-4 bg-gray-900 rounded-b-xl z-20 flex items-center justify-center gap-2">
                            <div className="w-1.5 h-1.5 rounded-full bg-gray-700"></div>
                            <div className="w-10 h-1 rounded-full bg-gray-800"></div>
                        </div>
                        <img 
                            src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80" 
                            alt="Sancak Portal Dashboard" 
                            className="w-full h-auto object-cover opacity-90 hover:opacity-100 transition-opacity duration-500"
                        />
                        
                        {/* Overlay Gradient */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent pointer-events-none"></div>
                    </div>

                    {/* Floating Cards */}
                    <div className="absolute -bottom-10 -left-10 bg-white p-4 rounded-2xl shadow-xl border border-gray-100 flex items-center gap-3 animate-bounce-slow hidden md:flex">
                        <div className="bg-green-100 p-3 rounded-full text-green-600">
                            <ShieldCheck size={24} />
                        </div>
                        <div>
                            <div className="font-bold text-gray-900 text-sm">Fiziksel Takip</div>
                            <div className="text-xs text-gray-500">Giriş/Çıkış & Yoklama</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-white relative z-10 border-t border-gray-100">
        <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {[
                    { icon: Users, label: 'Mutlu Öğrenci', value: '2500+' },
                    { icon: Trophy, label: 'Derece', value: '150+' },
                    { icon: BookOpen, label: 'Etüt Saati', value: '10k+' },
                    { icon: CheckCircle, label: 'Yerleşme', value: '%95' },
                ].map((stat, idx) => (
                    <div key={idx} className="text-center group cursor-default">
                        <div className="w-16 h-16 mx-auto bg-gray-50 rounded-2xl flex items-center justify-center text-primary mb-4 group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all duration-300 shadow-sm border border-gray-100">
                            <stat.icon size={28} className="group-hover:text-accent transition-colors duration-300" />
                        </div>
                        <div className="font-heading font-bold text-4xl text-gray-900 mb-1 tracking-tight">{stat.value}</div>
                        <div className="text-gray-500 font-medium text-sm uppercase tracking-wider">{stat.label}</div>
                    </div>
                ))}
            </div>
        </div>
      </section>

      {/* Popular Packages */}
      <section className="py-24 bg-[#f5f5f7] relative">
        <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-12">
                <div className="inline-block px-4 py-1 bg-accent/10 text-accent font-bold rounded-full text-xs uppercase tracking-wider mb-4">Özel Programlar</div>
                <h2 className="font-heading font-bold text-4xl text-[#1d1d1f] mb-4">YKS Hazırlık Paketleri</h2>
                <p className="text-gray-500 max-w-2xl mx-auto">Hedefine en uygun çalışma programını seç, 12. Sınıf ve Mezun gruplarına özel müfredatla rakiplerinin önüne geç.</p>
            </div>

            <div className="flex justify-center mb-10">
                <div className="bg-white p-1.5 rounded-full shadow-sm border border-gray-200 inline-flex">
                    <button 
                        onClick={() => setActiveTab('12')}
                        className={`px-8 py-3 rounded-full text-sm font-bold transition-all ${activeTab === '12' ? 'bg-primary text-white shadow-md' : 'text-gray-500 hover:text-primary'}`}
                    >
                        12. Sınıf YKS Hazırlık
                    </button>
                    <button 
                        onClick={() => setActiveTab('Mezun')}
                        className={`px-8 py-3 rounded-full text-sm font-bold transition-all ${activeTab === 'Mezun' ? 'bg-primary text-white shadow-md' : 'text-gray-500 hover:text-primary'}`}
                    >
                        Mezun YKS Hazırlık
                    </button>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {displayCourses.map((course) => (
                    <div key={course.id} className="bg-white rounded-[20px] overflow-hidden border border-gray-100 hover:shadow-2xl hover:shadow-black/5 transition-all duration-500 group flex flex-col hover:-translate-y-2 relative hover:z-30">
                        <div className="h-60 relative overflow-hidden">
                            <img src={course.image} alt={course.title} loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                            <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md px-4 py-1.5 rounded-full text-xs font-bold text-[#1d1d1f] shadow-sm uppercase tracking-wide">
                                {course.stream}
                            </div>
                        </div>
                        <div className="p-8 flex-grow flex flex-col">
                            <h3 className="font-heading font-bold text-xl text-[#1d1d1f] mb-3 line-clamp-1">{course.title}</h3>
                            <p className="text-gray-500 text-sm mb-6 flex-grow leading-relaxed">{course.description}</p>
                            
                            <ul className="space-y-2 mb-8">
                                <li className="text-sm text-gray-600 flex items-center gap-2 group/item">
                                    <CheckCircle size={16} className="text-green-500 group-hover/item:text-accent transition-colors" /> 
                                    <span>Haftalık Yoğun Ders Programı</span>
                                </li>
                                <li className="text-sm text-gray-600 flex items-center gap-2 group/item">
                                    <CheckCircle size={16} className="text-green-500 group-hover/item:text-accent transition-colors" /> 
                                    <span>Birebir Koçluk & Rehberlik</span>
                                </li>
                                <li className="text-sm text-gray-600 flex items-center gap-2 group/item">
                                    <CheckCircle size={16} className="text-green-500 group-hover/item:text-accent transition-colors" /> 
                                    <span>Türkiye Geneli Denemeler</span>
                                </li>
                            </ul>

                            <button 
                                onClick={() => setSelectedCourse(course)}
                                className="w-full py-4 bg-gray-50 text-[#1d1d1f] font-bold rounded-xl hover:bg-primary hover:text-white transition-all flex items-center justify-center gap-2 group-hover/btn"
                            >
                                İncele <ArrowRight size={18} className="group-hover/btn:translate-x-1 transition-transform group-hover/btn:text-accent" />
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            <div className="text-center mt-12">
                <Link to="/courses" className="inline-flex items-center gap-2 text-primary font-semibold hover:text-primary-dark transition-colors border-b border-primary/20 pb-0.5 hover:border-primary group">
                    Tüm Kursları ve Paketleri İncele <ArrowRight size={16} className="group-hover:text-accent transition-colors" />
                </Link>
            </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-white py-16 border-t border-gray-100" id="contact-section">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            <div className="space-y-8">
              <div>
                <h3 className="font-heading font-bold text-3xl text-primary-dark mb-4">İletişim & Konum</h3>
                <p className="text-gray-500">Merkez kampüsümüzü ziyaret edin, kahvemizi için ve eğitim danışmanlarımızla tanışın.</p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="flex items-start gap-3 group">
                  <div className="p-3 bg-blue-50 text-blue-600 rounded-xl group-hover:bg-blue-100 transition-colors">
                    <MapPin size={24} className="group-hover:text-accent transition-colors" />
                  </div>
                  <div>
                    <h5 className="font-bold text-gray-900">Adres</h5>
                    <p className="text-sm text-gray-500 mt-1">Gazi Osman Paşa, Cevatbey Sk. no:3/A, 59500 Çerkezköy/Tekirdağ</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 group">
                  <div className="p-3 bg-green-50 text-green-600 rounded-xl group-hover:bg-green-100 transition-colors">
                    <Phone size={24} className="group-hover:text-accent transition-colors" />
                  </div>
                  <div>
                    <h5 className="font-bold text-gray-900">Telefon</h5>
                    <p className="text-sm text-gray-500 mt-1">0549 528 72 73</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 group">
                  <div className="p-3 bg-orange-50 text-orange-600 rounded-xl group-hover:bg-orange-100 transition-colors">
                    <Mail size={24} className="group-hover:text-accent transition-colors" />
                  </div>
                  <div>
                    <h5 className="font-bold text-gray-900">E-Posta</h5>
                    <p className="text-sm text-gray-500 mt-1">info@sancakbilim.com</p>
                    <p className="text-sm text-gray-500">kayit@sancakbilim.com</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 group">
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

              <div className="map-container h-64 w-full shadow-lg rounded-2xl overflow-hidden relative">
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

            <div className="bg-white p-6 rounded-3xl border border-gray-100 relative overflow-hidden shadow-lg">
              <div className="absolute top-0 right-0 w-40 h-40 bg-gray-50 rounded-bl-full -mr-10 -mt-10 transition-transform hover:scale-110 duration-700"></div>
              
              <h3 className="font-heading font-bold text-xl text-gray-900 mb-1 relative z-10">Sizi Arayalım</h3>
              <p className="text-gray-500 mb-4 text-xs relative z-10">Formu doldurun, eğitim danışmanlarımız size dönüş yapsın.</p>
              
              <form className="space-y-3 relative z-10" onSubmit={(e) => { e.preventDefault(); alert("Talebiniz alınmıştır. En kısa sürede aranacaksınız."); }}>
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
                      <option>Mezun (YKS)</option>
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
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
