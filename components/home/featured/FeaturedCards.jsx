import React from 'react'
import { useState } from 'react'
import { View, Text, TouchableOpacity, FlatList, ActivityIndicator } from 'react-native'
import { useRouter } from 'expo-router'


import {COLORS, SIZES} from '../../../constants';
import  FeaturedCard  from "../../common/cards/featured/featuredcard";


const FeaturedCards = () => {

    const router=useRouter();
   
    const data = [
      { id: '1', title: '3', description: 'days streak' },
      { id: '2', title: '2', description: 'things done' },
      { id: '3', title: 'Job', description: 'current focus' },
      // Add more items as needed
    ];
    
    const renderItem = ({item}) => {
      return (
      <FeaturedCard
       title = {item.title}
       description = {item.description}
      />);
   } ;
    
  return (
    <View>
      <FlatList
         data = {data}
         keyExtractor={(item) => item.id}
         renderItem={renderItem}  
         contentContainerStyle={{columnGap:SIZES.medium}}
         horizontal
      />
    </View>
  )
}

export default FeaturedCards;