import SmallLogo from '../images/question/SmallLogo.svg';
import RightArrow from '../images/question/RightArrow.svg';
import CircleNumber from './CircleNumber';
import Delete from '../images/question/Delete.svg';
import Plus from '../images/question/Plus.svg';
import Tag from '../signup/Tag';

const MakeQuestion = () => {
  return (
    <main className="flex flex-col justify-center items-center text-center mx-auto">
      <div className="flex flex-row mt-20">
        <h2 className="text-2xl font-semibold mr-3 text-[#55B68F]">나에 대한 질문을 해보아요!</h2>
        <img src={SmallLogo} />
      </div>
      <div className="flex flex-row w-[750px] mt-10">
        <div className="flex flex-row h-[60px] w-[82px] mr-3">
          <div className="flex items-center">
            <CircleNumber number={1} />
          </div>
          <div className="flex items-center">
            <img className="flex items-center h-[16px]" src={RightArrow} />
          </div>
        </div>
        <div className="flex flex-col items-baseline">
          <div className="font-semibold text-[38px]">질문의 제목이 무엇인가요?</div>
          <input
            className="mt-5 w-[542px] pb-[5px] text-[32px] border-b-2 border-[#D9D9D9] focus:outline-none"
            type="text"
            placeholder="질문의 제목을 작성해주세요."
          />
        </div>
      </div>
      <div className="mt-10 w-[750px] flex flex-col items-start">
        <div className="text-[32px] font-medium">나를 알기 위한 기본 질문</div>
        <div className="flex flex-row mt-5">
          <div className="flex w-[82px] mr-3">
            <div className="flex items-center">
              <CircleNumber number={2} />
            </div>
            <div className="flex items-center">
              <img className="flex items-center mr-3 h-[16px]" src={RightArrow} />
            </div>
          </div>
          <div className="flex items-center font-medium text-[24px]">동료들이 보는 나의 이미지는 어떠한가요?</div>
        </div>
        <div className="ml-[93px] mt-5 flex">
          <Tag text={'성실해요'} />
          <Tag text={'똑부러져요'} />
          <Tag text={'사교성이 좋아요'} />
          <Tag text={'공감을 잘해요'} />
        </div>
        <div className="flex flex-row mt-5">
          <div className="flex w-[82px] mr-3">
            <div className="flex items-center">
              <CircleNumber number={3} />
            </div>
            <div className="flex items-center">
              <img className="flex items-center mr-3 h-[16px]" src={RightArrow} />
            </div>
          </div>
          <div className="flex items-center font-medium text-[24px]">나의 협업 스타일은 어떠한가요?</div>
        </div>
        <div className="ml-[93px] mt-5 flex">
          <Tag text={'소통이 원활해요'} />
          <Tag text={'업무효율이 좋아요'} />
          <Tag text={'계획적이에요'} />
          <Tag text={'일처리가 빨라요'} />
        </div>
        <div className="flex flex-row mt-5">
          <div className="flex w-[82px] mr-3">
            <div className="flex items-center">
              <CircleNumber number={4} />
            </div>
            <div className="flex items-center">
              <img className="flex items-center mr-3 h-[16px]" src={RightArrow} />
            </div>
          </div>
          <div className="flex items-center font-medium text-[24px]">스터디 및 협업을 통해 느낀 장점은 무엇인가요?</div>
        </div>
        <div className="ml-[93px] mt-5 flex">
          <Tag text={'센스쟁이'} />
          <Tag text={'리더쉽 백점'} />
          <Tag text={'추진력'} />
          <Tag text={'빠른 대처'} />
        </div>
      </div>
      <div className="mt-10 w-[750px] flex flex-col items-start">
        <div className="text-[32px] font-medium">추가 질문</div>
        <div className="flex flex-row">
          <div className="flex flex-row mt-5">
            <div className="flex w-[82px] mr-3">
              <div className="flex items-center">
                <CircleNumber number={1} />
              </div>
              <div className="flex items-center">
                <img className="flex items-center mr-3 h-[16px]" src={RightArrow} />
              </div>
            </div>
            <div className="flex items-center font-medium text-[24px]">추가로 물어보고 싶은 질문은 무엇인가요?</div>
          </div>
        </div>
        <div className="ml-[93px]">
          <input
            className="mt-3 w-[542px] pb-[3px] text-[24px] border-b-2 border-[#D9D9D9] focus:outline-none"
            type="text"
            placeholder="질문의 제목을 작성해주세요."
          />
        </div>
        <div className="flex flex-row mt-5">
          <div className="flex w-[97px] mr-3">
            <div className="flex items-center">
              <div className="rounded-full w-[58px] h-[44px] bg-[#E9F5F0] flex justify-center items-center text-center mr-3">
                {'1-2'}
              </div>
            </div>
            <div className="flex items-center">
              <img className="flex items-center mr-3 h-[16px]" src={RightArrow} />
            </div>
          </div>
          <div className="flex items-center font-medium text-[24px]">질문의 옵션을 작성해주세요!</div>
        </div>
        <div className="ml-[93px] mt-5 flex">
          <div className="flex mr-[25px]">
            <input
              type="text"
              placeholder="옵션을 작성해주세요"
              className="
            focus:outline-none
            pl-[20px] pr-[30px] h-[48px] flex justify-center text-center items-center rounded-[50px] text-[16px] mr-5 bg-[#F2F2F2]"
            />
            <img className="flex items-center ml-[-45px]" src={Delete} />
          </div>

          <div className="flex">
            <input
              type="text"
              placeholder="옵션을 작성해주세요"
              className="
            focus:outline-none
            pl-[20px] pr-[30px] h-[48px] flex justify-center text-center items-center rounded-[50px] text-[16px] mr-5 bg-[#F2F2F2]"
            />
          </div>
          <div className="flex items-center justify-center w-[44px] h-[44px] bg-[#F2F2F2] rounded-full">
            <img src={Plus} />
          </div>
        </div>
        <div className="bg-[#D7F1E6] w-[642px] text-[20px] mt-10 rounded-full flex items-center justify-center">+</div>
        <div></div>
      </div>
      <div className="my-[50px] rounded-[9px] bg-[#55B68F] w-[240px] h-[67px] flex items-center justify-center text-[white]">
        질문 폼 작성 완료하기
      </div>
    </main>
  );
};

export default MakeQuestion;
