import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Inject, ScheduleComponent, Day, Week, WorkWeek, Month, Agenda } from '@syncfusion/ej2-react-schedule';

class Calendar extends React.Component {

    render() {
        return <ScheduleComponent>
        <Inject services={[Day, Week, WorkWeek, Month, Agenda]} />
        </ScheduleComponent>
}
}
 
export default Calendar;