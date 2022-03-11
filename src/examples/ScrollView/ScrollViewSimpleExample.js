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

const {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
} = require('react-native');

const NUM_ITEMS = 20;

class ScrollViewSimpleExample extends React.Component {
  makeItems = (nItems, styles) => {
    const items = [];
    for (let i = 0; i < nItems; i++) {
      items[i] = (
        <TouchableOpacity key={i} style={styles}>
          <Text>{'Item ' + i}</Text>
        </TouchableOpacity>
      );
    }
    return items;
  };

  render() {
    // One of the items is a horizontal scroll view
    const items = this.makeItems(NUM_ITEMS, styles.itemWrapper);
    items[4] = (
      <ScrollView key={'scrollView'} horizontal={true}>
        {this.makeItems(NUM_ITEMS, [
          styles.itemWrapper,
          styles.horizontalItemWrapper,
        ])}
      </ScrollView>
    );
    items.push(
      <ScrollView
        key={'scrollViewSnap'}
        horizontal
        snapToInterval={210.0}
        pagingEnabled>
        {this.makeItems(NUM_ITEMS, [
          styles.itemWrapper,
          styles.horizontalItemWrapper,
          styles.horizontalPagingItemWrapper,
        ])}
      </ScrollView>,
    );
    items.push(
      <ScrollView
        key={'scrollViewSnapStart'}
        horizontal
        snapToAlignment={'start'}
        pagingEnabled>
        {this.makeItems(NUM_ITEMS, [
          styles.itemWrapper,
          styles.horizontalItemWrapper,
          styles.horizontalPagingItemWrapper,
        ])}
      </ScrollView>,
    );
    items.push(
      <ScrollView
        key={'scrollViewSnapCenter'}
        horizontal
        snapToAlignment={'center'}
        pagingEnabled>
        {this.makeItems(NUM_ITEMS, [
          styles.itemWrapper,
          styles.horizontalItemWrapper,
          styles.horizontalPagingItemWrapper,
        ])}
      </ScrollView>,
    );
    items.push(
      <ScrollView
        key={'scrollViewSnapEnd'}
        horizontal
        snapToAlignment={'end'}
        pagingEnabled>
        {this.makeItems(NUM_ITEMS, [
          styles.itemWrapper,
          styles.horizontalItemWrapper,
          styles.horizontalPagingItemWrapper,
        ])}
      </ScrollView>,
    );

    const verticalScrollView = (
      <ScrollView style={styles.verticalScrollView}>{items}</ScrollView>
    );

    return verticalScrollView;
  }
}

const styles = StyleSheet.create({
  verticalScrollView: {
    margin: 10,
  },
  itemWrapper: {
    backgroundColor: '#dddddd',
    alignItems: 'center',
    borderRadius: 5,
    borderWidth: 5,
    borderColor: '#a52a2a',
    padding: 30,
    margin: 5,
  },
  horizontalItemWrapper: {
    padding: 50,
  },
  horizontalPagingItemWrapper: {
    width: 200,
  },
});

exports.title = 'ScrollViewSimpleExample';
exports.category = 'Basic';
exports.description =
  'Component that enables scrolling through child components.';

exports.examples = [
  {
    title: 'Simple scroll view',
    render: function () {
      return <ScrollViewSimpleExample />;
    },
  },
];