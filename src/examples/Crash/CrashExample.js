/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @format
 */

import {NativeModules, Button} from 'react-native';
import React from 'react';

const {CrashyCrash} = NativeModules;

exports.displayName = undefined;
exports.framework = 'React';
exports.title = 'Crash';
exports.category = 'Basic';
exports.description = 'Crash examples.';

exports.examples = [
  {
    title: 'JS crash',
    render() {
      return (
        <Button
          title="JS crash"
          onPress={() => {
            const a = {};
            const b = a.w.q; // js crash here
            console.log(b);
          }}
        />
      );
    },
  },
  {
    title: 'Native crash',
    render() {
      return (
        <Button
          title="Native crash"
          onPress={() => {
            CrashyCrash.letsCrash();
          }}
        />
      );
    },
  },
];
