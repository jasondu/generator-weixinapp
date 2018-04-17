'use strict';
const path = require('path');
const assert = require('yeoman-assert');
const helpers = require('yeoman-test');

describe('generator-weapp:weapp', () => {
  beforeAll(() => {
    return helpers
      .run(path.join(__dirname, '../generators/weapp'))
      .withPrompts({ someAnswer: true });
  });

  it('creates files', () => {
    assert.file(['dummyfile.txt']);
  });
});
