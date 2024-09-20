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
      <dt>{t('집단상담프로그램명')}</dt>
      <dd>
      <StyledInput>

      </StyledInput>
      </dd>
    </dl>

  </FormBox>;
};

export default React.memo(GroupRegisterForm);
