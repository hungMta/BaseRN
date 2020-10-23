import {useNavigation} from '@react-navigation/native'
import React, {useState} from 'react'
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Image,
  Text,
  Keyboard,
} from 'react-native'
import Loading from '../../components/Loading'

import Button from '../../components/Button'
import {TextInput, TouchableWithoutFeedback} from 'react-native-gesture-handler'
import {SafeAreaView} from 'react-native-safe-area-context'
import theme from '../../theme'
const logoImage = require('../../assets/images/12.jpg')

const iconChecked = require('../../assets/images/square_checked_icon.png')
const iconUnCheck = require('../../assets/images/square_uncheck_icon.png')
const SignInScreen = () => {
  const navigation = useNavigation()
  const [checkedTerm, setCheckedTerm] = useState(false)
  const [loading, setLoading] = useState(false)
  const onPressAgreeTerm = () => {
    setCheckedTerm(!checkedTerm)
  }
  const handlerLogin = async () => {
    setLoading(true)
    setTimeout(function () {
      setLoading(false)
      navigation.navigate('HomeScreen')
    }, 5000)
  }

  return (
    <SafeAreaView style={styles.container}>
      {loading && <Loading isShowIndicator={loading} />}
      <TouchableWithoutFeedback
        onPress={Keyboard.dismiss}
        accessible={false}
        style={styles.wrapContainer}>
        <Image style={styles.logo} source={logoImage} />
        <View style={styles.wrapInput}>
          <TextInput
            underlineColorAndroid="transparent"
            style={styles.inputEmail}
          />
          <TextInput
            underlineColorAndroid="transparent"
            style={styles.inputEmail}
          />
        </View>

        <View style={styles.wrapButton}>
          <View style={styles.wrapCheckBox}>
            <TouchableOpacity
              style={styles.img}
              onPress={() => {
                onPressAgreeTerm()
              }}>
              <Image source={checkedTerm ? iconChecked : iconUnCheck} />
            </TouchableOpacity>
            <Text style={styles.labelEmail}>I'm agree to login</Text>
          </View>

          <Button
            style={styles.btn}
            onPress={() => {
              handlerLogin()
            }}
            text="SignIn"
            mode="contained"
          />
        </View>
      </TouchableWithoutFeedback>
    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.white,

    flexGrow: 1,
  },
  wrapContainer: {
    padding: theme.spacing(3),
  },
  logo: {
    width: 350,
    height: 200,
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
    marginLeft: theme.spacing(4),
  },
  wrapCheckBox: {
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'row',
    marginBottom: theme.spacing(4),
  },
  inputEmail: {
    height: theme.spacing(6),
    borderWidth: 2,
    borderColor: theme.colors.grey,
    marginTop: 8,
    marginBottom: 8,
  },
  img: {
    minWidth: 30,
    minHeight: 30,
    marginLeft: theme.spacing(1),
  },
  labelEmail: {
    ...theme.typography({
      fontSize: 14,
      fontWeight: 'normal',
      lineHeight: 1.5,
    }),
    marginLeft: theme.spacing(1),
  },
})

export default SignInScreen
