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
      color: '#fff',
      fontSize: 12
    },

    reviewType: {
      alignItems: 'center',
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'flex-end',
      paddingHorizontal: 6
    },

    reviewQuantity: {
      alignItems: 'center',
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'flex-start',
      paddingHorizontal: 14
    },

    icon: {
      marginRight: 8
    }
});