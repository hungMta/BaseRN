import Color from 'color'
import React from 'react'
import {
  ActivityIndicator,
  StyleProp,
  StyleSheet,
  Text,
  TextStyle,
  View,
  ViewStyle,
} from 'react-native'
import theme from '../theme'
import Icon from './Icon'
import Surface from './Surface'
import Touchable from './Touchable'
export interface Props {
  text: string
  icon?: string
  mode?: 'contained' | 'outlined' | 'text' | 'blur'
  color?: string
  size?: 'normal' | 'lag'
  disabled?: boolean
  loading?: boolean
  numberOfLines?: number
  style?: StyleProp<ViewStyle>
  textStyle?: StyleProp<TextStyle>
  onPress?: () => void
}
const Button: React.FC<Props> = ({
  text,
  icon,
  mode = 'contained',
  color = theme.colors.colorButton,
  size = 'large',
  disabled = false,
  loading = false,
  numberOfLines = 1,
  style,
  textStyle,
  onPress,
}) => {
  const isDark = Color(color).isDark()
  let backgroundColor = color
  let foregroundColor = color
  if (mode) {
    if (mode === 'contained') {
      if (isDark) {
        foregroundColor = theme.colors.textWhitePrimary
      } else {
        foregroundColor = theme.colors.colorButton
      }
      backgroundColor = color
    } else if (mode === 'blur') {
      foregroundColor = theme.colors.white
      backgroundColor = theme.colors.grey
    } else {
      foregroundColor = color
      backgroundColor = 'transparent'
    }
  }
  const borderRadius = theme.roundness
  const borderWidth = 2
  const borderColor = mode === 'outlined' ? color : 'transparent'

  const height = size === 'large' ? 45 : 36
  const textDecorationLine = mode === 'text' ? 'underline' : undefined
  const opacity = disabled || loading ? 0.38 : 1.0
  return (
    <Surface style={[{backgroundColor, borderRadius, opacity}, style]}>
      <Touchable
        rippleColor={Color(foregroundColor).alpha(0.32).rgb().string()}
        style={[
          styles.touchable,
          {
            height,
            paddingHorizontal: theme.spacing(2),
            borderRadius,
            borderWidth,
            borderColor,
          },
        ]}
        disabled={disabled || loading}
        onPress={!(disabled || loading) ? onPress : undefined}>
        {loading ? (
          <ActivityIndicator color={foregroundColor} />
        ) : (
          <>
            {icon && (
              <View style={styles.iconWrapper}>
                <Icon name={icon} size={16} color={foregroundColor} />
              </View>
            )}
            <Text
              numberOfLines={numberOfLines}
              style={[
                styles.text,
                {
                  color: foregroundColor,
                  textDecorationLine,
                },
                textStyle,
              ]}>
              {text}
            </Text>
          </>
        )}
      </Touchable>
    </Surface>
  )
}

const styles = StyleSheet.create({
  touchable: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconWrapper: {
    width: theme.spacing(2),
    marginLeft: -theme.spacing(0.5),
    marginRight: theme.spacing(1),
  },
  text: {
    ...theme.typography({fontSize: 20, fontWeight: 'bold'}),
  },
})

export default Button
