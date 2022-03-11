/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @format
 */

import * as React from 'react';

import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

exports.displayName = 'ScrollViewExpensifyIssueExample';
exports.title = 'Expensify issue';
exports.documentationURL = 'https://reactnative.dev/docs/scrollview';
exports.description = 'github.com/facebook/react-native/pull/33184';

exports.examples = [
  {
    title: '<ScrollView> smooth bi-directional content loading\n',
    description:
      'The `maintainVisibleContentPosition` prop allows insertions to either end of the content ' +
      'without causing the visible content to jump. Re-ordering is not supported.',
    render: function () {
      let itemCount = 12;

      class AppendingList extends React.Component {
        state = {
          items: [...Array(itemCount)].map((_, ii) => (
            <Item msg={`Item ${ii}`} />
          )),
        };

        render() {
          return (
            <View>
              <ScrollView
                style={styles.scrollView}
                automaticallyAdjustContentInsets={false}
                maintainVisibleContentPosition={{
                  minIndexForVisible: 0,
                  autoscrollToTopThreshold: 0,
                }}>
                {this.state.items.map(item =>
                  React.cloneElement(item, {key: item.props.msg}),
                )}
              </ScrollView>

              {/* <ScrollView
                horizontal={true}
                style={[styles.scrollView, styles.horizontalScrollView]}
                automaticallyAdjustContentInsets={false}
                maintainVisibleContentPosition={{
                  minIndexForVisible: 0,
                  autoscrollToTopThreshold: 0,
                }}>
                {this.state.items.map(item =>
                  React.cloneElement(item, {key: item.props.msg, style: null}),
                )}
              </ScrollView> */}

              <View style={styles.row}>
                <Button
                  label="Add to top"
                  onPress={() => {
                    this.setState(state => {
                      const idx = itemCount++;
                      return {
                        items: [
                          <Item
                            style={{paddingTop: idx * 5}}
                            msg={`Item ${idx}`}
                          />,
                        ].concat(state.items),
                      };
                    });
                  }}
                />

                <Button
                  label="Remove top"
                  onPress={() => {
                    this.setState(state => ({
                      items: state.items.slice(1),
                    }));
                  }}
                />

                <Button
                  label="Change height top"
                  onPress={() => {
                    this.setState(state => ({
                      items: [
                        React.cloneElement(state.items[0], {
                          style: {paddingBottom: Math.random() * 40},
                        }),
                      ].concat(state.items.slice(1)),
                    }));
                  }}
                />
              </View>

              <View style={styles.row}>
                <Button
                  label="Add to end"
                  onPress={() => {
                    this.setState(state => ({
                      items: state.items.concat(
                        <Item msg={`Item ${itemCount++}`} />,
                      ),
                    }));
                  }}
                />

                <Button
                  label="Remove end"
                  onPress={() => {
                    this.setState(state => ({
                      items: state.items.slice(0, -1),
                    }));
                  }}
                />

                <Button
                  label="Change height end"
                  onPress={() => {
                    this.setState(state => ({
                      items: state.items
                        .slice(0, -1)
                        .concat(
                          React.cloneElement(
                            state.items[state.items.length - 1],
                            {style: {paddingBottom: Math.random() * 40}},
                          ),
                        ),
                    }));
                  }}
                />
              </View>
            </View>
          );
        }
      }
      return <AppendingList />;
    },
  },
];

class Item extends React.PureComponent {
  render() {
    return (
      <View style={[styles.item, this.props.style]}>
        <Text>{this.props.msg}</Text>
      </View>
    );
  }
}

const Button = props => (
  <TouchableOpacity
    style={StyleSheet.compose(
      styles.button,
      props.active === true ? styles.activeButton : null,
    )}
    onPress={props.onPress}
    testID={props.testID}>
    <Text>{props.label}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: '#eeeeee',
    height: 300,
  },
  horizontalScrollView: {
    height: 106,
  },
  activeButton: {
    backgroundColor: 'rgba(100,215,255,.3)',
  },
  button: {
    margin: 5,
    padding: 5,
    alignItems: 'center',
    backgroundColor: '#cccccc',
    borderRadius: 3,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  item: {
    margin: 5,
    padding: 5,
    backgroundColor: '#cccccc',
    borderRadius: 3,
    minWidth: 96,
  },
});
