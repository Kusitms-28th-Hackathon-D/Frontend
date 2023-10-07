const FeatureItem = ({ label }) => {
  return (
    <div className="rounded-tl-[40px] rounded-lg overflow-hidden">
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

const ProfileCard = () => {
  return (
    <section className="max-w-5xl mx-auto px-5 lg:px-0">
      <div className="mt-5 flex items-center">
        <h2 className="text-3xl font-medium me-3">나의 프로필이에요!</h2>
        <img src="/images/icons/union1.png" className="h-full" />
      </div>
      <div className="mt-5 flex items-start gap-10">
        <div className="flex-1 flex gap-8 bg-[#FF617C] rounded-lg p-8">
          <div className="w-48 rounded-lg overflow-hidden rounded-tl-[100px]">
            <img src="/images/group/profile1.png" className="object-cover w-full h-full" />
          </div>
          <div className="flex flex-col justify-between items-end">
            <img src="/images/icons/union2.png" className="w-12 h-12" />
            <div
              className="border-2 p-3 rounded-br-lg"
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
        <div className="flex-1 grid grid-cols-4 bg-[#FF617C] rounded-lg mt-16 p-5 gap-5">
          <div></div>
          <div></div>
          <FeatureItem label="따뜻한 사람이에요" />
          <FeatureItem label="따뜻한 사람이에요" />
          <FeatureItem label="따뜻한 사람이에요" />
          <FeatureItem label="따뜻한 사람이에요" />
          <FeatureItem label="따뜻한 사람이에요" />
          <FeatureItem label="따뜻한 사람이에요" />
        </div>
      </div>
    </section>
  );
};

export default ProfileCard;
