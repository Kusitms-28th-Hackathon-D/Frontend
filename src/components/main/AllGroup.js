import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import { allGroupListState } from '../../states/group';

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
      <div className="flex flex-col gap-3 justify-between items-start mt-5">
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

const AllGroup = () => {
  const [allGroupList, setAllGroupList] = useRecoilState(allGroupListState);

  return (
    <section className="max-w-5xl mx-auto mt-24 mb-24 px-5 lg:px-0">
      <div className="flex justify-between items-center">
        <h1 className="text-xl">현재 진행중인 그룹을 확인하세요!</h1>
        <button className="bg-[#CDEDE0] px-10 py-3 rounded-lg">그룹 생성</button>
      </div>
      <div className="mt-5 grid grid-cols-4 gap-5">
        <GroupItem
          name="효과적인 커뮤니케이션 방법"
          host="김상호"
          type="경영 사무"
          badgeColor="#FF617C"
          imageUrl="/images/career-group/group4.png"
          linkUrl="/group/1"
        />
        <GroupItem
          name="효과적인 커뮤니케이션 방법"
          host="김상호"
          type="설치 장비"
          badgeColor="#7F8FFE"
          imageUrl="/images/career-group/group5.png"
          linkUrl="/group/1"
        />
        <GroupItem
          name="자신의 표현을 그림으로"
          host="김지은"
          type="예술 예체능"
          badgeColor="#F7C6FF"
          imageUrl="/images/career-group/group6.png"
          linkUrl="/group/1"
        />
        <GroupItem
          name="환자 정보를 정리하는 법"
          host="한지아"
          type="보건 의료"
          badgeColor="#55B68F"
          imageUrl="/images/career-group/group7.png"
          linkUrl="/group/1"
        />
      </div>
    </section>
  );
};

export default AllGroup;
