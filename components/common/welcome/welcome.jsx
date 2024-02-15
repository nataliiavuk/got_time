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
import {FAB} from "react-native-paper"
import  FeaturedCards   from "../../home/featured/FeaturedCards"
import TodoCards from '../../home/todo/TodoCards';

/*const {name} = useAuth();*/

const Welcome = () => {
  const router = useRouter();

  //moved auth out of the way
  const {loggedInUser} = useAuth();

   return ( 
    
      <View style={styles.container}>
        <Text style={styles.userName}>Welcome, {loggedInUser.name}, {loggedInUser.ID}</Text>
        <Text style={styles.welcomeMessage}>Let's find you time</Text>
       
      </View>         
   
    
  )
}

export default Welcome