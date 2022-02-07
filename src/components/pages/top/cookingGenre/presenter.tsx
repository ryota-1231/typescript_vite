import {
  PRIMARY_COOKING_GENRE,
  SUB_COOKING_GENRE,
} from '../../../../utils/cookingGenre';
import H1 from '../../../uiParts/h1Component/style';
import ListComponent from '../../../uiParts/listComponent';
import ListPhotoComponent from '../../../uiParts/listPhotoComponent';

import { StyledMoreLink, StyledPhotoUl } from './style';

const Presenter = () => (
  <section css="margin-top: 30px">
    <H1>料理ジャンルから探す</H1>
    <div css="margin-top: 20px">
      <StyledPhotoUl>
        {PRIMARY_COOKING_GENRE.map((genre) => (
          <ListPhotoComponent
            key={genre.id}
            text={genre.name}
            imageSrc={genre.imageSrc}
            link={genre.link}
            number={genre.number}
          />
        ))}
      </StyledPhotoUl>
      <ul css="margin-top: 13px;">
        {SUB_COOKING_GENRE.flatMap((genre) =>
          genre.primary ? (
            ''
          ) : (
            <ListComponent key={genre.id} text={genre.name} link={genre.link} />
          ),
        )}
      </ul>
      <StyledMoreLink>
        <a href="/">ジャンル一覧へ</a>
      </StyledMoreLink>
    </div>
  </section>
);

export default Presenter;
