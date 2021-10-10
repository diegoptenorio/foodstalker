import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    detail: {
        flex: 1
    },

    reviewContainer: {
        backgroundColor: 'rgba(0, 0, 0, 0.20)',
        flex: 1,
        paddingVertical: 15,
        paddingRight: 15
    },

    shareContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        paddingRight: 25
    },

    image: {
        height: 250,
        resizeMode: 'stretch',
        borderBottomRightRadius: 40,
        borderTopRightRadius: 40,
        paddingRight: 10
    },

    name: {
        fontSize: 32,
        color: '#fff',
        marginTop: 15,
        marginBottom: 20
    },

    description: {
        color: '#fff',
        marginBottom: 20
    },

    descContainer: {
        paddingLeft: 25,
        paddingRight: 10,
        paddingBottom: 30
    },

    infoContainer: {
        marginBottom: 20
    }
});