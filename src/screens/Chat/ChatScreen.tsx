import React, {Text, View} from 'react-native'
import {StyleSheet} from 'react-native'

const ChatScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Chat Screen</Text>
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

export default ChatScreen
