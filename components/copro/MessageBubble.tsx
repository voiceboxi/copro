import { Ionicons } from '@expo/vector-icons';
import { StyleSheet, Text, View } from 'react-native';

import type { Message } from '@/constants/mockData';
import { CoproTheme } from '@/constants/theme';

type Props = {
  message: Message;
};

function StatusIcon({ status }: { status?: Message['status'] }) {
  if (!status) return null;
  const name =
    status === 'read' ? 'checkmark-done' : status === 'delivered' ? 'checkmark-done' : 'checkmark';
  const color = status === 'read' ? '#53BDEB' : CoproTheme.textSecondary;
  return <Ionicons name={name} size={14} color={color} style={styles.statusIcon} />;
}

export function MessageBubble({ message }: Props) {
  const isMe = message.fromMe;

  return (
    <View style={[styles.wrapper, isMe ? styles.wrapperOut : styles.wrapperIn]}>
      <View style={[styles.bubble, isMe ? styles.bubbleOut : styles.bubbleIn]}>
        <Text style={styles.text}>{message.text}</Text>
        <View style={styles.meta}>
          <Text style={styles.time}>{message.time}</Text>
          {isMe && <StatusIcon status={message.status} />}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    marginVertical: 2,
    paddingHorizontal: 8,
  },
  wrapperIn: {
    alignItems: 'flex-start',
  },
  wrapperOut: {
    alignItems: 'flex-end',
  },
  bubble: {
    maxWidth: '82%',
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingTop: 6,
    paddingBottom: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.06,
    shadowRadius: 1,
    elevation: 1,
  },
  bubbleIn: {
    backgroundColor: CoproTheme.bubbleIn,
    borderTopLeftRadius: 0,
  },
  bubbleOut: {
    backgroundColor: CoproTheme.bubbleOut,
    borderTopRightRadius: 0,
  },
  text: {
    fontSize: 16,
    lineHeight: 22,
    color: CoproTheme.text,
  },
  meta: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginTop: 2,
    gap: 2,
  },
  time: {
    fontSize: 11,
    color: CoproTheme.textSecondary,
  },
  statusIcon: {
    marginLeft: 2,
  },
});
