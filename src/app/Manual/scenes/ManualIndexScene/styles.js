/* @flow */

import { StyleSheet } from 'react-native'
import { rem } from '@helpers/stylesheet'
import { NEUTRAL_COLOR_00 } from '@theme/colors'

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    paddingTop: rem(1.5),
    backgroundColor: NEUTRAL_COLOR_00,
  },
  title: {
    marginBottom: rem(1.75),
  },
  tabBar: {
    flexDirection: 'row',
  },
  content: {
    marginTop: rem(1.5),
    height: rem(20),
  },
})

export default styles
