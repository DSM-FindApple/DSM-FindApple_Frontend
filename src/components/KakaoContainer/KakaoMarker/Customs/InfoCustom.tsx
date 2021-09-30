import React from 'react';
import { FC } from 'react';
import * as S from './styles'

interface Props {
  onClosrOverView: () => void,
}


const InfoCustom: FC<Props> = ({onClosrOverView}) => {
  return (
    <>
      <S.InfoCustomWrapper>
        <S.Marker>
          <div onClick={onClosrOverView}>닫기</div>
        </S.Marker>
      </S.InfoCustomWrapper>
    </>
  )
}

export default InfoCustom;