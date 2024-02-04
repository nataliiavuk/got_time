import react, { useState } from "react";
import { SafeAreaView, Text, View, StyleSheet } from "react-native";
import { Button, Card, TextInput } from "react-native-paper";
import { loginStyle } from "../login/login.style";
import { useRouter, Stack } from "expo-router";
import { COLORS, icons  } from "../../constants";
import { ScreenHeaderBtn } from "../../components";

import { useAuth } from "../../lib/authContext";


const RegisterScreen =() => {
    const router = useRouter();

    const {name, email,password, login, register, loggedInUser} = useAuth();

    const handleReg = (name, email, password) =>{
       console.log("inside handlereg; email="+email+"password="+password + "name="+ name);
       try{ register(name, email,password);    
    }
    catch(error){console.log(error)}
    }

    
    return(
        <SafeAreaView style={loginStyle.content}>
        <Stack.Screen
           options={{
           headerStyle:COLORS.lightWhite,
           headerShadowVisible:false,
           headerBackVisible:true,
           
           
            headerRight:()=> (
            <ScreenHeaderBtn iconUrl={icons.profile} dimension="100%"/>
            ),
            headerTitle:"Register",
            headerTitleAlign:"center"

        }}/>
            <Card style = {loginStyle.card}>
                
                <Card.Content>
                    <TextInput label="Name"  mode="outlined"  onChangeText={(text)=>setName(text)}/>
                    <TextInput label="Email" keyboardType="email-address" mode="outlined"  onChangeText={(text)=>setEmail(text)}/>
                    <TextInput label ="Password" secureTextEntry={true} mode="outlined"  onChangeText={(text)=>setPassword(text)}/>
                    
                    <Button 
                        mode="contained" 
                        compact={true} 
                        style={loginStyle.cardButton}
                        onPress={()=>{handleReg(name, email,password)}}>

                            Register</Button>
                    <Button mode="text" compact={true} onPress={()=>router.push("/login/login.screen")} style={loginStyle.cardButton}>Have an account? Log in </Button>
                    
                </Card.Content>
            </Card>
        </SafeAreaView>
    )
}

export default RegisterScreen

