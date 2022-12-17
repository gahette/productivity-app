import {StyleSheet, Text, View} from 'react-native';
import React from "react";
import Button from "../components/UI/Button";


export default function Home({navigation}) {
    function handlePress() {
        navigation.navigate("ToDoCreate");
    }

    return (
        <View style={styles.container}>
            <Text>Home page</Text>
            <Button onPress={handlePress} title="Go to create page">+Add a to-do</Button>
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
    },
});