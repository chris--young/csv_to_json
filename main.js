'use strict'

const fs = require('fs');

module.exports = csv_to_json;
module.exports.from_file = from_file;

function from_file(filename, cb) {
  const promise = new Promise((resolve, reject) => {
    if (typeof filename !== 'string')
      return reject(new TypeError('Invalid filename'));

    fs.readFile(filename, { encoding: 'utf8' }, (err, csv) => {
      if (err)
        return reject(err);

      try {
        return resolve(csv_to_json(csv));
      } catch (e) {
        return reject(new Error('Malformed csv file'));
      }
    });
  });

  if (!cb)
    return promise;

  if (typeof cb !== 'function')
    throw new TypeError('Excepted 2nd argument to be function');

  promise
    .then((json) => cb(null, json))
    .catch((err) => cb(err, null));
}

function csv_to_json(csv) {
  const lines = csv.split('\n');
  const keys = lines.shift().split(',');
  const json = [];

  lines.forEach((line) => {
    const values = line.split(',');
    const obj = {};

    values.forEach((value, index) => value && (obj[keys[index]] = value));

    if (Object.keys(obj).length)
      json.push(obj);
  });

  return json;
}

