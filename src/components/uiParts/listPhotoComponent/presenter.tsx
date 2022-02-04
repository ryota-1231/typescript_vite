import {
  Link,
  List,
  StyledImageWrapper,
  StyledPhotoListCount,
  StyledPhotoListSubject,
  StyledPhotoListWrapper,
} from './style';

type PropsType = {
  text: string;
  imageSrc: string;
  link: string;
  number: number;
  className?: string;
};

/**
 * リスト写真コンポーネント
 * @param text <テキスト>
 * @param imageSrc <imgタグのsrc>
 * @param link <aタグlink>
 * @param number <件数>
 * @param className <null許可/SC拡張用>
 */
const Presenter = (props: PropsType) => {
  const { text, imageSrc, link, number, className } = props;
  return (
    <List className={className}>
      <StyledImageWrapper>
        <img src={imageSrc} alt={text} css="width: 100%" />
      </StyledImageWrapper>
      <Link href={link}>
        <StyledPhotoListWrapper>
          <StyledPhotoListSubject>{text}</StyledPhotoListSubject>
          <StyledPhotoListCount>
            {number.toLocaleString()}
            <span>件</span>
          </StyledPhotoListCount>
        </StyledPhotoListWrapper>
      </Link>
    </List>
  );
};

Presenter.defaultProps = {
  className: null,
};

export default Presenter;
