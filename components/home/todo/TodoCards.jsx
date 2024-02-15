import React from 'react'
import { useState, useEffect } from 'react'
import { View, Text, TouchableOpacity, FlatList, ActivityIndicator, ScrollView } from 'react-native'
import { useRouter } from 'expo-router'
import { databases, ID } from "../../../lib/appwrite";
import { Query } from 'appwrite';

import {COLORS, SIZES} from '../../../constants';
import TodoCard from '../../common/cards/todo/todocard';
import styles from './todocards.style';
import useFetch from '../../../lib/useFetch';

const TodoCards = () => {

    const router=useRouter();   
    const {data, isLoading, error} = useFetch();    
    useEffect(() => {
      console.log('Data:', data);
    }, [data]);
  

   
    /*  [{ id: '1', title: 'Do sports', duration: '30m', recurrency: "daily", category: "health" },
      { id: '2', title: 'Clean kitchen',  duration: '30m', recurrency: "weekly", category: "economy" },
      { id: '3', title: 'Something',  duration: '30m', recurrency: "daily", category: "health" },
      { id: '4', title: 'Do sports', duration: '30m', recurrency: "daily", category: "health" },
      { id: '5', title: 'Clean kitchen',  duration: '30m', recurrency: "weekly", category: "economy" },
      { id: '6', title: 'Something',  duration: '30m', recurrency: "daily", category: "health" },
      { id: '7', title: 'Do sports', duration: '30m', recurrency: "daily", category: "health" },
      { id: '8', title: 'Clean kitchen',  duration: '30m', recurrency: "weekly", category: "economy" },
      { id: '9', title: 'Something',  duration: '30m', recurrency: "daily", category: "health" },]*/      // Add more items as needed
    
    
  return (   
   <View style={styles.cardsContainer}>
      {isLoading ? (<ActivityIndicator size="large" color={COLORS.primary}/>) : error ? (<Text>Something went wrong - not loading</Text>
      ):(
        data?.map((item) => (
          <TodoCard          
            todo = {item}
            key={item?.$id}    
            />
        ))
        )      
        }
      </View>
          
    )
}
  

export default TodoCards;