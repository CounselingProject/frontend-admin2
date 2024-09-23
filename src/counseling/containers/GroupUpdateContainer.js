'use client';
import React, {
  useLayoutEffect,
  useState,
  useCallback,
  useEffect,
} from 'react';
import { getCommonActions } from '@/commons/contexts/CommonContext';
import GroupRegisterForm from '../group/components/GroupRegisterForm';
import SubMenus from '@/outlines/SubMenus';
import { regist, update } from '../group/apis/apiGroup';


const GroupUpdateContainer = ({ params }) => {
  const { setMenuCode, setSubMenuCode } = getCommonActions();

  const { cNo } = params;

  useLayoutEffect(() => {
    setMenuCode('counseling');
    setSubMenuCode(cNo ? 'update' : 'register');
  }, [setMenuCode, setSubMenuCode, cNo]);

  const [form, setForm] = useState({
    gid: '' + Date.now(),
  });
  const [errors, setErrors] = useState({});

  const onChange = useCallback((e) => {
    setForm((form) => ({ ...form, [e.target.name]: e.target.value }));
  }, []);

  const onSubmit = useCallback(
    (e) => {
      e.preventDefault();

      // 유효성 검사
      const requiredFields = {
        gno: t('프로그램_번호를_입력하세요'),
        gname: t('프로그램명을_입력해주세요'),
        gdes: t('설명을_입력하세요'),
      };

      const _errors = {};
      let hasErrors = false;
      for (const [field, message] of Object.entries(requiredFields)) {
        if (!form[field]?.trim()) {
          _errors[field] = _errors[field] ?? [];
          _errors[field].push(message);
          hasErrors = true;
        }
      }
      /* 유효성 검사 끝 */

      // 처리
      (async () => {
        try {
          const { locationAfterWriting, cNo } = GroupForm;
          const res =
            getSubMenus === 'register'
              ? await regist(cNo, form)
              : await update(cNo, form);

          let url =
            locationAfterWriting === 'list'
              ? `/counseling/`
              : `/counseling/info/${cNo}`;
          navigate(url, { replace: true });
        } catch (err) {
          setErrors(err.message);
        }
      })();

      // 후속 처리
    },
    [form, GroupForm, cNo,navigate],
  );

  return (
    <GroupRegisterForm
      form={form}
      GroupForm={GroupForm}
      errors={errors}
      onChange={onChange}
      onSubmit={onSubmit}
    />
  );
};

export default React.memo(GroupUpdateContainer);
