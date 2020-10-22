import {StackHeaderOptions} from '@react-navigation/stack/lib/typescript/src/types'
import React from 'react'
import {View} from 'react-native'

import HeaderButton from '../../components/HeaderButton'

const createHeaderOptions = (options?: {
  transparent?: boolean
  backButton?: React.ReactNode
}): StackHeaderOptions => {
  const transparent = options?.transparent
  const backButton = options?.backButton
  return {
    headerLeft: () =>
      backButton === undefined ? <HeaderButton.Auto /> : backButton,
    headerTransparent: transparent,
    headerBackground: transparent ? () => <View /> : undefined,
  }
}

export default createHeaderOptions
