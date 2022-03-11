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
const SampleTurboModuleExample = require('./SampleTurboModuleExample');

exports.displayName = undefined;
exports.title = 'TurboModule';
exports.category = 'Basic';
exports.description = 'Usage of TurboModule';
exports.examples = [
  {
    title: 'SampleTurboModule',
    render: function () {
      return <SampleTurboModuleExample />;
    },
  },
];
