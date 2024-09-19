'use client';
import React, { useLayoutEffect } from 'react';
import { getCommonActions } from '@/commons/contexts/CommonContext';
const GroupListContainer = () => {
  const { setMenuCode, setSubMenuCode } = getCommonActions();
  useLayoutEffect(() => {
    setMenuCode('counseling');
    setSubMenuCode('group');
  }, [setSubMenuCode, setMenuCode]);

  return <h1>집단상담프로그램 목록</h1>;
};

export default React.memo(GroupListContainer);
