#!/usr/bin/env babel-node --optional es7.asyncFunctions

import request from 'request';
import path from 'path';
import fs from 'fs';

const filePath = path.join(process.cwd(), 'schema.json');

request
  .get('http://localhost:3000/schema')
  .on('response', function(response) {
    var body = '';
    response.on('data', function (chunk) {
      body += chunk;
    });
    response.on('end', function () {
      fs.writeFileSync(filePath, JSON.stringify(JSON.parse(body), null, 2));
      console.log("[generateSchema] : Schema successfully written at " + filePath);
    });
  })
  .on('error', function(err) {
    console.log("[Error generateSchema] : Unable to get schema: " + err);
  })
