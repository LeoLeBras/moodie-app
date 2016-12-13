/* @flow */

import React, { Component } from 'react'
import { View } from 'react-native'
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
      </View>
    )
  }

}

export default App
