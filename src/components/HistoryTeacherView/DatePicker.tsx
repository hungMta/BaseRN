import moment from 'moment'
import React, {useState} from 'react'
import {TouchableOpacity, StyleSheet, View} from 'react-native'
import DateTimePickerModal from 'react-native-modal-datetime-picker'
import {Text} from 'react-native-paper'
import theme from '../../theme'

interface Props {
  timeDefault?: string
  timeSelected?: string
  onTimeSelected: (time: string) => void
}
const DatePicker: React.FC<Props> = ({
  timeDefault,
  timeSelected,
  onTimeSelected,
}) => {
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false)
  const [timeSelectedShow, setTimeSelected] = useState(timeSelected)

  const showDatePicker = () => {
    setDatePickerVisibility(true)
  }

  const hideDatePicker = () => {
    setDatePickerVisibility(false)
  }
  const handleConfirm = (date: any) => {
    var time = moment(date).format('DD/MM/YYYY')
    setTimeSelected(time)
    onTimeSelected(time)
    hideDatePicker()
  }

  return (
    <View style={styles.main}>
      <TouchableOpacity onPress={showDatePicker} style={styles.btn}>
        {timeSelectedShow ? (
          <Text numberOfLines={1} style={styles.txt}>
            {timeSelectedShow}
          </Text>
        ) : (
          <Text numberOfLines={1} style={styles.txt}>
            {timeDefault}
          </Text>
        )}
      </TouchableOpacity>

      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="date"
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  main: {
    justifyContent: 'center',
    alignContent: 'center',
  },
  btn: {
    borderWidth: 2,
    borderRadius: 2,
    padding: 6,
    marginLeft: 4,
    justifyContent: 'center',
    backgroundColor: theme.colors.white,
  },
  txt: {
    color: theme.colors.textBlackPrimary,
  },
})

export default DatePicker
