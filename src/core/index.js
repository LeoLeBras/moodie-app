/* @flow */

import React from 'react'
import { MemoryRouter, Match } from 'react-router'
import { LaunchIndexScene } from '@app/Launch'

const Kernel = (): React$Element<any> => (
  <MemoryRouter>
    <Match pattern="/" component={LaunchIndexScene} />
  </MemoryRouter>
)

export default Kernel
