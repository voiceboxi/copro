import { FlatList, StyleSheet, View } from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { useMemo } from 'react';

import { ChatInput } from '@/components/copro/ChatInput';
import { CoproHeader, HeaderIconButton } from '@/components/copro/CoproHeader';
import { MessageBubble } from '@/components/copro/MessageBubble';
import { CHATS } from '@/constants/mockData';
import { useChat } from '@/context/ChatContext';
import { CoproTheme } from '@/constants/theme';

export function generateStaticParams() {
  return CHATS.map((chat) => ({ id: chat.id }));
}

export default function ChatScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const router = useRouter();
  const { getMessages, sendMessage } = useChat();

  const chat = useMemo(() => CHATS.find((c) => c.id === id), [id]);
  const messages = getMessages(id ?? '');

  if (!chat) return null;

  return (
    <View style={styles.screen}>
      <CoproHeader
        variant="chat"
        title={chat.name}
        subtitle={chat.isGroup ? chat.subtitle : chat.online ? 'en ligne' : undefined}
        onBack={() => router.back()}
        rightActions={
          <>
            <HeaderIconButton name="videocam" />
            <HeaderIconButton name="call" />
            <HeaderIconButton name="ellipsis-vertical" />
          </>
        }
      />
      <View style={styles.chatArea}>
        <FlatList
          data={messages}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <MessageBubble message={item} />}
          contentContainerStyle={styles.messageList}
        />
      </View>
      <ChatInput onSend={(text) => sendMessage(id!, text)} />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: CoproTheme.chatBackground,
  },
  chatArea: {
    flex: 1,
    backgroundColor: CoproTheme.chatBackground,
  },
  messageList: {
    paddingVertical: 12,
    flexGrow: 1,
    justifyContent: 'flex-end',
  },
});
