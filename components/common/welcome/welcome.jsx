import React from 'react';
import { useState } from 'react';
import { 
  View,
  Text
   } from 'react-native';
import { useRouter } from 'expo-router';
import styles from './welcome.style';
import { useAuth } from '../../../lib/authContext';
import { ID, account } from "../../../lib/appwrite";

/*const {name} = useAuth();*/

const Welcome = () => {
  const router = useRouter();
  const {loggedInUser} = useAuth();

  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.userName}>Welcome, {loggedInUser.name}</Text>
        <Text style={styles.welcomeMessage}>Let's find you time</Text>
      </View>    
    </View>
     
  )
}

export default Welcome