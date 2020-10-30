import React from 'react'
import HomeScreen from '../../screens/Home/HomeScreen'
import SignInScreen from '../../screens/Auth/SignInScreen'
import {createStackNavigator} from '@react-navigation/stack'
import theme from '../../theme'
import {AccountType} from '../../utils/Constant'
export type RootStackNavigatorParamList = {
  SignInScreen: undefined
  HomeScreen: {accountType: AccountType}
}

const Stack = createStackNavigator<RootStackNavigatorParamList>()
export const RootStackNavigator = () => {
  return (
    <Stack.Navigator
      mode="modal"
      screenOptions={{
        title: '',
        cardStyle: {backgroundColor: theme.colors.white},
      }}
      initialRouteName={'SignInScreen'}>
      <Stack.Screen
        name="SignInScreen"
        component={SignInScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  )
}
