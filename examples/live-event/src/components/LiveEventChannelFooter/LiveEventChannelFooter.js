import React, { useState } from 'react';
import { AvatarRobert } from '../../assets/AvatarRobert';
import { MeatballMenu } from '../../assets/MeatballMenu';
import { SloMoModal } from '../SloMoModal/SloMoModal';
import './LiveEventChannelFooter.css';
import { LiveStreamMessageInput } from './LiveStreamMessageInput';

export const LiveEventChannelFooter = () => {
  const [showModal, setShowModal] = useState(false);
  const [sloMoDelay, setSloMoDelay] = useState('0');
  const [toggleSwitchPosition, setToggleSwitchPosition] = useState(false);

  return (
    <div className="live-event-footer__container">
      <div className="live-event-footer__top">
        <div className="live-event-footer__avatar">
          <AvatarRobert />
        </div>
        <div className="live-event-footer__input">
          <LiveStreamMessageInput focus sloMoDelay={sloMoDelay} />
        </div>
      </div>
      <div className="live-event-footer__bottom">
        <div>
          <h3>Moderator Controls</h3>
        </div>
        {showModal ? (
          <SloMoModal
            setToggleSwitchPosition={setToggleSwitchPosition}
            sloMoDelay={sloMoDelay}
            setSloMoDelay={setSloMoDelay}
            toggleSwitchPosition={toggleSwitchPosition}
          />
        ) : null}
        <div onClick={() => setShowModal(!showModal)}>
          <MeatballMenu />
        </div>
      </div>
    </div>
  );
};
