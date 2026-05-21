import { useState } from 'react'
import {
  SearchIcon, BellIcon,
  HomeIcon, ScriptIcon, CalendarIcon, UserIcon,
} from '../components/Icons'

// ic:round-plus — filled red circle with white plus
function PlusCircleIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="10" fill="#DD373D" />
      <path d="M12 7v10M7 12h10" stroke="#fff" strokeWidth="2" strokeLinecap="round" />
    </svg>
  )
}

// X icon — grey cross
function RemoveIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path d="M6 6l12 12M18 6L6 18" stroke="#858F93" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  )
}

// ── Section header row (내 배역 / 상대 배역) ──────────────────────────────
// Figma: bg-[#F2F4F8] h-[32px] p-[10px]. 내 배역 has border-[0.8px solid #BDBDBD], 상대 배역 has no border.
function SectionHeader({ label, withBorder = false }: { label: string; withBorder?: boolean }) {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        padding: '10px',
        height: 32,
        background: '#F2F4F8',
        ...(withBorder ? { border: '0.8px solid #BDBDBD' } : {}),
      }}
    >
      <span style={{ fontFamily: 'Noto Sans KR', fontSize: 16, fontWeight: 400, color: '#000000', lineHeight: '20px', letterSpacing: '0.2px' }}>
        {label}
      </span>
    </div>
  )
}

// ── Row with explicit icon slot ───────────────────────────────────────────
// Figma: h-[56px] gap-[16px] px-[8px] py-[10px]. Role name: 16px Noto Sans, tracking-[0.2px], leading-[20px].
function CharacterRow({ name, icon, onAction }: { name: string; icon: React.ReactNode; onAction: () => void }) {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: 16,
        height: 56,
        padding: '10px 8px',
        background: '#FFFFFF',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: 8, flex: 1 }}>
        <div style={{ width: 22, height: 22, borderRadius: '50%', background: '#D9D9D9', flexShrink: 0 }} />
        <span style={{ fontFamily: 'Noto Sans KR', fontSize: 16, fontWeight: 400, color: '#000000', lineHeight: '20px', letterSpacing: '0.2px' }}>
          {name}
        </span>
      </div>
      <button
        onClick={onAction}
        style={{ flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 0, background: 'transparent', border: 'none', cursor: 'pointer' }}
      >
        {icon}
      </button>
    </div>
  )
}

// ── TopAppBar (shared style) ─────────────────────────────────────────────
function TopAppBar({ onLogoClick }: { onLogoClick: () => void }) {
  return (
    <div
      className="fixed top-0 left-1/2 -translate-x-1/2 z-40 flex flex-col justify-end items-center gap-[10px] px-[10px] pb-[16px]"
      style={{ width: 390, height: 96, background: '#fff', boxShadow: '0px 2px 16px 2px rgba(0,0,0,0.04)' }}
    >
      <div className="flex items-center justify-between" style={{ width: 370 }}>
        <button className="flex items-center gap-1" onClick={onLogoClick}>
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
          <button className="w-6 h-6 flex items-center justify-center"><SearchIcon /></button>
          <div className="relative w-6 h-6 flex items-center justify-center">
            <BellIcon />
            <span className="absolute rounded-full" style={{ width: 8, height: 8, background: '#DD373D', top: -2, right: -2 }} />
          </div>
        </div>
      </div>
    </div>
  )
}

// ── BottomNav ────────────────────────────────────────────────────────────
function BottomNav({
  activeNav,
  setActiveNav,
  onHomeClick,
}: {
  activeNav: 'home' | 'script' | 'calendar' | 'mypage'
  setActiveNav: (v: 'home' | 'script' | 'calendar' | 'mypage') => void
  onHomeClick: () => void
}) {
  return (
    <div
      className="fixed bottom-0 left-1/2 -translate-x-1/2 z-40"
      style={{ width: 390, height: 80, background: '#fff', boxShadow: '0px -2px 16px 2px rgba(0,0,0,0.04)' }}
    >
      <div className="flex items-center" style={{ gap: 32, paddingLeft: 35, paddingTop: 8 }}>
        {([
          { key: 'home' as const, label: '홈', Icon: HomeIcon, onClick: onHomeClick as (() => void) | undefined },
          { key: 'script' as const, label: '대본', Icon: ScriptIcon, onClick: undefined },
          { key: 'calendar' as const, label: '캘린더', Icon: CalendarIcon, onClick: undefined },
          { key: 'mypage' as const, label: '마이페이지', Icon: UserIcon, onClick: undefined },
        ]).map(({ key, label, Icon, onClick }) => (
          <button
            key={key}
            className="flex flex-col items-center gap-1 cursor-pointer"
            style={{ width: 56, height: 48 }}
            onClick={() => { setActiveNav(key); onClick?.() }}
          >
            <Icon active={activeNav === key} />
            <span className="text-[12px] w-full text-center leading-4"
              style={{ fontFamily: 'Roboto', color: activeNav === key ? '#DD373D' : '#B3B3B3' }}>
              {label}
            </span>
          </button>
        ))}
      </div>
    </div>
  )
}

