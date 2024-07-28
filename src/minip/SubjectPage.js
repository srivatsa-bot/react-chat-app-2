import React from 'react';
import { useParams } from 'react-router-dom';
import {ChatEngine, ChatEngineWrapper, ChatSocket, ChatFeed } from 'react-chat-engine';
import Header1 from './Header1';
import Bodymain from './Bodymain';
export default function SubjectPage() {
  const { id,chatId } = useParams(); // Get the subject ID from URL parameter
  // You can use the subject ID to fetch specific subject data from your data source or render content accordingly
  
  return (
    <div className='chatapp'>
      


       <ChatEngineWrapper>
                  
                  <ChatSocket 
                      
                      projectID='ca8eaf6c-c8cf-44af-8514-42b93d3403ef'
                      chatID={chatId}
                      chatAccessKey='1234'
                      senderUsername='srivatsa'
                      
                      
                      />
      
                  <ChatFeed activeChat={chatId} /> 
              </ChatEngineWrapper> 
        {/* <aside>lormememmemsmdmsmdsmdsmdmsm</aside> */}

      
    </div>
  );
}


        