import { StyleSheet } from 'react-native';

import { COLOR_SCHEME } from '../../../constants';

export default StyleSheet.create({
    input: {
        borderRadius: 5,
        borderColor: COLOR_SCHEME.ACTION,
        borderStyle: 'dashed',
        borderWidth: 2,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 25
    },

    label: {
        textTransform: 'uppercase',
        color: COLOR_SCHEME.ACTION,
        marginBottom: 15
    }
});