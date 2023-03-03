import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1
  },
  header: {
    marginBottom: 15,
    backgroundColor: 'skyblue',
    flexDirection: 'row',
    backgroundColor: "#F0A04B"
  },
  footer: {
    marginTop: 20,
    backgroundColor: 'skyblue',
    flexDirection: 'row',
    backgroundColor: "#F0A04B",
    marginTop: 'auto'
  },
  title: {
    color: '#fff',
    fontWeight: 'bold',
    flex: 1,
    fontSize: 23,
    textAlign: 'center',
    margin: 10,
  },
  author: {
    color: '#fff',
    fontWeight: 'bold',
    flex: 1,
    fontSize: 15,
    textAlign: 'center',
    margin: 10,
  },
  gameboard: {
    backgroundColor: '#E1EEDD',
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center'
  },
  gameinfo: {
    textAlign: 'center',
    justifyContent: 'center',
    fontSize: 20,
    marginBottom: 20,
    fontWeight: "bold",
    color: "#183A1D"
  },
  row: {
    marginTop: 20,
    padding: 10
  },
  flex: {
    flexDirection: "row",
    marginBottom: 80
  },
  button: {
    margin: 30,
    flexDirection: "row",
    padding: 10,
    width: 250,
    borderRadius: 45,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color:"#ffd000",
    fontSize: 20,
    color: "#183A1D"
  },
  home: {
    alignItems:"center",
    backgroundColor: "#E1EEDD",
    flex:1,
  },
  homeText: {
    marginTop: 70,
    fontWeight: "bold",
    fontSize: 25,
    color: "#183A1D"
  },
  points: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 15,
    marginLeft: 10,
    marginRight: 15,
    textAlign: "center"
  },
  dicePoints : {
    flexDirection: "row",
    width: 280,
    alignContent: "center"
  },
  textInput: {
    borderWidth: 2,
        borderColor: "#F0A04B",
        width: 200,
        fontWeight:"bold",
        textAlign:"center",
        marginTop: 30,
        marginBottom: 30
  },
  rulesText: {
    marginLeft:40,
    marginRight:40,
    marginTop: 10,
    marginBottom: 10,
    fontSize: 15,
    fontWeight: "bold",
    color: "#183A1D"
  },
  rulesHeader: {
    marginLeft:40,
    marginRight:40,
    marginTop: 15,
    marginBottom: 10,
    fontSize: 25,
    fontWeight: "bold",
    color: "#183A1D"
  },
  goodLuck: {
    fontSize: 20,
    fontWeight: "bold",
    margin:15,
    color: "#183A1D"
  },
  playerNameText: {
    fontSize: 22,
    fontWeight: "bold",
    marginTop: 45,
    color: "#183A1D"
  },
  results: {
    fontWeight: "bold",
    color: "#183A1D",
    borderTopWidth: 2,
    padding: 20,
    borderColor: "#183A1D"
  },

});