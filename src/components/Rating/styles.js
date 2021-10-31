import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    starView: {
        flexDirection: 'row'
    },

    starViewLarge: {
        flexDirection: 'row',
        transform: [{ scale: 2 }, { translateX: 120 }],
        marginVertical: 50
    },

    star: {
        marginRight: 5,
    }
});