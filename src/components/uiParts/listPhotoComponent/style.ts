import styled from 'styled-components/macro';

export const List = styled.li`
  position: relative;
  max-width: 150px;
  width: 16%;
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
  display: block;
  position: relative;
  width: 100%;
  height: 100%;
  background-image: linear-gradient(
    to top,
    rgba(0, 0, 0, 0.4),
    rgba(7, 7, 7, 0.3),
    rgba(82, 82, 82, 0) 97%,
    rgba(84, 84, 84, 0)
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
  padding: 0 4%;
  width: 100%;
  box-sizing: border-box;
  color: #fff;
  text-align: center;
  line-height: 1.2;
`;

export const StyledPhotoListSubject = styled.p`
  font-size: 17px;
  font-weight: bold;
  letter-spacing: 0.06vw;
  line-height: 1.5;
`;

export const StyledPhotoListCount = styled.p`
  font-size: 12.8px;
  letter-spacing: 0.04vw;
  font-weight: bold;
  > span {
    font-size: 12px;
    font-weight: normal;
  }
`;
