/* @flow */

import { Dimensions, StyleSheet } from 'react-native'
import { rem } from '@helpers/stylesheet'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Dimensions.get('window').height >= 667
      ? rem(2)
      : rem(1.5),
    alignItems: 'center',
  },
})

export default styles
