import React from 'react';

import { View } from 'react-native';

import Title from '../../Title';
import Upload from '../../Form/Upload';
import Input from '../../Form/Input';
import Rating from '../../Rating';
import Button from '../../Form/Button';

import IconPost from '../../../assets/img/icon_post.png';

import styles from './styles';

const Create = () => (
    <View style={ styles.create }>
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
            <Rating />
            <Button
                label='Post'
                icon={ IconPost }
                type='Dinner'
            />
        </View>
    </View>
);

export default Create;