// ── Main screen ──────────────────────────────────────────────────────────
export default function RoleSelectionScreen({
  characters,
  onBack,
  onPractice,
  activeNav,
  setActiveNav,
}: {
  characters: string[]
  onBack: () => void
  onPractice: (myRoles: string[]) => void
  activeNav: 'home' | 'script' | 'calendar' | 'mypage'
  setActiveNav: (nav: 'home' | 'script' | 'calendar' | 'mypage') => void
}) {
  const [myRoles, setMyRoles] = useState<string[]>([])

  const otherRoles = characters.filter(c => !myRoles.includes(c))

  const add = (name: string) => setMyRoles(prev => [...prev, name])
  const remove = (name: string) => setMyRoles(prev => prev.filter(r => r !== name))

  return (
    <div className="relative w-full" style={{ minHeight: '100vh', background: '#fff' }}>

      <TopAppBar onLogoClick={onBack} />

      {/* ── Scrollable content (starts after 96px top bar) ── */}
      <div style={{ marginTop: 96, paddingBottom: 180 }}>

        {/* Title: "배역을 선택해주세요" — y=128, padding-top=32 from top bar */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '32px 31px 20px',
          }}
        >
          <span style={{ fontFamily: 'Noto Sans KR', fontSize: 20, fontWeight: 700, color: '#000000' }}>
            배역을 선택해주세요
          </span>
        </div>

        {/* 배역 설정 container — x=16, width=358 */}
        <div style={{ marginLeft: 16, marginRight: 16 }}>

          {/* ── 내 배역 ── */}
          <SectionHeader label="내 배역" />

          {/* Selected roles (내 배역) */}
          <div style={{ background: '#fff', minHeight: 52 }}>
            {myRoles.length === 0 ? (
              <div style={{
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                height: 52, borderBottom: '1px solid #F2F4F8',
              }}>
                <span style={{ fontFamily: 'Noto Sans KR', fontSize: 13, color: '#B3B3B3' }}>
                  + 버튼으로 내 배역을 추가하세요
                </span>
              </div>
            ) : (
              myRoles.map(name => (
                <CharacterRow
                  key={name}
                  name={name}
                  icon={<RemoveIcon />}
                  onAction={() => remove(name)}
                />
              ))
            )}
          </div>

          {/* ── 상대 배역 ── */}
          <div style={{ marginTop: 2 }}>
            <SectionHeader label="상대 배역" />
          </div>

          {/* Available roles (상대 배역) */}
          <div style={{ background: '#fff' }}>
            {characters.length === 0 ? (
              <div style={{
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                height: 56, borderBottom: '1px solid #F2F4F8',
              }}>
                <span style={{ fontFamily: 'Noto Sans KR', fontSize: 13, color: '#B3B3B3' }}>
                  파일에서 등장인물을 찾지 못했습니다
                </span>
              </div>
            ) : otherRoles.length === 0 ? (
              <div style={{
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                height: 52, borderBottom: '1px solid #F2F4F8',
              }}>
                <span style={{ fontFamily: 'Noto Sans KR', fontSize: 13, color: '#B3B3B3' }}>
                  모든 배역이 내 배역으로 추가되었습니다
                </span>
              </div>
            ) : (
              otherRoles.map(name => (
                <CharacterRow
                  key={name}
                  name={name}
                  icon={<PlusCircleIcon />}
                  onAction={() => add(name)}
                />
              ))
            )}
          </div>

        </div>
      </div>

      {/* ── 연습하기 button — always red, always enabled ── */}
      <button
        className="fixed left-1/2 -translate-x-1/2 flex items-center justify-center z-40"
        style={{
          bottom: 103,
          width: 240,
          height: 56,
          background: '#DD373D',
          borderRadius: 8,
        }}
        onClick={() => onPractice(myRoles)}
      >
        <span style={{ fontFamily: 'Noto Sans KR', fontSize: 18, fontWeight: 400, color: '#FFFFFF', lineHeight: '24px' }}>
          연습하기
        </span>
      </button>

      <BottomNav
        activeNav={activeNav}
        setActiveNav={setActiveNav}
        onHomeClick={onBack}
      />
    </div>
  )
}
