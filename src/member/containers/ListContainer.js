'use client';
import React, { useEffect, useState, useLayoutEffect } from 'react';
import { getCommonActions } from '@/commons/contexts/CommonContext';
import { getMemberList } from '../apis/apiInfo'; // API 호출 함수 임포트
import MemberList from '../components/MemberList'; // MemberList 컴포넌트 임포트

const MemberListContainer = ({ searchParams }) => {
  const { setMenuCode, setSubMenuCode } = getCommonActions();
  
  // 회원 목록 상태
  const [members, setMembers] = useState([]);
  // 로딩 상태
  const [loading, setLoading] = useState(true);
  // 오류 상태
  const [error, setError] = useState(null);

  useLayoutEffect(() => {
    // 메뉴 코드 설정
    setMenuCode('member');
    setSubMenuCode('list');
  }, [setMenuCode, setSubMenuCode]);

  useEffect(() => {
    const fetchMembers = async () => {
      try {
        const response = await getMemberList(1, 20); // 첫 페이지, 20개 항목 조회
        setMembers(response.data.items); // 회원 목록 설정
      } catch (err) {
        setError(err.message); // 오류 메시지 설정
      } finally {
        setLoading(false); // 로딩 완료
      }
    };

    fetchMembers();
  }, []);

  if (loading) return <div>로딩 중...</div>; // 로딩 중일 때
  if (error) return <div>오류 발생: {error}</div>; // 오류 발생 시

  return <MemberList members={members} />; // 회원 목록 컴포넌트 렌더링
};

export default React.memo(MemberListContainer);
