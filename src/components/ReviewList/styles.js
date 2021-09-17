import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
      flex: 1
    },
    
    listHeader: {
        flexDirection: 'row',
        justifyContent: 'center',
        paddingVertical: 8
    },

    listHeaderTitle: {
      color: '#fff'
    },

    reviewType: {
      alignItems: 'center',
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'flex-end',
      paddingHorizontal: 10
    },

    reviewQuantity: {
      alignItems: 'center',
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'flex-start',
      paddingHorizontal: 10
    },

    icon: {
      marginHorizontal: 5
    }
});