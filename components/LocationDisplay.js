import React, { Component } from 'react'
import { AppRegistry, StyleSheet, Text, TextInput, View } from 'react-native'


export default class LocationDisplay extends Component {
  state = {
    lastPosition: 'unknown',
  }

  watchID: ?number = null

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        var lastPosition = JSON.stringify(position)
        this.setState({lastPosition})
      },
      (error) => null,
      {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000}
    )
    this.watchID = navigator.geolocation.watchPosition((position) => {
      var lastPosition = JSON.stringify(position)
      this.setState({lastPosition})
    })
  }

  componentWillUnmount() {
    navigator.geolocation.clearWatch(this.watchID)
  }

  render() {
    return (
      <View>
        <Text>
          <Text style={styles.title}>Current position: </Text>
          {this.state.lastPosition}
        </Text>
      </View>
    )
  }
}

var styles = StyleSheet.create({
  title: {
    fontWeight: '500',
  },
})
