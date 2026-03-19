'use client'

import { useState, useEffect, useRef, useCallback } from 'react'

// SVG 아이콘 컴포넌트 모음 (모두 인라인 SVG, stroke 기반, 깔끔한 선형)

const IconGraduation = ({ className = '' }: { className?: string }) => (
  <svg className={className} width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
    <path d="M6 12v5c3 3 9 3 12 0v-5"/>
  </svg>
)

const IconBriefcase = ({ className = '' }: { className?: string }) => (
  <svg className={className} width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="7" width="20" height="14" rx="2"/>
    <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/>
    <line x1="12" y1="12" x2="12" y2="12"/>
    <path d="M2 12h20"/>
  </svg>
)

const IconBook = ({ className = '' }: { className?: string }) => (
  <svg className={className} width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/>
    <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>
  </svg>
)

const IconGlobe = ({ className = '' }: { className?: string }) => (
  <svg className={className} width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"/>
    <line x1="2" y1="12" x2="22" y2="12"/>
    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
  </svg>
)

const IconAward = ({ className = '' }: { className?: string }) => (
  <svg className={className} width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="8" r="6"/>
    <path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11"/>
  </svg>
)

const IconResearch = ({ className = '' }: { className?: string }) => (
  <svg className={className} width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="11" cy="11" r="8"/>
    <line x1="21" y1="21" x2="16.65" y2="16.65"/>
  </svg>
)

const IconChevronDown = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="6 9 12 15 18 9"/>
  </svg>
)

const IconStar = ({ className = '' }: { className?: string }) => (
  <svg className={className} width="16" height="16" viewBox="0 0 24 24" fill="currentColor" stroke="none">
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
  </svg>
)

const TimelineMarker = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" className="flex-shrink-0">
    <circle cx="8" cy="8" r="6" fill="white" stroke="#B8973A" strokeWidth="2"/>
  </svg>
)

type Lang = 'ko' | 'en' | 'ja' | 'zh'

