const GroupInfo = () => {
  return (
    <section className="flex max-w-5xl mx-auto mt-5 gap-10 px-5 lg:px-0">
      <div className="w-6/12">
        <div className="bg-gray-300 w-full aspect-video rounded"></div>
        <div className="mt-5 flex justify-between">
          <span className="font-medium">
            9월 4일(월)
            <br />
            -10월 7일(토)
          </span>
          <div>
            <h5 className="font-medium">현직자 직무 경험 및 커뮤니케이션 방법 공유</h5>
            <ul className="mt-5">
              <li>-현직자 취업과정 공유</li>
              <li>-직무 담당자가 실제로 하는 일</li>
              <li>-사내 커뮤니케이션을 위해 요구되는 역량</li>
              <li>-그룹원 간의 유기적인 피드백</li>
              <li>-각 세션 별 Q&A</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="w-6/12 flex flex-col justify-between">
        <div>
          <span className="inline-block bg-[#FF617C] text-sm text-white px-4 py-2 rounded-full">경영 사무</span>
          <h2 className="mt-3 text-2xl font-semibold">효과적인 커뮤니케이션 방법</h2>
          <div className="mt-5">
            <span className="me-8 font-medium">그룹장</span>
            <span>김상호</span>
          </div>
          <div className="mt-3 flex">
            <span className="me-8 font-medium">참여자</span>
            <div className="flex gap-5">
              <img src="/images/group/member1.png" alt="member1" />
              <img src="/images/group/member2.png" alt="member2" />
              <img src="/images/group/member3.png" alt="member3" />
              <img src="/images/group/member4.png" alt="member4" />
              <div className="bg-[#FF617C] text-sm text-white px-5 py-2 rounded-full flex justify-center items-center">
                +2
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="flex items-center">
            <label htmlFor="code" className="w-24 font-medium">
              참여 코드
            </label>
            <input
              type="text"
              placeholder="참여 코드 입력"
              className="w-full border-[1px] border-[#BBBBBB] px-2 py-3 rounded-lg text-center font-semibold"
            />
          </div>
          <button className="w-full bg-[#55B68F] text-white text-sm font-semibold px-4 py-4 rounded-lg mt-4">
            그룹 참여하기
          </button>
        </div>
      </div>
    </section>
  );
};

export default GroupInfo;
