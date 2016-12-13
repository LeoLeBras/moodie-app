/**
 * Create React container by passing optional hocs
 * like graphql queries, graphql mutations ...
 *
 * @flow
 */

import { compose, shouldUpdate } from 'recompose'

type Props = Object & {
  children: React$Element<any>,
}

export default (...funcs: Array<Function>): Function => {
  return compose(
    ...funcs,
    shouldUpdate((props, { data }) => (data ? !data.loading : true))
  )(({ children, ...props }: Props): React$Element<any> => {
    return children(props)
  })
}
