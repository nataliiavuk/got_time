import react from "react";
import {View, Text, TouchableOpacity} from "react-native"; 

import styles from "./featured.style";

const FeaturedCard = ({title, description}) => {

    console.log('Rendering FeaturedCard:', title, description);

    return (
        <TouchableOpacity style ={styles.container} >
            <Text style={styles.stat}>{title}</Text>
            <Text style = {styles.statDesc}>{description}</Text>
        </TouchableOpacity>
    );

};

export default FeaturedCard;