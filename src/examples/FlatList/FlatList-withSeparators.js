/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @format
 */

'use strict';
import BaseFlatListExample from './BaseFlatListExample';
import {StyleSheet, View, Text} from 'react-native';
import * as React from 'react';

const Separator =
  (defaultColor, highlightColor) =>
  ({leadingItem, trailingItem, highlighted, hasBeenHighlighted}) => {
    const text = `Separator for leading ${leadingItem} and trailing ${trailingItem} has ${
      !hasBeenHighlighted ? 'not ' : ''
    }been pressed`;

    return (
      <View
        style={[
          styles.separator,
          {backgroundColor: highlighted ? highlightColor : defaultColor},
        ]}>
        <Text style={styles.separtorText}>{text}</Text>
      </View>
    );
  };

export function FlatList_withSeparators() {
  const exampleProps = {
    ItemSeparatorComponent: Separator('lightgreen', 'green'),
  };
  const ref = React.useRef(null);

  return <BaseFlatListExample ref={ref} exampleProps={exampleProps} />;
}

const styles = StyleSheet.create({
  separator: {
    height: 12,
  },
  separtorText: {
    fontSize: 10,
  },
});

export default {
  title: 'FlatList with Separators',
  name: 'separators',
  description: 'Tap to see pressed states for separator components.',
  render: () => <FlatList_withSeparators />,
};
