import { useState } from 'react';
import Feedback from '../components/group/Feedback';
import GroupInfo from '../components/group/GroupInfo';

const GroupDetailPage = () => {
  const [isVisibleFeedback, setIsVisibleFeedback] = useState(false);

  return (
    <>
      <GroupInfo isVisibleFeedback={isVisibleFeedback} setIsVisibleFeedback={setIsVisibleFeedback} />
      {isVisibleFeedback && <Feedback />}
    </>
  );
};

export default GroupDetailPage;
