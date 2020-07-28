import React, { Component } from 'react';
import { View ,StyleSheet, ScrollView} from 'react-native';

export default class App extends Component {
  render() {
    return (

      

    
      <View
        style={styles.container}>
        <ScrollView horizontal={true}>
        <View style={styles.box1 }/>
        <View style={styles.box2} />
        <View style={styles.box3} />
        
        </ScrollView>
      </View>
      

    );
  }
}


const styles = StyleSheet.create({

  container:{
          flex: 1,
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
  },
  box1:{
    width: 100, height: 100, backgroundColor: 'powderblue' 

  },
  box2:
  {
    height: 100,width:100, backgroundColor: 'red'
  },

  box3:
  {
    height: 100,width:100, backgroundColor: 'steelblue'

  }
  
})