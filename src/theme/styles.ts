import {Platform, StatusBar} from 'react-native'
export default {
  header: {
    ...Platform.select({
      android: {
        height: 56 + StatusBar.currentHeight!,
        paddingTop: StatusBar.currentHeight,
      },
    }),
  },
}
