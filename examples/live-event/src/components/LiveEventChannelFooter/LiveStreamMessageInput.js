import React, { useContext, useRef, useState } from 'react';
import {
  ChannelContext,
  ChatAutoComplete,
  EmojiPicker,
  useMessageInput,
} from 'stream-chat-react';
import { SmileyFace } from '../../assets/SmileyFace';
import { PaperClip } from '../../assets/PaperClip';

import './LiveStreamMessageInput.css';

export const LiveStreamMessageInput = (props) => {
  const { sendMessage } = useContext(ChannelContext);
  const messageInput = useMessageInput({ ...props, sendMessage });
  const [canSend, setCanSend] = useState(true);

  const canSendTimer = useRef(null);

  const handleSubmitDelayed = (e) => {
    if (canSend) {
      messageInput.handleSubmit(e);
      setCanSend(false);
      canSendTimer.current = setTimeout(
        () => setCanSend(true),
        props.sloMoDelay * 1000,
      );
    } else {
      e.preventDefault();
    }
  };

  return (
    <div className="live-event-message-input__wrapper">
      <div className="live-event-message-input__input">
        <EmojiPicker {...messageInput} />
        <ChatAutoComplete
          innerRef={messageInput.textareaRef}
          handleSubmit={handleSubmitDelayed}
          onChange={messageInput.handleChange}
          onSelectItem={messageInput.onSelectItem}
          value={messageInput.text}
          placeholder={'Send a message'}
          onPaste={messageInput.onPaste}
        />
      </div>
      <div className="live-event-message-input__input-buttons">
        <PaperClip />
        <div onClick={messageInput.openEmojiPicker}>
          <SmileyFace />
        </div>
      </div>
    </div>
  );
};
