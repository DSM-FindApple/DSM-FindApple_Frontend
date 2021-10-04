import React from 'react';
import { Emo } from '../../../../assets';
import * as S from './styles'

const NonData = () => {
  return (
    <>
        <S.NonDataWrapper>
            <img src={Emo} alt="이모지"/>
            <div>아직 채팅이 없구려</div>
        </S.NonDataWrapper>
    </>
  );
}

export default NonData;