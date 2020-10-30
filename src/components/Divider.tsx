import React from 'react'
import {StyleProp, StyleSheet, View, ViewStyle} from 'react-native'
import theme from '../theme'
interface Props {
  style?: StyleProp<ViewStyle>
}

const Divider: React.FC<Props> = ({}) => {
  return <View style={styles.main} />
}
const styles = StyleSheet.create({
  main: {
    height: 2,
    marginTop: 5,
    backgroundColor: theme.colors.grey,
  },
})

export default Divider
