import { useMemo } from 'react';
import type { Role, ScriptLine } from '../types';

type Props = {
  lines: ScriptLine[];
  roles: Role[];
  displayedRoleIds: Set<string>;
  currentBoldLineId: string | null;
  lineRefs: { current: Map<string, HTMLElement> };
};

export default function ScriptViewer({
  lines,
  roles,
  displayedRoleIds,
  currentBoldLineId,
  lineRefs,
}: Props) {
  const roleMap = useMemo(
    () => new Map(roles.map(r => [r.id, r])),
    [roles],
  );

  // Figma: p-[10px] container, text-[18px] leading-[24px], space-y-6 (24px gap = blank line)
  return (
    <div className="px-4 py-[10px] space-y-6 pb-8">
      {lines.map(line => {
        // 페이지 마커
        if (line.type === 'page') {
          return (
            <p
              key={line.id}
              className="text-gray-400 pt-3"
              style={{ fontSize: '18px', lineHeight: '24px', fontFamily: "'Noto Sans KR', sans-serif" }}
            >
              [페이지] {line.text}
            </p>
          );
        }

        // 지문 (빨간색)
        if (line.type === 'direction') {
          return (
            <p
              key={line.id}
              className="text-red-500 italic"
              style={{ fontSize: '18px', lineHeight: '24px', fontFamily: "'Noto Sans KR', sans-serif" }}
            >
              ({line.text})
            </p>
          );
        }

        // 대사
        const role = line.roleId ? roleMap.get(line.roleId) : undefined;
        const isDisplayed = line.roleId ? displayedRoleIds.has(line.roleId) : false;
        const isBold = line.id === currentBoldLineId;

        const lineColor = isDisplayed && role ? role.color : '#191D1F';

        return (
          <p
            key={line.id}
            ref={el => {
              if (el) lineRefs.current.set(line.id, el);
              else lineRefs.current.delete(line.id);
            }}
            className={isBold ? 'font-bold' : 'font-normal'}
            style={{
              fontSize: '18px',
              lineHeight: '24px',
              fontFamily: "'Noto Sans KR', sans-serif",
              letterSpacing: '0.13px',
              color: lineColor,
            }}
          >
            <span className="font-semibold">[{role?.name ?? ''}]</span>{' '}
            {line.text}
          </p>
        );
      })}
    </div>
  );
}
