/* @flow */
/* eslint new-cap: 0 */

import React from 'react'
import { Platform, TouchableOpacity, TouchableNativeFeedback, Text } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import { PRIMARY_BRAND_COLOR_40, SECONDARY_BRAND_COLOR_40 } from '@theme/colors'
import styles from './styles'

const Touchable = Platform.OS === 'ios'
  ? TouchableOpacity
  : TouchableNativeFeedback

type Props = {
  onPress: Function,
  children?: string,
}

const Button = ({ onPress, children }: Props): React$Element<any> => {
  return (
    <Touchable
      style={styles.container}
      background={Platform.OS === 'android' && TouchableNativeFeedback.Ripple('white', true)}
      onPress={onPress}
      activeOpacity={.75}
    >
      <LinearGradient
        style={styles.wrapper}
        start={[0, 1]} end={[1, 0]}
        colors={[PRIMARY_BRAND_COLOR_40, SECONDARY_BRAND_COLOR_40]}
      >
        <Text style={styles.text}>{children}</Text>
      </LinearGradient>
    </Touchable>
  )
}

export default Button
