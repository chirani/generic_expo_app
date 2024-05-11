import { View, ScrollView, StyleSheet, TouchableOpacity, Dimensions } from 'react-native'
import Text from './Text'
import React from 'react'
import { colors, spacing } from '../../config/Theme'

interface TabsProps {
  titles: string[]
  index: number
  setTabIndex: (index: number) => void
}

const Tabs = ({ titles, index, setTabIndex }: TabsProps) => {
  return (
    <View style={styles.tabContainer}>
      <ScrollView horizontal contentContainerStyle={styles.tabScroller}>
        {titles.map((title, i) => (
          <TouchableOpacity key={i} onPress={() => setTabIndex(i)}>
            <Text
              style={[
                {
                  color: i === index ? colors.primary : colors.text,
                  borderBottomColor: i === index ? colors.primary : 'transparent',
                },
                styles.tab,
              ]}
            >
              {title}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  )
}

const WindowWidth = Dimensions.get('window').width

const styles = StyleSheet.create({
  tabContainer: { width: WindowWidth, height: 'auto' },
  itemContainer: { width: WindowWidth, height: 100 },
  tab: { padding: 8, paddingHorizontal: 14, borderBottomWidth: 3 },
  tabScroller: {
    width: '100%',
    flexDirection: 'row',
  },
  container: {
    flexDirection: 'row',
    gap: spacing.md,
  },
})

export default Tabs
