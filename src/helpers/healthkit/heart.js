/* @flow */

import AppleHealthKit from 'react-native-apple-healthkit'

export type Sample = {
  startDate: string,
  endDate: string,
  value: number;
}

export const getHeartRateSamples = (): Promise<Array<Sample>> => {
  return new Promise((resolve, reject) => {
    const options = {
      unit: 'bpm',
      startDate: new Date(2016, 4, 27).toISOString(),
      endDate: new Date().toISOString(),
      ascending: false,
      limit: 10,
    }
    AppleHealthKit.getHeartRateSamples(options, (err: Object, samples: Array<Sample>) => {
      if (err) return reject(err)
      return resolve(samples)
    })
  })
}
