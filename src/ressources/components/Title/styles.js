/* @flow */

import { StyleSheet } from 'react-native'
import { rem } from '@helpers/stylesheet'
import { NEUTRAL_COLOR_75 } from '@theme/colors'
import { OPENSANS_REGULAR } from '@theme/fonts'

const styles = StyleSheet.create({
  main: {
    color: NEUTRAL_COLOR_75,
    fontSize: rem(1.),
    ...OPENSANS_REGULAR,
    textAlign: 'center',
  },
})

export default styles
