
import { View, Text, TouchableOpacity, Image } from 'react-native'
import { Checkbox } from 'react-native-paper'
import styles from './todo.style';



const TodoCard = ({title, duration, recurrency, category}) => {

    console.log('Rendering FeaturedCard:', title, duration);

  return (
    <TouchableOpacity 
    style={styles.container}>
      <TouchableOpacity style={styles.logoContainer}>
        <Image
          source={"https://t4.ftcdn.net/jpg/05/05/61/73/360_F_505617309_NN1CW7diNmGXJfMicpY9eXHKV4sqzO5H.jpg"}
          resizeMode='contain'  
          style ={styles.logoImage}        
        />
      </TouchableOpacity>
     
      <View style = {styles.textContainer}>
        <Text style= {styles.jobName} numberOfLines={1}>{title}</Text>
        <Text >{duration} | {recurrency} | {category} </Text>
        
      </View>

      <View><Checkbox></Checkbox></View>
    </TouchableOpacity>
  )
}

export default TodoCard