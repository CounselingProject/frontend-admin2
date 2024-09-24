'use client';
import React, {
  useLayoutEffect,
  useState,
  useEffect,
  useCallback,
} from 'react';
import { getCommonActions } from '@/commons/contexts/CommonContext';
import Pagination from '@/commons/components/Pagination';
import { useTranslation } from 'react-i18next';
import GroupListItem from '../components/GroupListItem';
import { getList } from '../apis/apiCounseling';

const GroupListContainer = ({ searchParams }) => {
  const { setMenuCode, setSubMenuCode,setMainTitle } = getCommonActions();
  searchParams.page = searchParams.page ?? 1;

  const { t } = useTranslation();
  const [items, setItems] = useState(null);
  const [pagination, setPagination] = useState(null);
  const [search, setSearch] = useState(searchParams);

  useLayoutEffect(() => {
    setMenuCode('counseling');
    setSubMenuCode('group');
    setMainTitlet(t('집단_상담_프로그램_목록'));
  }, [setMenuCode, setSubMenuCode]);

  useEffect(()=> {
    asnyc () => {
      try {
        const dat = await getList(search);
        if (data) {
          setItems(data.items);
          setPagination(data.pagination);

        }
      }catch (err) {
        console.error(err);
      }
    })();
  },[search]);



  return <h1>집단 상담 프로그램 목록...</h1>;
};

export default React.memo(GroupListContainer);
