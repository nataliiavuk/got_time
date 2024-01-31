import { StyleSheet } from "react-native"
import { COLORS, SIZES } from "../../constants"

export const loginStyle = StyleSheet.create({

    content:{
        display:"flex", 
        flex:1,
        justifyContent:"center",
        alignItems:"center",
        flexDirection:"row",
        backgroundColor: COLORS.white
    },

    card:{
        backgroundColor: COLORS.lightWhite,
        width: "80%"
    },

    cardTitle:{
        fontSize:SIZES.large
    },

    cardButton:{
        margin:2,
        marginLeft:0,
        marginRight:0,

    }
})