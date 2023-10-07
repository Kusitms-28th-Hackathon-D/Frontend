import { Link } from 'react-router-dom';

const Badge = ({ label, newClass }) => {
  return (
    <span className={`block bg-[#F2F2F2] px-7 py-3 rounded-full text-[#444444] text-sm ${newClass ? newClass : ''}`}>
      {label}
    </span>
  );
};

const KeywordSection = () => {
  return (
    <section className="max-w-5xl mx-auto px-5 lg:px-0 mt-24">
      <div>
        <h4 className="text-2xl text-[#444444]">김단아님의 BEST 키워드</h4>
        <div className="flex gap-4 mt-5">
          <Badge label={'사교성이 좋아요'} />
          <Badge label={'업무 효율이 좋아요'} />
          <Badge label={'추진력'} />
          <Badge label={'사교적이에요'} />
          <Badge label={'엑셀을 잘 다뤄요'} />
        </div>
        <div className="mt-24 mb-24">
          <div className="flex items-center mb-8">
            <Badge label={'간단한 분류 작업을 하는 방법'} newClass="me-4 w-60 text-center" />
            <Link to="/mypage/question">저에 대해 알려주세요</Link>
          </div>
          <div className="flex items-center mb-8">
            <Badge label="바리스타가 되는 방법 " newClass="me-4 w-60 text-center" />
            <Link to="/mypage/question">바리스타로써 저는?</Link>
          </div>
          <div className="flex items-center mb-8">
            <Badge label="효과적인 커뮤니케이션 방법" newClass="me-4 w-60 text-center" />
            <Link to="/mypage/question">저는 어떤 사람인가요?</Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default KeywordSection;
