import { RECOMMENDED_CONTENTS } from '../../../../utils/sidebarContents';
import H2Component from '../../../uiParts/h2Component';

import {
  StyledRecommendedLink,
  StyledRecommendedList,
  StyledRecommendedImage,
  StyledRecommendedText,
} from './style';

const Presenter = () => (
  <section css="margin-top: 50px;">
    <H2Component css="margin-bottom: 20px;">
      食べログおすすめコンテンツ
    </H2Component>
    <ul>
      {RECOMMENDED_CONTENTS.map((content) => (
        <StyledRecommendedList key={content.id}>
          <StyledRecommendedLink href={content.link} target="_blank">
            <div css="padding: 0 6% 0 5px;">
              <StyledRecommendedImage
                imagestyle={content.imagestyle}
                imageSrc={content.imageSrc}
              >
                {content.title}
              </StyledRecommendedImage>
            </div>
            <StyledRecommendedText>{content.text}</StyledRecommendedText>
          </StyledRecommendedLink>
        </StyledRecommendedList>
      ))}
    </ul>
  </section>
);

export default Presenter;
