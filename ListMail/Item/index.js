import React, { Component } from "react";
import { Text, View, TouchableOpacity } from "react-native";
import { WebView } from "react-native-webview";

export default class index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hidden: false,
            index: this.props.index,
            html: ""
        };
        console.log("abc");
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        if (
            nextProps.indexSelected == nextProps.index ||
            (nextProps.index > nextProps.indexSelected - 3 &&
                nextProps.indexSelected + 3 > nextProps.index)
        ) {
            console.log("abc");
            return { hidden: true };
        } else {
            return null;
        }
    }

    // ở đây chúng ta sẽ set state
    componentDidUpdate(prevProps, prevState) {}

    render() {
        return (
            <View style={{ flex: 1 }}>
                <TouchableOpacity
                    style={{ padding: 10 }}
                    onPress={() =>
                        this.setState({ hidden: !this.state.hidden })
                    }
                >
                    <Text>{this.props.index + "abc"}</Text>
                </TouchableOpacity>
                {this.state.hidden ? (
                    <View style={{ flex: 1 }}>
                        <WebView
                            originWhitelist={["*"]}
                            source={{ uri: "http://www.google.com/" }}
                            style={{
                                backgroundColor: "red"
                            }}
                        />
                    </View>
                ) : (
                    <View>
                        <Text>AAAAAAA</Text>
                    </View>
                )}
            </View>
        );
    }
}
