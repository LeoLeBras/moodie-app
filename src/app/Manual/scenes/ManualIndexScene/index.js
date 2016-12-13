/* @flow */
/* eslint global-require: 0 */

import React, { Component } from 'react'
import { View, Image } from 'react-native'
import { Match, matchPattern } from 'react-router'
import { withHistory } from '@helpers/router'
import Title from '@components/Title'
import HueContainer from './../../containers/HueContainer'
import TabItem from './../../components/TabItem'
import ColorsController from './../../components/ColorsController'
import BrightnessController from './../../components/BrightnessController'
import styles from './styles'

class ManualIndexScene extends Component<any, any, any> {

  render(): React$Element<any> {
    const { history } = this.props
    const colorsTabIsActive = matchPattern('/app/manual/colors', history.location)
    const brightnessTabIsActive = matchPattern('/app/manual/brightness', history.location)
    return (
      <View style={styles.container}>
        <Title style={styles.title}>
          Personnalisez vos lumières {`\n`}
          selon vos souhaits
        </Title>
        <View style={styles.tabBar}>
          <TabItem
            active={colorsTabIsActive}
            renderIcon={colorsTabIsActive
              ? () => <Image source={require('./assets/colors_active.png')} />
              : () => <Image source={require('./assets/colors_default.png')} />
            }
            onPress={() => history.push('/app/manual/colors')}
          >
            Couleurs
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
          {({ changeColor, changeBrightness }) => (
            <View style={styles.content}>
              <Match
                pattern="/app/manual/colors"
                component={() => <ColorsController onChangeColor={changeColor} />}
              />
              <Match
                pattern="/app/manual/brightness"
                component={() => <BrightnessController onChangeBrightness={changeBrightness} />}
              />
            </View>
          )}
        </HueContainer>
      </View>
    )
  }
}

export default withHistory(ManualIndexScene)
