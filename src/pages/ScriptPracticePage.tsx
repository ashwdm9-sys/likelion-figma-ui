import { useState, useRef, useMemo, useCallback } from 'react';
import type { Role } from '../types';
import { INITIAL_ROLES, SCRIPT_LINES, SCRIPT_TITLE } from '../data/mockScript';
import TopBar from '../components/TopBar';
import ScriptViewer from '../components/ScriptViewer';
import SideMenuBar from '../components/SideMenuBar';
import BottomNav from '../components/BottomNav';

const ROLE_COLOR_PALETTE = [
  '#FF6B6B', '#4ECDC4', '#45B7D1', '#96CEB4',
  '#DDA0DD', '#F7DC6F', '#BB8FCE', '#82E0AA',
  '#F0A500', '#E84393', '#00B4D8', '#FF8C42',
];


function generateRandomColors(roles: Role[]): Role[] {
  const shuffled = [...ROLE_COLOR_PALETTE].sort(() => Math.random() - 0.5);
  return roles.map((role, i) => ({
    ...role,
    color: role.isMyRole ? shuffled[i % shuffled.length] : '#888888',
  }));
}

export default function ScriptPracticePage() {
  const [roles, setRoles] = useState<Role[]>(INITIAL_ROLES);
  const [isSideMenuOpen, setIsSideMenuOpen] = useState(false);
  const [displayedRoleIds, setDisplayedRoleIds] = useState<Set<string>>(new Set());
  const [currentBoldIndex, setCurrentBoldIndex] = useState(0);
  const [isAddDeleteMode, setIsAddDeleteMode] = useState(false);

  const lineRefs = useRef<Map<string, HTMLElement>>(new Map());

  // 표시 중인 내 배역 대사 목록 (이전/다음 대사 네비게이션 대상)
  const activeBoldLines = useMemo(() => {
    const myRoleIds = new Set(roles.filter(r => r.isMyRole).map(r => r.id));
    return SCRIPT_LINES.filter(
      line =>
        line.type === 'dialogue' &&
        line.roleId !== undefined &&
        displayedRoleIds.has(line.roleId) &&
        myRoleIds.has(line.roleId),
    );
  }, [roles, displayedRoleIds]);

  const currentBoldLineId = activeBoldLines[currentBoldIndex]?.id ?? null;

  // 3-3: 표시하기 토글
  const handleToggleDisplay = useCallback((roleId: string) => {
    setDisplayedRoleIds(prev => {
      const next = new Set(prev);
      if (next.has(roleId)) next.delete(roleId);
      else next.add(roleId);
      return next;
    });
    setCurrentBoldIndex(0);
  }, []);

  const scrollToLineIfNeeded = useCallback((id: string) => {
    const el = lineRefs.current.get(id);
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const inView = rect.top >= 0 && rect.bottom <= window.innerHeight;
    if (!inView) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, []);

  // 3-5: 이전 대사
  const handlePrevLine = useCallback(() => {
    if (activeBoldLines.length === 0) return;
    const prevIndex = (currentBoldIndex - 1 + activeBoldLines.length) % activeBoldLines.length;
    setCurrentBoldIndex(prevIndex);
    scrollToLineIfNeeded(activeBoldLines[prevIndex].id);
  }, [activeBoldLines, currentBoldIndex, scrollToLineIfNeeded]);

  // 3-5: 다음 대사
  const handleNextLine = useCallback(() => {
    if (activeBoldLines.length === 0) return;
    const nextIndex = (currentBoldIndex + 1) % activeBoldLines.length;
    setCurrentBoldIndex(nextIndex);
    scrollToLineIfNeeded(activeBoldLines[nextIndex].id);
  }, [activeBoldLines, currentBoldIndex, scrollToLineIfNeeded]);

  // 3-2: 배역 설정 열기 → 랜덤 색상 재생성
  const handleOpenRoleSettings = useCallback(() => {
    setRoles(prev => generateRandomColors(prev));
  }, []);

  const handleToggleMenu = useCallback(() => {
    setIsSideMenuOpen(prev => !prev);
  }, []);

  // 3-4: 내 배역 → 상대 배역 이동
  const handleMoveToOther = useCallback((roleId: string) => {
    setRoles(prev => prev.map(r => r.id === roleId ? { ...r, isMyRole: false, color: '#888888' } : r));
    setDisplayedRoleIds(prev => {
      const next = new Set(prev);
      next.delete(roleId);
      return next;
    });
    setCurrentBoldIndex(0);
  }, []);

  // 3-4: 상대 배역 → 내 배역 이동
  const handleMoveToMy = useCallback((roleId: string) => {
    const newColor = ROLE_COLOR_PALETTE[Math.floor(Math.random() * ROLE_COLOR_PALETTE.length)];
    setRoles(prev => prev.map(r => r.id === roleId ? { ...r, isMyRole: true, color: newColor } : r));
    setCurrentBoldIndex(0);
  }, []);

  const handleToggleAddDeleteMode = useCallback(() => {
    setIsAddDeleteMode(prev => !prev);
  }, []);

  return (
    <div className="relative flex flex-col h-dvh max-w-[390px] mx-auto bg-white overflow-hidden">
      <TopBar title={SCRIPT_TITLE} />

      <main className="flex-1 overflow-y-auto bg-white">
        <ScriptViewer
          lines={SCRIPT_LINES}
          roles={roles}
          displayedRoleIds={displayedRoleIds}
          currentBoldLineId={currentBoldLineId}
          lineRefs={lineRefs}
        />
      </main>

      {isSideMenuOpen && (
        <div
          className="absolute inset-0 bg-black/30 z-10"
          onClick={() => setIsSideMenuOpen(false)}
        />
      )}

      <SideMenuBar
        isOpen={isSideMenuOpen}
        onClose={() => setIsSideMenuOpen(false)}
        roles={roles}
        displayedRoleIds={displayedRoleIds}
        onToggleDisplay={handleToggleDisplay}
        isAddDeleteMode={isAddDeleteMode}
        onToggleAddDeleteMode={handleToggleAddDeleteMode}
        onMoveToOther={handleMoveToOther}
        onMoveToMy={handleMoveToMy}
        onOpenRoleSettings={handleOpenRoleSettings}
      />

      {/* 이전/다음 대사 플로팅 버튼 (3-5)
          Figma: left-[284px] top-[637px] w-[90px] gap-[8px] in 390x844 frame
          → right: 390-284-90=16px, bottom: navbar(80) + gap(32) = 112px */}
      {!isSideMenuOpen && (
        <div
          className="absolute z-30 flex flex-col"
          style={{ bottom: '112px', right: '16px', gap: '8px', width: '90px' }}
        >
          <button
            type="button"
            onClick={handlePrevLine}
            className="flex items-center justify-center whitespace-nowrap text-white"
            style={{
              height: '48px',
              borderRadius: '8px',
              backgroundColor: '#DD373D',
              fontSize: '12px',
              fontFamily: 'Roboto, sans-serif',
              gap: '5px',
              padding: '10px',
            }}
          >
            이전 대사
            {/* Figma 벡터: 상향 ∧ chevron */}
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M17 14L12 9L7 14" />
            </svg>
          </button>
          <button
            type="button"
            onClick={handleNextLine}
            className="flex items-center justify-center whitespace-nowrap text-white"
            style={{
              height: '48px',
              borderRadius: '8px',
              backgroundColor: '#DD373D',
              fontSize: '12px',
              fontFamily: 'Roboto, sans-serif',
              gap: '5px',
              padding: '10px',
            }}
          >
            다음 대사
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M7 10L12 15L17 10" />
            </svg>
          </button>
        </div>
      )}

      <BottomNav onToggleMenu={handleToggleMenu} />
    </div>
  );
}
