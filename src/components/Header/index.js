import React from 'react';

import { 
    Image,
    TouchableOpacity,
    View
} from 'react-native';

import { LinearGradient } from 'expo-linear-gradient';

import { useNavigation } from '@react-navigation/core';

import { COLOR_SCHEME } from '../../constants';

import Logo from '../../assets/img/logo.png';
import IconBack from '../../assets/img/icon_back.png';
import IconMenu from '../../assets/img/icon_menu.png';

import styles from './styles';

const Header = ({ isHome }) => {
    const navigation = useNavigation();

    const goTo = (component) => {
        if (component) navigation.navigate(component);
        else  navigation.goBack();
    };

    return (
        <View style={ styles.container }>
            <View style={ styles.header }>
                <TouchableOpacity onPress={() => goTo() }>
                    <Image source={ IconBack } style={ isHome ? styles.hidden : styles.iconBack } />
                </TouchableOpacity>
                <Image source={ Logo } style={ styles.logo } />
                <TouchableOpacity>
                    <Image source={ IconMenu } style={ styles.iconMenu } />
                </TouchableOpacity>
            </View>
            <LinearGradient
                colors={ [COLOR_SCHEME.DINNER, COLOR_SCHEME.LUNCH, COLOR_SCHEME.BREAKFAST] }
                start={ { x: 0, y: 0 } }
                end={ { x: 1, y: 0 } }
                style={ styles.gradient }
            />
        </View>
    )
};

export default Header;