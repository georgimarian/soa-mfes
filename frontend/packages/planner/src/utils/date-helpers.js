import dayjs from 'dayjs';
import objectSupport from 'dayjs/plugin/objectSupport';

dayjs.extend(objectSupport);

const YEAR = 2022;
const DAYS_IN_WEEK = 7;

const dateFormatter = (date, country, options = {}) =>
  new Intl.DateTimeFormat(country, options).format(new Date(date));

const getUserVacationDaysInMonth = (user, month) =>
  (user?.vacations || []).filter(
    (vacation) =>
      dayjs(vacation.startDate).month() === month ||
      dayjs(vacation.endDate).month() === month
  );


export {
  dateFormatter,
  getUserVacationDaysInMonth
};
