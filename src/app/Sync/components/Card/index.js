/* @flow */
/* eslint global-require: 0 */

import React from 'react'
import { Platform, View, TouchableOpacity, TouchableNativeFeedback, Image, Text } from 'react-native'
import styles from './styles'

const integrations = {
  spotify: require('./assets/spotify.png'),
  health: require('./assets/health.png'),
}

const Touchable = Platform.OS === 'ios'
  ? TouchableOpacity
  : TouchableNativeFeedback

type Props = {
  name: string,
  active: boolean,
  onPress: (integration: string) => void,
}

const Card = ({ name, active, onPress }: Props): React$Element<any> => (
  <View style={styles.container}>
    <Image
      source={integrations[name]}
      style={styles.icon}
    />
    <Text style={styles.name}>
      {`${name.slice(0, 1).toUpperCase()}${name.slice(1)}`}
    </Text>
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
