'use client';
import React, { useEffect, useLayoutEffect, useState } from 'react';
import { getCommonActions } from '@/commons/contexts/CommonContext';
import getQueryString from '@/commons/libs/getQueryString';
import GroupListItem from '../components/GroupListItem';
import Pagination from '@/commons/components/Pagination';


const GroupListContainer = ({ searchParams }) => {
  const [pagination, setPagination] = useState(null);
  const { setMenuCode, setSubMenuCode } = getCommonActions();
  const [search, setSearch] = useState(() => getQueryString(searchParams)); // 검색 시 쿼리스트링 값 나오게끔
  const [items, setItems] = useState([
    {
      cNo: 1,
      counselingName: "자아실현프로그램",
      counselorName: "전교수",
      counselorEmail: "user003@test.org",
      reservationSdate : "2024-09-23",
      reservationEdate  : "2024-09-24",
      counselingLimit : 10,
    },
  ]);

  useLayoutEffect(() => {
    setMenuCode('counseling');
    setSubMenuCode('group');
  }, [setMenuCode, setSubMenuCode]);


  return (

    <>
    <GroupListItem items={items}/>
    {items.length > 0 && (
        <Pagination onClick={onChangePage} pagination={pagination} />
      )}
    </>
  )

};

export default React.memo(GroupListContainer);