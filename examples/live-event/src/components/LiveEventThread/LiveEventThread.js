import React, { useContext } from 'react';
import {
  ChannelContext,
  ChatAutoComplete,
  EmojiPicker,
  useMessageInput,
} from 'stream-chat-react';
import { SmileyFace } from '../../assets/SmileyFace';
import { PaperClip } from '../../assets/PaperClip';

import './LiveEventThread.css';

export const LiveEventThread = () => {
  const { sendMessage } = useContext(ChannelContext);
  const messageInput = useMessageInput({ sendMessage });

  return (
    <div className="live-event-message-input__wrapper">
      <div className="live-event-message-input__input">
        <EmojiPicker {...messageInput} />
        <ChatAutoComplete
          innerRef={messageInput.textareaRef}
          handleSubmit={messageInput.handleSubmit}
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
