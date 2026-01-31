import React from 'react';
import { Users, MessageSquare, Calendar, TrendingUp, ArrowRight, Award, Bell as BellIcon, BookOpen } from 'lucide-react';
import mascotTeacher from 'figma:asset/58bf93076cb8601ef6bd1cdc8eebf9fcd2464d5f.png';
import mascotStudent from 'figma:asset/990137ff99c38c9616d11f2f0a9c8cdcd552e090.png';

interface ParentDashboardProps {
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

export function ParentDashboard({ language, setActiveView }: ParentDashboardProps) {
  const stats = [
    { label: 'Enfants Inscrits', value: '2', icon: Users, color: '#6789CA' },
    { label: 'Messages Non Lus', value: '3', icon: MessageSquare, color: '#FFC143' },
    { label: 'Événements à Venir', value: '5', icon: Calendar, color: '#7292CF' },
    { label: 'Moyenne Générale', value: '15.8', icon: TrendingUp, color: '#6AC259' },
  ];

  const children = [
    { name: 'Ahmed Mansouri', class: '6ème A', avg: '15.2', attendance: '96%', status: 'good' },
    { name: 'Yasmine Mansouri', class: '4ème C', avg: '16.4', attendance: '98%', status: 'excellent' },
  ];

  const recentNotifications = [
    { type: 'grade', title: 'Nouvelles notes publiées', message: 'Ahmed - Mathématiques', time: 'Il y a 2h', class: '6ème A' },
    { type: 'message', title: 'Message de l\'enseignant', message: 'Mme. Chergui - Réunion parent-prof', time: 'Il y a 5h', class: '4ème C' },
    { type: 'event', title: 'Événement à venir', message: 'Journée Portes Ouvertes - 15 Février', time: 'Dans 2 jours', class: 'École' },
    { type: 'absence', title: 'Rappel de présence', message: 'Yasmine - Excellente assiduité ce mois', time: 'Hier', class: '4ème C' },
  ];

  const upcomingEvents = [
    { date: '15', month: 'FÉV', title: 'Journée Portes Ouvertes', time: '09:00 - 16:00' },
    { date: '20', month: 'FÉV', title: 'Réunion Parent-Professeur', time: '14:00 - 17:00' },
    { date: '28', month: 'FÉV', title: 'Vacances d\'Hiver', time: 'Toute la journée' },
  ];

  return (
    <div className="p-3 sm:p-4 md:p-6 lg:p-8 space-y-3 sm:space-y-4 md:space-y-6">
      <div className="relative rounded-xl p-4 sm:p-6 md:p-8 text-white overflow-hidden shadow-xl" style={{ background: 'linear-gradient(-66.1555deg, rgb(40, 85, 174) 3.1469%, rgb(114, 146, 207) 100%)' }}>
        <StarDecoration className="top-4 right-20 hidden lg:block" />
        <StarDecoration className="top-12 right-40 hidden lg:block" />
        <div className="relative z-10">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-1 sm:mb-2">Bienvenue M. Mansouri! 👋</h2>
          <p className="text-white opacity-90 mb-3 sm:mb-4 md:mb-6 text-xs sm:text-sm md:text-base">Espace Parent - Jeudi 30 Janvier 2026</p>
          <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
            <button onClick={() => setActiveView?.('messages')} className="bg-white text-[#2855AE] px-4 sm:px-5 py-2 sm:py-2.5 rounded-lg text-sm sm:text-base font-semibold hover:shadow-lg transition-all flex items-center justify-center gap-2">
              Voir les Messages
              <ArrowRight className="w-4 h-4" />
            </button>
            <button onClick={() => setActiveView?.('calendar')} className="bg-white bg-opacity-20 backdrop-blur-sm text-white px-4 sm:px-5 py-2 sm:py-2.5 rounded-lg text-sm sm:text-base font-semibold hover:bg-opacity-30 transition-all border border-white border-opacity-30">
              Calendrier Scolaire
            </button>
          </div>
        </div>
        <img src={mascotTeacher} alt="" className="absolute right-4 sm:right-8 bottom-0 w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 opacity-30" />
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-3 md:gap-4 lg:gap-6">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <div key={index} className="bg-white rounded-lg sm:rounded-xl p-3 sm:p-4 md:p-6 border border-[#E1E3E8] hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="flex items-start justify-between mb-2 sm:mb-3 md:mb-4">
                <div className="p-1.5 sm:p-2 md:p-3 rounded-lg shadow-sm" style={{ backgroundColor: `${stat.color}15` }}>
                  <Icon className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" style={{ color: stat.color }} />
                </div>
              </div>
              <p className="text-xl sm:text-2xl md:text-3xl font-bold text-[#313131] mb-0.5 sm:mb-1">{stat.value}</p>
              <p className="text-[10px] sm:text-xs md:text-sm text-[#777] leading-tight">{stat.label}</p>
            </div>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-6">
        <div className="lg:col-span-2 bg-white rounded-xl p-4 md:p-6 border border-[#E1E3E8]">
          <div className="flex items-center justify-between mb-4 md:mb-6">
            <h3 className="text-lg font-semibold text-[#313131]">Mes Enfants</h3>
            <button onClick={() => setActiveView?.('children')} className="text-sm text-[#6789CA] hover:text-[#2855AE] font-semibold">Voir détails</button>
          </div>
          <div className="space-y-3 md:space-y-4">
            {children.map((child, index) => (
              <div key={index} className="flex flex-col sm:flex-row sm:items-center gap-3 md:gap-4 p-4 hover:bg-[#F5F7FA] rounded-lg transition-colors">
                <div className="w-12 h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center text-white text-lg md:text-xl font-bold" style={{ background: 'linear-gradient(-66.1555deg, rgb(40, 85, 174) 3.1469%, rgb(114, 146, 207) 100%)' }}>
                  {child.name.split(' ').map(n => n[0]).join('')}
                </div>
                <div className="flex-1">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                    <div>
                      <p className="font-semibold text-[#313131]">{child.name}</p>
                      <p className="text-sm text-[#777]">{child.class}</p>
                    </div>
                    <div className="flex gap-4">
                      <div className="text-center">
                        <p className="text-xs text-[#777]">Moyenne</p>
                        <p className="text-lg font-bold text-[#313131]">{child.avg}<span className="text-xs text-[#777]">/20</span></p>
                      </div>
                      <div className="text-center">
                        <p className="text-xs text-[#777]">Assiduité</p>
                        <p className="text-lg font-bold text-[#6AC259]">{child.attendance}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-xl p-4 md:p-6 border border-[#E1E3E8]">
          <div className="flex items-center justify-between mb-4 md:mb-6">
            <h3 className="text-lg font-semibold text-[#313131]">Événements</h3>
            <button onClick={() => setActiveView?.('calendar')} className="text-sm text-[#6789CA] hover:text-[#2855AE] font-semibold">Tout voir</button>
          </div>
          <div className="space-y-3">
            {upcomingEvents.map((event, index) => (
              <div key={index} className="flex gap-3 p-3 hover:bg-[#F5F7FA] rounded-lg transition-colors">
                <div className="flex flex-col items-center justify-center bg-gradient-to-br from-[#6789CA] to-[#2855AE] text-white rounded-lg p-2 min-w-[50px]">
                  <span className="text-xl font-bold">{event.date}</span>
                  <span className="text-xs">{event.month}</span>
                </div>
                <div className="flex-1">
                  <p className="font-semibold text-[#313131] text-sm">{event.title}</p>
                  <p className="text-xs text-[#777] mt-1">{event.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl p-4 md:p-6 border border-[#E1E3E8]">
        <div className="flex items-center justify-between mb-4 md:mb-6">
          <h3 className="text-lg font-semibold text-[#313131]">Notifications Récentes</h3>
          <button onClick={() => setActiveView?.('messages')} className="text-sm text-[#6789CA] hover:text-[#2855AE] font-semibold">Tout voir</button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {recentNotifications.map((notification, index) => (
            <div key={index} className="flex items-start gap-3 p-3 md:p-4 hover:bg-[#F5F7FA] rounded-lg transition-colors">
              <div className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 ${
                notification.type === 'grade' ? 'bg-[#E6EFFF]' :
                notification.type === 'message' ? 'bg-[#E6EFFF]' :
                notification.type === 'event' ? 'bg-[#E8F5E9]' : 'bg-[#FFF4E6]'
              }`}>
                {notification.type === 'grade' ? <BookOpen className="w-5 h-5 text-[#6789CA]" /> :
                 notification.type === 'message' ? <MessageSquare className="w-5 h-5 text-[#6789CA]" /> :
                 notification.type === 'event' ? <Calendar className="w-5 h-5 text-[#6AC259]" /> :
                 <Award className="w-5 h-5 text-[#FFC143]" />}
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-semibold text-[#313131]">{notification.title}</p>
                <p className="text-sm text-[#777] mt-1 truncate">{notification.message}</p>
                <div className="flex items-center gap-2 mt-2">
                  <span className="text-xs text-[#A5A5A5]">{notification.time}</span>
                  <span className="text-xs text-[#DBDBDB]">•</span>
                  <span className="text-xs text-[#777]">{notification.class}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
