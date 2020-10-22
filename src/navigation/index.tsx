import {
  NavigationContainer,
  NavigationContainerRef,
} from '@react-navigation/native'
import React from 'react'

import {RootStackNavigator} from './navigators/RootStackNavigator'
import getActiveRouteName from './utils/getActiveRouteName'

const AppNavigation = () => {
  const routeNameRef = React.useRef<string | null>(null)
  const navigationRef = React.useRef<NavigationContainerRef | null>(null)

  React.useEffect(() => {
    const state = navigationRef?.current?.getRootState()
    if (!state) return
    routeNameRef.current = getActiveRouteName(state)
  }, [])

  return (
    <NavigationContainer
      onStateChange={(state) => {
        if (!state) return
        const currentRouteName = getActiveRouteName(state)
        if (!currentRouteName) return
        routeNameRef.current = currentRouteName
      }}
      ref={navigationRef}>
      <RootStackNavigator />
    </NavigationContainer>
  )
}

export default AppNavigation
