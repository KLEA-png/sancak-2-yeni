
import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { UserRole } from '../../types';
import { USER_ROLES_OPTIONS } from '../../constants';
import { 
  Lock, Mail, ArrowRight, User as UserIcon,
  Atom, FlaskConical, Variable, Shapes
} from 'lucide-react';

interface LoginProps {
  onLogin: (role: UserRole) => void;
}

const Login: React.FC<LoginProps> = ({ onLogin }) => {
  const [selectedRole, setSelectedRole] = useState<UserRole>(UserRole.STUDENT);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    onLogin(selectedRole);
    
    // Redirect to the CRM dashboard
    navigate('/crm/dashboard');
  };

  const getButtonStyles = () => {
    switch (selectedRole) {
        case UserRole.STUDENT:
            return "bg-white text-accent shadow-lg shadow-white/10 hover:bg-gray-50";
        case UserRole.TEACHER:
            return "bg-accent text-white shadow-lg shadow-accent/30 hover:bg-accent-light";
        case UserRole.ADMIN:
            return "bg-primary text-white shadow-lg shadow-primary/40 hover:bg-primary-light";
        default:
            return "bg-accent text-white";
    }
  };

  return (
    <div className="min-h-screen w-full relative flex items-center justify-center bg-[#0d1642] overflow-hidden">
      <div className="fixed inset-0 bg-gradient-to-br from-[#0d1642] via-[#1a237e] to-[#090e2e]"></div>
      <div className="fixed top-[-10%] left-[-10%] w-[500px] h-[500px] bg-primary-light/20 rounded-full blur-[100px] animate-blob pointer-events-none"></div>
      <div className="fixed bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-accent/15 rounded-full blur-[100px] animate-blob animation-delay-2000 pointer-events-none"></div>

      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none select-none opacity-20">
          <Variable className="absolute top-[5%] left-[3%] text-white/20 w-24 h-24 -rotate-12" />
          <Atom className="absolute top-[8%] right-[20%] text-white/20 w-32 h-32 rotate-12" />
          <Shapes className="absolute top-[45%] left-[2%] text-white/20 w-20 h-20 rotate-45" />
          <FlaskConical className="absolute top-[38%] right-[8%] text-white/20 w-24 h-24 -rotate-12" />
      </div>

      <div className={`relative z-10 w-full max-w-[440px] px-4 transition-opacity duration-300 ${isSubmitting ? 'opacity-0' : 'opacity-100'}`}>
        <div className="relative group">
            <div className="absolute inset-0 bg-white/10 backdrop-blur-2xl rounded-3xl border border-white/20 shadow-2xl shadow-black/50"></div>
            
            <div className="relative z-20 p-8 md:p-10">
                <div className="text-center mb-8">
                    <Link to="/" className="inline-block mb-6 hover:scale-110 transition-transform duration-500">
                        <img 
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1zBZ5_L5a8zISY0-QhcP6Pf47VO4LZ-pwgA&s" 
                            alt="Sancak Bilim Logo" 
                            className="w-24 h-24 rounded-full border-4 border-white/20 shadow-2xl object-cover"
                        />
                    </Link>
                    <h1 className="font-heading font-bold text-3xl text-white mb-2 tracking-tight">Giriş Yapın</h1>
                    <p className="text-blue-200 text-sm font-light">Sancak Bilim Eğitim Portalı</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="bg-black/20 p-1.5 rounded-xl flex gap-1 backdrop-blur-sm border border-white/10">
                        {USER_ROLES_OPTIONS.map((option) => {
                            const isSelected = selectedRole === option.role;
                            let activeStyle = "";
                            if (option.role === UserRole.STUDENT) activeStyle = "bg-white text-accent";
                            else if (option.role === UserRole.TEACHER) activeStyle = "bg-accent text-white";
                            else if (option.role === UserRole.ADMIN) activeStyle = "bg-primary text-white";

                            return (
                                <button
                                    key={option.role}
                                    type="button"
                                    onClick={() => setSelectedRole(option.role)}
                                    className={`flex-1 py-2.5 text-[11px] md:text-xs font-bold rounded-lg transition-all duration-300 flex items-center justify-center gap-1.5 ${
                                        isSelected ? `${activeStyle} shadow-lg scale-[1.02]` : 'text-gray-400 hover:text-white hover:bg-white/5'
                                    }`}
                                >
                                    {isSelected && <UserIcon size={12} className="opacity-70" />}
                                    {option.label.split(' ')[0]}
                                </button>
                            );
                        })}
                    </div>

                    <div className="space-y-4">
                        <div className="group/input">
                            <label className="block text-xs font-bold text-blue-200 mb-1.5 ml-1 uppercase tracking-wider">E-posta Adresi</label>
                            <div className="relative">
                                <div className="absolute left-4 top-1/2 -translate-y-1/2 text-blue-300"><Mail size={20} /></div>
                                <input type="email" defaultValue="demo@sancak.com" className="w-full pl-12 pr-4 py-3.5 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:bg-white/10 text-white placeholder-white/30 text-sm" />
                            </div>
                        </div>
                        <div className="group/input">
                            <label className="block text-xs font-bold text-blue-200 mb-1.5 ml-1 uppercase tracking-wider">Şifre</label>
                            <div className="relative">
                                <div className="absolute left-4 top-1/2 -translate-y-1/2 text-blue-300"><Lock size={20} /></div>
                                <input type="password" defaultValue="123456" className="w-full pl-12 pr-4 py-3.5 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:bg-white/10 text-white placeholder-white/30 text-sm" />
                            </div>
                        </div>
                    </div>

                    <button type="submit" className={`w-full py-4 rounded-xl font-bold text-sm tracking-wide transition-all duration-300 flex items-center justify-center gap-2 hover:scale-[1.02] ${getButtonStyles()}`}>
                        GİRİŞ YAP <ArrowRight size={18} />
                    </button>
                </form>

                <div className="mt-8 pt-6 border-t border-white/10 text-center">
                    <Link to="/" className="inline-flex items-center justify-center gap-2 text-blue-200 hover:text-white text-sm font-medium">
                        <ArrowRight className="rotate-180" size={16} /> Ana Sayfaya Dön
                    </Link>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
