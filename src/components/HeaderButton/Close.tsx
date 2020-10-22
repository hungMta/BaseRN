import {useNavigation} from '@react-navigation/native'
import React from 'react'

import Base from './Base'

const Close = () => {
  const {goBack} = useNavigation()
  return <Base icon="close" onPress={() => goBack()} />
}

export default Close
