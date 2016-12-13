/* @flow */

import { StyleSheet } from 'react-native'
import { rem } from '@helpers/stylesheet'
import { OPENSANS_SEMI_BOLD } from '@theme/fonts'
import { NEUTRAL_COLOR_75 } from '@theme/colors'

const styles = StyleSheet.create({
  container: {
    paddingVertical: rem(1),
  },
  text: {
    textAlign: 'center',
    ...OPENSANS_SEMI_BOLD,
    color: NEUTRAL_COLOR_75,
  },
})

export default styles
