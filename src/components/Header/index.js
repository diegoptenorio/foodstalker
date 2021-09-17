import React from 'react';
import { Image, Text, View } from 'react-native';

import Logo from '../../assets/img/logo.png';

import styles from './styles';

const Header = () => (
    <View style={styles.container}>
        <View style={styles.header}>
            <Text></Text>
            <Image source={Logo} />
            <Text></Text>
        </View>
    </View>
)

export default Header;