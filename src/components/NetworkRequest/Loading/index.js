import React from 'react';
import { ActivityIndicator, View  } from 'react-native';

const Loading = () => {
    return (
        <View>
            <ActivityIndicator size="large" color="#fff" />
        </View>
    )
};

export default Loading;