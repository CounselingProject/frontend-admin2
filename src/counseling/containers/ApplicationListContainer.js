'use client';
import React, { useLayoutEffect, useEffect, useState, useCallback } from 'react';
import { getCommonActions } from '@/commons/contexts/CommonContext';
import { apiList } from '../../counseling/details/apis/apiInfo';
import ItemsBox from '../../counseling/details/components/ItemsBox';
import Pagination from '../../commons/components/Pagination';
import { useTranslation } from 'react-i18next';

function getQueryString(searchParams) {
  const qs = {};
  if (searchParams.size > 0) {
    for (const [k, v] of searchParams) {
      qs[k] = v;
    }
  }
  return qs;
}

const ApplicationListContainer = ({ searchParams }) => {
  const { setMenuCode, setSubMenuCode } = getCommonActions();

  const [search, setSearch] = useState(() => getQueryString(searchParams));
  const [items, setItems] = useState([]);
  const [pagination, setPagination] = useState({});
  const { rNo } = useParams();

  const { t } = useTranslation();

  useLayoutEffect(() => {
    setMenuCode('counseling');
    setSubMenuCode('apply');
  }, [setMenuCode, setSubMenuCode]);

  useEffect(() => {
    (async () => {
      try {
        const { items, pagination } = await apiList(search);
        setItems(items);
        setPagination(pagination);
      } catch (err) {
        console.error(err);
      }
    })();
  }, [search, rNo]);

  const onChangePage = useCallback((p) => {
    setSearch((search) => ({ ...search, page: p }));
  }, []);

  const onCancel = useCallback(
    (orderNo) => {
      if (!window.confirm(t('정말_취소하겠습니까'))) {
        return;
      }

      (async () => {
        try {
          const res = await apiCancel(orderNo);
          setItems((items) =>
            items.map((item) => (item.orderNo === orderNo ? res : item)),
          );
        } catch (err) {
          console.error(err);
        }
      })();
    },
    [t],
  );

  return (
    <>
      <ItemsBox items={items} onCancel={onCancel} />
      {items.length > 0 && (
        <Pagination onClick={onChangePage} pagination={pagination} />
      )}
    </>
  );
};


export default React.memo(ApplicationListContainer);
