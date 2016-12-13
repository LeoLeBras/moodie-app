/* @flow */

import { connect } from 'react-redux'
import { changeColor, changeBrightness } from '@store/hue'
import { createContainer } from '@helpers/redux'

const mapStateToProps = () => ({})
const mapDispatchToProps = { changeColor, changeBrightness }

export default createContainer(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  ),
)
