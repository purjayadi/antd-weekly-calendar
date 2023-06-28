# Antd Weekly Calendar

A weekly calendar component for antd.

![Example](https://purjayadi.s3.ap-southeast-1.amazonaws.com/dnPCy8.image.png?response-content-disposition=inline&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aDmFwLXNvdXRoZWFzdC0xIkYwRAIgMchAuF0cyOmRMxhWNIv3woWL8xNG4pi7spuXF0%2FPyGoCIH3QqLQYNbukRf6SY0maS8G0k5t0Xyt8r52FMyAwjA78KuQCCHcQARoMNTc2NjQzNzE4MDkxIgzGvGmKORQTTux0OggqwQJlh4QL1vzpOVVkxywSXRE4da01VFVWUByijvKxUs3FDODsarZAx73spC2%2BNq7GMjSk%2FElYpKFWF7ls3a8KhFMvi4eqv88jRTflf8lnBzBTDAH4I0tldr3mi26FoEQ2UIXwe497EaILHlk%2FtOCMwwrtt9mSjbCnPnmxKE29LafFgTmK0WYTPfagdaTR4WDUVZxp0mgMSR0qV%2F9imyXOFhi5vx2hfesjd66CgXNSPpldujXRlrttt9gjotSuj%2BsR4nki7sgK66bpgej9GYVFnPL6YRcF09OTf7zDExUKsCJ4WrJksyh1BDdT004UGJv5uyt1HMJALu0B9HKinc74wlWf%2B6c%2BQkJ%2BpZvbNX5dJdWWjRegoACpu2sq9xsEz%2F%2FlRFQ%2BXchi8xQ0hTGj8Xga7d7roDUkqUwAlYJgWjAIRFvDTSAw7%2FDwpAY6tAKAYKYFNVsNqDsZIKh8jGt9yIPWpYGhuBfkA7ff0bGEJETTu4pRM4We0aFfQ5u05jStj5yordtPCJa5zVDswBpBma194xTpZB4bnUqy94HWpboqUl4BtRu71xscFl9tQljIzi5q1uD1pGAun3b6VY3ArnZwbRnpDgyf%2BN2a3NuGlwsQ3OCSy2q2B9YU%2Bu%2BShnSpM6%2Ff4BkCLT32XR7fDIV9kiTRBFyg6JZQmew9LbC3MqjmBxJgArFpXyYuo2Zrni%2BJtRMFzeJSZioyts542T9875F4diPC1p7K3vQmYVh7PwqpyLx2rk479Gkm4wrWaQeC9fMVpCMxgg%2BY2HrDfJKwEHsOVi4K95mniwDdINKR%2BRqtCvBnhWAdgx2MbZ%2BpFrjEnlOtJho4Z76sqbGXB7krTX7eSQ%3D%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230628T134302Z&X-Amz-SignedHeaders=host&X-Amz-Expires=300&X-Amz-Credential=ASIAYMQVE3PF4TDYH67S%2F20230628%2Fap-southeast-1%2Fs3%2Faws4_request&X-Amz-Signature=82d8c9a670109ba6426f11a55713e80d71a3132be35f7d68897dd52d5eb81209)

- [Antd Weekly Calendar](#antd-weekly-calendar)
  - [Getting Started](#getting-started)
  - [Example](#example)
  - [Api](#api)
    - [`<WeeklyCalendar />`](#weeklycalendar-)
    - [Event Api](#event-api)
  - [Contributing](#contributing)

## Getting Started


```
npm install @purjayadi/antd-weekly-calendar
```

## Example

This is a basic example, check out the `example` folder for a complete Chakra UI example!

```tsx
import {
  WeeklyCalendar,
} from 'antd-weekly-calendar';

const events = [
  { startTime: new Date(2021, 3, 21, 12, 0, 0), endTime: new Date(2021, 3, 21, 14, 30, 0), title: 'Ap. 1', backgroundColor: 'red' },
  { startTime: new Date(2021, 3, 25, 10, 0, 0), endTime: new Date(2021, 3, 25, 17, 15, 0), title: 'Ap. 1' },
];

function MyCalendar() {
  return (
      <>
        <WeeklyCalendar
            events={events}
            onEventClick={(event) => console.log(event)}
            onSelectDate={(date) => console.log(date)}
        />
      </>
  );
}


```

## Api

### `<WeeklyCalendar />`



| Property     | Type | Default      | Description                                                                      |
| ------------ | ------- | ------------ | -------------------------------------------------------------------------------- |
| onEventClick | `(event) => void`        |   -    | Callback for when an event is being clicked                                       |
| onSelectDate |  `(date) => void`     | -| Callback for when a date is selected                   |
| weekends?     | `boolean` | `false`| Display weekend on the calendar    |

### Event Api


| Value      | Type      | Default   | Description                                                |
| ---------- | ---------- | ---------------------- | ---------------------------------------------------------- |
| eventId | `string`         | -                          | EventId |
| startTime | `Date`       | -                   | event start time                     |
| endTime | `Date`   | -     | event end time |
| title | `string`  | - | event title           |
| location?  |    `string`    | -           | event location |
| allDay?  |   `boolean`   | `false`   | is the event a full day event?                                                          |
| textColor? |  `string`       |       `white` | You can use any of the CSS color formats such `#f00`, `#ff0000`, `rgb(255,0,0)`, or `red`.|
| backgroundColor?| `string`   | `#1444AF`     | You can use any of the CSS color formats such `#f00`, `#ff0000`, `rgb(255,0,0)`, or `red`.|
| secondColor?| `string`   | `#ffff`     | You can use any of the CSS color formats such `#f00`, `#ff0000`, `rgb(255,0,0)`, or `red`.|




## Contributing

This is my first open source project.  Please feel free to contribute in any way you want.

Contributing can be as simple as giving feedback in the issues, updating documentation or writing your own posts, that can be linked in the README.
Of course you are also welcome to propose changes via the issues or pull requests.
