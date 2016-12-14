/* @flow */

import { StyleSheet } from 'react-native'
import { rem } from '@helpers/stylesheet'
import { NEUTRAL_COLOR_00 } from '@theme/colors'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    marginTop: rem(2.5),
    backgroundColor: NEUTRAL_COLOR_00,
  },
  title: {
    marginBottom: rem(2),
  },
})

export default styles
