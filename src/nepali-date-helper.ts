interface IYearMonthMapping {
  [key: string]: number[]
}

export enum Language {
  np = 'np',
  en = 'en'
}
export interface IYearMonthDate {
  year: number
  month: number
  date: number
  day?: number
}

export interface IAdBs {
  AD: IYearMonthDate
  BS: IYearMonthDate
}

const monthDaysMappings = [
  [
    [30, 0],
    [32, 30],
    [31, 62],
    [32, 93],
    [31, 125],
    [30, 156],
    [30, 186],
    [30, 216],
    [29, 246],
    [30, 275],
    [29, 305],
    [31, 334]
  ],
  [
    [31, 0],
    [31, 31],
    [32, 62],
    [31, 94],
    [31, 125],
    [31, 156],
    [30, 187],
    [29, 217],
    [30, 246],
    [29, 276],
    [30, 305],
    [30, 335]
  ],
  [
    [31, 0],
    [31, 31],
    [32, 62],
    [32, 94],
    [31, 126],
    [30, 157],
    [30, 187],
    [29, 217],
    [30, 246],
    [29, 276],
    [30, 305],
    [30, 335]
  ],
  [
    [31, 0],
    [32, 31],
    [31, 63],
    [32, 94],
    [31, 126],
    [30, 157],
    [30, 187],
    [30, 217],
    [29, 247],
    [29, 276],
    [30, 305],
    [31, 335]
  ],
  [
    [30, 0],
    [32, 30],
    [31, 62],
    [32, 93],
    [31, 125],
    [30, 156],
    [30, 186],
    [30, 216],
    [29, 246],
    [30, 275],
    [29, 305],
    [31, 334]
  ],
  [
    [31, 0],
    [31, 31],
    [32, 62],
    [31, 94],
    [31, 125],
    [31, 156],
    [30, 187],
    [29, 217],
    [30, 246],
    [29, 276],
    [30, 305],
    [30, 335]
  ],
  [
    [31, 0],
    [31, 31],
    [32, 62],
    [32, 94],
    [31, 126],
    [30, 157],
    [30, 187],
    [29, 217],
    [30, 246],
    [29, 276],
    [30, 305],
    [30, 335]
  ],
  [
    [31, 0],
    [32, 31],
    [31, 63],
    [32, 94],
    [31, 126],
    [30, 157],
    [30, 187],
    [30, 217],
    [29, 247],
    [29, 276],
    [30, 305],
    [31, 335]
  ],
  [
    [31, 0],
    [31, 31],
    [31, 62],
    [32, 93],
    [31, 125],
    [31, 156],
    [29, 187],
    [30, 216],
    [30, 246],
    [29, 276],
    [29, 305],
    [31, 334]
  ],
  [
    [31, 0],
    [31, 31],
    [32, 62],
    [31, 94],
    [31, 125],
    [31, 156],
    [30, 187],
    [29, 217],
    [30, 246],
    [29, 276],
    [30, 305],
    [30, 335]
  ],
  [
    [31, 0],
    [31, 31],
    [32, 62],
    [32, 94],
    [31, 126],
    [30, 157],
    [30, 187],
    [29, 217],
    [30, 246],
    [29, 276],
    [30, 305],
    [30, 335]
  ],
  [
    [31, 0],
    [32, 31],
    [31, 63],
    [32, 94],
    [31, 126],
    [30, 157],
    [30, 187],
    [30, 217],
    [29, 247],
    [29, 276],
    [30, 305],
    [31, 335]
  ],
  [
    [31, 0],
    [31, 31],
    [31, 62],
    [32, 93],
    [31, 125],
    [31, 156],
    [29, 187],
    [30, 216],
    [30, 246],
    [29, 276],
    [30, 305],
    [30, 335]
  ],
  [
    [31, 0],
    [31, 31],
    [32, 62],
    [31, 94],
    [31, 125],
    [31, 156],
    [30, 187],
    [29, 217],
    [30, 246],
    [29, 276],
    [30, 305],
    [30, 335]
  ],
  [
    [31, 0],
    [31, 31],
    [32, 62],
    [32, 94],
    [31, 126],
    [30, 157],
    [30, 187],
    [29, 217],
    [30, 246],
    [29, 276],
    [30, 305],
    [30, 335]
  ],
  [
    [31, 0],
    [32, 31],
    [31, 63],
    [32, 94],
    [31, 126],
    [30, 157],
    [30, 187],
    [30, 217],
    [29, 247],
    [29, 276],
    [30, 305],
    [31, 335]
  ],
  [
    [31, 0],
    [31, 31],
    [31, 62],
    [32, 93],
    [31, 125],
    [31, 156],
    [29, 187],
    [30, 216],
    [30, 246],
    [29, 276],
    [30, 305],
    [30, 335]
  ],
  [
    [31, 0],
    [31, 31],
    [32, 62],
    [31, 94],
    [31, 125],
    [31, 156],
    [30, 187],
    [29, 217],
    [30, 246],
    [29, 276],
    [30, 305],
    [30, 335]
  ],
  [
    [31, 0],
    [32, 31],
    [31, 63],
    [32, 94],
    [31, 126],
    [30, 157],
    [30, 187],
    [29, 217],
    [30, 246],
    [29, 276],
    [30, 305],
    [30, 335]
  ],
  [
    [31, 0],
    [32, 31],
    [31, 63],
    [32, 94],
    [31, 126],
    [30, 157],
    [30, 187],
    [30, 217],
    [29, 247],
    [30, 276],
    [29, 306],
    [31, 335]
  ],
  [
    [31, 0],
    [31, 31],
    [31, 62],
    [32, 93],
    [31, 125],
    [31, 156],
    [30, 187],
    [29, 217],
    [30, 246],
    [29, 276],
    [30, 305],
    [30, 335]
  ],
  [
    [31, 0],
    [31, 31],
    [32, 62],
    [31, 94],
    [31, 125],
    [31, 156],
    [30, 187],
    [29, 217],
    [30, 246],
    [29, 276],
    [30, 305],
    [30, 335]
  ],
  [
    [31, 0],
    [32, 31],
    [31, 63],
    [32, 94],
    [31, 126],
    [30, 157],
    [30, 187],
    [30, 217],
    [29, 247],
    [29, 276],
    [30, 305],
    [30, 335]
  ],
  [
    [31, 0],
    [32, 31],
    [31, 63],
    [32, 94],
    [31, 126],
    [30, 157],
    [30, 187],
    [30, 217],
    [29, 247],
    [30, 276],
    [29, 306],
    [31, 335]
  ],
  [
    [31, 0],
    [31, 31],
    [31, 62],
    [32, 93],
    [31, 125],
    [31, 156],
    [30, 187],
    [29, 217],
    [30, 246],
    [29, 276],
    [30, 305],
    [30, 335]
  ],
  [
    [31, 0],
    [31, 31],
    [32, 62],
    [31, 94],
    [31, 125],
    [31, 156],
    [30, 187],
    [29, 217],
    [30, 246],
    [29, 276],
    [30, 305],
    [30, 335]
  ],
  [
    [31, 0],
    [32, 31],
    [31, 63],
    [32, 94],
    [31, 126],
    [30, 157],
    [30, 187],
    [30, 217],
    [29, 247],
    [29, 276],
    [30, 305],
    [31, 335]
  ],
  [
    [30, 0],
    [32, 30],
    [31, 62],
    [32, 93],
    [31, 125],
    [30, 156],
    [30, 186],
    [30, 216],
    [29, 246],
    [30, 275],
    [29, 305],
    [31, 334]
  ],
  [
    [31, 0],
    [31, 31],
    [32, 62],
    [31, 94],
    [31, 125],
    [31, 156],
    [30, 187],
    [29, 217],
    [30, 246],
    [29, 276],
    [30, 305],
    [30, 335]
  ],
  [
    [31, 0],
    [31, 31],
    [32, 62],
    [31, 94],
    [32, 125],
    [30, 157],
    [30, 187],
    [29, 217],
    [30, 246],
    [29, 276],
    [30, 305],
    [30, 335]
  ],
  [
    [31, 0],
    [32, 31],
    [31, 63],
    [32, 94],
    [31, 126],
    [30, 157],
    [30, 187],
    [30, 217],
    [29, 247],
    [29, 276],
    [30, 305],
    [31, 335]
  ],
  [
    [30, 0],
    [32, 30],
    [31, 62],
    [32, 93],
    [31, 125],
    [30, 156],
    [30, 186],
    [30, 216],
    [29, 246],
    [30, 275],
    [29, 305],
    [31, 334]
  ],
  [
    [31, 0],
    [31, 31],
    [32, 62],
    [31, 94],
    [31, 125],
    [31, 156],
    [30, 187],
    [29, 217],
    [30, 246],
    [29, 276],
    [30, 305],
    [30, 335]
  ],
  [
    [31, 0],
    [31, 31],
    [32, 62],
    [32, 94],
    [31, 126],
    [30, 157],
    [30, 187],
    [29, 217],
    [30, 246],
    [29, 276],
    [30, 305],
    [30, 335]
  ],
  [
    [31, 0],
    [32, 31],
    [31, 63],
    [32, 94],
    [31, 126],
    [30, 157],
    [30, 187],
    [30, 217],
    [29, 247],
    [29, 276],
    [30, 305],
    [31, 335]
  ],
  [
    [30, 0],
    [32, 30],
    [31, 62],
    [32, 93],
    [31, 125],
    [31, 156],
    [29, 187],
    [30, 216],
    [30, 246],
    [29, 276],
    [29, 305],
    [31, 334]
  ],
  [
    [31, 0],
    [31, 31],
    [32, 62],
    [31, 94],
    [31, 125],
    [31, 156],
    [30, 187],
    [29, 217],
    [30, 246],
    [29, 276],
    [30, 305],
    [30, 335]
  ],
  [
    [31, 0],
    [31, 31],
    [32, 62],
    [32, 94],
    [31, 126],
    [30, 157],
    [30, 187],
    [29, 217],
    [30, 246],
    [29, 276],
    [30, 305],
    [30, 335]
  ],
  [
    [31, 0],
    [32, 31],
    [31, 63],
    [32, 94],
    [31, 126],
    [30, 157],
    [30, 187],
    [30, 217],
    [29, 247],
    [29, 276],
    [30, 305],
    [31, 335]
  ],
  [
    [31, 0],
    [31, 31],
    [31, 62],
    [32, 93],
    [31, 125],
    [31, 156],
    [29, 187],
    [30, 216],
    [30, 246],
    [29, 276],
    [30, 305],
    [30, 335]
  ],
  [
    [31, 0],
    [31, 31],
    [32, 62],
    [31, 94],
    [31, 125],
    [31, 156],
    [30, 187],
    [29, 217],
    [30, 246],
    [29, 276],
    [30, 305],
    [30, 335]
  ],
  [
    [31, 0],
    [31, 31],
    [32, 62],
    [32, 94],
    [31, 126],
    [30, 157],
    [30, 187],
    [29, 217],
    [30, 246],
    [29, 276],
    [30, 305],
    [30, 335]
  ],
  [
    [31, 0],
    [32, 31],
    [31, 63],
    [32, 94],
    [31, 126],
    [30, 157],
    [30, 187],
    [30, 217],
    [29, 247],
    [29, 276],
    [30, 305],
    [31, 335]
  ],
  [
    [31, 0],
    [31, 31],
    [31, 62],
    [32, 93],
    [31, 125],
    [31, 156],
    [29, 187],
    [30, 216],
    [30, 246],
    [29, 276],
    [30, 305],
    [30, 335]
  ],
  [
    [31, 0],
    [31, 31],
    [32, 62],
    [31, 94],
    [31, 125],
    [31, 156],
    [30, 187],
    [29, 217],
    [30, 246],
    [29, 276],
    [30, 305],
    [30, 335]
  ],
  [
    [31, 0],
    [32, 31],
    [31, 63],
    [32, 94],
    [31, 126],
    [30, 157],
    [30, 187],
    [29, 217],
    [30, 246],
    [29, 276],
    [30, 305],
    [30, 335]
  ],
  [
    [31, 0],
    [32, 31],
    [31, 63],
    [32, 94],
    [31, 126],
    [30, 157],
    [30, 187],
    [30, 217],
    [29, 247],
    [29, 276],
    [30, 305],
    [31, 335]
  ],
  [
    [31, 0],
    [31, 31],
    [31, 62],
    [32, 93],
    [31, 125],
    [31, 156],
    [30, 187],
    [29, 217],
    [30, 246],
    [29, 276],
    [30, 305],
    [30, 335]
  ],
  [
    [31, 0],
    [31, 31],
    [32, 62],
    [31, 94],
    [31, 125],
    [31, 156],
    [30, 187],
    [29, 217],
    [30, 246],
    [29, 276],
    [30, 305],
    [30, 335]
  ],
  [
    [31, 0],
    [32, 31],
    [31, 63],
    [32, 94],
    [31, 126],
    [30, 157],
    [30, 187],
    [30, 217],
    [29, 247],
    [29, 276],
    [30, 305],
    [30, 335]
  ],
  [
    [31, 0],
    [32, 31],
    [31, 63],
    [32, 94],
    [31, 126],
    [30, 157],
    [30, 187],
    [30, 217],
    [29, 247],
    [30, 276],
    [29, 306],
    [31, 335]
  ],
  [
    [31, 0],
    [31, 31],
    [31, 62],
    [32, 93],
    [31, 125],
    [31, 156],
    [30, 187],
    [29, 217],
    [30, 246],
    [29, 276],
    [30, 305],
    [30, 335]
  ],
  [
    [31, 0],
    [31, 31],
    [32, 62],
    [31, 94],
    [31, 125],
    [31, 156],
    [30, 187],
    [29, 217],
    [30, 246],
    [29, 276],
    [30, 305],
    [30, 335]
  ],
  [
    [31, 0],
    [32, 31],
    [31, 63],
    [32, 94],
    [31, 126],
    [30, 157],
    [30, 187],
    [30, 217],
    [29, 247],
    [29, 276],
    [30, 305],
    [30, 335]
  ],
  [
    [31, 0],
    [32, 31],
    [31, 63],
    [32, 94],
    [31, 126],
    [30, 157],
    [30, 187],
    [30, 217],
    [29, 247],
    [30, 276],
    [29, 306],
    [31, 335]
  ],
  [
    [31, 0],
    [31, 31],
    [32, 62],
    [31, 94],
    [31, 125],
    [31, 156],
    [30, 187],
    [29, 217],
    [30, 246],
    [29, 276],
    [30, 305],
    [30, 335]
  ],
  [
    [31, 0],
    [31, 31],
    [32, 62],
    [31, 94],
    [32, 125],
    [30, 157],
    [30, 187],
    [29, 217],
    [30, 246],
    [29, 276],
    [30, 305],
    [30, 335]
  ],
  [
    [31, 0],
    [32, 31],
    [31, 63],
    [32, 94],
    [31, 126],
    [30, 157],
    [30, 187],
    [30, 217],
    [29, 247],
    [29, 276],
    [30, 305],
    [31, 335]
  ],
  [
    [30, 0],
    [32, 30],
    [31, 62],
    [32, 93],
    [31, 125],
    [30, 156],
    [30, 186],
    [30, 216],
    [29, 246],
    [30, 275],
    [29, 305],
    [31, 334]
  ],
  [
    [31, 0],
    [31, 31],
    [32, 62],
    [31, 94],
    [31, 125],
    [31, 156],
    [30, 187],
    [29, 217],
    [30, 246],
    [29, 276],
    [30, 305],
    [30, 335]
  ],
  [
    [31, 0],
    [31, 31],
    [32, 62],
    [32, 94],
    [31, 126],
    [30, 157],
    [30, 187],
    [29, 217],
    [30, 246],
    [29, 276],
    [30, 305],
    [30, 335]
  ],
  [
    [31, 0],
    [32, 31],
    [31, 63],
    [32, 94],
    [31, 126],
    [30, 157],
    [30, 187],
    [30, 217],
    [29, 247],
    [29, 276],
    [30, 305],
    [31, 335]
  ],
  [
    [30, 0],
    [32, 30],
    [31, 62],
    [32, 93],
    [31, 125],
    [31, 156],
    [29, 187],
    [30, 216],
    [29, 246],
    [30, 275],
    [29, 305],
    [31, 334]
  ],
  [
    [31, 0],
    [31, 31],
    [32, 62],
    [31, 94],
    [31, 125],
    [31, 156],
    [30, 187],
    [29, 217],
    [30, 246],
    [29, 276],
    [30, 305],
    [30, 335]
  ],
  [
    [31, 0],
    [31, 31],
    [32, 62],
    [32, 94],
    [31, 126],
    [30, 157],
    [30, 187],
    [29, 217],
    [30, 246],
    [29, 276],
    [30, 305],
    [30, 335]
  ],
  [
    [31, 0],
    [32, 31],
    [31, 63],
    [32, 94],
    [31, 126],
    [30, 157],
    [30, 187],
    [30, 217],
    [29, 247],
    [29, 276],
    [30, 305],
    [31, 335]
  ],
  [
    [31, 0],
    [31, 31],
    [31, 62],
    [32, 93],
    [31, 125],
    [31, 156],
    [29, 187],
    [30, 216],
    [30, 246],
    [29, 276],
    [29, 305],
    [31, 334]
  ],
  [
    [31, 0],
    [31, 31],
    [32, 62],
    [31, 94],
    [31, 125],
    [31, 156],
    [30, 187],
    [29, 217],
    [30, 246],
    [29, 276],
    [30, 305],
    [30, 335]
  ],
  [
    [31, 0],
    [31, 31],
    [32, 62],
    [32, 94],
    [31, 126],
    [30, 157],
    [30, 187],
    [29, 217],
    [30, 246],
    [29, 276],
    [30, 305],
    [30, 335]
  ],
  [
    [31, 0],
    [32, 31],
    [31, 63],
    [32, 94],
    [31, 126],
    [30, 157],
    [30, 187],
    [30, 217],
    [29, 247],
    [29, 276],
    [30, 305],
    [31, 335]
  ],
  [
    [31, 0],
    [31, 31],
    [31, 62],
    [32, 93],
    [31, 125],
    [31, 156],
    [29, 187],
    [30, 216],
    [30, 246],
    [29, 276],
    [30, 305],
    [30, 335]
  ],
  [
    [31, 0],
    [31, 31],
    [32, 62],
    [31, 94],
    [31, 125],
    [31, 156],
    [30, 187],
    [29, 217],
    [30, 246],
    [29, 276],
    [30, 305],
    [30, 335]
  ],
  [
    [31, 0],
    [32, 31],
    [31, 63],
    [32, 94],
    [31, 126],
    [30, 157],
    [30, 187],
    [29, 217],
    [30, 246],
    [29, 276],
    [30, 305],
    [30, 335]
  ],
  [
    [31, 0],
    [32, 31],
    [31, 63],
    [32, 94],
    [31, 126],
    [30, 157],
    [30, 187],
    [30, 217],
    [29, 247],
    [29, 276],
    [30, 305],
    [31, 335]
  ],
  [
    [31, 0],
    [31, 31],
    [31, 62],
    [32, 93],
    [31, 125],
    [31, 156],
    [30, 187],
    [29, 217],
    [30, 246],
    [29, 276],
    [30, 305],
    [30, 335]
  ],
  [
    [31, 0],
    [31, 31],
    [32, 62],
    [31, 94],
    [31, 125],
    [31, 156],
    [30, 187],
    [29, 217],
    [30, 246],
    [29, 276],
    [30, 305],
    [30, 335]
  ],
  [
    [31, 0],
    [32, 31],
    [31, 63],
    [32, 94],
    [31, 126],
    [30, 157],
    [30, 187],
    [30, 217],
    [29, 247],
    [29, 276],
    [30, 305],
    [30, 335]
  ],
  [
    [31, 0],
    [32, 31],
    [31, 63],
    [32, 94],
    [31, 126],
    [30, 157],
    [30, 187],
    [30, 217],
    [29, 247],
    [30, 276],
    [29, 306],
    [31, 335]
  ],
  [
    [31, 0],
    [31, 31],
    [31, 62],
    [32, 93],
    [31, 125],
    [31, 156],
    [30, 187],
    [29, 217],
    [30, 246],
    [29, 276],
    [30, 305],
    [30, 335]
  ],
  [
    [31, 0],
    [31, 31],
    [32, 62],
    [31, 94],
    [31, 125],
    [31, 156],
    [30, 187],
    [29, 217],
    [30, 246],
    [29, 276],
    [30, 305],
    [30, 335]
  ],
  [
    [31, 0],
    [32, 31],
    [31, 63],
    [32, 94],
    [31, 126],
    [30, 157],
    [30, 187],
    [30, 217],
    [29, 247],
    [29, 276],
    [30, 305],
    [30, 335]
  ],
  [
    [31, 0],
    [31, 31],
    [32, 62],
    [32, 94],
    [31, 126],
    [30, 157],
    [30, 187],
    [30, 217],
    [29, 247],
    [30, 276],
    [30, 306],
    [30, 336]
  ],
  [
    [30, 0],
    [32, 30],
    [31, 62],
    [32, 93],
    [31, 125],
    [30, 156],
    [30, 186],
    [30, 216],
    [29, 246],
    [30, 275],
    [30, 305],
    [30, 335]
  ],
  [
    [31, 0],
    [31, 31],
    [32, 62],
    [31, 94],
    [31, 125],
    [30, 156],
    [30, 186],
    [30, 216],
    [29, 246],
    [30, 275],
    [30, 305],
    [30, 335]
  ],
  [
    [31, 0],
    [31, 31],
    [32, 62],
    [31, 94],
    [31, 125],
    [30, 156],
    [30, 186],
    [30, 216],
    [29, 246],
    [30, 275],
    [30, 305],
    [30, 335]
  ],
  [
    [31, 0],
    [32, 31],
    [31, 63],
    [32, 94],
    [30, 126],
    [31, 156],
    [30, 187],
    [30, 217],
    [29, 247],
    [30, 276],
    [30, 306],
    [30, 336]
  ],
  [
    [30, 0],
    [32, 30],
    [31, 62],
    [32, 93],
    [31, 125],
    [30, 156],
    [30, 186],
    [30, 216],
    [29, 246],
    [30, 275],
    [30, 305],
    [30, 335]
  ],
  [
    [31, 0],
    [31, 31],
    [32, 62],
    [31, 94],
    [31, 125],
    [31, 156],
    [30, 187],
    [30, 217],
    [29, 247],
    [30, 276],
    [30, 306],
    [30, 336]
  ],
  [
    [30, 0],
    [31, 30],
    [32, 61],
    [32, 93],
    [30, 125],
    [31, 155],
    [30, 186],
    [30, 216],
    [29, 246],
    [30, 275],
    [30, 305],
    [30, 335]
  ],
  [
    [30, 0],
    [32, 30],
    [31, 62],
    [32, 93],
    [31, 125],
    [30, 156],
    [30, 186],
    [30, 216],
    [29, 246],
    [30, 275],
    [30, 305],
    [30, 335]
  ],
  [
    [30, 0],
    [32, 30],
    [31, 62],
    [32, 93],
    [31, 125],
    [30, 156],
    [30, 186],
    [30, 216],
    [29, 246],
    [30, 275],
    [30, 305],
    [30, 335]
  ]
]
const yearDaysMapping = [
  [365, 0],
  [365, 365],
  [365, 730],
  [366, 1095],
  [365, 1461],
  [365, 1826],
  [365, 2191],
  [366, 2556],
  [365, 2922],
  [365, 3287],
  [365, 3652],
  [366, 4017],
  [365, 4383],
  [365, 4748],
  [365, 5113],
  [366, 5478],
  [365, 5844],
  [365, 6209],
  [365, 6574],
  [366, 6939],
  [365, 7305],
  [365, 7670],
  [365, 8035],
  [366, 8400],
  [365, 8766],
  [365, 9131],
  [366, 9496],
  [365, 9862],
  [365, 10227],
  [365, 10592],
  [366, 10957],
  [365, 11323],
  [365, 11688],
  [365, 12053],
  [366, 12418],
  [365, 12784],
  [365, 13149],
  [365, 13514],
  [366, 13879],
  [365, 14245],
  [365, 14610],
  [365, 14975],
  [366, 15340],
  [365, 15706],
  [365, 16071],
  [365, 16436],
  [366, 16801],
  [365, 17167],
  [365, 17532],
  [365, 17897],
  [366, 18262],
  [365, 18628],
  [365, 18993],
  [365, 19358],
  [366, 19723],
  [365, 20089],
  [365, 20454],
  [366, 20819],
  [365, 21185],
  [365, 21550],
  [365, 21915],
  [366, 22280],
  [365, 22646],
  [365, 23011],
  [365, 23376],
  [366, 23741],
  [365, 24107],
  [365, 24472],
  [365, 24837],
  [366, 25202],
  [365, 25568],
  [365, 25933],
  [365, 26298],
  [366, 26663],
  [365, 27029],
  [365, 27394],
  [365, 27759],
  [366, 28124],
  [365, 28490],
  [365, 28855],
  [365, 29220],
  [366, 29585],
  [365, 29951],
  [365, 30316],
  [365, 30681],
  [366, 31046],
  [365, 31412],
  [366, 31777],
  [365, 32143],
  [365, 32508],
  [365, 32873]
]

