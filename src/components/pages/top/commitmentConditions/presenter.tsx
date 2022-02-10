import {
  PRIMARY_COMMITMENT_CONDITIONS,
  SUB_COMMITMENT_CONDITIONS,
} from '../../../../utils/commitmentConditions';
import H1Component from '../../../uiParts/h1Component';
import ListComponent from '../../../uiParts/listComponent';
import ListPhotoComponent from '../../../uiParts/listPhotoComponent';

import StyledPhotoUl from './style';

const Presenter = () => (
  <section css="margin-top: 30px">
    <H1Component>こだわり条件から探す</H1Component>
    <div css="margin-top: 20px">
      <StyledPhotoUl>
        {PRIMARY_COMMITMENT_CONDITIONS.map((genre) => (
          <ListPhotoComponent
            key={genre.id}
            text={genre.name}
            imageSrc={genre.imageSrc}
            link={genre.link}
            number={genre.number}
            fontsize="15.8px"
          />
        ))}
      </StyledPhotoUl>
      <ul css="margin-top: 13px;">
        {SUB_COMMITMENT_CONDITIONS.map((genre) => (
          <ListComponent key={genre.id} text={genre.name} link={genre.link} />
        ))}
      </ul>
    </div>
  </section>
);

export default Presenter;
