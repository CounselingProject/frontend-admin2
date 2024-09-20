import { GroupButton } from '@/commons/components/buttons/GroupButton';
import { StyledInput } from '@/commons/components/inputs/StyledInput';
import React, { useState,useEffect,useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import { ClassicEditor, Bold, Essentials, Italic, Mention, Paragraph, Undo ,Image, ImageInsert} from 'ckeditor5';

import 'ckeditor5/ckeditor5.css';

const FormBox = styled.form`
  dl {
    display: flex;
    align-items: center;
    width: 500px;

    dt {
      width: 210px;
    }

    dd {
      flex-grow: 1;
    }
  }
`;

const GroupRegisterForm = ({ form, onSubmit, onChange }) => {
  const { t } = useTranslation();
  const [mounted, setMounted] = useState(false);
  const [editor, setEditor] = useState(null);
  useEffect(() => {
    setMounted(true);

    return () => {
      setMounted(false);
    };
  }, []);

  // 이미지 에디터 첨부
  const insertImageCallback = useCallback(
    (url) => {
      editor.execute('insertImage', { source: url });
    },
    [editor]
  );


  return (
    <FormBox autoComplete="off" onSubmit={onSubmit}>
      <dl>
        <dt>{t('집단상담 프로그램번호')}</dt>
        <dd>
          <StyledInput
            type="text"
            name="gno"
            value={form?.gno}
            onChange={onChange}
          />
        </dd>
      </dl>
      <dl>
        <dt>{t('집단상담 프로그램명')}</dt>
        <dd>
          <StyledInput
            type="text"
            name="gname"
            value={form?.gname}
            onChange={onChange}
          />
        </dd>
      </dl>
      <dl>
        <dt>{t('집단상담 프로그램 설명')}</dt>
        <dd>
        <CKEditor
			editor={ ClassicEditor }
			config={ {
				toolbar: {
					items: [ 'undo', 'redo', '|', 'bold', 'italic' ],
				},
				plugins: [
					Bold, Essentials, Italic, Mention, Paragraph,  Undo , Image,ImageInsert
				],
				mention: {
				},
				
			} }
      data={form?.gdes}
      onReady={(editor) => setEditor(editor)}
      onChange={(_, editor) => {
        onChange({
          target: { name: 'content', value: editor.getData() },
        });
      }}
		/>
        </dd>
      </dl>

      <dl>
        <dt>{t('상담사명')}</dt>
        <dd>
          <StyledInput
            type="text"
            name="cname"
            value={form?.cname}
            onChange={onChange}
          />
        </dd>
      </dl>
      <dl>
        <dt>{t('상담사 이메일')}</dt>
        <dd>
          <StyledInput
            type="text"
            name="cemail"
            value={form?.cemail}
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
            value={form?.sdate}
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
            value={form?.edate}
            onChange={onChange}
          />
        </dd>
      </dl>
      <dl>
        <dt>{t('상담일시')}</dt>
        <dd>
          <StyledInput
            type="text"
            name="date"
            value={form.date}
            onChange={onChange}
          />
        </dd>
      </dl>
      <dl>
        <dt>{t('인원')}</dt>
        <dd>
          <StyledInput type="text" name="" onChange={onChange} />
        </dd>
      </dl>
      <dl>
        <dt>{t('파일업로드')}</dt>
        <dd>
          <StyledInput type="file" name="file" onChange={onChange} />
        </dd>
      </dl>
      <GroupButton type="submit">등록</GroupButton>
    </FormBox>
  );
};

export default React.memo(GroupRegisterForm);
