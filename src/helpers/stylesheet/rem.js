/* @flow */

import { DEFAULT_RESPONSIVE_FONT_SIZE } from '@theme/fonts'

export default function rem(value: number): number {
  return DEFAULT_RESPONSIVE_FONT_SIZE * value
}
