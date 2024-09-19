import AdminOnlyContainer from '@/member/containers/AdminOnlyContainer';
import ApplicationListContainer from '@/counseling/containers/ApplicationListContainer';

const counselingPage = () => {
  return (
    <AdminOnlyContainer>
      <ApplicationListContainer />
    </AdminOnlyContainer>
  );
};

export default counselingPage;
