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
  ActionSheetIOS,
  StyleSheet,
  Text,
  View,
  Alert,
  NativeModules,
  findNodeHandle,
} = require('react-native');
const ScreenshotManager = NativeModules.ScreenshotManager;

const BUTTONS = ['Option 0', 'Option 1', 'Option 2', 'Delete', 'Cancel'];
const DESTRUCTIVE_INDEX = 3;
const CANCEL_INDEX = 4;
const DISABLED_BUTTON_INDICES = [1, 2];

class ActionSheetExample extends React.Component {
  state = {
    clicked: 'none',
  };

  render() {
    return (
      <View>
        <Text onPress={this.showActionSheet} style={style.button}>
          Click to show the ActionSheet
        </Text>
        <Text>Clicked button: {this.state.clicked}</Text>
      </View>
    );
  }

  showActionSheet = () => {
    ActionSheetIOS.showActionSheetWithOptions(
      {
        options: BUTTONS,
        cancelButtonIndex: CANCEL_INDEX,
        destructiveButtonIndex: DESTRUCTIVE_INDEX,
      },
      buttonIndex => {
        this.setState({clicked: BUTTONS[buttonIndex]});
      },
    );
  };
}

class ActionSheetTintExample extends React.Component {
  state = {
    clicked: 'none',
  };

  render() {
    return (
      <View>
        <Text onPress={this.showActionSheet} style={style.button}>
          Click to show the ActionSheet
        </Text>
        <Text>Clicked button: {this.state.clicked}</Text>
      </View>
    );
  }

  showActionSheet = () => {
    ActionSheetIOS.showActionSheetWithOptions(
      {
        options: BUTTONS,
        cancelButtonIndex: CANCEL_INDEX,
        destructiveButtonIndex: DESTRUCTIVE_INDEX,
        tintColor: 'green',
      },
      buttonIndex => {
        this.setState({clicked: BUTTONS[buttonIndex]});
      },
    );
  };
}

class ActionSheetCancelButtonTintExample extends React.Component {
  state = {
    clicked: 'none',
  };

  render() {
    return (
      <View>
        <Text onPress={this.showActionSheet} style={style.button}>
          Click to show the ActionSheet
        </Text>
        <Text>Clicked button: {this.state.clicked}</Text>
      </View>
    );
  }

  showActionSheet = () => {
    ActionSheetIOS.showActionSheetWithOptions(
      {
        options: BUTTONS,
        cancelButtonIndex: CANCEL_INDEX,
        destructiveButtonIndex: DESTRUCTIVE_INDEX,
        tintColor: 'green',
        cancelButtonTintColor: 'brown',
      },
      buttonIndex => {
        this.setState({clicked: BUTTONS[buttonIndex]});
      },
    );
  };
}

class ActionSheetAnchorExample extends React.Component {
  state = {
    clicked: 'none',
  };

  anchorRef = React.createRef();

  render() {
    return (
      <View>
        <View style={style.anchorRow}>
          <Text style={style.button}>
            Click there to show the ActionSheet ->
          </Text>
          <Text
            onPress={this.showActionSheet}
            style={style.button}
            ref={this.anchorRef}>
            HERE
          </Text>
        </View>
        <Text>Clicked button: {this.state.clicked}</Text>
      </View>
    );
  }

  showActionSheet = () => {
    ActionSheetIOS.showActionSheetWithOptions(
      {
        options: BUTTONS,
        cancelButtonIndex: CANCEL_INDEX,
        destructiveButtonIndex: DESTRUCTIVE_INDEX,
        anchor: this.anchorRef.current
          ? findNodeHandle(this.anchorRef.current)
          : undefined,
      },
      buttonIndex => {
        this.setState({clicked: BUTTONS[buttonIndex]});
      },
    );
  };
}

class ActionSheetDisabledExample extends React.Component {
  state = {
    clicked: 'none',
  };

  render() {
    return (
      <View>
        <Text onPress={this.showActionSheet} style={style.button}>
          Click to show the ActionSheet
        </Text>
        <Text>Clicked button: {this.state.clicked}</Text>
      </View>
    );
  }

  showActionSheet = () => {
    ActionSheetIOS.showActionSheetWithOptions(
      {
        options: BUTTONS,
        cancelButtonIndex: CANCEL_INDEX,
        destructiveButtonIndex: DESTRUCTIVE_INDEX,
        disabledButtonIndices: DISABLED_BUTTON_INDICES,
      },
      buttonIndex => {
        this.setState({clicked: BUTTONS[buttonIndex]});
      },
    );
  };
}

