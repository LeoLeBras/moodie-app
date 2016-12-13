/* @flow */

import React from 'react'
import { Text } from 'react-native'
import styles from './styles'

type Props = {
  children?: string,
  style?: StyleSheet,
}

const Title = ({ style, children }: Props): ?React$Element<any> => (
  children
    ? <Text style={[styles.main, style]}>{children}</Text>
    : null
)

export default Title
