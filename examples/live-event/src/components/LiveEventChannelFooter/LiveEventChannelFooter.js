import React from 'react';
import './LiveEventChannelFooter.css';
import { LiveStreamMessageInput } from './LiveStreamMessageInput';

export const LiveEventChannelFooter = () => {
  return (
    <div className="live-event-footer__container">
      <div className="live-event-footer__top">
        <div className="live-event-footer__avatar"></div>
        <div className="live-event-footer__input">
          <LiveStreamMessageInput focus />
        </div>
      </div>
      <div className="live-event-footer__bottom">
        <div>
          <h3>Moderator Controls</h3>
        </div>
        <div></div>
      </div>
    </div>
  );
};
