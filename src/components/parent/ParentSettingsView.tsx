import React, { useState } from 'react';
import { User, Mail, Phone, MapPin, Bell, Globe, Lock, Save } from 'lucide-react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

interface ParentSettingsViewProps {
  language: string;
}

export function ParentSettingsView({ language }: ParentSettingsViewProps) {
  const [activeTab, setActiveTab] = useState<'profile' | 'notifications' | 'security'>('profile');

  const tabs = [
    { id: 'profile', label: 'Profil', icon: User },
    { id: 'notifications', label: 'Notifications', icon: Bell },
    { id: 'security', label: 'Sécurité', icon: Lock },
  ];

  return (
    <div className="p-3 sm:p-4 md:p-6 lg:p-8 space-y-3 sm:space-y-4 md:space-y-6">
      <div>
        <h2 className="text-xl sm:text-2xl font-bold text-[#313131]">Paramètres</h2>
        <p className="text-sm text-[#777] mt-1">Gérez votre compte et vos préférences</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
        <div className="lg:col-span-1">
          <div className="bg-white rounded-lg sm:rounded-xl border border-[#E1E3E8] overflow-hidden shadow-sm">
            {tabs.map(tab => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as any)}
                  className={`w-full flex items-center gap-2 sm:gap-3 px-3 sm:px-4 md:px-6 py-2.5 sm:py-3 md:py-4 transition-all duration-200 ${
                    activeTab === tab.id
                      ? 'bg-[#E6EFFF] text-[#6789CA] border-l-4 border-[#6789CA] shadow-sm'
                      : 'text-[#777] hover:bg-[#F5F7FA]'
                  }`}
                >
                  <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
                  <span className="text-sm sm:text-base font-semibold">{tab.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        <div className="lg:col-span-3">
          {activeTab === 'profile' && (
            <div className="space-y-6">
              <div className="bg-white rounded-xl p-4 md:p-6 border border-[#E1E3E8]">
                <h3 className="text-lg font-semibold text-[#313131] mb-6">Informations Personnelles</h3>
                
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 md:gap-6 mb-6 pb-6 border-b border-[#E1E3E8]">
                  <div className="w-20 h-20 md:w-24 md:h-24 rounded-full flex items-center justify-center text-white text-2xl md:text-3xl font-bold" style={{ background: 'linear-gradient(-66.1555deg, rgb(40, 85, 174) 3.1469%, rgb(114, 146, 207) 100%)' }}>
                    KM
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl font-bold text-[#313131]">M. Karim Mansouri</h4>
                    <p className="text-sm text-[#777] mt-1">Parent - 2 enfants inscrits</p>
                    <button className="mt-3 text-sm text-[#6789CA] hover:text-[#2855AE] font-semibold">
                      Changer la photo
                    </button>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-[#313131] mb-2">
                      <User className="w-4 h-4 inline mr-2" />
                      Nom Complet
                    </label>
                    <input
                      type="text"
                      defaultValue="Karim Mansouri"
                      className="w-full px-4 py-2.5 border border-[#E1E3E8] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6789CA]"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-[#313131] mb-2">
                      <Mail className="w-4 h-4 inline mr-2" />
                      Email
                    </label>
                    <input
                      type="email"
                      defaultValue="karim.mansouri@email.com"
                      className="w-full px-4 py-2.5 border border-[#E1E3E8] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6789CA]"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-[#313131] mb-2">
                      <Phone className="w-4 h-4 inline mr-2" />
                      Téléphone
                    </label>
                    <input
                      type="tel"
                      defaultValue="0555 123 456"
                      className="w-full px-4 py-2.5 border border-[#E1E3E8] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6789CA]"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-[#313131] mb-2">
                      <Globe className="w-4 h-4 inline mr-2" />
                      Langue Préférée
                    </label>


                    <Select defaultValue="fr">
                      <SelectTrigger className="w-full bg-white border-[#E1E3E8] focus:ring-[#6789CA]">
                        <SelectValue placeholder="Choisir une langue" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="fr">Français</SelectItem>
                        <SelectItem value="ar">العربية</SelectItem>
                        <SelectItem value="en">English</SelectItem>
                        <SelectItem value="am">Tamazight</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-sm font-semibold text-[#313131] mb-2">
                      <MapPin className="w-4 h-4 inline mr-2" />
                      Adresse
                    </label>
                    <input
                      type="text"
                      defaultValue="Alger, Algérie"
                      className="w-full px-4 py-2.5 border border-[#E1E3E8] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6789CA]"
                    />
                  </div>
                </div>

                <div className="mt-6 flex justify-end">
                  <button className="px-6 py-2.5 rounded-lg text-white font-semibold hover:shadow-lg transition-all flex items-center gap-2" style={{ background: 'linear-gradient(-66.1555deg, rgb(40, 85, 174) 3.1469%, rgb(114, 146, 207) 100%)' }}>
                    <Save className="w-5 h-5" />
                    Enregistrer
                  </button>
                </div>
              </div>

              <div className="bg-white rounded-xl p-4 md:p-6 border border-[#E1E3E8]">
                <h3 className="text-lg font-semibold text-[#313131] mb-4">Mes Enfants</h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-4 bg-[#F5F7FA] rounded-lg">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold" style={{ background: 'linear-gradient(-66.1555deg, rgb(40, 85, 174) 3.1469%, rgb(114, 146, 207) 100%)' }}>
                        AM
                      </div>
                      <div>
                        <p className="font-semibold text-[#313131]">Ahmed Mansouri</p>
                        <p className="text-sm text-[#777]">6ème A</p>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-[#F5F7FA] rounded-lg">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold" style={{ background: 'linear-gradient(-66.1555deg, rgb(40, 85, 174) 3.1469%, rgb(114, 146, 207) 100%)' }}>
                        YM
                      </div>
                      <div>
                        <p className="font-semibold text-[#313131]">Yasmine Mansouri</p>
                        <p className="text-sm text-[#777]">4ème C</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'notifications' && (
            <div className="bg-white rounded-xl p-4 md:p-6 border border-[#E1E3E8]">
              <h3 className="text-lg font-semibold text-[#313131] mb-6">Préférences de Notification</h3>
              <div className="space-y-4">
                {[
                  { label: 'Nouvelles notes publiées', description: 'Recevoir une notification quand de nouvelles notes sont disponibles' },
                  { label: 'Messages des enseignants', description: 'Notifications pour les nouveaux messages' },
                  { label: 'Absences', description: 'Alertes en cas d\'absence de vos enfants' },
                  { label: 'Événements scolaires', description: 'Rappels pour les événements à venir' },
                  { label: 'Rappels de paiement', description: 'Notifications pour les échéances de paiement' },
                ].map((item, index) => (
                  <div key={index} className="flex items-start justify-between p-4 hover:bg-[#F5F7FA] rounded-lg transition-colors">
                    <div className="flex-1">
                      <p className="font-semibold text-[#313131]">{item.label}</p>
                      <p className="text-sm text-[#777] mt-1">{item.description}</p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer ml-4">
                      <input type="checkbox" defaultChecked className="sr-only peer" />
                      <div className="w-11 h-6 bg-[#E1E3E8] peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-[#6789CA] rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-[#E1E3E8] after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#6789CA]"></div>
                    </label>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'security' && (
            <div className="space-y-6">
              <div className="bg-white rounded-xl p-4 md:p-6 border border-[#E1E3E8]">
                <h3 className="text-lg font-semibold text-[#313131] mb-6">Changer le Mot de Passe</h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-semibold text-[#313131] mb-2">
                      Mot de passe actuel
                    </label>
                    <input
                      type="password"
                      className="w-full px-4 py-2.5 border border-[#E1E3E8] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6789CA]"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-[#313131] mb-2">
                      Nouveau mot de passe
                    </label>
                    <input
                      type="password"
                      className="w-full px-4 py-2.5 border border-[#E1E3E8] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6789CA]"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-[#313131] mb-2">
                      Confirmer le nouveau mot de passe
                    </label>
                    <input
                      type="password"
                      className="w-full px-4 py-2.5 border border-[#E1E3E8] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6789CA]"
                    />
                  </div>
                </div>
                <div className="mt-6 flex justify-end">
                  <button className="px-6 py-2.5 rounded-lg text-white font-semibold hover:shadow-lg transition-all" style={{ background: 'linear-gradient(-66.1555deg, rgb(40, 85, 174) 3.1469%, rgb(114, 146, 207) 100%)' }}>
                    Mettre à jour
                  </button>
                </div>
              </div>

              <div className="bg-white rounded-xl p-4 md:p-6 border border-[#E1E3E8]">
                <h3 className="text-lg font-semibold text-[#313131] mb-4">Sessions Actives</h3>
                <div className="space-y-3">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between p-4 bg-[#F5F7FA] rounded-lg gap-3">
                    <div>
                      <p className="font-semibold text-[#313131]">Windows - Chrome</p>
                      <p className="text-sm text-[#777] mt-1">Alger, Algérie • Actif maintenant</p>
                    </div>
                    <span className="text-xs px-3 py-1 bg-[#E8F5E9] text-[#6AC259] rounded-full self-start sm:self-center">Session actuelle</span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
