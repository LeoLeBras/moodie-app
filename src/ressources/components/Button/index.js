/* @flow */
/* eslint new-cap: 0 */

import React from 'react'
import { Platform, Dimensions, View, TouchableOpacity, TouchableNativeFeedback, Text } from 'react-native'
import { Svg, Defs, LinearGradient, Stop, Rect } from 'react-native-svg'
import { PRIMARY_BRAND_COLOR_40, SECONDARY_BRAND_COLOR_40 } from '@theme/colors'
import styles from './styles'

const WIDTH = Dimensions.get('window').width
const HEIGHT = 60

type Props = {
  onPress: Function,
  children?: string,
  style: StyleSheet,
}

const Gradient = ({ from, to }): React$Element<any> => (
  <Svg style={styles.gradient} width={WIDTH} height={HEIGHT}>
    <Defs>
      <LinearGradient id="grad" x1={0} y1={0} x2={WIDTH} y2={0}>
        <Stop offset="0" stopColor={from} stopOpacity={1} />
        <Stop offset="1" stopColor={to} stopOpacity={1} />
      </LinearGradient>
    </Defs>
    <Rect x="0" y="0" width="100%" height="70" fill="url(#grad)" />
  </Svg>
)

const Button = ({ onPress, children, style }: Props): React$Element<any> => {
  const Touchable = Platform.OS === 'ios'
    ? TouchableOpacity
    : TouchableNativeFeedback
  return (
    <Touchable
      style={[styles.container, { height: HEIGHT }, style]}
      background={Platform.OS === 'android' && TouchableNativeFeedback.Ripple('white', true)}
      onPress={onPress}
    >
      <Gradient
        from={PRIMARY_BRAND_COLOR_40}
        to={SECONDARY_BRAND_COLOR_40}
      />
      <View style={styles.wrapper}>
        <Text style={styles.text}>{children}</Text>
      </View>
    </Touchable>
  )
}

export default Button
