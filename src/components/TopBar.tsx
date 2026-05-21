type Props = {
  title: string;
  onBack?: () => void;
};

// Figma top_arrow: path (15,5)→(9,12)→(15,19) in 24×24, stroke 1.5px
function BackArrow() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#191D1F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M15 5L9 12L15 19" />
    </svg>
  );
}

function SearchIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M9.5 16C7.68333 16 6.146 15.3707 4.888 14.112C3.63 12.8533 3.00067 11.316 3 9.5C2.99933 7.684 3.62867 6.14667 4.888 4.888C6.14733 3.62933 7.68467 3 9.5 3C11.3153 3 12.853 3.62933 14.113 4.888C15.373 6.14667 16.002 7.684 16 9.5C16 10.2333 15.8833 10.925 15.65 11.575C15.4167 12.225 15.1 12.8 14.7 13.3L20.3 18.9C20.4833 19.0833 20.575 19.3167 20.575 19.6C20.575 19.8833 20.4833 20.1167 20.3 20.3C20.1167 20.4833 19.8833 20.575 19.6 20.575C19.3167 20.575 19.0833 20.4833 18.9 20.3L13.3 14.7C12.8 15.1 12.225 15.4167 11.575 15.65C10.925 15.8833 10.2333 16 9.5 16ZM9.5 14C10.75 14 11.8127 13.5627 12.688 12.688C13.5633 11.8133 14.0007 10.7507 14 9.5C13.9993 8.24933 13.562 7.187 12.688 6.313C11.814 5.439 10.7513 5.00133 9.5 5C8.24867 4.99867 7.18633 5.43633 6.313 6.313C5.43967 7.18967 5.002 8.252 5 9.5C4.998 10.748 5.43567 11.8107 6.313 12.688C7.19033 13.5653 8.25267 14.0027 9.5 14Z" fill="#191D1F"/>
    </svg>
  );
}

export default function TopBar({ title, onBack }: Props) {
  return (
    <header
      className="flex-none flex flex-col items-center justify-end bg-white px-[10px] py-[16px] gap-[10px]"
      style={{ height: '96px', boxShadow: '0px 2px 16px 2px rgba(0,0,0,0.04)' }}
    >
      <span
        className="text-black text-center whitespace-nowrap"
        style={{
          fontSize: '16px',
          fontWeight: 400,
          lineHeight: '20px',
          letterSpacing: '0.2px',
          fontFamily: "'Noto Sans KR', sans-serif",
        }}
      >
        {title}
      </span>

      {/* Figma: justify-center + gap-[278px] + px-[19px] */}
      <div className="flex gap-[278px] items-end justify-center px-[19px] w-full">
        <button type="button" className="relative flex-none size-[24px] flex items-center justify-center" onClick={onBack}>
          <BackArrow />
        </button>
        <button type="button" className="relative flex-none size-[24px] flex items-center justify-center">
          <SearchIcon />
        </button>
      </div>
    </header>
  );
}
