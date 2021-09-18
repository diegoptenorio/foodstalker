import React from 'react';
import { View } from 'react-native';
import AddReviewButton from '../../components/AddReviewButton';
import Header from '../../components/Header';
import ReviewList from '../../components/ReviewList';
import styles from './styles';

const Home = () => {
    return (
        <View style={ styles.home }>
            <Header />
            <ReviewList />
            <AddReviewButton />
        </View>
    )
};

export default Home;