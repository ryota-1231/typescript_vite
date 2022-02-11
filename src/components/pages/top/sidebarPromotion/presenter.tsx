import { PROMOTION_STORE } from '../../../../utils/sidebarContents';

import {
  StyledH2Component,
  StyledPromotionInfo,
  StyledPromotionLink,
  StyledPromotionImageWrapper,
  StyledPromotionList,
  StyledPromotionInfoName,
  StyledPromotionInfoAreaGenre,
  StyledPromotionInfoComment,
} from './style';

const Presenter = () => (
  <section css="margin-top: 50px;">
    <StyledH2Component>[PR] 今月のお店</StyledH2Component>
    <ul>
      {PROMOTION_STORE.map((store) => (
        <StyledPromotionList key={store.id}>
          <StyledPromotionLink href={store.link} target="_blank">
            <StyledPromotionImageWrapper>
              <img
                src={store.imageSrc}
                alt={store.name}
                width="60"
                height="60"
              />
            </StyledPromotionImageWrapper>
            <StyledPromotionInfo>
              <StyledPromotionInfoName>{store.name}</StyledPromotionInfoName>
              <StyledPromotionInfoAreaGenre>
                {store.areaGenre}
              </StyledPromotionInfoAreaGenre>
              <StyledPromotionInfoComment>
                {store.comment}
              </StyledPromotionInfoComment>
            </StyledPromotionInfo>
          </StyledPromotionLink>
        </StyledPromotionList>
      ))}
    </ul>
  </section>
);

export default Presenter;
