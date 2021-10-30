import React from 'react';

import { View } from 'react-native';

import Footer from '../../components/Footer';
import Header from '../../components/Header';

const Menu = () => (
    <View>
        <Header isHome={ false } />
        <Footer isAddReview={ false } />
    </View>
);

export default Menu;