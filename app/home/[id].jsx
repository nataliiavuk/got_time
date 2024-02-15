import react from "react";
import { Stack, useRouter } from "expo-router";
import {View, Text, ScrollView, SafeAreaView} from "react-native";
import {COLORS, icons, images, SIZES} from "../../constants";
import { FAB } from "react-native-paper";

import styles from "./home.style";

import Welcome from "../../components/common/welcome/welcome";
import FeaturedCards from "../../components/home/featured/FeaturedCards";
import TodoCards from "../../components/home/todo/TodoCards";
import { ScreenHeaderBtn } from "../../components";


const Home = ({id}) => {

    const router = useRouter();
    return (
        <SafeAreaView>
            <Stack.Screen
            options ={{
                headerStyle: {backgroundColor:COLORS.white},
                headerShadowVisible: false,
                headerBackVisible:false,
                headerLeft : () => (
                    <ScreenHeaderBtn
                        iconURL={icons.menu}
                        dimension="60%"
                       
                    />),
                headerRight : () => (
                    <ScreenHeaderBtn
                        iconURL={icons.profile}
                        dimension="60%"
                    />
                ),
                headerTitle:"",
                headerTitleAlign:"center"}}/>

           
            <ScrollView showsVerticalScrollIndicator={false}>
            <View
                style={{
                flex:1,
                padding:SIZES.medium
                }}>
                <Welcome/>
                <FeaturedCards/>
                <Text style={styles.h2}>Today</Text>
                <TodoCards/>
            </View>
            </ScrollView>
            <FAB
               icon="plus"
                style={styles.fab}
                  onPress={() => {
                    router.push("addtodo/");
                    console.log('Pressed')}}
        />
        </SafeAreaView>
    )

}

export default Home