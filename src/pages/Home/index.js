import React from 'react';
import { View } from 'react-native';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import ReviewList from '../../components/ReviewList';
import styles from './styles';

const Home = () => (
    <View style={ styles.home }>
        <Header />
        <ReviewList />
        <Footer />
    </View>
);

export default Home;