/* @flow */

import { StyleSheet } from 'react-native'
import { rem } from '@helpers/stylesheet'
import { NEUTRAL_COLOR_10 } from '@theme/colors'
import { LIGHT_BOX_SHADOW } from '@theme/box-shadows'

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: rem(.5),
    borderBottomWidth: 1,
    borderBottomColor: NEUTRAL_COLOR_10,
    ...LIGHT_BOX_SHADOW,
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    width: rem(4),
    height: rem(5),
  },
  icon: {
    top: rem(.125),
    width: rem(1.5),
    height: rem(1.5),
    resizeMode: 'contain',
  },
})

export default styles
