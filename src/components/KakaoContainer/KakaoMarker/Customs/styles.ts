import styled from '@emotion/styled';
import {SpeechBubble} from '../../../../assets';


export const MarkerWrapper = styled.div`

`

export const MarkerDefault = styled.div`
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: blue;
`

export const InfoCustomWrapper = styled.div`
`

export const Marker = styled.div`
    background-image: url(${SpeechBubble});
    background-size: 200px 127px;
    width: 200px;
    height: 127px;
`