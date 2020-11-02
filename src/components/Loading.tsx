import React from 'react'
import {
  ActivityIndicator,
  View,
  Modal,
  StyleSheet,
  Platform,
} from 'react-native'
import theme from '../theme'

interface Props {
  text?: string
  size?: 'large' | 'small'
  colorIndicator?: string
  isShowIndicator: boolean
}
const Loading: React.FC<Props> = ({
  isShowIndicator = false,
  size = 'large',
  colorIndicator = theme.colors.red,
}) => {
  return (
    <Modal animationType="slide" transparent={true} visible={isShowIndicator}>
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <ActivityIndicator size={size} color={colorIndicator} />
        </View>
      </View>
    </Modal>
  )
}

const styles = StyleSheet.create({
  centeredView: {
    backgroundColor: 'rgba(52, 52, 52, 0.6)',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 10,
  },
  modalView: {
    backgroundColor: Platform.OS === 'android' ? 'white' : undefined,
    margin: 10,
    borderRadius: 40,
    padding: 15,
    alignItems: 'center',
  },
})
export default Loading