const MAX_DAY = 33238
const MIN_DAY = 1
/**
 * @ignore
 */
export function getYearIndex(year: number) {
  return year - EPOCH_YEAR
}

/**
 * @ignore
 */
export function getYearFromIndex(yearIndex: number) {
  return yearIndex + EPOCH_YEAR
}

/**
 * @ignore
 */
export const KTM_TIMEZONE_OFFSET = 20700000
/**
 * @ignore
 */
export const EPOCH_YEAR = 2000
/**
 * @ignore
 */
export const COMPLETED_DAYS = 1
/**
 * @ignore
 */
export const TOTAL_DAYS = 0

/**
 * @ignore
 */
function mod(m: number, val: number) {
  while (val < 0) {
    val += m
  }
  return val % m
}

export const formatObj = {
  en: {
    day: {
      short: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
      long: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
    },
    month: {
      short: ['Bai', 'Jes', 'Asa', 'Shr', 'Bhd', 'Asw', 'Kar', 'Man', 'Pou', 'Mag', 'Fal', 'Cha'],
      long: [
        'Baisakh',
        'Jestha',
        'Asar',
        'Shrawan',
        'Bhadra',
        'Aswin',
        'Kartik',
        'Mangsir',
        'Poush',
        'Magh',
        'Falgun',
        'Chaitra'
      ]
    },
    date: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
  },
  np: {
    day: {
      short: ['आइत', 'सोम', 'मंगल', 'बुध', 'बिहि', 'शुक्र', 'शनि'],
      long: ['आइतबार', 'सोमबार', 'मंगलबार', 'बुधबार', 'बिहिबार', 'शुक्रबार', 'शनिबार']
    },
    month: {
      short: ['बै', 'जे', 'अ', 'श्रा', 'भा', 'आ', 'का', 'मं', 'पौ', 'मा', 'फा', 'चै'],
      long: [
        'बैशाख',
        'जेठ',
        'असार',
        'श्रावण',
        'भाद्र',
        'आश्विन',
        'कार्तिक',
        'मंसिर',
        'पौष',
        'माघ',
        'फाल्गुण',
        'चैत्र'
      ]
    },
    date: ['०', '१', '२', '३', '४', '५', '६', '७', '८', '९']
  }
}

