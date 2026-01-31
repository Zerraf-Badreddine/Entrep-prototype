import React from 'react';
import { School, Users, Bell, Shield, CreditCard, Globe } from 'lucide-react';
import mascotHappy from 'figma:asset/fc8446e65fca6fb8d93cefdce92e67763fe46dbd.png';

interface SettingsViewProps {
  language: string;
}

export function SettingsView({ language }: SettingsViewProps) {
  return (
    <div className="p-8 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-[#313131]">Paramètres</h2>
          <p className="text-[#777] mt-1">Configuration de votre établissement</p>
        </div>
        <img src={mascotHappy} alt="" className="w-20 h-20" />
      </div>

      {/* Settings Grid */}
      <div className="grid grid-cols-2 gap-6">
        {/* School Information */}
        <div className="bg-white rounded-xl p-6 border border-[#E1E3E8]">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-[#E6EFFF] rounded-lg flex items-center justify-center">
              <School className="w-5 h-5 text-[#6789CA]" />
            </div>
            <h3 className="text-lg font-semibold text-[#313131]">Informations de l'École</h3>
          </div>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-semibold text-[#313131] mb-2">Nom de l'établissement</label>
              <input
                type="text"
                defaultValue="École Privée Les Hirondelles"
                className="w-full px-4 py-2.5 border border-[#E1E3E8] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6789CA]"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-[#313131] mb-2">Adresse</label>
              <input
                type="text"
                defaultValue="123 Rue de la Liberté, Alger 16000"
                className="w-full px-4 py-2.5 border border-[#E1E3E8] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6789CA]"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold text-[#313131] mb-2">Téléphone</label>
                <input
                  type="text"
                  defaultValue="+213 21 123 456"
                  className="w-full px-4 py-2.5 border border-[#E1E3E8] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6789CA]"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-[#313131] mb-2">Email</label>
                <input
                  type="email"
                  defaultValue="contact@hirondelles.dz"
                  className="w-full px-4 py-2.5 border border-[#E1E3E8] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6789CA]"
                />
              </div>
            </div>
          </div>
        </div>

        {/* User Management */}
        <div className="bg-white rounded-xl p-6 border border-[#E1E3E8]">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-[#F3E5F5] rounded-lg flex items-center justify-center">
              <Users className="w-5 h-5 text-[#7292CF]" />
            </div>
            <h3 className="text-lg font-semibold text-[#313131]">Gestion des Utilisateurs</h3>
          </div>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 bg-[#F5F7FA] rounded-lg border border-[#E1E3E8]">
              <div>
                <p className="font-semibold text-[#313131]">Enseignants</p>
                <p className="text-sm text-[#777]">42 comptes actifs</p>
              </div>
              <button className="text-sm text-[#6789CA] hover:text-[#2855AE] font-semibold">Gérer</button>
            </div>
            <div className="flex items-center justify-between p-4 bg-[#F5F7FA] rounded-lg border border-[#E1E3E8]">
              <div>
                <p className="font-semibold text-[#313131]">Administrateurs</p>
                <p className="text-sm text-[#777]">5 comptes actifs</p>
              </div>
              <button className="text-sm text-[#6789CA] hover:text-[#2855AE] font-semibold">Gérer</button>
            </div>
            <div className="flex items-center justify-between p-4 bg-[#F5F7FA] rounded-lg border border-[#E1E3E8]">
              <div>
                <p className="font-semibold text-[#313131]">Parents</p>
                <p className="text-sm text-[#777]">847 comptes actifs</p>
              </div>
              <button className="text-sm text-[#6789CA] hover:text-[#2855AE] font-semibold">Gérer</button>
            </div>
          </div>
        </div>

        {/* Notifications */}
        <div className="bg-white rounded-xl p-6 border border-[#E1E3E8]">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-[#FFF4E6] rounded-lg flex items-center justify-center">
              <Bell className="w-5 h-5 text-[#FFC143]" />
            </div>
            <h3 className="text-lg font-semibold text-[#313131]">Notifications</h3>
          </div>
          <div className="space-y-3">
            <label className="flex items-center justify-between p-3 hover:bg-[#F5F7FA] rounded-lg cursor-pointer transition-colors">
              <span className="text-sm text-[#313131]">Notifications push pour les parents</span>
              <input type="checkbox" className="rounded border-[#E1E3E8]" defaultChecked />
            </label>
            <label className="flex items-center justify-between p-3 hover:bg-[#F5F7FA] rounded-lg cursor-pointer transition-colors">
              <span className="text-sm text-[#313131]">Alertes par email</span>
              <input type="checkbox" className="rounded border-[#E1E3E8]" defaultChecked />
            </label>
            <label className="flex items-center justify-between p-3 hover:bg-[#F5F7FA] rounded-lg cursor-pointer transition-colors">
              <span className="text-sm text-[#313131]">SMS pour absences (coût additionnel)</span>
              <input type="checkbox" className="rounded border-[#E1E3E8]" />
            </label>
            <label className="flex items-center justify-between p-3 hover:bg-[#F5F7FA] rounded-lg cursor-pointer transition-colors">
              <span className="text-sm text-[#313131]">Rappels automatiques</span>
              <input type="checkbox" className="rounded border-[#E1E3E8]" defaultChecked />
            </label>
          </div>
        </div>

        {/* Security */}
        <div className="bg-white rounded-xl p-6 border border-[#E1E3E8]">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-[#FFEBEE] rounded-lg flex items-center justify-center">
              <Shield className="w-5 h-5 text-[#E92E30]" />
            </div>
            <h3 className="text-lg font-semibold text-[#313131]">Sécurité et Confidentialité</h3>
          </div>
          <div className="space-y-3">
            <label className="flex items-center justify-between p-3 hover:bg-[#F5F7FA] rounded-lg cursor-pointer transition-colors">
              <span className="text-sm text-[#313131]">Authentification à deux facteurs</span>
              <input type="checkbox" className="rounded border-[#E1E3E8]" defaultChecked />
            </label>
            <label className="flex items-center justify-between p-3 hover:bg-[#F5F7FA] rounded-lg cursor-pointer transition-colors">
              <span className="text-sm text-[#313131]">Chiffrement des données</span>
              <input type="checkbox" className="rounded border-[#E1E3E8]" defaultChecked />
            </label>
            <label className="flex items-center justify-between p-3 hover:bg-[#F5F7FA] rounded-lg cursor-pointer transition-colors">
              <span className="text-sm text-[#313131]">Conformité RGPD</span>
              <input type="checkbox" className="rounded border-[#E1E3E8]" defaultChecked />
            </label>
            <button className="w-full mt-4 px-4 py-2.5 bg-[#FFEBEE] text-[#E92E30] rounded-lg hover:bg-[#FFD6D8] transition-colors text-sm font-semibold">
              Exporter les données
            </button>
          </div>
        </div>

        {/* Language & Localization */}
        <div className="bg-white rounded-xl p-6 border border-[#E1E3E8]">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-[#E8F5E9] rounded-lg flex items-center justify-center">
              <Globe className="w-5 h-5 text-[#6AC259]" />
            </div>
            <h3 className="text-lg font-semibold text-[#313131]">Langue et Localisation</h3>
          </div>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-semibold text-[#313131] mb-2">Langue par défaut</label>
              <select className="w-full px-4 py-2.5 border border-[#E1E3E8] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6789CA]">
                <option>Français</option>
                <option>العربية (Arabe)</option>
                <option>English</option>
                <option>Tamazight</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-semibold text-[#313131] mb-2">Fuseau horaire</label>
              <select className="w-full px-4 py-2.5 border border-[#E1E3E8] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6789CA]">
                <option>GMT+1 (Alger)</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-semibold text-[#313131] mb-2">Format de date</label>
              <select className="w-full px-4 py-2.5 border border-[#E1E3E8] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6789CA]">
                <option>JJ/MM/AAAA</option>
                <option>MM/JJ/AAAA</option>
                <option>AAAA-MM-JJ</option>
              </select>
            </div>
          </div>
        </div>

        {/* Subscription */}
        <div className="bg-white rounded-xl p-6 border border-[#E1E3E8]">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-[#FFF9E6] rounded-lg flex items-center justify-center">
              <CreditCard className="w-5 h-5 text-[#FFEDB2]" />
            </div>
            <h3 className="text-lg font-semibold text-[#313131]">Abonnement</h3>
          </div>
          <div className="space-y-4">
            <div className="p-4 bg-gradient-to-br from-[#E6EFFF] to-[#F3E5F5] rounded-lg border border-[#6789CA] border-opacity-30">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-semibold text-[#313131]">Plan actuel</span>
                <span className="px-2.5 py-1 text-white text-xs font-bold rounded-full" style={{ background: 'linear-gradient(-66.1555deg, rgb(40, 85, 174) 3.1469%, rgb(114, 146, 207) 100%)' }}>PREMIUM</span>
              </div>
              <p className="text-2xl font-bold text-[#313131] mb-1">150,000 DZD/mois</p>
              <p className="text-sm text-[#777]">847 élèves • Toutes fonctionnalités</p>
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between text-sm">
                <span className="text-[#777]">Prochain renouvellement</span>
                <span className="font-semibold text-[#313131]">01 Février 2026</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-[#777]">Méthode de paiement</span>
                <span className="font-semibold text-[#313131]">CIB •••• 1234</span>
              </div>
            </div>
            <button className="w-full px-4 py-2.5 text-white rounded-lg hover:shadow-lg transition-all font-semibold" style={{ background: 'linear-gradient(-66.1555deg, rgb(40, 85, 174) 3.1469%, rgb(114, 146, 207) 100%)' }}>
              Gérer l'abonnement
            </button>
          </div>
        </div>
      </div>

      {/* Save Button */}
      <div className="flex justify-end gap-3">
        <button className="px-6 py-2.5 border border-[#E1E3E8] rounded-lg hover:bg-[#F5F7FA] transition-colors font-semibold text-[#313131]">
          Annuler
        </button>
        <button className="px-6 py-2.5 text-white rounded-lg hover:shadow-lg transition-all font-semibold" style={{ background: 'linear-gradient(-66.1555deg, rgb(40, 85, 174) 3.1469%, rgb(114, 146, 207) 100%)' }}>
          Enregistrer les modifications
        </button>
      </div>
    </div>
  );
}
