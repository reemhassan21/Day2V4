import { StyleSheet } from "react-native";

export const headerStyles = StyleSheet.create({ 
    title:{
        backgroundColor:'beige',
        color:'black',
        fontSize:30,
        padding:10,
        textAlign:'center'
    }
})

export const AddTodo = StyleSheet.create({
    text:{
        fontSize:20,
        padding:10,
        borderBottomColor:'beige',
        borderBottomWidth:3
    },
    addBtn:{
        fontSize:20,
        backgroundColor:'beige',
        width:100,
        textAlign:'center',
        marginTop:10, 
        borderColor:'white',
        borderWidth:2
    },
    errorMsg:{
        color:'red',
        fontSize:15,
        display:'none'
    } 
})

export const todoList = StyleSheet.create({ 
    itemTask:{
        fontSize:25,
        textAlign:'center',
        fontWeight:'bold'
    },
    task:{ 
        padding:5,
        width:'70%', 
       
    },
    listContainer:{
        display:'flex',
        flexDirection:'row',    
    },
    countDone:{
        textAlign:'center',
        fontSize:17,
        fontWeight:'bold'
    },
    taskDone:{
        display:'flex',
        flexDirection:'row',
        justifyContent:"space-around",
        width:'25%', 
        padding:5,
        margin:5, 

    },
    headerStyle:{
        fontSize:20,
        fontWeight:'bold' ,
        textAlign:'center'
    }
})