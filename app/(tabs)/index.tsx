import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { useMemo } from 'react';
import { FlatList, Pressable, StyleSheet, Text, View } from 'react-native';

import { ChatListItem } from '@/components/copro/ChatListItem';
import { CoproHeader, HeaderIconButton } from '@/components/copro/CoproHeader';
import { SearchBar } from '@/components/copro/SearchBar';
import { useChat } from '@/context/ChatContext';
import { CoproTheme } from '@/constants/theme';

export default function DiscussionsScreen() {
  const router = useRouter();
  const { chats, searchQuery, setSearchQuery } = useChat();

  const filtered = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    if (!q) return [...chats].sort((a, b) => (b.pinned ? 1 : 0) - (a.pinned ? 1 : 0));
    return chats.filter(
      (c) =>
        c.name.toLowerCase().includes(q) || c.lastMessage.toLowerCase().includes(q),
    );
  }, [chats, searchQuery]);

  return (
    <View style={styles.screen}>
      <CoproHeader
        title="COPRO"
        subtitle="Messagerie de copropriété"
        rightActions={
          <>
            <HeaderIconButton name="camera-outline" />
            <HeaderIconButton name="create-outline" />
            <HeaderIconButton name="ellipsis-vertical" />
          </>
        }
      />
      <SearchBar value={searchQuery} onChangeText={setSearchQuery} />
      <FlatList
        data={filtered}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <ChatListItem chat={item} onPress={() => router.push(`/chat/${item.id}`)} />
        )}
        contentContainerStyle={filtered.length === 0 ? styles.emptyList : undefined}
        ListEmptyComponent={
          <Text style={styles.empty}>Aucune discussion trouvée</Text>
        }
      />
      <Pressable style={styles.fab}>
        <Ionicons name="chatbubble" size={26} color="#fff" />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: CoproTheme.background,
  },
  emptyList: {
    flexGrow: 1,
    justifyContent: 'center',
  },
  empty: {
    textAlign: 'center',
    color: CoproTheme.textSecondary,
    fontSize: 16,
  },
  fab: {
    position: 'absolute',
    right: 20,
    bottom: 24,
    width: 58,
    height: 58,
    borderRadius: 29,
    backgroundColor: CoproTheme.accent,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 6,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.25,
    shadowRadius: 6,
  },
});
