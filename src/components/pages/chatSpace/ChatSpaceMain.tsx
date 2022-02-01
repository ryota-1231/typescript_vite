import { Outlet } from 'react-router-dom';
import styled from 'styled-components/macro';
import Color from '../../../styles/const/Color';
import ChatSpaceSidebar from './ChatSpaceSidebar';

const Sidebar = styled.div`
  width: 200px;
  background-color: ${Color.PRIMARY};
`;

const ChatSpaceMain = () => (
  <div css="display: flex;">
    <Sidebar>
      <ChatSpaceSidebar />
    </Sidebar>
    <Outlet />
  </div>
);

export default ChatSpaceMain;
