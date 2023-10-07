import { useState } from 'react';
import { Link } from 'react-router-dom';

const Option = () => {
  const [selectedIdx, setSelectedIdx] = useState(-1); // 초기 선택된 인덱스는 -1로 설정

  const handleOnClick = (index) => {
    setSelectedIdx(index); // 클릭된 항목의 인덱스를 선택된 인덱스로 업데이트
  };

  const isItemSelected = (index) => {
    return selectedIdx === index; // 해당 인덱스가 선택된 인덱스와 일치하는지 확인
  };

  return (
    <main className="flex flex-col justify-center items-center text-center w-96 mx-auto">
      <h2 className="text-[33.75px] font-semibold mt-20 text-[#55B68F]">회원가입</h2>
      <div className="text-[#BBBBBB] mt-1">어디가 불편하세요?</div>
      <div className="flex flex-col mt-9">
        <div className="flex flex-row">
          <div
            onClick={() => handleOnClick(0)}
            className={`font-semibold rounded-tl-[60px] rounded-tr-[9px] rounded-bl-[9px] rounded-br-[30px] w-32 h-32 mr-10 
            flex justify-center items-center text-center
            bg-${isItemSelected(0) ? '[#55B68F]' : 'zinc-100'} 
            text-${isItemSelected(0) ? 'white' : 'black'}
            `}
          >
            지채
          </div>
          <div
            onClick={() => handleOnClick(1)}
            className={`font-semibold rounded-tl-[9px] rounded-tr-[60px] rounded-bl-[30px] rounded-br-[9px] w-32 h-32 mr-10
             bg-${isItemSelected(1) ? '[#55B68F]' : 'zinc-100'} 
             text-${isItemSelected(1) ? 'white' : 'black'}
             flex justify-center items-center text-center`}
          >
            시각
          </div>
          <div
            onClick={() => handleOnClick(2)}
            className={`font-semibold rounded-tl-[9px] rounded-tr-[30px] rounded-bl-[60px] rounded-br-[9px] w-32 h-32
            bg-${isItemSelected(2) ? '[#55B68F]' : 'zinc-100'} 
            text-${isItemSelected(2) ? 'white' : 'black'}
         flex justify-center items-center text-center`}
          >
            청각
          </div>
        </div>
        <div className="mt-10 flex flex-row justify-center">
          <div
            onClick={() => handleOnClick(3)}
            className={`font-semibold rounded-tl-[30px] rounded-tr-[9px] rounded-bl-[9px] rounded-br-[60px] w-32 h-32 mr-10
            bg-${isItemSelected(3) ? '[#55B68F]' : 'zinc-100'} 
            text-${isItemSelected(3) ? 'white' : 'black'}
         flex justify-center items-center text-center`}
          >
            지적
          </div>
          <div
            onClick={() => handleOnClick(4)}
            className={`font-semibold rounded-[30px] w-32 h-32 mr-10 
            bg-${isItemSelected(4) ? '[#55B68F]' : 'zinc-100'} 
            text-${isItemSelected(4) ? 'white' : 'black'}
         flex justify-center items-center text-center`}
          >
            불편하지
            <br />
            않아요
          </div>
        </div>
      </div>
      <div className="mt-10 flex flex-rol">
        <div className="w-[197px] h-[48px] flex justify-center text-center items-center rounded-[50px] text-[16px] border border-solid border-[#55B68F] border-1 text-[#55B68F] mr-5">
          <Link to="/signup">이전</Link>
        </div>
        <div className="w-[197px] h-[48px] flex justify-center text-center items-center rounded-[50px] text-[16px] bg-[#55B68F] text-[white]">
          <Link to="/signup/3">다음</Link>
        </div>
      </div>
    </main>
  );
};

export default Option;
