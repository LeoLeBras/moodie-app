/* @flow */

import AppleHealthKit from 'react-native-apple-healthkit'

export const getHeartRateSamples = (): Promise<Response> => {
  return new Promise((resolve, reject) => {
    const options = {
      unit: 'bpm',
      startDate: new Date(2016, 4, 27).toISOString(),
      endDate: new Date().toISOString(),
      ascending: false,
      limit: 10,
    }
    AppleHealthKit.getHeartRateSamples(options, (err: Object, samples: Array<Object>) => {
      if (err) return reject(err)
      return resolve(samples)
    })
  })
}
