import {
  StyledCountWrapper,
  StyledCountItem,
  StyledCountItemSpan,
  StyledCountItemUnitSpan,
  StyledCountItemFrame,
  StyledCountItemFrameSpan,
} from './style';

const Presenter = () => (
  <StyledCountWrapper>
    <StyledCountItem>
      <a
        href="https://tabelog.com/sitemap/"
        className="sidebar_store_count_link"
      >
        <StyledCountItemSpan>
          81
          <StyledCountItemUnitSpan>万</StyledCountItemUnitSpan>
        </StyledCountItemSpan>
        <StyledCountItemFrame>
          <StyledCountItemFrameSpan>店舗</StyledCountItemFrameSpan>
        </StyledCountItemFrame>
      </a>
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
