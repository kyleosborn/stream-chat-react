/* eslint-disable */
import React from 'react';
import { StreamChat } from 'stream-chat';
import { Chat, Channel, Window, Thread } from 'stream-chat-react';
import 'stream-chat-react/dist/css/index.css';
import './App.css';
import { LiveEventChannelFooter } from './components/LiveEventChannelFooter/LiveEventChannelFooter';
import { LiveEventChannelHeader } from './components/LiveEventChannelHeader/LiveEventChannelHeader';
import { LiveEventMessage } from './components/LiveEventMessage/LiveEventMessage';

const urlParams = new URLSearchParams(window.location.search);
const apiKey = urlParams.get('apikey') || 'qk4nn7rpcn75';
const channelName = urlParams.get('channel') || 'demo';
const theme = urlParams.get('theme') || 'light';
const user = urlParams.get('user') || 'example-user';
const userToken =
  urlParams.get('user_token') ||
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiZXhhbXBsZS11c2VyIn0.HlC0dMKL43y3K_XbfvQS_Yc3V314HU4Z7LrBLil777g';

const App = () => {
  const chatClient = new StreamChat(apiKey);
  chatClient.setUser({ id: user, role: 'moderator' }, userToken);
  const channel = chatClient.channel('livestream', channelName, {
    image:
      'https://images.unsplash.com/photo-1512138664757-360e0aad5132?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2851&q=80',
    name: 'The water cooler',
    example: 1,
  });

  channel.watch();

  return (
    <div
      style={{
        display: 'flex',
        height: '800px',
        width: '1130px',
        margin: '100px',
        boxShadow: '0px 2px 30px rgba(0, 0, 0, 0.1)',
        borderRadius: '16px',
      }}
    >
      <Chat client={chatClient} theme={`livestream ${theme}`}>
        <div style={{ display: 'flex', flexDirection: 'row' }}>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <div style={{ height: '800px', width: '810px' }}>
              <img
                style={{ height: '800px', width: '810px' }}
                src={require('./assets/sampleVideo.png')}
              ></img>
            </div>
          </div>
          <div style={{ height: '800px', width: '320px' }}>
            <Channel channel={channel}>
              <Window hideOnThread>
                <LiveEventChannelHeader />
              </Window>
              <Thread
                additionalMessageListProps={{ TypingIndicator: () => null }}
                Message={LiveEventMessage}
                MessageInput={LiveEventChannelFooter}
              />
            </Channel>
          </div>
        </div>
      </Chat>
    </div>
  );
};

export default App;
