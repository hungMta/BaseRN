import Color from 'color'
import React from 'react'
import {
  Platform,
  StyleProp,
  TouchableHighlight,
  TouchableNativeFeedback,
  View,
  ViewStyle,
} from 'react-native'

const ANDROID_VERSION_LOLLIPOP = 21

interface Props {
  rippleColor?: string
  disabled?: boolean
  onPress?: () => void
  style?: StyleProp<ViewStyle>
  children: React.ReactNode
  ripple?: boolean
}

const Touchable: React.FC<Props> = ({
  rippleColor,
  disabled = false,
  style,
  children,
  ripple,
  ...others
}) => {
  if (
    Platform.OS === 'android' &&
    Platform.Version >= ANDROID_VERSION_LOLLIPOP &&
    ripple === true
  ) {
    return (
      <TouchableHighlight {...others}>
        <View pointerEvents="box-only" style={style}>
          {children}
        </View>
      </TouchableHighlight>
    )
  } else if (
    Platform.OS === 'android' &&
    Platform.Version >= ANDROID_VERSION_LOLLIPOP
  ) {
    return (
      <TouchableNativeFeedback
        {...others}
        background={
          rippleColor
            ? TouchableNativeFeedback.Ripple(rippleColor, false)
            : TouchableNativeFeedback.SelectableBackground()
        }
        disabled={disabled}>
        <View pointerEvents="box-only" style={style}>
          {children}
        </View>
      </TouchableNativeFeedback>
    )
  }
  return (
    <TouchableHighlight
      underlayColor={
        rippleColor
          ? Color(rippleColor).fade(0.5).rgb().string()
          : 'rgba(0,0,0,0.1)'
      }
      style={style}
      disabled={disabled}
      {...others}>
      {children}
    </TouchableHighlight>
  )
}

export default Touchable
