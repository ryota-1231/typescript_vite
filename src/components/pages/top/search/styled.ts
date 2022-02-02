import styled from 'styled-components/macro';

import Size from '../../../../styles/const/Size';

export const StyledWrapper = styled.div`
  position: absolute;
  right: 0;
  bottom: -55px;
  left: 0;
  padding: 0 70px;
  width: 100%;
  min-width: 1260px;
  max-width: 1540px;
`;

export const StyledContents = styled.div`
  height: 50px;
  padding: 30px 3.3vw;
  border: solid 1px #e1e1e1;
  border-radius: 4px;
  max-width: 1400px;
  box-sizing: border-box;
  box-shadow: 1px 1px 3px 0 rgb(0 0 0 / 10%);
  background-color: #fff;
  display: table;
  margin: 0 auto;
  width: 100%;
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
  vertical-align: middle;
  width: 84%;
`;

export const StyledForm = styled.form`
  height: 52px;
  display: block;
  border: 1px solid #d6ceb4;
  border-radius: 3px;
`;

const Contents = styled.div`
  display: inline-block;
  position: relative;
  height: 50px;
  vertical-align: top;
  &::after {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    height: 50px;
    width: 1px;
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
  height: 50px;
  padding-left: 8px;
  font-size: 12px;
  width: 100%;
  line-height: 46px;
  border-bottom: 2px solid transparent;
  &:focus {
    border-bottom: solid 2px #ff9600;
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
  border-top-right-radius: 2px;
  border-bottom-right-radius: 2px;
  background-image: linear-gradient(112deg, #fa0, #f28c00);
  > i {
    display: block;
    color: #fff;
    font-weight: bold;
    font-size: ${Size.FONT.S}px;
    text-indent: 0.3em;
    text-align: center;
    letter-spacing: 0.3em;
    font-style: normal;
  }
`;
