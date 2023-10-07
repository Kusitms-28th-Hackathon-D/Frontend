import { useState } from 'react';

const FeatureItem = ({ label, onClick }) => {
  return (
    <div className="rounded-tl-[40px] rounded-lg overflow-hidden cursor-pointer" onClick={onClick}>
      <div
        className="aspect-square flex items-center justify-center text-sm px-5"
        style={{
          background:
            'linear-gradient(115.17deg, #FFFFFF 34.01%, rgba(255, 255, 255, 0) 90.31%), linear-gradient(0deg, rgba(255, 255, 255, 0.9) 5.56%, rgba(255, 255, 255, 0) 288.89%)',
          borderImageSource: 'linear-gradient(115.17deg, #FFFFFF 34.01%, rgba(255, 255, 255, 0) 90.31%)',
        }}
      >
        <span>{label}</span>
      </div>
    </div>
  );
};

const Badge = ({ label, newClass, onClick }) => {
  return (
    <span
      className={`block bg-[#F2F2F2] px-7 py-3 rounded-full text-[#444444] text-sm ${
        newClass ? newClass : ''
      } cursor-pointer`}
      onClick={onClick}
    >
      {label}
    </span>
  );
};

const MyPageContent = () => {
  const [featureList, setFeatureList] = useState([]);

  return (
    <main>
      <section className="max-w-5xl mx-auto px-5 lg:px-0 mt-16">
        <div className="mt-5 flex items-center">
          <h2 className="text-3xl font-medium me-3">나의 프로필이에요!</h2>
          <img src="/images/icons/union1.png" className="h-full" />
        </div>
        <div className="mt-5 flex items-start gap-10">
          <div className="flex-1 flex gap-5 bg-[#FF617C] rounded-lg p-8">
            <div className="w-48 rounded-lg overflow-hidden rounded-tl-[100px]">
              <img src="/images/group/profile1.png" className="object-cover w-full h-full" />
            </div>
            <div className="flex flex-col justify-between items-end">
              <img src="/images/icons/union2.png" className="w-12 h-12" />
              <div
                className="border-2 px-3 py-2 rounded-br-[16px]"
                style={{
                  background:
                    'linear-gradient(115.17deg, #FFFFFF 34.01%, rgba(255, 255, 255, 0) 90.31%), linear-gradient(0deg, rgba(255, 255, 255, 0.9) 5.56%, rgba(255, 255, 255, 0) 288.89%)',
                  borderImageSource: 'linear-gradient(115.17deg, #FFFFFF 34.01%, rgba(255, 255, 255, 0) 90.31%)',
                }}
              >
                <h4 className="font-semibold">김단아</h4>
                <div className="text-sm mt-1">
                  <p>남들보다 느리지만 포기하지 않아요.</p>
                  <p>
                    저는 <span className="text-[#FF617C]">경영 사무</span>를 희망해요{' '}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="h-60 flex-1 grid grid-cols-4 bg-[#FFC758] rounded-lg mt-16 p-5 gap-5">
            {featureList.map((feature, index) => (
              <FeatureItem
                key={index}
                label={feature}
                onClick={() => {
                  if (featureList.includes(feature)) {
                    setFeatureList(featureList.filter((f) => f !== feature));
                  } else {
                    setFeatureList([...featureList, feature]);
                  }
                }}
              />
            ))}
          </div>
        </div>
      </section>
      <section className="max-w-5xl mx-auto px-5 lg:px-0 mt-24">
        <div>
          <h4 className="text-2xl text-[#444444]">김단아님의 BEST 키워드</h4>
          <div className="flex gap-4 mt-5">
            {['사교성이 좋아요', '업무 효율이 좋아요', '추진력', '사교적이에요', '엑셀을 잘 다뤄요'].map(
              (label, index) => (
                <Badge
                  key={index}
                  label={label}
                  onClick={() => {
                    if (featureList.includes(label)) {
                      setFeatureList(featureList.filter((feature) => feature !== label));
                    } else {
                      setFeatureList([...featureList, label]);
                    }
                  }}
                />
              ),
            )}
          </div>
          <div className="mt-24 mb-24">
            <div className="flex items-center mb-8">
              <Badge label={'간단한 분류 작업을 하는 방법'} newClass="me-4 w-60 text-center" />
              저에 대해 알려주세요
            </div>
            <div className="flex items-center mb-8">
              <Badge label="바리스타가 되는 방법 " newClass="me-4 w-60 text-center" />
              바리스타로써 저는?
            </div>
            <div className="flex items-center mb-8">
              <Badge label="효과적인 커뮤니케이션 방법" newClass="me-4 w-60 text-center" />
              저는 어떤 사람인가요?
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default MyPageContent;
