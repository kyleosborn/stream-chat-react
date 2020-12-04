import React from 'react';
import { StreamChat } from 'stream-chat';
import {
  Chat,
  Channel,
  Window,
  Thread,
  Streami18n,
  enTranslations,
} from 'stream-chat-react';
import 'stream-chat-react/dist/css/index.css';
import './App.css';
// import { LiveVideoIcon } from './assets/LiveVideoIcon';
import { LiveEventChannelFooter } from './components/LiveEventChannelFooter/LiveEventChannelFooter';
import { LiveEventChannelSwitch } from './components/LiveEventChannelSwitch/LiveEventChannelSwitch';
import { LiveEventMessage } from './components/LiveEventMessage/LiveEventMessage';

const urlParams = new URLSearchParams(window.location.search);
const apiKey = urlParams.get('apikey') || 'qk4nn7rpcn75';
const channelName = urlParams.get('channel') || 'demo';
const theme = urlParams.get('theme') || 'light';
const user = urlParams.get('user') || 'example-user';
const userToken =
  urlParams.get('user_token') ||
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiZXhhbXBsZS11c2VyIn0.HlC0dMKL43y3K_XbfvQS_Yc3V314HU4Z7LrBLil777g';

const i18nInstance = new Streami18n({
  language: 'en',
  translationsForLanguage: {
    ...enTranslations,
    Mute: 'Pin Message',
    Unmute: 'Unpin Message',
  },
});

const App = () => {
  const chatClient = new StreamChat(apiKey);
  chatClient.setUser({ id: user }, userToken);
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
        boxShadow: '0px 2px 30px rgba(0, 0, 0, 0.1)',
        borderRadius: '16px',
      }}
    >
      <Chat
        client={chatClient}
        i18nInstance={i18nInstance}
        theme={`livestream ${theme}`}
      >
        <div style={{ display: 'flex', flexDirection: 'row' }}>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <div
              style={{
                height: '800px',
                width: '810px',
                borderRadius: '16px 0px 0px 16px',
                overflow: 'hidden',
              }}
            >
              <div>
                {/* <div className="live-video-icon">
                  <LiveVideoIcon />
                </div> */}
                <iframe
                  width="810px"
                  height="473px"
                  src="https://www.youtube.com/embed/_J4QPz52Sfo?autoplay=1&mute=1"
                  frameBorder="0px"
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <img
                style={{ height: '295px', width: '810px' }}
                // eslint-disable-next-line global-require
                src={require('./assets/VideoFooter.png')}
              ></img>
            </div>
          </div>
          <div
            style={{
              height: '800px',
              width: '320px',
              boxShadow: '0px 0px 20px rgba(0, 0, 0, 0.2)',
              borderRadius: '0px 16px 16px 0px',
              overflow: 'hidden',
            }}
          >
            <Channel channel={channel}>
              <Window hideOnThread>
                <LiveEventChannelSwitch />
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
