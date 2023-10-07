import { useState } from 'react';
import Delete from '../images/question/Delete.svg';

const OptionInput = ({ removeInput, index }) => {
  const [showDelete, setShowDelete] = useState(false);
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
    setShowDelete(false);
  };

  const handleInputKeyPress = (e) => {
    if (e.key === 'Enter') {
      setShowDelete(true);
    }
  };

  const handleDeleteClick = () => {
    setInputValue('');
    setShowDelete(false);
  };
  return (
    <div className="flex mr-[25px] w-[247px]">
      <input
        type="text"
        placeholder="옵션을 작성해주세요"
        className="
    focus:outline-none
    pl-[20px] pr-[30px] h-[48px] flex justify-center text-center items-center rounded-[50px] text-[16px] mr-5 bg-[#F2F2F2]"
        value={inputValue}
        onChange={handleInputChange}
        onKeyPress={handleInputKeyPress}
      />
      {showDelete && (
        <img
          className="flex items-center ml-[-45px] cursor-pointer"
          src={Delete}
          alt="Delete"
          onClick={() => {
            handleDeleteClick();
            if (removeInput !== undefined) {
              removeInput(index);
            }
          }}
        />
      )}
    </div>
  );
};

export default OptionInput;
