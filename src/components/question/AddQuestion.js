import OptionInput from './OptionInput';
import CircleNumber from './CircleNumber';
import { useState } from 'react';
import Plus from '../images/question/Plus.svg';
import RightArrow from '../images/question/RightArrow.svg';

const AddQuestion = () => {
  const [inputs, setInputs] = useState([]);
  const [newInput, setNewInput] = useState('');

  const addInput = () => {
    setInputs([...inputs, newInput]);
    setNewInput('');
  };

  const removeInput = (index) => {
    const updatedInputs = [...inputs];
    updatedInputs.splice(index, 1);
    setInputs(updatedInputs);
  };

  return (
    <>
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
        <div
          onClick={addInput}
          className="flex items-center justify-center w-[44px] h-[44px] bg-[#F2F2F2] rounded-full ml-[10px]"
        >
          <img src={Plus} />
        </div>
      </div>
      <div className="ml-[93px] mt-5 grid grid-cols-3 gap-12">
        <OptionInput />
        {inputs.map((input, index) => (
          <OptionInput removeInput={removeInput} index={index} />
        ))}
      </div>
    </>
  );
};

export default AddQuestion;
