import React, { Component } from "react";
import { Text, View, NativeModules } from "react-native";
import ListMail from "./ListMail";
export default class App extends Component {
    render() {
        return (
            <View
                style={{
                    flex: 1
                }}
            >
                <ListMail />
            </View>
        );
    }
}
