import React from 'react';

const Option = () => {
  return (
    <main className="flex flex-col justify-center items-center text-center w-96 mx-auto">
      <h2 className="text-[33.75px] font-semibold mt-20 text-[#55B68F]">회원가입</h2>
      <div className="text-[#BBBBBB] mt-1">어디가 불편하세요?</div>
      <div className="flex flex-col mt-9">
        <div className="flex flex-row">
          <div className="font-semibold rounded-tl-[60px] rounded-tr-[9px] rounded-bl-[9px] rounded-br-[30px] w-32 h-32 mr-10 bg-zinc-100 flex justify-center items-center text-center">
            지채
          </div>
          <div className="font-semibold rounded-tl-[9px] rounded-tr-[60px] rounded-bl-[30px] rounded-br-[9px] w-32 h-32 mr-10 bg-zinc-100 flex justify-center items-center text-center">
            시각
          </div>
          <div className="font-semibold rounded-tl-[9px] rounded-tr-[30px] rounded-bl-[60px] rounded-br-[9px] w-32 h-32 bg-zinc-100 flex justify-center items-center text-center">
            청각
          </div>
        </div>
        <div className="mt-10 flex flex-row justify-center">
          <div className="font-semibold rounded-tl-[30px] rounded-tr-[9px] rounded-bl-[9px] rounded-br-[60px] w-32 h-32 mr-10 bg-zinc-100 flex justify-center items-center text-center">
            지적
          </div>
          <div className="font-semibold rounded-[30px] w-32 h-32 mr-10 bg-zinc-100 flex justify-center items-center text-center">
            불편하지
            <br />
            않아요
          </div>
        </div>
      </div>
      <div className="mt-10 flex flex-rol">
        <div className="w-[197px] h-10 flex justify-center text-center items-center rounded-[50px] text-[16px] border border-solid border-[#55B68F] border-1 text-[#55B68F] mr-5">
          이전
        </div>
        <div className="w-[197px] h-10 flex justify-center text-center items-center rounded-[50px] text-[16px] bg-[#55B68F] text-[white]">
          다음
        </div>
      </div>
    </main>
  );
};

export default Option;
