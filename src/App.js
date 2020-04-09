import React, { useState } from 'react';
import { View, Text, FlatList, SafeAreaView, Alert } from 'react-native';
import { style } from './App_style';

import Header from './components/header/header';
import TodoItem from './components/todoitem/todoitem';
import AddTodo from './components/addtodo/addtodo';

export default function App() {
  const [todos, setTodos] = useState([
    {key: 1, text:"Learn React Native & React"},
    {key: 2, text:"Create awsome apps"},
    {key: 3, text:"Live this life with your family!"}
  ]);

  const pressHandler=(key)=>{
    setTodos((currentTodos)=>{
      return currentTodos.filter(todo=>todo.key!=key);
    });
  }

  const submitHandler =(text) =>{
    if (text.length > 3){
      setTodos((currentTodos)=> {
        return [
          {key:Math.random().toString(), text: text},
          ...currentTodos
        ]
      });
    }
    else {
      Alert.alert('Heyy!',
                  'Your message too short!',
                  [ 
                    {text: 'OK', onPress:()=> alert('OK')}
                  ])
    }
  }

  return (
    <View style={style.container}>
      <SafeAreaView>
          {/** header */}
          <Header />
          {/** header */}

        <View style={style.content}>
          {/** todoform */}
          <AddTodo submitHandler={submitHandler} />
          {/** todoform */}
          <View style={style.list}>
            <FlatList data={todos}
                      keyExtractor={(item)=> item.key.toString()}
                      renderItem={({ item })=> (
                        <TodoItem item={ item } pressHandler={pressHandler} />
                      )}/>
          </View>
        </View>
      </SafeAreaView>
    </View>
  )
}