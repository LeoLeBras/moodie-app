/* @flow */

import AppleHealthKit from 'react-native-apple-healthkit'

export type Steps = {
  startDate: string,
  endDate: string,
  value: number,
}

export const getStepCount = (): Promise<Steps> => {
  return new Promise((resolve, reject) => {
    const day = new Date()
    const options = { date: day.toISOString() }
    AppleHealthKit.getStepCount(options, (err: Object, steps: Steps) => {
      if (err) return reject(err)
      return resolve(steps)
    })
  })
}
