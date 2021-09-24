import { Dimensions, StyleSheet } from 'react-native';
import Constants from 'expo-constants';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default StyleSheet.create({
    container: {
      paddingHorizontal: 24,
      paddingTop: Constants.statusBarHeight + 20,
      paddingBottom: 20
    },

    header: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between'
    },

    iconBack: {
      marginRight: 22,
      opacity: 1
    },

    hidden: {
      marginRight: 22,
      opacity: 0
    },

    logo: {
      resizeMode : 'stretch'
    },

    iconMenu: {

    },

    gradient: {
      height: windowHeight,
      width: windowWidth,
      position: 'absolute',
      zIndex: -1
    }
});