/* @flow */

import { Dimensions, StyleSheet } from 'react-native'
import { rem } from '@helpers/stylesheet'
import { NEUTRAL_COLOR_00 } from '@theme/colors'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Dimensions.get('window').height >= 667
      ? rem(2)
      : rem(1.5),
    alignItems: 'center',
    backgroundColor: NEUTRAL_COLOR_00,
  },
})

export default styles
