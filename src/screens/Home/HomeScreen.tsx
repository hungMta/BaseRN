import React, {useState} from 'react'
import {
  StyleSheet,
  View,
  FlatList,
  Image,
  SafeAreaView,
  Platform,
} from 'react-native'
import Loading from '../../components/Loading'
import IdView from '../../components/IdView'
import MessageItem from './MessageItem'
import SearchView from '../../components/SearchView/SearchView'
import TabGroup from '../../components/TabGroup/TabGroup'

import HeaderOption from '../../components/HeaderOption'

import {useRef} from 'react'
import {useEffect} from 'react'
const logoImage = require('../../assets/images/12.jpg')
const HomeScreen = () => {
  const data = [
    {
      id: 1,
      key_id: '12398102 223 PHI_NQ ',
      content: ' hi hw  自分の保護者ID sj sj qu woz qwh ls shj',
    },
    {
      id: 2,
      key_id: '12398102 2s1 - PHI_NQ',
      content: ' 自分の保護者ID  hi hw sj sj qu woz qed wh ls shj',
    },
    {
      id: 3,
      key_id: '123 981 02  HUNG-TD',
      content: ' hi hw sj sj qu woz 自分の保護者ID sd  qwh ls shj',
    },
    {
      id: 4,
      key_id: '2 1239 81 s02 QUAN XD',
      content: ' hi hw sj sj qu woz qwh ls shj 自分の保護者ID',
    },
  ]
  const flastRef = useRef(null)
  const [currentIndex, setCurrentIndex] = useState(1)
  const [isApplySurala, setApplySulara] = useState(false)
  const [loading, setLoading] = useState(false)
  const handlerItem = async () => {
    setLoading(true)
    setTimeout(function () {
      setLoading(false)
    }, 2000)
  }
  useEffect(() => {
    // TODO call API reset list Data
    handlerItem()
  }, [currentIndex])
  return (
    <SafeAreaView style={styles.container}>
      {loading && <Loading isShowIndicator={loading} />}
      <HeaderOption />
      {isApplySurala && (
        <View style={styles.main}>
          <Image style={styles.logo} source={logoImage} />
        </View>
      )}

      <View style={styles.mainId}>
        <IdView isGroupTalk={false} selectedItem={data[1]} isStudent={false} />
        <SearchView />
        <TabGroup
          itemSelected={currentIndex}
          onItemSelected={setCurrentIndex}
        />

        <FlatList
          ref={flastRef}
          data={data}
          keyExtractor={(item) => `${item.id}`}
          scrollIndicatorInsets={styles.scrollIndicatorInsets}
          contentContainerStyle={styles.contentContainerStyle}
          renderItem={({item}) => (
            <MessageItem
              key={`${item.id}`}
              items={item}
              onPress={() => {
                // TODO do some thing you want
              }}
            />
          )}
        />
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    marginTop: Platform.OS === 'android' ? 30 : 0,
  },
  main: {
    marginTop: 10,
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'grey',
    justifyContent: 'center',
  },
  mainId: {
    flex: 1,
    marginTop: 10,
    paddingHorizontal: 20,
  },
  logo: {
    width: 350,
    height: 300,
    alignSelf: 'center',
  },
  scrollIndicatorInsets: {
    right: 1,
  },
  contentContainerStyle: {
    paddingVertical: 10,
  },
  backgroundVideo: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
})

export default HomeScreen
