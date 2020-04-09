import React, { useState } from 'react';
import { View, TextInput, Button } from 'react-native';

import { style } from './addtodo_style';

export default function AddTodo({submitHandler}) {

    const [text, setText] = useState('');

    const changeHandler =(val)=>{
        setText(val);
    }

    return(
        <View>
            <TextInput 
                style={style.input}
                placeholder='New Todo'
                onChangeText={changeHandler} />
            <Button 
                onPress={()=> submitHandler(text) }
                title='Add'
                color='coral' />
        </View>
)};