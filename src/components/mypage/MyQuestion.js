import React from 'react';
import SmallLogo from '../images/question/SmallLogo.svg';
import RightArrow from '../images/question/RightArrow.svg';
import { useState } from 'react';
import CircleNumber from '../question/CircleNumber';
import SelectTag from './SelectTag';
import Navbar from '../base/Navbar';

const MyQuestion = () => {
  return (
    <>
      <Navbar />

      <main className="flex flex-col justify-center items-center text-center mx-auto">
        <div className="flex w-[1000px]  flex-row mt-20 items-start">
          <h2 className="text-[32px] font-semibold mr-3 items-start">나의 설문조사 정보에요!</h2>
        </div>
        <div className="mt-10 w-[1000px] flex flex-col items-start">
          <div className="text-[32px] font-medium">저는 어떤 사람인가요?</div>
          <div className="text-[32px] font-medium mt-[20px]">나를 알기 위한 기본 질문</div>
          <div className="flex flex-row mt-5">
            <div className="flex w-[82px] mr-3">
              <div className="flex items-center">
                <CircleNumber number={''} />
              </div>
              <div className="flex items-center">
                <img className="flex items-center mr-3 h-[16px]" src={RightArrow} />
              </div>
            </div>
            <div className="flex items-center font-medium text-[24px]">동료들이 보는 나의 이미지는 어떠한가요?</div>
          </div>
          <div className="ml-[93px] mt-5 flex">
            <SelectTag text={'성실해요'} />
            <SelectTag text={'똑부러져요'} />
            <SelectTag isSelected={true} text={'사교성이 좋아요'} />
            <SelectTag text={'공감을 잘해요'} />
          </div>
          <div className="flex flex-row mt-5">
            <div className="flex w-[82px] mr-3">
              <div className="flex items-center">
                <CircleNumber number={''} />
              </div>
              <div className="flex items-center">
                <img className="flex items-center mr-3 h-[16px]" src={RightArrow} />
              </div>
            </div>
            <div className="flex items-center font-medium text-[24px]">나의 협업 스타일은 어떠한가요?</div>
          </div>
          <div className="ml-[93px] mt-5 flex">
            <SelectTag text={'소통이 원활해요'} />
            <SelectTag isSelected={true} text={'업무효율이 좋아요'} />
            <SelectTag text={'계획적이에요'} />
            <SelectTag text={'일처리가 빨라요'} />
          </div>
          <div className="flex flex-row mt-5">
            <div className="flex w-[82px] mr-3">
              <div className="flex items-center">
                <CircleNumber number={''} />
              </div>
              <div className="flex items-center">
                <img className="flex items-center mr-3 h-[16px]" src={RightArrow} />
              </div>
            </div>
            <div className="flex items-center font-medium text-[24px]">
              스터디 및 협업을 통해 느낀 장점은 무엇인가요?
            </div>
          </div>
          <div className="ml-[93px] mt-5 flex">
            <SelectTag text={'센스쟁이'} />
            <SelectTag text={'리더쉽 백점'} />
            <SelectTag isSelected={true} text={'추진력'} />
            <SelectTag text={'빠른 대처'} />
          </div>
        </div>
        <div className="mt-10 w-[1000px] flex flex-col items-start">
          <div className="text-[32px] font-medium">추가 질문</div>
          <div className="flex flex-row mt-5">
            <div className="flex w-[82px] mr-3">
              <div className="flex items-center">
                <CircleNumber number={''} />
              </div>
              <div className="flex items-center">
                <img className="flex items-center mr-3 h-[16px]" src={RightArrow} />
              </div>
            </div>
            <div className="flex items-center font-medium text-[24px]">제 성격은 어떤가요?</div>
          </div>
          <div className="ml-[93px] mt-5 flex">
            <SelectTag isSelected={true} text={'사교적이에요'} />
            <SelectTag text={'수줍음이 많아요'} />
            <SelectTag text={'긍정적이에요'} />
            <SelectTag text={'차분해요'} />
          </div>
          <div className="flex flex-row mt-5">
            <div className="flex w-[82px] mr-3">
              <div className="flex items-center">
                <CircleNumber number={''} />
              </div>
              <div className="flex items-center">
                <img className="flex items-center mr-3 h-[16px]" src={RightArrow} />
              </div>
            </div>
            <div className="flex items-center font-medium text-[24px]">이 직무에서 제 강점은 무엇인가요?</div>
          </div>
          <div className="ml-[93px] mt-5 flex">
            <SelectTag isSelected={true} text={'엑셀을 잘 다뤄요'} />
            <SelectTag text={'발표 전달력이 좋아요'} />
            <SelectTag text={'문서 정리를 잘해요'} />
            <SelectTag text={'커뮤니케이션 능률'} />
          </div>
        </div>
        <div className="my-[50px] rounded-[9px] w-[240px] h-[67px] flex items-center justify-center border border-solid border-[1px] border-[#BBBBBB]">
          뒤로가기
        </div>
      </main>
    </>
  );
};

export default MyQuestion;
