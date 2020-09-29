import React, { useContext, useState, useEffect } from 'react';
import { ChatContext } from '../../context';

const UnreadCount = () => {
  const { client, channel } = useContext(ChatContext);
  const [totalUnreadCount, setTotalUnreadCount] = useState(0);
  
  const handleEvent = (e) => {
    if (e?.total_unread_count >= 0) {
      if(totalUnreadCount === 0 && e.cid === channel?.cid) return;
      setTotalUnreadCount(e.total_unread_count);
    }
  };

  useEffect(() => {
    if (!client) return;
    setTotalUnreadCount(client.user.total_unread_count);
    client.on(handleEvent);
    return () => {
      client.off(handleEvent);
    }
  }, [client, channel]);

  return (
    <div
      style={{
        position: 'absolute',
        background: 'magenta',
        color: 'white',
        fontWeight: 'bold',
        width: 20,
        height: 20,
        borderRadius: 100,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        top: 40,
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
