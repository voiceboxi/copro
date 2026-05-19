import React, { createContext, useCallback, useContext, useMemo, useState } from 'react';

import { CHATS, MESSAGES, type Message } from '@/constants/mockData';

type ChatContextValue = {
  chats: typeof CHATS;
  getMessages: (chatId: string) => Message[];
  sendMessage: (chatId: string, text: string) => void;
  searchQuery: string;
  setSearchQuery: (q: string) => void;
};

const ChatContext = createContext<ChatContextValue | null>(null);

function formatTime() {
  const d = new Date();
  return `${d.getHours().toString().padStart(2, '0')}:${d.getMinutes().toString().padStart(2, '0')}`;
}

export function ChatProvider({ children }: { children: React.ReactNode }) {
  const [messagesByChat, setMessagesByChat] = useState<Record<string, Message[]>>(MESSAGES);
  const [chats, setChats] = useState(CHATS);
  const [searchQuery, setSearchQuery] = useState('');

  const getMessages = useCallback(
    (chatId: string) => messagesByChat[chatId] ?? [],
    [messagesByChat],
  );

  const sendMessage = useCallback((chatId: string, text: string) => {
    const trimmed = text.trim();
    if (!trimmed) return;

    const newMsg: Message = {
      id: `local-${Date.now()}`,
      text: trimmed,
      time: formatTime(),
      fromMe: true,
      status: 'sent',
    };

    setMessagesByChat((prev) => ({
      ...prev,
      [chatId]: [...(prev[chatId] ?? []), newMsg],
    }));

    setChats((prev) =>
      prev.map((c) =>
        c.id === chatId ? { ...c, lastMessage: trimmed, time: formatTime(), unread: 0 } : c,
      ),
    );
  }, []);

  const value = useMemo(
    () => ({ chats, getMessages, sendMessage, searchQuery, setSearchQuery }),
    [chats, getMessages, sendMessage, searchQuery],
  );

  return <ChatContext.Provider value={value}>{children}</ChatContext.Provider>;
}

export function useChat() {
  const ctx = useContext(ChatContext);
  if (!ctx) throw new Error('useChat must be used within ChatProvider');
  return ctx;
}
