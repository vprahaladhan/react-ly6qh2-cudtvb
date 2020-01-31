import { render } from 'react-dom';
import './index.css';
import * as React from 'react';
import { ScheduleComponent as Scheduler, Day, Week, WorkWeek, Month, Agenda, Inject, Resize, DragAndDrop } from '@syncfusion/ej2-react-schedule';

import { SampleBase } from './sample-base';
/**
 * Schedule default sample
 */
export class DefaultSample extends SampleBase {
  constructor() {
    super(...arguments);
  }
  render() {
    return (
      <Scheduler >
        <Inject services={[Day, Week, WorkWeek, Month, Agenda, Resize, DragAndDrop]} />
      </Scheduler>
    );
  }
}

render(<DefaultSample />, document.getElementById('sample'));