import React from 'react';
import { useTranslation } from 'react-i18next';
import Image from 'next/image';
import group1 from '../image/group1.jpg';
import styled from 'styled-components';
import { ImageBgBox } from '@/commons/components/ImageBox';

const Wrapper = styled.ul`
  width: 100%;
  height: 100px;
  padding: 20px;
  background-color: #f5f5f5; /* 배경을 핑크색으로 */
  margin: 0 auto;
`;

const GroupListItem = ({ items, className }) => {
  const { t } = useTranslation();
  const {
    cNo,
    counselingName,
    reservationSdate,
    reservationEdate,
    counselingLimit,
  } = items;

  return (
    <div>
      <ul>
        <li className={className}>
          <div className="img-box">
            <ImageBgBox
              src={group1}
              alt="그룹이미지"
              width="100%"
              height="200px"
            />
          </div>
          <div className="info-box">
            <dl className="cNo">
              <dt>{t('집단상담프로그램 번호')}</dt>
              <dd>{cNo}</dd>
            </dl>
            <dl className="counselingName">
              <dt>{t('집단상담프로그램명')}</dt>
              <dd>{counselingName}</dd>
            </dl>
            <dl className="reservationSdate">
              <dt>{t('신청시작일')}</dt>
              <dd>{reservationSdate}</dd>
            </dl>
            <dl className="reservationEdate">
              <dt>{t('신청종료일')}</dt>
              <dd>{reservationEdate}</dd>
            </dl>
            <dl className="counselingLimit">
              <dt>{t('인원수')}</dt>
              <dd>{counselingLimit}</dd>
            </dl>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default React.memo(GroupListItem);
