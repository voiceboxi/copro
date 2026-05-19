import { StyleSheet, Text, View } from 'react-native';

import { CoproTheme } from '@/constants/theme';

type Props = {
  name: string;
  color: string;
  size?: number;
  online?: boolean;
};

export function Avatar({ name, color, size = 52, online }: Props) {
  const initials = name
    .split(' ')
    .slice(0, 2)
    .map((w) => w[0])
    .join('')
    .toUpperCase();

  return (
    <View style={{ width: size, height: size }}>
      <View
        style={[
          styles.circle,
          {
            width: size,
            height: size,
            borderRadius: size / 2,
            backgroundColor: color,
          },
        ]}>
        <Text style={[styles.initials, { fontSize: size * 0.34 }]}>{initials}</Text>
      </View>
      {online && (
        <View
          style={[
            styles.badge,
            {
              width: size * 0.28,
              height: size * 0.28,
              borderRadius: size * 0.14,
              right: 0,
              bottom: 0,
            },
          ]}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  circle: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  initials: {
    color: CoproTheme.textOnPrimary,
    fontWeight: '700',
  },
  badge: {
    position: 'absolute',
    backgroundColor: CoproTheme.online,
    borderWidth: 2,
    borderColor: '#fff',
  },
});
