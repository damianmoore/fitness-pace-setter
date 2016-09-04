import React, { Component } from 'react'
import { AppRegistry, StyleSheet, Text, TextInput, View } from 'react-native'


export default class MainControls extends Component {
  state = {
    sets: '10',
    interval: '115'
  }

  onStart() {
    var sets = parseInt(this.state.sets)
    var interval = parseInt(this.state.interval)
    this.props.onStart(sets, interval)
  }

  render() {
    return (
      <View>
        <Text>Sets</Text>
        <TextInput style={styles.textinput} keyboardType='numeric' onChangeText={(sets) => this.setState({sets: sets})} value={this.state.sets}/>
        <Text>Interval</Text>
        <TextInput style={styles.textinput} keyboardType='numeric' onChangeText={(interval) => this.setState({interval: interval})} value={this.state.interval}/>
        <Text style={styles.button} onPress={() => this.onStart()}>Go</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  textinput: {
    width: 193,
  },
  button: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    backgroundColor: '#00aaaa',
  },
})
