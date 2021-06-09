import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity} from 'react-native';

export default class Start extends Component {
    render(){
        return(
           <View style={styles.container}>
               <Text style={styles.title}>To-Do</Text>
               <TouchableOpacity style={styles.button} onPress ={()=>{
                   this.props.navigation.navigate("Task")
               }}>
                   <Text>Next screen</Text>
               </TouchableOpacity>
               
           </View> 
        )
    
    }
}
 const styles = StyleSheet.create({
title: {
    fontSize: 65,
    fontWeight: "bold",
    fontWeight: "300",
    paddingBottom: 30,
    //paddingRight: 50,
    color: "#F5f7F7"
  },
  container: {
    flex: 1,
    backgroundColor: '#000000',
    alignItems: "center",
    justifyContent: "center"
  },
  button: {
    width: 300,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 25,
    backgroundColor: "#ffffff",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 8
    },
    shadowOpacity: 0.3,
    shadowRadius: 10.32,
    elevation: 16,
    padding: 10
  },
 })