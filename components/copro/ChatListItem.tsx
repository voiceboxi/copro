import { Ionicons } from '@expo/vector-icons';
import { Pressable, StyleSheet, Text, View } from 'react-native';

import { Avatar } from '@/components/copro/Avatar';
import type { Chat } from '@/constants/mockData';
import { CoproTheme } from '@/constants/theme';

type Props = {
  chat: Chat;
  onPress: () => void;
};

export function ChatListItem({ chat, onPress }: Props) {
  return (
    <Pressable
      style={({ pressed }) => [styles.row, pressed && styles.pressed]}
      onPress={onPress}>
      <Avatar name={chat.name} color={chat.avatarColor} online={chat.online} />
      <View style={styles.content}>
        <View style={styles.topRow}>
          <Text style={styles.name} numberOfLines={1}>
            {chat.name}
          </Text>
          <Text style={[styles.time, chat.unread > 0 && styles.timeUnread]}>{chat.time}</Text>
        </View>
        <View style={styles.bottomRow}>
          <View style={styles.messageRow}>
            {chat.lastMessage.startsWith('Vous :') || chat.unread === 0 ? null : (
              <Ionicons
                name="checkmark-done"
                size={16}
                color={CoproTheme.textSecondary}
                style={styles.tick}
              />
            )}
            <Text style={styles.lastMessage} numberOfLines={1}>
              {chat.lastMessage}
            </Text>
          </View>
          <View style={styles.badges}>
            {chat.pinned && (
              <Ionicons name="pin" size={14} color={CoproTheme.textSecondary} style={styles.pin} />
            )}
            {chat.unread > 0 && (
              <View style={styles.unreadBadge}>
                <Text style={styles.unreadText}>{chat.unread}</Text>
              </View>
            )}
          </View>
        </View>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
    gap: 14,
    backgroundColor: '#fff',
  },
  pressed: {
    backgroundColor: '#F5F6F6',
  },
  content: {
    flex: 1,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: CoproTheme.border,
    paddingBottom: 12,
  },
  topRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 4,
  },
  name: {
    flex: 1,
    fontSize: 17,
    fontWeight: '600',
    color: CoproTheme.text,
    marginRight: 8,
  },
  time: {
    fontSize: 12,
    color: CoproTheme.textSecondary,
  },
  timeUnread: {
    color: CoproTheme.accent,
    fontWeight: '600',
  },
  bottomRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  messageRow: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  tick: {
    marginRight: 4,
  },
  lastMessage: {
    flex: 1,
    fontSize: 15,
    color: CoproTheme.textSecondary,
  },
  badges: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    marginLeft: 8,
  },
  pin: {
    transform: [{ rotate: '45deg' }],
  },
  unreadBadge: {
    minWidth: 22,
    height: 22,
    borderRadius: 11,
    backgroundColor: CoproTheme.accent,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 6,
  },
  unreadText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: '700',
  },
});
