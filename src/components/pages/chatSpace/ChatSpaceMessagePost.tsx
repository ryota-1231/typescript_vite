import styled from 'styled-components/macro';

import Color from '../../../styles/const/Color';
import Size from '../../../styles/const/Size';

const Wrapper = styled.div`
  height: 100%;
  width: 100%;
`;
const MessagePostContents = styled.div`
  height: 100%;
  padding: 18px;
`;
const MessageTextarea = styled.textarea`
  display: block;
  font-size: ${Size.FONT.M};
  height: calc(100% - 40px);
  width: 100%;
  padding: 4px 8px;
  border: 1px solid ${Color.BORDER};
  border-top-left-radius: ${Size.BORDER_RADIUS};
  border-top-right-radius: ${Size.BORDER_RADIUS};
`;
const MessageTools = styled.div`
  background-color: ${Color.BORDER};
  height: 40px;
  border-bottom-left-radius: ${Size.BORDER_RADIUS};
  border-bottom-right-radius: ${Size.BORDER_RADIUS};
`;
const MessageSubmitButton = styled.input``;

const ChatSpaceMessagePost = () => (
  <Wrapper>
    <MessagePostContents>
      <MessageTextarea />
      <MessageTools>
        ファイルの添付
        <MessageSubmitButton type="submit" />
      </MessageTools>
    </MessagePostContents>
  </Wrapper>
);

export default ChatSpaceMessagePost;
