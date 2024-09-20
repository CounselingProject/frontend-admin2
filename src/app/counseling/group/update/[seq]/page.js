import AdminOnlyContainer from '@/member/containers/AdminOnlyContainer';
import GroupUpdateContainer from '@/counseling/containers/GroupUpdateContainer';

const GroupUpdatePage = ({ searchParams }) => {
  return (
    <AdminOnlyContainer>
      <GroupUpdateContainer searparams={params} />
    </AdminOnlyContainer>
  );
};

export default GroupUpdatePage;