import moment from 'moment';
import {DATE_FORMAT, DATE_FORMAT_US, DATE_TIME_FORMAT, DATE_TIME_FORMAT_US, TIME_FORMAT, TIME_FORMAT_US} from "./index";

const DATE = moment.utc('2016-12-31T23:35:01');

test('testing us date time', () => {
    //MM/DD/YY, h:mm a
    expect(DATE.format(DATE_TIME_FORMAT_US)).toBe("12/31/16, 11:35 pm");
});

test('testing non-us date time', () => {
    //MM/DD/YY, h:mm a
    expect(DATE.format(DATE_TIME_FORMAT)).toBe("31. 12. 2016, 23:35");
});

test('testing us date', () => {
    //MM/DD/YY, h:mm a
    expect(DATE.format(DATE_FORMAT_US)).toBe("12/31/16");
});

test('testing non-us date', () => {
    //MM/DD/YY, h:mm a
    expect(DATE.format(DATE_FORMAT)).toBe("31. 12. 2016");
});

test('testing us time', () => {
    //MM/DD/YY, h:mm a
    expect(DATE.format(TIME_FORMAT_US)).toBe("11:35 pm");
});

test('testing non-us time', () => {
    //MM/DD/YY, h:mm a
    expect(DATE.format(TIME_FORMAT)).toBe("23:35");
});