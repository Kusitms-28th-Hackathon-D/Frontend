import AllGroup from '../components/main/AllGroup';
import UserGroup from '../components/main/UserGroup';
import Navbar from '../components/base/Navbar';

const MainPage = () => {
  return (
    <>
      <Navbar />
      <UserGroup />
      <AllGroup />
    </>
  );
};

export default MainPage;
