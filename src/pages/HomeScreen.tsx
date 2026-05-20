import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import SearchScreen from './SearchScreen'
import NotificationsScreen from './NotificationsScreen'
import AddScriptScreen from './AddScriptScreen'
import RoleSelectionScreen from './RoleSelectionScreen'
import CalendarSection from '../components/CalendarSection'
import FilterChips from '../components/FilterChips'
import ScriptCard from '../components/ScriptCard'
import { scriptCards } from '../data/mockData'
import { 
  SearchIcon, BellIcon, HomeIcon, ScriptIcon, 
  CalendarIcon, UserIcon, CloseIcon, FabIcon
} from '../components/Icons'

export default function HomeScreen() {
  const navigate = useNavigate()
  const [screen, setScreen] = useState<'main' | 'search' | 'notifications' | 'add-script' | 'role-selection'>('main')
  const [activeNav, setActiveNav] = useState<'home' | 'script' | 'calendar' | 'mypage'>('home')
  const [activeFilter, setActiveFilter] = useState<'recent' | 'shared'>('recent')
  const [fabOpen, setFabOpen] = useState(false)
  const [roleCharacters, setRoleCharacters] = useState<string[]>([])

  if (screen === 'search') return <SearchScreen onBack={() => setScreen('main')} />
  if (screen === 'notifications') return <NotificationsScreen onBack={() => setScreen('main')} />
  if (screen === 'add-script') return (
    <AddScriptScreen
      onBack={() => setScreen('main')}
      onNavigateToRoles={characters => {
        setRoleCharacters(characters)
        setScreen('role-selection')
      }}
      activeNav={activeNav}
      setActiveNav={setActiveNav}
    />
  )
  if (screen === 'role-selection') return (
    <RoleSelectionScreen
      characters={roleCharacters}
      onBack={() => setScreen('add-script')}
      onPractice={() => navigate('/script')}
      activeNav={activeNav}
      setActiveNav={setActiveNav}
    />
  )

  return (
    <div className="relative w-full" style={{ minHeight: '100vh', background: '#fff' }}>
      <div
        className="fixed top-0 left-1/2 -translate-x-1/2 z-40 flex flex-col justify-end items-center gap-[10px] px-[10px] pb-[16px]"
        style={{
          width: 390,
          height: 96,
          background: '#fff',
          boxShadow: '0px 2px 16px 2px rgba(0,0,0,0.04)',
        }}
      >
        <div className="flex items-center justify-between" style={{ width: 370 }}>
          <button
            className="flex items-center gap-1 cursor-pointer"
            onClick={() => { setScreen('main'); setActiveNav('home') }}
          >
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
            <button className="w-6 h-6 flex items-center justify-center cursor-pointer" onClick={() => setScreen('search')}>
              <SearchIcon />
            </button>
            <div className="relative w-6 h-6 flex items-center justify-center">
              <button className="cursor-pointer" onClick={() => setScreen('notifications')}>
                <BellIcon />
              </button>
              <span
                className="absolute rounded-full"
                style={{
                  width: 8, height: 8, background: '#DD373D', top: -2, right: -2,
                }}
              />
            </div>
          </div>
        </div>
      </div>

      <div
        className="flex flex-col gap-4 overflow-y-auto"
        style={{ marginTop: 96, paddingBottom: 96, paddingLeft: 16, paddingRight: 16 }}
      >
        <CalendarSection />
        <FilterChips active={activeFilter} onToggle={setActiveFilter} />

        <div className="flex flex-col gap-2 w-full">
          {scriptCards.map((card, i) => (
            <ScriptCard key={i} {...card} />
          ))}
        </div>
      </div>

      <div
        className="fixed bottom-0 left-1/2 -translate-x-1/2 z-40"
        style={{
          width: 390, height: 80, background: '#fff', boxShadow: '0px -2px 16px 2px rgba(0,0,0,0.04)',
        }}
      >
        <div className="flex items-center" style={{ gap: 32, paddingLeft: 35, paddingTop: 8 }}>
          <button
            className="flex flex-col items-center gap-1 cursor-pointer"
            style={{ width: 56, height: 48 }}
            onClick={() => setActiveNav('home')}
          >
            <HomeIcon active={activeNav === 'home'} />
            <span className="text-[12px] w-full text-center leading-4" style={{ fontFamily: 'Roboto', color: activeNav === 'home' ? '#DD373D' : '#B3B3B3' }}>홈</span>
          </button>
          <button
            className="flex flex-col items-center gap-1 cursor-pointer"
            style={{ width: 56, height: 48 }}
            onClick={() => setActiveNav('script')}
          >
            <ScriptIcon active={activeNav === 'script'} />
            <span className="text-[12px] w-full text-center leading-4" style={{ fontFamily: 'Roboto', color: activeNav === 'script' ? '#DD373D' : '#B3B3B3' }}>대본</span>
          </button>
          <button
            className="flex flex-col items-center gap-1 cursor-pointer"
            style={{ width: 56, height: 48 }}
            onClick={() => setActiveNav('calendar')}
          >
            <CalendarIcon active={activeNav === 'calendar'} />
            <span className="text-[12px] w-full text-center leading-4" style={{ fontFamily: 'Roboto', color: activeNav === 'calendar' ? '#DD373D' : '#B3B3B3' }}>캘린더</span>
          </button>
          <button
            className="flex flex-col items-center gap-1 cursor-pointer"
            style={{ width: 56, height: 48 }}
            onClick={() => setActiveNav('mypage')}
          >
            <UserIcon active={activeNav === 'mypage'} />
            <span className="text-[12px] w-full text-center leading-4" style={{ fontFamily: 'Roboto', color: activeNav === 'mypage' ? '#DD373D' : '#B3B3B3' }}>마이페이지</span>
          </button>
        </div>
      </div>

      <button
        className="fixed z-50 flex items-center justify-center transition-transform active:scale-95"
        style={{
          width: 64, height: 64, bottom: 104, right: 'calc(50% - 195px + 16px)',
          ...(fabOpen
            ? { background: '#191D1F', borderRadius: '50%', boxShadow: '0px 4px 16px rgba(204,14,26,0.4)' }
            : { background: 'transparent' }
          ),
        }}
        onClick={() => setFabOpen((v) => !v)}
      >
        <div
          className="transition-transform duration-300"
          style={{ transform: fabOpen ? 'rotate(45deg)' : 'rotate(0deg)' }}
        >
          {fabOpen ? <CloseIcon /> : <FabIcon />}
        </div>
      </button>

      {fabOpen && (
        <>
          <div
            className="fixed inset-0 z-30"
            style={{ background: 'rgba(0,0,0,0.05)' }}
            onClick={() => setFabOpen(false)}
          />
          <div
            className="fixed z-50 flex flex-col overflow-hidden"
            style={{
              bottom: 138, right: 'calc(50% - 195px + 51px)', width: 148,
              background: '#FFFFFF', boxShadow: '0px 4px 16px rgba(0,0,0,0.12)', borderRadius: 8,
            }}
          >
            <button
              className="flex items-center justify-center w-full"
              style={{ padding: '10px 10px' }}
              onClick={() => { alert('공유 프로젝트'); setFabOpen(false) }}
            >
              <span style={{ fontFamily: 'Noto Sans KR', fontSize: 18, fontWeight: 400, color: '#000000', lineHeight: '24px', whiteSpace: 'nowrap' }}>
                공유 프로젝트
              </span>
            </button>
            <div style={{ height: 1, background: '#F0F0F0' }} />
            <button
              className="flex items-center justify-center w-full"
              style={{ padding: '10px 10px' }}
              onClick={() => { setFabOpen(false); setScreen('add-script') }}
            >
              <span style={{ fontFamily: 'Noto Sans KR', fontSize: 18, fontWeight: 400, color: '#000000', lineHeight: '24px', whiteSpace: 'nowrap' }}>
                새로운 대본 추가
              </span>
            </button>
          </div>
        </>
      )}
    </div>
  )
}