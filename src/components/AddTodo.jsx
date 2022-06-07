import React from 'react'
import {View, Text, TextInput, TouchableOpacity} from 'react-native'
import {AddTodo as styles} from '../../styles'
import { useState } from 'react'
let counter =1

export default function AddTodo({onTodoAdd}) {
  const [task,setTask]= useState('')
  const [errorMsg,setErrorMsg]= useState('')

  const handleChange = (text)=>{
    if(text.split('').length<3)
    {
      setErrorMsg('Task cannot be less thsn 3 characters')
      setTask(text); 
    }
    else{
      setErrorMsg('')
      setTask(text); 
    }

  } 
  const handleTodo = ()=>{
      const todo={
        id:counter++,
        task,
        done:false
      }
      if(errorMsg=='')
      {
        task&&onTodoAdd(todo);
        setTask('')
      }
      // this.textInput.clear() 

  }
  return (
    <View>
      {/* ref={input => { this.textInput = input }} */}
        <TextInput  style={styles.text} placeholder='Enter your next task'
        onChangeText={handleChange} value={task}/>
        <Text>{errorMsg}</Text>
        <TouchableOpacity style={styles.btnContainer} onPress={handleTodo}>
            <Text style={styles.addBtn}>Add</Text>
        </TouchableOpacity>
        
        <Text nativeID='errMsg' style={styles.errorMsg}>CANNOT ENTER LESS THAN 3 CHARACTERS</Text>
    </View>
  )
}
