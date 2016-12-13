/* @flow */

import React from 'react'
import { Platform, View, TouchableOpacity, TouchableNativeFeedback, Text } from 'react-native'
import styles from './styles'

const Touchable = Platform.OS === 'ios'
  ? TouchableOpacity
  : TouchableNativeFeedback

type Props = {
  active: true,
  turnOn: Function,
  turnOff: Function,
}

const HueController = ({ active, turnOn, turnOff }: Props): React$Element<any> => (
  <View style={styles.container}>
    <Touchable onPress={active ? turnOff : turnOn}>
      <Text style={styles.text}>
        {active
          ? 'Éteindre vos lampes'
          : 'Allumer vos lampes'
        }
      </Text>
    </Touchable>
  </View>
)

export default HueController
