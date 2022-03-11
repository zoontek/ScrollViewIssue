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
import {AsyncStorage} from 'react-native';

export const useAsyncStorageReducer = (reducer, initialState, storageKey) => {
  const [state, dispatch] = React.useReducer(reducer, initialState);

  React.useEffect(() => {
    if (state !== initialState) {
      AsyncStorage.setItem(storageKey, JSON.stringify(state));
    }
  }, [state, storageKey, initialState]);

  return [state, dispatch];
};
