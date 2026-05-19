import { Ionicons } from '@expo/vector-icons';
import { FlatList, StyleSheet, Text, View } from 'react-native';

import { Avatar } from '@/components/copro/Avatar';
import { CoproHeader, HeaderIconButton } from '@/components/copro/CoproHeader';
import { ACTUALITES } from '@/constants/mockData';
import { CoproTheme } from '@/constants/theme';

export default function ActualitesScreen() {
  return (
    <View style={styles.screen}>
      <CoproHeader
        title="Actualités"
        rightActions={
          <>
            <HeaderIconButton name="search" />
            <HeaderIconButton name="ellipsis-vertical" />
          </>
        }
      />
      <View style={styles.mineRow}>
        <View style={styles.mineAvatarWrap}>
          <Avatar name="Vous" color={CoproTheme.primary} size={56} />
          <View style={styles.addBadge}>
            <Ionicons name="add" size={16} color="#fff" />
          </View>
        </View>
        <View>
          <Text style={styles.mineTitle}>Ma publication</Text>
          <Text style={styles.mineSub}>Appuyez pour ajouter une actualité</Text>
        </View>
      </View>
      <Text style={styles.section}>Récents</Text>
      <FlatList
        data={ACTUALITES}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.row}>
            <View style={[styles.ring, !item.viewed && styles.ringNew]}>
              <Avatar name={item.author} color={item.avatarColor} size={52} />
            </View>
            <View style={styles.rowText}>
              <Text style={styles.author}>{item.author}</Text>
              <Text style={styles.preview} numberOfLines={1}>
                {item.preview}
              </Text>
              <Text style={styles.time}>{item.time}</Text>
            </View>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#fff',
  },
  mineRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
    padding: 16,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: CoproTheme.border,
  },
  mineAvatarWrap: {
    position: 'relative',
  },
  addBadge: {
    position: 'absolute',
    right: -2,
    bottom: -2,
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: CoproTheme.accent,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: '#fff',
  },
  mineTitle: {
    fontSize: 17,
    fontWeight: '600',
    color: CoproTheme.text,
  },
  mineSub: {
    fontSize: 14,
    color: CoproTheme.textSecondary,
    marginTop: 2,
  },
  section: {
    fontSize: 14,
    fontWeight: '600',
    color: CoproTheme.textSecondary,
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 8,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
    gap: 14,
  },
  ring: {
    padding: 2,
    borderRadius: 30,
    borderWidth: 2,
    borderColor: CoproTheme.border,
  },
  ringNew: {
    borderColor: CoproTheme.accent,
  },
  rowText: {
    flex: 1,
  },
  author: {
    fontSize: 16,
    fontWeight: '600',
    color: CoproTheme.text,
  },
  preview: {
    fontSize: 14,
    color: CoproTheme.textSecondary,
    marginTop: 2,
  },
  time: {
    fontSize: 12,
    color: CoproTheme.textSecondary,
    marginTop: 4,
  },
});
