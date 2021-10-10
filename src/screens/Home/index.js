import React from 'react';
import { View } from 'react-native';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import List from '../../components/Review/List';
import styles from './styles';

const Home = () => (
    <View style={ styles.home }>
        <Header isHome={ true } />
        <List />
        <Footer />
    </View>
);

export default Home;