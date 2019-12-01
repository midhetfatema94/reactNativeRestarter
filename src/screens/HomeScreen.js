import React from 'react';
import { Text, StyleSheet, View, Button, TouchableOpacity } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

const HomeScreen = () => {
  return (
    <View>
      <Text style={styles.text}>Hello World</Text>
      <Button 
        title="Components Demo" 
        onPress={() => console.log("button pressed")}
      />
      <TouchableOpacity onPress={() => console.log("list button pressed")}>
        <Text>List Demo</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
    textAlign: "center"
  }
});

export default HomeScreen;
