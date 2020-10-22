import {useRoute, useNavigationState} from '@react-navigation/native'

// ReactNavigation

export const useIsFirstRouteInParent = () => {
  const route = useRoute()
  const isFirstRouteInParent = useNavigationState(
    (state) => state.routes[0].key === route.key,
  )

  return isFirstRouteInParent
}
