import React, { Component } from 'react'
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native'

import Bananas from './components/Bananas'
import MainControls from './components/MainControls'
import LocationDisplay from './components/LocationDisplay'
import RunDisplay from './components/RunDisplay'


class FitnessPaceSetter extends Component {
  state = {
    started: false,
    sets: 1,
    interval: 1,
  }

  constructor(props) {
    super(props)
    this.onStart = this.onStart.bind(this)
  }

  onStart(sets, interval) {
    this.setState({
      started: true,
      sets: sets,
      interval: interval,
    })
  }

  render() {
    if (this.state.started) {
      return (
        <View style={styles.container}>
          <Text style={styles.welcome}>
            Started
          </Text>
          <RunDisplay sets={this.state.sets} interval={this.state.interval} />
          <Text style={styles.button} onPress={() => this.setState({started: false})}>Stop</Text>
        </View>
      )
    }
    else {
      return (
        <View style={styles.container}>
          <Text style={styles.welcome}>
            Fitness Pace Setter
          </Text>
          <Bananas />
          <MainControls onStart={this.onStart} />
        </View>
      )
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  button: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    backgroundColor: '#00aaaa',
  },
})

AppRegistry.registerComponent('FitnessPaceSetter', () => FitnessPaceSetter)
