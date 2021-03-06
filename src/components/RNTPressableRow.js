/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @format
 *
 */

import * as React from 'react';
import {RNTesterThemeContext} from './RNTesterTheme';
import RNTesterComponentTitle from './RNTesterComponentTitle';

import {Platform, StyleSheet, Pressable, Text, View} from 'react-native';

export default function RNTPressableRow({
  onPressIn,
  onPressOut,
  title,
  description,
  rightAddOn,
  bottomAddOn,
  onPress,
  style,
  accessibilityLabel,
}) {
  const theme = React.useContext(RNTesterThemeContext);
  const label = accessibilityLabel ?? `${title} ${description ?? ''}`;
  return (
    <Pressable
      testID={title}
      onPressIn={onPressIn}
      onPressOut={onPressOut}
      accessibilityLabel={label}
      style={({pressed}) => [
        styles.row,
        typeof style === 'function' ? style(pressed) : style,
        pressed
          ? styles.pressed
          : {backgroundColor: theme.SystemBackgroundColor},
      ]}
      onPress={onPress}>
      <View style={styles.topRowStyle}>
        <RNTesterComponentTitle>{title}</RNTesterComponentTitle>
        {rightAddOn}
      </View>
      <Text
        style={[styles.descriptionText, {color: theme.SecondaryLabelColor}]}>
        {description}
      </Text>
      {bottomAddOn}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  row: {
    justifyContent: 'center',
    paddingHorizontal: 15,
    paddingVertical: 12,
    marginVertical: Platform.select({ios: 4, android: 8}),
    marginHorizontal: 15,
    overflow: 'hidden',
    elevation: 5,
    backgroundColor: Platform.select({ios: '#FFFFFF', android: '#F3F8FF'}),
  },
  descriptionText: {
    fontSize: 12,
    lineHeight: 20,
    marginBottom: 5,
  },
  pressed: {
    backgroundColor: 'rgb(242,242,242)',
    elevation: 3,
  },
  topRowStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flex: 1,
  },
});
