/* @flow */
/* eslint global-require: 0 */

import React from 'react'
import { View, Image, Text } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import { PRIMARY_BRAND_COLOR_40, SECONDARY_BRAND_COLOR_40 } from '@theme/colors'
import styles from './styles'

type Props = {
  value: string,
}

const emotions = {
  nervous: {
    name: 'nerveux',
    img: require('./assets/nervous.png'),
  },
  happy: {
    name: 'heureux',
    img: require('./assets/happy.png'),
  },
  calm: {
    name: 'calme',
    img: require('./assets/calm.png'),
  },
  focused: {
    name: 'concentré',
    img: require('./assets/focused.png'),
  },
  motivated: {
    name: 'motivé',
    img: require('./assets/motivated.png'),
  },
  sad: {
    name: 'triste',
    img: require('./assets/sad.png'),
  },
}

const Mood = ({ value }: Props): React$Element<any> => (
  <LinearGradient
    style={styles.container}
    start={[0, 1]} end={[1, 0]}
    colors={[PRIMARY_BRAND_COLOR_40, SECONDARY_BRAND_COLOR_40]}
  >
    <Image
      source={emotions[value].img}
      style={styles.img}
    />
    <View>
      <Text style={styles.value}>
        Humeur : {emotions[value].name}
      </Text>
      <Text style={styles.state}>
        Analyse activée
      </Text>
    </View>
  </LinearGradient>
)

export default Mood
