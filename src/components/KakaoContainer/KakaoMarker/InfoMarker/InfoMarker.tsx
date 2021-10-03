import React from 'react';
import { FC } from 'react';
import * as S from './styles'
import { GrClose } from 'react-icons/gr'

interface Props {
  onClosrOverView: () => void,
}


const InfoMarker: FC<Props> = ({onClosrOverView}) => {
  return (
    <>
      <S.InfoMarkerWrapper>
          <S.InfoHeader>
            <S.InfoTitle>홈팟 잃어버리신분?</S.InfoTitle>
            <GrClose width='25px' onClick={onClosrOverView}/>  
          </S.InfoHeader>
          <S.InfoAddress>대전광역시 유성구 가정북로 76</S.InfoAddress>
      </S.InfoMarkerWrapper>
    </>
  )
}

export default InfoMarker;