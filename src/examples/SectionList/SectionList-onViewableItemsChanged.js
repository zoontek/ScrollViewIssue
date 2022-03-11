/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @format
 *
 */

import SectionListBaseExample from './SectionListBaseExample';
import {View, StyleSheet, SectionList} from 'react-native';
import * as React from 'react';

const VIEWABILITY_CONFIG = {
  minimumViewTime: 1000,
  viewAreaCoveragePercentThreshold: 100,
  waitForInteraction: true,
};

export function SectionList_onViewableItemsChanged(props) {
  const {viewabilityConfig, offScreen, horizontal, useScrollRefScroll} = props;
  const [output, setOutput] = React.useState('');
  const exampleProps = {
    onViewableItemsChanged: info =>
      setOutput(
        info.viewableItems
          .filter(viewToken => viewToken.index != null && viewToken.isViewable)
          .map(viewToken => viewToken.item)
          .join(', '),
      ),
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
    <SectionListBaseExample
      ref={ref}
      exampleProps={exampleProps}
      onTest={onTest}
      testOutput={output}>
      {offScreen === true ? <View style={styles.offScreen} /> : null}
    </SectionListBaseExample>
  );
}
const styles = StyleSheet.create({
  offScreen: {
    height: 1000,
  },
});

export default {
  title: 'SectionList On Viewable Items Changed',
  name: 'SectionList_onViewableItemsChanged',
  render: function () {
    return (
      <SectionList_onViewableItemsChanged
        viewabilityConfig={VIEWABILITY_CONFIG}
      />
    );
  },
};
