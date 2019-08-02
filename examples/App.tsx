import React from 'react';
import { StyleSheet, Text, ScrollView, View } from 'react-native';

import Icon, { IconProps } from '@ccb/vector-icons'

function IconDemo({ name, ...props }: IconProps) {
  return (
    <View style={styles.iconDemo}>
      <View style={styles.iconDemoText}>
        <Text>{name}</Text>
      </View>
      <View style={styles.iconDemoSpacer} />
      <View style={styles.iconDemoIcon}>
        <Icon name={name} {...props} />
      </View>
    </View>
  )
}

export default function App() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <IconDemo name="Add" />
      <IconDemo name="BackCircle" />
      <IconDemo name="Check" />
      <IconDemo name="CloseCircle" />
      <IconDemo name="Location" />
      <IconDemo name="Search" />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  iconDemo: {
    flex: 0,
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
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
