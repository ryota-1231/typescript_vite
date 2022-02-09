import styled from 'styled-components/macro';

export const StyledCountWrapper = styled.div`
  display: flex;
  margin-bottom: 23px;
  flex-wrap: wrap;
  justify-content: center;
`;

export const StyledCountItem = styled.div`
  position: relative;
  padding: 0 15px;
  color: #595960;
  font-family: Arial;
  font-weight: 500;
  font-size: 24px;
  text-align: center;
  line-height: 1.4;
  &:first-child {
    padding-left: 0;
    &::after {
      position: absolute;
      top: 50%;
      right: 0;
      width: 1px;
      height: 85%;
      background-color: #f4f4f4;
      content: '';
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
      background-color: #f4f4f4;
      content: '';
      transform: translateY(-50%);
    }
  }
`;

export const StyledCountItemSpan = styled.span`
  display: block;
  position: relative;
  color: #595960;
  font-size: 24px;
`;

export const StyledCountItemUnitSpan = styled.span`
  margin-left: 1px;
  color: #595960;
  font-size: 12px;
  &::before {
    display: block;
    position: absolute;
    bottom: 4px;
    width: 100%;
    height: 1px;
    content: '';
    background-color: transparent;
  }
  .sidebar_store_count_link:hover &::before {
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
  color: #595960;
  font-size: 12px;
  &::after {
    display: block;
    position: absolute;
    bottom: -1px;
    width: 100%;
    height: 1px;
    content: '';
    background-color: transparent;
  }
  .sidebar_store_count_link:hover &::after {
    background-color: #949499;
  }
`;
