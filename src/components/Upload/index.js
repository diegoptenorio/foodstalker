import React from 'react';

import { Image, Text, TouchableOpacity } from "react-native";

import IconCamera from '../../assets/img/icon_camera.png';

import styles from './styles';

const Upload = () => (
    <TouchableOpacity style={ styles.input }>
        <Text style={ styles.label }>Upload Picture</Text>
        <Image source={ IconCamera } />
    </TouchableOpacity>
);

export default Upload;