import {StyleSheet, TextInput} from 'react-native';
import React from "react";

export default function Input({placeholder}) {

    return (
        <TextInput placeholder={placeholder} style={styles.container}>

        </TextInput>
    );
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        paddingBottom: 19,
        paddingTop: 19,
        borderBottomWidth: 1,
        fontSize: 17,
        borderBottomColor: "rgba(60, 60, 67, 0.3)",
        marginBottom: 24,
    },
});