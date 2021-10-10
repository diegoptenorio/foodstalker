import React from 'react';

import { View } from 'react-native';

import Upload from '../../Form/Upload';
import Input from '../../Form/Input';

import styles from './styles';
import Title from '../../Title';

const Create = () => (
    <View>
        <Title
            type='Create'
        />
        <View style={ styles.container }>
            <Upload />
            <Input
                placeholder='Name'
            />
            <Input
                placeholder='Place'
            />
        </View>
    </View>
);

export default Create;