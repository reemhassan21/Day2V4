import React from 'react'
import {View, Text,FlatList} from 'react-native'
import Checkbox from 'expo-checkbox'
import { todoList  as styles} from "../../styles";
import { useState } from 'react';
let totalCount=0 

export default function TodoList({tasks}) {

  return (
    // <View style={styles.listContainer}>  
    //     <Text style={styles.itemTask} >Tasks</Text>
    //     <Text>{totalCount}</Text>
        
    //     {tasks.map((task)=>(
    //       <View style={styles.taskDone}>
    //         <Text>{task.task}</Text>
    //         <Text >Done</Text>
    //         <Checkbox disabled={false} onAnimatinonType='fill' onValueChange={(e)=>{
    //         onChangeVlue(item, index)  
    //         }}  />
    //       </View>  
    //     ))}
       
    // </View>
    <View>
       <FlatList 
      data={tasks}
      renderItem={({ item }) => {
        return (
          <View  style={styles.listContainer}>
            <Text style={styles.task} >{item.task}</Text>
            <View style={styles.taskDone}>
              <Text >
                  Done
              </Text>
              <Checkbox value={item.done} onValueChange={()=>{
                if(item.done ==true)
                {
                  item.done = false
                  totalCount--
                }
                else
                {
                  item.done = true
                  totalCount++ 
                }
                console.log(totalCount)
              }}/>

              </View>
          </View>
        );
      }}
      keyExtractor={(item, index) => `${item.id}${index}`}
      ListHeaderComponent={() => <Text style={styles.itemTask}>Tasks</Text>}
      ItemSeparatorComponent={() => (
        <View
          style={{
            borderBottomColor: "black",
            borderBottomWidth: 1, 
          }}
        ></View>
      )}
      ListEmptyComponent={()=>(<Text>please add todo!</Text>)}
    />
    <Text style={styles.countDone}>{totalCount} tasks done from {tasks.length}</Text>

    </View>
   
    
  )
}
