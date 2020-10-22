import React from 'react'

import {useIsFirstRouteInParent} from '../../utils/hooks'
import Back from './Back'
import Close from './Close'

const Auto = () => {
  const isFirstRouteInParent = useIsFirstRouteInParent()

  return isFirstRouteInParent ? <Close /> : <Back />
}

export default Auto