const beginEnglish = {
  year: 1943,
  month: 3,
  date: 13,
  day: 3
}

const initTime = new Date(beginEnglish.year, beginEnglish.month, beginEnglish.date)

/**
 * `findPassedDays` calculates the days passed from the epoch time.
 *  If the days are beyond boundary MIN_DAY and MAX_DAY throws error.
 * @param year Year between 2000-2009 of nepali date
 * @param month Month Index which can be negative or positive and can be any number but should be within range of year 2000-2090
 * @param date Date which can be negative or positive and can be any number but should be within range of year 2000-2090
 * @returns Number of days passed since epoch time from the given date,month and year.
 */
export function findPassedDays(year: number, month: number, date: number) {
  try {
    const yearIndex = getYearIndex(year)
    const pastYearDays = yearDaysMapping[yearIndex][COMPLETED_DAYS]
    const extraMonth = mod(12, month)
    const extraYear = Math.floor(month / 12)

    const pastMonthDays =
      yearDaysMapping[yearIndex + extraYear][COMPLETED_DAYS] -
      pastYearDays +
      monthDaysMappings[yearIndex + extraYear][extraMonth][COMPLETED_DAYS]

    const daysPassed = pastYearDays + pastMonthDays + date
    if (daysPassed < MIN_DAY || daysPassed > MAX_DAY) {
      throw new Error()
    }
    return daysPassed
  } catch {
    throw new Error("The date doesn't fall within 2000/01/01 - 2090/12/30")
  }
}

