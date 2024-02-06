import React from "react"
import {ScrollView, View, Text, SafeAreaView} from "react-native"
import { useState } from "react"
import {Redirect, Stack, useRouter} from "expo-router";
import { Provider as PaperProvider } from "react-native-paper";
import LoginScreen from "./login/login.screen";
import { AuthProvider, useAuth } from "../lib/authContext"
import Welcome from "../components/common/welcome/welcome";
import { SIZES } from "../constants";

const Home = () => {
    const router = useRouter();
    const { loggedInUser } = useAuth();
  
    return (      
        loggedInUser ? <Welcome/> : <LoginScreen />
    );
  };
  
  const App = () => {
    return (
      <AuthProvider>
        <PaperProvider>
          <SafeAreaView>
      
            <Stack>{/* Add your Stack configuration here */}</Stack>
            <ScrollView showsVerticalScrollIndicator={false}>
              <View
                style={{
                flex:1,
                padding:SIZES.medium
                }}>
              <Home />
             </View>
            </ScrollView>
       
            </SafeAreaView>
        </PaperProvider>
      </AuthProvider>
    );
  };
  
  export default App;