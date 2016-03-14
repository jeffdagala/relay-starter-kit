#!/usr/bin/env babel-node --optional es7.asyncFunctions

import request from 'request';
import path from 'path';
import fs from 'fs';
import getbabelRelayPlugin from 'babel-relay-plugin';
const schemaPath = path.join(process.cwd(), 'schema.json');

try {
    const stats = fs.lstatSync(schemaPath);

    if (stats.isFile()) {
      var schema = require(schemaPath);
      console.log('[babelRelayPlugin] : using schema at ' + schemaPath);
      module.exports = getbabelRelayPlugin(schema.data);
    }
    else {
      console.log('[babelRelayPlugin] : no schema found at ' + schemaPath);
      console.log('[babelRelayPlugin] : babel will continue without the babel-relay-plugin!');
      module.exports = function () {
        return {
          user: {}
        };
      };
    }
}
catch (e) {
  console.log('[Error babelRelayPlugin] : ' + e);
  console.log('[Error babelRelayPlugin] : babel will continue without the babel-relay-plugin!');
  module.exports = function () {
    return {
      user: {}
    };
  };
}
