import React, { useState } from 'react';
import { Search, Filter, Download, Plus, Eye, Edit, Trash2, Mail, Phone } from 'lucide-react';

interface StudentsViewProps {
  language: string;
}

export function StudentsView({ language }: StudentsViewProps) {
  const [selectedClass, setSelectedClass] = useState('all');
  
  const students = [
    { id: 1, name: 'Ahmed Mansouri', class: '6ème A', avg: '15.2', attendance: '96%', parent: 'M. Mansouri', phone: '0555 123 456', status: 'active' },
    { id: 2, name: 'Yasmine Benali', class: '6ème A', avg: '16.8', attendance: '98%', parent: 'Mme. Benali', phone: '0555 234 567', status: 'active' },
    { id: 3, name: 'Karim Bouazza', class: '5ème B', avg: '14.1', attendance: '92%', parent: 'M. Bouazza', phone: '0555 345 678', status: 'active' },
    { id: 4, name: 'Amira Chergui', class: '5ème B', avg: '17.3', attendance: '99%', parent: 'Mme. Chergui', phone: '0555 456 789', status: 'active' },
    { id: 5, name: 'Sofiane Rahmani', class: '4ème C', avg: '13.7', attendance: '88%', parent: 'M. Rahmani', phone: '0555 567 890', status: 'warning' },
    { id: 6, name: 'Lina Cherif', class: '4ème C', avg: '18.1', attendance: '100%', parent: 'Mme. Cherif', phone: '0555 678 901', status: 'active' },
    { id: 7, name: 'Rayan Kaddour', class: '3ème A', avg: '12.9', attendance: '85%', parent: 'M. Kaddour', phone: '0555 789 012', status: 'warning' },
    { id: 8, name: 'Nour Hamdi', class: '3ème A', avg: '16.2', attendance: '97%', parent: 'Mme. Hamdi', phone: '0555 890 123', status: 'active' },
  ];

  return (
    <div className="p-8 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-[#313131]">Gestion des Élèves</h2>
          <p className="text-[#777] mt-1">847 élèves inscrits</p>
        </div>
        <button className="px-5 py-2.5 rounded-lg text-white font-semibold hover:shadow-lg transition-all flex items-center gap-2" style={{ background: 'linear-gradient(-66.1555deg, rgb(40, 85, 174) 3.1469%, rgb(114, 146, 207) 100%)' }}>
          <Plus className="w-5 h-5" />
          Ajouter un Élève
        </button>
      </div>

      {/* Filters and Search */}
      <div className="bg-white rounded-xl p-6 border border-[#E1E3E8]">
        <div className="flex gap-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#B8B8B8]" />
            <input
              type="text"
              placeholder="Rechercher par nom, classe, parent..."
              className="w-full pl-10 pr-4 py-2.5 border border-[#E1E3E8] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6789CA]"
            />
          </div>
          <select
            value={selectedClass}
            onChange={(e) => setSelectedClass(e.target.value)}
            className="px-4 py-2.5 border border-[#E1E3E8] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6789CA]"
          >
            <option value="all">Toutes les classes</option>
            <option value="6a">6ème A</option>
            <option value="5b">5ème B</option>
            <option value="4c">4ème C</option>
            <option value="3a">3ème A</option>
          </select>
          <button className="px-4 py-2.5 border border-[#E1E3E8] rounded-lg hover:bg-[#F5F7FA] transition-colors flex items-center gap-2 font-semibold text-[#313131]">
            <Filter className="w-5 h-5" />
            Filtres
          </button>
          <button className="px-4 py-2.5 border border-[#E1E3E8] rounded-lg hover:bg-[#F5F7FA] transition-colors flex items-center gap-2 font-semibold text-[#313131]">
            <Download className="w-5 h-5" />
            Exporter
          </button>
        </div>
      </div>

      {/* Students Table */}
      <div className="bg-white rounded-xl border border-[#E1E3E8] overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-[#F5F7FA] border-b border-[#E1E3E8]">
              <tr>
                <th className="px-6 py-4 text-left">
                  <input type="checkbox" className="rounded border-[#E1E3E8]" />
                </th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-[#313131]">Élève</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-[#313131]">Classe</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-[#313131]">Moyenne</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-[#313131]">Assiduité</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-[#313131]">Parent/Tuteur</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-[#313131]">Contact</th>
                <th className="px-6 py-4 text-right text-sm font-semibold text-[#313131]">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#E1E3E8]">
              {students.map((student) => (
                <tr key={student.id} className="hover:bg-[#F5F7FA] transition-colors">
                  <td className="px-6 py-4">
                    <input type="checkbox" className="rounded border-[#E1E3E8]" />
                  </td>
                  <td className="px-6 py-4">
                    <div>
                      <p className="font-semibold text-[#313131]">{student.name}</p>
                      <p className="text-sm text-[#777]">ID: {student.id.toString().padStart(4, '0')}</p>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-[#E6EFFF] text-[#6789CA]">
                      {student.class}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      <span className="font-semibold text-[#313131]">{student.avg}</span>
                      <span className="text-xs text-[#777]">/20</span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      <div className="flex-1 bg-[#E1E3E8] rounded-full h-2 w-16">
                        <div
                          className={`h-2 rounded-full ${
                            parseInt(student.attendance) >= 95 ? 'bg-[#6AC259]' :
                            parseInt(student.attendance) >= 90 ? 'bg-[#FFC143]' : 'bg-[#E92E30]'
                          }`}
                          style={{ width: student.attendance }}
                        />
                      </div>
                      <span className="text-sm font-semibold text-[#313131]">{student.attendance}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <p className="text-sm text-[#313131]">{student.parent}</p>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      <button className="p-1.5 hover:bg-[#F5F7FA] rounded transition-colors">
                        <Phone className="w-4 h-4 text-[#777]" />
                      </button>
                      <button className="p-1.5 hover:bg-[#F5F7FA] rounded transition-colors">
                        <Mail className="w-4 h-4 text-[#777]" />
                      </button>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center justify-end gap-2">
                      <button className="p-2 hover:bg-[#F5F7FA] rounded-lg transition-colors">
                        <Eye className="w-4 h-4 text-[#777]" />
                      </button>
                      <button className="p-2 hover:bg-[#F5F7FA] rounded-lg transition-colors">
                        <Edit className="w-4 h-4 text-[#777]" />
                      </button>
                      <button className="p-2 hover:bg-[#F5F7FA] rounded-lg transition-colors">
                        <Trash2 className="w-4 h-4 text-[#E92E30]" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="px-6 py-4 border-t border-[#E1E3E8] flex items-center justify-between">
          <p className="text-sm text-[#777]">Affichage de 1 à 8 sur 847 élèves</p>
          <div className="flex gap-2">
            <button className="px-3 py-1.5 border border-[#E1E3E8] rounded hover:bg-[#F5F7FA] transition-colors text-sm">
              Précédent
            </button>
            <button className="px-3 py-1.5 text-white rounded hover:shadow-lg transition-colors text-sm font-semibold" style={{ background: 'linear-gradient(-66.1555deg, rgb(40, 85, 174) 3.1469%, rgb(114, 146, 207) 100%)' }}>
              1
            </button>
            <button className="px-3 py-1.5 border border-[#E1E3E8] rounded hover:bg-[#F5F7FA] transition-colors text-sm">
              2
            </button>
            <button className="px-3 py-1.5 border border-[#E1E3E8] rounded hover:bg-[#F5F7FA] transition-colors text-sm">
              3
            </button>
            <button className="px-3 py-1.5 border border-[#E1E3E8] rounded hover:bg-[#F5F7FA] transition-colors text-sm">
              Suivant
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}