/* @flow */
/* eslint global-require: 0 */

import React, { Component } from 'react'
import { ScrollView, View, Image } from 'react-native'
import Title from '@components/Title'
import IntegrationsContainer from './../../containers/IntegrationsContainer'
import Card from './../../components/Card'
import styles from './styles'

class SyncIndexScene extends Component {

  shouldComponentUpdate(): boolean {
    return false
  }

  render(): React$Element<any> {
    return (
      <ScrollView contentContainerStyle={styles.container}>
        <Title style={styles.title}>
          Nous avons trouvé 3 applications {`\n`}
          pouvant être liées à moodie.
        </Title>
        <IntegrationsContainer>
          {({ integrations, toogleIntegration }) => (
            <View>
              <Card
                active={integrations.spotify}
                renderIcon={() => <Image source={require('./assets/spotify.png')} />}
                name="Spotify"
                onPress={toogleIntegration}
              />
              <Card
                active={integrations.health}
                renderIcon={() => <Image source={require('./assets/health.png')} />}
                name="Health"
                onPress={toogleIntegration}
              />
            </View>
          )}
        </IntegrationsContainer>
      </ScrollView>
    )
  }

}

export default SyncIndexScene
