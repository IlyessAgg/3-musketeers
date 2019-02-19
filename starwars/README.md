# starwars

> Get random names from Star Wars characters.

![starwars-names](other/starwars-names.gif)

## Installation

```sh
❯ npm install
```

## Usage

```js
const starWars = require('starwars');

const allNames = starWars.all;
const randomName = starWars.random();
const threeRandomNames = starWars.random(3);
```

## Test

```sh
> jest

 PASS  src/index.test.js
  starwars-names
    all
      √ should be a fulfilled array (3ms)
      √ should be an array of strings (18ms)
      √ should contain `Luke Skywalker`
      √ should not contain `Ben Quadinaros` (1ms)
    random
      √ should return a random item from the starWars.all
      √ should return an array of random items if passed a number (1ms)

Test Suites: 1 passed, 1 total
Tests:       6 passed, 6 total
Snapshots:   0 total
Time:        2.964s
Ran all test suites.
```
