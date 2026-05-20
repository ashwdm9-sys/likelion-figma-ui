export function SearchIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M9.5 16C7.68333 16 6.146 15.3707 4.888 14.112C3.63 12.8533 3.00067 11.316 3 9.5C2.99933 7.684 3.62867 6.14667 4.888 4.888C6.14733 3.62933 7.68467 3 9.5 3C11.3153 3 12.853 3.62933 14.113 4.888C15.373 6.14667 16.002 7.684 16 9.5C16 10.2333 15.8833 10.925 15.65 11.575C15.4167 12.225 15.1 12.8 14.7 13.3L20.3 18.9C20.4833 19.0833 20.575 19.3167 20.575 19.6C20.575 19.8833 20.4833 20.1167 20.3 20.3C20.1167 20.4833 19.8833 20.575 19.6 20.575C19.3167 20.575 19.0833 20.4833 18.9 20.3L13.3 14.7C12.8 15.1 12.225 15.4167 11.575 15.65C10.925 15.8833 10.2333 16 9.5 16ZM9.5 14C10.75 14 11.8127 13.5627 12.688 12.688C13.5633 11.8133 14.0007 10.7507 14 9.5C13.9993 8.24933 13.562 7.187 12.688 6.313C11.814 5.439 10.7513 5.00133 9.5 5C8.24867 4.99867 7.18633 5.43633 6.313 6.313C5.43967 7.18967 5.002 8.252 5 9.5C4.998 10.748 5.43567 11.8107 6.313 12.688C7.19033 13.5653 8.25267 14.0027 9.5 14Z" fill="#191D1F"/>
    </svg>
  )
}

export function BellIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M10.146 3.248C10.2954 2.87871 10.5517 2.56246 10.882 2.33977C11.2124 2.11709 11.6017 1.99812 12 1.99812C12.3984 1.99812 12.7877 2.11709 13.118 2.33977C13.4483 2.56246 13.7046 2.87871 13.854 3.248C15.333 3.65423 16.6377 4.53499 17.5674 5.75487C18.4971 6.97475 19.0005 8.46622 19 10V14.697L20.832 17.445C20.9325 17.5956 20.9902 17.7707 20.999 17.9515C21.0078 18.1323 20.9673 18.3121 20.8819 18.4718C20.7965 18.6314 20.6693 18.7648 20.514 18.8579C20.3587 18.9509 20.1811 19 20 19H15.465C15.3446 19.8331 14.9281 20.5949 14.2917 21.1459C13.6554 21.6969 12.8418 22.0002 12 22.0002C11.1583 22.0002 10.3447 21.6969 9.70833 21.1459C9.07197 20.5949 8.65543 19.8331 8.53503 19H4.00003C3.81898 19 3.64133 18.9509 3.48602 18.8579C3.33071 18.7648 3.20356 18.6314 3.11815 18.4718C3.03274 18.3121 2.99227 18.1323 3.00106 17.9515C3.00984 17.7707 3.06755 17.5956 3.16803 17.445L5.00003 14.697V10C5.00003 6.776 7.18003 4.06 10.146 3.248ZM10.586 19C10.6893 19.2926 10.8808 19.5461 11.1342 19.7253C11.3875 19.9046 11.6902 20.0008 12.0005 20.0008C12.3109 20.0008 12.6136 19.9046 12.8669 19.7253C13.1202 19.5461 13.3117 19.2926 13.415 19H10.586ZM12 5C10.6739 5 9.40218 5.52678 8.46449 6.46447C7.52681 7.40215 7.00003 8.67392 7.00003 10V15C7.00007 15.1975 6.94161 15.3907 6.83203 15.555L5.86903 17H18.13L17.167 15.555C17.0578 15.3905 16.9997 15.1974 17 15V10C17 8.67392 16.4732 7.40215 15.5356 6.46447C14.5979 5.52678 13.3261 5 12 5Z" fill="#191D1F"/>
    </svg>
  )
}

export function HomeIcon({ active }: { active?: boolean }) {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path d="M3 9.5L12 3L21 9.5V20a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V9.5z" stroke={active ? '#DD373D' : '#B3B3B3'} strokeWidth="2" fill={active ? 'rgba(221,55,61,0.15)' : 'none'} strokeLinejoin="round" />
      <path d="M9 21V12h6v9" stroke={active ? '#DD373D' : '#B3B3B3'} strokeWidth="2" strokeLinejoin="round" />
    </svg>
  )
}

