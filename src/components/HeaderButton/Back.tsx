import {useNavigation} from '@react-navigation/native'
import React from 'react'

import Base from './Base'

const Back = () => {
  const {goBack} = useNavigation()
  return <Base icon="chevron-left" onPress={() => goBack()} />
}

export default Back
