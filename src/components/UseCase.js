/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @format
 *
 */

import * as React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default function UseCase(props) {
  const children = React.Children.toArray(props.children).filter(
    child => child !== ' ',
  );
  return (
    <View style={styles.container}>
      <Text>{props.title}</Text>
      <Text>{props.note}</Text>
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
