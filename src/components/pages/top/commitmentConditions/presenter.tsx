import {
  PRIMARY_COMMITMENT_CONDITIONS,
  SUB_COMMITMENT_CONDITIONS,
} from '../../../../utils/commitmentConditions';
import H1 from '../../../uiParts/h1Component/style';
import ListComponent from '../../../uiParts/listComponent';
import ListPhotoComponent from '../../../uiParts/listPhotoComponent';

import StyledPhotoUl from './style';

const Presenter = () => (
  <section css="margin-top: 30px">
    <H1>こだわり条件から探す</H1>
    <div css="margin-top: 20px">
      <StyledPhotoUl>
        {PRIMARY_COMMITMENT_CONDITIONS.map((genre) => (
          <ListPhotoComponent
            key={genre.id}
            text={genre.name}
            imageSrc={genre.imageSrc}
            link={genre.link}
            number={genre.number}
            fontSize="15.8px"
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
