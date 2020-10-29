import React from 'react'
import {View, StyleSheet, Text} from 'react-native'
import {TouchableOpacity} from 'react-native-gesture-handler'
import theme from '../theme'

interface Props {
  text?: string
}
const HeaderOption: React.FC<Props> = ({text = '1726123-2387'}) => {
  return (
    <View style={styles.centeredView}>
      <View style={styles.styleUserId}>
        <Text style={styles.textTitle}>User ID </Text>
        <Text style={styles.textID}>{text}</Text>
      </View>
      <View style={styles.styleSulala}>
        <Text style={styles.textTitle}> SuLaLa</Text>
      </View>
      <View style={styles.wrapButton}>
        <TouchableOpacity
          onPress={() => {
            // TODO
          }}>
          <View style={styles.styleButton}>
            <Text style={styles.textBtn}>Logout</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            // TODO
          }}>
          <View style={[styles.styleButton, {marginLeft: 5}]}>
            <Text style={styles.textBtn}>Setting</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  centeredView: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  styleUserId: {
    flexDirection: 'column',
    justifyContent: 'center',
    flex: 1,
    alignItems: 'center',
  },
  textTitle: {},
  textID: {},

  styleSulala: {
    marginHorizontal: -20,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  wrapButton: {
    alignItems: 'center',
    flex: 1,
    flexDirection: 'row',
  },
  styleButton: {
    backgroundColor: theme.colors.red,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 2,
    padding: 5,
  },
  textBtn: {
    color: 'white',
  },
})
export default HeaderOption
