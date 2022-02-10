import styled from 'styled-components/macro';

export const StyledNoticeList = styled.li`
  padding: 14px 0;
  border-bottom: 1px solid #e9e9e9;
`;

export const StyledNoticeSpan = styled.span`
  display: inline-block;
  min-width: 48px;
  padding: 3px 3px 2px;
  margin: 0;
  font-size: 10px;
  font-weight: normal;
  line-height: 1.2;
  color: #fff;
  text-align: center;
  text-decoration: none;
  vertical-align: middle;
  background-color: #bcb08a;
  border-radius: 2px;
`;

export const StyledNoticeDateSpan = styled.span`
  display: inline-block;
  margin-left: 4px;
  font-size: 13px;
  font-weight: 600;
  color: #13131e;
  vertical-align: middle;
`;

export const StyledNoticeLink = styled.a`
  display: block;
  margin-top: 5px;
  font-size: 12px;
  font-weight: bold;
  line-height: 1.5;

  &:hover {
    color: #ff9600;
    text-decoration: underline;
  }
`;
