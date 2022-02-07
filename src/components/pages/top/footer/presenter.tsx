import {
  StyledCopyright,
  StyledNavigateLink,
  StyledNavigateList,
  StyledNavigateUl,
  StyledTabelogNavigateList,
  StyledTabelogNavigateUl,
  StyledWrapper,
} from './style';

const Presenter = () => (
  <StyledWrapper>
    <StyledTabelogNavigateUl>
      <StyledTabelogNavigateList>
        <StyledNavigateLink href="/matome/">
          <img
            src="src/assets/images/top/top_tabelog_matome.svg"
            width="150"
            height="21"
            alt="食べログまとめ"
          />
          <strong>グルメキュレーションサイト</strong>
        </StyledNavigateLink>
      </StyledTabelogNavigateList>
      <StyledTabelogNavigateList>
        <StyledNavigateLink href="https://magazine.tabelog.com/">
          <img
            src="src/assets/images/top/top_footer_tabelog_magazine.svg"
            width="77"
            height="24"
            alt="食べログ magazine"
          />
          <strong>毎日の外食が楽しくなるグルメ情報</strong>
        </StyledNavigateLink>
      </StyledTabelogNavigateList>
      <StyledTabelogNavigateList>
        <StyledNavigateLink href="https://tabelog.com/rvwrs/rvwr_ranking">
          <img
            src="src/assets/images/top/top_footer_reviewer_ranking.svg"
            width="158"
            height="24"
            alt="食べログ レビュアーランキング"
          />
          <strong>全国で活躍するレビュアー</strong>
        </StyledNavigateLink>
      </StyledTabelogNavigateList>
    </StyledTabelogNavigateUl>
    <StyledNavigateUl>
      <StyledNavigateList>
        <a href="http://user-help.tabelog.com">ヘルプ・お問い合わせ</a>
        <span>|</span>
      </StyledNavigateList>
      <StyledNavigateList>
        <a href="https://tabelog.com/help/beginner/">
          食べログの特長と便利な使い方
        </a>
        <span>|</span>
      </StyledNavigateList>
      <StyledNavigateList>
        <a href="https://tabelog.com/help/policy/">
          口コミ・ランキングに対する取り組み
        </a>
        <span>|</span>
      </StyledNavigateList>
      <StyledNavigateList>
        <a href="https://tabelog.com/help/faq_service/">FAQ</a>
        <span>|</span>
      </StyledNavigateList>
      <StyledNavigateList>
        <a href="https://owner.tabelog.com/owner_info/top?lid=ownerinfo_rsttop_footer">
          飲食店・飲食企業様向けサービスについて
        </a>
        <span>|</span>
      </StyledNavigateList>
      <StyledNavigateList>
        <a href="http://user-help.tabelog.com/advertisement">
          広告（メーカー・団体様等向け）について
        </a>
        <br />
      </StyledNavigateList>
      <StyledNavigateList>
        <a href="https://tabelog.com/support/inquiry?type=17">機能改善要望</a>
        <span>|</span>
      </StyledNavigateList>
      <StyledNavigateList>
        <a href="http://user-help.tabelog.com/review_guide">
          口コミガイドライン
        </a>
        <span>|</span>
      </StyledNavigateList>
      <StyledNavigateList>
        <a href="https://tabelog.com/rst/premium_service_guide?tid=ps_footer">
          プレミアムサービス
        </a>
        <span>|</span>
      </StyledNavigateList>
      <StyledNavigateList>
        <a href="https://tabelog.com/free_coupon">
          プレミアムサービス無料クーポン
        </a>
        <span>|</span>
      </StyledNavigateList>
      <StyledNavigateList>
        <a href="http://user-help.tabelog.com/rules">利用規約</a>
        <span>|</span>
      </StyledNavigateList>
      <StyledNavigateList>
        <a href="https://corporate.kakaku.com/privacy/">個人情報保護方針</a>
        <span>|</span>
      </StyledNavigateList>
      <StyledNavigateList>
        <a href="https://kakaku.com/info/recruit/index.html">採用情報</a>
        <span>|</span>
      </StyledNavigateList>
      <StyledNavigateList>
        <a href="https://corporate.kakaku.com/">企業情報</a>
        <br />
      </StyledNavigateList>
      <StyledNavigateList>
        <a href="/sitemap/">サイトマップ</a>
        <span>|</span>
      </StyledNavigateList>
      <StyledNavigateList>
        <a href="https://tabelog.com/keywords/">キーワード一覧</a>
      </StyledNavigateList>
    </StyledNavigateUl>
    <StyledCopyright>
      このサイトは株式会社カカクコム様の食べログの模倣サイトです。
    </StyledCopyright>
  </StyledWrapper>
);

export default Presenter;
