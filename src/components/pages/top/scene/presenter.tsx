

import { PRIMARY_SCENE, SUB_SCENE } from '../../../../utils/scene';
import H1 from '../../../uiParts/h1Component/style';
import ListComponent from '../../../uiParts/listComponent';
import ListPhotoComponent from '../../../uiParts/listPhotoComponent';

import StyledPhotoUl from './style';

const Presenter = () => (
  <section css="margin-top: 30px">
    <H1>利用シーンから探す</H1>
    <div css="margin-top: 20px">
      <StyledPhotoUl>
        {PRIMARY_SCENE.map((genre) => (
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
        {SUB_SCENE.map((genre) => (
          <ListComponent key={genre.id} text={genre.name} link={genre.link} />
        ))}
      </ul>
    </div>
  </section>
);

export default Presenter;
