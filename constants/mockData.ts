export type MessageStatus = 'sent' | 'delivered' | 'read';

export interface Message {
  id: string;
  text: string;
  time: string;
  fromMe: boolean;
  status?: MessageStatus;
}

export interface Chat {
  id: string;
  name: string;
  lastMessage: string;
  time: string;
  unread: number;
  avatarColor: string;
  isGroup: boolean;
  subtitle?: string;
  pinned?: boolean;
  online?: boolean;
}

export interface Actualite {
  id: string;
  author: string;
  avatarColor: string;
  time: string;
  preview: string;
  viewed: boolean;
}

export const CURRENT_USER = {
  name: 'Vous',
  residence: 'Résidence Les Jardins — Bât. A',
  phone: '+33 6 12 34 56 78',
};

export const CHATS: Chat[] = [
  {
    id: '1',
    name: 'Assemblée générale 2026',
    lastMessage: 'Marie : Le PV sera disponible demain.',
    time: '14:32',
    unread: 3,
    avatarColor: '#6366F1',
    isGroup: true,
    subtitle: '24 membres',
    pinned: true,
  },
  {
    id: '2',
    name: 'Syndic — Accueil',
    lastMessage: 'Travaux ascenseur confirmés du 12 au 18.',
    time: '11:05',
    unread: 1,
    avatarColor: '#0B6E4F',
    isGroup: false,
    online: true,
  },
  {
    id: '3',
    name: 'Voisins — Étage 3',
    lastMessage: 'Pierre : Qui peut garder un colis ?',
    time: 'Hier',
    unread: 0,
    avatarColor: '#F59E0B',
    isGroup: true,
    subtitle: '8 membres',
  },
  {
    id: '4',
    name: 'Sophie Martin',
    lastMessage: 'Merci pour l’info sur la consigne !',
    time: 'Hier',
    unread: 0,
    avatarColor: '#EC4899',
    isGroup: false,
  },
  {
    id: '5',
    name: 'Alertes immeuble',
    lastMessage: 'Coupure eau chaude samedi 8h–12h.',
    time: 'Lun.',
    unread: 0,
    avatarColor: '#EF4444',
    isGroup: true,
    subtitle: 'Tous les résidents',
    pinned: true,
  },
  {
    id: '6',
    name: 'Jean Dupont',
    lastMessage: 'À tout à l’heure en AG.',
    time: 'Dim.',
    unread: 0,
    avatarColor: '#3B82F6',
    isGroup: false,
  },
];

export const MESSAGES: Record<string, Message[]> = {
  '1': [
    { id: 'm1', text: 'Bonjour à tous, l’ordre du jour de l’AG est en pièce jointe.', time: '09:15', fromMe: false },
    { id: 'm2', text: 'Merci ! Je serai présent.', time: '09:22', fromMe: true, status: 'read' },
    { id: 'm3', text: 'Marie : Le PV sera disponible demain.', time: '14:32', fromMe: false },
  ],
  '2': [
    { id: 'm1', text: 'Bonjour, une question sur les charges du trimestre.', time: '10:40', fromMe: true, status: 'read' },
    { id: 'm2', text: 'Travaux ascenseur confirmés du 12 au 18.', time: '11:05', fromMe: false },
  ],
  '3': [
    { id: 'm1', text: 'Pierre : Qui peut garder un colis vendredi ?', time: '18:20', fromMe: false },
  ],
  '4': [
    { id: 'm1', text: 'La consigne est ouverte jusqu’à 20h.', time: '16:00', fromMe: true, status: 'delivered' },
    { id: 'm2', text: 'Merci pour l’info sur la consigne !', time: '16:45', fromMe: false },
  ],
  '5': [
    { id: 'm1', text: 'Coupure eau chaude samedi 8h–12h.', time: '08:00', fromMe: false },
  ],
  '6': [
    { id: 'm1', text: 'À tout à l’heure en AG.', time: '19:30', fromMe: false },
  ],
};

export const ACTUALITES: Actualite[] = [
  { id: 'a1', author: 'Syndic', avatarColor: '#0B6E4F', time: 'Il y a 2 h', preview: 'Rappel : AG le 24 mai', viewed: false },
  { id: 'a2', author: 'Conseil syndical', avatarColor: '#6366F1', time: 'Hier', preview: 'Photos des travaux hall', viewed: true },
  { id: 'a3', author: 'Marie L.', avatarColor: '#EC4899', time: 'Hier', preview: 'Plantation jardin partagé', viewed: true },
];

export const COMMUNAUTE = [
  { id: 'c1', title: 'Petites annonces', icon: 'pricetag' as const, count: 12 },
  { id: 'c2', title: 'Entraide & services', icon: 'heart' as const, count: 5 },
  { id: 'c3', title: 'Événements résidence', icon: 'calendar' as const, count: 2 },
  { id: 'c4', title: 'Documents & règlement', icon: 'document-text' as const, count: 0 },
];
