'use client';
import React from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import { StyledInput } from '@/commons/components/inputs/StyledInput';
import { GroupButton } from '@/commons/components/buttons/GroupButton';
import { IoIosRadioButtonOff, IoIosRadioButtonOn } from "react-icons/io";

const FormBox = styled.form`
  /* 스타일 추가 가능 */
`;

const RadioButtonContainer = styled.label`
  display: flex;
  align-items: center;
  margin-right: 15px;
  cursor: pointer;
  font-size: 16px;

  input {
    display: none; /* 원래 라디오 버튼은 숨김 */
  }

  svg {
    margin-right: 5px;
    color: #4A90E2; /* 선택된 색상 */
    transition: color 0.3s ease;
  }

  &:hover svg {
    color: #007BFF; /* 호버 시 색상 */
  }

  &.checked svg {
    color: #007BFF; /* 선택된 라디오 버튼 색상 */
  }
`;

const RadioButton = ({ id, name, value, checked, onChange, label }) => (
  <RadioButtonContainer className={checked ? 'checked' : ''}>
    {checked ? <IoIosRadioButtonOn /> : <IoIosRadioButtonOff />}
    <input
      type="radio"
      id={id}
      name={name}
      value={value}
      checked={checked}
      onChange={onChange}
    />
    {label}
  </RadioButtonContainer>
);

