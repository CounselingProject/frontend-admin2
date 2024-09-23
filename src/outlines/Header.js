import React, { useCallback } from 'react';
import styled from 'styled-components';
import cookies from 'react-cookies';
import { useTranslation } from 'react-i18next';
import { getCommonStates } from '../commons/contexts/CommonContext';
import { getUserContext } from '@/commons/contexts/UserInfoContext';

const HeaderBox = styled.header`
  .site-top {
    background: ${({ theme }) => theme.colors.white};
    height: 80px; /* 헤더 높이를 늘림 */

    div {
      display: flex;
      align-items: center; /* 수직 정렬 */
      justify-content: space-between; /* 공간 분배 */
      padding: 0 20px;

      img {
        height: 60px; /* 이미지 높이 조정 */
      }

      a {
        display: inline-block;
        line-height: 34px;
        margin-left: 10px;
        font-size: ${({ theme }) => theme.fontSizes.normal};

        &.on {
          color: ${({ theme }) => theme.colors.primary};
        }
      }
    }
  }
`;

const Header = () => {
  const { t } = useTranslation();
  const { showHeader } = getCommonStates();
  const {
    states: { isLogin, userInfo },
    actions: { setIsLogin, setIsAdmin, setUserInfo },
  } = getUserContext();

  const onLogout = useCallback(() => {
    setIsLogin(false);
    setIsAdmin(false);
    setUserInfo(null);
    cookies.remove('token', { path: '/' });
  }, [setIsLogin, setIsAdmin, setUserInfo]);

  return (
    showHeader && (
      <HeaderBox>
        <section className="site-top">
          <div className="layout-width">
            <img src="/path/to/your/logo.png" alt="충청대학교 로고" />{' '}
            {/* 로고 이미지 추가 */}
            {isLogin ? (
              <>
                <span>
                  {userInfo?.userName}({userInfo?.email}){t('님_로그인')}
                </span>
                <span onClick={onLogout}>{t('로그아웃')}</span>
              </>
            ) : (
              <>
                <a href="/member/join">{t('회원가입')}</a>
                <a href="/member/login">{t('로그인')}</a>
              </>
            )}
          </div>
        </section>
      </HeaderBox>
    )
  );
};

export default React.memo(Header);
