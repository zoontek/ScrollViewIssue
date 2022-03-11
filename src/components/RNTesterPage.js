/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @format
 *
 */

const RNTesterTitle = require('./RNTesterTitle');
const React = require('react');
const {ScrollView, StyleSheet, View} = require('react-native');
import {RNTesterThemeContext} from './RNTesterTheme';

class RNTesterPage extends React.Component {
  render() {
    let ContentWrapper;
    let wrapperProps = {};
    if (this.props.noScroll) {
      ContentWrapper = View;
    } else {
      ContentWrapper = ScrollView;
      wrapperProps.automaticallyAdjustContentInsets = !this.props.title;
      wrapperProps.keyboardShouldPersistTaps = 'handled';
      wrapperProps.keyboardDismissMode = 'interactive';
    }
    const title = this.props.title ? (
      <RNTesterTitle title={this.props.title} />
    ) : null;
    const spacer = this.props.noSpacer ? null : <View style={styles.spacer} />;
    return (
      <RNTesterThemeContext.Consumer>
        {theme => {
          return (
            <View
              style={[
                styles.container,
                {backgroundColor: theme.SecondarySystemBackgroundColor},
              ]}>
              {title}
              <ContentWrapper style={styles.wrapper} {...wrapperProps}>
                {this.props.children}
                {spacer}
              </ContentWrapper>
            </View>
          );
        }}
      </RNTesterThemeContext.Consumer>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  spacer: {
    height: 270,
  },
  wrapper: {
    flex: 1,
    paddingTop: 10,
  },
});

module.exports = RNTesterPage;