export { monthDaysMappings, yearDaysMapping }

/**
 * `mapDaysToDate` finds the date where the the given day lies from the epoch date
 * If the daysPassed is on the date 2000/01/01 then it will be 1. Similarly, every day adds on from then
 * If the days are beyond boundary MIN_DAY and MAX_DAY throws error.
 * @param daysPassed The number of days passed since nepali date epoch time
 * @returns date values in object implementing IYearMonthDate interface
 */
export function mapDaysToDate(daysPassed: number): IYearMonthDate {
  if (daysPassed < MIN_DAY || daysPassed > MAX_DAY) {
    throw new Error(`The epoch difference is not within the boundaries ${MIN_DAY} - ${MAX_DAY}`)
  }

  const yearIndex = yearDaysMapping.findIndex(
    year =>
      daysPassed > year[COMPLETED_DAYS] && daysPassed <= year[COMPLETED_DAYS] + year[TOTAL_DAYS]
  )
  const monthRemainder = daysPassed - yearDaysMapping[yearIndex][COMPLETED_DAYS]
  const monthIndex = monthDaysMappings[yearIndex].findIndex(
    month =>
      monthRemainder > month[COMPLETED_DAYS] &&
      monthRemainder <= month[COMPLETED_DAYS] + month[TOTAL_DAYS]
  )
  const date = monthRemainder - monthDaysMappings[yearIndex][monthIndex][COMPLETED_DAYS]

  return {
    year: getYearFromIndex(yearIndex),
    month: monthIndex,
    date: date
  }
}

