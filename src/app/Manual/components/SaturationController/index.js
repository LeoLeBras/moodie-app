/* @flow */
/* eslint global-require: 0 */

import React, { Component } from 'react'
import { Animated, View, Platform, Slider, TouchableOpacity, TouchableNativeFeedback, Image, Text } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import { PRIMARY_BRAND_COLOR_40, PRIMARY_BRAND_COLOR_50, SECONDARY_BRAND_COLOR_40 } from '@theme/colors'
import styles from './styles'

const extractHSL = (color: string) => {
  const h = parseInt(color.slice(4, color.indexOf(',')))
  const s = parseInt(color.slice(color.indexOf(',') + 2, color.indexOf('%')))
  const l = parseInt(color.slice(color.indexOf('%,') + 3, color.indexOf('%)')))
  return { h, s, l }
}

const MIN_VALUE = 0
const MAX_VALUE = 100

const Touchable = Platform.OS === 'ios'
  ? TouchableOpacity
  : TouchableNativeFeedback

type State = {
  value: number, // 0 => 100
  primaryColor: string,
  secondaryColor: string,
}

type Props = {
  saturation: number,
  onChangeSaturation?: (value: number) => void,
}

class SaturationController extends Component<void, Props, State> {

  props: Props
  state: State
  pan: Animated

  constructor(props: Props) {
    super(props)
    const { saturation } = props
    const primaryColor = extractHSL(PRIMARY_BRAND_COLOR_40)
    const secondaryColor = extractHSL(SECONDARY_BRAND_COLOR_40)
    this.state = {
      value: saturation,
      primaryColor: `hsl(${primaryColor.h}, ${saturation}%, ${primaryColor.l}%)`,
      secondaryColor: `hsl(${secondaryColor.h}, ${saturation}%, ${secondaryColor.l}%)`,
    }
    this.pan = new Animated.Value(saturation)
  }

  onChangeValue = (value: number, spring: boolean = false): any => {
    if (value !== this.state.value) {
      const offset = value - this.state.value
      const primaryColor = extractHSL(this.state.primaryColor)
      const nextPrimaryColor = `hsl(${primaryColor.h}, ${Math.min(Math.max(parseInt(primaryColor.s + offset), 0), 100)}%, ${primaryColor.l}%)`
      const secondaryColor = extractHSL(this.state.secondaryColor)
      const nextSecondaryColor = `hsl(${secondaryColor.h}, ${Math.min(Math.max(parseInt(secondaryColor.s + offset), 0), 100)}%, ${secondaryColor.l}%)`
      this.setState({
        value,
        primaryColor: nextPrimaryColor,
        secondaryColor: nextSecondaryColor,
      })
      if (spring) {
        return Animated.spring(
          this.pan,
          {
            toValue: value,
            friction: 1.25,
          }
        ).start()
      }
      return this.pan.setValue(value)
    }
    return null
  }

  onSlidingComplete = (): void => {
    const { onChangeSaturation } = this.props
    const { value } = this.state
    onChangeSaturation && onChangeSaturation(value)
  }

  onPressIndicator = (direction: string) => {
    const { onChangeSaturation } = this.props
    const { value } = this.state
    const nextValue = Math.min(Math.max(
      parseInt(direction === 'left' ? value - 10 : value + 10),
      MIN_VALUE
    ), MAX_VALUE)
    this.onChangeValue(
      nextValue,
      true,
    )
    onChangeSaturation && onChangeSaturation(nextValue)
  }

  shouldComponentUpdate(nextProps: Props, nextState: State): boolean {
    return this.state.value !== nextState.value
  }

  render(): React$Element<any> {
    const { value, primaryColor, secondaryColor } = this.state
    const scale = this.pan.interpolate({
      inputRange: [0, 100],
      outputRange: [.875, 1.125],
    })
    return (
      <View style={styles.container}>
        <Animated.View style={{ transform: [{ scale }] }}>
          <LinearGradient
            style={styles.input}
            start={[0, 1]} end={[1, 0]}
            colors={[primaryColor, secondaryColor]}
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

export default SaturationController
