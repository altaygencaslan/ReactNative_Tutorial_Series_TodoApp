import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import {style} from './todoitem_style';


export default function TodoItem({item, pressHandler}){
    return(
        <TouchableOpacity onPress={()=>pressHandler(item.key)}>
            <View style={style.item}>
                <Icon name='md-trash' size={18} color='#333' />
                <Text style={style.itemtext}> { item.text } </Text>
            </View>
        </TouchableOpacity>
)};