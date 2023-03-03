import React from "react";
import Home from "./components/Home"
import Scoreboard from "./components/Scoreboard"
import Gameboard from "./components/Gameboard"
import {NavigationContainer} from "@react-navigation/native"
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs"
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import style from "./style/style";


const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="Home" component={Home} options={{tabBarStyle: {display: "none"}}}/>
          <Tab.Screen name="Gameboard" component={Gameboard}/>
          <Tab.Screen name="Scoreboard" component={Scoreboard}/>
        </Tab.Navigator>
    </NavigationContainer>

    
  );
}
