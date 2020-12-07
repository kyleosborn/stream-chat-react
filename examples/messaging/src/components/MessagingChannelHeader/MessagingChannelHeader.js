import React, { useContext, useEffect, useState } from 'react';
import { Avatar, ChannelContext } from 'stream-chat-react';

import './MessagingChannelHeader.css';

import { TypingIndicator } from '../TypingIndicator/TypingIndicator';

const getAvatarGroup = (members) => {
  if (members.length === 1) {
    return <Avatar image={members[0]?.user.image || undefined} size={40} />;
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

  const [title, setTitle] = useState('');

  const members = Object.values(channel.state?.members || {});
  const otherMembers = members.filter(
    (member) => member.user?.id !== client?.user?.id,
  );

  useEffect(() => {
    const channelName = channel?.data?.name;

    if (channelName) return channelName;

    return setTitle(
      otherMembers
        .map((member) => member.user?.name || member.user?.id || 'Unnamed User')
        .join(', '),
    );
  }, [channel, otherMembers]);

  return (
    <div className="messaging__channel-header">
      {getAvatarGroup(otherMembers)}
      <div className="messaging__channel-header__right">
        <div className="channel-header__name">{title}</div>
        <TypingIndicator />
      </div>
    </div>
  );
};

export default React.memo(MessagingChannelHeader);
