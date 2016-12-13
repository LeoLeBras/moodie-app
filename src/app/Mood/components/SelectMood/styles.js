/* @flow */

import { StyleSheet, Dimensions } from 'react-native'
import { rem } from '@helpers/stylesheet'
import { OPENSANS_SEMI_BOLD } from '@theme/fonts'
import { NEUTRAL_COLOR_90 } from '@theme/colors'
import { DEFAULT_BOX_SHADOW } from '@theme/box-shadows'

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: rem(2),
  },
  coverflow: {
    height: rem(8.5),
  },
  page: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  emotion: {
    alignItems: 'center',
    justifyContent: 'center',
    width: rem(6.25),
  },
  img: {
    resizeMode: 'contain',
    width: rem(6.25),
    height: rem(6.25),
  },
  label: {
    margin: 16,
    color: '#fff',
  },
  value: {
    position: 'absolute',
    width: Dimensions.get('window').width,
    bottom: 0,
    textAlign: 'center',
    ...OPENSANS_SEMI_BOLD,
    color: NEUTRAL_COLOR_90,
    fontSize: rem(1.0625),
  },
  button: {
    width: rem(17),
    paddingVertical: rem(1.125),
    marginTop: Dimensions.get('window').height >= 667
      ? rem(2.25)
      : rem(1.25),
    marginBottom: Dimensions.get('window').height >= 667
      ? rem(2)
      : rem(.5),
    ...DEFAULT_BOX_SHADOW,
    borderRadius: rem(.125),
  },
  buttonIcon: {
    position: 'absolute',
    top: rem(1.125),
    left: rem(3.5),
    width: rem(1.25),
    height: rem(1.25),
    resizeMode: 'contain',
  },
  buttonText: {
    textAlign: 'center',
    ...OPENSANS_SEMI_BOLD,
    color: NEUTRAL_COLOR_90,
  },
})

export default styles
