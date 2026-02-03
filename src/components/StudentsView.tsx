import React, { useState } from "react";
import {
  Search,
  Filter,
  Download,
  Plus,
  Eye,
  Edit,
  Trash2,
  Mail,
  Phone,
  X,
} from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
  DialogClose,
} from "./ui/dialog";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Button } from "./ui/button";

interface StudentsViewProps {
  language: string;
}

export function StudentsView({ language }: StudentsViewProps) {
  const [selectedClass, setSelectedClass] = useState("all");
  const [students, setStudents] = useState([
    {
      id: 1,
      name: "Ahmed Mansouri",
      class: "6ème A",
      avg: "15.2",
      attendance: "96%",
      parent: "M. Mansouri",
      phone: "0555 123 456",
      status: "active",
    },
    {
      id: 2,
      name: "Yasmine Benali",
      class: "6ème A",
      avg: "16.8",
      attendance: "98%",
      parent: "Mme. Benali",
      phone: "0555 234 567",
      status: "active",
    },
    {
      id: 3,
      name: "Karim Bouazza",
      class: "5ème B",
      avg: "14.1",
      attendance: "92%",
      parent: "M. Bouazza",
      phone: "0555 345 678",
      status: "active",
    },
    {
      id: 4,
      name: "Amira Chergui",
      class: "5ème B",
      avg: "17.3",
      attendance: "99%",
      parent: "Mme. Chergui",
      phone: "0555 456 789",
      status: "active",
    },
    {
      id: 5,
      name: "Sofiane Rahmani",
      class: "4ème C",
      avg: "13.7",
      attendance: "88%",
      parent: "M. Rahmani",
      phone: "0555 567 890",
      status: "warning",
    },
    {
      id: 6,
      name: "Lina Cherif",
      class: "4ème C",
      avg: "18.1",
      attendance: "100%",
      parent: "Mme. Cherif",
      phone: "0555 678 901",
      status: "active",
    },
    {
      id: 7,
      name: "Rayan Kaddour",
      class: "3ème A",
      avg: "12.9",
      attendance: "85%",
      parent: "M. Kaddour",
      phone: "0555 789 012",
      status: "warning",
    },
    {
      id: 8,
      name: "Nour Hamdi",
      class: "3ème A",
      avg: "16.2",
      attendance: "97%",
      parent: "Mme. Hamdi",
      phone: "0555 890 123",
      status: "active",
    },
  ]);

  const [isAddStudentOpen, setIsAddStudentOpen] = useState(false);
  const [newStudent, setNewStudent] = useState({
    name: "",
    class: "",
    parent: "",
    phone: "",
  });

  const [selectedStudent, setSelectedStudent] = useState<
    (typeof students)[0] | null
  >(null);
  const [isReportOpen, setIsReportOpen] = useState(false);

  const handleAddStudent = () => {
    const student = {
      id: students.length + 1,
      name: newStudent.name,
      class: newStudent.class,
      avg: "N/A",
      attendance: "100%",
      parent: newStudent.parent,
      phone: newStudent.phone,
      status: "active",
    };
    setStudents([...students, student]);
    setIsAddStudentOpen(false);
    setNewStudent({ name: "", class: "", parent: "", phone: "" });
  };

  const openReport = (student: (typeof students)[0]) => {
    setSelectedStudent(student);
    setIsReportOpen(true);
  };

  return (
    <div className="p-4 md:p-8 space-y-4 md:space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h2 className="text-xl md:text-2xl font-bold text-[#313131]">
            Gestion des Élèves
          </h2>
          <p className="text-[#777] mt-1 text-sm md:text-base">{students.length} élèves inscrits</p>
        </div>

        <Dialog open={isAddStudentOpen} onOpenChange={setIsAddStudentOpen}>
          <DialogTrigger asChild>
            <button
              className="w-full md:w-auto px-5 py-2.5 rounded-lg text-white font-semibold hover:shadow-lg transition-all flex items-center justify-center gap-2"
              style={{
                background:
                  "linear-gradient(-66.1555deg, rgb(40, 85, 174) 3.1469%, rgb(114, 146, 207) 100%)",
              }}
            >
              <Plus className="w-5 h-5" />
              Ajouter un Élève
            </button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-lg max-w-[95vw]">
            <DialogHeader>
              <DialogTitle>Ajouter un nouvel élève</DialogTitle>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid gap-2">
                <Label htmlFor="name">Nom complet</Label>
                <Input
                  id="name"
                  value={newStudent.name}
                  onChange={(e) =>
                    setNewStudent({ ...newStudent, name: e.target.value })
                  }
                  placeholder="Ex: Ahmed Mansouri"
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="class">Classe</Label>
                <Input
                  id="class"
                  value={newStudent.class}
                  onChange={(e) =>
                    setNewStudent({ ...newStudent, class: e.target.value })
                  }
                  placeholder="Ex: 6ème A"
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="parent">Nom du Parent/Tuteur</Label>
                <Input
                  id="parent"
                  value={newStudent.parent}
                  onChange={(e) =>
                    setNewStudent({ ...newStudent, parent: e.target.value })
                  }
                  placeholder="Ex: M. Mansouri"
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="phone">Téléphone</Label>
                <Input
                  id="phone"
                  value={newStudent.phone}
                  onChange={(e) =>
                    setNewStudent({ ...newStudent, phone: e.target.value })
                  }
                  placeholder="Ex: 0555 123 456"
                />
              </div>
            </div>
            <DialogFooter>
              <Button onClick={handleAddStudent}>Ajouter</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>

      {/* Filters and Search */}
      <div className="bg-white rounded-xl p-4 md:p-6 border border-[#E1E3E8]">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#B8B8B8]" />
            <input
              type="text"
              placeholder="Rechercher..."
              className="w-full pl-10 pr-4 py-2.5 border border-[#E1E3E8] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6789CA]"
            />
          </div>
          <div className="flex flex-row gap-2 overflow-x-auto pb-1 md:pb-0">
            <Select value={selectedClass} onValueChange={setSelectedClass}>
              <SelectTrigger className="flex-1 md:flex-none w-[180px] bg-white border-[#E1E3E8] focus:ring-[#6789CA]">
                <SelectValue placeholder="Toutes les classes" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Toutes les classes</SelectItem>
                <SelectItem value="6a">6ème A</SelectItem>
                <SelectItem value="5b">5ème B</SelectItem>
                <SelectItem value="4c">4ème C</SelectItem>
                <SelectItem value="3a">3ème A</SelectItem>
              </SelectContent>
            </Select>
            <button className="px-4 py-2.5 border border-[#E1E3E8] rounded-lg hover:bg-[#F5F7FA] transition-colors flex items-center gap-2 font-semibold text-[#313131]">
              <Filter className="w-5 h-5" />
              <span className="hidden md:inline">Filtres</span>
            </button>
            <button className="px-4 py-2.5 border border-[#E1E3E8] rounded-lg hover:bg-[#F5F7FA] transition-colors flex items-center gap-2 font-semibold text-[#313131]">
              <Download className="w-5 h-5" />
              <span className="hidden md:inline">Exporter</span>
            </button>
          </div>
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
                <th className="px-6 py-4 text-left text-sm font-semibold text-[#313131]">
                  Élève
                </th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-[#313131]">
                  Classe
                </th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-[#313131]">
                  Moyenne
                </th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-[#313131]">
                  Assiduité
                </th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-[#313131]">
                  Parent/Tuteur
                </th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-[#313131]">
                  Contact
                </th>
                <th className="px-6 py-4 text-right text-sm font-semibold text-[#313131]">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#E1E3E8]">
              {students.map((student) => (
                <tr
                  key={student.id}
                  className="hover:bg-[#F5F7FA] transition-colors"
                >
                  <td className="px-6 py-4">
                    <input
                      type="checkbox"
                      className="rounded border-[#E1E3E8]"
                    />
                  </td>
                  <td className="px-6 py-4">
                    <div>
                      <p className="font-semibold text-[#313131]">
                        {student.name}
                      </p>
                      <p className="text-sm text-[#777]">
                        ID: {student.id.toString().padStart(4, "0")}
                      </p>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-[#E6EFFF] text-[#6789CA]">
                      {student.class}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      <span className="font-semibold text-[#313131]">
                        {student.avg}
                      </span>
                      <span className="text-xs text-[#777]">/20</span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      <div className="flex-1 bg-[#E1E3E8] rounded-full h-2 w-16">
                        <div
                          className={`h-2 rounded-full ${
                            parseInt(student.attendance) >= 95
                              ? "bg-[#6AC259]"
                              : parseInt(student.attendance) >= 90
                                ? "bg-[#FFC143]"
                                : "bg-[#E92E30]"
                          }`}
                          style={{ width: student.attendance }}
                        />
                      </div>
                      <span className="text-sm font-semibold text-[#313131]">
                        {student.attendance}
                      </span>
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
                      <button
                        className="p-2 hover:bg-[#F5F7FA] rounded-lg transition-colors"
                        onClick={() => openReport(student)}
                      >
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
          <p className="text-sm text-[#777]">
            Affichage de 1 à {students.length} sur {students.length} élèves
          </p>
          <div className="flex gap-2">
            <button className="px-3 py-1.5 border border-[#E1E3E8] rounded hover:bg-[#F5F7FA] transition-colors text-sm">
              Précédent
            </button>
            <button
              className="px-3 py-1.5 text-white rounded hover:shadow-lg transition-colors text-sm font-semibold"
              style={{
                background:
                  "linear-gradient(-66.1555deg, rgb(40, 85, 174) 3.1469%, rgb(114, 146, 207) 100%)",
              }}
            >
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

      {/* Report Modal */}
      <Dialog open={isReportOpen} onOpenChange={setIsReportOpen}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle>
              Bulletin Simplifié - {selectedStudent?.name}
            </DialogTitle>
          </DialogHeader>
          {selectedStudent && (
            <div className="grid gap-6 py-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 bg-blue-50 rounded-lg">
                  <p className="text-sm text-blue-600 font-semibold">
                    Moyenne Générale
                  </p>
                  <p className="text-3xl font-bold text-blue-800">
                    {selectedStudent.avg}
                  </p>
                </div>
                <div className="p-4 bg-green-50 rounded-lg">
                  <p className="text-sm text-green-600 font-semibold">
                    Assiduité
                  </p>
                  <p className="text-3xl font-bold text-green-800">
                    {selectedStudent.attendance}
                  </p>
                </div>
              </div>

              <div>
                <h4 className="font-semibold mb-2">Détails Personnels</h4>
                <div className="grid grid-cols-2 gap-y-2 text-sm">
                  <p className="text-gray-500">Classe:</p>
                  <p className="font-medium">{selectedStudent.class}</p>
                  <p className="text-gray-500">Parent:</p>
                  <p className="font-medium">{selectedStudent.parent}</p>
                  <p className="text-gray-500">Téléphone:</p>
                  <p className="font-medium">{selectedStudent.phone}</p>
                </div>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-center text-gray-500 italic">
                  Le bulletin détaillé n'est pas disponible dans cette version.
                </p>
              </div>
            </div>
          )}
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsReportOpen(false)}>
              Fermer
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
