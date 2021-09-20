import React from 'react';

import { 
    Image,
    Text,
    TouchableOpacity,
    View
} from 'react-native';

import { LinearGradient } from 'expo-linear-gradient';

import { COLOR_SCHEME } from '../../constants';

import { EN } from '../../constants';

import IconAdd from '../../assets/img/icon_add.png';

import styles from './styles';

const Footer = () => (
    <View style={ styles.header }>
        <TouchableOpacity style={ styles.toucheable }>
            <View style={ styles.container }>
                <Image source={ IconAdd } style={ styles.iconAdd } />
                <Text style={ styles.textAdd }>{EN.ADD_REVIEW}</Text>
            </View>
        </TouchableOpacity>
        <LinearGradient
            colors={ [COLOR_SCHEME.DINNER, COLOR_SCHEME.LUNCH, COLOR_SCHEME.BREAKFAST] }
            start={ { x: 0, y: 0 } }
            end={ { x: 1, y: 0 } }
            style={ styles.gradient }
        />
    </View>
)

export default Footer;