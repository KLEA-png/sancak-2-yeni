
import React, { useState, useMemo } from 'react';
import { MOCK_TEACHERS } from '../../constants';
import { 
  Search, GraduationCap,
  Atom, Dna, FlaskConical, Calculator, Globe, Pencil, Variable, Binary, Music, Shapes
} from 'lucide-react';

const Teachers: React.FC = () => {
  const [activeBranch, setActiveBranch] = useState<string>('Tümü');
  
  const branches = useMemo(() => ['Tümü', ...Array.from(new Set(MOCK_TEACHERS.map(t => t.branch)))], []);
  
  const filteredTeachers = useMemo(() => activeBranch === 'Tümü' 
    ? MOCK_TEACHERS 
    : MOCK_TEACHERS.filter(t => t.branch === activeBranch), [activeBranch]);

  return (
    <div className="bg-background min-h-screen">
      <section className="relative bg-gradient-to-br from-[#0d1642] via-[#1a237e] to-[#3949ab] text-white pt-40 pb-32 overflow-hidden">
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
                Eğitim Kadromuz
            </div>
            <h1 className="font-heading font-bold text-4xl md:text-6xl mb-6 text-white drop-shadow-sm">Alanında Uzman Eğitmenler</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed font-light">
                Sınav sistemine hakim, tecrübeli ve dinamik kadromuzla başarıya giden yolda yanınızdayız.
            </p>
        </div>
      </section>

      <div className="container mx-auto px-4 md:px-6 -mt-24 relative z-20 pb-20">
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl shadow-black/10 border border-gray-100 text-center mb-16 relative">
             <h2 className="font-serif text-xl md:text-2xl text-gray-700 italic leading-relaxed mb-4">
                "Öğretmenler! Yeni Nesil Sizin Eseriniz Olacaktır."
            </h2>
            <div className="flex justify-center items-center gap-3">
                <span className="w-8 h-px bg-gray-300"></span>
                <span className="text-xs md:text-sm font-medium text-gray-500 uppercase tracking-widest">Mustafa Kemal Atatürk</span>
                <span className="w-8 h-px bg-gray-300"></span>
            </div>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-16">
            {branches.map((branch) => (
                <button
                    key={branch}
                    onClick={() => setActiveBranch(branch)}
                    className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all ${
                        activeBranch === branch 
                        ? 'bg-primary text-white shadow-lg' 
                        : 'bg-white text-gray-600 hover:bg-gray-100 hover:text-accent border border-gray-200'
                    }`}
                >
                    {branch}
                </button>
            ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {filteredTeachers.map((teacher) => (
                <div key={teacher.id} className="bg-white rounded-[24px] p-6 border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 group text-center hover:-translate-y-1 relative hover:z-30">
                    <div className="w-32 h-32 mx-auto mb-6 relative">
                        <img 
                          src={teacher.image} 
                          alt={teacher.name} 
                          loading="lazy"
                          className="w-full h-full rounded-full object-cover border-4 border-gray-50 group-hover:border-primary/20 transition-all" 
                        />
                        <div className="absolute bottom-0 right-0 bg-primary text-white p-2 rounded-full shadow-md group-hover:bg-accent transition-colors">
                            <GraduationCap size={16} />
                        </div>
                    </div>
                    
                    <h3 className="font-heading font-bold text-xl text-[#1d1d1f] mb-1 group-hover:text-accent transition-colors">{teacher.name}</h3>
                    <div className="text-primary font-medium text-sm mb-4">{teacher.branch}</div>
                    
                    <div className="inline-block px-3 py-1 bg-gray-50 rounded-lg text-xs font-semibold text-gray-600">
                        {teacher.subject}
                    </div>
                </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Teachers;
