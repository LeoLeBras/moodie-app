/* @flow */

import { StyleSheet } from 'react-native'
import { rem } from '@helpers/stylesheet'
import { NEUTRAL_COLOR_00 } from '@theme/colors'
import { OPENSANS_SEMI_BOLD } from '@theme/fonts'

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  gradient: {
    position: 'absolute',
  },
  wrapper: {
    flex: 1,
    paddingHorizontal: rem(1.375),
    justifyContent: 'center',
  },
  text: {
    top: rem(-.0625),
    backgroundColor: 'transparent',
    ...OPENSANS_SEMI_BOLD,
    color: NEUTRAL_COLOR_00,
    fontSize: rem(1),
  },
})

export default styles