class ShareActionSheetExample extends React.Component {
  state = {
    text: '',
  };

  render() {
    return (
      <View>
        <Text onPress={this.showShareActionSheet} style={style.button}>
          Click to show the Share ActionSheet
        </Text>
        <Text>{this.state.text}</Text>
      </View>
    );
  }

  showShareActionSheet = () => {
    ActionSheetIOS.showShareActionSheetWithOptions(
      {
        url: this.props.url,
        message: 'message to go with the shared url',
        subject: 'a subject to go in the email heading',
        excludedActivityTypes: ['com.apple.UIKit.activity.PostToTwitter'],
      },
      error => Alert.alert('Error', error),
      (completed, method) => {
        let text;
        if (completed) {
          text = `Shared via ${method}`;
        } else {
          text = "You didn't share";
        }
        this.setState({text});
      },
    );
  };
}

class ShareScreenshotExample extends React.Component {
  state = {
    text: '',
  };

  render() {
    return (
      <View>
        <Text onPress={this.showShareActionSheet} style={style.button}>
          Click to show the Share ActionSheet
        </Text>
        <Text>{this.state.text}</Text>
      </View>
    );
  }

  showShareActionSheet = () => {
    // Take the snapshot (returns a temp file uri)
    ScreenshotManager.takeScreenshot('window')
      .then(uri => {
        // Share image data
        ActionSheetIOS.showShareActionSheetWithOptions(
          {
            url: uri,
            excludedActivityTypes: ['com.apple.UIKit.activity.PostToTwitter'],
          },
          error => Alert.alert('Error', error),
          (completed, method) => {
            let text;
            if (completed) {
              text = `Shared via ${method}`;
            } else {
              text = "You didn't share";
            }
            this.setState({text});
          },
        );
      })
      .catch(error => Alert.alert('Error', error));
  };
}

class ShareScreenshotAnchorExample extends React.Component {
  state = {
    text: '',
  };

  anchorRef = React.createRef();

  render() {
    return (
      <View>
        <View style={style.anchorRow}>
          <Text style={style.button}>
            Click to show the Share ActionSheet ->
          </Text>
          <Text
            onPress={this.showShareActionSheet}
            style={style.button}
            ref={this.anchorRef}>
            HERE
          </Text>
        </View>
        <Text>{this.state.text}</Text>
      </View>
    );
  }

  showShareActionSheet = () => {
    // Take the snapshot (returns a temp file uri)
    ScreenshotManager.takeScreenshot('window')
      .then(uri => {
        // Share image data
        ActionSheetIOS.showShareActionSheetWithOptions(
          {
            url: uri,
            excludedActivityTypes: ['com.apple.UIKit.activity.PostToTwitter'],
            anchor: this.anchorRef.current
              ? findNodeHandle(this.anchorRef.current)
              : undefined,
          },
          error => Alert.alert('Error', error),
          (completed, method) => {
            let text;
            if (completed) {
              text = `Shared via ${method}`;
            } else {
              text = "You didn't share";
            }
            this.setState({text});
          },
        );
      })
      .catch(error => Alert.alert('Error', error));
  };
}

const style = StyleSheet.create({
  button: {
    marginBottom: 10,
    fontWeight: '500',
  },
  anchorRow: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

exports.title = 'ActionSheetIOS';
exports.category = 'iOS';
exports.description = "Interface to show iOS' action sheets";
exports.examples = [
  {
    title: 'Show Action Sheet',
    render() {
      return <ActionSheetExample />;
    },
  },
  {
    title: 'Show Action Sheet with tinted buttons',
    render() {
      return <ActionSheetTintExample />;
    },
  },
  {
    title: 'Show Action Sheet with cancel tinted button',
    render() {
      return <ActionSheetCancelButtonTintExample />;
    },
  },
  {
    title: 'Show Action Sheet with anchor',
    render() {
      return <ActionSheetAnchorExample />;
    },
  },
  {
    title: 'Show Action Sheet with disabled buttons',
    render() {
      return <ActionSheetDisabledExample />;
    },
  },
  {
    title: 'Show Share Action Sheet',
    render() {
      return <ShareActionSheetExample url="https://code.facebook.com" />;
    },
  },
  {
    title: 'Share Local Image',
    render() {
      return <ShareActionSheetExample url="bunny.png" />;
    },
  },
  {
    title: 'Share Screenshot',
    render() {
      return <ShareScreenshotExample />;
    },
  },
  {
    title: 'Share from Anchor',
    render() {
      return <ShareScreenshotAnchorExample />;
    },
  },
];