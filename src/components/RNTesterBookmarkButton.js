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

import {TouchableOpacity, Image, StyleSheet} from 'react-native';

class RNTesterBookmarkButton extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {size, onPress, isActive} = this.props;
    return (
      <TouchableOpacity
        style={[
          styles.imageViewStyle,
          {
            height: size + 5,
            width: size + 5,
            borderRadius: Math.floor(size + 5 / 2),
          },
        ]}
        onPress={onPress}>
        <Image
          style={{height: size, width: size}}
          source={
            isActive
              ? require('../assets/bookmark-filled.png')
              : require('../assets/bookmark-outline-gray.png')
          }
        />
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  imageViewStyle: {
    backgroundColor: 'blue',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

module.exports = RNTesterBookmarkButton;
