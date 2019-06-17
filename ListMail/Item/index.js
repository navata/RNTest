import React, { Component } from "react";
import { Text, View, TouchableOpacity } from "react-native";
import { WebView } from "react-native-webview";
export default class index extends Component {
    constructor(props) {
        super(props);
        console.log(this.props.name);
        this.state = {
            hidden: false,
            index: this.props.index
        };
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        if (nextProps.indexSelected == prevState.index) {
            return { hidden: !prevState.hidden };
        } else return null;
    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                <TouchableOpacity
                    style={{ padding: 10 }}
                    onPress={() =>
                        this.setState({ hidden: !this.state.hidden })
                    }
                >
                    <Text>{this.props.name}</Text>
                </TouchableOpacity>
                {this.state.hidden ? (
                    <View>
                        <Text>AAAAAAA</Text>
                    </View>
                ) : (
                    <View style={{ flex: 1 }}>
                        <WebView
                            originWhitelist={["*"]}
                            source={{ html: "<h1>Hello world</h1>" }}
                            style={{
                                backgroundColor: "red"
                            }}
                        />
                    </View>
                )}
            </View>
        );
    }
}
