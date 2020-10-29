import React from 'react'
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native'
import theme from '../../theme'
import {TabGroupType} from '../../navigation/utils/TabGroupType'
interface Props {
  text?: string
  itemSelected?: number
  color?: string
  onItemSelected: (index: number) => void
}
const TabGroup: React.FC<Props> = ({
  text,
  itemSelected,
  color = theme.colors.colorButton,
  onItemSelected,
}) => {
  let colorButtonStudent = color
  let colorButtonTeacher = color
  let colorButtonGuardian = color
  let colorButtonGroup = color

  if (itemSelected === TabGroupType.student) {
    colorButtonStudent = theme.colors.red
  }
  if (itemSelected === TabGroupType.teacher) {
    colorButtonTeacher = theme.colors.red
  }
  if (itemSelected === TabGroupType.guardian) {
    colorButtonGuardian = theme.colors.red
  }
  if (itemSelected === TabGroupType.group) {
    colorButtonGroup = theme.colors.red
  }
  return (
    <View style={styles.centeredView}>
      <TouchableOpacity
        style={styles.styleTouch}
        onPress={() => {
          // TODO
          onItemSelected(TabGroupType.student)
        }}>
        <View
          style={[styles.styleButton, {backgroundColor: colorButtonStudent}]}>
          <Text style={styles.textBtn}>Student</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.styleTouch}
        onPress={() => {
          // TODO
          onItemSelected(TabGroupType.teacher)
        }}>
        <View
          style={[styles.styleButton, {backgroundColor: colorButtonTeacher}]}>
          <Text style={styles.textBtn}>Teacher</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.styleTouch}
        onPress={() => {
          onItemSelected(TabGroupType.guardian)
          // TODO
        }}>
        <View
          style={[styles.styleButton, {backgroundColor: colorButtonGuardian}]}>
          <Text style={styles.textBtn}>Guardian</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.styleTouch}
        onPress={() => {
          onItemSelected(TabGroupType.group)
          // TODO
        }}>
        <View style={[styles.styleButton, {backgroundColor: colorButtonGroup}]}>
          <Text style={styles.textBtn}>Group </Text>
        </View>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  centeredView: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  styleTouch: {
    marginTop: 5,
    flex: 1,
  },

  styleButton: {
    backgroundColor: theme.colors.colorButton,
    marginHorizontal: 1,
    borderColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 1,
    padding: 5,
  },
  textBtn: {
    color: '#000000',
  },
})
export default TabGroup
