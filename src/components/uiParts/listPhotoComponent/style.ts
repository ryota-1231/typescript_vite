import styled from 'styled-components';

export const List = styled.li`
  position: relative;
  width: 16%;
  max-width: 150px;
  height: auto;

  &:hover {
    opacity: 0.8;
  }
`;

export const StyledImageWrapper = styled.p`
  position: absolute;
  top: 0;
  left: 0;
`;

export const Link = styled.a`
  position: relative;
  display: block;
  width: 100%;
  height: 100%;
  background-image: linear-gradient(
    to top,
    rgb(0 0 0 / 40%),
    rgb(7 7 7 / 30%),
    rgb(82 82 82 / 0%) 97%,
    rgb(84 84 84 / 0%)
  );

  &::before {
    display: block;
    padding-top: 100%;
    content: '';
  }
`;

export const StyledPhotoListWrapper = styled.div`
  position: absolute;
  bottom: 7%;
  box-sizing: border-box;
  width: 100%;
  padding: 0 4%;
  line-height: 1.2;
  color: #fff;
  text-align: center;
`;

export const StyledPhotoListSubject = styled.p<{ fontsize?: string }>`
  font-size: ${(props) => props.fontsize};
  font-weight: bold;
  line-height: 1.5;
  letter-spacing: 0.06vw;
`;

StyledPhotoListSubject.defaultProps = {
  fontsize: '17px',
};

export const StyledPhotoListCount = styled.p`
  font-size: 12.8px;
  font-weight: bold;
  letter-spacing: 0.04vw;

  > span {
    font-size: 12px;
    font-weight: normal;
  }
`;
