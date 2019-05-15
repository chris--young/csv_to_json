'use strict'

const assert = require('assert');
const csv_to_json = require('.');

const csv = 'foo,bar,baz\na,b,c\n1,2,3\n';

function check(json) {
  assert(typeof json === 'object');
  assert(Array.isArray(json));

  assert(json[0].foo === 'a');
  assert(json[0].bar === 'b');
  assert(json[0].baz === 'c');

  assert(json[1].foo === '1');
  assert(json[1].bar === '2');
  assert(json[1].baz === '3');
}

try {
  const json = csv_to_json(csv);

  check(json);
} catch (error) {
  assert(!error);
}

(async function test() {
  try {
    const json = await csv_to_json.from_file('./test.csv');

    check(json);
  } catch (error) {
    assert(!error);
  }
})();

const promise = csv_to_json.from_file('./test.csv', (error, json) => {
  assert(!error);
  check(json);
});

assert(!promise);

