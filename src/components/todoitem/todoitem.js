import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

import {style} from './todoitem_style';


export default function TodoItem({item, pressHandler}){
    return(
        <TouchableOpacity onPress={()=>pressHandler(item.key)}>
            <Text style={style.item}> { item.text } </Text>
        </TouchableOpacity>
)};