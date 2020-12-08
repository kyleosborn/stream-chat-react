import React, { useContext, useEffect, useRef, useState } from 'react';
import { Avatar, ChannelContext } from 'stream-chat-react';

import './MessagingChannelHeader.css';

import { TypingIndicator } from '../TypingIndicator/TypingIndicator';

import { ChannelEditIcon } from '../../assets';

const getAvatarGroup = (members) => {
  if (members.length === 1) {
    return (
      <div className="messaging__channel-header__avatars">
        <Avatar image={members[0]?.user.image || undefined} size={40} />;
      </div>
    );
  }

  if (members.length === 2) {
    return (
      <div className="messaging__channel-header__avatars two">
        <span>
          <Avatar
            image={members[0]?.user.image || undefined}
            shape="square"
            size={40}
          />
        </span>
        <span>
          <Avatar
            image={members[1]?.user.image || undefined}
            shape="square"
            size={40}
          />
        </span>
      </div>
    );
  }

  if (members.length === 3) {
    return (
      <div className="messaging__channel-header__avatars three">
        <span>
          <Avatar
            image={members[0]?.user.image || undefined}
            shape="square"
            size={40}
          />
        </span>
        <span>
          <Avatar
            image={members[1]?.user.image || undefined}
            shape="square"
            size={20}
          />
          <Avatar
            image={members[2]?.user.image || undefined}
            shape="square"
            size={20}
          />
        </span>
      </div>
    );
  }

  if (members.length >= 4) {
    return (
      <div className="messaging__channel-header__avatars four">
        <span>
          <Avatar
            image={members[0]?.user.image || undefined}
            shape="square"
            size={20}
          />
          <Avatar
            image={members[1]?.user.image || undefined}
            shape="square"
            size={20}
          />
        </span>
        <span>
          <Avatar
            image={members[2]?.user.image || undefined}
            shape="square"
            size={20}
          />
          <Avatar
            image={members[3]?.user.image || undefined}
            shape="square"
            size={20}
          />
        </span>
      </div>
    );
  }

  return null;
};

const MessagingChannelHeader = () => {
  const { channel, client } = useContext(ChannelContext);

  const [isEditing, setIsEditing] = useState(false);
  const [text, setText] = useState(channel?.data?.name || '');
  const [title, setTitle] = useState('');

  const inputRef = useRef();

  const channelName = channel?.data?.name;
  const members = Object.values(channel.state?.members || {}).filter(
    (member) => member.user?.id !== client?.user?.id,
  );

  useEffect(() => {
    if (isEditing && inputRef.current) {
      setText('');
      inputRef.current.focus();
    }
  }, [isEditing]);

  useEffect(() => {
    if (!channelName) {
      setTitle(
        members
          .map(
            (member) => member.user?.name || member.user?.id || 'Unnamed User',
          )
          .join(', '),
      );
    }
  }, [channelName, members]);

  return (
    <div className="messaging__channel-header">
      {getAvatarGroup(members)}
      {!isEditing ? (
        <div className="channel-header__name">{title}</div>
      ) : (
        <input
          className="channel-header__edit-input"
          onChange={(e) => setText(e.target.value)}
          placeholder="Type a new name for the chat"
          ref={inputRef}
          value={text}
          onSubmit={() => console.log('submitted')}
        />
      )}
      <div className="messaging__channel-header__right">
        <TypingIndicator />
        <ChannelEditIcon {...{ setIsEditing }} />
      </div>
    </div>
  );
};

export default React.memo(MessagingChannelHeader);
