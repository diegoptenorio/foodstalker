import { Dimensions, StyleSheet } from 'react-native';
import { COLOR_SCHEME } from '../../constants';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default StyleSheet.create({
    container: {
      alignItems: 'center',
      flexDirection: 'row',
      paddingHorizontal: 24,
      paddingVertical: 16,
    },

    toucheable: {
        flexDirection: 'row',
        justifyContent: 'center',
    },

    iconAdd: {
      marginRight: 15
    },

    textAdd: {
      color: '#E0A467',
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