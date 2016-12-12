/* @flow */

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
    const options: Options = {
      startDate: new Date(2016, 10, 1).toISOString(),
      endDate: new Date().toISOString(),
      limit: 10,
    }
    AppleHealthKit.getSleepSamples(options, (err: Object, samples: Array<Object>) => {
      if (err) return reject(err)
      return resolve(samples)
    })
  })
}
