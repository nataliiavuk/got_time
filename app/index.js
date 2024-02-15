import React from "react"
import {Redirect, Stack, useRouter} from "expo-router";
import { Provider as PaperProvider } from "react-native-paper";
import { AuthProvider, useAuth } from "../lib/authContext"
import LoginScreen from "./login";
import Home from "./home/[id]";


const Check = () => {   
  const router = useRouter();
  const { loggedInUser } = useAuth(); 
  return (      
      loggedInUser ? <Home/> : <LoginScreen/>
  );
};

  const App = () => {    
    
    return (
      <AuthProvider>
        <PaperProvider>     
          <Check/>    
        </PaperProvider>
      </AuthProvider>
    );
  };
  
  export default App;