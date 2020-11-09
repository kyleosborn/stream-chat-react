import React, { useState } from 'react';
import './LiveEventChannelHeader.css';

import { LiveChat } from '../../assets/LiveChat';
import { Pins } from '../../assets/Pins';
import { Attendees } from '../../assets/Attendees';
import { LiveEventContainer } from '../LiveEventContainer./LiveEventContainer';

export const LiveEventChannelHeader = () => {
  const [tab, setTab] = useState(1);

  return (
    <div>
      <div className="live-event-channel-header__container">
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
      <LiveEventContainer tab={tab} />
    </div>
  );
};
