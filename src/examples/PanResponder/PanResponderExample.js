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
const {PanResponder, StyleSheet, View} = require('react-native');
const RNTesterPage = require('../../components/RNTesterPage');

const CIRCLE_SIZE = 80;

class PanResponderExample extends React.Component {
  _previousLeft = 20;
  _previousTop = 84;
  _circleStyles = {style: {}};
  circle = null;

  state = {
    left: 20,
    top: 84,
    pressed: false,
  };

  _handleStartShouldSetPanResponder = (event, gestureState) => {
    // Should we become active when the user presses down on the circle?
    return true;
  };

  _handleMoveShouldSetPanResponder = (event, gestureState) => {
    // Should we become active when the user moves a touch over the circle?
    return true;
  };

  _handlePanResponderGrant = (event, gestureState) => {
    this.setState({
      pressed: true,
    });
  };

  _handlePanResponderMove = (event, gestureState) => {
    this.setState({
      left: this._previousLeft + gestureState.dx,
      top: this._previousTop + gestureState.dy,
    });
  };

  _handlePanResponderEnd = (event, gestureState) => {
    this.setState({
      pressed: false,
    });
    this._previousLeft += gestureState.dx;
    this._previousTop += gestureState.dy;
  };

  _panResponder = PanResponder.create({
    onStartShouldSetPanResponder: this._handleStartShouldSetPanResponder,
    onMoveShouldSetPanResponder: this._handleMoveShouldSetPanResponder,
    onPanResponderGrant: this._handlePanResponderGrant,
    onPanResponderMove: this._handlePanResponderMove,
    onPanResponderRelease: this._handlePanResponderEnd,
    onPanResponderTerminate: this._handlePanResponderEnd,
  });

  render() {
    return (
      <RNTesterPage
        noSpacer={true}
        noScroll={true}
        title="Basic gesture handling">
        <View style={styles.container}>
          <View
            ref={circle => {
              this.circle = circle;
            }}
            style={[
              styles.circle,
              // $FlowFixMe[incompatible-type]
              {
                transform: [
                  {translateX: this.state.left},
                  {translateY: this.state.top},
                ],
                backgroundColor: this.state.pressed ? 'blue' : 'green',
              },
            ]}
            {...this._panResponder.panHandlers}
          />
        </View>
      </RNTesterPage>
    );
  }
}

const styles = StyleSheet.create({
  circle: {
    width: CIRCLE_SIZE,
    height: CIRCLE_SIZE,
    backgroundColor: 'green',
    borderRadius: CIRCLE_SIZE / 2,
    position: 'absolute',
    left: 0,
    top: 0,
  },
  container: {
    flex: 1,
    height: 500,
  },
});

exports.title = 'PanResponder Sample';
exports.category = 'Basic';
exports.documentationURL = 'https://reactnative.dev/docs/panresponder';
exports.description =
  'Shows the Use of PanResponder to provide basic gesture handling';
exports.examples = [
  {
    title: 'Basic gesture handling',
    render: function () {
      return <PanResponderExample />;
    },
  },
];
