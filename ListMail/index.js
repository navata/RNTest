import React, { Component } from "react";
import { Text, View } from "react-native";
import ViewPager from "@react-native-community/viewpager";
import Item from "./Item";

export default class index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            indexSelected: 0,
            pages: Array.from({ length: 1000 }, (x, i) => i)
        };
        this.indexSelected = 0;
    }

    render() {
        return (
            <ViewPager
                style={styles.viewPager}
                initialPage={0}
                onPageSelected={event => {
                    console.log(
                        "event.nativeEvent.position",
                        event.nativeEvent.position
                    );
                    this.setState({
                        indexSelected: event.nativeEvent.position
                    });
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
