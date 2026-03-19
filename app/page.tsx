export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center min-h-[70vh] px-6 text-center border-b border-gray-100">
        <div className="max-w-3xl mx-auto">
          <div className="w-16 h-[2px] bg-[#c9a84c] mx-auto mb-8" />
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-light tracking-tight mb-4">
            김원준
          </h1>
          <p className="text-lg md:text-xl text-gray-400 font-light tracking-[0.3em] uppercase mb-8 font-[family-name:var(--font-inter)]">
            Wonjoon Kim
          </p>
          <div className="w-8 h-[1px] bg-[#c9a84c] mx-auto mb-8" />
          <p className="text-base md:text-lg text-gray-600 font-light leading-relaxed font-[family-name:var(--font-inter)]">
            삼성글로벌리서치 대표이사
            <span className="text-gray-300 mx-3">|</span>
            KAIST 기술경영학부 교수
          </p>
          <p className="text-sm text-gray-400 mt-3 font-[family-name:var(--font-inter)]">
            CEO, Samsung Global Research · Professor, KAIST
          </p>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 px-6 bg-[#fafafa]">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-light mb-2">소개</h2>
          <p className="text-sm text-[#c9a84c] tracking-[0.2em] uppercase mb-10 font-[family-name:var(--font-inter)]">
            About
          </p>
          <div className="space-y-6 text-gray-600 leading-relaxed font-[family-name:var(--font-inter)]">
            <p>
              김원준 박사는 대한민국의 경영인이자 경영학자로, 현재{" "}
              <strong className="text-[#1a2744]">삼성글로벌리서치(Samsung Global Research) 대표이사</strong>로서
              삼성그룹의 기술·산업 전략, 경영진단 및 글로벌 이슈 분석을 총괄하고 있다.
            </p>
            <p>
              한국과학기술원(KAIST) 기술경영학부 교수로 재직하며 혁신전략·정책,
              산업융합, 데이터 기반 사회과학을 연구해왔다. 서울대학교에서 기술정책
              박사학위를 취득한 후 뉴욕대학교(NYU) 겸임조교수,
              예일대학교(Yale) 경영대학 연구원으로 활동하였으며,
              MIT 슬론 경영대학원 방문학자를 역임하였다.
            </p>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-24 px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-light mb-2">학력</h2>
          <p className="text-sm text-[#c9a84c] tracking-[0.2em] uppercase mb-12 font-[family-name:var(--font-inter)]">
            Education
          </p>
          <div className="space-y-10">
            {[
              {
                year: "2003",
                degree: "박사 (Ph.D.)",
                field: "기술정책 (Technology Policy)",
                school: "서울대학교 (Seoul National University)",
              },
              {
                year: "1999",
                degree: "석사 (M.S.)",
                field: "재료공학 (Materials Science & Engineering)",
                school: "서울대학교 (Seoul National University)",
              },
              {
                year: "1997",
                degree: "학사 (B.S.)",
                field: "재료공학 (Materials Science & Engineering)",
                school: "연세대학교 (Yonsei University)",
              },
            ].map((edu) => (
              <div key={edu.year} className="flex gap-8 group">
                <div className="flex flex-col items-center">
                  <span className="text-sm text-[#c9a84c] font-medium font-[family-name:var(--font-inter)]">
                    {edu.year}
                  </span>
                  <div className="w-[1px] h-full bg-gray-200 mt-2 group-last:hidden" />
                </div>
                <div className="pb-2">
                  <p className="text-lg font-medium text-[#1a2744]">{edu.degree}</p>
                  <p className="text-gray-600 font-[family-name:var(--font-inter)]">{edu.field}</p>
                  <p className="text-gray-400 text-sm font-[family-name:var(--font-inter)]">{edu.school}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Career Section */}
      <section className="py-24 px-6 bg-[#fafafa]">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-light mb-2">주요 경력</h2>
          <p className="text-sm text-[#c9a84c] tracking-[0.2em] uppercase mb-12 font-[family-name:var(--font-inter)]">
            Career
          </p>
          <div className="space-y-8">
            {[
              {
                period: "2023.12 – 현재",
                title: "대표이사",
                org: "삼성글로벌리서치 (Samsung Global Research)",
                desc: "그룹 기술·산업 전략, 경영진단, 글로벌 이슈 분석 총괄",
              },
              {
                period: "2022 – 2023",
                title: "테크앤퓨처(Tech & Future) 본부장",
                org: "삼성글로벌리서치",
                desc: "전자산업 및 차세대 기술 어젠다 총괄",
              },
              {
                period: "2019 – 2022",
                title: "기술경영전문대학원장",
                org: "KAIST",
                desc: "대학원 행정 및 연구 프로그램 총괄",
              },
              {
                period: "2021 – 2022",
                title: "바이오혁신경영전문대학원장",
                org: "KAIST",
                desc: "",
              },
              {
                period: "2018 – 현재",
                title: "기술경영학부 교수 · 혁신전략정책연구소장",
                org: "KAIST",
                desc: "",
              },
              {
                period: "2018",
                title: "방문학자",
                org: "MIT 슬론 경영대학원 (MIT Sloan School of Management)",
                desc: "",
              },
              {
                period: "2011 – 2012",
                title: "방문학자",
                org: "MIT TPP (Technology and Policy Program)",
                desc: "",
              },
              {
                period: "2005 – 2017",
                title: "조교수 · 부교수",
                org: "KAIST 기술경영학부",
                desc: "",
              },
              {
                period: "2004 – 2005",
                title: "겸임조교수",
                org: "뉴욕대학교 경제학과 (New York University)",
                desc: "",
              },
              {
                period: "2003 – 2006",
                title: "연구원 · 방문연구원",
                org: "예일대학교 경영대학 (Yale School of Management)",
                desc: "",
              },
            ].map((career, i) => (
              <div
                key={i}
                className="flex gap-8 items-start border-l-2 border-gray-200 pl-8 hover:border-[#c9a84c] transition-colors duration-300"
              >
                <div className="min-w-[130px]">
                  <span className="text-sm text-[#c9a84c] font-medium font-[family-name:var(--font-inter)] whitespace-nowrap">
                    {career.period}
                  </span>
                </div>
                <div>
                  <p className="text-lg font-medium text-[#1a2744]">{career.title}</p>
                  <p className="text-gray-500 font-[family-name:var(--font-inter)]">{career.org}</p>
                  {career.desc && (
                    <p className="text-gray-400 text-sm mt-1 font-[family-name:var(--font-inter)]">{career.desc}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Research & Publications Section */}
      <section className="py-24 px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-light mb-2">주요 연구 및 저서</h2>
          <p className="text-sm text-[#c9a84c] tracking-[0.2em] uppercase mb-12 font-[family-name:var(--font-inter)]">
            Research & Publications
          </p>
          <div className="space-y-8">
            {/* Book */}
            <div className="p-8 border border-gray-100 rounded-sm bg-white hover:shadow-sm transition-shadow duration-300">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-xs bg-[#1a2744] text-white px-3 py-1 rounded-sm tracking-wider uppercase font-[family-name:var(--font-inter)]">
                  저서
                </span>
                <span className="text-sm text-gray-400 font-[family-name:var(--font-inter)]">2021</span>
              </div>
              <h3 className="text-xl font-medium mb-2">탄력성장 (Resilient Growth)</h3>
              <p className="text-gray-500 text-sm font-[family-name:var(--font-inter)]">
                위기 이후 지속 가능한 성장 전략에 대한 연구와 통찰을 담은 저서
              </p>
            </div>

            {/* Papers */}
            {[
              {
                year: "2015",
                title:
                  "Dynamic Patterns of Industry Convergence: Evidence from a Large Amount of Unstructured Data",
                journal: "Research Policy, 44(9): 1734–1748",
                desc: "미국 전 산업 대상 산업 간 경계 변화를 200만 건 신문기사 텍스트 분석으로 규명",
              },
              {
                year: "2015",
                title:
                  "Reference Quality-Based Competitive Market Structure for Innovation Driven Markets",
                journal:
                  "International Journal of Research in Marketing, 32(3): 284–296",
                desc: "소비자 참조품질 기반 혁신 시장의 경쟁구조 모형을 미국 휴대전화 시장으로 실증",
              },
              {
                year: "2012",
                title:
                  "The Effect of the Triple Helix System and Habitat on Regional Entrepreneurship: Empirical Evidence from the U.S.",
                journal: "Research Policy, 41(1): 154–166",
                desc: "대학·산업·정부 상호작용(트리플 헬릭스)이 지역 창업에 미치는 효과를 계량 분석",
              },
            ].map((paper, i) => (
              <div
                key={i}
                className="p-8 border border-gray-100 rounded-sm bg-white hover:shadow-sm transition-shadow duration-300"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-xs bg-gray-100 text-[#1a2744] px-3 py-1 rounded-sm tracking-wider uppercase font-[family-name:var(--font-inter)]">
                    논문
                  </span>
                  <span className="text-sm text-gray-400 font-[family-name:var(--font-inter)]">{paper.year}</span>
                </div>
                <h3 className="text-lg font-medium mb-2 italic">{paper.title}</h3>
                <p className="text-sm text-[#c9a84c] mb-2 font-[family-name:var(--font-inter)]">{paper.journal}</p>
                <p className="text-gray-500 text-sm font-[family-name:var(--font-inter)]">{paper.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Activities & Recognitions */}
      <section className="py-24 px-6 bg-[#fafafa]">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-light mb-2">주요 활동 및 역할</h2>
          <p className="text-sm text-[#c9a84c] tracking-[0.2em] uppercase mb-12 font-[family-name:var(--font-inter)]">
            Activities & Leadership
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: "아시아 혁신·기업가정신학회(AIEA) 회장",
                desc: "AIEA–NBER 컨퍼런스 조직위원장",
              },
              {
                title: "과학기술단체총연합회 부회장",
                desc: "2020–2022",
              },
              {
                title: "과학기술정책위원회 위원장",
                desc: "과학기술단체총연합회, 2017–2020",
              },
              {
                title: "기술경영경제학회장",
                desc: "2022–2023",
              },
              {
                title: "KAIST 국제개발협력센터장",
                desc: "2018–2022",
              },
              {
                title: "국제기구 자문 및 강연",
                desc: "World Bank · UN · ADB · IADB · 스탠퍼드대 FSI 등",
              },
            ].map((activity, i) => (
              <div
                key={i}
                className="p-6 border border-gray-100 rounded-sm bg-white"
              >
                <p className="font-medium text-[#1a2744] mb-1">{activity.title}</p>
                <p className="text-sm text-gray-400 font-[family-name:var(--font-inter)]">{activity.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Research Areas */}
      <section className="py-24 px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-light mb-2">연구 분야</h2>
          <p className="text-sm text-[#c9a84c] tracking-[0.2em] uppercase mb-12 font-[family-name:var(--font-inter)]">
            Research Areas
          </p>
          <div className="flex flex-wrap gap-3">
            {[
              "혁신전략 · Innovation Strategy",
              "기술정책 · Technology Policy",
              "산업융합 · Industry Convergence",
              "데이터 기반 사회과학",
              "트리플 헬릭스 · Triple Helix",
              "기업가정신 · Entrepreneurship",
              "경영진단 · Management Consulting",
              "글로벌 이슈 분석",
            ].map((area) => (
              <span
                key={area}
                className="px-4 py-2 text-sm border border-gray-200 text-gray-600 rounded-sm hover:border-[#c9a84c] hover:text-[#c9a84c] transition-colors duration-300 font-[family-name:var(--font-inter)]"
              >
                {area}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 px-6 border-t border-gray-100 bg-[#fafafa]">
        <div className="max-w-3xl mx-auto text-center">
          <div className="w-12 h-[1px] bg-[#c9a84c] mx-auto mb-6" />
          <p className="text-sm text-gray-500 font-[family-name:var(--font-inter)]">
            삼성글로벌리서치 (Samsung Global Research)
          </p>
          <p className="text-sm text-gray-500 font-[family-name:var(--font-inter)] mt-1">
            KAIST 기술경영학부 (Graduate School of Innovation & Technology Management)
          </p>
          <p className="text-xs text-gray-300 mt-6 font-[family-name:var(--font-inter)]">
            © {new Date().getFullYear()} Wonjoon Kim. All rights reserved.
          </p>
        </div>
      </footer>
    </main>
  );
}
