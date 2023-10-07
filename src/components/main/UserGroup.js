import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

const GroupItem = ({ name, host, type, badgeColor, imageUrl, linkUrl }) => {
  const [badgeColorState, setBadgeColorState] = useState('');
  const [textColorState, setTextColorState] = useState('');

  useEffect(() => {
    if (badgeColor === '#FF617C') {
      setBadgeColorState('bg-[#FF617C]');
    }

    if (badgeColor === '#FFC758') {
      setBadgeColorState('bg-[#FFC758]');
    }

    if (badgeColor === '#7F8FFE') {
      setBadgeColorState('bg-[#7F8FFE]');
    }

    if (badgeColor === '#F7C6FF') {
      setBadgeColorState('bg-[#F7C6FF]');
      setTextColorState('text-black');
    }

    if (badgeColor === '#55B68F') {
      setBadgeColorState('bg-[#55B68F]');
    }
  }, [badgeColor]);

  return (
    <Link to={linkUrl}>
      <div className="aspect-video overflow-hidden rounded-[20px]">
        <img src={imageUrl} className="object-cover w-full h-full" />
      </div>
      <div className="flex gap-4 justify-between items-start mt-5">
        <div
          className={`${badgeColorState} rounded-full flex justify-center items-center px-5 py-2 text-sm ${
            textColorState ? textColorState : 'text-white'
          } font-medium`}
        >
          {type}
        </div>
        <div className="flex-1">
          <h3 className="text-xl font-medium">{name}</h3>
          <span className="text-sm text-[#BBBBBB]">그룹장 {host}</span>
        </div>
      </div>
    </Link>
  );
};

const UserGroup = () => {
  return (
    <section className="max-w-5xl mx-auto mt-16 px-5 lg:px-0">
      <h1 className="text-2xl">김단아님의 참여 그룹</h1>
      <div className="mt-5 grid grid-cols-3 gap-5">
        <GroupItem
          name="효과적인 엑셀 정리법"
          host="김상호"
          type="경영 사무"
          badgeColor="#FF617C"
          imageUrl="/images/career-group/group1.png"
          linkUrl="/group/1"
        />
        <GroupItem
          name="농산물을 관리하는 방법"
          host="이장미"
          type="농림 어업"
          badgeColor="#FFC758"
          imageUrl="/images/career-group/group2.png"
          linkUrl="/group/1"
        />
        <GroupItem
          name="효과적인 커뮤니케이션 방법"
          host="김상호"
          type="경영 사무"
          badgeColor="#7F8FFE"
          imageUrl="/images/career-group/group3.png"
          linkUrl="/group/1"
        />
      </div>
    </section>
  );
};

export default UserGroup;
