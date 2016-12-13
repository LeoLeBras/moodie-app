/* @flow */

import React, { cloneElement } from 'react'
import { Platform, TouchableOpacity, TouchableNativeFeedback, Text } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import { NEUTRAL_COLOR_00, PRIMARY_BRAND_COLOR_40, SECONDARY_BRAND_COLOR_40, PRIMARY_BRAND_COLOR_50 } from '@theme/colors'
import styles from './styles'

type Props = {
  onPress: Function,
  children?: string,
  active?: boolean,
  renderIcon: () => React$Element<any>,
}

const Touchable = Platform.OS === 'ios'
  ? TouchableOpacity
  : TouchableNativeFeedback

const TabItem = ({ children, onPress, renderIcon, active }: Props): React$Element<any> => (
  <Touchable onPress={onPress} activeOpacity={.5} style={styles.container}>
    <LinearGradient
      style={styles.wrapper}
      start={[0, 1]} end={[1, 0]}
      colors={active
        ? [PRIMARY_BRAND_COLOR_40, SECONDARY_BRAND_COLOR_40]
        : [NEUTRAL_COLOR_00]
      }
    >
      {cloneElement(
        renderIcon(),
        { style: styles.icon, resizeMode: 'contain' }
      )}
      <Text style={[styles.text, !active && { color: PRIMARY_BRAND_COLOR_50 }]}>
        {children && children}
      </Text>
    </LinearGradient>
  </Touchable>
)

export default TabItem
