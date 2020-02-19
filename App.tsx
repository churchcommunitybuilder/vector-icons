import React from 'react'
import {
  SafeAreaView,
  StyleSheet,
  Text,
  ScrollView,
  View,
  SectionList,
} from 'react-native'

import Icon from './src/Icon'
import * as Icons from './src/icons'

function IconRow({ item: icon }) {
  return (
    <View key={icon} style={styles.iconDemo}>
      <View style={styles.iconDemoText}>
        <Text>{icon}</Text>
      </View>
      <View style={styles.iconDemoSpacer} />
      <View style={styles.iconDemoIcon}>
        <Icon name={icon} />
      </View>
    </View>
  )
}

function IconSectionHeader({ section }) {
  return (
      <Text style={styles.iconText}>
        {section.title}
      </Text>
  )
}

const data = Object.values(
  Object.keys(Icons).reduce((acc, icon) => {
    const letter = icon.charAt(0)

    return {
      ...acc,
      [letter]: {
        title: letter,
        data: [...(acc?.[letter]?.data ?? []), icon],
      },
    }
  }, {}),
)

const keyExtractor = i => i
const App = () => {
  return (
    <SafeAreaView style={styles.screen}>
      <SectionList
        sections={data as any}
        renderSectionHeader={IconSectionHeader}
        renderItem={IconRow}
        keyExtractor={keyExtractor}
      />
    </SafeAreaView>
  )
}

export default React.memo(App)

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  iconDemo: {
    flexDirection: 'row',
    paddingVertical: 16,
    borderBottomColor: 'rgba(55, 64, 70, 0.2)',
    width: '100%',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  iconDemoText: {
    flex: 0.5,
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  iconDemoIcon: {
    flex: 0.5,
    justifyContent: 'center',
  },
  iconDemoSpacer: {
    width: 16,
  },
  screen: { flex: 1 },
  iconText: {
    fontWeight: 'bold',
    fontSize: 16,
    backgroundColor: 'rgba(0, 0, 0, 0.12)',
    paddingVertical: 8,
    width: '100%',
    textAlign: 'center',
  },
})
