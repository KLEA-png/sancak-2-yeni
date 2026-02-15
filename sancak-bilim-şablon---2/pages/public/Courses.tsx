
import React, { useState, useMemo, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { MOCK_COURSES } from '../../constants';
import { 
  Search, ArrowRight, BookOpen, Users, X, Clock, Sparkles,
  Atom, Dna, FlaskConical, Calculator, Globe, Pencil, Variable, Binary, Music, Shapes
} from 'lucide-react';
import CourseDetailModal from '../../components/ui/CourseDetailModal';
import { Course } from '../../types';

const Courses: React.FC = () => {
  const [filterGrade, setFilterGrade] = useState<string>('All');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);
  const [showDiscountPopup, setShowDiscountPopup] = useState(false);

  // Trigger popup after 10 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowDiscountPopup(true);
    }, 10000);

    return () => clearTimeout(timer);
  }, []);

  const handleClosePopup = () => {
    setShowDiscountPopup(false);
    sessionStorage.setItem('course_discount_seen', 'true');
  };

  const grades = ['All', '12', 'Mezun', '11', '10', '9'];

  const filteredCourses = useMemo(() => {
    return MOCK_COURSES.filter(course => {
      const matchesGrade = filterGrade === 'All' || course.grade === filterGrade;
      const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase());
      return matchesGrade && matchesSearch;
    });
  }, [filterGrade, searchTerm]);

  return (
    <div className="bg-background min-h-screen">
      <CourseDetailModal 
        course={selectedCourse} 
        isOpen={!!selectedCourse} 
        onClose={() => setSelectedCourse(null)} 
      />

      {/* DISCOUNT POPUP */}
      {showDiscountPopup && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <div 
                className="absolute inset-0 bg-primary-dark/70 backdrop-blur-sm transition-opacity"
                onClick={handleClosePopup}
            ></div>

            <div className="relative bg-white rounded-3xl shadow-2xl w-full max-w-md overflow-hidden animate-in fade-in zoom-in-95 duration-500 border border-white/20">
                <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-br from-[#0d1642] to-[#1a237e]"></div>
                <div className="absolute top-[-20px] left-[-20px] w-24 h-24 bg-white/10 rounded-full blur-xl"></div>
                <div className="absolute top-[40px] right-[-10px] w-32 h-32 bg-accent/20 rounded-full blur-xl"></div>

                <button 
                    onClick={handleClosePopup}
                    className="absolute top-4 right-4 z-10 p-2 bg-white/10 hover:bg-white/20 text-white rounded-full transition-colors backdrop-blur-md"
                >
                    <X size={20} />
                </button>

                <div className="relative pt-8 px-6 pb-8 text-center">
                    <div className="w-20 h-20 bg-white rounded-full shadow-lg mx-auto mb-4 flex items-center justify-center relative z-10 border-4 border-gray-50">
                        <Clock size={40} className="text-accent animate-pulse" />
                        <div className="absolute -top-2 -right-2 bg-accent text-white text-[10px] font-bold px-3 py-1 rounded-full shadow-md flex items-center gap-1 border border-white">
                             <Sparkles size={10} /> FIRSAT
                        </div>
                    </div>

                    <h3 className="font-heading font-bold text-2xl text-primary-dark mb-2">
                        Zaman Daralıyor!
                    </h3>
                    
                    <div className="bg-blue-50 rounded-xl p-4 border border-blue-100 mb-6 relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-16 h-16 bg-accent/10 rounded-bl-full -mr-4 -mt-4"></div>
                        <p className="text-primary-light text-sm font-semibold mb-1 uppercase tracking-wide">24 Saat İçinde Kayıt Yaptır</p>
                        <div className="font-heading font-extrabold text-5xl text-accent tracking-tighter drop-shadow-sm">
                            %15 <span className="text-3xl">İNDİRİM</span>
                        </div>
                        <p className="text-gray-500 text-xs mt-2 font-medium">Bu fırsat sadece online başvurularda geçerlidir.</p>
                    </div>

                    <div className="space-y-3">
                        <Link 
                            to="/contact"
                            onClick={handleClosePopup}
                            className="block w-full py-4 bg-accent text-white font-bold rounded-xl shadow-lg shadow-accent/30 hover:bg-accent-light hover:scale-[1.02] transition-all flex items-center justify-center gap-2"
                        >
                            İndirimi Kap & Başvur <ArrowRight size={18} />
                        </Link>
                        <button 
                            onClick={handleClosePopup}
                            className="text-gray-400 text-xs font-medium hover:text-primary transition-colors py-2"
                        >
                            Hayır, bu fırsatı kaçırmak istiyorum.
                        </button>
                    </div>
                </div>
            </div>
        </div>
      )}

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
                Geleceğini Şekillendir
            </div>
            <h1 className="font-heading font-bold text-4xl md:text-6xl mb-6 text-white drop-shadow-sm">Eğitim Programlarımız</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed font-light">
                Sınavlara hazırlık ve okul başarısı için bilimsel olarak tasarlanmış, hedef odaklı kurs programlarımızla tanışın.
            </p>
        </div>
      </section>

      <div className="container mx-auto px-4 md:px-6 -mt-10 relative z-20 pb-20">
        <div className="bg-white p-2 rounded-2xl shadow-xl shadow-black/5 border border-gray-100 mb-12 flex flex-col md:flex-row gap-4 items-center justify-between max-w-5xl mx-auto group-search">
            <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto p-2 scrollbar-hide">
                {grades.map((grade) => (
                    <button
                        key={grade}
                        onClick={() => setFilterGrade(grade)}
                        className={`px-5 py-2.5 rounded-xl text-sm font-semibold transition-all whitespace-nowrap ${
                            filterGrade === grade 
                            ? 'bg-primary text-white shadow-md' 
                            : 'bg-transparent text-gray-500 hover:bg-gray-100 hover:text-accent'
                        }`}
                    >
                        {grade === 'All' ? 'Tümü' : grade === 'Mezun' ? 'Mezun' : `${grade}. Sınıf`}
                    </button>
                ))}
            </div>

            <div className="relative w-full md:w-72 p-2 group">
                <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400 group-hover:text-accent transition-colors" size={18} />
                <input 
                    type="text" 
                    placeholder="Kurs ara..." 
                    className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-transparent rounded-xl focus:outline-none focus:bg-white focus:ring-2 focus:ring-primary/10 transition-all text-sm font-medium"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
            </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCourses.map((course) => (
                <div key={course.id} className="bg-white rounded-[24px] overflow-hidden border border-gray-100 hover:shadow-2xl hover:shadow-primary/5 transition-all duration-500 hover:-translate-y-2 group flex flex-col">
                    <div className="h-56 relative overflow-hidden">
                        <img src={course.image} alt={course.title} loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                        <div className="absolute top-4 left-4 flex gap-2">
                             <span className="bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-bold text-[#1d1d1f] shadow-sm">
                                {course.grade === 'Mezun' ? 'Mezun' : `${course.grade}. Sınıf`}
                             </span>
                             <span className="bg-[#1d1d1f] px-3 py-1 rounded-full text-xs font-bold text-white shadow-sm">
                                {course.stream}
                             </span>
                        </div>
                    </div>
                    
                    <div className="p-8 flex-grow flex flex-col">
                        <div className="flex items-center gap-2 mb-4 text-xs font-bold text-primary uppercase tracking-wider">
                           <span className="w-2 h-2 rounded-full bg-primary group-hover:bg-accent transition-colors"></span>
                           {course.type}
                        </div>
                        <h3 className="font-heading font-bold text-xl text-[#1d1d1f] mb-3 leading-snug">{course.title}</h3>
                        <p className="text-gray-500 text-sm mb-6 flex-grow leading-relaxed">{course.description}</p>
                        
                        <div className="flex items-center gap-6 mb-8 text-sm text-gray-500">
                            <div className="flex items-center gap-2 group/icon">
                                <BookOpen size={18} className="group-hover/icon:text-accent transition-colors" />
                                <span>{course.format}</span>
                            </div>
                            <div className="flex items-center gap-2 group/icon">
                                <Users size={18} className="group-hover/icon:text-accent transition-colors" />
                                <span>16 Kişilik</span>
                            </div>
                        </div>

                        <div className="flex items-center justify-between pt-6 border-t border-gray-100 mt-auto">
                            <div>
                                <span className="text-xs text-gray-400 block font-medium mb-1">Eğitim Ücreti</span>
                                <span className="font-bold text-[#1d1d1f] text-2xl tracking-tight">{course.price.toLocaleString('tr-TR')} ₺</span>
                            </div>
                            <button 
                                onClick={() => setSelectedCourse(course)}
                                className="w-12 h-12 rounded-full bg-[#1d1d1f] flex items-center justify-center text-white hover:bg-accent transition-colors shadow-lg shadow-black/20"
                            >
                                <ArrowRight size={20} />
                            </button>
                        </div>
                    </div>
                </div>
            ))}
        </div>

        {filteredCourses.length === 0 && (
            <div className="text-center py-20 bg-white rounded-3xl border border-gray-100">
                <div className="text-gray-300 mb-4">
                    <Search size={48} className="mx-auto" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Sonuç Bulunamadı</h3>
                <p className="text-gray-500">Aradığınız kriterlere uygun kurs bulunamadı. Filtreleri değiştirmeyi deneyin.</p>
            </div>
        )}
      </div>
    </div>
  );
};

export default Courses;
