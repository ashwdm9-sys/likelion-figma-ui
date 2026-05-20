import { useState } from 'react';

// Figma assets — expires 7 days
const SCRIPT_ICON = 'https://www.figma.com/api/mcp/asset/c5dfbfc3-41fe-48c1-afd1-10e47a6da954';
const MENU_ICON   = 'https://www.figma.com/api/mcp/asset/17efc777-df02-4248-8d16-5757ca94f6e3';

type Props = {
  onToggleMenu: () => void;
};

export default function BottomNav({ onToggleMenu }: Props) {
  const [act, setAct]     = useState('');
  const [scene, setScene] = useState('');

  return (
    <nav
      className="flex-none bg-white overflow-hidden"
      style={{ height: '80px', boxShadow: '0px -2px 16px 2px rgba(0,0,0,0.04)' }}
    >
      {/* Figma: absolute left-[27px] top-[8px], gap-[96px] */}
      <div
        className="flex items-center"
        style={{ marginLeft: '27px', marginTop: '8px', gap: '96px' }}
      >
        {/* 메모/댓글 아이콘 + 읽음 뱃지 */}
        <div className="relative flex-none size-[24px]">
          <div className="absolute inset-[16.67%_12.5%_14.22%_12.5%]">
            <img src={SCRIPT_ICON} alt="" className="absolute block inset-0 max-w-none size-full object-contain" />
          </div>
          {/* 읽음/안읽음 뱃지: absolute left-[15px] top-[2px] */}
          <span
            className="absolute rounded-full"
            style={{ width: '8px', height: '8px', left: '15px', top: '2px', backgroundColor: '#DD373D' }}
          />
        </div>

        {/* 막/장 필터: [박스][막][박스][장] 각 24px */}
        <div className="flex items-center flex-none" style={{ width: '96px' }}>
          <input
            type="text"
            value={act}
            onChange={e => setAct(e.target.value)}
            maxLength={2}
            className="bg-white text-center text-black focus:outline-none"
            style={{ width: '24px', height: '24px', border: '0.1px solid black', fontSize: '12px', fontFamily: 'Roboto, sans-serif' }}
          />
          <div
            className="flex items-center justify-center text-black"
            style={{ width: '24px', height: '24px', fontSize: '12px', fontFamily: 'Roboto, sans-serif' }}
          >
            막
          </div>
          <input
            type="text"
            value={scene}
            onChange={e => setScene(e.target.value)}
            maxLength={2}
            className="bg-white text-center text-black focus:outline-none"
            style={{ width: '24px', height: '24px', border: '0.1px solid black', fontSize: '12px', fontFamily: 'Roboto, sans-serif' }}
          />
          <div
            className="flex items-center justify-center text-black"
            style={{ width: '24px', height: '24px', fontSize: '12px', fontFamily: 'Roboto, sans-serif' }}
          >
            장
          </div>
        </div>

        {/* 메뉴 바 */}
        <button type="button" onClick={onToggleMenu} aria-label="메뉴" className="relative flex-none size-[24px]">
          <div className="absolute bottom-1/4 left-[12.5%] right-[12.5%] top-1/4">
            <img src={MENU_ICON} alt="메뉴" className="absolute block inset-0 max-w-none size-full object-contain" />
          </div>
        </button>
      </div>
    </nav>
  );
}
