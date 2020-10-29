import React from 'react'
import {
  StyleProp,
  StyleSheet,
  Text,
  View,
  ViewStyle,
  TouchableOpacity,
} from 'react-native'
import theme from '../theme'
interface Props {
  isGroupTalk: boolean
  selectedItem?: any
  isStudent: boolean
  style?: StyleProp<ViewStyle>
}
const IdView: React.FC<Props> = ({isGroupTalk, selectedItem, isStudent}) => {
  console.log(isStudent)
  let typeGroupTalk = false
  let typeHistory = false
  let typeBlank = false

  if (isGroupTalk) {
    typeGroupTalk = true
  } else if (!isGroupTalk && isStudent) {
    typeBlank = true
  } else if (!isGroupTalk && !isStudent) {
    typeHistory = true
  }

  return (
    <View style={styles.wrapButton}>
      <TouchableOpacity
        style={styles.btnId}
        onPress={() => {
          // TODO
        }}>
        <View style={styles.styleButton}>
          <Text style={styles.textBtn} numberOfLines={1}>
            +ID: {selectedItem.key_id} Some Thing asdasd asd asdasd asd
          </Text>
        </View>
      </TouchableOpacity>
      {typeHistory && (
        <TouchableOpacity
          style={styles.btnGroup}
          onPress={() => {
            // TODO
          }}>
          <View style={styles.styleButton}>
            <Text style={styles.textBtn} numberOfLines={1}>
              History learn
            </Text>
          </View>
        </TouchableOpacity>
      )}
      {typeBlank && <View style={{flex: 1}} />}

      {typeGroupTalk && (
        <TouchableOpacity
          style={styles.btnGroup}
          onPress={() => {
            // TODO
          }}>
          <View style={styles.styleButton}>
            <Text style={styles.textBtn} numberOfLines={1}>
              Group 12
            </Text>
          </View>
        </TouchableOpacity>
      )}
    </View>
  )
}
const styles = StyleSheet.create({
  wrapButton: {
    flex: 0,
    alignItems: 'center',
    flexDirection: 'row',
  },
  btnId: {
    flex: 2,
    backgroundColor: theme.colors.grey,
  },
  styleButton: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 2,
    padding: 5,
  },
  btnGroup: {
    flex: 1,
    backgroundColor: theme.colors.colorButton,
    marginLeft: 12,
  },
  textBtn: {
    color: 'white',
  },
})

export default IdView
