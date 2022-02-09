import 'swiper/css';
import { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperButtonComponent from '../swiperButtonComponent';
import {
  StyledSlideAreaSpan,
  StyledSlideGenreSpan,
  StyledSlideImage,
  StyledSlideImageWrapper,
  StyledSlideRating,
  StyledSlideRatingStar,
  StyledSlideRatingValue,
  StyledSlideSpan,
  StyledSlideText,
} from './style';

type DataType = {
  id: number;
  link: string;
  imageSrc: string;
  name: string;
};

type ClassNameType = {
  className?: 'is_gold' | 'is_silver' | 'is_bronze' | undefined;
};

type PropsType = ClassNameType & {
  data: DataType[];
  componentType: 'award' | 'hyakumeiten';
};

/**
 * AwardのSwiperSlideコンポーネント
 * @param data
 * @param className
 */
const JSXSwiperSlideAward = (data: DataType[], className: string) =>
  data.map((value) => (
    <SwiperSlide key={value.id}>
      <a css={'display: block;'} href={value.link} rel="noopener">
        <StyledSlideImageWrapper>
          <StyledSlideImage src={value.imageSrc} alt={value.name} />
          <StyledSlideSpan className={className}>
            <i>{className}</i>
          </StyledSlideSpan>
        </StyledSlideImageWrapper>
        <StyledSlideText>
          <span>{value.name}</span>
        </StyledSlideText>
        <p>
          {/* TODO:DB実装後修正 */}
          <StyledSlideAreaSpan>東京都</StyledSlideAreaSpan>
          <StyledSlideGenreSpan>中華料理</StyledSlideGenreSpan>
        </p>
        <StyledSlideRating>
          <StyledSlideRatingStar />
          {/* TODO:DB実装後修正 */}
          <StyledSlideRatingValue>4.5</StyledSlideRatingValue>
        </StyledSlideRating>
      </a>
    </SwiperSlide>
  ));

/**
 * 百名店のSwiperSlideコンポーネント
 * @param data
 */
const JSXSwiperSlideHyakumeiten = (data: DataType[]) =>
  data.map((value) => (
    <SwiperSlide key={value.id}>
      <a css={'display: block;'} href={value.link} rel="noopener">
        <StyledSlideImageWrapper>
          <StyledSlideImage src={value.imageSrc} alt={value.name} />
        </StyledSlideImageWrapper>
        <StyledSlideText>
          <span>{value.name}</span>
        </StyledSlideText>
      </a>
    </SwiperSlide>
  ));

const Presenter = ({ componentType, data, className }: PropsType) => (
  <div css="position: relative;">
    <Swiper
      spaceBetween={20}
      navigation={{
        prevEl: `.swiper_${componentType}_prev`,
        nextEl: `.swiper_${componentType}_next`,
      }}
      modules={[Navigation]}
      slidesPerView={6}
      slidesPerGroup={6}
    >
      {componentType === 'award'
        ? JSXSwiperSlideAward(data, className as string)
        : JSXSwiperSlideHyakumeiten(data)}
    </Swiper>
    <SwiperButtonComponent
      css={'top: 31%'}
      buttonType={'prevButton'}
      className={`swiper_${componentType}_prev`}
    />
    <SwiperButtonComponent
      css={'top: 31%'}
      buttonType={'nextButton'}
      className={`swiper_${componentType}_next`}
    />
  </div>
);

export default Presenter;
