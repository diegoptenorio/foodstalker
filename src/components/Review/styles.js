import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    imgContainer: {
        flex: 1,
        paddingRight: 10
    },

    img: {
        height: 100,
        resizeMode : 'stretch',
    },

    descriptionContainer: {
        flex: 1,
        justifyContent: 'space-between',
        paddingHorizontal: 10
    },

    descriptionName: {
        color: '#fff',
        fontSize: 20
    },

    descriptionLocation: {
        color: '#fff',
        fontSize: 12
    }
});