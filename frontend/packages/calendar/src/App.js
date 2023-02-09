import React from 'react';

import Calendar from './Calendar';
import dayjs from 'dayjs';

export default () => (
  <>
    <Calendar 
        currentStartOfMonth={ dayjs().subtract(1, 'year').startOf('month')}
        setCurrentStartOfMonth={() => null}
        currentHolidays={[]}
        currentVacationDays={[]}
        loading
    />
  </>
);