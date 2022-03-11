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

import RNTesterModuleContainer from './RNTesterModuleContainer';

const createExamplePage = function (title, exampleModule) {
  class ExamplePage extends React.Component {
    render() {
      return <RNTesterModuleContainer module={exampleModule} />;
    }
  }

  return ExamplePage;
};

module.exports = createExamplePage;
