import React from 'react';
import PropTypes from 'prop-types';

import { View, Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFF',
    width: '80%',
    padding: 25,
    marginBottom: 20,
    borderRadius: 10,
  },

  title: {
    fontSize: 18,
    fontWeight: '900',
    width: '100%',
  },

  author: {
    fontSize: 14,
    fontWeight: '900',
    color: '#999',
    marginBottom: 10,
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#999',
    width: '100%',
  },

  post: {
    fontSize: 14,
    color: '#000',
    marginBottom: 10,
    width: '100%',
  },
});

const Post = ({ title, author, post }) => (
  <View style={styles.container}>
    <Text style={styles.title}>{title}</Text>
    <Text style={styles.author}>{author}</Text>
    <Text style={styles.post}>{post}</Text>
  </View>
);

Post.propTypes = {
  title: PropTypes.string.isRequired,
  post: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};

export default Post;
