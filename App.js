import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { createAppContainer, createSwitchNavigator,} from 'react-navigation';
import Task from "./Screens/Task.js";
import Start from "./Screens/StartScreen.js";

export default class App extends React.Component {
  render() {
    return(
      <AppContainer/>
    )
  }
}

const SwitchNavigator = createSwitchNavigator({
  Start:{screen:Start},
  Task:{screen:Task}
})
const AppContainer = createAppContainer(SwitchNavigator)

//react-native-reanimated react-native-screens react-native-gesture-handler
