import react from "react";
import { useState } from "react";
import { databases, ID } from "../../lib/appwrite";
import { Button, Card, PaperProvider, TextInput } from "react-native-paper";
import { SafeAreaView, View, Text } from "react-native";
import { Stack } from "expo-router";

import { COLORS, SIZES, icons } from "../../constants";
import { ScreenHeaderBtn } from "../../components";
import DropDown from "react-native-paper-dropdown";
import {loginStyle} from "../login/login.style";

function AddTodo () {

     /*
     const [showDropDown, setShowDropDown] = useState(false);
    const [recur, setRecur] = useState("");
    const recurrencyList = [
        
        {
            label:"one-off",
            value:"one-off"
        },
        {
            label: "daily",
            value: "daily",
        },
        {
            label:"weekly",
            value:"weekly"
        },
    ];*/

    const initialTodo = {
        title:"Sample todo - initializing",
        duration: "30m",
        amount:"2",
        recurrency:"none", 
        category:"none"
    }

    const [todo, setTodo] = useState(initialTodo);   

    const handleChange = (property, value) => {
        console.log (property + "-"+ value);
        setTodo((prevTodoData) => ({
          ...prevTodoData,
          [property]: value,
        }));
      };   
   

    const handleSubmit =(todo) =>{

        const { title, duration, amount, recurrency, category } = todo

        const promise = databases.createDocument(
            "65bf983244ac7c2a59ae",
            "65bf984392c8e5f8b1c1", 
            ID.unique(), 
            { title,
              duration,
              amount: parseInt(amount),
              recurrency,
              category: "65bf9c6f22428696a30b"
              })

        promise.then(
            function (response){
                console.log(response);
            },
            function(error){
                console.log(error);
            }
        )
      //  window.location.reload(); //redirect to todolist
    }


    return ( 
    <SafeAreaView style = {loginStyle.content} >
        
         <Stack.Screen
           options={{
           headerStyle: {backgroundColor:COLORS.white},
           headerShadowVisible:false,
           headerBackVisible:true,                      
           headerRight:()=> (
            <ScreenHeaderBtn iconUrl={icons.profile} dimension="100%"/>
            ),
            headerTitle:"Add todo",
            headerTitleAlign:"center"

        }}/>
       
          
           <Card style={loginStyle.card}>
            <Card.Content>
                <Text>Add todo form</Text>
                
                <TextInput label="Title" 
                           mode="outlined" 
                           multiline={true} 
                           numberOfLines={3}
                           value={todo.title}
                           onChangeText={(text) => handleChange('title', text)}></TextInput>
                <TextInput 
                            label="Duration" 
                            mode="outlined"
                            value={todo.duration}
                            onChangeText={(text) => handleChange('duration', text)}></TextInput>
                <TextInput label="Amount" 
                           mode="outlined" 
                           value={todo.amount}
                           onChangeText={(text) => handleChange('amount', text)}></TextInput>

                <TextInput 
                            label="Recurrency" 
                            mode="outlined"
                            value={todo.recurrency}
                            onChangeText={(text) => handleChange('recurrency', text)}
                            ></TextInput>   
                <TextInput
                             label="Category" 
                             mode="outlined"
                             value={todo.category}
                             onChangeText={(text) => handleChange('category', text)}
                             ></TextInput> 

                <Button 
                mode="contained"
                onPress={()=>{handleSubmit(todo)}}> + Add todo </Button>
            </Card.Content>    
           </Card>

        </SafeAreaView>
       
    )
}

export default AddTodo