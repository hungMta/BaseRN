import React from 'react'
import {ActivityIndicator, View, Modal, StyleSheet} from 'react-native'
import theme from '../theme'

interface Props {
  text?: string
  size?: 'large' | 'small'
  colorIndicator?: string
  isShowIndicator: boolean
}
const HeaderOption: React.FC<Props> = ({
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
  },
  modalView: {
    backgroundColor: 'white',
    margin: 10,
    borderRadius: 50,
    padding: 15,
    alignItems: 'center',
  },
})
export default HeaderOption
