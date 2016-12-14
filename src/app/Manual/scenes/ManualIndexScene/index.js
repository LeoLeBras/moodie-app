/* @flow */
/* eslint global-require: 0 */
/* eslint react/no-unused-prop-types: 0 */

import React, { Component } from 'react'
import { View, Image } from 'react-native'
import { Match, matchPattern } from 'react-router'
import { withHistory } from '@helpers/router'
import Title from '@components/Title'
import HueContainer from './../../containers/HueContainer'
import TabItem from './../../components/TabItem'
import SaturationController from './../../components/SaturationController'
import BrightnessController from './../../components/BrightnessController'
import styles from './styles'

type Props = {
  history: {
    push: (pathname: string) => void,
    listen: (callback: Function) => void,
    location: {
      pathname: string,
    },
  },
}

class ManualIndexScene extends Component<any, Props, any> {

  props: Props
  unlistenHistory: any

  componentDidMount() {
    // @TODO Remove this fucking hack
    this.unlistenHistory = this.props.history.listen((action) => {
      if (action.pathname.includes('app/manual')) {
        this.forceUpdate()
      }
    })
  }

  componentWillUnmount() {
    this.unlistenHistory()
  }

  shouldComponentUpdate(): boolean {
    return true
  }

  render(): React$Element<any> {
    const { history } = this.props
    const saturationTabIsActive = matchPattern('/app/manual/saturation', history.location)
    const brightnessTabIsActive = matchPattern('/app/manual/brightness', history.location)
    return (
      <View style={styles.container}>
        <Title style={styles.title}>
          Personnalisez vos lumières {`\n`}
          selon vos souhaits
        </Title>
        <View style={styles.tabBar}>
          <TabItem
            active={saturationTabIsActive}
            renderIcon={saturationTabIsActive
              ? () => <Image source={require('./assets/saturation_active.png')} />
              : () => <Image source={require('./assets/saturation_default.png')} />
            }
            onPress={() => history.push('/app/manual/saturation')}
          >
            Saturation
          </TabItem>
          <TabItem
            active={brightnessTabIsActive}
            onPress={() => history.push('/app/manual/brightness')}
            renderIcon={brightnessTabIsActive
              ? () => <Image source={require('./assets/brightness_active.png')} />
              : () => <Image source={require('./assets/brightness_default.png')} />
            }
          >
            Luminosité
          </TabItem>
        </View>
        <HueContainer>
          {({ changeSaturation, changeBrightness, hue }) => (
            <View style={styles.content}>
              <Match
                pattern="/app/manual/saturation"
                component={() => (
                  <SaturationController
                    onChangeSaturation={changeSaturation}
                    saturation={hue.saturation}
                  />
                )}
              />
              <Match
                pattern="/app/manual/brightness"
                component={() => (
                  <BrightnessController
                    onChangeBrightness={changeBrightness}
                    brightness={hue.brightness}
                  />
                )}
              />
            </View>
          )}
        </HueContainer>
      </View>
    )
  }
}

export default withHistory(ManualIndexScene)
