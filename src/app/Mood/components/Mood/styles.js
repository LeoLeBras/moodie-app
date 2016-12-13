/* @flow */

import { Dimensions, StyleSheet } from 'react-native'
import { rem } from '@helpers/stylesheet'
import { OPENSANS_SEMI_BOLD } from '@theme/fonts'
import { NEUTRAL_COLOR_00 } from '@theme/colors'
import { DEFAULT_BOX_SHADOW } from '@theme/box-shadows'

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: rem(1),
    paddingHorizontal: rem(1.5),
    width: Dimensions.get('window').width - rem(2),
    marginBottom: rem(2),
    borderRadius: rem(.25),
    ...DEFAULT_BOX_SHADOW,
  },
  img: {
    marginRight: rem(1),
    width: rem(3),
    height: rem(3),
    resizeMode: 'contain',
  },
  value: {
    backgroundColor: 'transparent',
    ...OPENSANS_SEMI_BOLD,
    fontSize: rem(1.125),
    color: NEUTRAL_COLOR_00,
  },
  state: {
    top: rem(-.125),
    backgroundColor: 'transparent',
    ...OPENSANS_SEMI_BOLD,
    color: NEUTRAL_COLOR_00,
    fontSize: rem(.8125),
    opacity: .875,
  },
})

export default styles
