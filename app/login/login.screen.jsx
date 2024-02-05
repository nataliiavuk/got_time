import react, { useState } from "react";
import { SafeAreaView, Text, View, StyleSheet } from "react-native";
import { Button, Card, TextInput } from "react-native-paper";
import { loginStyle } from "./login.style";
import { ScreenHeaderBtn } from "../../components";
import { router, useRouter, Stack, Link, Redirect } from "expo-router";
import {COLORS, icons, images, SIZES} from "../../constants";
import { useAuth } from "../../lib/authContext"


const LoginScreen =() => {  
    
    const router = useRouter();
    const {email, password, login, loggedInUser} = useAuth();
    const [tempemail, setTempemail] = useState('');
    const [temppass, setTemppass] = useState('');

    const handleLogin = () => {
        console.log("inside handlelogin; email="+tempemail+"password="+temppass);
        login({email:tempemail, password:temppass}); 
    }
   
    return(        
        <SafeAreaView style={loginStyle.content}>     
         <Stack.Screen
            options ={{
                headerStyle: {backgroundColor:COLORS.lightWhite},
                headerShadowVisible: false,
                headerBackVisible:false,
                headerLeft : () => (
                    <ScreenHeaderBtn
                        iconURL={icons.menu}
                        dimension="60%"
                       
                    />),
                headerRight : () => (
                    <ScreenHeaderBtn
                        iconURL={icons.profile}
                        dimension="60%"
                    />
                ),
                headerTitle:"Log in",
                headerTitleAlign:"center"
            }}/>    
            <Card style = {loginStyle.card}>
               
                <Card.Content>            
                    <TextInput 
                        label="Email" 
                        keyboardType="email-address" 
                        mode="outlined"
                        onChangeText={(text)=>setTempemail(text)}

                        />
                    <TextInput 
                        label ="Password" 
                        secureTextEntry={true} 
                        mode="outlined"
                        onChangeText={(text)=>setTemppass(text)}
                        />
                    <Button mode="text" style={loginStyle.cardButton}>Forgot email/Password</Button>
                    <Button 
                        mode="contained" 
                        compact={true} 
                        style={loginStyle.cardButton} 
                            onPress={handleLogin}>
                        Log in</Button>
                    <Button mode="text" compact={true} onPress={()=>router.push("register/")} style={loginStyle.cardButton}>Don't have an account? Register</Button>
                </Card.Content>
            </Card>
        </SafeAreaView>
    )
}

export default LoginScreen
