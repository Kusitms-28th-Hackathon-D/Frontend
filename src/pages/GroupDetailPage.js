import { useState } from 'react';
import Feedback from '../components/group/Feedback';
import GroupInfo from '../components/group/GroupInfo';
import Navbar from '../components/base/Navbar';

const GroupDetailPage = () => {
  const [isVisibleFeedback, setIsVisibleFeedback] = useState(false);

  return (
    <>
      <Navbar />
      <GroupInfo isVisibleFeedback={isVisibleFeedback} setIsVisibleFeedback={setIsVisibleFeedback} />
      {isVisibleFeedback && <Feedback />}
    </>
  );
};

export default GroupDetailPage;
