import React from 'react';

import Loading from './Loading';
import Error from './Error';
import NoContent from './NoContent';

import { View  } from 'react-native';

const NetworkRequest = props => {
    const {
        isLoading,
        isError,
        isNoContent,
        fetchReviews
    } = props;

    return (
        <View>
            { isLoading && <Loading /> }
            { !isLoading && isError && <Error fetchReviews={ fetchReviews } /> }
            { !isLoading && !isError && isNoContent && <NoContent fetchReviews={ fetchReviews } /> }
            { !isLoading && !isError && !isNoContent && props.children }
        </View>
    )
};

export default NetworkRequest;