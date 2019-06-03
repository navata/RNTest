import React, { Component } from 'react'
import { 
    Text, 
    View,
    NativeModules 
} from 'react-native'
console.log("NativeModules", NativeModules);
const netInfo = NativeModules.hasOwnProperty("MyModules");
console.log("NetInfo", netInfo); // Mode debug: false release: error
export default class App extends Component {
    render() {
        return (
            <View style={{flex: 1, justifyContent: "center", alignItems: "center"}}>
                <Text> textInComponent </Text>
            </View>
        )
    }
}
