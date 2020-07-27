# moment-date-time-formats 

[![](https://flat.badgen.net/npm/v/@ivanhanak_com/moment-date-time-formats?icon=npm)](https://www.npmjs.com/package/@ivanhanak_com/moment-date-time-formats)
[![NPM Weekly Downloads](https://badgen.net/npm/dw/@ivanhanak_com/moment-date-time-formats)](https://www.npmjs.com/package/@ivanhanak_com/moment-date-time-formats)

A simple & lightweight javascript library providing prepared human readable date/time constants for formatting dates and times with moment. 

## Changelog

See the whole [Changelog](/CHANGELOG.md).

## Install

Using npm:

```sh
npm install @ivanhanak_com/moment-date-time-formats
```

Using yarn:

```sh
yarn add @ivanhanak_com/moment-date-time-formats
```

## Import
```javascript
import {
    DATE_FORMAT, 
    DATE_FORMAT_US, 
    DATE_TIME_FORMAT, 
    DATE_TIME_FORMAT_US, 
    TIME_FORMAT, 
    TIME_FORMAT_US
} from '@ivanhanak_com/moment-date-time-formats';
import moment from 'moment';

//example usage
const getFormattedDateTime = (isAmericanFormat = true) => {
    return moment().format(isAmericanFormat ? DATE_TIME_FORMAT_US : DATE_TIME_FORMAT);
};       


console.log(getFormattedDateTime(true)); // => 12/31/16, 11:35 pm
console.log(getFormattedDateTime(false)); // => 31. 12. 2016, 23:35
```

## Browser support
every single one 😊

## Dependencies
- `moment` library