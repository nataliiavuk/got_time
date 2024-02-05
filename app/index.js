import React from "react"
import {View, Text, SafeAreaView} from "react-native"
import { useState } from "react"
import {Redirect, Stack, useRouter} from "expo-router";
import { Provider as PaperProvider } from "react-native-paper";
import LoginScreen from "./login/login.screen";
import { AuthProvider, useAuth } from "../lib/authContext"
import Welcome from "../components/common/welcome/welcome";

const Home = () => {
    const router = useRouter();
    const { loggedInUser } = useAuth();
  
    return (
      <PaperProvider>
        {loggedInUser ? <Welcome/> : <LoginScreen />}
      </PaperProvider>
    );
  };
  
  const App = () => {
    return (
      <AuthProvider>
        <Stack>{/* Add your Stack configuration here */}</Stack>
        <Home />
      </AuthProvider>
    );
  };
  
  export default App;