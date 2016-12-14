/* @flow */
/* eslint react/prefer-stateless-function: 0 */
/* eslint react/no-unused-prop-types: 0 */

import React, { Component } from 'react'
import { ActivityIndicator, View, Text } from 'react-native'
import { withHistory } from '@helpers/router'
import Logo from '@components/Logo'
import HueContainer from './../../containers/HueContainer'
import Button from './../../components/Button'
import styles from './styles'

type Props = {
  history: {
    push: (location: string) => void,
  }
}

class LaunchIndexScene extends Component<void, Props, void> {

  props: Props

  render(): React$Element<any> {
    const { history } = this.props
    return (
      <HueContainer>
        {({ hue, searchHueBridge }): ?React$Element<any> => {
          const { isLoading, isConnected } = hue
          if (isConnected) {
            setTimeout(() => history.push('app/mood'), 0) // Prevent warning
            return null
          }
          return (
            <View style={styles.container}>
              <Logo style={styles.logo} />
              {!isLoading &&
                <View style={styles.wrapper}>
                  <Text style={styles.title}>
                    Aucun bridge {`\n`}
                    Phillips Hue {`\n`}
                    trouvé
                  </Text>
                  <Text style={styles.help}>
                    Besoin d'aide ?
                  </Text>
                  <Button onPress={searchHueBridge}>
                    Rechercher
                  </Button>
                </View>
              }
              {isLoading &&
                <View style={[styles.wrapper]}>
                  <ActivityIndicator size="large" />
                  <Text style={styles.label}>
                    Recherce en cours ...
                  </Text>
                </View>
              }
            </View>
          )
        }}
      </HueContainer>
    )
  }

}

export default withHistory(LaunchIndexScene)
