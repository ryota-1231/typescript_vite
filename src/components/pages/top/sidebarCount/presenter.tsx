import {
  StyledCountWrapper,
  StyledCountItem,
  StyledCountItemSpan,
  StyledCountItemUnitSpan,
  StyledCountItemFrame,
  StyledCountItemFrameSpan,
  StyledCountLink,
} from './style';

const Presenter = () => (
  <StyledCountWrapper>
    <StyledCountItem>
      <StyledCountLink
        href="https://tabelog.com/sitemap/"
        className="store_count"
      >
        <StyledCountItemSpan>
          81
          <StyledCountItemUnitSpan>万</StyledCountItemUnitSpan>
        </StyledCountItemSpan>
        <StyledCountItemFrame>
          <StyledCountItemFrameSpan>店舗</StyledCountItemFrameSpan>
        </StyledCountItemFrame>
      </StyledCountLink>
    </StyledCountItem>
    <StyledCountItem>
      <p>
        4,438<StyledCountItemUnitSpan>万</StyledCountItemUnitSpan>
      </p>
      <StyledCountItemFrame>
        <StyledCountItemFrameSpan>口コミ</StyledCountItemFrameSpan>
      </StyledCountItemFrame>
    </StyledCountItem>
    <StyledCountItem>
      <p>
        10,719<StyledCountItemUnitSpan>万</StyledCountItemUnitSpan>
      </p>
      <StyledCountItemFrame>
        <StyledCountItemFrameSpan>写真</StyledCountItemFrameSpan>
      </StyledCountItemFrame>
    </StyledCountItem>
  </StyledCountWrapper>
);
export default Presenter;
