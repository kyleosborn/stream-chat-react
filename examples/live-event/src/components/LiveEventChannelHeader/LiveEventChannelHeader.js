import React from 'react';
import './LiveEventChannelHeader.css';

export const LiveEventChannelHeader = () => {
  // eslint-disable-next-line global-require
  const source = require('../../assets/Tabs.png');
  return (
    <div className="live-event-channel-header__container">
      {/* <div className="live-event-channel-header__button"></div>
      <div className="live-event-channel-header__button"></div>
      <div className="live-event-channel-header__button"></div> */}
      <img className="live-event-channel-header__button" src={source}></img>
    </div>
  );
};
