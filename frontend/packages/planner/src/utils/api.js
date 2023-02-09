import { HOLIDAYS_URL, WORKDAYS_URL } from './constants';
import { dateFormatter } from '.';

const HEADERS = {
  Accept: 'application/json',
  'Content-Type': 'application/json',
};

const YEAR = 2022;


const getNationalHolidays = (currentDate) =>
  fetch(
    `${HOLIDAYS_URL}/holidays?${new URLSearchParams({
      country: 'DE',
      year: YEAR,
      month: currentDate.month() + 1,
    })}`,
    {
      method: 'GET',
      headers: HEADERS,
    }
  ).then((response) => response.json());

const getWorkingDaysBetweenDates = (startDate, endDate) =>
  fetch(
    `${WORKDAYS_URL}/workdays?${new URLSearchParams({
      country: 'DE',
      start: dateFormatter(startDate, 'fr-CA', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
      }),
      end: dateFormatter(endDate, 'fr-CA', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
      }),
    })}`,
    {
      method: 'GET',
      headers: HEADERS,
    }
  ).then((response) => response.json());

export { getNationalHolidays, getWorkingDaysBetweenDates };
