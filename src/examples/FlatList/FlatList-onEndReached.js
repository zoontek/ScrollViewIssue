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
import * as React from 'react';

export function FlatList_onEndReached() {
  const [output, setOutput] = React.useState('');
  const exampleProps = {
    onEndReached: info => setOutput('onEndReached'),
    onEndReachedThreshold: 0,
  };
  const ref = React.useRef(null);

  const onTest = () => {
    const scrollResponder = ref?.current?.getScrollResponder();
    if (scrollResponder != null) {
      scrollResponder.scrollToEnd();
    }
  };

  return (
    <BaseFlatListExample
      ref={ref}
      exampleProps={exampleProps}
      testOutput={output}
      onTest={onTest}
    />
  );
}

export default {
  title: 'onEndReached',
  name: 'onEndReached',
  description:
    'Scroll to end of list or tap Test button to see `onEndReached` triggered.',
  render: function () {
    return <FlatList_onEndReached />;
  },
};
