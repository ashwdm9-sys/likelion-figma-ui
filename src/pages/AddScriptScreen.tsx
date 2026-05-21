import { useState } from 'react'
import { SearchIcon, BellIcon, HomeIcon, ScriptIcon, CalendarIcon, UserIcon, SmallUserIcon } from '../components/Icons'
import { INITIAL_ROLES, SCRIPT_TITLE } from '../data/mockScript'

const MOCK_SCRIPTS = [
  {
    title: SCRIPT_TITLE,
    characters: INITIAL_ROLES.map(r => `${r.name}(${r.description})`),
  },
]

export default function AddScriptScreen({
  onBack,
  onNavigateToRoles,
  activeNav,
  setActiveNav,
}: {
  onBack: () => void
  onNavigateToRoles: (characters: string[]) => void
  activeNav: 'home' | 'script' | 'calendar' | 'mypage'
  setActiveNav: (nav: 'home' | 'script' | 'calendar' | 'mypage') => void
}) {
  const [scriptTitle, setScriptTitle] = useState('')
  const [titleFocused, setTitleFocused] = useState(false)
  const [showFilePicker, setShowFilePicker] = useState(false)

  return (
    <div className="relative w-full" style={{ minHeight: '100vh', background: '#fff' }}>

      {/* ── Top App Bar ── */}
      <div
        className="fixed top-0 left-1/2 -translate-x-1/2 z-40 flex flex-col justify-end items-center gap-[10px] px-[10px] pb-[16px]"
        style={{ width: 390, height: 96, background: '#fff', boxShadow: '0px 2px 16px 2px rgba(0,0,0,0.04)' }}
      >
        <div className="flex items-center justify-between" style={{ width: 370 }}>
          <button className="flex items-center gap-1" onClick={onBack}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <rect x="2" y="2" width="3" height="17" fill="#191D1F" />
              <rect x="2" y="2" width="13" height="3" fill="#191D1F" />
              <rect x="2" y="16" width="9" height="3" fill="#191D1F" />
              <rect x="14" y="14" width="8" height="8" fill="#DD373D" />
            </svg>
            <span
              className="text-[20px] font-bold w-20"
              style={{
                fontFamily: 'Noto Sans KR',
                background: 'linear-gradient(164deg, #ECECEC 0%, #191D1F 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              대보네모
            </span>
          </button>
          <div className="flex items-center justify-between" style={{ width: 71 }}>
            <button className="w-6 h-6 flex items-center justify-center">
              <SearchIcon />
            </button>
            <div className="relative w-6 h-6 flex items-center justify-center">
              <BellIcon />
              <span className="absolute rounded-full" style={{ width: 8, height: 8, background: '#DD373D', top: -2, right: -2 }} />
            </div>
          </div>
        </div>
      </div>

      {/* ── Content ── */}
      <div style={{ marginTop: 96, paddingBottom: 96 }}>

        {/* Header */}
        <div
          className="flex flex-col justify-center"
          style={{ height: 96, paddingLeft: 8, paddingRight: 8, marginTop: 42 }}
        >
          <div className="flex items-center w-full" style={{ padding: '0 10px' }}>
            <span
              className="text-[16px]"
              style={{ fontFamily: 'Noto Sans KR', color: '#858F93', lineHeight: '20px' }}
            >
              대본 정보를 입력해주세요
            </span>
          </div>
          <div className="flex items-center w-full" style={{ padding: '0 10px' }}>
            <input
              type="text"
              value={scriptTitle}
              onChange={e => setScriptTitle(e.target.value)}
              onFocus={() => setTitleFocused(true)}
              onBlur={() => setTitleFocused(false)}
              placeholder="새로운 대본"
              className="outline-none bg-transparent w-full placeholder:text-[#C8CACB] placeholder:font-bold"
              style={{
                fontFamily: 'Noto Sans KR',
                fontWeight: 700,
                fontSize: 20,
                color: '#191D1F',
                borderBottom: `2px solid ${titleFocused ? '#DD373D' : '#E0E0E0'}`,
                paddingBottom: 4,
                transition: 'border-color 0.2s',
                textAlign: 'left',
              }}
            />
          </div>
        </div>

        {/* Metadata rows — Figma: left-[16px] top-[250px], gap-[11px] */}
        <div className="flex flex-col" style={{ gap: 11, paddingLeft: 16, paddingRight: 16, marginTop: 16 }}>
          <div className="flex items-center" style={{ gap: 8 }}>
            {/* Label: Roboto 12px, w-[56px], p-[10px] */}
            <div className="flex items-center flex-shrink-0" style={{ width: 56, padding: 10 }}>
              <span style={{ fontFamily: 'Roboto', fontSize: 12, lineHeight: '16px', color: '#000000' }}>폴더</span>
            </div>
            {/* Chip: Roboto 12px, p-[10px], rounded-[30px], DBNM/gradient */}
            <div className="flex items-center flex-shrink-0" style={{
              padding: 10, borderRadius: 30,
              background: 'linear-gradient(90deg, rgba(0,0,0,0.2), rgba(0,0,0,0)), linear-gradient(90deg, #ECECEC, #ECECEC)',
              backgroundColor: '#ECECEC',
            }}>
              <span style={{ fontFamily: 'Roboto', fontSize: 12, lineHeight: '16px', color: '#000000' }}>전체 폴더</span>
            </div>
          </div>
          <div className="flex items-center" style={{ gap: 8 }}>
            <div className="flex items-center flex-shrink-0" style={{ width: 56, padding: 10 }}>
              <span style={{ fontFamily: 'Roboto', fontSize: 12, lineHeight: '16px', color: '#000000' }}>참석자</span>
            </div>
            <div className="flex items-center flex-shrink-0" style={{
              padding: 10, borderRadius: 30, gap: 10,
              background: 'linear-gradient(90deg, rgba(0,0,0,0.2), rgba(0,0,0,0)), linear-gradient(90deg, #ECECEC, #ECECEC)',
              backgroundColor: '#ECECEC',
            }}>
              <SmallUserIcon />
              <span style={{ fontFamily: 'Roboto', fontSize: 12, lineHeight: '16px', color: '#000000' }}>홍길동</span>
            </div>
          </div>
        </div>

      </div>

      {/* ── 파일 첨부 button ── */}
      <button
        className="fixed left-1/2 -translate-x-1/2 flex items-center justify-center"
        style={{
          bottom: 103,
          width: 240,
          height: 56,
          background: '#DD373D',
          borderRadius: 8,
          zIndex: 40,
        }}
        onClick={() => setShowFilePicker(true)}
      >
        <span style={{ fontFamily: 'Noto Sans KR', fontSize: 18, color: '#FFFFFF', fontWeight: 400 }}>
          파일 첨부
        </span>
      </button>

      {/* ── 파일 선택 바텀 시트 ── */}
      {showFilePicker && (
        <>
          <div
            style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.4)', zIndex: 60 }}
            onClick={() => setShowFilePicker(false)}
          />
          <div
            style={{
              position: 'fixed', bottom: 0,
              left: '50%', transform: 'translateX(-50%)',
              width: 390, zIndex: 61,
              background: '#fff',
              borderRadius: '16px 16px 0 0',
              padding: '20px 0 40px',
            }}
          >
            <div style={{ padding: '0 20px 16px', borderBottom: '1px solid #F2F4F8' }}>
              <span style={{ fontFamily: 'Noto Sans KR', fontSize: 16, fontWeight: 700, color: '#191D1F' }}>
                대본 선택
              </span>
            </div>
            {MOCK_SCRIPTS.map(script => (
              <button
                key={script.title}
                style={{
                  width: '100%', display: 'flex', alignItems: 'center',
                  gap: 12, padding: '16px 20px',
                  background: 'transparent', border: 'none', cursor: 'pointer',
                  textAlign: 'left',
                }}
                onClick={() => {
                  setShowFilePicker(false)
                  onNavigateToRoles(script.characters)
                }}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <rect x="4" y="2" width="14" height="18" rx="2" stroke="#DD373D" strokeWidth="2" />
                  <path d="M8 7h8M8 11h8M8 15h5" stroke="#DD373D" strokeWidth="2" strokeLinecap="round" />
                </svg>
                <span style={{ fontFamily: 'Noto Sans KR', fontSize: 16, color: '#191D1F' }}>
                  {script.title}
                </span>
              </button>
            ))}
          </div>
        </>
      )}

      {/* ── Bottom Navigation Bar ── */}
      <div
        className="fixed bottom-0 left-1/2 -translate-x-1/2 z-40"
        style={{ width: 390, height: 80, background: '#fff', boxShadow: '0px -2px 16px 2px rgba(0,0,0,0.04)' }}
      >
        <div className="flex items-center" style={{ gap: 32, paddingLeft: 35, paddingTop: 8 }}>
          <button className="flex flex-col items-center gap-1 cursor-pointer" style={{ width: 56, height: 48 }} onClick={() => { setActiveNav('home'); onBack() }}>
            <HomeIcon active={activeNav === 'home'} />
            <span className="text-[12px] w-full text-center leading-4" style={{ fontFamily: 'Roboto', color: activeNav === 'home' ? '#DD373D' : '#B3B3B3' }}>홈</span>
          </button>
          <button className="flex flex-col items-center gap-1 cursor-pointer" style={{ width: 56, height: 48 }} onClick={() => setActiveNav('script')}>
            <ScriptIcon active={activeNav === 'script'} />
            <span className="text-[12px] w-full text-center leading-4" style={{ fontFamily: 'Roboto', color: activeNav === 'script' ? '#DD373D' : '#B3B3B3' }}>대본</span>
          </button>
          <button className="flex flex-col items-center gap-1 cursor-pointer" style={{ width: 56, height: 48 }} onClick={() => setActiveNav('calendar')}>
            <CalendarIcon active={activeNav === 'calendar'} />
            <span className="text-[12px] w-full text-center leading-4" style={{ fontFamily: 'Roboto', color: activeNav === 'calendar' ? '#DD373D' : '#B3B3B3' }}>캘린더</span>
          </button>
          <button className="flex flex-col items-center gap-1 cursor-pointer" style={{ width: 56, height: 48 }} onClick={() => setActiveNav('mypage')}>
            <UserIcon active={activeNav === 'mypage'} />
            <span className="text-[12px] w-full text-center leading-4" style={{ fontFamily: 'Roboto', color: activeNav === 'mypage' ? '#DD373D' : '#B3B3B3' }}>마이페이지</span>
          </button>
        </div>
      </div>
    </div>
  )
}