export function ScriptIcon({ active }: { active?: boolean }) {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <rect x="4" y="2" width="14" height="18" rx="2" stroke={active ? '#DD373D' : '#B3B3B3'} strokeWidth="2" />
      <path d="M8 7h8M8 11h8M8 15h5" stroke={active ? '#DD373D' : '#B3B3B3'} strokeWidth="2" strokeLinecap="round" />
      <path d="M16 18l3 3" stroke="#DD373D" strokeWidth="2" strokeLinecap="round" />
    </svg>
  )
}

export function CalendarIcon({ active }: { active?: boolean }) {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <rect x="3" y="4" width="18" height="17" rx="2" stroke={active ? '#DD373D' : '#B3B3B3'} strokeWidth="2" />
      <path d="M3 9h18" stroke={active ? '#DD373D' : '#B3B3B3'} strokeWidth="2" />
      <path d="M8 2v4M16 2v4" stroke={active ? '#DD373D' : '#B3B3B3'} strokeWidth="2" strokeLinecap="round" />
    </svg>
  )
}

export function UserIcon({ active }: { active?: boolean }) {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="8" r="4" stroke={active ? '#DD373D' : '#B3B3B3'} strokeWidth="2" />
      <path d="M4 20c0-4 3.58-7 8-7s8 3 8 7" stroke={active ? '#DD373D' : '#B3B3B3'} strokeWidth="2" strokeLinecap="round" />
    </svg>
  )
}

export function PlusIcon() {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
      <path d="M16 6v20M6 16h20" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  )
}

export function FabIcon() {
  return (
    <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M45.3333 34.6667H34.6667V45.3333H29.3333V34.6667H18.6667V29.3333H29.3333V18.6667H34.6667V29.3333H45.3333M50.6667 8H13.3333C10.3733 8 8 10.3733 8 13.3333V50.6667C8 52.0812 8.5619 53.4377 9.5621 54.4379C10.5623 55.4381 11.9188 56 13.3333 56H50.6667C52.0812 56 53.4377 55.4381 54.4379 54.4379C55.4381 53.4377 56 52.0812 56 50.6667V13.3333C56 11.9188 55.4381 10.5623 54.4379 9.5621C53.4377 8.5619 52.0812 8 50.6667 8Z" fill="#ECECEC"/>
      <path d="M45.3333 34.6667H34.6667V45.3333H29.3333V34.6667H18.6667V29.3333H29.3333V18.6667H34.6667V29.3333H45.3333M50.6667 8H13.3333C10.3733 8 8 10.3733 8 13.3333V50.6667C8 52.0812 8.5619 53.4377 9.5621 54.4379C10.5623 55.4381 11.9188 56 13.3333 56H50.6667C52.0812 56 53.4377 55.4381 54.4379 54.4379C55.4381 53.4377 56 52.0812 56 50.6667V13.3333C56 11.9188 55.4381 10.5623 54.4379 9.5621C53.4377 8.5619 52.0812 8 50.6667 8Z" fill="black" fillOpacity="0.2"/>
    </svg>
  )
}

export function CloseIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <path d="M5 5l10 10M15 5L5 15" stroke="#fff" strokeWidth="2" strokeLinecap="round" />
    </svg>
  )
}

export function ShareIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
      <circle cx="17" cy="4" r="2.5" stroke="#DD373D" strokeWidth="1.8" />
      <circle cx="17" cy="18" r="2.5" stroke="#DD373D" strokeWidth="1.8" />
      <circle cx="5" cy="11" r="2.5" stroke="#DD373D" strokeWidth="1.8" />
      <path d="M14.5 5.5L7.5 9.5M14.5 16.5L7.5 12.5" stroke="#DD373D" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  )
}

export function AddScriptIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
      <rect x="3" y="2" width="12" height="16" rx="2" stroke="#DD373D" strokeWidth="1.8" />
      <path d="M6.5 7h5M6.5 10h5M6.5 13h3" stroke="#DD373D" strokeWidth="1.8" strokeLinecap="round" />
      <circle cx="17" cy="17" r="4" fill="#DD373D" />
      <path d="M17 14.5v5M14.5 17h5" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  )
}

export function BackIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path d="M15 18l-6-6 6-6" stroke="#191D1F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export function SmallUserIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="8" r="4" stroke="#191D1F" strokeWidth="2" />
      <path d="M4 20c0-4 3.58-7 8-7s8 3 8 7" stroke="#191D1F" strokeWidth="2" strokeLinecap="round" />
    </svg>
  )
}