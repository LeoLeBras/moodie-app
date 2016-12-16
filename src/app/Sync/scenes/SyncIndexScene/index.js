/* @flow */
/* eslint arrow-parens: 0 */
/* eslint global-require: 0 */

import React, { Component } from 'react'
import { ScrollView, View } from 'react-native'
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
        <IntegrationsContainer>
          {({ integrations, toogleIntegration }) => (
            <View>
              <Title style={styles.title}>
                Nous avons trouvé {Object.keys(integrations).length} applications {`\n`}
                pouvant être liées à Moodie.
              </Title>
              {Object.keys(integrations).map((integration) => (
                <Card
                  key={integration}
                  active={integrations[integration]}
                  name={integration}
                  onPress={toogleIntegration}
                />
              ))}
            </View>
          )}
        </IntegrationsContainer>
      </ScrollView>
    )
  }

}

export default SyncIndexScene
