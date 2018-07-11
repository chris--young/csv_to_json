# csv_to_json

Simple .csv file parsing for Node.js using Promises or callbacks

## Installation

`$ npm install @chris--young/csv_to_json`

## Parse a csv string
```
const csv_to_json = require('@chris--young/csv_to_json');

const csv_str = 'id,email\n1,foo@email.com\n2,bar@email.com';

try {
  const users = await csv_to_json(csv_str);

  /*

    {
      users: [
        { id: '1', email: 'foo@email.com' },
        { id: '2', email: 'bar@email.com' }
      ]
    }

   */

} catch (err) {
  console.error('Failed to parse users', { err });
}
```

## Read a csv file
```
const csv_to_json = require('csv_to_json');

try {
  const users = await csv_to_json.from_file('./users.csv');

  console.log({ users });
} catch (err) {
  console.error('Failed to parse users', { err });
}
```

## Callback Style
```
const csv_to_json = require('csv_to_json');

const csv_str = 'id,email\n1,foo@email.com\n2,bar@email.com';

// using a string
csv_to_json(csv_str, (err, users) => {
  if (err)
    return console.error('Failed to parse users', { err });

  console.log({ users });
});

// from a file
csv_to_json.from_file('~/users.csv', (err, users) => {
  if (err)
    return console.error('Failed to parse users', { err });

  console.log({ users });
});
```

