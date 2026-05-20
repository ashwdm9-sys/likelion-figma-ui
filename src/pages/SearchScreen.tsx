import { useState } from 'react'
import { SearchIcon, BackIcon } from '../components/Icons'
import { scriptCards } from '../data/mockData'
import ScriptCard from '../components/ScriptCard'

export default function SearchScreen({ onBack }: { onBack: () => void }) {
  const [query, setQuery] = useState('')

  const results = scriptCards.filter(c =>
    query === '' ||
    c.title.includes(query) ||
    c.group.includes(query) ||
    c.author.includes(query)
  )

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
          <div
            className="flex items-center gap-2 flex-1 rounded-[24px] px-3 py-2"
            style={{ border: '1.5px solid #DD373D', background: 'rgba(221,55,61,0.06)' }}
          >
            <SearchIcon />
            <input
              autoFocus
              value={query}
              onChange={e => setQuery(e.target.value)}
              placeholder="공유된 대본 검색"
              className="flex-1 outline-none bg-transparent text-[16px]"
              style={{ fontFamily: 'Noto Sans KR', color: '#191D1F' }}
            />
          </div>
        </div>
      </div>

      <div
        className="flex flex-col gap-2 overflow-y-auto"
        style={{ marginTop: 96, paddingBottom: 24, paddingLeft: 16, paddingRight: 16 }}
      >
        <div className="flex items-center gap-2 py-3">
          <span className="text-[14px]" style={{ fontFamily: 'Noto Sans KR', color: '#858F93' }}>
            공유된 대본
          </span>
          <span className="text-[14px] font-bold" style={{ fontFamily: 'Noto Sans KR', color: '#DD373D' }}>
            {results.length}
          </span>
        </div>

        {results.length > 0 ? (
          results.map((card, i) => <ScriptCard key={i} {...card} />)
        ) : (
          <div className="flex items-center justify-center" style={{ height: 200 }}>
            <span className="text-[14px]" style={{ fontFamily: 'Noto Sans KR', color: '#B3B3B3' }}>
              검색 결과가 없습니다.
            </span>
          </div>
        )}
      </div>
    </div>
  )
}