export function findPassedDaysAD(year: number, month: number, date: number) {
  const timeDiff = Math.abs(
    Date.UTC(year, month, date) - Date.UTC(beginEnglish.year, beginEnglish.month, beginEnglish.date)
  )
  const diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24))
  return diffDays
}

export function mapDaysToDateAD(daysPassed: number) {
  const mappedDate = new Date(Date.UTC(1943, 3, 13 + daysPassed))
  return {
    year: mappedDate.getUTCFullYear(),
    month: mappedDate.getUTCMonth(),
    date: mappedDate.getUTCDate(),
    day: mappedDate.getUTCDay()
  }
}

export function convertToAD(bsDateObject: IYearMonthDate): IAdBs {
  try {
    const daysPassed = findPassedDays(bsDateObject.year, bsDateObject.month, bsDateObject.date)
    const BS = mapDaysToDate(daysPassed)
    const AD = mapDaysToDateAD(daysPassed)

    return {
      AD,
      BS: { ...BS, day: AD.day }
    }
  } catch {
    throw new Error("The date doesn't fall within 2000/01/01 - 2090/12/30")
  }
}

export function convertToBS(adDateObject: Date): IAdBs {
  try {
    const daysPassed = findPassedDaysAD(
      adDateObject.getFullYear(),
      adDateObject.getMonth(),
      adDateObject.getDate()
    )
    const BS = mapDaysToDate(daysPassed)
    const AD = mapDaysToDateAD(daysPassed)

    return {
      AD,
      BS: { ...BS, day: AD.day }
    }
  } catch {
    throw new Error("The date doesn't fall within 2000/01/01 - 2090/12/30")
  }
}

