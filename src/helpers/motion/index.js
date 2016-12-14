/* @flow */

import { Component } from 'react'
import { DeviceEventEmitter, NativeModules } from 'react-native'

type AccelerationData = {
  acceleration: {
    x: number,
    y: number,
    z: number,
  },
}

type GyroData = {
  rotationRate: {
    x: number,
    y: number,
    z: number,
  },
}

type MagnetometerData = {
  magneticField: {
    x: number,
    y: number,
    z: number,
  },
}

type Props = {
  children?: React$Element<any>,
  polling: number,
  onChange: (data: AccelerationData | GyroData | MagnetometerData) => void,
  gyroscope?: boolean,
  accelerometer?: boolean,
  magnetometer?: boolean,
}

class Motion extends Component<void, Props, void> {

  componentDidMount(): void {
    const { polling, gyroscope, accelerometer, magnetometer } = this.props
    if (gyroscope) {
      NativeModules.Gyroscope.setGyroUpdateInterval(polling / 1000)
      NativeModules.Gyroscope.startGyroUpdates()
      DeviceEventEmitter.addListener('GyroData', (data: GyroData) => {
        this.onChange(data)
      })
    }
    if (accelerometer) {
      NativeModules.Accelerometer.setAccelerometerUpdateInterval(polling / 1000)
      NativeModules.Accelerometer.startAccelerometerUpdates()
      DeviceEventEmitter.addListener('AccelerationData', (data: AccelerationData) => {
        this.onChange(data)
      })
    }
    if (magnetometer) {
      NativeModules.Magnetometer.setMagnetometerUpdateInterval(polling / 1000)
      NativeModules.Magnetometer.startMagnetometerUpdates()
      DeviceEventEmitter.addListener('MagnetometerData', (data: MagnetometerData) => {
        this.onChange(data)
      })
    }
  }

  onChange = (data: AccelerationData | GyroData | MagnetometerData): void => {
    const { onChange } = this.props
    onChange && onChange(data)
  }

  componentWillUnmount(): void {
    const { gyroscope, accelerometer, magnetometer } = this.props
    if (gyroscope) NativeModules.Gyroscope.stopGyroUpdates()
    if (accelerometer) NativeModules.Accelerometer.stopAccelerometerUpdates()
    if (magnetometer) NativeModules.Magnetometer.stopMagnetometerUpdates()
  }

  render(): ?React$Element<any> {
    const { children } = this.props
    return (children && children) || null
  }

}

export default Motion
