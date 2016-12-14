/* @flow */

import { Dimensions, StyleSheet } from 'react-native'
import { DEFAULT_BOX_SHADOW } from '@theme/box-shadows'
import { rem } from '@helpers/stylesheet'
import { PRIMARY_BRAND_COLOR_50, NEUTRAL_COLOR_90 } from '@theme/colors'
import { OPENSANS_REGULAR, OPENSANS_SEMI_BOLD } from '@theme/fonts'

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: rem(.5),
    paddingVertical: rem(1),
    paddingHorizontal: rem(1),
    width: Dimensions.get('window').width - rem(2),
    ...DEFAULT_BOX_SHADOW,
    borderRadius: rem(.25),
  },
  name: {
    flex: 1,
    top: rem(-.0625),
    marginLeft: rem(1.25),
    backgroundColor: 'transparent',
    ...OPENSANS_SEMI_BOLD,
    color: NEUTRAL_COLOR_90,
    fontSize: rem(1),
  },
  icon: {
    width: rem(3),
    height: rem(3),
    resizeMode: 'contain',
  },
  button: {
    paddingVertical: rem(.375),
    paddingHorizontal: rem(.5),
    width: rem(7),
    borderWidth: 1,
    borderColor: PRIMARY_BRAND_COLOR_50,
    borderRadius: rem(.25),
  },
  buttonWrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    top: rem(-.0625),
    color: PRIMARY_BRAND_COLOR_50,
    ...OPENSANS_REGULAR,
    textAlign: 'center',
  },
  buttonIcon: {
    top: rem(-.03125),
    marginRight: rem(.3125),
    resizeMode: 'contain',
    width: rem(.9375),
    height: rem(.9375),
  },
})

export default styles
