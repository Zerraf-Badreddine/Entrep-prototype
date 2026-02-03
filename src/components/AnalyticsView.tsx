import React from 'react';
import { TrendingUp, TrendingDown, Users, GraduationCap, BookOpen, Award } from 'lucide-react';
import { BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';

interface AnalyticsViewProps {
  language: string;
}

export function AnalyticsView({ language }: AnalyticsViewProps) {
  const monthlyAttendance = [
    { month: 'Sep', rate: 94 },
    { month: 'Oct', rate: 96 },
    { month: 'Nov', rate: 93 },
    { month: 'Déc', rate: 91 },
    { month: 'Jan', rate: 95 },
  ];

  const gradeDistribution = [
    { subject: 'Math', avg: 14.2 },
    { subject: 'Physique', avg: 13.8 },
    { subject: 'Français', avg: 15.1 },
    { subject: 'Anglais', avg: 14.5 },
    { subject: 'Histoire', avg: 13.2 },
    { subject: 'SVT', avg: 14.8 },
  ];

  const classPerformance = [
    { name: '6ème A', value: 15.8, color: '#6789CA' },
    { name: '6ème B', value: 14.2, color: '#7292CF' },
    { name: '5ème A', value: 14.9, color: '#6AC259' },
    { name: '5ème B', value: 13.7, color: '#FFC143' },
    { name: '4ème C', value: 14.5, color: '#E92E30' },
  ];

  const kpis = [
    { label: 'Taux de réussite', value: '92.3%', change: '+2.1%', trend: 'up', icon: Award, color: '#6AC259' },
    { label: 'Moyenne générale', value: '14.2/20', change: '+0.3', trend: 'up', icon: GraduationCap, color: '#6789CA' },
    { label: 'Taux d\'assiduité', value: '95.8%', change: '-0.5%', trend: 'down', icon: Users, color: '#FFC143' },
    { label: 'Cours dispensés', value: '1,247', change: '+15', trend: 'up', icon: BookOpen, color: '#7292CF' },
  ];

  return (
    <div className="p-4 md:p-8 space-y-4 md:space-y-6">
      {/* Header */}
      <div>
        <h2 className="text-2xl font-bold text-[#313131]">Analyses et Rapports</h2>
        <p className="text-[#777] mt-1">Vue d'ensemble des performances académiques</p>
      </div>

      {/* KPIs */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
        {kpis.map((kpi, index) => {
          const Icon = kpi.icon;
          return (
            <div key={index} className="bg-white rounded-xl p-6 border border-[#E1E3E8]">
              <div className="flex items-start justify-between mb-4">
                <div className="p-3 rounded-lg" style={{ backgroundColor: `${kpi.color}15` }}>
                  <Icon className="w-6 h-6" style={{ color: kpi.color }} />
                </div>
                <div className={`flex items-center gap-1 text-sm font-semibold ${
                  kpi.trend === 'up' ? 'text-[#6AC259]' : 'text-[#E92E30]'
                }`}>
                  {kpi.trend === 'up' ? <TrendingUp className="w-4 h-4" /> : <TrendingDown className="w-4 h-4" />}
                  {kpi.change}
                </div>
              </div>
              <p className="text-3xl font-bold text-[#313131] mb-1">{kpi.value}</p>
              <p className="text-sm text-[#777]">{kpi.label}</p>
            </div>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-6">
        {/* Attendance Trend */}
        <div className="lg:col-span-2 bg-white rounded-xl p-4 md:p-6 border border-[#E1E3E8]">
          <div className="mb-4 md:mb-6">
            <h3 className="text-lg font-semibold text-[#313131]">Évolution de l'Assiduité</h3>
            <p className="text-sm text-[#777]">Taux de présence mensuel (%)</p>
          </div>
          <div className="h-[250px] md:h-[300px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={monthlyAttendance}>
                <CartesianGrid strokeDasharray="3 3" stroke="#E1E3E8" />
                <XAxis dataKey="month" stroke="#777" />
                <YAxis stroke="#777" domain={[85, 100]} />
                <Tooltip
                  contentStyle={{ backgroundColor: '#fff', border: '1px solid #E1E3E8', borderRadius: '8px' }}
                />
                <Line type="monotone" dataKey="rate" stroke="#6789CA" strokeWidth={3} dot={{ fill: '#6789CA', r: 5 }} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Class Performance Pie */}
        <div className="bg-white rounded-xl p-4 md:p-6 border border-[#E1E3E8]">
          <div className="mb-4 md:mb-6">
            <h3 className="text-lg font-semibold text-[#313131]">Performance par Classe</h3>
            <p className="text-sm text-[#777]">Moyennes générales</p>
          </div>
          <div className="h-[200px] md:h-[250px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={classPerformance}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={90}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {classPerformance.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className="mt-4 space-y-2">
            {classPerformance.map((cls, index) => (
              <div key={index} className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full" style={{ backgroundColor: cls.color }} />
                  <span className="text-sm text-[#313131]">{cls.name}</span>
                </div>
                <span className="text-sm font-semibold text-[#313131]">{cls.value}/20</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Grade Distribution */}
      <div className="bg-white rounded-xl p-6 border border-[#E1E3E8]">
        <div className="mb-6">
          <h3 className="text-lg font-semibold text-[#313131]">Moyennes par Matière</h3>
          <p className="text-sm text-[#777]">Comparaison des performances académiques</p>
        </div>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={gradeDistribution}>
            <CartesianGrid strokeDasharray="3 3" stroke="#E1E3E8" />
            <XAxis dataKey="subject" stroke="#777" />
            <YAxis stroke="#777" domain={[0, 20]} />
            <Tooltip
              contentStyle={{ backgroundColor: '#fff', border: '1px solid #E1E3E8', borderRadius: '8px' }}
            />
            <Bar dataKey="avg" fill="#6789CA" radius={[8, 8, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
        <div className="bg-gradient-to-br from-[#E6EFFF] to-[#D5E5FF] rounded-xl p-4 md:p-6 border border-[#6789CA] border-opacity-30">
          <div className="flex items-center justify-between mb-4">
            <h4 className="font-semibold text-[#313131]">Élèves Excellents</h4>
            <Award className="w-8 h-8 text-[#6789CA]" />
          </div>
          <p className="text-3xl md:text-4xl font-bold text-[#6789CA] mb-2">127</p>
          <p className="text-sm text-[#313131]">Moyenne ≥ 16/20</p>
          <div className="mt-4 pt-4 border-t border-[#6789CA] border-opacity-20">
            <p className="text-xs text-[#777]">+12 vs mois dernier</p>
          </div>
        </div>

        <div className="bg-gradient-to-br from-[#FFF4E6] to-[#FFEDB2] rounded-xl p-4 md:p-6 border border-[#FFC143] border-opacity-30">
          <div className="flex items-center justify-between mb-4">
            <h4 className="font-semibold text-[#313131]">Élèves à Risque</h4>
            <TrendingDown className="w-8 h-8 text-[#FFC143]" />
          </div>
          <p className="text-3xl md:text-4xl font-bold text-[#FFC143] mb-2">23</p>
          <p className="text-sm text-[#313131]">Moyenne {'<'} 10/20</p>
          <div className="mt-4 pt-4 border-t border-[#FFC143] border-opacity-20">
            <p className="text-xs text-[#777]">-5 vs mois dernier</p>
          </div>
        </div>

        <div className="bg-gradient-to-br from-[#E8F5E9] to-[#D1F29C] rounded-xl p-4 md:p-6 border border-[#6AC259] border-opacity-30">
          <div className="flex items-center justify-between mb-4">
            <h4 className="font-semibold text-[#313131]">Participation Parents</h4>
            <Users className="w-8 h-8 text-[#6AC259]" />
          </div>
          <p className="text-3xl md:text-4xl font-bold text-[#6AC259] mb-2">89%</p>
          <p className="text-sm text-[#313131]">Taux d'engagement app</p>
          <div className="mt-4 pt-4 border-t border-[#6AC259] border-opacity-20">
            <p className="text-xs text-[#777]">+7% vs mois dernier</p>
          </div>
        </div>
      </div>
    </div>
  );
}
