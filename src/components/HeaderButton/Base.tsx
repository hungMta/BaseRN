import React from 'react'
import {TouchableOpacity} from 'react-native-gesture-handler'

import theme from '../../theme'
import Icon from '../Icon'

interface Props {
  icon: string
  onPress: () => void
}

const Base: React.FC<Props> = ({icon, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Icon
        name={icon}
        color={theme.colors.textBlackPrimary}
        style={{marginLeft: theme.spacing(0.5)}}
      />
    </TouchableOpacity>
  )
}

export default Base
