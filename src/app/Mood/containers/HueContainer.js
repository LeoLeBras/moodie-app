/* @flow */

import { connect } from 'react-redux'
import { turnOn, turnOff } from '@store/hue'
import { createContainer } from '@helpers/redux'

const mapStateToProps = ({ hue }) => ({ hue })
const mapDispatchToProps = { turnOn, turnOff }

export default createContainer(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  ),
)
