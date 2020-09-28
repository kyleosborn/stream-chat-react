import React, { useContext, useState, useEffect } from 'react';
import { ChatContext } from '../../context';

const UnreadCount = () => {
  const { client } = useContext(ChatContext);
  const [totalUnreadCount, setTotalUnreadCount] = useState(0);

  const handleEvent = (e) => {
    if (e.total_unread_count) setTotalUnreadCount(e.total_unread_count);
  };

  useEffect(() => {
    if (!client) return;
    setTotalUnreadCount(client.user.total_unread_count);
    client.on(handleEvent);
  }, [client]);

  return (
    <div
      style={{
        position: 'absolute',
        background: 'green',
        top: 30,
        right: 30,
        padding: 10,
        zIndex: 100,
      }}
    >
      {totalUnreadCount}
    </div>
  );
};

export default React.memo(UnreadCount);
