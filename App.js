
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Animated from "react-native-reanimated";
import { TapGestureHandler, State, ScrollView } from "react-native-gesture-handler";

const { event, cond, eq, Value } = Animated;

export default class App extends React.Component {
  constructor(props) {
    super(props);

    const state = new Value(-1);

    this.onStateChange = event([{
      nativeEvent: {
        state: state,
      },
    }]);

  this._width = cond(eq(state, State.BEGAN), 300, 200);
  }
  render() {
    return (
      <View style={styles.container}>
        <ScrollView horizontal={true}>      
            <TapGestureHandler onHandlerStateChange={this.onStateChange}>
          <Animated.View style={[styles.box, { width: this._width }]} />
          
        </TapGestureHandler>
      
        <View style={{width:100,height:100,backgroundColor:'blue'}}/>
          <View style={{width:100,height:100,backgroundColor:'green'}}/>
          </ScrollView>

      </View>
      
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection:"row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  box: {
    backgroundColor: "tomato",
    width: 200,
    height: 200,
  },
});