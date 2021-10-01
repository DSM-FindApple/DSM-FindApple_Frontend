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
          <div>홈팟 잃어버리신분?</div>
          <GrClose width='25px' onClick={onClosrOverView}/>
      </S.InfoMarkerWrapper>
    </>
  )
}

export default InfoMarker;