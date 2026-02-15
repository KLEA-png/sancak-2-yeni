
import React, { useState, useEffect, useCallback } from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import { User } from '../../types';
import { 
  Menu, X, ChevronRight,
  Atom, Dna, FlaskConical, Calculator, Globe,
  Pencil, Variable, Binary, Music, Shapes
} from 'lucide-react';

interface PublicLayoutProps {
  user: User | null;
}

const PublicLayout: React.FC<PublicLayoutProps> = ({ user }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const hasTransparentHeader = ['/', '/about', '/courses', '/teachers', '/iletisim', '/blog'].includes(location.pathname) || location.pathname.startsWith('/blog/');

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 50;
      if (scrolled !== isScrolled) setIsScrolled(scrolled);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isScrolled]);

  useEffect(() => {
    setMobileMenuOpen(false);
    window.scrollTo(0, 0);
  }, [location]);

  const isTransparentMode = hasTransparentHeader && !isScrolled;
  const navStyleClass = isTransparentMode || mobileMenuOpen
    ? "bg-transparent border-transparent py-4 md:py-6"
    : "bg-white/85 backdrop-blur-xl border-white/40 shadow-sm py-3 md:py-3"; 

  const textClass = isTransparentMode || mobileMenuOpen ? "text-white" : "text-primary";

  return (
    <div className="min-h-screen flex flex-col font-sans text-[#1d1d1f] overflow-x-hidden">
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out border-b ${navStyleClass}`}>
        <div className="container mx-auto px-4 md:px-6 h-full flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 group z-50">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1zBZ5_L5a8zISY0-QhcP6Pf47VO4LZ-pwgA&s" alt="Logo" className={`rounded-full object-cover border-2 shadow-md transition-all duration-500 ${isTransparentMode ? 'h-10 w-10 md:h-12' : 'h-9 w-9 md:h-10'}`} />
            <div className="flex flex-col">
                <span className={`font-heading font-bold leading-none ${isTransparentMode ? 'text-lg md:text-xl' : 'text-base md:text-lg'} ${textClass}`}>Sancak Bilim</span>
                <span className={`font-bold tracking-[0.2em] uppercase hidden sm:block text-[8px] ${isTransparentMode ? 'text-blue-100 mt-0.5' : 'text-secondary'}`}>Eğitim Kurumları</span>
            </div>
          </Link>

          <nav className={`hidden md:flex items-center gap-2 lg:gap-6 font-medium text-xs lg:text-[15px] ${textClass}`}>
            {['Ana Sayfa', 'Hakkımızda', 'Kurslar', 'Öğretmenler', 'Blog', 'İletişim'].map((label, idx) => {
              const path = ['/', '/about', '/courses', '/teachers', '/blog', '/iletisim'][idx];
              return (
                <Link key={path} to={path} className="relative px-3 py-2 hover:opacity-70 transition-all">
                  {label}
                  <span className={`absolute bottom-0 left-0 h-0.5 transition-all duration-300 ${location.pathname === path ? 'w-full bg-accent' : 'w-0'}`}></span>
                </Link>
              );
            })}
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <Link to={user ? "/crm/dashboard" : "/crm/login"} className="px-5 py-2.5 rounded-full font-bold text-xs lg:text-sm transition-all shadow-lg hover:scale-105 bg-accent text-white hover:bg-accent-light">
              {user ? 'Panele Git' : 'Giriş Yap'}
            </Link>
          </div>

          <button className={`md:hidden z-50 p-2 ${textClass}`} onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </header>

      <div className={`fixed inset-0 z-40 bg-gradient-to-b from-[#0d1642] to-[#1a237e] transition-transform duration-300 md:hidden flex flex-col pt-28 px-6 ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
         <nav className="flex flex-col gap-5 text-xl font-bold tracking-tight text-white">
          {['Ana Sayfa', 'Hakkımızda', 'Kurslar', 'Öğretmenler', 'Blog', 'İletişim'].map((label, idx) => (
            <Link key={idx} to={['/', '/about', '/courses', '/teachers', '/blog', '/iletisim'][idx]} onClick={() => setMobileMenuOpen(false)} className="border-b border-white/10 pb-4">{label}</Link>
          ))}
          <Link to="/crm/login" onClick={() => setMobileMenuOpen(false)} className="mt-4 px-5 py-4 rounded-xl bg-accent text-white text-center">
            {user ? 'Panele Git' : 'Giriş Yap'}
          </Link>
         </nav>
      </div>
      
      <main className="flex-grow w-full"><Outlet /></main>

      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/905495287273"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-[60] bg-[#25D366] text-white p-3.5 rounded-full shadow-2xl hover:scale-110 transition-transform duration-300 flex items-center justify-center group border-2 border-white"
        aria-label="WhatsApp ile iletişime geç"
      >
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
        </svg>
        <span className="absolute right-full mr-3 bg-white text-gray-800 text-xs font-bold px-2 py-1 rounded shadow-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
          WhatsApp Hattı
        </span>
      </a>

      <footer className="relative bg-gradient-to-br from-[#0d1642] via-[#1a237e] to-[#3949ab] text-white pt-20 pb-10 border-t border-white/10 overflow-hidden">
        {/* Animated Background Elements - Vector Symbols */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none select-none opacity-40">
            <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-blue-500/20 rounded-full blur-[100px] animate-blob"></div>
            <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-purple-500/20 rounded-full blur-[120px] animate-blob animation-delay-2000"></div>
            
            <Variable className="absolute top-[10%] left-[5%] text-white/10 w-24 h-24 -rotate-12" strokeWidth={1} />
            <Shapes className="absolute bottom-[20%] left-[10%] text-white/10 w-16 h-16 rotate-45" strokeWidth={1.5} />
            <Calculator className="absolute top-[40%] right-[10%] text-white/10 w-20 h-20 -rotate-6" strokeWidth={1} />
            <Atom className="absolute bottom-[10%] right-[5%] text-white/10 w-32 h-32 rotate-12" strokeWidth={1} />
            <Globe className="absolute top-[20%] left-[40%] text-white/5 w-24 h-24 -rotate-12" strokeWidth={1} />
            <FlaskConical className="absolute top-[50%] right-[30%] text-white/5 w-20 h-20 -rotate-12" strokeWidth={1.5} />
            <Dna className="absolute top-[60%] right-[15%] text-white/5 w-28 h-28 rotate-45" strokeWidth={1} />
            <Binary className="absolute bottom-[40%] left-[50%] text-white/5 w-16 h-16 rotate-6 opacity-30" strokeWidth={1} />
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            <div className="col-span-1 md:col-span-1">
              <div className="flex items-center gap-3 mb-6">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1zBZ5_L5a8zISY0-QhcP6Pf47VO4LZ-pwgA&s" alt="Logo" className="h-10 w-10 rounded-full border border-white/20" />
                <span className="font-heading font-bold text-xl">Sancak Bilim</span>
              </div>
              <p className="text-blue-100/70 text-sm leading-relaxed">Başarı odaklı, Atatürk ilke ve inkılaplarına bağlı modern eğitim.</p>
            </div>
            
            <div>
              <h4 className="font-bold mb-6">Hızlı Erişim</h4>
              <ul className="space-y-3 text-sm text-blue-100/60">
                <li><Link to="/courses" className="hover:text-accent transition-colors">YKS Kursları</Link></li>
                <li><Link to="/teachers" className="hover:text-accent transition-colors">Öğretmen Kadrosu</Link></li>
                <li><Link to="/blog" className="hover:text-accent transition-colors">Blog & Duyurular</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-6">Programlar</h4>
              <ul className="space-y-3 text-sm text-blue-100/60">
                <li>12. Sınıf YKS</li>
                <li>Mezun YKS Grubu</li>
                <li>11. Sınıf Hazırlık</li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-6">İletişim</h4>
              <ul className="space-y-3 text-sm text-blue-100/60">
                <li className="leading-relaxed">
                    Gazi Osman Paşa, Cevatbey Sk. no:3/A,<br />
                    59500 Çerkezköy/Tekirdağ
                </li>
                <li className="pt-2">
                   <a href="tel:05495287273" className="font-bold text-accent hover:text-white transition-colors block">0549 528 72 73</a>
                   <a href="mailto:info@sancakbilim.com" className="font-bold text-accent hover:text-white transition-colors block mt-1 underline decoration-accent/30 underline-offset-4">info@sancakbilim.com</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/10 pt-8 text-center flex flex-col gap-2">
            <span className="text-xs text-blue-100/40 font-medium">&copy; 2024 Sancak Bilim. Tüm hakları saklıdır.</span>
            <span className="text-[10px] text-blue-100/30">
              Bu web sitesi <a href="https://solvena.net" target="_blank" rel="noopener noreferrer" className="hover:text-accent font-bold transition-all duration-300">Solvena Yazılım A.Ş</a> tarafından üretilmiştir.
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default PublicLayout;