const content: Record<Lang, {
  name: string
  nameEn: string
  title: string
  subtitle: string
  heroLine: string
  aboutTitle: string
  aboutBody: string
  educationTitle: string
  careerTitle: string
  publicationsTitle: string
  activitiesTitle: string
  researchTitle: string
  footerOrg1: string
  footerOrg2: string
  bookLabel: string
  paperLabel: string
  education: { year: string; degree: string; field: string; school: string }[]
  career: { period: string; title: string; org: string; desc: string }[]
  book: { year: string; title: string; desc: string }
  papers: { year: string; title: string; journal: string; desc: string }[]
  activities: { title: string; desc: string }[]
  researchAreas: string[]
}> = {
  ko: {
    name: '김원준',
    nameEn: 'Wonjoon Kim',
    title: '삼성글로벌리서치 대표이사',
    subtitle: 'KAIST 기술경영학부 교수',
    heroLine: '기술과 경영의 교차점에서, 혁신의 본질을 묻다',
    aboutTitle: '소개',
    aboutBody: '김원준 교수는 기술과 경영의 교차점에서 혁신의 본질을 탐구해온 학자이자 실천가입니다. 서울대학교에서 기술정책으로 박사학위를 취득한 후, 예일대학교와 뉴욕대학교를 거쳐 KAIST 기술경영학부에서 20여 년간 후학을 양성하며 한국 기술경영 분야의 지평을 넓혀왔습니다. 《탄력성장》을 통해 불확실성의 시대에 조직이 나아갈 방향을 제시하였으며, 현재 삼성글로벌리서치 대표이사로서 연구와 실무의 경계를 허물며 새로운 가치를 창출하고 있습니다.',
    educationTitle: '학력',
    careerTitle: '주요 경력',
    publicationsTitle: '주요 연구 및 저서',
    activitiesTitle: '주요 활동 및 역할',
    researchTitle: '연구 분야',
    footerOrg1: '삼성글로벌리서치 (Samsung Global Research)',
    footerOrg2: 'KAIST 기술경영학부',
    bookLabel: '저서',
    paperLabel: '논문',
    education: [
      { year: '2003', degree: '박사 (Ph.D.)', field: '기술정책', school: '서울대학교' },
      { year: '1999', degree: '석사 (M.S.)', field: '재료공학', school: '서울대학교' },
      { year: '1997', degree: '학사 (B.S.)', field: '재료공학', school: '연세대학교' },
    ],
    career: [
      { period: '2023.12 – 현재', title: '대표이사', org: '삼성글로벌리서치', desc: '그룹 기술·산업 전략, 경영진단, 글로벌 이슈 분석 총괄' },
      { period: '2005 – 현재', title: '기술경영학부 교수', org: 'KAIST', desc: '혁신전략·정책, 산업융합, 데이터 기반 사회과학 연구' },
      { period: '2019 – 2022', title: '기술경영전문대학원장', org: 'KAIST', desc: '대학원 행정 및 연구 프로그램 총괄' },
      { period: '2004 – 2005', title: '겸임조교수', org: '뉴욕대학교 (NYU Tandon)', desc: '' },
      { period: '2003 – 2006', title: '연구원', org: '예일대학교 경영대학 (Yale SOM)', desc: '' },
    ],
    book: { year: '2021', title: '탄력성장', desc: '위기 이후 지속 가능한 성장 전략에 대한 연구와 통찰 (다산북스)' },
    papers: [
      { year: '2015', title: 'Dynamic Patterns of Industry Convergence', journal: 'Research Policy, 44(9): 1734–1748', desc: '미국 전 산업 대상 산업 간 경계 변화를 대규모 텍스트 분석으로 규명' },
      { year: '2015', title: 'Reference Quality-Based Competitive Market Structure', journal: 'Intl. J. of Research in Marketing, 32(3): 284–296', desc: '소비자 참조품질 기반 혁신 시장의 경쟁구조 모형 실증' },
      { year: '2012', title: 'The Effect of the Triple Helix System and Habitat on Regional Entrepreneurship', journal: 'Research Policy, 41(1): 154–166', desc: '대학·산업·정부 상호작용이 지역 창업에 미치는 효과 계량 분석' },
    ],
    activities: [
      { title: '아시아 혁신·기업가정신학회(AIEA) 회장', desc: 'AIEA–NBER 컨퍼런스 조직위원장' },
      { title: '과학기술단체총연합회 부회장', desc: '2020–2022' },
      { title: '기술경영경제학회장', desc: '2022–2023' },
      { title: 'KAIST 국제개발협력센터장', desc: '2018–2022' },
      { title: '국제기구 자문', desc: 'World Bank · UN · ADB · IADB · Stanford FSI' },
      { title: '과학기술정책위원회 위원장', desc: '과학기술단체총연합회, 2017–2020' },
    ],
    researchAreas: ['혁신전략', '기술정책', '산업융합', '데이터 기반 사회과학', '트리플 헬릭스', '기업가정신', '경영진단', '글로벌 이슈 분석'],
  },
  en: {
    name: '김원준',
    nameEn: 'Wonjoon Kim',
    title: 'CEO, Samsung Global Research',
    subtitle: 'Professor, KAIST School of Business & Technology Management',
    heroLine: 'At the intersection of technology and management, questioning the essence of innovation',
    aboutTitle: 'About',
    aboutBody: 'Professor Wonjoon Kim is a distinguished scholar and practitioner who has devoted his career to exploring the essence of innovation at the nexus of technology and management. After earning his doctorate in Technology Policy from Seoul National University, he pursued research at Yale University and served as Adjunct Assistant Professor at New York University before joining KAIST, where he has cultivated the next generation of leaders in technology management for over two decades. Through his acclaimed work "Resilient Growth," he has offered a compelling vision for organizations navigating an era of profound uncertainty. As CEO of Samsung Global Research, he continues to bridge the divide between academic inquiry and corporate strategy, creating enduring value at the frontier of global innovation.',
    educationTitle: 'Education',
    careerTitle: 'Career',
    publicationsTitle: 'Research & Publications',
    activitiesTitle: 'Leadership & Service',
    researchTitle: 'Research Areas',
    footerOrg1: 'Samsung Global Research',
    footerOrg2: 'KAIST School of Business & Technology Management',
    bookLabel: 'Book',
    paperLabel: 'Paper',
    education: [
      { year: '2003', degree: 'Ph.D.', field: 'Technology Policy', school: 'Seoul National University' },
      { year: '1999', degree: 'M.S.', field: 'Materials Science & Engineering', school: 'Seoul National University' },
      { year: '1997', degree: 'B.S.', field: 'Materials Science & Engineering', school: 'Yonsei University' },
    ],
    career: [
      { period: '2023.12 – Present', title: 'Chief Executive Officer', org: 'Samsung Global Research', desc: 'Overseeing technology & industry strategy, management diagnostics, and global issue analysis' },
      { period: '2005 – Present', title: 'Professor', org: 'KAIST School of Business & Technology Management', desc: 'Research in innovation strategy, technology policy, and data-driven social science' },
      { period: '2019 – 2022', title: 'Dean, Graduate School of Innovation & Technology Management', org: 'KAIST', desc: '' },
      { period: '2004 – 2005', title: 'Adjunct Assistant Professor', org: 'New York University (Tandon School of Engineering)', desc: '' },
      { period: '2003 – 2006', title: 'Research Fellow', org: 'Yale School of Management', desc: '' },
    ],
    book: { year: '2021', title: 'Resilient Growth (탄력성장)', desc: 'Insights and strategies for sustainable growth beyond crises (Dasan Books)' },
    papers: [
      { year: '2015', title: 'Dynamic Patterns of Industry Convergence', journal: 'Research Policy, 44(9): 1734–1748', desc: 'Large-scale text analysis identifying cross-industry boundary shifts across U.S. industries' },
      { year: '2015', title: 'Reference Quality-Based Competitive Market Structure', journal: 'Intl. J. of Research in Marketing, 32(3): 284–296', desc: 'Empirical model of competitive structures in innovation-driven markets' },
      { year: '2012', title: 'The Effect of the Triple Helix System and Habitat on Regional Entrepreneurship', journal: 'Research Policy, 41(1): 154–166', desc: 'Econometric analysis of university-industry-government interactions on regional startups' },
    ],
    activities: [
      { title: 'President, AIEA', desc: 'Asia Innovation & Entrepreneurship Association; AIEA–NBER Conference Chair' },
      { title: 'Vice President, KOFST', desc: 'Korean Federation of Science and Technology Societies, 2020–2022' },
      { title: 'President, KOTM', desc: 'Korean Association for Technology Management & Economics, 2022–2023' },
      { title: 'Director, KAIST International Development Cooperation Center', desc: '2018–2022' },
      { title: 'International Advisory', desc: 'World Bank · UN · ADB · IADB · Stanford FSI' },
      { title: 'Chair, Science & Technology Policy Committee', desc: 'KOFST, 2017–2020' },
    ],
    researchAreas: ['Innovation Strategy', 'Technology Policy', 'Industry Convergence', 'Data-Driven Social Science', 'Triple Helix', 'Entrepreneurship', 'Management Diagnostics', 'Global Issue Analysis'],
  },
  ja: {
    name: '김원준',
    nameEn: 'Wonjoon Kim',
    title: 'サムスングローバルリサーチ 代表取締役',
    subtitle: 'KAIST 技術経営学部 教授',
    heroLine: '技術と経営の交差点から、イノベーションの本質を問う',
    aboutTitle: '紹介',
    aboutBody: '金元俊教授は、技術と経営の交差点においてイノベーションの本質を追究してきた学者であり、実践者です。ソウル大学校にて技術政策の博士号を取得後、イェール大学およびニューヨーク大学を経て、KAISTの技術経営学部にて20年以上にわたり後進の育成に尽力し、韓国における技術経営分野の新たな地平を切り拓いてまいりました。著書『弾力成長（탄력성장）』では、不確実性の時代における組織の進むべき方向を提示し、現在はサムスングローバルリサーチの代表取締役として、学術と実務の垣根を越えた新たな価値の創出に取り組んでおります。',
    educationTitle: '学歴',
    careerTitle: '主な経歴',
    publicationsTitle: '研究・著作',
    activitiesTitle: '主な活動・役職',
    researchTitle: '研究分野',
    footerOrg1: 'サムスングローバルリサーチ (Samsung Global Research)',
    footerOrg2: 'KAIST 技術経営学部',
    bookLabel: '著書',
    paperLabel: '論文',
    education: [
      { year: '2003', degree: '博士 (Ph.D.)', field: '技術政策', school: 'ソウル大学校' },
      { year: '1999', degree: '修士 (M.S.)', field: '材料工学', school: 'ソウル大学校' },
      { year: '1997', degree: '学士 (B.S.)', field: '材料工学', school: '延世大学校' },
    ],
    career: [
      { period: '2023.12 – 現在', title: '代表取締役', org: 'サムスングローバルリサーチ', desc: 'グループ技術・産業戦略、経営診断、グローバル課題分析を統括' },
      { period: '2005 – 現在', title: '技術経営学部 教授', org: 'KAIST', desc: 'イノベーション戦略・政策、産業融合、データ駆動型社会科学の研究' },
      { period: '2019 – 2022', title: '技術経営専門大学院長', org: 'KAIST', desc: '' },
      { period: '2004 – 2005', title: '兼任助教授', org: 'ニューヨーク大学 (NYU Tandon)', desc: '' },
      { period: '2003 – 2006', title: '研究員', org: 'イェール大学経営大学院 (Yale SOM)', desc: '' },
    ],
    book: { year: '2021', title: '弾力成長（탄력성장）', desc: '危機後の持続可能な成長戦略に関する研究と洞察（ダサンブックス）' },
    papers: [
      { year: '2015', title: 'Dynamic Patterns of Industry Convergence', journal: 'Research Policy, 44(9): 1734–1748', desc: '米国全産業における産業間境界変化を大規模テキスト分析で解明' },
      { year: '2015', title: 'Reference Quality-Based Competitive Market Structure', journal: 'Intl. J. of Research in Marketing, 32(3): 284–296', desc: '消費者参照品質に基づくイノベーション市場の競争構造モデルの実証' },
      { year: '2012', title: 'The Effect of the Triple Helix System and Habitat on Regional Entrepreneurship', journal: 'Research Policy, 41(1): 154–166', desc: '大学・産業・政府の相互作用が地域起業に与える効果の計量分析' },
    ],
    activities: [
      { title: 'アジアイノベーション・アントレプレナーシップ学会(AIEA) 会長', desc: 'AIEA–NBERカンファレンス組織委員長' },
      { title: '科学技術団体総連合会 副会長', desc: '2020–2022' },
      { title: '技術経営経済学会長', desc: '2022–2023' },
      { title: 'KAIST 国際開発協力センター長', desc: '2018–2022' },
      { title: '国際機関諮問', desc: 'World Bank · UN · ADB · IADB · スタンフォード大FSI' },
      { title: '科学技術政策委員会 委員長', desc: '科学技術団体総連合会, 2017–2020' },
    ],
    researchAreas: ['イノベーション戦略', '技術政策', '産業融合', 'データ駆動型社会科学', 'トリプルヘリックス', 'アントレプレナーシップ', '経営診断', 'グローバル課題分析'],
  },
  zh: {
    name: '김원준',
    nameEn: 'Wonjoon Kim',
    title: '三星全球研究院 首席执行官',
    subtitle: 'KAIST 技术经营学部 教授',
    heroLine: '在技术与管理的交汇处，探寻创新的本质',
    aboutTitle: '简介',
    aboutBody: '金元俊教授是一位在技术与管理交汇领域深耕多年的学者与实践者。他在首尔大学获得技术政策博士学位后，先后在耶鲁大学和纽约大学从事研究与教学工作，此后在KAIST技术经营学部执教逾二十年，培养了大批技术管理领域的杰出人才，拓展了韩国技术经营学科的广度与深度。通过著作《弹力增长》，他为不确定时代中的组织指明了前行方向。目前，作为三星全球研究院首席执行官，他致力于打破学术研究与企业实践之间的壁垒，持续创造新的价值。',
    educationTitle: '学历',
    careerTitle: '主要经历',
    publicationsTitle: '研究与著作',
    activitiesTitle: '主要活动与职务',
    researchTitle: '研究领域',
    footerOrg1: '三星全球研究院 (Samsung Global Research)',
    footerOrg2: 'KAIST 技术经营学部',
    bookLabel: '著作',
    paperLabel: '论文',
    education: [
      { year: '2003', degree: '博士 (Ph.D.)', field: '技术政策', school: '首尔大学' },
      { year: '1999', degree: '硕士 (M.S.)', field: '材料工学', school: '首尔大学' },
      { year: '1997', degree: '学士 (B.S.)', field: '材料工学', school: '延世大学' },
    ],
    career: [
      { period: '2023.12 – 现在', title: '首席执行官', org: '三星全球研究院', desc: '统筹集团技术与产业战略、经营诊断及全球议题分析' },
      { period: '2005 – 现在', title: '技术经营学部 教授', org: 'KAIST', desc: '创新战略与政策、产业融合、数据驱动社会科学研究' },
      { period: '2019 – 2022', title: '技术经营专门研究生院院长', org: 'KAIST', desc: '' },
      { period: '2004 – 2005', title: '兼任助理教授', org: '纽约大学 (NYU Tandon)', desc: '' },
      { period: '2003 – 2006', title: '研究员', org: '耶鲁大学管理学院 (Yale SOM)', desc: '' },
    ],
    book: { year: '2021', title: '弹力增长（탄력성장）', desc: '关于危机后可持续增长战略的研究与洞察（多山图书）' },
    papers: [
      { year: '2015', title: 'Dynamic Patterns of Industry Convergence', journal: 'Research Policy, 44(9): 1734–1748', desc: '通过大规模文本分析揭示美国各产业间边界的动态变化' },
      { year: '2015', title: 'Reference Quality-Based Competitive Market Structure', journal: 'Intl. J. of Research in Marketing, 32(3): 284–296', desc: '基于消费者参考质量的创新市场竞争结构实证模型' },
      { year: '2012', title: 'The Effect of the Triple Helix System and Habitat on Regional Entrepreneurship', journal: 'Research Policy, 41(1): 154–166', desc: '大学-产业-政府三重螺旋对区域创业影响的计量分析' },
    ],
    activities: [
      { title: '亚洲创新与创业学会(AIEA) 会长', desc: 'AIEA–NBER会议组织委员长' },
      { title: '科学技术团体总联合会 副会长', desc: '2020–2022' },
      { title: '技术经营经济学会会长', desc: '2022–2023' },
      { title: 'KAIST 国际开发合作中心主任', desc: '2018–2022' },
      { title: '国际机构咨询', desc: 'World Bank · UN · ADB · IADB · 斯坦福FSI' },
      { title: '科学技术政策委员会 委员长', desc: '科学技术团体总联合会, 2017–2020' },
    ],
    researchAreas: ['创新战略', '技术政策', '产业融合', '数据驱动社会科学', '三重螺旋', '创业精神', '经营诊断', '全球议题分析'],
  },
}

