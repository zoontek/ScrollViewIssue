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
import BaseFlatListExample from './BaseFlatListExample';
import {StyleSheet, View, FlatList} from 'react-native';
import * as React from 'react';

const VIEWABILITY_CONFIG = {
  minimumViewTime: 1000,
  viewAreaCoveragePercentThreshold: 100,
  waitForInteraction: true,
};

export function FlatList_onViewableItemsChanged(props) {
  const {viewabilityConfig, offScreen, horizontal, useScrollRefScroll} = props;
  const [output, setOutput] = React.useState('');
  const onViewableItemsChanged = React.useCallback(
    info =>
      setOutput(
        info.viewableItems
          .filter(viewToken => viewToken.index != null && viewToken.isViewable)
          .map(viewToken => viewToken.item)
          .join(', '),
      ),
    [setOutput],
  );
  const exampleProps = {
    onViewableItemsChanged,
    viewabilityConfig,
    horizontal,
  };

  const ref = React.useRef(null);
  const onTest =
    useScrollRefScroll === true
      ? () => {
          ref?.current?.getScrollResponder()?.scrollToEnd();
        }
      : null;

  return (
    <BaseFlatListExample
      ref={ref}
      exampleProps={exampleProps}
      onTest={onTest}
      testOutput={output}>
      {offScreen === true ? <View style={styles.offScreen} /> : null}
    </BaseFlatListExample>
  );
}

const styles = StyleSheet.create({
  offScreen: {
    height: 1000,
  },
});

export default {
  title: 'onViewableItemsChanged',
  name: 'onViewableItemsChanged',
  description:
    'Scroll list to see what items are returned in `onViewableItemsChanged` callback.',
  render: () => (
    <FlatList_onViewableItemsChanged viewabilityConfig={VIEWABILITY_CONFIG} />
  ),
};
