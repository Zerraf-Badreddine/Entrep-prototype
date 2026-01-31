import React, { useState } from 'react';
import { TrendingUp, TrendingDown, BookOpen, Calendar as CalendarIcon, Phone, Mail, ChevronDown, ChevronUp } from 'lucide-react';

interface ChildrenViewProps {
  language: string;
}

export function ChildrenView({ language }: ChildrenViewProps) {
  const [expandedChild, setExpandedChild] = useState<number | null>(0);

  const children = [
    {
      id: 1,
      name: 'Ahmed Mansouri',
      class: '6ème A',
      avg: '15.2',
      attendance: '96%',
      teacher: 'Mme. Salima Rahmani',
      teacherPhone: '0555 234 567',
      teacherEmail: 'salima.rahmani@leshirondelles.dz',
      subjects: [
        { name: 'Mathématiques', grade: '16.5', trend: 'up', lastTest: '17/20' },
        { name: 'Français', grade: '14.8', trend: 'up', lastTest: '15/20' },
        { name: 'Anglais', grade: '15.0', trend: 'stable', lastTest: '15/20' },
        { name: 'Sciences', grade: '14.2', trend: 'down', lastTest: '13/20' },
        { name: 'Histoire-Géo', grade: '16.0', trend: 'up', lastTest: '16.5/20' },
      ],
      recentGrades: [
        { subject: 'Mathématiques', grade: '17/20', date: '25 Jan 2026', type: 'Devoir' },
        { subject: 'Français', grade: '15/20', date: '23 Jan 2026', type: 'Composition' },
        { subject: 'Sciences', grade: '13/20', date: '20 Jan 2026', type: 'Test' },
      ],
      absences: [
        { date: '15 Jan 2026', reason: 'Maladie', justified: true },
        { date: '10 Jan 2026', reason: 'Rendez-vous médical', justified: true },
      ],
    },
    {
      id: 2,
      name: 'Yasmine Mansouri',
      class: '4ème C',
      avg: '16.4',
      attendance: '98%',
      teacher: 'M. Karim Bouazza',
      teacherPhone: '0555 345 678',
      teacherEmail: 'karim.bouazza@leshirondelles.dz',
      subjects: [
        { name: 'Mathématiques', grade: '17.2', trend: 'up', lastTest: '18/20' },
        { name: 'Français', grade: '16.8', trend: 'stable', lastTest: '17/20' },
        { name: 'Anglais', grade: '16.0', trend: 'up', lastTest: '16.5/20' },
        { name: 'Sciences', grade: '15.8', trend: 'up', lastTest: '16/20' },
        { name: 'Histoire-Géo', grade: '16.2', trend: 'stable', lastTest: '16/20' },
      ],
      recentGrades: [
        { subject: 'Mathématiques', grade: '18/20', date: '28 Jan 2026', type: 'Devoir' },
        { subject: 'Anglais', grade: '16.5/20', date: '26 Jan 2026', type: 'Test' },
        { subject: 'Français', grade: '17/20', date: '24 Jan 2026', type: 'Composition' },
      ],
      absences: [
        { date: '12 Jan 2026', reason: 'Événement familial', justified: true },
      ],
    },
  ];

  return (
    <div className="p-3 sm:p-4 md:p-6 lg:p-8 space-y-3 sm:space-y-4 md:space-y-6">
      <div>
        <h2 className="text-xl sm:text-2xl font-bold text-[#313131]">Mes Enfants</h2>
        <p className="text-sm text-[#777] mt-1">Suivi scolaire et informations</p>
      </div>

      <div className="space-y-3 sm:space-y-4 md:space-y-6">
        {children.map((child, index) => (
          <div key={child.id} className="bg-white rounded-lg sm:rounded-xl border border-[#E1E3E8] overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300">
            <div 
              className="p-3 sm:p-4 md:p-6 cursor-pointer hover:bg-[#F5F7FA] transition-colors"
              onClick={() => setExpandedChild(expandedChild === index ? null : index)}
            >
              <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4">
                <div className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-full flex items-center justify-center text-white text-lg sm:text-xl md:text-2xl font-bold flex-shrink-0 shadow-md" style={{ background: 'linear-gradient(-66.1555deg, rgb(40, 85, 174) 3.1469%, rgb(114, 146, 207) 100%)' }}>
                  {child.name.split(' ').map(n => n[0]).join('')}
                </div>
                <div className="flex-1">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-3">
                    <div>
                      <h3 className="text-lg sm:text-xl font-bold text-[#313131]">{child.name}</h3>
                      <p className="text-xs sm:text-sm text-[#777] mt-0.5 sm:mt-1">Classe: {child.class}</p>
                    </div>
                    <div className="flex gap-3 sm:gap-4 md:gap-6">
                      <div className="text-center">
                        <p className="text-xs text-[#777]">Moyenne Générale</p>
                        <p className="text-2xl font-bold text-[#313131]">{child.avg}<span className="text-sm text-[#777]">/20</span></p>
                      </div>
                      <div className="text-center">
                        <p className="text-xs text-[#777]">Assiduité</p>
                        <p className="text-2xl font-bold text-[#6AC259]">{child.attendance}</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex-shrink-0 self-start sm:self-center">
                  {expandedChild === index ? (
                    <ChevronUp className="w-6 h-6 text-[#777]" />
                  ) : (
                    <ChevronDown className="w-6 h-6 text-[#777]" />
                  )}
                </div>
              </div>
            </div>

            {expandedChild === index && (
              <div className="border-t border-[#E1E3E8] p-4 md:p-6 bg-[#F5F7FA] space-y-6">
                <div className="bg-white rounded-lg p-4 md:p-6 border border-[#E1E3E8]">
                  <h4 className="font-semibold text-[#313131] mb-4 flex items-center gap-2">
                    <BookOpen className="w-5 h-5 text-[#6789CA]" />
                    Notes par Matière
                  </h4>
                  <div className="space-y-3">
                    {child.subjects.map((subject, idx) => (
                      <div key={idx} className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 p-3 hover:bg-[#F5F7FA] rounded-lg transition-colors">
                        <div className="flex items-center gap-3 flex-1">
                          <span className="font-medium text-[#313131]">{subject.name}</span>
                          {subject.trend === 'up' && <TrendingUp className="w-4 h-4 text-[#6AC259]" />}
                          {subject.trend === 'down' && <TrendingDown className="w-4 h-4 text-[#E92E30]" />}
                        </div>
                        <div className="flex items-center gap-4">
                          <div className="text-right">
                            <p className="text-xs text-[#777]">Moyenne</p>
                            <p className="text-lg font-bold text-[#313131]">{subject.grade}<span className="text-xs text-[#777]">/20</span></p>
                          </div>
                          <div className="text-right">
                            <p className="text-xs text-[#777]">Dernier Test</p>
                            <p className="text-sm font-semibold text-[#6789CA]">{subject.lastTest}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6">
                  <div className="bg-white rounded-lg p-4 md:p-6 border border-[#E1E3E8]">
                    <h4 className="font-semibold text-[#313131] mb-4">Notes Récentes</h4>
                    <div className="space-y-3">
                      {child.recentGrades.map((grade, idx) => (
                        <div key={idx} className="flex items-center justify-between p-3 bg-[#F5F7FA] rounded-lg">
                          <div>
                            <p className="font-medium text-[#313131] text-sm">{grade.subject}</p>
                            <p className="text-xs text-[#777] mt-1">{grade.date} • {grade.type}</p>
                          </div>
                          <span className="text-xl font-bold text-[#6789CA]">{grade.grade}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="bg-white rounded-lg p-4 md:p-6 border border-[#E1E3E8]">
                    <h4 className="font-semibold text-[#313131] mb-4">Absences</h4>
                    {child.absences.length > 0 ? (
                      <div className="space-y-3">
                        {child.absences.map((absence, idx) => (
                          <div key={idx} className="flex items-start justify-between p-3 bg-[#FFF4E6] rounded-lg">
                            <div>
                              <p className="font-medium text-[#313131] text-sm">{absence.date}</p>
                              <p className="text-xs text-[#777] mt-1">{absence.reason}</p>
                            </div>
                            <span className={`text-xs px-2 py-1 rounded-full ${absence.justified ? 'bg-[#E8F5E9] text-[#6AC259]' : 'bg-[#FFEBEE] text-[#E92E30]'}`}>
                              {absence.justified ? 'Justifiée' : 'Non justifiée'}
                            </span>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <p className="text-sm text-[#777] text-center py-4">Aucune absence enregistrée</p>
                    )}
                  </div>
                </div>

                <div className="bg-white rounded-lg p-4 md:p-6 border border-[#E1E3E8]">
                  <h4 className="font-semibold text-[#313131] mb-4">Enseignant Principal</h4>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div>
                      <p className="font-semibold text-[#313131]">{child.teacher}</p>
                      <p className="text-sm text-[#777] mt-1">Professeur Principal - {child.class}</p>
                    </div>
                    <div className="flex gap-3">
                      <a href={`tel:${child.teacherPhone}`} className="flex items-center gap-2 px-4 py-2 bg-[#E6EFFF] text-[#6789CA] rounded-lg hover:bg-[#6789CA] hover:text-white transition-colors">
                        <Phone className="w-4 h-4" />
                        <span className="text-sm font-semibold hidden sm:inline">Appeler</span>
                      </a>
                      <a href={`mailto:${child.teacherEmail}`} className="flex items-center gap-2 px-4 py-2 bg-[#E6EFFF] text-[#6789CA] rounded-lg hover:bg-[#6789CA] hover:text-white transition-colors">
                        <Mail className="w-4 h-4" />
                        <span className="text-sm font-semibold hidden sm:inline">Email</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
