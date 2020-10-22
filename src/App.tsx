import React from 'react'
import {View, StatusBar, Platform, StyleSheet} from 'react-native'
import AppNavigation from './navigation'

const App: React.FC = () => {
  return (
    <View style={styles.container}>
      <StatusBar
        translucent
        backgroundColor="rgba(0,0,0,0.2)"
        barStyle={Platform.OS === 'ios' ? 'dark-content' : undefined}
      />
      <AppNavigation />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})

export default App
