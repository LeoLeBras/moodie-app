/* @flow */

import { connect } from 'react-redux'
import { createContainer } from '@helpers/redux'
import { getData } from '@store/health'

const mapStateToProps = ({ health }) => ({ health })
const mapDispatchToProps = { getData }

export default createContainer(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  ),
)
