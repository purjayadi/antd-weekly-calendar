import React, { useRef } from 'react';
import { add, format, getDay, setDay, differenceInMinutes } from 'date-fns';
import { Table } from 'antd';

import {
  GenericEvent,
  CalendarBodyProps,
  EventsObject,
  EventBlockProps,
  ColumnNode,
} from './types';
import { getDayHoursEvents, sizeEventBox, MIN_BOX_SIZE } from './utils';

const BOX_POSITION_OFFSET = 26;
const SCROLL_TO_ROW = new Date().toLocaleTimeString([], { hour: '2-digit' });
const BLUE = '#1444AF';
const SECOND_BLUE = '#ffff';

const EventBlock = <T extends GenericEvent>({
  event,
  index,
  hour,
  events,
  onEventClick,
}: EventBlockProps<T>) => {
  const getEventDay = getDay(new Date(event.endTime));
  const fitHourToDate = setDay(hour, getEventDay);

  const boxStyle = event.allDay
    ? { boxSize: MIN_BOX_SIZE, boxPosition: index * BOX_POSITION_OFFSET }
    : sizeEventBox(event, fitHourToDate);

  return (
    <>
      <div
        style={{
          display: 'block',
          height: boxStyle.boxSize + '%',
          width: '2%',
          position: 'absolute',
          top: boxStyle.boxPosition + '%',
          left: '0%',
          backgroundColor: event.backgroundColor ? event.backgroundColor : BLUE,
          zIndex: 1,
        }}
      ></div>
      <div
        style={{
          display:
            !event.allDay &&
            differenceInMinutes(new Date(event.endTime), fitHourToDate) === 0
              ? 'none'
              : 'block',
          height: boxStyle.boxSize + '%',
          width: event.allDay ? 98 + '%' : 98 / events + '%',
          position: 'absolute',
          top: boxStyle.boxPosition + '%',
          left: '2%',
          backgroundColor: event.secondColor ? event.secondColor : SECOND_BLUE,
          zIndex: 1,
          // borderTopRightRadius: '4px',
          // borderBottomRightRadius: '4px',
        }}
        onClick={onEventClick ? () => onEventClick(event) : undefined}
        key={index}
      >
        <div
          style={{
            color: event.backgroundColor,
            paddingLeft: '5px',
            fontWeight: 'bold',
          }}
        >
          <span>{event.title}</span>
        </div>
        <p
          style={{
            color: '#737373',
            fontSize: '12px',
            paddingLeft: '5px',
            paddingTop: '5px',
          }}
        >
          {event.author}
        </p>
      </div>
    </>
  );
};

function Calendar<T extends GenericEvent>({
  weekDates,
  getDayEvents,
  onEventClick,
  weekends,
}: CalendarBodyProps<T>) {
  
  const rowRef = useRef<null | HTMLDivElement>(null);

  const dayList = weekends
    ? [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
        'Sunday',
      ]
    : ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];

  const dayColumns = dayList.map((day, counter) => {
    const columnDate = add(new Date(weekDates.startDate), {
      days: 1 + counter,
    });
    const formattedDayandMonth =
      format(columnDate, 'iii') + ', ' + format(columnDate, 'dd MMMM');
    return {
      title: formattedDayandMonth,
      dataIndex: day,
      key: day,
      width: 2,
      render: function(
        events: ColumnNode<T>,
        row: EventsObject<T>
      ): React.ReactNode | undefined {
        if (events && events.length > 0 && events instanceof Array) {
          const eventsBlock = events.map(function(
            event,
            index: number
          ): React.ReactNode {
            return (
              <EventBlock
                key={event.eventId}
                event={event}
                index={index}
                hour={row.hourObject}
                events={events.length}
                onEventClick={onEventClick}
              />
            );
          });

          return {
            props: {
              style: { position: 'relative', padding: '0' },
            },
            children: <>{eventsBlock}</>,
          };
        }
        return undefined;
      },
    };
  });
  const hourColumn = {
    title: '',
    dataIndex: 'hour',
    key: 'hour',
    width: 1,
    render: (hour: ColumnNode<T>, {}) => {
      return {
        props: {
          style: { width: '10%' },
        },
        children:
          SCROLL_TO_ROW === hour ? (
            <div ref={rowRef}>{hour}</div>
          ) : (
            <div>{hour}</div>
          ),
      };
    },
  };
  const tableColumns = [hourColumn, ...dayColumns];

  return (
    <div>
      <Table
        rowKey={record => record.id}
        dataSource={getDayHoursEvents(weekDates, getDayEvents)}
        columns={tableColumns}
        pagination={false}
        bordered={true}
        showHeader={true}
        onRow={_ => {
          // if (rowIndex === ALL_DAY_ROW) {
          //   return {
          //     style: {
          //       backgroundColor: 'white',
          //       boxShadow: 'rgba(0, 0, 0, 0.05) -1px 4px 4px ',
          //       zIndex: 1,
          //       top: 0,
          //     },
          //   };
          // }
          return {};
        }}
        scroll={{
          y: 400,
        }}
      />
    </div>
  );
}

export default Calendar;
