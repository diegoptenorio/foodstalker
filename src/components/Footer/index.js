import React from 'react';

import { 
    Image,
    Text,
    TouchableOpacity,
    View
} from 'react-native';

import { LinearGradient } from 'expo-linear-gradient';

import { EN, COLOR_SCHEME } from '../../constants';

import { useNavigation } from '@react-navigation/core';

import IconAdd from '../../assets/img/icon_add.png';

import styles from './styles';

const Footer = ({ isAddReview }) => {
    const navigation = useNavigation();

    const goTo = (component, props) => {
        if (component) navigation.navigate(component, props);
        else  navigation.navigate.goBack();
    };

    return (
        <View>
            <TouchableOpacity
                style={ isAddReview ? styles.hidden : styles.toucheable }
                onPress={() => goTo('New')}
            >
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
};

export default Footer;