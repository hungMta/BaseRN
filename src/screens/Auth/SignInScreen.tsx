import {useNavigation} from '@react-navigation/native'
import React, {useState} from 'react'
import {
  ScrollView,
  StyleSheet,
  View,
  TouchableOpacity,
  Image,
  Text,
  SafeAreaView,
  TextInput,
} from 'react-native'
import Loading from '../../components/Loading'

import Button from '../../components/Button'
import theme from '../../theme'
import {AccountType} from '../../utils/Constant'
const logoImage = require('../../assets/images/12.jpg')

const iconChecked = require('../../assets/images/square_checked_icon.png')
const iconUnCheck = require('../../assets/images/square_uncheck_icon.png')
const SignInScreen = () => {
  const navigation = useNavigation()
  const [checkedTerm, setCheckedTerm] = useState(false)
  const [loading, setLoading] = useState(false)
  const [email, setEmail] = useState('')
  const onPressAgreeTerm = () => {
    setCheckedTerm(!checkedTerm)
  }
  const handlerLogin = async () => {
    setLoading(true)
    setTimeout(function () {
      setLoading(false)
      var accountType = AccountType.Student
      if (email === '1') {
        accountType = AccountType.Student
      }
      if (email === '2') {
        accountType = AccountType.Teacher
      }
      if (email === '3') {
        accountType = AccountType.Guardian
      }
      navigation.navigate('HomeScreen', {
        accountType,
      })
    }, 1000)
  }
  return (
    <SafeAreaView style={styles.container}>
      {loading && <Loading isShowIndicator={loading} />}
      <ScrollView style={styles.wrapContainer}>
        <Image style={styles.logo} source={logoImage} />
        <View style={styles.wrapInput}>
          <TextInput
            underlineColorAndroid="transparent"
            style={styles.textInput}
            onChangeText={setEmail}
          />
          <TextInput
            secureTextEntry={true}
            underlineColorAndroid="transparent"
            style={styles.textInput}
          />
        </View>

        <View style={styles.wrapButton}>
          <View style={styles.wrapCheckBox}>
            <TouchableOpacity
              onPress={() => {
                onPressAgreeTerm()
              }}>
              <Image
                style={styles.img}
                source={checkedTerm ? iconChecked : iconUnCheck}
              />
            </TouchableOpacity>
            <Text style={styles.labelEmail}>I'm agree to login xds</Text>
          </View>
          <Button
            style={styles.btn}
            onPress={() => {
              handlerLogin()
            }}
            size="normal"
            text="SignIn"
            mode="contained"
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.white,
    flexGrow: 1,
  },
  wrapContainer: {
    marginTop: 30,
    padding: theme.spacing(3),
  },
  logo: {
    width: 300,
    height: 160,
    alignSelf: 'center',
    marginBottom: theme.spacing(2),
  },
  wrapInput: {
    padding: theme.spacing(3),
    flexDirection: 'column',
  },
  wrapButton: {
    alignItems: 'center',
    marginLeft: theme.spacing(2),
    flexDirection: 'row',
  },
  btn: {
    marginLeft: theme.spacing(2),
  },
  wrapCheckBox: {
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'row',
  },
  textInput: {
    height: theme.spacing(6),
    paddingStart: 12,
    borderWidth: 2,
    borderColor: theme.colors.grey,
    marginTop: 8,
    marginBottom: 8,
  },
  img: {
    minWidth: 20,
    minHeight: 20,
    marginLeft: theme.spacing(1),
  },
  labelEmail: {
    ...theme.typography({
      fontSize: 14,
      fontWeight: 'normal',
      lineHeight: 1.5,
    }),
    marginLeft: theme.spacing(1),
    alignItems: 'center',
    justifyContent: 'center',
  },
})

export default SignInScreen
