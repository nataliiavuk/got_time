import React from 'react'
import { useState } from 'react'
import { View, Text, TouchableOpacity, FlatList, ActivityIndicator } from 'react-native'
import { useRouter } from 'expo-router'



import {COLORS, SIZES} from '../../../constants';
import TodoCard from '../../common/cards/todo/todocard';


const TodoCards = () => {

    const router=useRouter();
   
    const data = [
      { id: '1', title: 'Do sports', duration: '30m', recurrency: "daily", category: "health" },
      { id: '2', title: 'Clean kitchen',  duration: '30m', recurrency: "weekly", category: "economy" },
      { id: '3', title: 'Something',  duration: '30m', recurrency: "daily", category: "health" },
      // Add more items as needed
    ];
    
    const renderItem = ({item}) => {
      return (
      <TodoCard
       title = {item.title}
       duration = {item.duration}
       recurrency ={item.recurrency}
       category ={item.category}

      />);
   } ;
    
  return (
    <View>
    <Text>Today</Text>
      <FlatList
         data = {data}
         keyExtractor={(item) => item.id}
         renderItem={renderItem}  
         contentContainerStyle={{rowGap:SIZES.small}}
      />
    </View>
  )
}

export default TodoCards;