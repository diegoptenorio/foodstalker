import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

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
});