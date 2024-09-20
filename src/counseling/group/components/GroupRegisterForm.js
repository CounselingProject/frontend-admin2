import { StyledInput } from '@/commons/components/inputs/StyledInput';
import React from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';

const FormBox = styled.form`
  dl {
    display: flex;
    align-items: center;

    dt {
      width: 120px;
    }

    dd {
      flex-grow: 1;
    }
  }

`;

const GroupRegisterForm = ({ onSubmit, }) => {
  const { t } = useTranslation();

  return <FormBox autoComplete="off" onSubmit={onSubmit}>
    <dl>
      <dt>{t('집단상담 프로그램번호')}</dt>
      <dd>
      <StyledInput
      type="text"
      name="no"
      onChange={onChange}
      />
      </dd>
    </dl>
    <dl>
      <dt>{t('집단상담 프로그램명')}</dt>
      <dd>
      <StyledInput
      type="text"
      name="name"
      onChange={onChange}
      />
      </dd>
    </dl>
    <dl>
      <dt>{t('집단상담 프로그램 설명')}</dt>
      <dd>
      <StyledInput
      type="text"
      name="des"
      onChange={onChange}
      />
      </dd>
    </dl>

    <dl>
      <dt>{t('상담사명')}</dt>
      <dd>
      <StyledInput
      type="text"
      name="cname"
      onChange={onChange}
      />
      </dd>
    </dl>
    <dl>
      <dt>{t('상담사 이메일')}</dt>
      <dd>
      <StyledInput
      type="text"
      name="email"
      onChange={onChange}
      />
      </dd>
    </dl>
    <dl>
      <dt>{t('집단상담 프로그램 신청 시작일')}</dt>
      <dd>
      <StyledInput
      type="text"
      name="sdate"
      onChange={onChange}
      />
      </dd>
    </dl>
    <dl>
      <dt>{t('집단상담 프로그램 신청 종료일')}</dt>
      <dd>
      <StyledInput
      type="text"
      name="edate"
      onChange={onChange}
      />
      </dd>
    </dl>


  </FormBox>;
};

export default React.memo(GroupRegisterForm);
