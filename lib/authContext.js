import React, { createContext, useContext, useState } from 'react';
import { ID, account } from "../lib/appwrite";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

  const [loggedInUser, setLoggedInUser] = useState(null);    
  const [name, setName] = useState('');    
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  
  async function login({email, password}) {
    try {
      
      await account.createEmailSession(email, password);
      const user = await account.get();
      setLoggedInUser(user);

      return user;

      /*setLoggedInUser(await account.get());
      return loggedInUser;*/
    } catch(error){
      console.log("Login failed  " + error); 
      return null;
    }
  
  }

  async function register({name, email, password}) {
    try {
       await account.create(ID.unique(), email, password, name);
       await login({email, password});
    }
    catch(error){
      console.log(error)
    }
}
  

  return (
    <AuthContext.Provider value={{ name, email, password, loggedInUser, setLoggedInUser, login, register }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};