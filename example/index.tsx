import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { add } from 'date-fns';
import { WeeklyCalendar } from '../src/index';

import { Card } from 'antd';
import './index.less';

const App = () => {

  const events = [
    {
      eventId: '12',
      startTime: new Date('2022-12-03 08:00:00'),
      endTime: new Date('2022-12-03 09:00:00'),
      title: 'Daily Meet',
      backgroundColor: '#FF7800',
      secondColor: '#FFF3B9',
      author: 'Jane Cooper'
    },
    {
      eventId: '12',
      startTime: new Date('2022-12-02 12:00:00'),
      endTime: new Date('2022-12-02 13:00:00'),
      title: 'Daily Meet',
      backgroundColor: '#FF7800',
      secondColor: '#FFF3B9',
      author: 'Jane Cooper'
    },
    {
      eventId: '123',
      startTime: new Date('2022-12-02 10:00:00'),
      endTime: new Date('2022-12-02 11:00:00'),
      title: 'Daily Meet',
      backgroundColor: '#409679',
      secondColor: '#E8FFF7',
      author: 'Ralph Edward'
    }
  ]

  return (
    <div style={{ padding: '25px' }}>
        <WeeklyCalendar
          events={events}
          weekends={true}
          onEventClick={event => console.log(event)}
        />{' '}
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
