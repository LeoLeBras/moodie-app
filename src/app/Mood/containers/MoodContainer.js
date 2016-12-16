/* @flow */

import { connect } from 'react-redux'
import { onUnselect, selectMood } from '@store/mood'
import { createContainer } from '@helpers/redux'

const mapStateToProps = ({ mood }) => ({ mood })
const mapDispatchToProps = { onUnselect, selectMood }

export default createContainer(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  ),
)
