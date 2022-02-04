import styled from 'styled-components/macro';

// TODO:実装開始次第styleファイルに移行
const StyledTopColumnSide = styled.div`
  margin-left: 5.2vw;
  width: 33vw;
  min-width: 270px;
  max-width: 340px;
  overflow: hidden;
  /* TODO: 仮設定 */
  background-color: red;
  height: 500px;
  /* END 仮設定 */
`;

const Presenter = () => <StyledTopColumnSide />;
export default Presenter;
