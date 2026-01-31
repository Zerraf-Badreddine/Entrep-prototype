import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Shield, 
  Users, 
  ArrowRight, 
  Mail, 
  Lock, 
  Eye, 
  EyeOff
} from 'lucide-react';
import mascotLogo from './assets/houdhoud-logo.png';

function StarDecoration({ className }: { className?: string }) {
  return (
    <div className={`absolute ${className}`}>
      <svg className="w-6 h-6 opacity-20" fill="none" viewBox="0 0 13.148 13.148">
        <circle cx="6.574" cy="6.574" fill="#FFEDB2" r="5.61" />
      </svg>
    </div>
  );
}

export default function SignIn() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({ email: '', password: '' });

  const handleStandardLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      alert("Ceci est une démo. Utilisez les comptes ci-dessous.");
    }, 1000);
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-[#F5F7FA] text-[#313131] p-4 font-sans relative overflow-hidden">
      {/* Background Shapes */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="absolute -top-[10%] -left-[5%] w-[600px] h-[600px] rounded-full bg-[#6789CA] opacity-[0.07] blur-[100px]" />
        <div className="absolute bottom-[0%] right-[0%] w-[500px] h-[500px] rounded-full bg-[#6AC259] opacity-[0.05] blur-[120px]" />
      </div>
    
      {/* Main wrapper */}
      <div className="w-full max-w-[420px] z-10 relative">
        
        {/* Header Section */}
        <div className="text-center mb-8">
            <div className="mx-auto w-24 h-24 mb-4 flex items-center justify-center">
               <img src={mascotLogo} alt="Houd-Houd Logo" className="w-full h-full object-contain drop-shadow-lg" />
            </div>
            <h1 className="text-2xl font-bold text-[#313131]">Bienvenue sur Houd-Houd</h1>
            <p className="text-[#777] text-sm mt-2">Votre plateforme de gestion éducative</p>
        </div>

        {/* Login Card */}
        <div className="bg-white border border-[#E1E3E8] rounded-xl shadow-sm p-6 sm:p-8 relative overflow-hidden">
          <StarDecoration className="top-4 right-4 opacity-50" />
          
          <div className="mb-6">
            <h2 className="text-lg font-semibold text-[#313131]">Connexion</h2>
            <div className="h-1 w-10 mt-2 rounded-full" style={{ background: 'linear-gradient(90deg, #2855AE 0%, #7292CF 100%)' }}></div>
          </div>

          <form onSubmit={handleStandardLogin} className="space-y-5">
            {/* Email Input */}
            <div className="space-y-1.5">
              <label className="text-[13px] font-semibold text-[#313131] ml-1">Email professionnel</label>
              <div className="relative group">
                <Mail className="absolute left-3 top-3 h-5 w-5 text-[#A5A5A5] group-focus-within:text-[#2855AE] transition-colors" />
                <input 
                  type="email" 
                  className="w-full h-11 bg-white border border-[#E1E3E8] rounded-lg pl-10 pr-3 text-sm text-[#313131] placeholder:text-[#A5A5A5] focus:outline-none focus:border-[#2855AE] focus:ring-1 focus:ring-[#2855AE] transition-all"
                  placeholder="nom@ecole.com"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                />
              </div>
            </div>

            {/* Password Input */}
            <div className="space-y-1.5">
              <label className="text-[13px] font-semibold text-[#313131] ml-1">Mot de passe</label>
              <div className="relative group">
                <Lock className="absolute left-3 top-3 h-5 w-5 text-[#A5A5A5] group-focus-within:text-[#2855AE] transition-colors" />
                <input 
                  type={showPassword ? "text" : "password"} 
                  className="w-full h-11 bg-white border border-[#E1E3E8] rounded-lg pl-10 pr-10 text-sm text-[#313131] placeholder:text-[#A5A5A5] focus:outline-none focus:border-[#2855AE] focus:ring-1 focus:ring-[#2855AE] transition-all"
                  placeholder="********"
                  value={formData.password}
                  onChange={(e) => setFormData({...formData, password: e.target.value})}
                />
                <button 
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-3 text-[#A5A5A5] hover:text-[#313131] transition-colors"
                >
                  {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </button>
              </div>
            </div>

            {/* Login Button */}
            <button 
              type="submit" 
              disabled={isLoading}
              className="w-full h-11 mt-4 text-white font-semibold rounded-lg transition-all duration-200 shadow-md hover:shadow-lg active:scale-[0.98] flex items-center justify-center text-sm"
              style={{ background: 'linear-gradient(-66.1555deg, rgb(40, 85, 174) 3.1469%, rgb(114, 146, 207) 100%)' }}
            >
              {isLoading ? (
                <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              ) : (
                "Accéder à mon espace"
              )}
            </button>
          </form>

          {/* Divider */}
          <div className="relative my-8">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t border-[#E1E3E8]"></span>
            </div>
            <div className="relative flex justify-center text-[10px] uppercase tracking-widest">
              <span className="bg-white px-3 text-[#A5A5A5] font-semibold">Espaces de Démonstration</span>
            </div>
          </div>

          {/* Demo Buttons */}
          <div className="space-y-3">
             {/* Admin Button */}
             <button
               onClick={() => navigate('/admin')}
               className="w-full group relative flex items-center justify-between p-3 rounded-xl border border-[#E1E3E8] bg-white hover:border-[#6789CA] hover:bg-[#F5F7FA] transition-all duration-200"
             >
               <div className="flex items-center gap-3">
                 <div className="p-2 rounded-lg bg-[#E6EFFF] text-[#2855AE]">
                    <Shield className="w-5 h-5" />
                 </div>
                 <div className="text-left">
                   <p className="text-sm font-semibold text-[#313131]">Espace Direction</p>
                   <p className="text-[11px] text-[#777]">Administration et gestion</p>
                 </div>
               </div>
               <ArrowRight className="w-4 h-4 text-[#A5A5A5] group-hover:text-[#2855AE] group-hover:translate-x-1 transition-all" />
             </button>

             {/* Parent Button */}
             <button
               onClick={() => navigate('/parent')}
               className="w-full group relative flex items-center justify-between p-3 rounded-xl border border-[#E1E3E8] bg-white hover:border-[#6AC259] hover:bg-[#F5F7FA] transition-all duration-200"
             >
               <div className="flex items-center gap-3">
                 <div className="p-2 rounded-lg bg-[#E8F5E9] text-[#6AC259]">
                    <Users className="w-5 h-5" />
                 </div>
                 <div className="text-left">
                   <p className="text-sm font-semibold text-[#313131]">Espace Parents</p>
                   <p className="text-[11px] text-[#777]">Suivi scolaire et communication</p>
                 </div>
               </div>
               <ArrowRight className="w-4 h-4 text-[#A5A5A5] group-hover:text-[#6AC259] group-hover:translate-x-1 transition-all" />
             </button>
          </div>
        </div>

        <p className="text-center text-[11px] text-[#A5A5A5] mt-8">
          © 2026 Houd-Houd Education. Tous droits réservés.
        </p>

      </div>
    </div>
  );
}