function mapLanguageNumber(dateNumber: string, language: Language): string {
  return dateNumber
    .split('')
    .map(num => formatObj[language].date[parseInt(num, 10)])
    .join('')
}

export function format(bsDate: IYearMonthDate, stringFormat: string, language: Language): string {
  return stringFormat
    .replace(/(?<!\\)(D{1,2}|M{1,4}|Y{2,4}|d{1,3})/g, match => {
      switch (match) {
        case 'D':
          return mapLanguageNumber(bsDate.date.toString(), language)
        case 'DD':
          return mapLanguageNumber(bsDate.date.toString().padStart(2, '0'), language)
        case 'M':
          return mapLanguageNumber((bsDate.month + 1).toString(), language)
        case 'MM':
          return mapLanguageNumber((bsDate.month + 1).toString().padStart(2, '0'), language)
        case 'MMM':
          return formatObj[language].month.short[bsDate.month]
        case 'MMMM':
          return formatObj[language].month.long[bsDate.month]
        case 'YY':
          return mapLanguageNumber(bsDate.year.toString().slice(-2), language)
        case 'YYY':
          return mapLanguageNumber(bsDate.year.toString().slice(-3), language)
        case 'YYYY':
          return mapLanguageNumber(bsDate.year.toString(), language)
        case 'd':
          return mapLanguageNumber(bsDate.day?.toString() || '0', language)
        case 'dd':
          return formatObj[language].day.short[bsDate.day || 0]
        case 'ddd':
          return formatObj[language].day.long[bsDate.day || 0]
        default:
          return ''
      }
    })
    .replace(/\\/g, '')
}

export function parse(dateString: string): IYearMonthDate {
  const OFFICIAL_FORMAT = /(\d{4})\s*([/-]|\s+)\s*(\d{1,2})\s*([/-]|\s+)\s*(\d{1,2})/
  const GEORGIAN_FORMAT = /(\d{1,2})\s*([/-]|\s+)\s*(\d{1,2})\s*([/-]|\s+)\s*(\d{4})/
  let match: RegExpMatchArray | null
  match = dateString.match(OFFICIAL_FORMAT)
  if (match !== null) {
    return {
      year: parseInt(match[1], 10),
      month: parseInt(match[3], 10) - 1,
      date: parseInt(match[5], 10)
    }
  }
  match = dateString.match(GEORGIAN_FORMAT)
  if (match !== null) {
    return {
      year: parseInt(match[5], 10),
      month: parseInt(match[3], 10) - 1,
      date: parseInt(match[1], 10)
    }
  }
  throw new Error('Invalid date format')
}
