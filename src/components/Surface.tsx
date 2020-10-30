import React from 'react'
import {Platform, View, StyleProp, StyleSheet, ViewStyle} from 'react-native'
import theme from '../theme'

interface Props {
  style?: StyleProp<ViewStyle>
  children?: React.ReactNode
}
const Surface: React.FC<Props> = ({style, children}) => {
  const flattenedStyles = StyleSheet.flatten(style) || {}
  const {elevation} = flattenedStyles
  return (
    <View
      style={[
        {backgroundColor: theme.colors.surface},
        elevation !== undefined && theme.elevation(elevation),
        Platform.OS === 'android' && styles.overflowHidden,
        style,
      ]}>
      {children}
    </View>
  )
}
const styles = StyleSheet.create({
  overflowHidden: {
    overflow: 'hidden',
  },
})
export default Surface
