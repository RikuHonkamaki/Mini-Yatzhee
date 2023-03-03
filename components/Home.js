import React, { useState } from "react";
import { Text, View, TextInput, Pressable, Button, Keyboard } from "react-native";
import style from "../style/style";
import Footer from "./Footer";
import Header from "./Header";

export default Home = ({navigation})  => {

    const [playerName,setPlayerName] = useState("");
    const [hasPlayerName,setHasPlayerName] = useState(false);

    const handlePlayerName = (value) => {
        if(value.trim().length > 0 ) {
            setHasPlayerName(true);
            Keyboard.dismiss();
        }
    }

    return (
        <View style={style.home}>
            { !hasPlayerName 
            ?  <>
            <Header/>
            <Text style={style.homeText}>For scoreboard enter your</Text> 
            <TextInput style={style.textInput} placeholder='Name here' placeholderTextColor = {"#183A1D"} onChangeText={setPlayerName} autoFocus={true}></TextInput>
            <Button
                color={"#F0A04B"}
                title="OK"
                onPress={() => handlePlayerName(playerName)}
            />
            </>
            :
            <>
            <Text style = {style.rulesHeader}>Rules of the game:</Text>

            <Text style = {style.rulesText}>
            Upper section of the classic Yahtzee 
            dice game. You have 5 dices and 
            for the every dice you have 3
            throws. 
            </Text>
            <Text style = {style.rulesText}>After each throw you can keep dices in 
            order to get same dice spot counts as many as 
            possible. In the end of the turn you must select 
            your points from 1 to 6. 
            Game ends when all points have been selected. 
            The order for selecting those is free. 
            </Text>

            <Text style = {style.rulesText}>
            POINTS: After each turn game calculates the sum 
            for the dices you selected. Only the dices having 
            the same spot count are calculated. Inside the 
            game you can not select same points from 
            1 to 6 again.
            GOAL: To get points as much as possible. 
            63 points is the limit of 
            getting bonus which gives you 50
            points more
            </Text>
            <Text style = {style.goodLuck}>Good luck, {playerName}!</Text>

            <Button
                color={"#F0A04B"}
                title="PLAY"
                onPress={() => navigation.navigate("Gameboard", {player: playerName})}
            />
            </>
            }
            <Footer/>
        </View>
    )
    
}