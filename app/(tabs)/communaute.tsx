import { Ionicons } from '@expo/vector-icons';
import { FlatList, StyleSheet, Text, View } from 'react-native';

import { CoproHeader } from '@/components/copro/CoproHeader';
import { COMMUNAUTE } from '@/constants/mockData';
import { CoproTheme } from '@/constants/theme';

const iconMap: Record<string, keyof typeof Ionicons.glyphMap> = {
  pricetag: 'pricetag',
  heart: 'heart',
  calendar: 'calendar',
  'document-text': 'document-text',
};

export default function CommunauteScreen() {
  return (
    <View style={styles.screen}>
      <CoproHeader title="Communauté" subtitle="Espaces de la résidence" />
      <View style={styles.hero}>
        <Text style={styles.heroTitle}>Bienvenue sur COPRO</Text>
        <Text style={styles.heroText}>
          Échangez avec vos voisins, suivez les annonces et les événements de votre immeuble.
        </Text>
      </View>
      <FlatList
        data={COMMUNAUTE}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.list}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <View style={styles.iconWrap}>
              <Ionicons name={iconMap[item.icon] ?? 'folder'} size={24} color={CoproTheme.primary} />
            </View>
            <View style={styles.cardBody}>
              <Text style={styles.cardTitle}>{item.title}</Text>
              {item.count > 0 && (
                <Text style={styles.cardSub}>
                  {item.count} {item.count > 1 ? 'nouveautés' : 'nouveauté'}
                </Text>
              )}
            </View>
            <Ionicons name="chevron-forward" size={20} color={CoproTheme.textSecondary} />
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: CoproTheme.background,
  },
  hero: {
    margin: 16,
    padding: 20,
    borderRadius: 16,
    backgroundColor: CoproTheme.primary,
  },
  heroTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#fff',
    marginBottom: 8,
  },
  heroText: {
    fontSize: 15,
    lineHeight: 22,
    color: 'rgba(255,255,255,0.9)',
  },
  list: {
    paddingHorizontal: 16,
    gap: 10,
  },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 12,
    gap: 14,
  },
  iconWrap: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: '#E8F5F0',
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardBody: {
    flex: 1,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: CoproTheme.text,
  },
  cardSub: {
    fontSize: 13,
    color: CoproTheme.accent,
    marginTop: 2,
    fontWeight: '500',
  },
});
