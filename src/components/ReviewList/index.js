import React from 'react';
import { FlatList, View } from 'react-native';

import NetworkRequest from '../NetworkRequest';
import Review from '../Review';
import ReviewType from '../ReviewType';

import useGetReviews from '../../hooks/useGetReviews';

import { matchColorToReviewType } from '../../utils';

import styles from './styles';

const ReviewList = () => {
    const {
        isLoading,
        isError,
        isNoContent,
        reviews,
        fetchReviews
    } = useGetReviews();

    return (
        <View style={ styles.container }>
            <NetworkRequest
                isLoading={ isLoading }
                isError={ isError }
                fetchReviews={ fetchReviews }
                isNoContent={ isNoContent }
            >
                <FlatList
                    data={ reviews }
                    keyExtractor={ review => review.type }
                    renderItem={({ item: review }) => (
                        <View style={{ backgroundColor: matchColorToReviewType(review.type) }}>
                            <ReviewType
                                type={ review.type }
                                length={ review.content.length }
                            />
                            <Review data={ review } />
                        </View>
                    )}
                    showsVerticalScrollIndicator={ false }
                    style={{ backgroundColor: '#ddd' }}
                />
            </NetworkRequest>
        </View>
    )
};

export default ReviewList;