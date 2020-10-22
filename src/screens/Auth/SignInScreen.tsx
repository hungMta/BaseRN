import {useNavigation} from '@react-navigation/native'
import React from 'react'
import {Button, StyleSheet, View} from 'react-native'

const SignInScreen = () => {
  const navigation = useNavigation()
  return (
    <View style={styles.container}>
      <Button
        onPress={() => {
          navigation.navigate('HomeScreen')
        }}
        title="SignIn"
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
})

export default SignInScreen
