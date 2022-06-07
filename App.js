import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './src/components/Header';
import AddTodo from './src/components/AddTodo';
import TodoList from './src/components/TodoList'; 
import { useState } from 'react';

export default function App() {
  const [list,setList] = useState([]);

  const handleAddTodo = (task)=>{
    setList([...list,task])
  }
  return (
    <View >
      <StatusBar hidden />
      <Header title={"Header"} />
      <AddTodo onTodoAdd={handleAddTodo}/>
      <TodoList tasks={list}/>
    </View>
  );
}
 