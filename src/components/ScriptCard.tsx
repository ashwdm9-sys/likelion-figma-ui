export default function ScriptCard({ group, title, author }: { group: string; title: string; author: string }) {
  return (
    <div
      className="w-full rounded-[16px] flex flex-col"
      style={{
        height: 96,
        background: 'rgba(226, 16, 29, 0.16)',
        boxShadow: '0px 2px 4px 0px rgba(0,0,0,0.04)',
      }}
    >
      <div className="flex items-center w-full px-2 py-2 flex-1">
        <span className="text-[18px] text-black leading-tight" style={{ fontFamily: 'Roboto' }}>
          {group}
        </span>
      </div>
      <div className="flex items-center w-full px-2 flex-1">
        <span className="text-[18px] font-bold text-black leading-tight" style={{ fontFamily: 'Noto Sans KR' }}>
          {title}
        </span>
      </div>
      <div className="flex items-center w-full px-2 py-2 flex-1">
        <span className="text-[18px] text-black leading-tight" style={{ fontFamily: 'Roboto' }}>
          {author}
        </span>
      </div>
    </div>
  )
}