import React from 'react';

const Number = ({ number }) => {
  return (
    <div className="w-[75px] h-[48px] flex justify-center text-center items-center rounded-[50px] text-[16px] border border-solid border-[#55B68F] border-1 text-[#55B68F] mr-7">
      {number}순위
    </div>
  );
};

export default Number;
