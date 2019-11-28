import React from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';

const ListScreen = () => {
    const friends = [
        { 
            name: 'Friend #1',
            age: 20
        },
        { 
            name: 'Friend #2',
            age: 45
        },
        { 
            name: 'Friend #3',
            age: 32
        },
        { 
            name: 'Friend #4',
            age: 27
        },
        { 
            name: 'Friend #5',
            age: 53
        },
        { 
            name: 'Friend #6',
            age: 30
        },
        { 
            name: 'Friend #7',
            age: 23
        }
    ];

    return (
        <FlatList
            showsVerticalScrollIndicator= {false}
            keyExtractor= {(item) => item.name}
            data= {friends} 
            renderItem= {({item}) => {
            return <Text style= {style.listStyle}>Name: {item.name}, Age: {item.age}</Text>
            }}
        />
    );
}

const style = StyleSheet.create({
    textStyle: {
        fontSize: 20
    },
    listStyle: {
        marginVertical: 50
    }
});

export default ListScreen;