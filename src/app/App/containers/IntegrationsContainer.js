/* @flow */

import { connect } from 'react-redux'
import { createContainer } from '@helpers/redux'
import { toogleIntegration } from '@store/integrations'

const mapStateToProps = ({ integrations }) => ({ integrations })
const mapDispatchToProps = { toogleIntegration }

export default createContainer(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  ),
)
