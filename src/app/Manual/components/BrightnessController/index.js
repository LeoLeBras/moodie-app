/* @flow */
/* eslint global-require: 0 */

import React, { Component } from 'react'
import { Animated, View, Platform, Slider, TouchableOpacity, TouchableNativeFeedback, Image, Text } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import { PRIMARY_BRAND_COLOR_40, PRIMARY_BRAND_COLOR_50, SECONDARY_BRAND_COLOR_40 } from '@theme/colors'
import styles from './styles'

const MIN_VALUE = 0
const MAX_VALUE = 100
const DEFAULT_VALUE = 100

const Touchable = Platform.OS === 'ios'
  ? TouchableOpacity
  : TouchableNativeFeedback

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

  onChangeValue = (value: number, spring: boolean = false): any => {
    if (value !== this.state.value) {
      this.setState({ value })
      if (spring) {
        return Animated.spring(
          this.pan,
          {
            toValue: value,
            friction: 1.5,
          }
        ).start()
      }
      return this.pan.setValue(value)
    }
    return null
  }

  onSlidingComplete = (): void => {
    const { onChangeBrightness } = this.props
    const { value } = this.state
    onChangeBrightness && onChangeBrightness(value)
  }

  onPressIndicator = (direction: string) => {
    const { value } = this.state
    const nextValue = direction === 'left'
      ? value - 10
      : value + 10
    this.onChangeValue(
      Math.min(Math.max(parseInt(nextValue), MIN_VALUE), MAX_VALUE),
      true,
    )
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
          <Touchable onPress={() => this.onPressIndicator('left')}>
            <Image
              style={styles.indicator}
              source={require('./assets/min.png')}
            />
          </Touchable>
          <Slider
            style={styles.slider}
            minimumTrackTintColor={PRIMARY_BRAND_COLOR_50}
            step={1}
            minimumValue={MIN_VALUE}
            maximumValue={MAX_VALUE}
            value={value}
            onValueChange={this.onChangeValue}
            onSlidingComplete={this.onSlidingComplete}
          />
          <Touchable onPress={() => this.onPressIndicator('right')}>
            <Image
              style={styles.indicator}
              source={require('./assets/max.png')}
            />
          </Touchable>
        </View>
      </View>
    )
  }

}

export default BrightnessController
