/* @flow */

import { StyleSheet } from 'react-native'
import { rem } from '@helpers/stylesheet'
import { NEUTRAL_COLOR_00 } from '@theme/colors'
import { OPENSANS_SEMI_BOLD } from '@theme/fonts'

const INPUT_SIZE = rem(10)

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    marginTop: rem(1.5),
    justifyContent: 'center',
    alignItems: 'center',
    width: INPUT_SIZE,
    height: INPUT_SIZE,
    borderRadius: INPUT_SIZE / 2,
  },
  value: {
    top: rem(-.125),
    left: rem(-.125),
    backgroundColor: 'transparent',
    color: NEUTRAL_COLOR_00,
    ...OPENSANS_SEMI_BOLD,
    fontSize: rem(2.75),
  },
  controls: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: rem(2.5),
  },
  slider: {
    marginHorizontal: rem(1.5),
    width: rem(10),
  },
  indicator: {
    width: rem(1.75),
    height: rem(1.75),
  },
})

export default styles
