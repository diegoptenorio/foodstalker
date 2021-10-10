import React from 'react';

import { View } from 'react-native';

import Footer from '../../components/Footer';
import Header from '../../components/Header';
import Create from '../../components/Review/Create';

const New = () => (
    <View>
        <Header isHome={ false } />
        <Create />
        <Footer />
    </View>
);

export default New;