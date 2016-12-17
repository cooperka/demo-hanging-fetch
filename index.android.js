import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View } from 'react-native';

function logWithTime(message) {
  console.log(`${Date.now()} - ${message}`);
}

export default class HangingFetch extends Component {

  state = {
    hasLoaded: false,
  };

  onPressButton() {
    logWithTime('Pressed');

    this.setState({ hasLoaded: false });

    fetch('https://api.github.com/users')
      .then((response) => response.json()) // Comment out this line to fix the delay.
      .then(() => this.onFetch())
      .catch(() => this.onFetch());
  }

  onFetch() {
    logWithTime('Fetched');

    this.setState({ hasLoaded: true });
  }

  render() {
    logWithTime('Render');

    return (
      <View style={styles.container}>
        <Text style={[styles.instructions, styles.button]} onPress={() => this.onPressButton()}>
          Fetch!
        </Text>
        <Text style={styles.instructions}>
          Request has loaded? {this.state.hasLoaded ? 'Yes' : 'No'}.
        </Text>
      </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  button: {
    fontSize: 18,
  },
});

AppRegistry.registerComponent('HangingFetch', () => HangingFetch);
