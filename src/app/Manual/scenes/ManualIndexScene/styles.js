/* @flow */

import { StyleSheet } from 'react-native'
import { rem } from '@helpers/stylesheet'

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginTop: rem(1.5),
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
