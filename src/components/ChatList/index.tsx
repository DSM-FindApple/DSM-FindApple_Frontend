import React, { useState } from 'react';
import ChatListContainer from './Container/ChatListContainer';
import NonData from './Container/NonData';
import * as S from './styles'

const dataD = [
  {
    name: "안녕하세요"
  },
]

const ChatList = () => {
  const [ data, setData ] = useState(dataD);

  return (
    <>
        <S.Wrapper>
            {
              !data ?
              <NonData/>
              : <ChatListContainer />
            }
            <ChatListContainer/>
        </S.Wrapper>
    </>
  );
}

export default ChatList;