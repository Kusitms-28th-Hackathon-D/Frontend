import { useEffect, useState } from 'react';

const FeedbackItem = ({ imageUrl, name, content, borderPosition, backgroundColor }) => {
  const [bgColor, setBgColor] = useState('');
  const [brPosition, setBrPosition] = useState('');

  useEffect(() => {
    if (backgroundColor) {
      if (backgroundColor === '#FF617C') {
        setBgColor('bg-[#FF617C]');
      }

      if (backgroundColor === '#55B68F') {
        setBgColor('bg-[#55B68F]');
      }

      if (backgroundColor === '#FFC758') {
        setBgColor('bg-[#FFC758]');
      }
    }

    if (borderPosition) {
      setBrPosition(`rounded-${borderPosition}-[100px]`);
    }
  }, [backgroundColor]);

  useEffect(() => {
    if (brPosition === 'br') {
      setBrPosition('rounded-br-[100px]');
    }

    if (brPosition === 'bl') {
      setBrPosition('rounded-bl-[100px]');
    }

    if (brPosition === 'tr') {
      setBrPosition('rounded-tr-[100px]');
    }

    if (brPosition === 'tl') {
      setBrPosition('rounded-tl-[100px]');
    }
  }, [borderPosition]);

  return (
    <div className="flex flex-col gap-5 me-5">
      <div className={`inline-block w-60 p-4 rounded-lg ${bgColor}`}>
        <div className={`inline-block overflow-hidden rounded-lg w-full ${brPosition}`}>
          <img src={imageUrl} alt="profile1" className="w-full" />
        </div>
        <div
          className="p-3 rounded-br-lg border-[1px]"
          style={{
            background:
              'linear-gradient(115.17deg, #FFFFFF 34.01%, rgba(255, 255, 255, 0) 90.31%), linear-gradient(0deg, rgba(255, 255, 255, 0.9) 5.56%, rgba(255, 255, 255, 0) 288.89%)',
            borderImageSource: 'linear-gradient(115.17deg, #FFFFFF 34.01%, rgba(255, 255, 255, 0) 90.31%)',
          }}
        >
          <h6 className="text-lg font-semibold">{name}</h6>
          <p className="whitespace-normal">{content}</p>
        </div>
      </div>
      <button className="border-[1px] border-[#F2F2F2] hover:border-[#55B68F] rounded-lg py-3">
        질문 폼 답변하러 가기
      </button>
    </div>
  );
};

const Feedback = () => {
  return (
    <section className="max-w-5xl px-5 lg:px-0 mx-auto mb-16">
      <header className="flex justify-between items-center mt-24">
        <h4 className="text-2xl font-semibold">피드백 설문하기</h4>
        <button className="bg-[#CDEDE0] px-12 py-3 rounded-lg">내 피드백 질문 올리기</button>
      </header>
      <div className="mt-10 whitespace-nowrap overflow-x-auto flex">
        <FeedbackItem
          imageUrl="/images/group/profile1.png"
          name="박상지"
          content="어떠한 장애물도 극복할 수 있어요."
          borderPosition="tr"
          backgroundColor="#FF617C"
        />
        <FeedbackItem
          imageUrl="/images/group/profile1.png"
          name="김단아"
          content="남들보다 느리지만 포기하지 않아요."
          borderPosition="br"
          backgroundColor="#FF617C"
        />
        <FeedbackItem
          imageUrl="/images/group/profile1.png"
          name="우영우"
          content="남들보다 느리지만 포기하지 않아요."
          borderPosition="tr"
          backgroundColor="#55B68F"
        />
        <FeedbackItem
          imageUrl="/images/group/profile1.png"
          name="우영우"
          content="남들보다 느리지만 포기하지 않아요."
          borderPosition="tl"
          backgroundColor="#55B68F"
        />
        <FeedbackItem
          imageUrl="/images/group/profile1.png"
          name="우영우"
          content="남들보다 느리지만 포기하지 않아요."
          borderPosition="tr"
          backgroundColor="#FFC758"
        />

        <FeedbackItem
          imageUrl="/images/group/profile1.png"
          name="우영우"
          content="남들보다 느리지만 포기하지 않아요."
          borderPosition="br"
          backgroundColor="#FFC758"
        />
        <FeedbackItem
          imageUrl="/images/group/profile1.png"
          name="우영우"
          content="남들보다 느리지만 포기하지 않아요."
          borderPosition="tr"
          backgroundColor="#FFC758"
        />
      </div>
    </section>
  );
};

export default Feedback;
