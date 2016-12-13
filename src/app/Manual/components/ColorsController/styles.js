/* @flow */

import { StyleSheet } from 'react-native'
import { rem } from '@helpers/stylesheet'

const PASTILLE_SIZE = rem(1.75)
const PASTILLE_BORDER_OFFSET = .75
const PASTILLE_BORDER = 2

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  colors: {
    flex: 1,
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: rem(18),
  },
  pastille: {
    margin: rem(1.5),
    width: PASTILLE_SIZE,
    height: PASTILLE_SIZE,
    borderRadius: PASTILLE_SIZE / 2,
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: .5,
    shadowRadius: 5,
    elevation: 3,
  },
  active: {
    left: (PASTILLE_SIZE * (PASTILLE_BORDER_OFFSET / -2)) + (PASTILLE_BORDER),
    top: (PASTILLE_SIZE * (PASTILLE_BORDER_OFFSET / -2)) + (PASTILLE_BORDER),
    width: (PASTILLE_SIZE * (1 + PASTILLE_BORDER_OFFSET)) - (PASTILLE_BORDER * 2),
    height: (PASTILLE_SIZE * (1 + PASTILLE_BORDER_OFFSET)) - (PASTILLE_BORDER * 2),
    borderRadius: (PASTILLE_SIZE * (1 + PASTILLE_BORDER_OFFSET)) / 2,
    borderWidth: PASTILLE_BORDER,
  },
})

export default styles