const RegisterForm = ({ form, errors, onSubmit, onChange }) => {
  const { t } = useTranslation();

  return (
    <FormBox onSubmit={onSubmit} autoComplete="off">
      <div className="error global">{errors.global && errors.global.map(err => <div key={err}>{err}</div>)}</div>
      <input type="hidden" name="gid" value={form.gid} />

      <h2>{t('기본 설정')}</h2>
      <table className="table_cols mb30">
        <tbody>
          <tr>
            <th>{t('사용여부')}</th>
            <td>
              <RadioButton
                id="active_true"
                name="active"
                value="true"
                checked={form.active === 'true'}
                onChange={onChange}
                label={t('사용')}
              />
              <RadioButton
                id="active_false"
                name="active"
                value="false"
                checked={form.active === 'false'}
                onChange={onChange}
                label={t('미사용')}
              />
            </td>
          </tr>
          <tr>
            <th>{t('게시판 ID')}</th>
            <td>
              <StyledInput type="text" name="bid" value={form.bid} onChange={onChange} />
              {errors.bid && <div className="error">{errors.bid}</div>}
            </td>
          </tr>
          <tr>
            <th>{t('게시판 이름')}</th>
            <td>
              <StyledInput type="text" name="bName" value={form.bName} onChange={onChange} />
              {errors.bName && <div className="error">{errors.bName}</div>}
            </td>
          </tr>
          <tr>
            <th>{t('진열가중치')}</th>
            <td>
              <StyledInput type="number" name="listOrder" value={form.listOrder} onChange={onChange} />
            </td>
          </tr>
          <tr>
            <th>{t('1페이지 게시글 수')}</th>
            <td>
              <StyledInput type="number" name="rowsPerPage" min="1" value={form.rowsPerPage} onChange={onChange} />
            </td>
          </tr>
          <tr>
            <th>{t('페이지 구간 갯수(PC)')}</th>
            <td>
              <StyledInput type="number" name="pageCountPc" min="1" value={form.pageCountPc} onChange={onChange} />
            </td>
          </tr>
          <tr>
            <th>{t('페이지 구간 갯수(Mo)')}</th>
            <td>
              <StyledInput type="number" name="pageCountMobile" min="1" value={form.pageCountMobile} onChange={onChange} />
            </td>
          </tr>
          <tr>
            <th>{t('답글 사용')}</th>
            <td>
              <RadioButton
                id="useReply_true"
                name="useReply"
                value="true"
                checked={form.useReply === 'true'}
                onChange={onChange}
                label={t('사용')}
              />
              <RadioButton
                id="useReply_false"
                name="useReply"
                value="false"
                checked={form.useReply === 'false'}
                onChange={onChange}
                label={t('미사용')}
              />
            </td>
          </tr>
          <tr>
            <th>{t('댓글 사용')}</th>
            <td>
              <RadioButton
                id="useComment_true"
                name="useComment"
                value="true"
                checked={form.useComment === 'true'}
                onChange={onChange}
                label={t('사용')}
              />
              <RadioButton
                id="useComment_false"
                name="useComment"
                value="false"
                checked={form.useComment === 'false'}
                onChange={onChange}
                label={t('미사용')}
              />
            </td>
          </tr>
          <tr>
            <th>{t('에디터')}</th>
            <td>
              <RadioButton
                id="useEditor_true"
                name="useEditor"
                value="true"
                checked={form.useEditor === 'true'}
                onChange={onChange}
                label={t('사용')}
              />
              <RadioButton
                id="useEditor_false"
                name="useEditor"
                value="false"
                checked={form.useEditor === 'false'}
                onChange={onChange}
                label={t('미사용')}
              />
            </td>
          </tr>
          <tr>
            <th>{t('이미지 첨부')}</th>
            <td>
              <RadioButton
                id="useUploadImage_true"
                name="useUploadImage"
                value="true"
                checked={form.useUploadImage === 'true'}
                onChange={onChange}
                label={t('사용')}
              />
              <RadioButton
                id="useUploadImage_false"
                name="useUploadImage"
                value="false"
                checked={form.useUploadImage === 'false'}
                onChange={onChange}
                label={t('미사용')}
              />
            </td>
          </tr>
          <tr>
            <th>{t('파일 첨부')}</th>
            <td>
              <RadioButton
                id="useUploadFile_true"
                name="useUploadFile"
                value="true"
                checked={form.useUploadFile === 'true'}
                onChange={onChange}
                label={t('사용')}
              />
              <RadioButton
                id="useUploadFile_false"
                name="useUploadFile"
                value="false"
                checked={form.useUploadFile === 'false'}
                onChange={onChange}
                label={t('미사용')}
              />
            </td>
          </tr>
          <tr>
            <th>{t('글작성 후 이동')}</th>
            <td>
              <RadioButton
                id="locationAfterWriting_true"
                name="locationAfterWriting"
                value="true"
                checked={form.locationAfterWriting === 'true'}
                onChange={onChange}
                label={t('사용')}
              />
              <RadioButton
                id="locationAfterWriting_false"
                name="locationAfterWriting"
                value="false"
                checked={form.locationAfterWriting === 'false'}
                onChange={onChange}
                label={t('미사용')}
              />
            </td>
          </tr>
          <tr>
            <th>{t('글보기 하단 목록 노출')}</th>
            <td>
              <RadioButton
                id="showListBelowView_true"
                name="showListBelowView"
                value="true"
                checked={form.showListBelowView === 'true'}
                onChange={onChange}
                label={t('사용')}
              />
              <RadioButton
                id="showListBelowView_false"
                name="showListBelowView"
                value="false"
                checked={form.showListBelowView === 'false'}
                onChange={onChange}
                label={t('미사용')}
              />
            </td>
          </tr>
          <tr>
            <th>{t('스킨')}</th>
            <td>
              <RadioButton
                id="skin_true"
                name="skin"
                value="true"
                checked={form.skin === 'true'}
                onChange={onChange}
                label={t('사용')}
              />
              <RadioButton
                id="skin_false"
                name="skin"
                value="false"
                checked={form.skin === 'false'}
                onChange={onChange}
                label={t('미사용')}
              />
            </td>
          </tr>
        </tbody>
      </table>

      <h2>{t('게시판 분류')}</h2>
      <table className="table_cols mb30">
        <tbody>
          <tr>
            <th>{t('분류')}</th>
            <td>
              <textarea name="category" placeholder={t('여러 분류는 줄개행하여 입력')} value={form.category} onChange={onChange}></textarea>
            </td>
          </tr>
        </tbody>
      </table>

      <h2>{t('권한 설정')}</h2>
      {/* 권한 설정 필드 추가... */}

      <h2>{t('게시판 상단')}</h2>
      <table className="table_cols mb30">
        <tbody>
          <tr>
            <th>{t('내용')}</th>
            <td>
              <textarea name="htmlTop" value={form.htmlTop} onChange={onChange}></textarea>
              {/* 이미지 추가 버튼 추가... */}
            </td>
          </tr>
        </tbody>
      </table>

      <h2>{t('게시판 하단')}</h2>
      <table className="table_cols">
        <tbody>
          <tr>
            <th>{t('내용')}</th>
            <td>
              <textarea name="htmlBottom" value={form.htmlBottom} onChange={onChange}></textarea>
              {/* 이미지 추가 버튼 추가... */}
            </td>
          </tr>
        </tbody>
      </table>

      <GroupButton type="submit">{t('등록')}</GroupButton>
    </FormBox>
  );
};

export default React.memo(RegisterForm);
