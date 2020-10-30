import React from 'react'
import {
  Alert,
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
  Image,
} from 'react-native'
import theme from '../../theme'
import Divider from '../../components/Divider'
const logoImage = require('../../assets/images/12.jpg')
interface Props {
  items?: any // TODO data or call Api to take
  onPress: () => void
}

const MessageItem: React.FC<Props> = ({items}) => {
  const handlerLongClick = () => {
    Alert.alert('Button Long Pressed', undefined, [{text: 'OK'}])
  }
  const handlerClick = () => {
    Alert.alert('Button click Pressed', undefined, [{text: 'OK'}])
  }
  return (
    <View style={styles.main}>
      <TouchableOpacity
        onLongPress={handlerLongClick}
        onPress={handlerClick}
        activeOpacity={0.6}>
        <View style={styles.wrapStyle}>
          <View style={styles.wrapAvata}>
            <Image style={styles.img} source={logoImage} />
          </View>
          <View style={styles.contentMessage}>
            <Text style={styles.txtId}>ID: {items.key_id}</Text>
            <Text style={styles.txt} numberOfLines={2}>
              {items.content}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
      <Divider />
    </View>
  )
}
const styles = StyleSheet.create({
  main: {
    marginTop: 12,
    flex: 1,
  },
  wrapStyle: {
    maxHeight: 80,
    flexDirection: 'row',
  },
  wrapAvata: {
    alignItems: 'center',
    width: 50,
  },
  img: {
    maxWidth: 50,
    maxHeight: 80,
    alignSelf: 'center',
  },
  contentMessage: {
    paddingHorizontal: 10,
    flexDirection: 'column',
  },
  txtId: {
    marginRight: 20,
    ...theme.typography({fontSize: 14, fontWeight: 'bold', lineHeight: 1.5}),
  },
  txt: {
    marginRight: 40,
    textAlign: 'center',
    ...theme.typography({
      fontSize: 14,
      fontWeight: 'normal',
      lineHeight: 1.5,
      color: '',
    }),
  },
})

export default MessageItem
