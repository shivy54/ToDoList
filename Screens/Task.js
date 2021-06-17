import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";
import db from "../Config";
import firebase from "firebase";

export default class Task extends React.Component {
  constructor() {
    super();
    this.state = {
      Task: "",
      AllTasks:[],
    };
  }
  
  AddTask = () => {
    var task = this.state.Task
    db.collecttion("Tasks").add({
      "Task": task,
      "Completed": "Nope",
    });
    
    console.log("save")
  };

  GetTask = () => {
    db.collection("Tasks").where("Completed", "==","Nope")
    .onSnapshot((snapshot)=>{
      var AllTasks = snapshot.docs.map((doc) => doc.data())
      this.setState({
        AllTasks : AllTasks
      });
    })
  }

  componentDidMount() {
    this.GetTask();
  }

  keyExtractor = (item, index) => index.toString()

  renderItem = ( {item, i} ) =>{
    return (
      <ListItem
        key={i}
        title={item.Task}
        titleStyle={{ color: 'black', fontWeight: 'bold' }}
        rightElement={
            <TouchableOpacity style={styles.button}
              onPress ={()=>{
               
              }}
              >
              <Text style={{color:'#ffff'}}>Done</Text>
            </TouchableOpacity>
          }
        bottomDivider
      />
    )
  }

  render() {
    return (
      <View styles={styles.container}>
        <Text style={styles.title}>Tasks</Text>
        <View style={styles.inputContainer}>
        <FlatList
              keyExtractor={this.keyExtractor}
              data={this.state.AllTasks}
              renderItem={this.renderItem}
            />
        <TextInput
          style={styles.TaskInput}
          placeholder={"Task to do"}
          onChangeText={(text) => {
            this.setState({
              Task: text,
            });
          }}
          value={this.state.Task}
        />
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            this.AddTask();
          }}
        >
          <Text>Save</Text>
        </TouchableOpacity>
        </View>
        
      </View>
    );
  }
}
const styles = StyleSheet.create({
  title: {
    fontSize: 65,
    fontWeight: "bold",
    fontWeight: "300",
    paddingBottom: 30,
    paddingRight: 50,
    color: "#ff3d00",
    marginTop:50,
  },
  container: {
    flex: 1,
    backgroundColor: "#808588",
    alignItems: "center",
    justifyContent: "center",
  },
  TaskInput: {
    position: "absolute",
    width: "100%",
    resizeMode: "contain",
    bottom: -1,
    height: 40,
    borderBottomWidth: 1.5,
    borderColor: "#ff8a65",
    fontSize: 20,
    paddingLeft: 10,
    position: "absolute",
      width: "100%",
      resizeMode: "contain",
      bottom: -5
  },
  button:{
    width:"75%",
    height:50,
    justifyContent:'center',
    alignItems:'center',
    borderRadius:10,
    backgroundColor:"#e1ad01",
    shadowColor: "#000",
    shadowOffset: {
       width: 0,
       height: 8,
    },
    shadowOpacity: 0.44,
    shadowRadius: 10.32,
    elevation: 16,
    marginTop:20
    },
    inputContainer:{
      flex: 0.3,
      flexDirection:'row'
    }
});
