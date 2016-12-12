/* @flow */

import AppleHealthKit from 'react-native-apple-healthkit'

export type Response = {
  value: 'undefined' | 'male' | 'female',
}

export const getSex = (): Promise<Response> => {
  return new Promise((resolve, reject) => {
    AppleHealthKit.getBiologicalSex(null, (error: Object, response: Response) => {
      if (error) return reject(error)
      return resolve(response)
    })
  })
}
