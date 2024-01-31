import { Slot, Stack } from "expo-router";
import {COLORS} from "../constants"

const Layout = () => {
    return (
      <>
        <Stack 
          options={{
          headerStyle:COLORS.lightWhite,
          headerShadowVisible:false,
          headerBackVisible:false,
         /* headerLeft: () => (
          <ScreenHeaderBtn iconUrl={icons.menu} dimension="60%"/>
           ),
          headerRight:()=> (
          <ScreenHeaderBtn iconUrl={icons.profile} dimension="100%"/>
          ),
          headerTitle:"Welcome",*/
           headerTitleAlign:"center"
        }}/>
        
        </>
    )
}

export default Layout;