import { useState } from 'react';

const SelectTag = ({ text, isSelected, onClick }) => {
  const borderClassName = isSelected ? 'bg-[#55B68F] text-[white]' : 'bg-[#F2F2F2]';
  const [isClick, setIsClick] = useState(false);

  return (
    <div
      className={`px-[20px] h-[48px] flex justify-center text-center items-center rounded-[50px] text-[16px] mr-5   ${borderClassName}`}
      onClick={onClick}
    >
      {text}
    </div>
  );
};
export default SelectTag;
