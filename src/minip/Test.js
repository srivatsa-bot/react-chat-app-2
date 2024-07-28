import React from 'react';
import { ChatEngineWrapper, ChatSocket, ChatFeed } from 'react-chat-engine';
import Test2 from './Test2';

export default function Test() {
  let b = Test2.apply;
  console.log(b);
  return (
    <div className='div1'>
      {/* <ChatEngineWrapper>
        <ChatSocket 
          projectID='e98f390e-adff-4803-80df-0a43e8ecc3df'
          chatID='245673'
          chatAccessKey='1234'
          senderUsername='srivatsa'
        />
        <ChatFeed activeChat='245673' /> 
      </ChatEngineWrapper> */}
    </div>
  );
}
