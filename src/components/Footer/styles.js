import { Dimensions, StyleSheet } from 'react-native';

import { COLOR_SCHEME } from '../../constants';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default StyleSheet.create({
    container: {
      alignItems: 'center',
      flexDirection: 'row',
      paddingHorizontal: 24,
      paddingBottom: 17,
      paddingTop: 15,
    },

    toucheable: {
        flexDirection: 'row',
        justifyContent: 'center',
    },

    iconAdd: {
      marginRight: 15
    },

    textAdd: {
      color: COLOR_SCHEME.ACTION,
      fontSize: 20,
      fontWeight: 'bold'
    },

    gradient: {
      height: windowHeight,
      width: windowWidth,
      position: 'absolute',
      zIndex: -1
    }
});