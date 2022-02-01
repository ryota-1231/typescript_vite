import { Outlet } from 'react-router-dom';
import styled from 'styled-components/macro';

import Color from '../../../styles/const/Color';
import Size from '../../../styles/const/Size';

const Wrapper = styled.div`
  background-color: ${Color.SECONDLY};
  height: 100vh;
`;
const MainContents = styled.div`
  width: 60%;
  margin: 0 auto;
  padding-top: 24px;
`;
const Title = styled.p`
  font-size: ${Size.FONT.L};
  font-weight: bold;
  word-spacing: 2rem;
  text-align: center;
`;
const Content = styled.div`
  background-color: #fff;
  width: 100%;
  margin: 0 auto;
`;

const Presenter = () => (
  <Wrapper>
    <MainContents>
      <Title>Chat</Title>
      <Content>
        <Outlet />
      </Content>
    </MainContents>
  </Wrapper>
);

export default Presenter;
