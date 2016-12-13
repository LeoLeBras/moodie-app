/* @flow */

import { connect } from 'react-redux'
import { selectMood } from '@store/mood'
import { createContainer } from '@helpers/redux'

const mapStateToProps = ({ mood }) => ({ mood })
const mapDispatchToProps = { selectMood }

export default createContainer(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  ),
)
