import React, {useState} from 'react'
import {
  View,
  Modal,
  StyleSheet,
  Platform,
  Text,
  ScrollView,
  TouchableOpacity,
} from 'react-native'
import theme from '../../theme'
interface Props {
  text?: string
  onPress?: () => void
}
const ButtonSend: React.FC<Props> = ({text, onPress}) => {
  return (
    <View style={styles.main}>
      <TouchableOpacity style={styles.btn}>
        <Text numberOfLines={1} style={styles.txt}>
          {'Send to Group'}
        </Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  main: {
    justifyContent: 'center',
    alignContent: 'center',
  },
  btn: {
    width: 120,
    borderWidth: 1,
    borderRadius: 2,
    padding: 10,
    marginLeft: 4,
    justifyContent: 'center',
    backgroundColor: theme.colors.colorButton,
  },
  txt: {
    color: theme.colors.textBlackPrimary,
  },
})
export default ButtonSend
