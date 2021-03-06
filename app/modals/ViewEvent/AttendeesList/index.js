import AttendeeItem from './Item';
import classNames from 'classnames';
import { memo, useMemo } from 'react';
import PerfectScrollbar from 'react-perfect-scrollbar';
import './style.scss';

const AttendeesList = memo(({ className, event }) => (
  <div className={classNames('attendees-list-wrapper', className)}>
    <PerfectScrollbar
      options={{ suppressScrollX: true, wheelPropagation: false }}>
      <div className="scroll">
        <div className="scrollbar-container">
          {useMemo(
            () =>
              event.invites.filter(
                (invite) => invite.user.id !== event.organiser.id,
              ),
            [event.invites, event.organiser.id],
          ).map((invite, index) => (
            <AttendeeItem
              showActions
              className="mb-2"
              key={invite.id}
              event={event}
              invite={invite}
            />
          ))}
        </div>
      </div>
    </PerfectScrollbar>
  </div>
));

export default AttendeesList;
