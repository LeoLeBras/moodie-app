/* @flow */
/* eslint global-require: 0 */

import React, { cloneElement } from 'react'
import { Platform, View, TouchableOpacity, TouchableNativeFeedback, Image, Text } from 'react-native'
import styles from './styles'

const Touchable = Platform.OS === 'ios'
  ? TouchableOpacity
  : TouchableNativeFeedback

type Props = {
  name: string,
  active: boolean,
  renderIcon?: () => React$Element<any>,
  onPress: (integration: string) => void,
}

const Card = ({ renderIcon, name, active, onPress }: Props): React$Element<any> => (
  <View style={styles.container}>
    {renderIcon && cloneElement(
      renderIcon(),
      { style: styles.icon }
    )}
    <Text style={styles.name}>{name}</Text>
    <Touchable
      onPress={() => onPress(name.toLowerCase())}
      style={[styles.button, active && styles.activeButton]}
      activeOpacity={.75}
    >
      <View style={styles.buttonWrapper}>
        {active && <Image style={styles.buttonIcon} source={require('./assets/check.png')} />}
        <Text style={[styles.buttonText, active && styles.activeTextButton]}>
          {active ? 'Connecté' : 'Se connecter' }
        </Text>
      </View>
    </Touchable>
  </View>
)

export default Card
