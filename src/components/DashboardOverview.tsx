import React from 'react';
import { Users, UserCheck, UserX, TrendingUp, MessageSquare, Calendar, Award, AlertCircle, ArrowRight } from 'lucide-react';
import mascotTeacher from 'figma:asset/58bf93076cb8601ef6bd1cdc8eebf9fcd2464d5f.png';
import mascotStudent from 'figma:asset/990137ff99c38c9616d11f2f0a9c8cdcd552e090.png';
import mascotWinner from 'figma:asset/b6dc26dd3990455b3fb530e78eb66036c2715caf.png';
import svgPaths from "../imports/svg-n9ua2hc6ud";

interface DashboardOverviewProps {
  language: string;
  setActiveView?: (view: string) => void;
}

function StarDecoration({ className }: { className?: string }) {
  return (
    <div className={`absolute ${className}`}>
      <svg className="w-6 h-6 opacity-20" fill="none" viewBox="0 0 13.148 13.148">
        <circle cx="6.574" cy="6.574" fill="#FFEDB2" r="5.61" />
      </svg>
    </div>
  );
}

export function DashboardOverview({ language, setActiveView }: DashboardOverviewProps) {
  const stats = [
    { label: 'Total Élèves', value: '847', change: '+12', icon: Users, color: '#6789CA' },
    { label: 'Présents Aujourd\'hui', value: '812', change: '95.9%', icon: UserCheck, color: '#6AC259' },
    { label: 'Absences', value: '35', change: '-5', icon: UserX, color: '#FFC143' },
    { label: 'Moyenne Générale', value: '14.2', change: '+0.3', icon: TrendingUp, color: '#7292CF' },
  ];

  const recentActivities = [
    { type: 'grade', teacher: 'M. Karim Bouazza', action: 'a publié les notes de Mathématiques', time: 'Il y a 5 min', class: '3ème A' },
    { type: 'absence', teacher: 'Mme. Salima Rahmani', action: 'a signalé 3 absences', time: 'Il y a 12 min', class: '5ème B' },
    { type: 'message', teacher: 'Mme. Fadila Chergui', action: 'a envoyé une annonce aux parents', time: 'Il y a 25 min', class: 'Toutes les classes' },
    { type: 'event', teacher: 'Direction', action: 'a créé l\'événement "Journée Portes Ouvertes"', time: 'Il y a 1h', class: 'École' },
  ];

  const topPerformers = [
    { name: 'Sarah Mansouri', class: '6ème A', avg: '18.5', rank: 1 },
    { name: 'Yacine Belkacem', class: '5ème B', avg: '17.8', rank: 2 },
    { name: 'Lina Cherif', class: '4ème C', avg: '17.2', rank: 3 },
  ];

  return (
    <div className="p-3 sm:p-4 md:p-6 lg:p-8 space-y-3 sm:space-y-4 md:space-y-6">
      {/* Welcome Banner */}
      <div className="relative rounded-xl p-4 sm:p-6 md:p-8 text-white overflow-hidden" style={{ background: 'linear-gradient(-66.1555deg, rgb(40, 85, 174) 3.1469%, rgb(114, 146, 207) 100%)' }}>
        <StarDecoration className="top-4 right-20 hidden lg:block" />
        <StarDecoration className="top-12 right-40 hidden lg:block" />
        <div className="relative z-10">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-1 sm:mb-2">Bienvenue sur Houd-Houd! 👋</h2>
          <p className="text-white opacity-90 mb-3 sm:mb-4 md:mb-6 text-xs sm:text-sm md:text-base">Tableau de bord de l'école - Jeudi 29 Janvier 2026</p>
          <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
            <button className="bg-white text-[#2855AE] px-4 sm:px-5 py-2 sm:py-2.5 rounded-lg text-sm sm:text-base font-semibold hover:shadow-lg transition-all flex items-center justify-center gap-2">
              Nouvelle Annonce
              <ArrowRight className="w-4 h-4" />
            </button>
            <button className="bg-white bg-opacity-20 backdrop-blur-sm text-[#2855AE] px-4 sm:px-5 py-2 sm:py-2.5 rounded-lg text-sm sm:text-base font-semibold hover:bg-opacity-30 transition-all border border-white border-opacity-30">
              Voir les Rapports
            </button>
          </div>
        </div>
        <img src={mascotTeacher} alt="" className="absolute right-4 sm:right-8 bottom-0 w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 opacity-30" />
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-3 md:gap-4 lg:gap-6">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <div key={index} className="bg-white rounded-lg sm:rounded-xl p-3 sm:p-4 md:p-6 border border-[#E1E3E8] hover:shadow-lg transition-shadow">
              <div className="flex items-start justify-between mb-2 sm:mb-4">
                <div className="p-1.5 sm:p-3 rounded-lg" style={{ backgroundColor: `${stat.color}15` }}>
                  <Icon className="w-4 h-4 sm:w-6 sm:h-6" style={{ color: stat.color }} />
                </div>
                <span className="text-xs sm:text-sm text-[#6AC259] font-semibold">{stat.change}</span>
              </div>
              <p className="text-xl sm:text-3xl font-bold text-[#313131] mb-1">{stat.value}</p>
              <p className="text-xs sm:text-sm text-[#777]">{stat.label}</p>
            </div>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-6">
        {/* Recent Activities */}
        <div className="lg:col-span-2 bg-white rounded-xl p-4 md:p-6 border border-[#E1E3E8]">
          <div className="flex items-center justify-between mb-4 md:mb-6">
            <h3 className="text-lg font-semibold text-[#313131]">Activités Récentes</h3>
            <button onClick={() => setActiveView?.('students')} className="text-sm text-[#6789CA] hover:text-[#2855AE] font-semibold">Tout voir</button>
          </div>
          <div className="space-y-3">
            {recentActivities.map((activity, index) => (
              <div key={index} className="flex items-start gap-3 md:gap-4 p-3 md:p-4 hover:bg-[#F5F7FA] rounded-lg transition-colors">
                <div className={`w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center flex-shrink-0 ${
                  activity.type === 'grade' ? 'bg-[#E6EFFF]' :
                  activity.type === 'absence' ? 'bg-[#FFF4E6]' :
                  activity.type === 'message' ? 'bg-[#E6EFFF]' : 'bg-[#E8F5E9]'
                }`}>
                  {activity.type === 'grade' ? <Award className="w-4 h-4 md:w-5 md:h-5 text-[#6789CA]" /> :
                   activity.type === 'absence' ? <AlertCircle className="w-4 h-4 md:w-5 md:h-5 text-[#FFC143]" /> :
                   activity.type === 'message' ? <MessageSquare className="w-4 h-4 md:w-5 md:h-5 text-[#6789CA]" /> :
                   <Calendar className="w-4 h-4 md:w-5 md:h-5 text-[#6AC259]" />}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm text-[#313131] truncate sm:whitespace-normal">
                    <span className="font-semibold">{activity.teacher}</span> {activity.action}
                  </p>
                  <div className="flex items-center gap-2 sm:gap-3 mt-1">
                    <span className="text-xs text-[#A5A5A5]">{activity.time}</span>
                    <span className="text-xs text-[#DBDBDB]">•</span>
                    <span className="text-xs text-[#777]">{activity.class}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Student Mascot Card */}
        <div className="bg-white rounded-xl p-4 md:p-6 border border-[#E1E3E8] flex flex-col items-center justify-center text-center">
          <img src={mascotStudent} alt="" className="w-24 h-24 md:w-32 md:h-32 mb-4" />
          <h3 className="text-lg font-semibold text-[#313131] mb-2">847 Élèves Actifs</h3>
          <p className="text-sm text-[#777] mb-4">Année scolaire 2025-2026</p>
          <button onClick={() => setActiveView?.('students')} className="px-4 py-2 rounded-lg text-sm font-semibold text-white" style={{ background: 'linear-gradient(-66.1555deg, rgb(40, 85, 174) 3.1469%, rgb(114, 146, 207) 100%)' }}>
            Voir tous les élèves
          </button>
        </div>
      </div>

      {/* Top Performers */}
      <div className="bg-white rounded-xl p-4 md:p-6 border border-[#E1E3E8]">
        <div className="flex items-center justify-between mb-4 md:mb-6">
          <div className="flex items-center gap-3">
            <img src={mascotWinner} alt="" className="w-10 h-10 md:w-12 md:h-12" />
            <h3 className="text-base md:text-lg font-semibold text-[#313131]">Meilleurs Élèves du Mois</h3>
          </div>
          <button className="text-xs md:text-sm text-[#6789CA] hover:text-[#2855AE] font-semibold text-right">Voir classement</button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {topPerformers.map((student, index) => (
            <div key={index} className="relative p-4 md:p-6 bg-gradient-to-br from-[#FFF4E6] to-[#FFEDB2] rounded-xl border-2 border-[#FFC143]">
              <div className="absolute -top-3 -right-3 w-8 h-8 bg-gradient-to-br from-[#FFC143] to-[#EEB900] rounded-full flex items-center justify-center text-white font-bold shadow-lg">
                {student.rank}
              </div>
              <div className="text-center">
                <div className="w-14 h-14 md:w-16 md:h-16 rounded-full mx-auto mb-3 flex items-center justify-center text-white text-lg md:text-xl font-bold" style={{ background: 'linear-gradient(-66.1555deg, rgb(40, 85, 174) 3.1469%, rgb(114, 146, 207) 100%)' }}>
                  {student.name.split(' ').map(n => n[0]).join('')}
                </div>
                <p className="font-semibold text-[#313131]">{student.name}</p>
                <p className="text-sm text-[#777] mb-3">{student.class}</p>
                <div className="inline-block bg-white px-4 py-2 rounded-full shadow-sm">
                  <span className="text-lg md:text-xl font-bold text-[#FFC143]">{student.avg}</span>
                  <span className="text-xs text-[#777]">/20</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}