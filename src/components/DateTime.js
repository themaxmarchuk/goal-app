import React from 'react';

import utc from 'dayjs/plugin/utc';
import dayjs from 'dayjs';

import {Typography} from '@mui/material';

dayjs.extend(utc);

export default function DateTime() {
  // Default to current time so we have something to render
  // useEffect does not run until after layout + paint
  const [time, setTime] = React.useState(dayjs.utc().local());

  React.useEffect(() => {
    // Setup a time update to run at the next minute
    const timeout = setTimeout(() => {
      // Update the time variable (triggering a rerender)
      setTime(dayjs.utc().local());
      // Figure out when the next minute is, and delay until then
    }, 1000 * (60 - dayjs.utc().local().second()));
    // If the component is dismounted early, this clears the next time update
    // otherwise nothing happens (timeout was already exectued)
    return () => clearTimeout(timeout);
    // use time as a dependency to rerun the effect when the time variable is updated
  }, [time]);

  return (
    <div className="Date">
      <center>
        <Typography variant="h2">{time.format('MMMM D, YYYY')}</Typography>
        <Typography variant="h1">
          {time.format('h:mm')} <span style={{color: '#1DE9B6'}}>{time.format('A')}</span>
        </Typography>
      </center>
    </div>
  );
}
