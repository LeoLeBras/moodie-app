/* @flow */

import React, { Component } from 'react'
import { View, TouchableWithoutFeedback } from 'react-native'
import styles from './styles'

type Color = {
  r: number,
  g: number,
  b: number,
}

const colors = [
  { r: 164, g: 164, b: 164 }, // grey
  { r: 240, g: 89, b: 89 },   // red
  { r: 89, g: 152, b: 226 },  // blue
  { r: 160, g: 89, b: 226 },  // purple
  { r: 226, g: 209, b: 89 },  // yellow
  { r: 226, g: 89, b: 188 },  // pink
  { r: 232, g: 158, b: 76 },  // orange
  { r: 145, g: 226, b: 89 },  // green
  { r: 136, g: 109, b: 81 },  // brown
]

type Props = {
  onChangeColor: (color: Color) => void,
}

type State = {
  index: number,
}

class BrightnessController extends Component<void, Props, State> {

  props: Props
  state: State = { index: -1 }

  onChangeColor = (selectedColor: Color): void => {
    const { onChangeColor } = this.props
    const index = colors.findIndex((color) => {
      return (
        selectedColor.r === color.r &&
        selectedColor.g === color.g &&
        selectedColor.b === color.b
      )
    })
    this.setState({ index })
    onChangeColor && onChangeColor(selectedColor)
  }

  render(): React$Element<any> {
    const { index } = this.state
    return (
      <View style={styles.container}>
        <View style={styles.colors}>
          {colors.map((color, key) => {
            const rgb = `rgb(${color.r}, ${color.g}, ${color.b})`
            return (
              <TouchableWithoutFeedback key={key} onPress={() => this.onChangeColor(color)}>
                <View style={[styles.pastille, { backgroundColor: rgb, shadowColor: rgb }]}>
                  {index === key &&
                    <View style={[styles.active, { borderColor: rgb }]} />
                  }
                </View>
              </TouchableWithoutFeedback>
            )
          })}
        </View>
      </View>
    )
  }

}

export default BrightnessController
