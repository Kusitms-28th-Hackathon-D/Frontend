import React from 'react';

const CircleNumber = ({ number }) => {
  return (
    <div className="rounded-full w-[44px] h-[44px] bg-[#CDEDE0] flex justify-center items-center text-center mr-3">
      {number}
    </div>
  );
};

export default CircleNumber;
