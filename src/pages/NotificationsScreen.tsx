import { BackIcon } from '../components/Icons'
import { notificationItems } from '../data/mockData'

export default function NotificationsScreen({ onBack }: { onBack: () => void }) {
  return (
    <div className="relative w-full" style={{ minHeight: '100vh', background: '#fff' }}>
      <div
        className="fixed top-0 left-1/2 -translate-x-1/2 z-40 flex flex-col justify-end items-center gap-[10px] px-[10px] pb-[16px]"
        style={{ width: 390, height: 96, background: '#fff', boxShadow: '0px 2px 16px 2px rgba(0,0,0,0.04)' }}
      >
        <div className="flex items-center gap-3" style={{ width: 370 }}>
          <button className="w-6 h-6 flex items-center justify-center flex-shrink-0" onClick={onBack}>
            <BackIcon />
          </button>
          <span className="text-[20px] font-bold" style={{ fontFamily: 'Noto Sans KR', color: '#191D1F' }}>
            알림
          </span>
        </div>
      </div>

      <div className="flex flex-col overflow-y-auto" style={{ marginTop: 96, paddingBottom: 24 }}>
        {notificationItems.map(item => (
          <div
            key={item.id}
            className="flex items-start gap-3 px-4 py-4"
            style={{
              borderBottom: '1px solid #f0f0f0',
              background: item.read ? '#fff' : 'rgba(221,55,61,0.04)',
            }}
          >
            <div
              className="flex-shrink-0 rounded-full mt-[6px]"
              style={{ width: 8, height: 8, background: item.read ? 'transparent' : '#DD373D' }}
            />
            <div className="flex flex-col gap-[2px] flex-1">
              <span
                className="text-[14px]"
                style={{
                  fontFamily: 'Noto Sans KR',
                  color: '#191D1F',
                  fontWeight: item.read ? 400 : 700,
                  lineHeight: '20px',
                }}
              >
                {item.text}
              </span>
              <span className="text-[12px]" style={{ fontFamily: 'Roboto', color: '#858F93' }}>
                {item.sub}
              </span>
            </div>
            <span
              className="text-[11px] flex-shrink-0"
              style={{ fontFamily: 'Roboto', color: '#B3B3B3', paddingTop: 2 }}
            >
              {item.time}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}