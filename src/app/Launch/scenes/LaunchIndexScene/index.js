/* @flow */
/* eslint react/prefer-stateless-function: 0 */

import React, { Component } from 'react'
import { View, Text } from 'react-native'
import AppleHealthKit from 'react-native-apple-healthkit'
import HealthKit, { getSleepSamples, getSex } from '@helpers/healthkit'
import Button from '@components/Button'
import styles from './styles'

const HKPERMS = AppleHealthKit.Constants.Permissions
const HKOPTIONS = {
  permissions: {
    read: [
      HKPERMS.BiologicalSex,
      HKPERMS.SleepAnalysis,
    ],
  },
}

type Data = {
  [key: string]: Object,
}

type Props = {}

class LaunchIndexScene extends Component<void, Props, void> {

  props: Props

  onReadSuccess = (data: Data): void => {
    console.log(data)
  }

  onSearchHueBridge = () => {
    console.log('onSearchHueBridge')
  }

  render(): React$Element<any> {
    return (
      <HealthKit
        permissions={HKOPTIONS}
        read={{ getSleepSamples, getSex }}
        onReadSuccess={this.onReadSuccess}
      >
        {({ error }) => {
          if (error) return <Text>Error</Text>
          return (
            <View style={styles.container}>
              <Text style={styles.title}>
                Aucun nouveau {`\n`}
                Hue Bridge {`\n`}
                détecté
              </Text>
              <Text style={styles.help}>
                Besoins d'aide ?
              </Text>
              <Button onPress={this.onSearchHueBridge} style={styles.button}>
                Rechercher
              </Button>
            </View>
          )
        }}
      </HealthKit>
    )
  }

}

export default LaunchIndexScene
