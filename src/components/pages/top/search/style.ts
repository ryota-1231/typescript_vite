import styled from 'styled-components/macro';

import Color from '../../../../styles/const/Color';
import Size from '../../../../styles/const/Size';

export const StyledWrapper = styled.div`
  position: absolute;
  right: 0;
  bottom: -55px;
  left: 0;
  width: 100%;
  min-width: 1260px;
  max-width: 1540px;
  padding: 0 70px;
`;

export const StyledContents = styled.div`
  box-sizing: border-box;
  display: table;
  width: 100%;
  max-width: 1400px;
  height: 50px;
  padding: 30px 3.3vw;
  margin: 0 auto;
  background-color: #fff;
  border: solid 1px #e1e1e1;
  border-radius: 4px;
  box-shadow: 1px 1px 3px 0 rgb(0 0 0 / 10%);
`;

export const StyledTitle = styled.div`
  display: table-cell;
  text-align: left;
  word-break: break-all;
  word-wrap: break-word;
  vertical-align: middle;
`;

export const StyledSearch = styled.div`
  display: table-cell;
  width: 84%;
  vertical-align: middle;
`;

export const StyledForm = styled.form`
  display: block;
  height: 52px;
  border: 1px solid #d6ceb4;
  border-radius: 3px;
`;

const Contents = styled.div`
  position: relative;
  display: inline-block;
  height: 50px;
  vertical-align: top;

  &::after {
    position: absolute;
    top: 0;
    right: 0;
    width: 1px;
    height: 50px;
    content: '';
    background-color: #eeece4;
  }
`;

export const StyledAreaContents = styled(Contents)`
  width: 28%;
`;

export const StyledKeywordContents = styled(Contents)`
  width: 31%;
`;

export const StyledInput = styled.input`
  width: 100%;
  height: 50px;
  padding-left: 8px;
  font-size: 12px;
  line-height: 46px;
  border-bottom: 2px solid transparent;

  &:focus {
    border-bottom: solid 2px ${Color.HOVER};
  }
`;

export const StyledAreaInput = styled(StyledInput)`
  border-top-left-radius: 3px;
  border-bottom-left-radius: 3px;
`;

export const StyledDateContents = styled.div`
  display: inline-block;
  width: 32%;
  border-right: 1px solid #eeece4;
`;

export const StyledFormButton = styled.button`
  width: 9%;
  height: 50px;
  background-image: linear-gradient(112deg, #fa0, #f28c00);
  border-top-right-radius: 2px;
  border-bottom-right-radius: 2px;

  > i {
    display: block;
    font-size: ${Size.FONT.S}px;
    font-style: normal;
    font-weight: bold;
    color: #fff;
    text-align: center;
    text-indent: 0.3em;
    letter-spacing: 0.3em;
  }

  &:hover {
    cursor: pointer;
  }
`;
