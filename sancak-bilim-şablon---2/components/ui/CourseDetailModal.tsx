import React from 'react';
import { X, Calendar, Clock, Users, BookOpen, CheckCircle, ArrowRight, Star } from 'lucide-react';
import { Course } from '../../types';

interface CourseDetailModalProps {
  course: Course | null;
  isOpen: boolean;
  onClose: () => void;
}

const CourseDetailModal: React.FC<CourseDetailModalProps> = ({ course, isOpen, onClose }) => {
  if (!isOpen || !course) return null;

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      ></div>

      {/* Modal Content */}
      <div className="relative bg-white rounded-[2rem] w-full max-w-4xl max-h-[90vh] overflow-y-auto shadow-2xl animate-in fade-in zoom-in-95 duration-300 custom-scrollbar">
        
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 bg-white/20 backdrop-blur-md hover:bg-white text-white hover:text-accent rounded-full transition-all duration-300"
        >
          <X size={24} />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Left Side - Image & Key Info */}
          <div className="relative h-64 md:h-auto">
            <img 
              src={course.image} 
              alt={course.title} 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
            
            <div className="absolute bottom-6 left-6 right-6 text-white">
                <div className="flex gap-2 mb-3">
                    <span className="bg-accent px-3 py-1 rounded-full text-xs font-bold shadow-sm uppercase tracking-wide">
                        {course.stream}
                    </span>
                    <span className="bg-white/20 backdrop-blur px-3 py-1 rounded-full text-xs font-bold border border-white/30">
                        {course.grade === 'Mezun' ? 'Mezun' : `${course.grade}. Sınıf`}
                    </span>
                </div>
                <h2 className="font-heading font-bold text-2xl md:text-3xl leading-tight mb-2">{course.title}</h2>
                <div className="flex items-center gap-1 text-yellow-400 text-sm">
                    <Star fill="currentColor" size={16} />
                    <Star fill="currentColor" size={16} />
                    <Star fill="currentColor" size={16} />
                    <Star fill="currentColor" size={16} />
                    <Star fill="currentColor" size={16} />
                    <span className="text-white/80 ml-2 text-xs font-medium">(4.9/5 Memnuniyet)</span>
                </div>
            </div>
          </div>

          {/* Right Side - Details */}
          <div className="p-8 md:p-10 bg-white">
            <div className="mb-8">
                <h3 className="font-bold text-lg text-gray-900 mb-3 flex items-center gap-2">
                    <BookOpen className="text-accent" size={20} />
                    Program Hakkında
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                    {course.description} Bu program, öğrencilerin sınav başarılarını maksimize etmek için özel olarak tasarlanmıştır. 
                    Kişiye özel analizler, birebir etütler ve yeni nesil soru çözüm teknikleri ile hedefinize ulaşın.
                </p>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="p-4 bg-gray-50 rounded-2xl border border-gray-100 hover:border-accent/30 hover:shadow-sm transition-all group">
                    <Calendar className="text-gray-400 mb-2 group-hover:text-accent transition-colors" size={24} />
                    <div className="text-xs text-gray-500 font-bold uppercase">Başlangıç</div>
                    <div className="text-sm font-bold text-gray-900">{new Date(course.startDate).toLocaleDateString('tr-TR')}</div>
                </div>
                <div className="p-4 bg-gray-50 rounded-2xl border border-gray-100 hover:border-accent/30 hover:shadow-sm transition-all group">
                    <Clock className="text-gray-400 mb-2 group-hover:text-accent transition-colors" size={24} />
                    <div className="text-xs text-gray-500 font-bold uppercase">Süre</div>
                    <div className="text-sm font-bold text-gray-900">8 Ay / 32 Hafta</div>
                </div>
                <div className="p-4 bg-gray-50 rounded-2xl border border-gray-100 hover:border-accent/30 hover:shadow-sm transition-all group">
                    <Users className="text-gray-400 mb-2 group-hover:text-accent transition-colors" size={24} />
                    <div className="text-xs text-gray-500 font-bold uppercase">Kontenjan</div>
                    <div className="text-sm font-bold text-gray-900">Maks. 16 Kişi</div>
                </div>
                <div className="p-4 bg-gray-50 rounded-2xl border border-gray-100 hover:border-accent/30 hover:shadow-sm transition-all group">
                    <BookOpen className="text-gray-400 mb-2 group-hover:text-accent transition-colors" size={24} />
                    <div className="text-xs text-gray-500 font-bold uppercase">Format</div>
                    <div className="text-sm font-bold text-gray-900">{course.format}</div>
                </div>
            </div>

            <div className="space-y-3 mb-8">
                <h4 className="font-bold text-gray-900 text-sm">Program İçeriği:</h4>
                {[
                    'Haftalık 24 saat konu anlatımı',
                    'Sınırsız soru çözüm saati',
                    'Türkiye geneli deneme sınavları',
                    'Yapay zeka destekli gelişim raporu',
                    'Psikolojik danışmanlık ve rehberlik'
                ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3 text-sm text-gray-600 group">
                        <CheckCircle size={16} className="text-green-500 group-hover:text-accent transition-colors" />
                        <span>{item}</span>
                    </div>
                ))}
            </div>

            <div className="flex items-center justify-between pt-6 border-t border-gray-100">
                <div>
                    <div className="text-xs text-gray-400 font-bold uppercase tracking-wider mb-1">Eğitim Ücreti</div>
                    <div className="text-3xl font-heading font-bold text-primary">{course.price.toLocaleString('tr-TR')} ₺</div>
                </div>
                <button className="px-8 py-4 bg-primary text-white font-bold rounded-xl shadow-lg hover:bg-accent hover:shadow-accent/30 transition-all flex items-center gap-2 transform hover:scale-105 active:scale-95">
                    Hemen Başvur <ArrowRight size={20} />
                </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetailModal;