import styled from '@emotion/styled';
import {SpeechBubble} from '../../../../assets';

export const InfoMarkerWrapper = styled.div`
    background-image: url(${SpeechBubble});
    background-size: 250px 250px;
    box-sizing: border-box;
    width: 250px;
    height: 250px;
    padding: 13px 9px;
    font-size: 18px;
`

export const InfoHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const InfoTitle = styled.div`
    font-family: "CookieRunBold";
    font-size: 18px;
`

export const InfoImg = styled.img`

`

export const InfoAddress = styled.div`
    font-family: "CookieRunRegular";
    font-size: 13px;
`