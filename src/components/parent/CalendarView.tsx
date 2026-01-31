import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Calendar as CalendarIcon, Clock, MapPin, Users } from 'lucide-react';

interface CalendarViewProps {
  language: string;
}

export function CalendarView({ language }: CalendarViewProps) {
  const [currentDate, setCurrentDate] = useState(new Date(2026, 0, 30));

  const events = [
    {
      id: 1,
      title: 'Journée Portes Ouvertes',
      date: new Date(2026, 1, 15),
      time: '09:00 - 16:00',
      location: 'École Les Hirondelles',
      type: 'school',
      description: 'Visite des installations et rencontre avec les enseignants',
    },
    {
      id: 2,
      title: 'Réunion Parent-Professeur',
      date: new Date(2026, 1, 20),
      time: '14:00 - 17:00',
      location: 'Salle de réunion',
      type: 'meeting',
      description: 'Rencontre individuelle avec les enseignants',
      children: ['Ahmed Mansouri'],
    },
    {
      id: 3,
      title: 'Vacances d\'Hiver',
      date: new Date(2026, 1, 28),
      time: 'Toute la journée',
      location: '',
      type: 'holiday',
      description: 'Vacances scolaires',
    },
    {
      id: 4,
      title: 'Examen de Mathématiques',
      date: new Date(2026, 1, 5),
      time: '08:00 - 10:00',
      location: 'Salle 6A',
      type: 'exam',
      description: 'Examen trimestriel',
      children: ['Ahmed Mansouri'],
    },
    {
      id: 5,
      title: 'Sortie Scolaire - Musée',
      date: new Date(2026, 1, 12),
      time: '09:00 - 15:00',
      location: 'Musée National',
      type: 'trip',
      description: 'Sortie éducative au musée',
      children: ['Yasmine Mansouri'],
    },
  ];

  const monthNames = ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'];
  const dayNames = ['Dim', 'Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam'];

  const getDaysInMonth = (date: Date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();
    const startingDayOfWeek = firstDay.getDay();

    const days = [];
    for (let i = 0; i < startingDayOfWeek; i++) {
      days.push(null);
    }
    for (let i = 1; i <= daysInMonth; i++) {
      days.push(new Date(year, month, i));
    }
    return days;
  };

  const getEventsForDate = (date: Date | null) => {
    if (!date) return [];
    return events.filter(event => 
      event.date.getDate() === date.getDate() &&
      event.date.getMonth() === date.getMonth() &&
      event.date.getFullYear() === date.getFullYear()
    );
  };

  const getEventColor = (type: string) => {
    switch (type) {
      case 'school': return 'bg-[#6789CA]';
      case 'meeting': return 'bg-[#7292CF]';
      case 'holiday': return 'bg-[#6AC259]';
      case 'exam': return 'bg-[#E92E30]';
      case 'trip': return 'bg-[#FFC143]';
      default: return 'bg-[#777]';
    }
  };

  const previousMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1));
  };

  const nextMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1));
  };

  const days = getDaysInMonth(currentDate);
  const upcomingEvents = events
    .filter(e => e.date >= new Date())
    .sort((a, b) => a.date.getTime() - b.date.getTime())
    .slice(0, 5);

  return (
    <div className="p-3 sm:p-4 md:p-6 lg:p-8 space-y-3 sm:space-y-4 md:space-y-6">
      <div>
        <h2 className="text-xl sm:text-2xl font-bold text-[#313131]">Calendrier Scolaire</h2>
        <p className="text-sm text-[#777] mt-1">Événements et rendez-vous</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-6">
        <div className="lg:col-span-2 bg-white rounded-xl p-4 md:p-6 border border-[#E1E3E8]">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg sm:text-xl font-bold text-[#313131]">
              {monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}
            </h3>
            <div className="flex gap-2">
              <button
                onClick={previousMonth}
                className="p-2 hover:bg-[#F5F7FA] rounded-lg transition-colors"
              >
                <ChevronLeft className="w-5 h-5 text-[#777]" />
              </button>
              <button
                onClick={nextMonth}
                className="p-2 hover:bg-[#F5F7FA] rounded-lg transition-colors"
              >
                <ChevronRight className="w-5 h-5 text-[#777]" />
              </button>
            </div>
          </div>

          <div className="grid grid-cols-7 gap-1 md:gap-2">
            {dayNames.map(day => (
              <div key={day} className="text-center text-xs md:text-sm font-semibold text-[#777] py-2">
                {day}
              </div>
            ))}
            {days.map((day, index) => {
              const dayEvents = getEventsForDate(day);
              const isToday = day && 
                day.getDate() === new Date().getDate() &&
                day.getMonth() === new Date().getMonth() &&
                day.getFullYear() === new Date().getFullYear();

              return (
                <div
                  key={index}
                  className={`min-h-[60px] md:min-h-[80px] p-1 md:p-2 border border-[#E1E3E8] rounded-lg ${
                    day ? 'bg-white hover:bg-[#F5F7FA] cursor-pointer' : 'bg-[#FAFAFA]'
                  } ${isToday ? 'ring-2 ring-[#6789CA]' : ''}`}
                >
                  {day && (
                    <>
                      <div className={`text-xs md:text-sm font-semibold mb-1 ${
                        isToday ? 'text-[#6789CA]' : 'text-[#313131]'
                      }`}>
                        {day.getDate()}
                      </div>
                      <div className="space-y-1">
                        {dayEvents.slice(0, 2).map(event => (
                          <div
                            key={event.id}
                            className={`text-[8px] md:text-[10px] text-white px-1 py-0.5 rounded truncate ${getEventColor(event.type)}`}
                            title={event.title}
                          >
                            {event.title}
                          </div>
                        ))}
                        {dayEvents.length > 2 && (
                          <div className="text-[8px] md:text-[10px] text-[#777]">
                            +{dayEvents.length - 2} plus
                          </div>
                        )}
                      </div>
                    </>
                  )}
                </div>
              );
            })}
          </div>

          <div className="mt-6 pt-6 border-t border-[#E1E3E8]">
            <div className="flex flex-wrap gap-3 md:gap-4">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded bg-[#6789CA]"></div>
                <span className="text-xs md:text-sm text-[#777]">École</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded bg-[#7292CF]"></div>
                <span className="text-xs md:text-sm text-[#777]">Réunion</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded bg-[#E92E30]"></div>
                <span className="text-xs md:text-sm text-[#777]">Examen</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded bg-[#FFC143]"></div>
                <span className="text-xs md:text-sm text-[#777]">Sortie</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded bg-[#6AC259]"></div>
                <span className="text-xs md:text-sm text-[#777]">Vacances</span>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl p-4 md:p-6 border border-[#E1E3E8]">
          <h3 className="text-lg font-semibold text-[#313131] mb-4">Événements à Venir</h3>
          <div className="space-y-4">
            {upcomingEvents.map(event => (
              <div key={event.id} className="p-4 bg-[#F5F7FA] rounded-lg hover:bg-[#E6EFFF] transition-colors">
                <div className="flex items-start gap-3">
                  <div className={`w-2 h-2 rounded-full mt-2 flex-shrink-0 ${getEventColor(event.type)}`}></div>
                  <div className="flex-1 min-w-0">
                    <p className="font-semibold text-[#313131] text-sm mb-1">{event.title}</p>
                    <div className="space-y-1">
                      <div className="flex items-center gap-2 text-xs text-[#777]">
                        <CalendarIcon className="w-3 h-3" />
                        <span>{event.date.toLocaleDateString('fr-FR', { day: 'numeric', month: 'long' })}</span>
                      </div>
                      <div className="flex items-center gap-2 text-xs text-[#777]">
                        <Clock className="w-3 h-3" />
                        <span>{event.time}</span>
                      </div>
                      {event.location && (
                        <div className="flex items-center gap-2 text-xs text-[#777]">
                          <MapPin className="w-3 h-3" />
                          <span className="truncate">{event.location}</span>
                        </div>
                      )}
                      {event.children && (
                        <div className="flex items-center gap-2 text-xs text-[#777]">
                          <Users className="w-3 h-3" />
                          <span className="truncate">{event.children.join(', ')}</span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
