import React, { Component } from 'react';
import { View, Text } from 'react-native';

import {style} from './header_style';

export default function Header(){
    return(
        <View style={style.header}>
            <Text style={style.title}>My Todos</Text>
        </View>
    )
}