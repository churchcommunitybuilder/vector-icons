import React from 'react'
import { SafeAreaView, StyleSheet, Text, ScrollView, View } from 'react-native'

import Icon, { IconName } from './src'
import * as Icons from './src/icons'

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        {Object.keys(Icons).map((icon: IconName) => (
          <View key={icon} style={styles.iconDemo}>
            <View style={styles.iconDemoText}>
              <Text>{icon}</Text>
            </View>
            <View style={styles.iconDemoSpacer} />
            <View style={styles.iconDemoIcon}>
              <Icon name={icon} />
            </View>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  )
}

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
})
