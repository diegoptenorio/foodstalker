import React from 'react';
import { FlatList, Text, View } from 'react-native';

import NetworkRequest from '../../NetworkRequest';
import Item from '../Item';
import Title from '../../Title';

import useGetReviews from '../../../hooks/useGetReviews';

import { matchColorToReviewType } from '../../../utils';

import styles from './styles';

const List = () => {
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
                            <Title
                                type={ review.type }
                                length={ review.content.length }
                            />
                            <Item data={ review } />
                        </View>
                    )}
                    showsVerticalScrollIndicator={ false }
                    style={{ backgroundColor: '#ddd' }}
                />
            </NetworkRequest>
        </View>
    )
};

export default List;