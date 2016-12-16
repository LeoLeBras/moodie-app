/* @flow */
/* eslint arrow-parens: 0 */

import React, { Component } from 'react'
import { View } from 'react-native'
import AppleHealthKit from 'react-native-apple-healthkit'
import HealthKit, { getStepCount, getHeartRateSamples } from '@helpers/healthkit'
import IntegrationsContainer from './../../containers/IntegrationsContainer'
import HealthKitContainer from './../../containers/HealthKitContainer'
import NavBar from './../../components/NavBar'
import styles from './styles'

type Props = {
  children?: React$Element<any>,
}

class App extends Component<void, Props, void> {

  props: Props

  shouldComponentUpdate(): boolean {
    return false
  }

  render(): React$Element<any> {
    const { children } = this.props
    return (
      <View style={styles.container}>
        <NavBar />
        {children && children}
        <IntegrationsContainer>
          {({ integrations }) => {
            const HKPERMS = AppleHealthKit.Constants.Permissions
            const HKOPTIONS = {
              permissions: {
                read: [
                  HKPERMS.StepCount,
                  HKPERMS.HeartRate,
                  HKPERMS.SleepAnalysis,
                ],
              },
            }
            return (
              <View>
                {integrations.health &&
                  <HealthKitContainer>
                    {({ getData }) => (
                      <HealthKit
                        permissions={HKOPTIONS}
                        polling={10000}
                        onReadSuccess={getData}
                        read={{ getHeartRateSamples, getStepCount }}
                      />
                    )}
                  </HealthKitContainer>
                }
              </View>
            )
          }}
        </IntegrationsContainer>
      </View>
    )
  }

}

export default App
