import React, { Component } from "react";
import { Text, View, TouchableOpacity } from "react-native";
import ViewPager from "@react-native-community/viewpager";
import Item from "./Item";

export default class index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            indexSelected: 0,
            pages: Array.from({ length: 5 }, (x, i) => i)
        };
        this.indexSelected = 0;
    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                <TouchableOpacity
                    style={{ margin: 10 }}
                    onPress={() =>
                        this.setState({
                            pages: this.state.pages.concat(this.state.pages)
                        })
                    }
                >
                    <Text>ABCCC</Text>
                </TouchableOpacity>
                <ViewPager
                    style={styles.viewPager}
                    initialPage={this.state.indexSelected}
                    onPageSelected={event => {
                        if (
                            event.nativeEvent.position ==
                            this.state.pages.length - 3
                        ) {
                            this.setState({
                                pages: this.state.pages.concat(this.state.pages)
                            });
                        } else {
                            this.setState({
                                indexSelected: event.nativeEvent.position
                            });
                        }
                    }}
                >
                    {this.state.pages.map((page, index) => {
                        return (
                            <View key={index.toString()}>
                                <Item
                                    index={index}
                                    name={page}
                                    indexSelected={this.state.indexSelected}
                                />
                            </View>
                        );
                    })}
                </ViewPager>
            </View>
        );
    }
}
const styles = {
    viewPager: {
        flex: 1
    },
    pageStyle: {
        flex: 1,
        alignItems: "center",
        padding: 20,
        backgroundColor: "red"
    }
};
