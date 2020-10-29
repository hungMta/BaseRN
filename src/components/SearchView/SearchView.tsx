import React from 'react'
import {StyleProp, StyleSheet, View, ViewStyle} from 'react-native'
import theme from '../../theme'
import {Searchbar} from 'react-native-paper'
import {useState} from 'react'

interface Props {
  style?: StyleProp<ViewStyle>
}
const SearchView: React.FC<Props> = ({}) => {
  const [searchQuery, setSearchQuery] = useState('')

  const onChangeSearch = (query) => setSearchQuery(query)
  return (
    <View style={styles.wrapButton}>
      <Searchbar
        style={{backgroundColor: 'grey'}}
        placeholder="Search"
        onChangeText={onChangeSearch}
        value={searchQuery}
      />
    </View>
  )
}
const styles = StyleSheet.create({
  main: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  wrapButton: {
    marginTop: 12,
    alignItems: 'center',
    flexDirection: 'row',
  },
  styleButton: {
    backgroundColor: theme.colors.grey,
    minWidth: '70%',
    maxWidth: '90%',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 2,
    padding: 5,
  },
  styleButtonHistory: {
    backgroundColor: theme.colors.colorButton,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 2,
    padding: 5,
  },
  textBtn: {
    color: 'white',
  },
})

export default SearchView
