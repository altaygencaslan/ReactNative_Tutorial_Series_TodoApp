import React from 'react';
import { View, Text } from 'react-native';

import {style} from './sandboxitem_style';

export default function Sandbox(){
    return(
        <View style={style.container}>
            <Text style={style.boxOne}>one</Text>
            <Text style={style.boxTwo}>two</Text>
            <Text style={style.boxThree}>three</Text>
            <Text style={style.boxFour}>four</Text>
        </View>
    )
}