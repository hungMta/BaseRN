import React from 'react'
import HomeScreen from '../../screens/Home/HomeScreen'
import SignInScreen from '../../screens/Auth/SignInScreen'
import {createStackNavigator} from '@react-navigation/stack'
import theme from '../../theme'
import {View} from 'react-native'
import HeaderButton from '../../components/HeaderButton'
import createHeaderOptions from '../utils/createHeaderOptions'

export type RootStackNavigatorParamList = {
  SignInScreen: undefined
  HomeScreen: undefined
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
        options={{
          ...createHeaderOptions({backButton: <HeaderButton.Close />}),
          title: 'Home',
          headerRight: () => <View />,
          headerTitleStyle: {
            textAlign: 'center',
          },
        }}
      />
    </Stack.Navigator>
  )
}
