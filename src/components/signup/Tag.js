const Tag = ({ text, isSelected, onClick }) => {
  const borderClassName = isSelected ? 'border-[#55B68F]' : 'border-[#F2F2F2]';

  return (
    <div
      className={`px-[20px] h-[48px] flex justify-center text-center items-center rounded-[50px] text-[16px] mr-5 bg-[#F2F2F2]  border border-solid border-[2px] ${borderClassName}`}
      onClick={onClick}
    >
      {text}
    </div>
  );
};
export default Tag;
