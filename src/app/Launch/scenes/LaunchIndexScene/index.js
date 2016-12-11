/* @flow */

import React from 'react'
import { View, Text } from 'react-native'
import styles from './styles'

const LaunchIndexScene = (): React$Element<any> => (
  <View style={styles.container}>
    <Text style={styles.welcome}>
      Welcome to React Native!
    </Text>
    <Text style={styles.instructions}>
      To get started, edit index.ios.js
    </Text>
    <Text style={styles.instructions}>
      Press Cmd+R to reload,{'\n'}
      Cmd+D or shake for dev menu
    </Text>
  </View>
)

export default LaunchIndexScene
