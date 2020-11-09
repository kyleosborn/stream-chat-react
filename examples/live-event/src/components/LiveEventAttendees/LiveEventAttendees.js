import React from 'react';
import { ModerationSidebar } from '../../assets/ModerationSidebar';

import './LiveEventAttendees.css';

export const LiveEventAttendees = () => {
  return (
    <div className="live-event-attendees__container">
      {/* <div className="live-event-attendees__top">
        <div className="live-event-attendees__top-title">Moderators</div>
        <div className="live-event-attendees__top-pictures">
          <div>{Mod1}</div>
          <div>{Mod1}</div>
        </div>
      </div>
      <div className="live-event-attendees__bottom"></div> */}
      <ModerationSidebar />
    </div>
  );
};
