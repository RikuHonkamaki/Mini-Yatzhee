import React, {useState, useEffect} from "react";
import { ScrollView, Text, View } from "react-native";
import Header from "./Header";
import Footer from "./Footer";
import AsyncStorage from '@react-native-async-storage/async-storage';
import {SCOREBOARD_KEY} from "../constants/Game"
import style from "../style/style";

export default Scoreboard = ( {navigation} )  => {

    const [scores, setScores] = useState([]);

    useEffect(() => {
        const unsubscribe = navigation.addListener("focus",() => {
            getScoreBoardData();
        });
        return unsubscribe;
    }, [navigation]);

    const getScoreBoardData = async () => {
        try {
          const jsonValue = await AsyncStorage.getItem(SCOREBOARD_KEY)
          if (jsonValue !== null) {
            let tmpScores = JSON.parse(jsonValue);
            setScores(tmpScores);
            //sort results here for rendering, löytyy assignment ohjeesta
          }
        } catch(error) {
          console.log("read errror" + error.message);
        }
      }

    return (
        <ScrollView>
            <Header/>
            <View>
                {scores.map((player, i) => (
                    <Text style = {style.results} key = {i}>{i + 1}. {player.name} {player.date} {player.time} {player.points}</Text>
                ))}
            </View>
{/* 
            {scores.map((player, i) => (
            <DataTable.Row>
                    <DataTable.Cell style={{width: 200}}>{player.name}</DataTable.Cell>
                    <DataTable.Cell style={{width: 200}}>{player.date}</DataTable.Cell>
                    <DataTable.Cell style={{width: 300}}>{player.points}</DataTable.Cell>   
            </DataTable.Row>
            ))} */}
            <Footer/>
        </ScrollView>
    )
    
    
}