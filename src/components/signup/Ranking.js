import { useState } from 'react';
import Number from './Number';
import Tag from './Tag';
import { Link } from 'react-router-dom';

const Ranking = () => {
  const [selectedTagIndex, setSelectedTagIndex] = useState([[-1], [-1], [-1]]); // 선택된 Tag의 인덱스, 초기값 -1로 설정

  const handleTagClick = (ranking, index) => {
    const updatedSelectedTagIndex = [...selectedTagIndex];
    updatedSelectedTagIndex[ranking] = [index];
    setSelectedTagIndex(updatedSelectedTagIndex);
  };

  return (
    <main className="flex flex-col justify-center items-center text-center mx-auto">
      <h2 className="text-[33.75px] font-semibold mt-20 text-[#55B68F]">회원가입</h2>
      <div className="mt-12">
        {[1, 2, 3].map((ranking) => (
          <div key={ranking} className="flex mt-7">
            <Number number={ranking} />
            {['경영 사무', '영업 판매', '교육 복지', '보건 의료', '예술 스포츠', '설치 정비', '농업 어업'].map(
              (tag, index) => (
                <Tag
                  key={index}
                  text={tag}
                  isSelected={selectedTagIndex[ranking - 1][0] === index}
                  onClick={() => handleTagClick(ranking - 1, index)}
                />
              ),
            )}
          </div>
        ))}
      </div>
      <div className="mt-12 flex flex-rol">
        <div className="w-[197px] h-[48px] flex justify-center text-center items-center rounded-[50px] text-[16px] border border-solid border-[#55B68F] border-1 text-[#55B68F] mr-5">
          <Link to="/signup/2">이전</Link>
        </div>
        <div className="w-[197px] h-[48px] flex justify-center text-center items-center rounded-[50px] text-[16px] bg-[#55B68F] text-[white]">
          <Link to="/signup/3">가입하기</Link>
        </div>
      </div>
    </main>
  );
};

export default Ranking;
