import React from 'react'
import {TextStyle, ViewStyle} from 'react-native'
import theme from '../theme'
import MaterialIcon from 'react-native-vector-icons/MaterialIcons'

interface Props {
  name: string
  size?: number
  color?: string
  style?: ViewStyle | TextStyle
}

const Icon: React.SFC<Props> = ({name, size, color, style}) => {
  return (
    <MaterialIcon
      name={name}
      size={size || 24}
      color={color || theme.colors.textBlackSecondary}
      style={style}
    />
  )
}

export default Icon
