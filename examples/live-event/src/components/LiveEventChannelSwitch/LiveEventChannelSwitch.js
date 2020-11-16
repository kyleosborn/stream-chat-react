import React, { useState } from 'react';
import './LiveEventChannelSwitch.css';

import { LiveChat } from '../../assets/LiveChat';
import { Pins } from '../../assets/Pins';
import { Attendees } from '../../assets/Attendees';
import { LiveEventChannelContainer } from '../LiveEventChannelContainer/LiveEventChannelContainer';

export const LiveEventChannelSwitch = () => {
  const [tab, setTab] = useState(1);

  return (
    <div>
      <div className="live-event-channel-switch__container">
        <div onClick={() => setTab(1)}>
          <LiveChat fill={tab === 1 ? '#00A3FF' : '#8CB0CA'} />
        </div>
        <div onClick={() => setTab(2)}>
          <Pins fill={tab === 2 ? '#00A3FF' : '#8CB0CA'} />
        </div>
        <div onClick={() => setTab(3)}>
          <Attendees fill={tab === 3 ? '#00A3FF' : '#8CB0CA'} />
        </div>
      </div>
      <LiveEventChannelContainer tab={tab} />
    </div>
  );
};
