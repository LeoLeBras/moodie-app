/* @flow */
/* eslint global-require: 0 */
/* eslint react/no-unused-prop-types: 0 */

import React from 'react'
import { Platform, View, TouchableNativeFeedback, TouchableOpacity, Image } from 'react-native'
import { Match } from 'react-router'
import { withHistory } from '@helpers/router'
import Logo from '@components/Logo'
import styles from './styles'

const Touchable = Platform.OS === 'ios'
  ? TouchableOpacity
  : TouchableNativeFeedback

type Props = {
  history: {
    replace: (location: string) => void,
  },
}

const NavBar = ({ history }: Props): React$Element<any> => (
  <View style={styles.container}>
    <View style={styles.button}>
      <Match
        pattern="/app/manual"
        component={() => (
          <Touchable
            style={styles.button}
            onPress={() => history.replace('/app/mood')}
          >
            <Image
              style={styles.icon}
              source={require('./assets/home.png')}
            />
          </Touchable>
        )}
      />
      <Match
        pattern="/app/mood"
        component={() => (
          <Touchable
            style={styles.button}
            onPress={() => history.replace('/app/manual/saturation')}
          >
            <Image
              style={styles.icon}
              source={require('./assets/settings.png')}
            />
          </Touchable>
        )}
      />
      <Match
        pattern="/app/sync"
        component={() => (
          <Touchable
            style={styles.button}
            onPress={() => history.replace('mood')}
          >
            <Image
              style={styles.icon}
              source={require('./assets/back.png')}
            />
          </Touchable>
        )}
      />
    </View>
    <Logo />
    <View style={styles.button}>
      <Match
        pattern="/app/mood"
        component={() => (
          <Touchable
            style={styles.button}
            onPress={() => history.replace('/app/sync')}
          >
            <Image
              style={styles.icon}
              source={require('./assets/sync.png')}
            />
          </Touchable>
        )}
      />
    </View>
  </View>
)

export default withHistory(NavBar)
