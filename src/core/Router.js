/* @flow */

import React from 'react'
import { View } from 'react-native'
import { MemoryRouter, Match } from 'react-router'
import { LaunchIndexScene } from '@app/Launch'
import { AppScene } from '@app/App'
import { MoodIndexScene } from '@app/Mood'
import { ManualIndexScene } from '@app/Manual'
import { SyncIndexScene } from '@app/Sync'

export default () => (
  <MemoryRouter initialEntries={['/']}>
    <View style={{ flex: 1 }}>
      <Match exactly pattern="/" component={LaunchIndexScene} />
      <Match
        pattern="/app"
        component={() => (
          <AppScene>
            <Match pattern="/app/mood" component={MoodIndexScene} />
            <Match pattern="/app/manual" component={ManualIndexScene} />
            <Match pattern="/app/sync" component={SyncIndexScene} />
          </AppScene>
        )}
      />
    </View>
  </MemoryRouter>
)
