import { useState } from 'react';
import type { Role } from '../types';
import { TROUPE_NAME, NEXT_PERFORMANCE, NEXT_REHEARSAL } from '../data/mockScript';
import { XIcon, RoundPlusIcon } from './Icons';

type Props = {
  isOpen: boolean;
  onClose: () => void;
  roles: Role[];
  displayedRoleIds: Set<string>;
  onToggleDisplay: (roleId: string) => void;
  isAddDeleteMode: boolean;
  onToggleAddDeleteMode: () => void;
  onMoveToOther: (roleId: string) => void;
  onMoveToMy: (roleId: string) => void;
  onOpenRoleSettings: () => void;
};

function ChevronIcon({ isOpen }: { isOpen: boolean }) {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#191D1F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      {isOpen
        ? <path d="M7 10L12 15L17 10" />
        : <path d="M17 14L12 9L7 14" />
      }
    </svg>
  );
}

export default function SideMenuBar({
  isOpen,
  onClose,
  roles,
  displayedRoleIds,
  onToggleDisplay,
  isAddDeleteMode,
  onToggleAddDeleteMode,
  onMoveToOther,
  onMoveToMy,
  onOpenRoleSettings,
}: Props) {
  const [roleSettingOpen, setRoleSettingOpen] = useState(true);
  const [viewSettingOpen, setViewSettingOpen] = useState(false);
  const [nonVerbalOpen, setNonVerbalOpen] = useState(false);

  const myRoles = roles.filter(r => r.isMyRole);
  const otherRoles = roles.filter(r => !r.isMyRole);

  function handleToggleRoleSetting() {
    if (!roleSettingOpen) onOpenRoleSettings();
    setRoleSettingOpen(prev => !prev);
  }

  return (
    <aside
      className={`
        absolute right-0 top-0 bottom-0 z-20 w-[328px]
        flex flex-col overflow-hidden
        rounded-bl-[8px] rounded-tl-[8px]
        transition-transform duration-300 ease-in-out
        ${isOpen ? 'translate-x-0' : 'translate-x-full'}
      `}
      style={{
        backgroundImage: 'linear-gradient(90deg, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.2) 100%), linear-gradient(99.24deg, rgb(236,236,236) 3.77%, rgb(117,127,131) 96.42%)',
        boxShadow: '-8px 0px 16px 0px rgba(0,0,0,0.1)',
      }}
    >
      <div className="flex-1 overflow-y-auto sidebar-scroll flex flex-col">
        {/* 헤더 + 스케줄 카드 */}
        <div className="flex flex-col gap-[16px] items-start px-[14px] pt-0 pb-[29px] w-full">
          {/* 헤더: 닫기 + 극단명 */}
          <div className="flex gap-[10px] items-center justify-start p-[10px] w-full">
            <button type="button" onClick={onClose} className="flex items-center justify-center shrink-0">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M15 5L9 12L15 19" />
              </svg>
            </button>
            <span
              className="font-bold text-black whitespace-nowrap shrink-0"
              style={{ fontSize: '24px', lineHeight: 'normal', fontFamily: "'Noto Sans KR', sans-serif" }}
            >
              {TROUPE_NAME}
            </span>
          </div>

          {/* 스케줄 카드 */}
          <div className="bg-[#F2F4F8] flex items-center justify-center p-[10px] rounded-[24px] w-full">
            <span
              className="font-normal text-black whitespace-nowrap"
              style={{ fontSize: '16px', lineHeight: '20px', letterSpacing: '0.2px', fontFamily: "'Noto Sans KR', sans-serif" }}
            >
              다음 공연 스케줄: {NEXT_PERFORMANCE.role} / {NEXT_PERFORMANCE.date}
            </span>
          </div>
          <div className="bg-[#F2F4F8] flex items-center justify-center p-[10px] rounded-[24px] w-full">
            <span
              className="font-normal text-black whitespace-nowrap"
              style={{ fontSize: '16px', lineHeight: '20px', letterSpacing: '0.2px', fontFamily: "'Noto Sans KR', sans-serif" }}
            >
              다음 리허설 일정: {NEXT_REHEARSAL}
            </span>
          </div>
        </div>

        {/* 아코디언 목록 */}
        <div className="flex flex-col items-start w-full">

          {/* 배역 설정 */}
          <div className="w-full">
            <div className="bg-[#F2F4F8] flex h-[48px] items-center justify-between p-[10px] relative w-full">
              <button
                type="button"
                onClick={handleToggleRoleSetting}
                className="flex items-center gap-[8px] flex-1 min-w-0"
              >
                <span
                  className="font-normal text-black whitespace-nowrap"
                  style={{ fontSize: '18px', lineHeight: '24px', letterSpacing: '0.24px', fontFamily: "'Noto Sans KR', sans-serif" }}
                >
                  배역 설정
                </span>
                {roleSettingOpen && (
                  <button
                    type="button"
                    onClick={e => { e.stopPropagation(); onToggleAddDeleteMode(); }}
                    className="font-normal text-[#F2F4F8] whitespace-nowrap rounded-[8px] px-[8px]"
                    style={{
                      fontSize: '12px',
                      lineHeight: '16px',
                      fontFamily: 'Roboto, sans-serif',
                      height: '30px',
                      backgroundImage: isAddDeleteMode
                        ? 'linear-gradient(90deg, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.2) 100%), linear-gradient(90deg, rgb(50,55,58) 0%, rgb(50,55,58) 100%)'
                        : 'linear-gradient(90deg, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.2) 100%), linear-gradient(90deg, rgb(84,91,94) 0%, rgb(84,91,94) 100%)',
                    }}
                  >
                    추가/삭제
                  </button>
                )}
              </button>
              <button type="button" onClick={handleToggleRoleSetting} className="flex items-center justify-center shrink-0 size-[24px]">
                <ChevronIcon isOpen={roleSettingOpen} />
              </button>
            </div>

            {roleSettingOpen && (
              <div className="flex flex-col w-full">
                {/* 내 배역 헤더 */}
                <div className="bg-[#F2F4F8] flex h-[32px] items-center p-[10px] w-full" style={{ border: '0.8px solid #BDBDBD' }}>
                  <span
                    className="font-normal text-black whitespace-nowrap"
                    style={{ fontSize: '16px', lineHeight: '20px', letterSpacing: '0.2px', fontFamily: "'Noto Sans KR', sans-serif" }}
                  >
                    내 배역
                  </span>
                </div>
                <div className="flex flex-col w-full">
                  {myRoles.map(role => (
                    <RoleRow
                      key={role.id}
                      role={role}
                      isDisplayed={displayedRoleIds.has(role.id)}
                      onToggleDisplay={() => onToggleDisplay(role.id)}
                      isAddDeleteMode={isAddDeleteMode}
                      actionType="remove"
                      onAction={() => onMoveToOther(role.id)}
                    />
                  ))}
                  {myRoles.length === 0 && (
                    <div className="bg-white px-[10px] py-[8px]">
                      <span className="text-xs text-gray-400 italic">배역 없음</span>
                    </div>
                  )}
                </div>

                {/* 상대 배역 헤더 */}
                <div className="bg-[#F2F4F8] flex h-[32px] items-center p-[10px] w-full">
                  <span
                    className="font-normal text-black whitespace-nowrap"
                    style={{ fontSize: '16px', lineHeight: '20px', letterSpacing: '0.2px', fontFamily: "'Noto Sans KR', sans-serif" }}
                  >
                    상대 배역
                  </span>
                </div>
                <div className="flex flex-col w-full">
                  {otherRoles.map(role => (
                    <RoleRow
                      key={role.id}
                      role={role}
                      isDisplayed={displayedRoleIds.has(role.id)}
                      onToggleDisplay={() => onToggleDisplay(role.id)}
                      isAddDeleteMode={isAddDeleteMode}
                      actionType="add"
                      onAction={() => onMoveToMy(role.id)}
                    />
                  ))}
                  {otherRoles.length === 0 && (
                    <div className="bg-white px-[10px] py-[8px]">
                      <span className="text-xs text-gray-400 italic">배역 없음</span>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>

          {/* 보기 설정 */}
          <div className="w-full">
            <button
              type="button"
              onClick={() => setViewSettingOpen(prev => !prev)}
              className="bg-[#F2F4F8] flex h-[48px] items-center justify-between p-[10px] w-full"
            >
              <span
                className="font-normal text-black whitespace-nowrap"
                style={{ fontSize: '18px', lineHeight: '24px', letterSpacing: '0.24px', fontFamily: "'Noto Sans KR', sans-serif" }}
              >
                보기 설정
              </span>
              <ChevronIcon isOpen={viewSettingOpen} />
            </button>
            {viewSettingOpen && (
              <div className="bg-white px-[10px] py-[8px]">
                <span className="text-xs text-gray-400 italic">준비 중</span>
              </div>
            )}
          </div>

          {/* 비언어표현 */}
          <div className="w-full">
            <button
              type="button"
              onClick={() => setNonVerbalOpen(prev => !prev)}
              className="bg-[#F2F4F8] flex h-[48px] items-center justify-between p-[10px] w-full"
            >
              <span
                className="font-normal text-black whitespace-nowrap"
                style={{ fontSize: '18px', lineHeight: '24px', letterSpacing: '0.24px', fontFamily: "'Noto Sans KR', sans-serif" }}
              >
                비언어표현
              </span>
              <ChevronIcon isOpen={nonVerbalOpen} />
            </button>
            {nonVerbalOpen && (
              <div className="bg-white px-[10px] py-[8px]">
                <span className="text-xs text-gray-400 italic">준비 중</span>
              </div>
            )}
          </div>

        </div>
      </div>
    </aside>
  );
}

type RoleRowProps = {
  role: Role;
  isDisplayed: boolean;
  onToggleDisplay: () => void;
  isAddDeleteMode: boolean;
  actionType: 'add' | 'remove';
  onAction: () => void;
};

function RoleRow({ role, isDisplayed, onToggleDisplay, isAddDeleteMode, actionType, onAction }: RoleRowProps) {
  const displayName = role.description ? `${role.name}(${role.description})` : role.name;

  return (
    <div className="bg-white flex gap-[16px] h-[56px] items-center justify-end px-[8px] py-[10px] w-full">
      {/* 색상 원 + 배역명 */}
      <div className="flex flex-1 h-[32px] items-center gap-[8px] p-[10px] min-w-0">
        <span
          className="shrink-0 size-[22px] rounded-full"
          style={
            actionType === 'remove'
              ? { backgroundColor: role.color }
              : { backgroundColor: 'transparent', border: '1.5px solid #aaa' }
          }
        />
        <span
          className="font-normal text-black truncate"
          style={{ fontSize: '16px', lineHeight: '20px', letterSpacing: '0.2px', fontFamily: "'Noto Sans KR', sans-serif" }}
        >
          {displayName}
        </span>
      </div>

      {/* 추가/삭제 or 표시하기 */}
      {isAddDeleteMode ? (
        <button
          type="button"
          onClick={onAction}
          className="shrink-0 flex items-center justify-center size-[24px]"
        >
          {actionType === 'remove' ? <XIcon /> : <RoundPlusIcon />}
        </button>
      ) : (
        <button
          type="button"
          onClick={onToggleDisplay}
          className="shrink-0 flex items-center justify-center h-[24px] p-[5px] rounded-[24px] text-white whitespace-nowrap font-normal"
          style={{
            fontSize: '12px',
            lineHeight: '16px',
            fontFamily: 'Roboto, sans-serif',
            backgroundImage: isDisplayed
              ? 'linear-gradient(180deg, #ffe6cf 2.885%, #cc0e1a 100%)'
              : 'linear-gradient(90deg, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.2) 100%), linear-gradient(182.47deg, rgb(236,236,236) 3.28%, rgb(25,29,31) 97.93%)',
          }}
        >
          {isDisplayed ? '표시됨' : '표시하기'}
        </button>
      )}
    </div>
  );
}
