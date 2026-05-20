export type DayCell = {
  text: string
  type: 'weekday' | 'weekend' | 'outside-weekday' | 'outside-weekend' | 'today' | 'empty'
}

export type WeekRow = {
  weekNum: string
  isCurrentWeek: boolean
  days: DayCell[]
}

export const calendarRows: WeekRow[] = [
  // ... (기존 calendarRows 데이터 전체 복사)
  {
    weekNum: '14',
    isCurrentWeek: false,
    days: [
      { text: '30', type: 'outside-weekday' },
      { text: '31', type: 'outside-weekday' },
      { text: '1', type: 'weekday' },
      { text: '2', type: 'weekday' },
      { text: '3', type: 'weekday' },
      { text: '4', type: 'weekend' },
      { text: '5', type: 'weekend' },
    ],
  },
  {
    weekNum: '15',
    isCurrentWeek: false,
    days: [
      { text: '6', type: 'weekday' },
      { text: '7', type: 'weekday' },
      { text: '8', type: 'weekday' },
      { text: '9', type: 'weekday' },
      { text: '10', type: 'weekday' },
      { text: '11', type: 'weekend' },
      { text: '12', type: 'weekend' },
    ],
  },
  {
    weekNum: '16',
    isCurrentWeek: false,
    days: [
      { text: '13', type: 'weekday' },
      { text: '14', type: 'weekday' },
      { text: '15', type: 'weekday' },
      { text: '16', type: 'weekday' },
      { text: '17', type: 'weekday' },
      { text: '18', type: 'weekend' },
      { text: '19', type: 'weekend' },
    ],
  },
  {
    weekNum: '17',
    isCurrentWeek: false,
    days: [
      { text: '20', type: 'weekday' },
      { text: '21', type: 'weekday' },
      { text: '22', type: 'weekday' },
      { text: '23', type: 'weekday' },
      { text: '24', type: 'weekday' },
      { text: '25', type: 'weekend' },
      { text: '26', type: 'weekend' },
    ],
  },
  {
    weekNum: '18',
    isCurrentWeek: true,
    days: [
      { text: '27', type: 'weekday' },
      { text: '28', type: 'weekday' },
      { text: '29', type: 'today' },
      { text: '30', type: 'weekday' },
      { text: '1', type: 'outside-weekday' },
      { text: '2', type: 'outside-weekend' },
      { text: '3', type: 'outside-weekend' },
    ],
  },
  {
    weekNum: '19',
    isCurrentWeek: false,
    days: [
      { text: '4', type: 'outside-weekday' },
      { text: '5', type: 'outside-weekday' },
      { text: '6', type: 'outside-weekday' },
      { text: '7', type: 'outside-weekday' },
      { text: '8', type: 'outside-weekday' },
      { text: '9', type: 'outside-weekend' },
      { text: '10', type: 'outside-weekend' },
    ],
  },
]

export const weekDays = ['월', '화', '수', '목', '금', '토', '일']

export const scriptCards = [
  { group: '멋사극단', title: '국물 있사옵니다', author: '이근삼' },
  { group: '2조의 극', title: '메트로폴리스', author: '멋사' },
  { group: '멋사최고', title: '코카서스의 백묵원', author: '브레히트' },
  { group: '멋쟁이 라이온', title: '숨그네', author: '헤르타 뮐러' },
  { group: '멋멋멋', title: '파우스트', author: '괴테' },
  { group: '멋사자단', title: '국물 있사옵니다', author: '이근삼' },
]

export const notificationItems = [
  { id: 1, text: '연상극우회에서 새로운 대본을 공유했습니다.', sub: '국물 있사옵니다', time: '방금 전', read: false },
  { id: 2, text: '멋사극단에서 연습 일정을 추가했습니다.', sub: '2차 리허설 일정 확인', time: '1시간 전', read: false },
  { id: 3, text: '공유된 대본에 새로운 댓글이 달렸습니다.', sub: '국물 있사옵니다', time: '어제', read: true },
  { id: 4, text: '연상극우회에서 대본을 업데이트했습니다.', sub: '국물 있사옵니다 - 3막 수정', time: '2일 전', read: true },
]