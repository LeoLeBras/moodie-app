/* @flow */

import { StyleSheet } from 'react-native'
import { rem } from '@helpers/stylesheet'
import { OPENSANS_SEMI_BOLD } from '@theme/fonts'
import { NEUTRAL_COLOR_75, NEUTRAL_COLOR_90 } from '@theme/colors'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: rem(1.5),
  },
  title: {
    ...OPENSANS_SEMI_BOLD,
    fontSize: rem(1.8125),
    color: NEUTRAL_COLOR_90,
    lineHeight: rem(2.375),
  },
  help: {
    marginTop: rem(2.5),
    ...OPENSANS_SEMI_BOLD,
    fontSize: rem(.975),
    color: NEUTRAL_COLOR_75,
  },
  button: {
    position: 'absolute',
    bottom: 0,
  },
})

export default styles