const langLabels: Record<Lang, string> = { ko: '한', en: 'EN', ja: '日', zh: '中' }

function useScrollAnimation() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const node = ref.current
    if (!node) return
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    )

    const elements = node.querySelectorAll('.fade-in-up')
    elements.forEach((el) => observer.observe(el))

    return () => {
      elements.forEach((el) => observer.unobserve(el))
    }
  }, [])

  return ref
}

export default function Home() {
  const [lang, setLang] = useState<Lang>('ko')
  const [scrolled, setScrolled] = useState(false)
  const sectionRef = useScrollAnimation()
  const t = content[lang]

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Re-trigger fade-in on language change
  const triggerAnimations = useCallback(() => {
    const node = sectionRef.current
    if (!node) return
    const elements = node.querySelectorAll('.fade-in-up')
    elements.forEach((el) => {
      el.classList.remove('visible')
      // Force reflow
      void (el as HTMLElement).offsetWidth
      el.classList.add('visible')
    })
  }, [sectionRef])

  useEffect(() => {
    triggerAnimations()
  }, [lang, triggerAnimations])

  return (
    <div ref={sectionRef}>
      {/* Navbar */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? 'nav-blur bg-white/80 shadow-sm' : 'bg-transparent'
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <a href="#" className="font-[family-name:var(--font-cormorant)] text-xl md:text-2xl font-semibold text-[#1a2744]">
            {t.nameEn}
          </a>
          <div className="flex gap-1">
            {(Object.keys(langLabels) as Lang[]).map((l) => (
              <button
                key={l}
                onClick={() => setLang(l)}
                className={`lang-pill px-2.5 py-1 text-xs md:text-sm rounded-full font-medium font-[family-name:var(--font-inter)] ${
                  lang === l ? 'active' : 'text-gray-500'
                }`}
              >
                {langLabels[l]}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative min-h-screen flex flex-col items-center justify-center px-6 text-center hero-pattern">
        <div className="max-w-4xl mx-auto">
          <div className="fade-in-up">
            <h1 className="font-[family-name:var(--font-cormorant)] text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-light tracking-tight text-[#0D1117] mb-4">
              {t.name}
            </h1>
          </div>
          <div className="fade-in-up stagger-1">
            <p className="font-[family-name:var(--font-cormorant)] text-2xl sm:text-3xl md:text-4xl font-light text-gray-400 tracking-wider mb-8">
              {t.nameEn}
            </p>
          </div>
          <div className="fade-in-up stagger-2">
            <hr className="gold-divider w-16 mb-8" />
          </div>
          <div className="fade-in-up stagger-3">
            <p className="font-[family-name:var(--font-inter)] text-base md:text-lg text-[#1a2744] font-medium mb-2">
              {t.title}
            </p>
            <p className="font-[family-name:var(--font-inter)] text-sm md:text-base text-gray-500 mb-8">
              {t.subtitle}
            </p>
          </div>
          <div className="fade-in-up stagger-4">
            <p className="font-[family-name:var(--font-cormorant)] text-lg md:text-xl text-gray-500 italic">
              {t.heroLine}
            </p>
          </div>
        </div>
        {/* Scroll indicator */}
        <div className="absolute bottom-10 animate-bounce text-[#B8973A]">
          <IconChevronDown />
        </div>
      </section>

      {/* About */}
      <section className="py-20 md:py-28 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="fade-in-up mb-12">
            <h2 className="font-[family-name:var(--font-cormorant)] text-3xl md:text-4xl font-light text-[#1a2744] mb-2">{t.aboutTitle}</h2>
            <hr className="gold-divider w-12 !mx-0 mt-4" />
          </div>
          <div className="grid md:grid-cols-5 gap-10 md:gap-16">
            <div className="md:col-span-3 fade-in-up stagger-1">
              <p className="font-[family-name:var(--font-inter)] text-gray-600 leading-relaxed text-base md:text-lg">
                {t.aboutBody}
              </p>
            </div>
            <div className="md:col-span-2 fade-in-up stagger-2">
              <div className="grid grid-cols-2 gap-3">
                {[
                  { icon: <IconGraduation className="text-[#B8973A]" />, label: lang === 'ko' ? '학술 연구' : lang === 'en' ? 'Academia' : lang === 'ja' ? '学術研究' : '学术研究', value: '20+' },
                  { icon: <IconGlobe className="text-[#B8973A]" />, label: lang === 'ko' ? '글로벌 자문' : lang === 'en' ? 'Global Advisory' : lang === 'ja' ? 'グローバル諮問' : '全球咨询', value: 'WB · UN' },
                  { icon: <IconBook className="text-[#B8973A]" />, label: lang === 'ko' ? '저서' : lang === 'en' ? 'Publications' : lang === 'ja' ? '著書' : '著作', value: '탄력성장' },
                  { icon: <IconBriefcase className="text-[#B8973A]" />, label: lang === 'ko' ? '현직' : lang === 'en' ? 'Current' : lang === 'ja' ? '現職' : '现任', value: 'CEO' },
                ].map((item, i) => (
                  <div
                    key={i}
                    className={`card-hover border border-[#E8E0D0] rounded-sm p-4 bg-white fade-in-up stagger-${i + 2}`}
                  >
                    <span className="mb-2 block">{item.icon}</span>
                    <p className="font-[family-name:var(--font-inter)] text-xs text-gray-400 uppercase tracking-wider">{item.label}</p>
                    <p className="font-[family-name:var(--font-cormorant)] text-lg font-semibold text-[#1a2744] mt-1">{item.value}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education Timeline */}
      <section className="py-20 md:py-28 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="fade-in-up mb-12">
            <div className="flex items-center gap-3">
              <IconGraduation className="text-[#B8973A] w-6 h-6" />
              <h2 className="font-[family-name:var(--font-cormorant)] text-3xl md:text-4xl font-light text-[#1a2744] mb-0">{t.educationTitle}</h2>
            </div>
            <hr className="gold-divider w-12 !mx-0 mt-4" />
          </div>
          <div className="space-y-8">
            {t.education.map((edu, i) => (
              <div key={edu.year} className={`fade-in-up stagger-${i + 1} relative flex gap-6 items-start`}>
                <div className="flex flex-col items-center">
                  <TimelineMarker />
                  {i < t.education.length - 1 && (
                    <div className="w-0.5 h-full bg-gradient-to-b from-[#B8973A] to-[#E8E0D0] mt-1 min-h-[40px]" />
                  )}
                </div>
                <div className="pb-4">
                  <span className="font-[family-name:var(--font-inter)] text-sm text-[#B8973A] font-semibold">{edu.year}</span>
                  <p className="font-[family-name:var(--font-cormorant)] text-xl font-semibold text-[#1a2744] mt-1">{edu.degree}</p>
                  <p className="font-[family-name:var(--font-inter)] text-gray-600">{edu.field}</p>
                  <p className="font-[family-name:var(--font-inter)] text-sm text-gray-400">{edu.school}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Career Timeline */}
      <section className="py-20 md:py-28 px-6 bg-white border-t border-[#E8E0D0]">
        <div className="max-w-4xl mx-auto">
          <div className="fade-in-up mb-12">
            <div className="flex items-center gap-3">
              <IconBriefcase className="text-[#B8973A] w-6 h-6" />
              <h2 className="font-[family-name:var(--font-cormorant)] text-3xl md:text-4xl font-light text-[#1a2744] mb-0">{t.careerTitle}</h2>
            </div>
            <hr className="gold-divider w-12 !mx-0 mt-4" />
          </div>
          <div className="space-y-8">
            {t.career.map((c, i) => (
              <div key={i} className={`fade-in-up stagger-${Math.min(i + 1, 5)} relative flex gap-6 items-start`}>
                <div className="flex flex-col items-center">
                  <TimelineMarker />
                  {i < t.career.length - 1 && (
                    <div className="w-0.5 h-full bg-gradient-to-b from-[#B8973A] to-[#E8E0D0] mt-1 min-h-[40px]" />
                  )}
                </div>
                <div className="pb-4">
                  <span className="font-[family-name:var(--font-inter)] text-sm text-[#B8973A] font-semibold">{c.period}</span>
                  <p className="font-[family-name:var(--font-cormorant)] text-xl font-semibold text-[#1a2744] mt-1">{c.title}</p>
                  <p className="font-[family-name:var(--font-inter)] text-gray-600">{c.org}</p>
                  {c.desc && <p className="font-[family-name:var(--font-inter)] text-sm text-gray-400 mt-1">{c.desc}</p>}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Publications */}
      <section className="py-20 md:py-28 px-6 bg-white border-t border-[#E8E0D0]">
        <div className="max-w-4xl mx-auto">
          <div className="fade-in-up mb-12">
            <div className="flex items-center gap-3">
              <IconBook className="text-[#B8973A] w-6 h-6" />
              <h2 className="font-[family-name:var(--font-cormorant)] text-3xl md:text-4xl font-light text-[#1a2744] mb-0">{t.publicationsTitle}</h2>
            </div>
            <hr className="gold-divider w-12 !mx-0 mt-4" />
          </div>
          <div className="space-y-6">
            {/* Book */}
            <div className="fade-in-up card-hover border border-[#E8E0D0] rounded-sm p-6 md:p-8 bg-white">
              <div className="flex items-center gap-3 mb-4">
                <span className="font-[family-name:var(--font-inter)] text-xs bg-[#1a2744] text-white px-3 py-1 rounded-sm tracking-wider uppercase">
                  {t.bookLabel}
                </span>
                <span className="font-[family-name:var(--font-inter)] text-sm text-gray-400">{t.book.year}</span>
              </div>
              <h3 className="font-[family-name:var(--font-cormorant)] text-xl md:text-2xl font-semibold text-[#1a2744] mb-2">{t.book.title}</h3>
              <p className="font-[family-name:var(--font-inter)] text-gray-500 text-sm">{t.book.desc}</p>
            </div>

            {/* Papers */}
            {t.papers.map((paper, i) => (
              <div key={i} className={`fade-in-up stagger-${i + 1} card-hover border border-[#E8E0D0] rounded-sm p-6 md:p-8 bg-white`}>
                <div className="flex items-center gap-3 mb-4">
                  <span className="font-[family-name:var(--font-inter)] text-xs bg-white border border-[#E8E0D0] text-[#1a2744] px-3 py-1 rounded-sm tracking-wider uppercase">
                    {t.paperLabel}
                  </span>
                  <span className="font-[family-name:var(--font-inter)] text-sm text-gray-400">{paper.year}</span>
                </div>
                <h3 className="font-[family-name:var(--font-cormorant)] text-lg font-medium italic text-[#1a2744] mb-2">{paper.title}</h3>
                <p className="font-[family-name:var(--font-inter)] text-sm text-[#B8973A] mb-2">{paper.journal}</p>
                <p className="font-[family-name:var(--font-inter)] text-gray-500 text-sm">{paper.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Activities */}
      <section className="py-20 md:py-28 px-6 bg-white border-t border-[#E8E0D0]">
        <div className="max-w-4xl mx-auto">
          <div className="fade-in-up mb-12">
            <div className="flex items-center gap-3">
              <IconGlobe className="text-[#B8973A] w-6 h-6" />
              <h2 className="font-[family-name:var(--font-cormorant)] text-3xl md:text-4xl font-light text-[#1a2744] mb-0">{t.activitiesTitle}</h2>
            </div>
            <hr className="gold-divider w-12 !mx-0 mt-4" />
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            {t.activities.map((a, i) => (
              <div key={i} className={`fade-in-up stagger-${Math.min(i + 1, 6)} card-hover border border-[#E8E0D0] rounded-sm p-5 bg-white`}>
                <p className="font-[family-name:var(--font-inter)] font-medium text-[#1a2744] mb-1 text-sm md:text-base">{a.title}</p>
                <p className="font-[family-name:var(--font-inter)] text-xs md:text-sm text-gray-400">{a.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Research Areas */}
      <section className="py-20 md:py-28 px-6 bg-white border-t border-[#E8E0D0]">
        <div className="max-w-4xl mx-auto">
          <div className="fade-in-up mb-12">
            <div className="flex items-center gap-3">
              <IconResearch className="text-[#B8973A] w-6 h-6" />
              <h2 className="font-[family-name:var(--font-cormorant)] text-3xl md:text-4xl font-light text-[#1a2744] mb-0">{t.researchTitle}</h2>
            </div>
            <hr className="gold-divider w-12 !mx-0 mt-4" />
          </div>
          <div className="flex flex-wrap gap-3 fade-in-up stagger-1">
            {t.researchAreas.map((area) => (
              <span
                key={area}
                className="font-[family-name:var(--font-inter)] inline-flex items-center gap-1.5 px-4 py-2 text-sm border border-[#E8E0D0] text-gray-600 rounded-sm card-hover cursor-default"
              >
                <IconStar className="text-[#B8973A] w-3 h-3 flex-shrink-0" />
                {area}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 px-6 border-t border-[#E8E0D0] bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <hr className="gold-divider w-12 mb-8" />
          <p className="font-[family-name:var(--font-inter)] text-sm text-gray-500">{t.footerOrg1}</p>
          <p className="font-[family-name:var(--font-inter)] text-sm text-gray-500 mt-1">{t.footerOrg2}</p>
          <p className="font-[family-name:var(--font-inter)] text-xs text-gray-300 mt-6">
            © {new Date().getFullYear()} Wonjoon Kim. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}
