import React from 'react';

import {
    TouchableOpacity,
    Image,
    Text
} from 'react-native';

import { matchColorToReviewType } from '../../../utils';
import styles from './styles';

const Button = ({ action, icon, label, type  }) => (
    <TouchableOpacity
        onPress={ action }
        style={{ 
            backgroundColor: matchColorToReviewType(type),
            borderRadius: 25,
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: label ? 20 : -24,
            width: label ? undefined : 50,
            paddingLeft: label ? 0 : 10,
            height: 50
        }}
    >
        <Image
            source={ icon }
            style={ styles.icon }
        />
        <Text style={ styles.label }>{ label }</Text>
    </TouchableOpacity>
);

export default Button;