import React from "react"
import {View, Text, SafeAreaView} from "react-native"
import { useState } from "react"
import {Redirect, useRouter} from "expo-router";
import { Provider as PaperProvider } from "react-native-paper";
import LoginScreen from "./login/login.screen";
import { ID, account } from "../lib/appwrite";

export async function login(email, password) {
    try {
    await account.createEmailSession(email, password);
    setLoggedInUser(await account.get());
    }
catch(error){console.log("Login failed" + error)}
  }

  export async function register(name, email, password) {
    try {
    await account.create(ID.unique(), email, password, name);}
    catch(error){console.log (error)}

    login(email, password);
    console.log("reg function");
}

const Home = () => {
    const router= useRouter();
    const [loggedInUser, setLoggedInUser] = useState(null);    
    const [name, setName] = useState('');    
  

if (loggedInUser){
return(
    <PaperProvider>     
    <Text>welcome {$loggedInUser.name}`</Text>
    </PaperProvider>    
)}
return (
    <PaperProvider>
        <LoginScreen />
    </PaperProvider>)}




export default Home