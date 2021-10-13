import React, { FC } from 'react';
import * as S from './styles';

interface Props {
  name: string,
  title: string,
  read: boolean,
}

const ChatListContainer: FC<Props> = ({name, title, read}) => {
  return (
    <>
        <S.ContainerWrapper>
            {/* <img src={} alt="asd"> */}
            <div>
              <div style={{width: '40px', height: "40px", borderRadius: '50%', backgroundColor: "blue"}} />
              <S.ChatInfo read={read}>
                <div>{name}</div>
                <div>{title}</div>
              </S.ChatInfo>
            </div>
            <S.NewChat read={read}/>
        </S.ContainerWrapper>
    </>
  );
}

export default ChatListContainer;