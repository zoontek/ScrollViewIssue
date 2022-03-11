/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @format
 */

import {View, Text, StyleSheet, Switch} from 'react-native';
import * as React from 'react';

export default function ToggleNativeDriver({value, onValueChange, style}) {
  return (
    <View style={StyleSheet.compose(styles.row, style)}>
      <Text>Use Native Driver</Text>
      <Switch
        testID="toggle-use-native-driver"
        onValueChange={onValueChange}
        value={value}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
