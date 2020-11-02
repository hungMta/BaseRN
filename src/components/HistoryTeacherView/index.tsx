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
import moment from 'moment'
import theme from '../../theme'
import DatePicker from './DatePicker'
import {useEffect} from 'react'
import ButtonSend from './ButtonSend'
import ButtonCopy from './ButtonCopy'

var dateNow = moment().format('DD/MM/YYYY')
var dateNextMonth = moment().add(1, 'months').format('DD/MM/YYYY')
interface Props {
  text?: string
  isShowIndicator?: boolean
}
const HistoryTeacherView: React.FC<Props> = ({isShowIndicator = true}) => {
  const [dateStart, setDateInput] = useState(dateNow)
  const [dateEnd, setDate2Input] = useState(dateNextMonth)
  useEffect(() => {}, [dateStart, dateEnd])
  return (
    <Modal animationType="slide" transparent={true} visible={isShowIndicator}>
      <View style={styles.centeredView}>
        <View style={styles.main}>
          <View style={styles.btnClose}>
            <Text style={{textAlign: 'right', color: 'red'}}>X</Text>
          </View>
          <View style={styles.wrapBtnDateTime}>
            <DatePicker
              timeDefault={dateStart}
              onTimeSelected={(time) => {
                setDateInput(time)
              }}
            />
            <Text style={styles.txt}>{'  ~  '}</Text>
            <DatePicker
              timeDefault={dateEnd}
              onTimeSelected={(time) => {
                setDate2Input(time)
              }}
            />
            <TouchableOpacity
              style={styles.btnSearh}
              onPress={() => {
                // TODO
              }}>
              <Text style={styles.txtSearch}>Search</Text>
            </TouchableOpacity>
          </View>
          <ScrollView style={styles.wrapText}>
            <Text>
              {' '}
              Hồ Chí Minh (/hoʊ tʃiː mɪn/;[1] Vietnamese: [hò cǐ mīŋ̟] (About
              this soundlisten), Saigon: [hò cǐ mɨ̄n]; Chữ nôm: 胡志明; 19 May
              1890 – 2 September 1969), born Nguyễn Sinh Cung,[2][a][4] also
              known as Nguyễn Tất Thành, Nguyễn Ái Quốc, Bác Hồ, or simply Bác
              ('Uncle', pronounced [ʔɓaːk̚˦˥]), was a Vietnamese revolutionary
              and politician. He served as Prime Minister of North Vietnam from
              1945 to 1955 and President from 1945 to 1969. Ideologically a
              Marxist–Leninist, he served as Chairman and First Secretary of the
              Workers' Party of Vietnam. Hồ Chí Minh led the Việt Minh
              independence movement from 1941 onward, establishing the
              Communist-ruled Democratic Republic of Vietnam in 1945 and
              defeating the French Union in 1954 at the Battle of Điện Biên Phủ,
              ending the First Indochina War. He was a key figure in the
              People's Army of Vietnam and the Việt Cộng during the Vietnam War,
              which lasted from 1955 to 1975. The Democratic Republic of Vietnam
              was victorious against the United States and the Republic of
              Vietnam and was reunified with the Republic of South Vietnam in
              1976. Saigon, the former capital of South Vietnam, was renamed Ho
              Chi Minh City in his honor. Ho officially stepped down from power
              in 1965 due to health problems and died in 1969. Hồ Chí Minh's
              life before he came to power in Vietnam is ambiguous. He is known
              to have used between 50[5]:582 to 200 pseudonyms.[6] His birth and
              early life is uncertain and is subject to academic debate. At
              least four existing official biographies vary on names, dates,
              places and other hard facts while unofficial biographies vary even
              more widely.[7] Aside from being a politician, Ho was also a
              writer, a poet and a journalist. He wrote several books, articles
              and poems in French, Chinese and Vietnamese.
            </Text>
          </ScrollView>
          <View style={styles.wrapButton}>
            <ButtonSend />
            <ButtonCopy />
          </View>
        </View>
      </View>
    </Modal>
  )
}

const styles = StyleSheet.create({
  centeredView: {
    backgroundColor: 'rgba(52, 52, 52, 0.6)',
    flex: 1,
  },
  btnClose: {
    paddingHorizontal: 4,
  },
  wrapText: {
    paddingHorizontal: 20,
    marginTop: 12,
  },
  txt: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  main: {
    borderColor: theme.colors.textBlackPrimary,
    borderWidth: 1,
    marginTop: Platform.OS === 'android' ? 30 : 40,
    maxHeight: '85%',
    marginHorizontal: 20,
    marginBottom: 20,
    backgroundColor: theme.colors.white,
  },
  wrapBtnDateTime: {
    flexDirection: 'row',
  },
  btnSearh: {
    borderWidth: 1,
    borderRadius: 4,
    padding: 2,
    marginLeft: 10,
    justifyContent: 'center',
    backgroundColor: theme.colors.grey,
  },
  txtSearch: {
    color: theme.colors.textBlackPrimary,
  },
  wrapButton: {
    marginTop: 4,
    justifyContent: 'center',
    marginBottom: 12,
    flexDirection: 'row',
  },
})
export default HistoryTeacherView
