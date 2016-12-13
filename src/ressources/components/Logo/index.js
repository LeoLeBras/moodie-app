/* @flow */
/* eslint global-require: 0 */

import React from 'react'
import { Image } from 'react-native'
import styles from './styles'

type Props = {
  style?: StyleSheet,
}

const Logo = ({ style }: Props): React$Element<any> => (
  <Image
    source={require('./assets/logo_default.png')}
    resizeMode="contain"
    style={[styles.main, style]}
  />
)

export default Logo
