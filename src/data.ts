export type typeMenuList={
    id: number,
    name: string,
    taste: "sweet"|"spicy"|"light"|"rich"|null,
    cheap: boolean|null,
    short: boolean|null,
    easy: boolean|null
}[]

export const menuList:typeMenuList = [
    {
        id: 1,
        name: "カレー",
        taste: "spicy",
        cheap: true,
        short: true,
        easy: true
    },
    {
        id: 2,
        name: "シチュー",
        taste: "rich",
        cheap: false,
        short: false,
        easy: false
    },
    {
        id: 3,
        name:  "すし",
        taste: "light",
        cheap: false,
        short: true,
        easy: false
    },
    {
        id: 4,
        name:  "ハンバーグ",
        taste: "light",
        cheap: true,
        short: false,
        easy: true
    },
    {
        id: 5,
        name:  "オムライス",
        taste: "rich",
        cheap: false,
        short: true,
        easy: false
    },
    {
        id: 6,
        name:  "ストロベリー",
        taste: "sweet",
        cheap: false,
        short: true,
        easy: false
    },
]