/* @flow */

// Search bridge
export const BRIDGE_SEARCH_REQUESTED = '@@hue/BRIDGE_SEARCH_REQUESTED'
export const BRIDGE_SEARCH_SUCCEEDED = '@@hue/BRIDGE_SEARCH_SUCCEEDED'
export const BRIDGE_SEARCH_FAILED = '@@hue/BRIDGE_SEARCH_FAILED'
export const BRIDGE_SEARCH = [
  BRIDGE_SEARCH_REQUESTED, // pending
  BRIDGE_SEARCH_SUCCEEDED, // resolve
  BRIDGE_SEARCH_FAILED, // reject
]

// Change saturation
export const CHANGE_SATURATION = '@@hue/CHANGE_SATURATION'

// Change brightness
export const CHANGE_BRIGHTNESS = '@@hue/CHANGE_BRIGHTNESS'

// Turn on
export const TURN_ON = '@@hue/TURN_ON'

// Turn off
export const TURN_OFF = '@@hue/TURN_OFF'
