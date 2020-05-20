import React from 'react'
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  SectionList,
  TouchableOpacity,
  Animated,
  TextInput,
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
    <TouchableOpacity key={icon} style={styles.iconDemo} onPress={onAnimate}>
      <View style={styles.iconDemoText}>
        <Text>{icon}</Text>
      </View>
      <View style={styles.iconDemoSpacer} />
      <View style={styles.iconDemoIcon}>
        <Icon name={icon} fill={fill} />
      </View>
    </TouchableOpacity>
  )
}

function IconSectionHeader({ section }) {
  return <Text style={styles.iconText}>{section.title}</Text>
}

const keyExtractor = (i) => i

const App = () => {
  const [search, setSearch] = React.useState('')

  const data = React.useMemo(() => {
    const searchExpresssion = RegExp(search.toLowerCase(), 'i')

    return Object.values(
      Object.keys(Icons).reduce((acc, icon) => {
        if (search.length && !searchExpresssion.test(icon)) {
          return acc
        }

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
  }, [search])

  return (
    <SafeAreaView style={styles.screen}>
      <TextInput
        style={styles.textInput}
        value={search}
        onChangeText={setSearch}
        placeholder="Search..."
      />
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
  screen: { flex: 1, alignContent: 'center', justifyContent: 'center' },
  iconText: {
    fontWeight: 'bold',
    fontSize: 16,
    backgroundColor: 'rgba(0, 0, 0, 0.12)',
    paddingVertical: 8,
    width: '100%',
    textAlign: 'center',
  },
  textInput: {
    fontSize: 16,
    color: 'black',
    margin: 8,
    padding: 8,
    borderColor: 'rgba(55, 64, 70, 0.2)',
    borderRadius: 4,
    borderWidth: 1,
  },
})
