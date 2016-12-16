/* @flow */

import React, { Component } from 'react'
import { View } from 'react-native'
import Title from '@components/Title'
import HueContainer from './../../containers/HueContainer'
import MoodContainer from './../../containers/MoodContainer'
import HueController from './../../components/HueController'
import SelectMood from './../../components/SelectMood'
import Mood from './../../components/Mood'
import styles from './styles'

class MoodIndexScene extends Component {

  shouldComponentUpdate(): boolean {
    return false
  }

  render(): React$Element<any> {
    return (
      <View style={styles.container}>
        <MoodContainer>
          {({ mood }) => (
            <Mood {...mood} />
          )}
        </MoodContainer>
        <Title>
          Réglez l’humeur détectée {`\n`}
          si celle ci est erronée
        </Title>
        <MoodContainer>
          {({ selectMood, onUnselect, mood }) => (
            <SelectMood
              defaultMood={mood.value}
              mood={mood.value}
              onSelect={selectMood}
              onUnselect={onUnselect}
            />
          )}
        </MoodContainer>
        <HueContainer>
          {({ turnOn, turnOff, hue }) => (
            <HueController
              active={hue.isOn}
              turnOn={turnOn}
              turnOff={turnOff}
            />
          )}
        </HueContainer>
      </View>
    )
  }

}

export default MoodIndexScene
