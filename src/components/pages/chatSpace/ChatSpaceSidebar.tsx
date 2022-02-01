import { Link } from 'react-router-dom';
import styled from 'styled-components/macro';

//
import Size from '../../../styles/const/Size';

const UserIcon = styled.div`
  height: 100px;
  text-align: center;
  border-bottom: 1px solid #fff;
  color: #fff;
  font-size: ${Size.FONT.M};
  font-weight: 600;
`;
const Channel = styled.div`
  width: 100%;
  color: #fff;
`;
const ChannelRegister = styled.div`
  width: 100%;
  color: #fff;
`;

const ChatSpaceSidebar = () => (
  <div css="height: 100vh;">
    <div css="padding-top: 8px;">
      <UserIcon>Chat Space ユーザーアイコン</UserIcon>
      <div>
        <Channel>チャンネル１</Channel>
        <Channel>チャンネル2</Channel>
        <Channel>チャンネル3</Channel>
      </div>
      <ChannelRegister>
        <Link to="/user/group">＋チャンネル登録</Link>
      </ChannelRegister>
    </div>
  </div>
);

export default ChatSpaceSidebar;
