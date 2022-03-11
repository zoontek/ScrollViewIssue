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
const {Switch, Text, View, Platform} = require('react-native');

function OnOffIndicator({on, testID}) {
  return <Text testID={testID}>{on ? 'On' : 'Off'}</Text>;
}

function ExampleRow({children}) {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 10,
      }}>
      {children}
    </View>
  );
}

class BasicSwitchExample extends React.Component {
  state = {
    trueSwitchIsOn: true,
    falseSwitchIsOn: false,
  };

  render() {
    return (
      <View>
        <ExampleRow>
          <Switch
            testID="on-off-initial-off"
            onValueChange={value => this.setState({falseSwitchIsOn: value})}
            trackColor={{
              true: 'yellow',
              false: 'purple',
            }}
            value={this.state.falseSwitchIsOn}
          />
          <OnOffIndicator
            on={this.state.falseSwitchIsOn}
            testID="on-off-initial-off-indicator"
          />
        </ExampleRow>
        <ExampleRow>
          <Switch
            testID="on-off-initial-on"
            onValueChange={value => this.setState({trueSwitchIsOn: value})}
            value={this.state.trueSwitchIsOn}
          />
          <OnOffIndicator
            on={this.state.trueSwitchIsOn}
            testID="on-off-initial-on-indicator"
          />
        </ExampleRow>
      </View>
    );
  }
}

class DisabledSwitchExample extends React.Component {
  state = {
    trueSwitchIsOn: true,
    falseSwitchIsOn: false,
  };

  render() {
    return (
      <View>
        <ExampleRow>
          <Switch
            testID="disabled-initial-off"
            disabled={true}
            onValueChange={value => this.setState({falseSwitchIsOn: value})}
            value={this.state.falseSwitchIsOn}
          />

          <OnOffIndicator
            on={this.state.falseSwitchIsOn}
            testID="disabled-initial-off-indicator"
          />
        </ExampleRow>

        <ExampleRow>
          <Switch
            testID="disabled-initial-on"
            disabled={true}
            onValueChange={value => this.setState({trueSwitchIsOn: value})}
            value={this.state.trueSwitchIsOn}
          />

          <OnOffIndicator
            on={this.state.trueSwitchIsOn}
            testID="disabled-initial-on-indicator"
          />
        </ExampleRow>
      </View>
    );
  }
}

class ColorSwitchExample extends React.Component {
  state = {
    colorTrueSwitchIsOn: true,
    colorFalseSwitchIsOn: false,
  };

  render() {
    return (
      <View>
        <Switch
          testID="initial-false-switch"
          onValueChange={value => this.setState({colorFalseSwitchIsOn: value})}
          style={{marginBottom: 10}}
          thumbColor="#0000ff"
          trackColor={{
            false: '#ff0000',
            true: '#00ff00',
          }}
          value={this.state.colorFalseSwitchIsOn}
        />
        <Switch
          testID="initial-true-switch"
          onValueChange={value => this.setState({colorTrueSwitchIsOn: value})}
          thumbColor="#0000ff"
          trackColor={{
            false: '#ff0000',
            true: '#00ff00',
          }}
          value={this.state.colorTrueSwitchIsOn}
        />
      </View>
    );
  }
}

class EventSwitchExample extends React.Component {
  state = {
    eventSwitchIsOn: false,
    eventSwitchRegressionIsOn: true,
  };

  render() {
    return (
      <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
        <View>
          <Switch
            testID="event-switch-top"
            onValueChange={value => this.setState({eventSwitchIsOn: value})}
            style={{marginBottom: 10}}
            value={this.state.eventSwitchIsOn}
          />
          <Switch
            testID="event-switch-bottom"
            onValueChange={value => this.setState({eventSwitchIsOn: value})}
            style={{marginBottom: 10}}
            value={this.state.eventSwitchIsOn}
          />
          <Text testID="event-switch-indicator">
            {this.state.eventSwitchIsOn ? 'On' : 'Off'}
          </Text>
        </View>
        <View>
          <Switch
            testID="event-switch-regression-top"
            onValueChange={value =>
              this.setState({eventSwitchRegressionIsOn: value})
            }
            style={{marginBottom: 10}}
            value={this.state.eventSwitchRegressionIsOn}
          />
          <Switch
            testID="event-switch-regression-bottom"
            onValueChange={value =>
              this.setState({eventSwitchRegressionIsOn: value})
            }
            style={{marginBottom: 10}}
            value={this.state.eventSwitchRegressionIsOn}
          />
          <Text testID="event-switch-regression-indicator">
            {this.state.eventSwitchRegressionIsOn ? 'On' : 'Off'}
          </Text>
        </View>
      </View>
    );
  }
}

class IOSBackgroundColEx extends React.Component {
  state = {
    iosBackgroundColor: '#ffa500',
  };

  render() {
    return (
      <View>
        <Switch
          disabled
          ios_backgroundColor={this.state.iosBackgroundColor}
          style={{marginBottom: 20}}
        />
        <Text>
          The background color can be seen either when the switch value is false
          or when the switch is disabled (and the switch is translucent).{' '}
        </Text>
      </View>
    );
  }
}

class OnChangeExample extends React.Component {
  render() {
    return (
      <View>
        <Switch onChange={() => alert('OnChange Called')} />
      </View>
    );
  }
}

exports.title = 'Switch';
exports.documentationURL = 'https://reactnative.dev/docs/switch';
exports.category = 'UI';
exports.displayName = 'SwitchExample';
exports.description = 'Native boolean input';
exports.examples = [
  {
    title: 'Switches can be set to true or false',
    name: 'basic',
    render() {
      return <BasicSwitchExample />;
    },
  },
  {
    title: 'Switches can be disabled',
    name: 'disabled',
    render() {
      return <DisabledSwitchExample />;
    },
  },
  {
    title: 'Change events can be detected',
    name: 'events',
    render() {
      return <EventSwitchExample />;
    },
  },
  {
    title: 'Switches are controlled components',
    name: 'controlled',
    render() {
      return <Switch testID="controlled-switch" />;
    },
  },
  {
    title: 'Custom colors can be provided',
    name: 'custom-colors',
    render() {
      return <ColorSwitchExample />;
    },
  },
  {
    title: 'OnChange receives the change event as an argument',
    render() {
      return <OnChangeExample />;
    },
  },
];

if (Platform.OS === 'ios') {
  exports.examples.push({
    title: '[iOS Only] Custom background colors can be set',
    render() {
      return <IOSBackgroundColEx />;
    },
  });
}
