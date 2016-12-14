/* @flow */
/* eslint react/no-unused-prop-types: 0 */
/* eslint arrow-parens: 0 */

import React from 'react'
import { Navigator, View } from 'react-native'
import { MemoryRouter, Match } from 'react-router'
import { TabStack, TabViewPagerNavigator } from 'react-native-router-navigation'
import { LaunchIndexScene } from '@app/Launch'
import { AppScene } from '@app/App'
import { MoodIndexScene } from '@app/Mood'
import { ManualIndexScene } from '@app/Manual'
import { SyncIndexScene } from '@app/Sync'

type NavigationProps = {
  children?: React$Element<any>,
}

const Navigation = (props: NavigationProps): React$Element<any> => (
  <TabStack
    {...props}
    renderPager={(pagerProps) => (
      <TabViewPagerNavigator
        {...pagerProps}
        navigatorSceneConfigs={Navigator.SceneConfigs.FloatFromBottom}
      />
    )}
    configureTransition={() => null}
  />
)

export default () => (
  <MemoryRouter initialEntries={['/']}>
    <View style={{ flex: 1 }}>
      <Match exactly pattern="/" component={LaunchIndexScene} />
      <Match
        pattern="/app"
        component={() => (
          <AppScene>
            <Navigation>
              <Match pattern="/app/mood" component={MoodIndexScene} />
              <Match pattern="/app/manual" component={ManualIndexScene} />
              <Match pattern="/app/sync" component={SyncIndexScene} />
            </Navigation>
          </AppScene>
        )}
      />
    </View>
  </MemoryRouter>
)
