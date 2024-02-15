
import { View, Text, TouchableOpacity, Image } from 'react-native'
import { Checkbox } from 'react-native-paper'
import styles from './todo.style';



const TodoCard = (todo) => {

    console.log('Inside todocard: '+ JSON.stringify(todo, null, 2) + todo.todo.title);
  
    const { amount, title, recurrency, duration, category } = todo.todo;
    return (
    <TouchableOpacity style={styles.container}>
      <TouchableOpacity style={styles.logoContainer}>
        <Image
    
          resizeMode='contain'  
          style ={styles.logoImage}        
        />
      </TouchableOpacity>
     
      <View style = {styles.textContainer}>
        <Text style= {styles.jobName} numberOfLines={1}>{title}</Text>
        <Text >{duration} | {amount} |{recurrency} | {category?.name} </Text>
        
      </View>

      <View><Checkbox></Checkbox></View>
    </TouchableOpacity>
  )
}

export default TodoCard