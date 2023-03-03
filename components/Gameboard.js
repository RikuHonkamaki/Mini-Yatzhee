import React, {useState, useEffect} from "react";
import { Text, View, Pressable, Button } from "react-native";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import style from "../style/style";
import { NBR_OF_DICES, NBR_OF_THROWS, MAX_SPOT, SCOREBOARD_KEY} from "../constants/Game"
import {Col, Grid} from "react-native-easy-grid"
import AsyncStorage from '@react-native-async-storage/async-storage';

let board = [];

export default Gameboard = ({ route })  => {

    const [playerName, setPlayerName] = useState("");
    const [nbrOfThrowsLeft, setNbrOfThrowsLeft] = useState(NBR_OF_THROWS);
    const [status, setStatus] = useState("");

    const [selectedDices, setSelectedDices] = useState(new Array(NBR_OF_DICES).fill(false));

    const [diceSpots, setDiceSpots] = useState(new Array(NBR_OF_DICES).fill(0));

    const [dicePointsTotal, setDicePointsTotal] = useState(new Array(MAX_SPOT).fill(0));

    const [selectedDicePoints, setSelectedDicePoints] = useState(new Array(MAX_SPOT).fill(false));

    const [scores, setScores] = useState([]);

    const sum = dicePointsTotal.map(datum => datum.prix).reduce((a, b) => a + b)
    
    

    const row = [];
    for (let i = 0; i < NBR_OF_DICES; i++) {
      row.push(
        <Pressable 
            key={"row" + i}
            onPress={() => selectDice(i)}>
          <MaterialCommunityIcons
            name={board[i]}
            key={"row" + i}
            size={50} 
            color={getDiceColor(i)}>
          </MaterialCommunityIcons>
        </Pressable>
      );
    }

    const pointsRow = [];
    for (let spot = 0; spot < MAX_SPOT; spot++) {
        pointsRow.push(
            <Col key={"points" + spot}>
                <Text key={"points" + spot} style={style.points}>{getSpotTotal(spot)}</Text>
            </Col>
        )
    }

    const buttonsRow = [];
    for (let diceButton = 0; diceButton < MAX_SPOT; diceButton++) {
        buttonsRow.push(
            <Col key={"buttonsRow" + diceButton}>
                <Pressable 
                onPress={() => selectDicePoints(diceButton)}
                key={"buttonsRow" + diceButton}>
                    <MaterialCommunityIcons
                        name = {"numeric-" + (diceButton + 1) + "-circle"}
                        key={"buttonsRow" + diceButton}
                        size={40}
                        color={getDicePointsColor(diceButton)}
                    ></MaterialCommunityIcons>
                </Pressable>
            </Col>
        )
    }


    useEffect(() => {
        if (playerName === "" && route.params?.player) {
            setPlayerName(route.params.player);
            getScoreBoardData();
        }
    }, []);

    useEffect(() => {
      if(nbrOfThrowsLeft === 0) {
        setStatus("Select your points");
      } 
      else if(nbrOfThrowsLeft < 0) {
        setNbrOfThrowsLeft(NBR_OF_THROWS - 1);
      }
      else if(selectedDicePoints.every(x => x)) {
        savePlayerPoints();
      }
    }, [nbrOfThrowsLeft]);

    function getDiceColor(i) {
          return selectedDices[i] ? "#183A1D" : "#F0A04B";
        }

  
    function getDicePointsColor(i) {
      if (selectedDicePoints[i]) {
        return"black";
      } 
      else {
        return "steelblue";
      }
    }
    
    
    function selectDice(i) {
        let dices = [...selectedDices];
        dices[i] = selectedDices[i] ? false : true;
        setSelectedDices(dices);
      }


    function getSpotTotal(i) {
      return dicePointsTotal[i];
    } 



    function selectDicePoints(i) {
      let selected = [...selectedDices];
      let selectedPoints = [...selectedDicePoints];
      let points = [...dicePointsTotal];
      if (!selectedPoints[i]) {
        selectedPoints[i] = true;
        let nbrOfDices = diceSpots.reduce((total, x) => (x === (i + 1) ? total + 1: total), 0);
        points[i] = nbrOfDices * (i + 1);
        setDicePointsTotal(points);
      }
      selected.fill(false);
      setSelectedDices(selected);
      setSelectedDicePoints(selectedPoints);
      setNbrOfThrowsLeft(NBR_OF_THROWS)
      return points[i];
    }

    function throwDices() {
      let spots = [...diceSpots];
        for (let i = 0; i < NBR_OF_DICES; i++) {
          if (!selectedDices[i]) {
            let randomNumber = Math.floor(Math.random() * 6 + 1);
            board[i] = 'dice-' + randomNumber;
            spots[i] = randomNumber;
          }
        }
        setNbrOfThrowsLeft(nbrOfThrowsLeft-1);
        setDiceSpots(spots);
        setStatus("select and throw dices again");
      }

      const getScoreBoardData = async () => {
        try {
          const jsonValue = await AsyncStorage.getItem(SCOREBOARD_KEY)
          if (jsonValue !== null) {
            let tmpScores = JSON.parse(jsonValue);
            setScores(tmpScores);
          }
        } catch(error) {
          console.log("read error" + error.message);
        }
      }

      const savePlayerPoints = async () => {
        const playerPoints = {
          name:"PLAYER: " + playerName + "  ",
          date: new Date().toLocaleString() + "      ",
          points:"POINTS:  " + sum
        }

        try {
          const newScore = [...scores, playerPoints];
          const jsonValue = JSON.stringify(newScore);
          await AsyncStorage.setItem(SCOREBOARD_KEY, jsonValue);
        } catch(error) {
          console.log("save error" + error.message);
        }
      }

      
  return (
    <View style={style.gameboard}>
      <View style={style.flex}>{row}</View>
      <Text style={style.gameinfo}>Throws left: {nbrOfThrowsLeft}</Text>
      <Text style={style.gameinfo}>{status}</Text>
      <View style = {{margin: 20}}>
      <Button
        color={"#F0A04B"}
        title="THROW DICES"
        onPress={() => throwDices()}/>
      </View>
      
      <View style={style.dicePoints}><Grid>{pointsRow}</Grid></View>
      <View style={style.dicePoints}><Grid>{buttonsRow}</Grid></View>
      <Text style={style.playerNameText}>Player: {playerName}</Text>
    </View>
  ) 
}

