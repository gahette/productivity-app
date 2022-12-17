import React from "react";
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";

import Home from "../screens/Home";
import ToDoCreate from "../screens/ToDoCreate";


export default function Navigation() {
    const RooStack = createNativeStackNavigator();
    return (
        <NavigationContainer>
            <RooStack.Navigator screenOptions={{presentation: "modal"}}>
                <RooStack.Screen name="Home"
                                 component={Home}
                                 options={{headerShown: false}}
                />
                <RooStack.Screen name="ToDoCreate"
                                 component={ToDoCreate}
                                 options={{headerShown: false}}
                />
            </RooStack.Navigator>
        </NavigationContainer>
    );
}