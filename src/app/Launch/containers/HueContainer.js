/* @flow */

import { createContainer } from '@helpers/redux'
import { connect } from 'react-redux'
import { searchHueBridge } from '@store/hue'

const mapStateToProps = ({ hue }) => ({ hue })
const mapDispatchToProps = { searchHueBridge }

export default createContainer(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  ),
)
