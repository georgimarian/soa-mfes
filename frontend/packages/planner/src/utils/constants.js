const LABELS = {
  bookVacation: 'Book a vacation',
  startDate: 'Start Date',
  endDate: 'End Date',
  calendar: 'Calendar',
  vacationsAndHolidays: 'Scheduled Vacations & National Holidays',
  totalVacationBudget: ' / 30 days',
  remove: 'Remove',
  loading: '...Loading...',
  defaultSelect: '-- Select an option --',
  add: 'Add',
  chosenDaysAreHolidays: 'The days you chose are all free days!',
  youHaveExistingVacation: 'You already have vacation during that time!',
  noFreeColleagues: 'No free Colleagues',
  notEnoughDays: "You don't have enough days",
};

const WEEK_DAYS = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];
const HOLIDAYS_URL =  'http://0.0.0.0:5001';
const WORKDAYS_URL =  'http://0.0.0.0:5002';

export { LABELS, WEEK_DAYS, HOLIDAYS_URL, WORKDAYS_URL };
