/* @flow */
/* eslint max-len: 0 */

import AppleHealthKit from 'react-native-apple-healthkit'

export type Sample = {
  startDate: Date,
  endDate: Date,
  value: 'INBED',
}

export type Options = {
  startDate: string,
  endDate: string,
  limit: 10,
}

export type Samples = Array<Sample>

export const getSleepSamples = (): Promise<Samples> => {
  return new Promise((resolve, reject) => {
    const today = new Date()
    const yesterday = new Date()
    yesterday.setTime(new Date() - (86400000 * 4))
    const options: Options = {
      startDate: yesterday.toISOString(),
      endDate: today.toISOString(),
      limit: 10,
    }
    AppleHealthKit.getSleepSamples(options, (err: Object, samples: Array<Object>) => {
      if (err) return reject(err)
      return resolve(samples)
    })
  })
}
