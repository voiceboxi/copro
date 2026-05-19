import { Ionicons } from '@expo/vector-icons';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { CoproTheme } from '@/constants/theme';

type Props = {
  title: string;
  subtitle?: string;
  onBack?: () => void;
  rightActions?: React.ReactNode;
  variant?: 'main' | 'chat';
};

export function CoproHeader({
  title,
  subtitle,
  onBack,
  rightActions,
  variant = 'main',
}: Props) {
  const insets = useSafeAreaInsets();

  return (
    <View style={[styles.container, { paddingTop: insets.top + 8 }]}>
      <View style={styles.row}>
        {onBack ? (
          <Pressable onPress={onBack} hitSlop={12} style={styles.backBtn}>
            <Ionicons name="arrow-back" size={24} color={CoproTheme.textOnPrimary} />
          </Pressable>
        ) : (
          <View style={styles.logoBadge}>
            <Text style={styles.logoText}>C</Text>
          </View>
        )}
        <View style={styles.titleBlock}>
          <Text style={[styles.title, variant === 'chat' && styles.titleChat]} numberOfLines={1}>
            {title}
          </Text>
          {subtitle ? (
            <Text style={styles.subtitle} numberOfLines={1}>
              {subtitle}
            </Text>
          ) : null}
        </View>
        <View style={styles.actions}>{rightActions}</View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: CoproTheme.header,
    paddingBottom: 12,
    paddingHorizontal: 12,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  backBtn: {
    padding: 4,
  },
  logoBadge: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: 'rgba(255,255,255,0.2)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoText: {
    color: CoproTheme.textOnPrimary,
    fontSize: 20,
    fontWeight: '800',
  },
  titleBlock: {
    flex: 1,
  },
  title: {
    fontSize: 22,
    fontWeight: '700',
    color: CoproTheme.textOnPrimary,
    letterSpacing: 0.5,
  },
  titleChat: {
    fontSize: 18,
    fontWeight: '600',
  },
  subtitle: {
    fontSize: 13,
    color: 'rgba(255,255,255,0.85)',
    marginTop: 2,
  },
  actions: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 20,
  },
});

export function HeaderIconButton({
  name,
  onPress,
}: {
  name: keyof typeof Ionicons.glyphMap;
  onPress?: () => void;
}) {
  return (
    <Pressable onPress={onPress} hitSlop={8}>
      <Ionicons name={name} size={22} color={CoproTheme.textOnPrimary} />
    </Pressable>
  );
}
