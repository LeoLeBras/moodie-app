/* @flow */

import { StyleSheet } from 'react-native'
import { rem } from '@helpers/stylesheet'
import { NEUTRAL_COLOR_00 } from '@theme/colors'
import { OPENSANS_SEMI_BOLD } from '@theme/fonts'

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
  },
  wrapper: {
    paddingHorizontal: rem(1.375),
    paddingVertical: rem(1.25),
    justifyContent: 'center',
  },
  text: {
    top: rem(-.0625),
    backgroundColor: 'transparent',
    ...OPENSANS_SEMI_BOLD,
    color: NEUTRAL_COLOR_00,
    fontSize: rem(.975),
    textAlign: 'center',
  },
})

export default styles
