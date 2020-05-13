import React from 'react'
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  SectionList,
  TouchableOpacity,
  Animated,
} from 'react-native'

import Icon from './src/Icon'
import * as Icons from './src/icons'

function IconRow({ item: icon }) {
  const [on, setOn] = React.useState(false)
  const bgColor = React.useMemo(() => new Animated.Value(0), [])

  const onAnimate = React.useCallback(() => {
    setOn(!on)
    Animated.timing(bgColor, {
      toValue: on ? 0 : 1,
      duration: 350,
      useNativeDriver: true,
    }).start()
  }, [on, bgColor])

  const fill = bgColor.interpolate({
    inputRange: [0, 1],
    outputRange: ['rgb(0, 0, 0)', 'rgb(250, 0, 0)'],
    extrapolate: 'clamp',
  })

  return (
    <View key={icon} style={styles.iconDemo}>
      <TouchableOpacity onPress={onAnimate}>
        <Text>Animate</Text>
      </TouchableOpacity>
      <View style={styles.iconDemoText}>
        <Text>{icon}</Text>
      </View>
      <View style={styles.iconDemoSpacer} />
      <View style={styles.iconDemoIcon}>
        <Icon name={icon} fill={fill} />
      </View>
    </View>
  )
}

function IconSectionHeader({ section }) {
  return <Text style={styles.iconText}>{section.title}</Text>
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

const keyExtractor = (i) => i
const App = () => {
  const [] = React.useState(false)
  return (
    <SafeAreaView style={styles.screen}>
      <SectionList
        sections={data as any}
        renderSectionHeader={IconSectionHeader}
        renderItem={(props) => <IconRow {...props} />}
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
