import React, { useState } from 'react';
import { Search, Inbox, Send, Archive, Trash2, Reply, Star, Paperclip } from 'lucide-react';

interface MessagesViewProps {
  language: string;
}

export function MessagesView({ language }: MessagesViewProps) {
  const [selectedMessage, setSelectedMessage] = useState<number | null>(null);
  const [activeTab, setActiveTab] = useState<'inbox' | 'sent'>('inbox');

  const messages = [
    {
      id: 1,
      from: 'Mme. Salima Rahmani',
      role: 'Professeur Principal - 6ème A',
      subject: 'Réunion Parent-Professeur',
      preview: 'Bonjour M. Mansouri, Je souhaiterais organiser une réunion pour discuter des progrès d\'Ahmed...',
      content: 'Bonjour M. Mansouri,\n\nJe souhaiterais organiser une réunion pour discuter des progrès d\'Ahmed en mathématiques. Il montre de très bonnes capacités mais pourrait bénéficier d\'un soutien supplémentaire.\n\nSeriez-vous disponible le 20 février à 14h00?\n\nCordialement,\nMme. Rahmani',
      date: '28 Jan 2026',
      time: '14:30',
      unread: true,
      starred: true,
      hasAttachment: false,
    },
    {
      id: 2,
      from: 'Direction - Les Hirondelles',
      role: 'Administration',
      subject: 'Journée Portes Ouvertes - 15 Février',
      preview: 'Chers parents, Nous avons le plaisir de vous inviter à notre Journée Portes Ouvertes...',
      content: 'Chers parents,\n\nNous avons le plaisir de vous inviter à notre Journée Portes Ouvertes le 15 février 2026 de 9h00 à 16h00.\n\nAu programme:\n- Visite des installations\n- Rencontre avec les enseignants\n- Présentation des activités parascolaires\n- Démonstrations des élèves\n\nNous espérons vous y voir nombreux!\n\nCordialement,\nLa Direction',
      date: '27 Jan 2026',
      time: '10:15',
      unread: true,
      starred: false,
      hasAttachment: true,
    },
    {
      id: 3,
      from: 'M. Karim Bouazza',
      role: 'Professeur Principal - 4ème C',
      subject: 'Félicitations pour Yasmine',
      preview: 'Bonjour, Je tenais à vous féliciter pour les excellents résultats de Yasmine ce trimestre...',
      content: 'Bonjour M. Mansouri,\n\nJe tenais à vous féliciter pour les excellents résultats de Yasmine ce trimestre. Elle fait preuve d\'une grande assiduité et d\'un sérieux remarquable dans son travail.\n\nContinuez à l\'encourager!\n\nCordialement,\nM. Bouazza',
      date: '25 Jan 2026',
      time: '16:45',
      unread: false,
      starred: true,
      hasAttachment: false,
    },
    {
      id: 4,
      from: 'Service Comptabilité',
      role: 'Administration',
      subject: 'Facture Janvier 2026',
      preview: 'Bonjour, Veuillez trouver ci-joint la facture pour le mois de janvier 2026...',
      content: 'Bonjour M. Mansouri,\n\nVeuillez trouver ci-joint la facture pour le mois de janvier 2026.\n\nMontant: 15,000 DA\nÉchéance: 10 Février 2026\n\nMerci de votre confiance.\n\nCordialement,\nService Comptabilité',
      date: '23 Jan 2026',
      time: '09:00',
      unread: false,
      starred: false,
      hasAttachment: true,
    },
  ];

  const selectedMsg = selectedMessage !== null ? messages[selectedMessage] : null;

  return (
    <div className="p-3 sm:p-4 md:p-6 lg:p-8 space-y-3 sm:space-y-4 md:space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4">
        <div>
          <h2 className="text-xl sm:text-2xl font-bold text-[#313131]">Messages</h2>
          <p className="text-sm text-[#777] mt-1">{messages.filter(m => m.unread).length} messages non lus</p>
        </div>
        <button className="px-4 sm:px-5 py-2 sm:py-2.5 rounded-lg text-sm sm:text-base text-white font-semibold hover:shadow-lg transition-all flex items-center justify-center gap-2 shadow-md" style={{ background: 'linear-gradient(-66.1555deg, rgb(40, 85, 174) 3.1469%, rgb(114, 146, 207) 100%)' }}>
          <Send className="w-4 h-4 sm:w-5 sm:h-5" />
          <span className="hidden sm:inline">Nouveau Message</span>
          <span className="sm:hidden">Nouveau</span>
        </button>
      </div>

      <div className="bg-white rounded-lg sm:rounded-xl border border-[#E1E3E8] overflow-hidden shadow-sm">
        <div className="border-b border-[#E1E3E8] p-3 sm:p-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#B8B8B8]" />
            <input
              type="text"
              placeholder="Rechercher dans les messages..."
              className="w-full pl-10 pr-4 py-2.5 border border-[#E1E3E8] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6789CA] text-sm"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3">
          {/* Messages List - Hidden on mobile if message is selected */}
          <div className={`lg:col-span-1 border-r border-[#E1E3E8] overflow-y-auto max-h-[600px] ${selectedMessage !== null ? 'hidden lg:block' : 'block'}`}>
            <div className="flex border-b border-[#E1E3E8]">
              <button
                onClick={() => setActiveTab('inbox')}
                className={`flex-1 px-4 py-3 text-sm font-semibold transition-colors ${
                  activeTab === 'inbox'
                    ? 'text-[#6789CA] border-b-2 border-[#6789CA]'
                    : 'text-[#777] hover:text-[#313131]'
                }`}
              >
                <Inbox className="w-4 h-4 inline mr-2" />
                Reçus
              </button>
              <button
                onClick={() => setActiveTab('sent')}
                className={`flex-1 px-4 py-3 text-sm font-semibold transition-colors ${
                  activeTab === 'sent'
                    ? 'text-[#6789CA] border-b-2 border-[#6789CA]'
                    : 'text-[#777] hover:text-[#313131]'
                }`}
              >
                <Send className="w-4 h-4 inline mr-2" />
                Envoyés
              </button>
            </div>

            <div className="divide-y divide-[#E1E3E8]">
              {messages.map((message, index) => (
                <div
                  key={message.id}
                  onClick={() => setSelectedMessage(index)}
                  className={`p-4 cursor-pointer transition-colors ${
                    selectedMessage === index
                      ? 'bg-[#E6EFFF] border-l-4 border-[#6789CA]'
                      : message.unread
                      ? 'bg-white hover:bg-[#F5F7FA]'
                      : 'bg-[#FAFAFA] hover:bg-[#F5F7FA]'
                  }`}
                >
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <div className="flex items-center gap-2 flex-1 min-w-0">
                      {message.starred && <Star className="w-4 h-4 text-[#FFC143] fill-[#FFC143] flex-shrink-0" />}
                      <p className={`text-sm truncate ${message.unread ? 'font-bold text-[#313131]' : 'font-semibold text-[#777]'}`}>
                        {message.from}
                      </p>
                    </div>
                    {message.hasAttachment && <Paperclip className="w-4 h-4 text-[#777] flex-shrink-0" />}
                  </div>
                  <p className="text-xs text-[#777] mb-1">{message.role}</p>
                  <p className={`text-sm mb-2 ${message.unread ? 'font-semibold text-[#313131]' : 'text-[#777]'}`}>
                    {message.subject}
                  </p>
                  <p className="text-xs text-[#A5A5A5] line-clamp-2">{message.preview}</p>
                  <p className="text-xs text-[#A5A5A5] mt-2">{message.date} • {message.time}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Message Detail - Visible on mobile if message selected */}
          <div className={`lg:col-span-2 p-6 bg-[#FAFAFA] ${selectedMessage !== null ? 'block' : 'hidden lg:block'}`}>
            {selectedMsg ? (
              <div className="space-y-6">
                <button 
                  onClick={() => setSelectedMessage(null)}
                  className="lg:hidden mb-4 flex items-center text-[#6789CA] font-semibold"
                >
                  <Reply className="w-4 h-4 mr-2 transform rotate-180" />
                  Retour à la boîte de réception
                </button>
                <div className="bg-white rounded-lg p-6 border border-[#E1E3E8]">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-[#313131] mb-2">{selectedMsg.subject}</h3>
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full flex items-center justify-center text-white text-sm font-bold" style={{ background: 'linear-gradient(-66.1555deg, rgb(40, 85, 174) 3.1469%, rgb(114, 146, 207) 100%)' }}>
                          {selectedMsg.from.split(' ').map(n => n[0]).join('').slice(0, 2)}
                        </div>
                        <div>
                          <p className="font-semibold text-[#313131]">{selectedMsg.from}</p>
                          <p className="text-xs text-[#777]">{selectedMsg.role}</p>
                        </div>
                      </div>
                    </div>
                    <div className="flex gap-2">
                       <button className="p-2 hover:bg-[#F5F7FA] rounded-lg transition-colors">
                        <Star className={`w-5 h-5 ${selectedMsg.starred ? 'text-[#FFC143] fill-[#FFC143]' : 'text-[#777]'}`} />
                      </button>
                      <button className="p-2 hover:bg-[#F5F7FA] rounded-lg transition-colors">
                        <Archive className="w-5 h-5 text-[#777]" />
                      </button>
                      <button className="p-2 hover:bg-[#F5F7FA] rounded-lg transition-colors">
                        <Trash2 className="w-5 h-5 text-[#E92E30]" />
                      </button>
                    </div>
                  </div>
                  <p className="text-xs text-[#A5A5A5] mb-4">{selectedMsg.date} à {selectedMsg.time}</p>
                  <div className="prose prose-sm max-w-none">
                    <p className="text-[#313131] whitespace-pre-line">{selectedMsg.content}</p>
                  </div>
                  {selectedMsg.hasAttachment && (
                    <div className="mt-4 pt-4 border-t border-[#E1E3E8]">
                      <p className="text-sm font-semibold text-[#313131] mb-2">Pièces jointes</p>
                      <div className="flex items-center gap-3 p-3 bg-[#F5F7FA] rounded-lg">
                        <Paperclip className="w-5 h-5 text-[#6789CA]" />
                        <span className="text-sm text-[#313131]">document.pdf</span>
                        <span className="text-xs text-[#777]">(245 KB)</span>
                      </div>
                    </div>
                  )}
                </div>

                <div className="flex gap-3">
                  <button className="flex-1 px-5 py-2.5 rounded-lg text-white font-semibold hover:shadow-lg transition-all flex items-center justify-center gap-2" style={{ background: 'linear-gradient(-66.1555deg, rgb(40, 85, 174) 3.1469%, rgb(114, 146, 207) 100%)' }}>
                    <Reply className="w-5 h-5" />
                    Répondre
                  </button>
                </div>
              </div>
            ) : (
              <div className="flex items-center justify-center h-full">
                <p className="text-[#777]">Sélectionnez un message pour le lire</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
