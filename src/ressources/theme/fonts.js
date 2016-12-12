/* @flow */

import { Platform } from 'react-native'
import { vw, vh } from '@helpers/stylesheet'

// 15.684000000000001 on iPhone 5
export const DEFAULT_RESPONSIVE_FONT_SIZE = 15 + vw(.125) + vh(.05)

export const OPENSANS_LIGHT = Platform.OS === 'ios'
  ? {
    fontFamily: 'OpenSans',
    fontWeight: '200',
  }
  : {
    fontFamily: 'OpenSans-Light',
  }

export const OPENSANS_LIGHT_ITALIC = Platform.OS === 'ios'
  ? {
    fontFamily: 'OpenSans',
    fontWeight: '200',
    fontStyle: 'italic',
  }
  : {
    fontFamily: 'OpenSans-Light-Italic',
  }

export const OPENSANS_REGULAR = Platform.OS === 'ios'
  ? {
    fontFamily: 'OpenSans',
    fontWeight: '400',
  }
  : {
    fontFamily: 'OpenSans-Regular',
  }

export const OPENSANS_REGULAR_ITALIC = Platform.OS === 'ios'
  ? {
    fontFamily: 'OpenSans',
    fontWeight: '400',
    fontStyle: 'italic',
  }
  : {
    fontFamily: 'OpenSans-Regular_Italic',
  }

export const OPENSANS_SEMI_BOLD = Platform.OS === 'ios'
  ? {
    fontFamily: 'OpenSans',
    fontWeight: '600',
  }
  : {
    fontFamily: 'OpenSans-Semibold',
  }

export const OPENSANS_BOLD = Platform.OS === 'ios'
  ? {
    fontFamily: 'OpenSans',
    fontWeight: '700',
  }
  : {
    fontFamily: 'OpenSans-Bold',
  }

export const OPENSANS_BOLD_ITALIC = Platform.OS === 'ios'
  ? {
    fontFamily: 'OpenSans',
    fontWeight: '700',
    fontStyle: 'italic',
  }
  : {
    fontFamily: 'OpenSans-Bold-Italic',
  }
