/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @format
 *
 */

const React = require('react');
import {RNTesterThemeContext} from './RNTesterTheme';
const {StyleSheet, Text} = require('react-native');

class RNTesterComponentTitle extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <RNTesterThemeContext.Consumer>
        {theme => (
          <Text style={[styles.titleText, {color: theme.LabelColor}]}>
            {this.props.children}
          </Text>
        )}
      </RNTesterThemeContext.Consumer>
    );
  }
}

const styles = StyleSheet.create({
  titleText: {
    fontSize: 20,
    fontWeight: '400',
    marginBottom: 5,
  },
});

module.exports = RNTesterComponentTitle;
