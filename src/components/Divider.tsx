import React from 'react'
import {StyleProp, StyleSheet, View, ViewStyle, Text} from 'react-native'
interface Props {
  style?: StyleProp<ViewStyle>
}

const Divider: React.FC<Props> = ({style}) => {
  return <View style={styles.main} />
}
const styles = StyleSheet.create({
  main: {
    height: 2,
    marginTop: 5,
    backgroundColor: 'grey',
  },
})

export default Divider
