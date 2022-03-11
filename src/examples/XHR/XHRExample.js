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
const XHRExampleAbortController = require('./XHRExampleAbortController');
const XHRExampleBinaryUpload = require('./XHRExampleBinaryUpload');
const XHRExampleDownload = require('./XHRExampleDownload');
const XHRExampleFetch = require('./XHRExampleFetch');
const XHRExampleHeaders = require('./XHRExampleHeaders');
const XHRExampleOnTimeOut = require('./XHRExampleOnTimeOut');

exports.framework = 'React';
exports.title = 'XMLHttpRequest';
exports.category = 'Basic';
exports.description =
  'Example that demonstrates upload and download ' +
  'requests using XMLHttpRequest.';
exports.examples = [
  {
    title: 'File Download',
    render() {
      return <XHRExampleDownload />;
    },
  },
  {
    title: 'multipart/form-data Upload',
    render() {
      return <XHRExampleBinaryUpload />;
    },
  },
  {
    title: 'Fetch Test',
    render() {
      return <XHRExampleFetch />;
    },
  },
  {
    title: 'Headers',
    render() {
      return <XHRExampleHeaders />;
    },
  },
  {
    title: 'Time Out Test',
    render() {
      return <XHRExampleOnTimeOut />;
    },
  },
  {
    title: 'Abort Test',
    render() {
      return <XHRExampleAbortController />;
    },
  },
];
