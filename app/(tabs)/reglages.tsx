import { Ionicons } from '@expo/vector-icons';
import { ScrollView, StyleSheet, Switch, Text, View } from 'react-native';
import { useState } from 'react';

import { Avatar } from '@/components/copro/Avatar';
import { CoproHeader } from '@/components/copro/CoproHeader';
import { CURRENT_USER } from '@/constants/mockData';
import { CoproTheme } from '@/constants/theme';

const MENU = [
  { icon: 'key-outline' as const, label: 'Compte' },
  { icon: 'lock-closed-outline' as const, label: 'Confidentialité' },
  { icon: 'notifications-outline' as const, label: 'Notifications' },
  { icon: 'chatbox-outline' as const, label: 'Discussions' },
  { icon: 'help-circle-outline' as const, label: 'Aide' },
  { icon: 'heart-outline' as const, label: 'À propos de COPRO' },
];

export default function ReglagesScreen() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <View style={styles.screen}>
      <CoproHeader title="Réglages" />
      <ScrollView>
        <View style={styles.profile}>
          <Avatar name={CURRENT_USER.name} color={CoproTheme.primary} size={72} />
          <Text style={styles.profileName}>{CURRENT_USER.name}</Text>
          <Text style={styles.profileResidence}>{CURRENT_USER.residence}</Text>
          <Text style={styles.profilePhone}>{CURRENT_USER.phone}</Text>
        </View>
        <View style={styles.menu}>
          {MENU.map((item) => (
            <View key={item.label} style={styles.menuRow}>
              <Ionicons name={item.icon} size={22} color={CoproTheme.textSecondary} />
              <Text style={styles.menuLabel}>{item.label}</Text>
              <Ionicons name="chevron-forward" size={20} color={CoproTheme.textSecondary} />
            </View>
          ))}
          <View style={styles.menuRow}>
            <Ionicons name="moon-outline" size={22} color={CoproTheme.textSecondary} />
            <Text style={styles.menuLabel}>Mode sombre</Text>
            <Switch
              value={darkMode}
              onValueChange={setDarkMode}
              trackColor={{ true: CoproTheme.primaryLight }}
            />
          </View>
        </View>
        <Text style={styles.version}>COPRO v1.0.0 — © 2026</Text>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: CoproTheme.background,
  },
  profile: {
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingVertical: 28,
    marginBottom: 8,
  },
  profileName: {
    fontSize: 22,
    fontWeight: '700',
    color: CoproTheme.text,
    marginTop: 12,
  },
  profileResidence: {
    fontSize: 14,
    color: CoproTheme.textSecondary,
    marginTop: 4,
    textAlign: 'center',
    paddingHorizontal: 24,
  },
  profilePhone: {
    fontSize: 14,
    color: CoproTheme.primary,
    marginTop: 8,
  },
  menu: {
    backgroundColor: '#fff',
    marginBottom: 24,
  },
  menuRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 14,
    gap: 16,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: CoproTheme.border,
  },
  menuLabel: {
    flex: 1,
    fontSize: 16,
    color: CoproTheme.text,
  },
  version: {
    textAlign: 'center',
    color: CoproTheme.textSecondary,
    fontSize: 13,
    marginBottom: 32,
  },
});
