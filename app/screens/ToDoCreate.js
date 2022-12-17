import {StyleSheet, View} from 'react-native';
import React from "react";
import Button from "../components/UI/Button";
import Input from "../components/UI/Input";

export default function ToDoCreate({navigation}) {
    function handlePress() {
        navigation.navigate("Home");
    }

    return (
        <View style={styles.container}>
            <Input placeholder="name of the task to do"/>
            <Input placeholder="Description (optionnal)"/>
            <Button onPress={handlePress}>To-do add</Button>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 16,
        borderBottomColor: "rgba(0, 0, 0, 0.05)",
    },
});