/* @flow */
/* eslint-disable import/no-commonjs */
/* eslint global-require: 0 */
/* eslint arrow-parens: 0 */
/* eslint no-confusing-arrow: 0 */

import React, { Component } from 'react'
import { Dimensions, Platform, Animated, View, TouchableNativeFeedback, TouchableOpacity, Image, Text } from 'react-native'
import { TabViewAnimated, TabViewPagerPan } from 'react-native-tab-view'
import type { SceneRendererProps, Scene, Route } from 'react-native-tab-view/src/TabViewTypeDefinitions'
import styles from './styles'

const Touchable = Platform.OS === 'ios'
  ? TouchableOpacity
  : TouchableNativeFeedback

const emotions = {
  nervous: {
    name: 'Nerveux',
    img: require('./assets/nervous.png'),
  },
  happy: {
    name: 'Heureux',
    img: require('./assets/happy.png'),
  },
  calm: {
    name: 'Calme',
    img: require('./assets/calm.png'),
  },
  focused: {
    name: 'Concentré',
    img: require('./assets/focused.png'),
  },
  motivated: {
    name: 'Motivé',
    img: require('./assets/motivated.png'),
  },
  sad: {
    name: 'Triste',
    img: require('./assets/sad.png'),
  },
}

const initialLayout = {
  height: 0,
  width: Dimensions.get('window').width,
}

type Props = {
  defaultMood: string,
  onSelect: (mood: string) => void,
  onUnselect: (mood: string) => void,
}

type State = {
  index: number,
  routes: Array<Route>,
  isSelected: boolean,
}

export default class CoverflowExample extends Component {

  state: State

  componentWillMount() {
    const { defaultMood } = this.props
    this.state = {
      index: Object.keys(emotions).findIndex((emotion) => emotion === defaultMood),
      routes: Object.keys(emotions).map(key => ({ key })),
      isSelected: false,
    }
  }

  buildCoverFlowStyle = (props: SceneRendererProps & Scene): Object => {
    const { layout, position, route, navigationState } = props
    const { width } = layout

    // Define input ranges
    const { routes } = navigationState
    const currentIndex = routes.indexOf(route)
    const inputRange = routes.map((x, i) => i)

    // Define output ranges
    const translateXOutputRange = inputRange.map((i) => ((width / 1.5) * (currentIndex - i)) * -1)
    const scaleOutputRange = inputRange.map((i) => currentIndex === i ? 1 : .625)
    const opacityOutputRange = inputRange.map((i) => currentIndex === i ? 1 : .75)

    // Set interpolatation
    const translateX = position.interpolate({
      inputRange,
      outputRange: translateXOutputRange,
    })
    const scale = position.interpolate({
      inputRange,
      outputRange: scaleOutputRange,
    })
    const opacity = position.interpolate({
      inputRange,
      outputRange: opacityOutputRange,
    })

    // Render style
    return {
      transform: [
        { translateX },
        { scale },
      ],
      opacity,
    }
  }

  handleChangeTab = (index: number): void => {
    this.setState({ index, isSelected: false })
  }

  onSelect = () => {
    const { routes, index, isSelected } = this.state
    const mood = routes[index].key
    if (!isSelected) {
      this.setState({ isSelected: true })
      this.props.onSelect(mood)
    } else {
      this.setState({ isSelected: false })
      this.props.onUnselect(mood)
    }
  }

  renderScene = (props: Scene): React$Element<any> => {
    const emotion = emotions[props.route.key]
    return (
      <Animated.View style={[styles.page, this.buildCoverFlowStyle(props)]}>
        <View
          style={styles.emotion}
        >
          <Image style={styles.img} source={emotion.img} />
        </View>
      </Animated.View>
    )
  }

  renderPager = (props: SceneRendererProps): React$Element<any> => (
    <TabViewPagerPan {...props} />
  )

  renderFooter = (props: SceneRendererProps): React$Element<any> => (
    <View>
      {this.state.routes.map((route, index) => (
        <Animated.Text
          key={index}
          style={[styles.value, {
            opacity: props.position.interpolate({
              inputRange: this.state.routes.map((x, i) => i - 0),
              outputRange: this.state.routes.map((x, i) => index === i ? 1 : 0),
            }),
          }]}
        >
          {emotions[route.key].name}
        </Animated.Text>
      ))}
    </View>
  )

  componentWillReceiveProps(nextProps: Props) {
    const currentMood = nextProps.mood
    const currentMoodIndex = Object.keys(emotions).indexOf(currentMood)
    if (this.state.index !== currentMoodIndex) {
      this.setState({ index: currentMoodIndex })
    }
  }

  shouldComponentUpdate(nextProps: Props, nextState: State): boolean {
    return (
      this.state.index !== nextState.index ||
      this.state.isSelected !== nextState.isSelected
    )
  }

  render(): React$Element<any> {
    const { isSelected } = this.state
    return (
      <View style={styles.container}>
        <TabViewAnimated
          style={styles.coverflow}
          navigationState={this.state}
          renderPager={this.renderPager}
          renderScene={this.renderScene}
          renderFooter={this.renderFooter}
          onRequestChangeTab={this.handleChangeTab}
          initialLayout={initialLayout}
        />
        <Touchable onPress={this.onSelect} activeOpacity={.75}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>
              {isSelected ? 'Sélectionné' : 'Sélectionner'}
            </Text>
            {isSelected && <Image
              style={styles.buttonIcon}
              source={require('./assets/check.png')}
            />}
          </View>
        </Touchable>
      </View>
    )
  }
}
