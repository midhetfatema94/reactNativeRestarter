import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

const ComponentsScreen = () => {
    const name = 'Midhet';
    return (
        <View>
            <Text style = {style.titleStyle}>Getting Started with React Native!</Text>
            <Text style = {style.nameStyle}>My name is {name}</Text>
        </View>
    );
};

const style = StyleSheet.create({
    titleStyle: {
        fontSize: 45
    },
    nameStyle: {
        fontSize: 20
    }
});

export default ComponentsScreen;