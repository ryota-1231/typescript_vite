import styled from 'styled-components/macro';

export const StyledCountWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-bottom: 23px;
`;

export const StyledCountItem = styled.div`
  position: relative;
  padding: 0 15px;
  font-family: Arial, sans-serif;
  font-size: 24px;
  font-weight: 500;
  line-height: 1.4;
  color: #595960;
  text-align: center;

  &:first-child {
    padding-left: 0;

    &::after {
      position: absolute;
      top: 50%;
      right: 0;
      width: 1px;
      height: 85%;
      content: '';
      background-color: #f4f4f4;
      transform: translateY(-50%);
    }
  }

  &:last-child {
    padding-right: 0;

    &::before {
      position: absolute;
      top: 50%;
      left: 0;
      width: 1px;
      height: 85%;
      content: '';
      background-color: #f4f4f4;
      transform: translateY(-50%);
    }
  }
`;

export const StyledCountLink = styled.a`
  text-decoration: none;
`;

export const StyledCountItemSpan = styled.span`
  position: relative;
  display: block;
  font-size: 24px;
  color: #595960;
`;

export const StyledCountItemUnitSpan = styled.span`
  margin-left: 1px;
  font-size: 12px;
  color: #595960;

  &::before {
    position: absolute;
    bottom: 4px;
    display: block;
    width: 100%;
    height: 1px;
    content: '';
    background-color: transparent;
  }

  ${StyledCountLink}:hover &::before {
    background-color: #949499;
  }
`;

export const StyledCountItemFrame = styled.p`
  margin-top: -12px;
  line-height: 1.3;
`;

export const StyledCountItemFrameSpan = styled.span`
  position: relative;
  display: inline-block;
  font-size: 12px;
  color: #595960;

  &::after {
    position: absolute;
    bottom: -1px;
    display: block;
    width: 100%;
    height: 1px;
    content: '';
    background-color: transparent;
  }

  ${StyledCountLink}:hover &::after {
    background-color: #949499;
  }
`;
