import React, { useState } from 'react';
import ChatListContainer from './Container/ChatListContainer';
import NonData from './Container/NonData';
import * as S from './styles'

const dataD = [
  {
    name: "한준호",
    title: 'ㅁㄴㅇ',
    read: false,
  },
  {
    name: "김재원",
    title: '123123ㅂㄴㅇㅈㅁㄷㅁㅇㄴㅇㅁㅈ',
    read: true,
  },
]

const ChatList = () => {
  const [ data, setData ] = useState(dataD);

  return (
    <>
        <S.Wrapper>
            {/* {
              !data ? <NonData/>
              : <ChatListContainer />
            } */}
            {
              data.map((i, index) => {
                return (
                  <ChatListContainer {...i} key={index}/>
                )
              })
            }
        </S.Wrapper>
    </>
  );
}

export default ChatList;