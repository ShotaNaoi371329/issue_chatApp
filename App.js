import React from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { TabNavigator } from 'react-navigation';

class Screen1 extends React.Component {
  static navigationOptions = {
    tabBarLabel: 'Tab 1',
  };

  render(){
    return (
      <View style={styles.view1}>
        <Text style={styles.text1}>ABC</Text>
      </View>
    )
  }
}

class Screen2 extends React.Component {
  static navigationOptions = {
    tabBarLabel: 'Tab 2',
  }

  render(){
    return (
      <View style={styles.view1}>
        <Text style={styles.text1}>XYZ</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  view1: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  text1:{
    fontSize: 36,
  }
})

const MyApp = TabNavigator(
  {
    Tab1: {
      screen: Screen1,
    },
    Tab2: {
      screen: Screen2,
    },
  },
  {
    tabBarPosition: 'top',
    animationEnabled: true,
    showIcon: 'true',
    tabBarOptions: {
      activeTintColor: '#ffffff',
      style: {
        backgroundColor: '#009688',
      }
    }
  },
);
