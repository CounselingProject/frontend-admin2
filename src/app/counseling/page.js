import AdminOnlyContainer from '@/member/containers/AdminOnlyContainer';
import ApplicationListContainer from '@/counseling/containers/ApplicationListContainer';

const counselingPage = ({ searchParam }) => {
  return (
    <AdminOnlyContainer>
      <ApplicationListContainer searchParams={searchParams} />
    </AdminOnlyContainer>
  );

// 리스트는 검색이라 searchParam으로 하기 위해
};
export default counselingPage;
