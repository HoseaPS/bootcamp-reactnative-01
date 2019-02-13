import React, { Component } from 'react';
import {
  StyleSheet, ScrollView, View, Text,
} from 'react-native';

import './config/ReactotronConfig';
import './config/DevToolsConfig';

import Post from './components/Post';

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'red',
    paddingTop: 20,
  },

  appTitle: {
    textAlign: 'center',
    padding: 10,
    fontSize: 20,
    fontWeight: '900',
    color: '#000',
  },
});

export default class App extends Component {
  state = {
    posts: [
      {
        id: 0,
        title: 'Aprendendo React Native',
        author: 'Oséias P. Silva',
        post: 'SHABBA RANKS IS COOL',
      },
      {
        id: 0,
        title: 'Aprendendo React Native',
        author: 'Oséias P. Silva',
        post: 'SHABBA RANKS IS COOL',
      },
      {
        id: 0,
        title: 'Aprendendo React Native',
        author: 'Oséias P. Silva',
        post: 'SHABBA RANKS IS COOL',
      },
      {
        id: 0,
        title: 'Aprendendo React Native',
        author: 'Oséias P. Silva',
        post: 'SHABBA RANKS IS COOL',
      },
      {
        id: 0,
        title: 'Aprendendo React Native',
        author: 'Oséias P. Silva',
        post: 'SHABBA RANKS IS COOL',
      },
      {
        id: 0,
        title: 'Aprendendo React Native',
        author: 'Oséias P. Silva',
        post: 'SHABBA RANKS IS COOL',
      },
    ],
  };

  render() {
    return (
      <ScrollView>
        <Text style={styles.appTitle}>Go Native App</Text>
        <View style={styles.container}>
          {this.state.posts.map(state => (
            <Post key={state.id} title={state.title} author={state.author} post={state.post} />
          ))}
        </View>
      </ScrollView>
    );
  }
}
