import React from 'react'
import {StyleSheet, SafeAreaView, Platform} from 'react-native'
import {AccountType} from '../../utils/Constant'
import StudentHomeScreen from '../StudentHome/StudentHomeScreen'
import TeacherHomeScreen from '../TeacherHome/TeacherHomeScreen'
import GuardianHomeScreen from '../GuardianHome/GuardianHomeScreen'
import HeaderOption from '../../components/HeaderOption'
import {RouteProp} from '@react-navigation/native'
import {RootStackNavigatorParamList} from '../../navigation/navigators/RootStackNavigator'

interface Props {
  route: RouteProp<RootStackNavigatorParamList, 'HomeScreen'>
}

const HomeScreen: React.FC<Props> = ({route}) => {
  const accountType = route.params.accountType
  var contentView: React.ReactElement

  switch (accountType) {
    case AccountType.Student:
      contentView = <StudentHomeScreen />
      break
    case AccountType.Teacher:
      contentView = <TeacherHomeScreen />
      break
    case AccountType.Guardian:
      contentView = <GuardianHomeScreen />
      break
  }

  return (
    <SafeAreaView style={styles.container}>
      <HeaderOption />
      {contentView}
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
