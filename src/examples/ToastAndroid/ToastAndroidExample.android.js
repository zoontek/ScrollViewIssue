/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @format
 *
 */

'use strict';

const React = require('react');

const {StyleSheet, Text, ToastAndroid, Pressable} = require('react-native');

const ToastWithShortDuration = () => {
  return (
    <Pressable
      onPress={() =>
        ToastAndroid.show('Copied to clipboard!', ToastAndroid.SHORT)
      }>
      <Text style={styles.text}>Tap to view toast</Text>
    </Pressable>
  );
};

const ToastWithLongDuration = () => {
  return (
    <Pressable
      onPress={() => ToastAndroid.show('Sending message..', ToastAndroid.LONG)}>
      <Text style={styles.text}>Tap to view toast</Text>
    </Pressable>
  );
};

const ToastWithTopGravity = () => {
  return (
    <Pressable
      onPress={() =>
        ToastAndroid.showWithGravity(
          'Download Started..',
          ToastAndroid.SHORT,
          ToastAndroid.TOP,
        )
      }>
      <Text style={styles.text}>Tap to view toast</Text>
    </Pressable>
  );
};

const ToastWithCenterGravity = () => {
  return (
    <Pressable
      onPress={() =>
        ToastAndroid.showWithGravity(
          'A problem has been occured while submitting your data.',
          ToastAndroid.SHORT,
          ToastAndroid.CENTER,
        )
      }>
      <Text style={styles.text}>Tap to view toast</Text>
    </Pressable>
  );
};

const ToastWithBottomGravity = () => {
  return (
    <Pressable
      onPress={() =>
        ToastAndroid.showWithGravity(
          'Please read the contents carefully.',
          ToastAndroid.SHORT,
          ToastAndroid.BOTTOM,
        )
      }>
      <Text style={styles.text}>Tap to view toast</Text>
    </Pressable>
  );
};

const ToastWithXOffset = () => {
  return (
    <Pressable
      onPress={() =>
        ToastAndroid.showWithGravityAndOffset(
          'Alex sent you a friend request',
          ToastAndroid.SHORT,
          ToastAndroid.TOP,
          250,
          0,
        )
      }>
      <Text style={styles.text}>Tap to view toast</Text>
    </Pressable>
  );
};

const ToastWithYOffset = () => {
  return (
    <Pressable
      onPress={() =>
        ToastAndroid.showWithGravityAndOffset(
          'There was a problem with your internet connection',
          ToastAndroid.SHORT,
          ToastAndroid.BOTTOM,
          0,
          100,
        )
      }>
      <Text style={styles.text}>Tap to view toast</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  text: {
    color: 'black',
  },
});

exports.title = 'Toast Example';
exports.category = 'Android';
exports.description =
  'Example that demonstrates the use of an Android Toast to provide feedback.';
exports.examples = [
  {
    title: 'Toast with Short Duration',
    render() {
      return <ToastWithShortDuration />;
    },
  },
  {
    title: 'Toast with Long Duration',
    render() {
      return <ToastWithLongDuration />;
    },
  },
  {
    title: 'Toast with Top Gravity',
    render() {
      return <ToastWithTopGravity />;
    },
  },
  {
    title: 'Toast with Center Gravity',
    render() {
      return <ToastWithCenterGravity />;
    },
  },
  {
    title: 'Toast with Bottom Gravity',
    render() {
      return <ToastWithBottomGravity />;
    },
  },
  {
    title: 'Toast with X Offset',
    render() {
      return <ToastWithXOffset />;
    },
  },
  {
    title: 'Toast with Y Offset',
    render() {
      return <ToastWithYOffset />;
    },
  },
];
