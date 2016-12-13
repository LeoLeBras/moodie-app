/* @flow */
/* eslint global-require: 0 */

import React, { Component } from 'react'
import { Animated, View, Slider, Image, Text } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import { PRIMARY_BRAND_COLOR_40, PRIMARY_BRAND_COLOR_50, SECONDARY_BRAND_COLOR_40 } from '@theme/colors'
import styles from './styles'

const DEFAULT_VALUE = 100

type State = {
  value: number, // 0 => 100
}

type Props = {
  onChangeBrightness?: (value: number) => void,
}

class BrightnessController extends Component<void, Props, State> {

  props: Props
  state: State = { value: DEFAULT_VALUE }
  pan: Animated = new Animated.Value(DEFAULT_VALUE)

  onChangeValue = (value: number): void => {
    if (value !== this.state.value) {
      this.pan.setValue(value)
      this.setState({ value })
    }
  }

  onSlidingComplete = (): void => {
    const { onChangeBrightness } = this.props
    const { value } = this.state
    onChangeBrightness && onChangeBrightness(value)
  }

  render(): React$Element<any> {
    const { value } = this.state
    const scale = this.pan.interpolate({
      inputRange: [0, 100],
      outputRange: [.875, 1.125],
    })
    const opacity = this.pan.interpolate({
      inputRange: [0, 35, 100],
      outputRange: [.25, .5, 1],
    })
    return (
      <View style={styles.container}>
        <Animated.View style={{ opacity, transform: [{ scale }] }}>
          <LinearGradient
            style={styles.input}
            start={[0, 1]} end={[1, 0]}
            colors={[PRIMARY_BRAND_COLOR_40, SECONDARY_BRAND_COLOR_40]}
          >
            <Text style={styles.value}>{value}</Text>
          </LinearGradient>
        </Animated.View>
        <View style={styles.controls}>
          <Image
            style={styles.indicator}
            source={require('./assets/min.png')}
          />
          <Slider
            style={styles.slider}
            minimumTrackTintColor={PRIMARY_BRAND_COLOR_50}
            step={1}
            maximumValue={100}
            value={value}
            onValueChange={this.onChangeValue}
            onSlidingComplete={this.onSlidingComplete}
          />
          <Image
            style={styles.indicator}
            source={require('./assets/max.png')}
          />
        </View>
      </View>
    )
  }

}

export default BrightnessController
