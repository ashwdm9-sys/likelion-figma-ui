import { type DayCell, calendarRows, weekDays } from '../data/mockData'

function DayCellBox({ cell }: { cell: DayCell }) {
  const baseClass = 'w-6 h-6 flex items-center justify-center rounded-full text-[11px] font-[400] font-[Inter]'

  if (cell.type === 'today') {
    return <div className={`${baseClass} bg-black text-white`}>{cell.text}</div>
  }
  if (cell.type === 'weekday') {
    return <div className={`${baseClass} text-[#B3B3B3]`}>{cell.text}</div>
  }
  if (cell.type === 'weekend') {
    return <div className={`${baseClass} text-[#17A1FA]`}>{cell.text}</div>
  }
  if (cell.type === 'outside-weekday') {
    return <div className={`${baseClass} text-[#616161]`}>{cell.text}</div>
  }
  if (cell.type === 'outside-weekend') {
    return <div className={`${baseClass} text-[#1270B0]`}>{cell.text}</div>
  }
  return <div className={baseClass} />
}

export default function CalendarSection() {
  
  
  return (
    <div className="flex flex-col gap-[29px] w-full">
      <div className="flex flex-col" style={{ height: 240 }}>
        <div className="flex justify-center pb-1">
          <div className="bg-black text-white text-[11px] rounded-[4px] px-2 py-[2px] font-[Inter]">
            4월
          </div>
        </div>

        <div className="flex flex-col justify-between flex-1">
          <div className="flex justify-between items-center w-full">
            <div className="w-6 h-6 flex items-center justify-center">
              <span className="text-[11px] font-[200] font-[Inter] text-white bg-[#333] rounded-[4px] w-6 h-6 flex items-center justify-center">
                04
              </span>
            </div>
            {weekDays.map((d, i) => (
              <div key={i} className="w-6 h-6 flex items-center justify-center">
                <span
                  className="text-[11px] font-[Inter]"
                  style={{ color: i >= 5 ? '#17A1FA' : '#B3B3B3' }}
                >
                  {d}
                </span>
              </div>
            ))}
          </div>

          {calendarRows.map((row) => (
            <div key={row.weekNum} className="flex justify-between items-center w-full">
              <div
                className="w-6 h-6 flex items-center justify-center rounded-[4px] text-[11px] font-[200] font-[Inter]"
                style={{
                  background: '#333333',
                  color: row.isCurrentWeek ? '#FFFFFF' : '#B3B3B3',
                }}
              >
                {row.weekNum}
              </div>
              {row.days.map((cell, i) => (
                <DayCellBox key={i} cell={cell} />
              ))}
            </div>
          ))}
        </div>
      </div>

      <div
        className="w-full rounded-[8px] overflow-hidden relative"
        style={{
          height: 96,
          background: 'linear-gradient(134deg, #ECECEC 4%, #757F83 97%)',
        }}
      >
        <div className="absolute top-0 left-0 flex flex-col" style={{ width: 196, gap: 8 }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10, padding: 10 }}>
            <span style={{ fontFamily: 'Inter', fontSize: 14, fontWeight: 700, color: '#000000' }}>
              오늘의 일정
            </span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, padding: 10 }}>
            <span style={{ fontFamily: 'Roboto', fontSize: 12, fontWeight: 400, lineHeight: '16px', color: '#000000', whiteSpace: 'pre-line' }}>
              {'연상극우회 정기연습\n국물 있사옵니다 2차 리허설'}
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}