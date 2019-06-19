import React, { Component } from "react";
import { Text, View, TouchableOpacity } from "react-native";
import { WebView } from "react-native-webview";

export default class index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            visiable: false,
            index: this.props.index,
            html: "",
            indexSelected: -1
        };
        this.status = true;
        // console.log("abc");
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        if (nextProps.indexSelected == nextProps.index) {
            return { visiable: true, indexSelected: nextProps.index };
        } else if (
            nextProps.index > nextProps.indexSelected - 3 &&
            nextProps.indexSelected + 3 > nextProps.index
        ) {
            return { visiable: true, indexSelected: -1 };
        } else {
            // return { time: 0 };
            return { visiable: false, indexSelected: -1 };
        }
    }

    // ở đây chúng ta sẽ set state
    componentDidUpdate(prevProps, prevState) {
        let { visiable, indexSelected, html } = this.state;
        console.log("event.nativeEvent.position", this.state);
        console.log("this.status", this.status);
        if (indexSelected > -1 && visiable && this.status && !html) {
            this.status = false;
            let url = "https://www.google.com/";
            if (this.state.index % 2 == 0) {
                url = "https://www.24h.com.vn/";
            }
            if (this.state.index % 3 == 0) {
                url = "https://news.zing.vn/";
            }

            fetch(url)
                .then(resp => {
                    return resp.text();
                })
                .then(text => {
                    this.setState(
                        { html: "<h1>" + text + "</h1>" },
                        () => (this.status = true)
                    );
                    // this.status = true;
                });
        }
    }

    render() {
        console.log("stateet", this.state);
        if (!this.state.visiable) {
            return null;
        }

        return (
            <View style={{ flex: 1 }}>
                <TouchableOpacity
                    style={{ padding: 10 }}
                    onPress={() => this.setState({ visiable: false })}
                >
                    <Text>{this.state.index + "abc"}</Text>
                </TouchableOpacity>
                <View
                    style={{
                        height: "100%",
                        width: "100%",
                        backgroundColor: "yellow"
                    }}
                >
                    <WebView
                        originWhitelist={["*"]}
                        source={{ html: this.state.html }}
                        style={{
                            backgroundColor: "red"
                        }}
                    />
                </View>
            </View>
        );
    }
}
