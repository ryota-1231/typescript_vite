import styled from 'styled-components/macro';

import ChatSpaceMessagePostView from './ChatSpaceMessagePost';

const MainContents = styled.div`
  height: 100vh;
  width: calc(100vw - 200px);
  position: relative;
`;
const MessageDisplayContents = styled.div`
  background-color: #fff;
  height: calc(100vh - 180px);
  width: 100%;
  margin: 0 auto;
  overflow: auto;
`;
const MessagePostContents = styled.div`
  height: 180px;
  width: 100%;
  position: absolute;
  bottom: 0;
`;

const ChatSpaceMessageView = () => (
  <div>
    <MainContents>
      <MessageDisplayContents>
        <div>message area</div>
        <div>message area</div>
        <div>message area</div>
        <div>message area</div>
        <div>message area</div>
        <div>message area</div>
        <div>message area</div>
        <div>message area</div>
        <div>message area</div>
        <div>message area</div>
        <div>message area</div>
        <div>message area</div>
        <div>message area</div>
        <div>message area</div>
        <div>message area</div>
        <div>message area</div>
        <div>message area</div>
        <div>message area</div>
        <div>message area</div>
        <div>message area</div>
        <div>message area</div>
        <div>message area</div>
        <div>message area</div>
        <div>message area</div>
        <div>message area</div>
        <div>message area</div>
        <div>message area</div>
        <div>message area</div>
        <div>message area</div>
        <div>message area</div>
        <div>message area</div>
        <div>message area</div>
        <div>message area</div>
        <div>message area</div>
        <div>message iiiiiiii area</div>
      </MessageDisplayContents>
      <MessagePostContents>
        <ChatSpaceMessagePostView />
      </MessagePostContents>
    </MainContents>
  </div>
);

export default ChatSpaceMessageView;
