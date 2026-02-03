import React, { useState } from 'react';
import { Send, Paperclip, Users, UserPlus, Bell, MessageSquare } from 'lucide-react';
import mascotMessage from 'figma:asset/173ce482f25d35e2f19689bb2bc81209169958cc.png';
import { toast } from 'sonner';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";

interface CommunicationViewProps {
  language: string;
}

export function CommunicationView({ language }: CommunicationViewProps) {
  const [messageType, setMessageType] = useState<'announcement' | 'message'>('announcement');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [selectedRecipient, setSelectedRecipient] = useState('Tous les parents');

  const [recentMessages, setRecentMessages] = useState([
    { id: 1, title: 'Réunion Parents-Enseignants', date: '25 Jan 2026', recipients: 'Tous les parents', status: 'sent', reads: 234 },
    { id: 2, title: 'Modification d\'horaire', date: '20 Jan 2026', recipients: '6ème A, 6ème B', status: 'sent', reads: 89 },
    { id: 3, title: 'Examens de mi-trimestre', date: '15 Jan 2026', recipients: 'Tous les parents', status: 'sent', reads: 512 },
  ]);

  const handleSend = () => {
    if (!subject || !message) {
      toast.error('Veuillez remplir le sujet et le message');
      return;
    }

    const newMessage = {
      id: recentMessages.length + 1,
      title: subject,
      date: new Date().toLocaleDateString('fr-FR', { day: 'numeric', month: 'short', year: 'numeric' }),
      recipients: selectedRecipient,
      status: 'sent',
      reads: 0
    };

    setRecentMessages([newMessage, ...recentMessages]);
    setSubject('');
    setMessage('');
    toast.success('Message envoyé avec succès !');
  };

  return (
    <div className="p-4 md:p-8 space-y-4 md:space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h2 className="text-xl md:text-2xl font-bold text-[#313131]">Communication</h2>
          <p className="text-[#777] mt-1 text-sm md:text-base">Envoyez des messages et annonces aux parents</p>
        </div>
        <img src={mascotMessage} alt="" className="w-16 h-16 md:w-20 md:h-20 self-end md:self-auto" />
      </div>

      {/* Message Type Selector */}
      <div className="bg-white rounded-xl p-2 border border-[#E1E3E8] flex flex-col sm:flex-row">
        <button
          onClick={() => setMessageType('announcement')}
          className={`px-4 md:px-6 py-2.5 rounded-lg font-semibold transition-all text-sm md:text-base flex-1 ${
            messageType === 'announcement'
              ? 'text-white shadow-lg'
              : 'text-[#777] hover:bg-[#F5F7FA]'
          }`}
          style={messageType === 'announcement' ? { background: 'linear-gradient(-66.1555deg, rgb(40, 85, 174) 3.1469%, rgb(114, 146, 207) 100%)' } : {}}
        >
          <Bell className="w-4 h-4 inline mr-2" />
          Annonce Publique
        </button>
        <button
          onClick={() => setMessageType('message')}
          className={`px-4 md:px-6 py-2.5 rounded-lg font-semibold transition-all text-sm md:text-base flex-1 ${
            messageType === 'message'
              ? 'text-white shadow-lg'
              : 'text-[#777] hover:bg-[#F5F7FA]'
          }`}
          style={messageType === 'message' ? { background: 'linear-gradient(-66.1555deg, rgb(40, 85, 174) 3.1469%, rgb(114, 146, 207) 100%)' } : {}}
        >
          <MessageSquare className="w-4 h-4 inline mr-2" />
          Message Privé
        </button>
      </div>

      {/* Compose Message */}
      <div className="bg-white rounded-xl p-4 md:p-6 border border-[#E1E3E8]">
        <h3 className="text-lg font-semibold text-[#313131] mb-4 md:mb-6">
          {messageType === 'announcement' ? 'Nouvelle Annonce' : 'Nouveau Message'}
        </h3>

        <div className="space-y-4 md:space-y-5">
          {/* Recipients */}
          <div>
            <label className="block text-sm font-semibold text-[#313131] mb-2">
              Destinataires
            </label>
            <div className="flex flex-col sm:flex-row gap-3">
              <div className="flex-1 relative">
                <Users className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#B8B8B8]" />
                <Select value={selectedRecipient} onValueChange={setSelectedRecipient}>
                  <SelectTrigger className="w-full pl-10 h-[42px] border-[#E1E3E8] focus:ring-[#6789CA]">
                    <SelectValue placeholder="Sélectionner les destinataires" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Tous les parents">Tous les parents</SelectItem>
                    <SelectItem value="Parents de 6ème A">Parents de 6ème A</SelectItem>
                    <SelectItem value="Parents de 5ème B">Parents de 5ème B</SelectItem>
                    <SelectItem value="Parents de 4ème C">Parents de 4ème C</SelectItem>
                    <SelectItem value="Parents de 3ème A">Parents de 3ème A</SelectItem>
                    <SelectItem value="Sélection personnalisée...">Sélection personnalisée...</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <button className="px-4 py-2.5 border border-[#E1E3E8] rounded-lg hover:bg-[#F5F7FA] transition-colors flex items-center justify-center gap-2 font-semibold text-[#313131]">
                <UserPlus className="w-5 h-5" />
                Ajouter
              </button>
            </div>
            <p className="text-sm text-[#777] mt-2">847 parents sélectionnés</p>
          </div>

          {/* Subject */}
          <div>
            <label className="block text-sm font-semibold text-[#313131] mb-2">
              Sujet
            </label>
            <input
              type="text"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              placeholder="Ex: Journée Portes Ouvertes le 15 Février"
              className="w-full px-4 py-2.5 border border-[#E1E3E8] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6789CA]"
            />
          </div>

          {/* Message */}
          <div>
            <label className="block text-sm font-semibold text-[#313131] mb-2">
              Message
            </label>
            <textarea
              rows={6}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Rédigez votre message ici..."
              className="w-full px-4 py-3 border border-[#E1E3E8] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6789CA] resize-none"
            />
          </div>

          {/* Options */}
          <div className="flex flex-col sm:flex-row flex-wrap gap-4 md:gap-6 p-4 bg-[#F5F7FA] rounded-lg border border-[#E1E3E8]">
            <label className="flex items-center gap-2 cursor-pointer">
              <input type="checkbox" className="rounded border-[#E1E3E8]" defaultChecked />
              <span className="text-sm text-[#313131]">Envoyer notification push</span>
            </label>
            <label className="flex items-center gap-2 cursor-pointer">
              <input type="checkbox" className="rounded border-[#E1E3E8]" />
              <span className="text-sm text-[#313131]">Envoyer par SMS (coût additionnel)</span>
            </label>
            <label className="flex items-center gap-2 cursor-pointer">
              <input type="checkbox" className="rounded border-[#E1E3E8]" />
              <span className="text-sm text-[#313131]">Demander confirmation de lecture</span>
            </label>
          </div>

          {/* Actions */}
          <div className="flex flex-col-reverse sm:flex-row items-center justify-between gap-4 pt-4">
            <button className="w-full sm:w-auto px-4 py-2.5 border border-[#E1E3E8] rounded-lg hover:bg-[#F5F7FA] transition-colors flex items-center justify-center gap-2 font-semibold text-[#313131]">
              <Paperclip className="w-5 h-5" />
              Joindre un fichier
            </button>
            <div className="flex flex-col sm:flex-row w-full sm:w-auto gap-3">
              <button className="px-6 py-2.5 border border-[#E1E3E8] rounded-lg hover:bg-[#F5F7FA] transition-colors font-semibold text-[#313131]">
                Enregistrer comme brouillon
              </button>
              <button 
                onClick={handleSend}
                className="px-6 py-2.5 text-white rounded-lg hover:shadow-lg transition-all flex items-center justify-center gap-2 font-semibold" 
                style={{ background: 'linear-gradient(-66.1555deg, rgb(40, 85, 174) 3.1469%, rgb(114, 146, 207) 100%)' }}
              >
                <Send className="w-5 h-5" />
                Envoyer Maintenant
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Recent Messages */}
      <div className="bg-white rounded-xl p-6 border border-[#E1E3E8]">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-semibold text-[#313131]">Messages Récents</h3>
          <button className="text-sm text-[#6789CA] hover:text-[#2855AE] font-semibold">Voir tout</button>
        </div>

        <div className="space-y-4">
          {recentMessages.map((msg) => (
            <div key={msg.id} className="p-5 border border-[#E1E3E8] rounded-lg hover:border-[#6789CA] transition-colors cursor-pointer">
              <div className="flex items-start justify-between mb-3">
                <div>
                  <h4 className="font-semibold text-[#313131]">{msg.title}</h4>
                  <p className="text-sm text-[#777] mt-1">À: {msg.recipients}</p>
                </div>
                <span className="text-sm text-[#A5A5A5]">{msg.date}</span>
              </div>
              <div className="flex items-center gap-4 pt-3 border-t border-[#E1E3E8]">
                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-[#E8F5E9] text-[#6AC259]">
                  {msg.status === 'sent' ? 'Envoyé' : 'Brouillon'}
                </span>
                <span className="text-sm text-[#777]">
                  {msg.reads} lectures
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
