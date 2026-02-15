
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Search, ArrowRight, Calendar, Tag,
  Atom, Dna, FlaskConical, Calculator, Globe, Pencil, Variable, Binary, Music, Shapes
} from 'lucide-react';
import { MOCK_BLOG_POSTS } from '../../constants';

const Blog: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('Tümü');
  const [searchTerm, setSearchTerm] = useState('');

  const categories = ['Tümü', 'Duyuru', 'Haber', 'YKS', 'Rehberlik'];

  const filteredPosts = MOCK_BLOG_POSTS.filter(post => {
    const matchesCategory = activeCategory === 'Tümü' || post.category === activeCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          post.summary.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

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
                Blog & Haberler
            </div>
            <h1 className="font-heading font-bold text-4xl md:text-6xl mb-6 text-white drop-shadow-sm">Sancak'tan Haberler</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed font-light">
                Kurumumuzdan duyurular, YKS rehberlik yazıları ve eğitim dünyasından güncel gelişmeler.
            </p>
        </div>
      </section>

      <div className="container mx-auto px-4 md:px-6 -mt-10 relative z-20 pb-20">
        <div className="bg-white p-2 rounded-2xl shadow-xl shadow-black/5 border border-gray-100 mb-12 flex flex-col md:flex-row gap-4 items-center justify-between max-w-5xl mx-auto">
            <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto p-2 scrollbar-hide">
                {categories.map((category) => (
                    <button
                        key={category}
                        onClick={() => setActiveCategory(category)}
                        className={`px-5 py-2.5 rounded-xl text-sm font-semibold transition-all whitespace-nowrap ${
                            activeCategory === category 
                            ? 'bg-primary text-white shadow-md' 
                            : 'bg-transparent text-gray-500 hover:bg-gray-100 hover:text-accent'
                        }`}
                    >
                        {category}
                    </button>
                ))}
            </div>

            <div className="relative w-full md:w-72 p-2 group">
                <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400 group-hover:text-accent transition-colors" size={18} />
                <input 
                    type="text" 
                    placeholder="Haber ara..." 
                    className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-transparent rounded-xl focus:outline-none focus:bg-white focus:ring-2 focus:ring-primary/10 transition-all text-sm font-medium"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
            </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
                <Link to={`/blog/${post.slug}`} key={post.id} className="bg-white rounded-[24px] overflow-hidden border border-gray-100 hover:shadow-2xl hover:shadow-primary/5 transition-all duration-500 group flex flex-col hover:-translate-y-2 relative hover:z-30">
                    <div className="h-60 relative overflow-hidden">
                        <img src={post.image} alt={post.title} loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                        <div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-bold text-primary shadow-sm uppercase tracking-wide">
                            {post.category}
                        </div>
                    </div>
                    
                    <div className="p-8 flex-grow flex flex-col">
                        <div className="flex items-center gap-2 mb-4 text-xs font-medium text-gray-400">
                           <Calendar size={14} />
                           <span>{post.date}</span>
                        </div>
                        <h3 className="font-heading font-bold text-xl text-[#1d1d1f] mb-3 leading-snug group-hover:text-primary transition-colors">{post.title}</h3>
                        <p className="text-gray-500 text-sm mb-6 flex-grow leading-relaxed line-clamp-3">{post.summary}</p>
                        
                        <div className="flex items-center justify-between pt-6 border-t border-gray-100 mt-auto">
                            <span className="text-sm font-bold text-accent flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                                Devamını Oku <ArrowRight size={16} />
                            </span>
                        </div>
                    </div>
                </Link>
            ))}
        </div>

        {filteredPosts.length === 0 && (
            <div className="text-center py-20 bg-white rounded-3xl border border-gray-100">
                <div className="text-gray-300 mb-4">
                    <Search size={48} className="mx-auto" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Sonuç Bulunamadı</h3>
                <p className="text-gray-500">Aradığınız kriterlere uygun haber bulunamadı.</p>
            </div>
        )}
      </div>
    </div>
  );
};

export default Blog;
