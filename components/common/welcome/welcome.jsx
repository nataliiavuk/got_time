import React from 'react';
import { useState } from 'react';
import Stack from 'expo-router';
import { 
  View,
  Text,
  SafeAreaView
   } from 'react-native';
import { useRouter } from 'expo-router';
import styles from './welcome.style';
import { useAuth } from '../../../lib/authContext';
import { ID, account } from "../../../lib/appwrite";
import  FeaturedCards   from "../../home/featured/FeaturedCards"
import TodoCards from '../../home/todo/TodoCards';

/*const {name} = useAuth();*/

const Welcome = () => {
  const router = useRouter();
  const {loggedInUser} = useAuth();

  return (
    
    <SafeAreaView>  
      <View style={styles.container}>
        <Text style={styles.userName}>Welcome, {loggedInUser.name}</Text>
        <Text style={styles.welcomeMessage}>Let's find you time</Text>
        <FeaturedCards/>
        <TodoCards/>
      </View>    
    </SafeAreaView>
    
  )
}

export default Welcome