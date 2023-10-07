import { useState } from 'react';
import Number from './Number';
import Tag from './Tag';
import { Link, useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { newUserState } from '../../states/signup';
import axios from 'axios';

const Ranking = () => {
  const [selectedTagIndex, setSelectedTagIndex] = useState([[-1], [-1], [-1]]); // 선택된 Tag의 인덱스, 초기값 -1로 설정
  const [newUser, setNewUser] = useRecoilState(newUserState);
  const Tags = ['경영 사무', '영업 판매', '교육 복지', '보건 의료', '예술 스포츠', '설치 정비', '농업 어업'];
  const ETags = [
    'ManagementandAdministration',
    'SalesandMarketing',
    'EducationandWelfare',
    'HealthcareandMedical',
    'ArtsandSports',
    'InstallationandMaintenance',
    'AgricultureForestryandFisheries',
  ];
  const handleTagClick = (ranking, index) => {
    const updatedSelectedTagIndex = [...selectedTagIndex];
    updatedSelectedTagIndex[ranking] = [index];
    setSelectedTagIndex(updatedSelectedTagIndex);
  };
  const navigate = useNavigate();

  const formData = new FormData();

  const handleSubmit = () => {
    formData.append('file', newUser.image);
    axios
      .post(process.env.REACT_APP_API + '/auth/signUp', {
        email: newUser.email,
        password: newUser.password,
        phonenum: newUser.phonenum,
        disability: newUser.disability,
        jobPriority1: ETags[selectedTagIndex[0]],
        jobPriority2: ETags[selectedTagIndex[1]],
        jobPriority3: ETags[selectedTagIndex[2]],
        role: 'USER',
      })
      .then(() => {
        navigate('/');
      });
  };

  return (
    <main className="flex flex-col justify-center items-center text-center mx-auto">
      <h2 className="text-[33.75px] font-semibold mt-20 text-[#55B68F]">회원가입</h2>
      <div className="mt-12">
        {[1, 2, 3].map((ranking) => (
          <div key={ranking} className="flex mt-7">
            <Number number={ranking} />
            {Tags.map((tag, index) => (
              <Tag
                key={index}
                text={tag}
                isSelected={selectedTagIndex[ranking - 1][0] === index}
                onClick={() => handleTagClick(ranking - 1, index)}
              />
            ))}
          </div>
        ))}
      </div>
      <div className="mt-12 flex flex-rol">
        <div className="w-[197px] h-[48px] flex justify-center text-center items-center rounded-[50px] text-[16px] border border-solid border-[#55B68F] border-1 text-[#55B68F] mr-5">
          <Link to="/signup/2">이전</Link>
        </div>
        <div
          onClick={handleSubmit}
          className="w-[197px] h-[48px] flex justify-center text-center items-center rounded-[50px] text-[16px] bg-[#55B68F] text-[white]"
        >
          <Link to="/signup/3">가입하기</Link>
        </div>
      </div>
    </main>
  );
};

export default Ranking;
