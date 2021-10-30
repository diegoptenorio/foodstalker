import React from 'react';

import { View } from 'react-native';

import Header from '../../components/Header';
import Create from '../../components/Review/Create';
import Footer from '../../components/Footer';

const New = () => (
    <View style={{ flex: 1 }}>
        <Header isHome={ false } />
        <Create />
        <Footer isAddReview={ true } />
    </View>
);

export default New;