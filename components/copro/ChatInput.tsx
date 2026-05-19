import { Ionicons } from '@expo/vector-icons';
import { useState } from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  Pressable,
  StyleSheet,
  TextInput,
  View,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { CoproTheme } from '@/constants/theme';

type Props = {
  onSend: (text: string) => void;
};

export function ChatInput({ onSend }: Props) {
  const [text, setText] = useState('');
  const insets = useSafeAreaInsets();
  const canSend = text.trim().length > 0;

  const handleSend = () => {
    if (!canSend) return;
    onSend(text);
    setText('');
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      keyboardVerticalOffset={0}>
      <View style={[styles.bar, { paddingBottom: Math.max(insets.bottom, 8) }]}>
        <Pressable style={styles.iconBtn}>
          <Ionicons name="happy-outline" size={26} color={CoproTheme.textSecondary} />
        </Pressable>
        <View style={styles.inputWrap}>
          <TextInput
            style={styles.input}
            value={text}
            onChangeText={setText}
            placeholder="Message"
            placeholderTextColor={CoproTheme.textSecondary}
            multiline
            maxLength={2000}
          />
          {!canSend && (
            <Pressable style={styles.attach}>
              <Ionicons name="attach" size={22} color={CoproTheme.textSecondary} />
            </Pressable>
          )}
        </View>
        <Pressable
          style={[styles.sendBtn, canSend && styles.sendBtnActive]}
          onPress={handleSend}
          disabled={!canSend}>
          <Ionicons
            name={canSend ? 'send' : 'mic'}
            size={22}
            color={canSend ? '#fff' : CoproTheme.textSecondary}
          />
        </Pressable>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  bar: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    paddingHorizontal: 6,
    paddingTop: 8,
    backgroundColor: '#F0F2F5',
    gap: 6,
  },
  iconBtn: {
    padding: 8,
    marginBottom: 4,
  },
  inputWrap: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-end',
    backgroundColor: '#fff',
    borderRadius: 24,
    paddingHorizontal: 14,
    paddingVertical: 8,
    minHeight: 44,
    maxHeight: 120,
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: CoproTheme.text,
    maxHeight: 100,
    padding: 0,
  },
  attach: {
    padding: 4,
    marginLeft: 4,
  },
  sendBtn: {
    width: 44,
    height: 44,
    borderRadius: 22,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 4,
  },
  sendBtnActive: {
    backgroundColor: CoproTheme.primaryLight,
  },
});
