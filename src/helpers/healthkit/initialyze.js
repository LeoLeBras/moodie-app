/* @flow */

import AppleHealthKit from 'react-native-apple-healthkit'

export type Permissions = {
  permissions: {
    read?: Array<string>,
    write?: Array<string>,
  },
}

export default (permissions: Permissions) => {
  return new Promise((resolve, reject): ?Promise<any> => {
    AppleHealthKit.isAvailable((availableError: Object, available: any) => {
      if (availableError || !available) return reject(availableError)
      return AppleHealthKit.initHealthKit(permissions, (initError: Object) => {
        if (initError) return reject(initError)
        return resolve(true)
      })
    })
  })
}
