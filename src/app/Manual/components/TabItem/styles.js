/* @flow */

import { Dimensions, StyleSheet } from 'react-native'
import { rem } from '@helpers/stylesheet'
import { NEUTRAL_COLOR_00 } from '@theme/colors'
import { OPENSANS_SEMI_BOLD } from '@theme/fonts'
import { DEFAULT_BOX_SHADOW } from '@theme/box-shadows'

const styles = StyleSheet.create({
  container: {
    marginHorizontal: Dimensions.get('window').width >= 375
      ? rem(.75)
      : rem(.25),
    height: rem(4.25),
    width: rem(9),
    ...DEFAULT_BOX_SHADOW,
  },
  wrapper: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: rem(.25),
  },
  icon: {
    top: rem(-.0625),
    marginLeft: rem(-.125),
    width: rem(1.8),
    height: rem(1.3),
  },
  text: {
    top: rem(-.0625),
    backgroundColor: 'transparent',
    color: NEUTRAL_COLOR_00,
    ...OPENSANS_SEMI_BOLD,
    fontSize: rem(.975),
  },
})

export default styles
