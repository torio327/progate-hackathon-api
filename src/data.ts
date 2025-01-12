import {teriyaki} from "./base64-data/teriyaki";
import {tsukemono} from "./base64-data/tsukemono";
import {hamburg} from "./base64-data/hamburg";

import {stew} from "./base64-data/stew";

import {karaage} from "./base64-data/karaage";

import {tonjiru} from "./base64-data/tonjiru";
import {mabodoufu} from "./base64-data/mabodoufu";
import {pizza} from "./base64-data/pizza";

export type typeMenuList = {
    id: number
    name: string
    taste: "sweet" | "spicy" | "light" | "rich"
    isCheap: boolean
    isShort: boolean
    isEasy: boolean
    image: string
    mealType:"staple"|"main"|"side"|"soup"
    cuisine:"japanese"|"western"|"chinese"|"italian"
    ingredients: Array<{ name: string, amount: string }>
    tags: Array<string>
    steps: Array<string>
}[]

export const menuList: typeMenuList = [
    {
        "id": 1,
        "name": "鶏の照り焼き",
        "taste": "light",
        "isCheap": true,
        "isShort": true,
        "isEasy": true,
        "mealType":"main",
        "cuisine":"japanese",
        "image": teriyaki,
        "ingredients": [
            {
                "name": "鶏もも肉",
                "amount": "400g"
            },
            {
                "name": "醤油",
                "amount": "大さじ2"
            },
            {
                "name": "みりん",
                "amount": "大さじ2"
            },
            {
                "name": "酒",
                "amount": "大さじ1"
            },
            {
                "name": "砂糖",
                "amount": "大さじ1"
            }
        ],
        "tags": [
            "安い",
            "簡単",
            "主菜",
            "和食"
        ],
        "steps": [
            "鶏肉を一口大に切ります。",
            "醤油、みりん、酒、砂糖を混ぜて調味料を作ります。",
            "フライパンで鶏肉を両面焼きます。",
            "調味料を加え、煮詰めながら照りを出します。",
            "鶏肉に味がなじんだら完成です。"
        ]
    },
    {
        "id": 2,
        "name": "ハンバーグ",
        "taste": "rich",
        "isCheap": true,
        "isShort": false,
        "isEasy": true,
        "mealType":"main",
        "cuisine":"western",
        "image": hamburg,
        "ingredients": [
            {
                "name": "牛ひき肉",
                "amount": "300g"
            },
            {
                "name": "玉ねぎ",
                "amount": "1個"
            },
            {
                "name": "パン粉",
                "amount": "1/2カップ"
            },
            {
                "name": "牛乳",
                "amount": "大さじ2"
            },
            {
                "name": "卵",
                "amount": "1個"
            },
            {
                "name": "塩",
                "amount": "小さじ1/2"
            },
            {
                "name": "コショウ",
                "amount": "少々"
            }
        ],
        "tags": [
            "こってり",
            "難しい",
            "主菜",
            "洋食"
        ],
        "steps": [
            "玉ねぎをみじん切りにして、炒めて冷まします。",
            "ボウルにひき肉、玉ねぎ、パン粉、牛乳、卵、塩、コショウを入れて混ぜます。",
            "混ぜたタネを手で形を整えて、フライパンで焼きます。",
            "両面に焼き色がついたら、蓋をして弱火で火を通します。",
            "ソースをかけて完成です。"
        ]
    },
    {
        "id": 3,
        "name": "シチュー",
        "taste": "rich",
        "isCheap": false,
        "isShort": false,
        "isEasy": true,
        "mealType":"main",
        "cuisine":"western",
        "image": stew,
        "ingredients": [
            {
                "name": "シチュールー",
                "amount": "1箱"
            },
            {
                "name": "鶏もも肉",
                "amount": "300g"
            },
            {
                "name": "じゃがいも",
                "amount": "2個"
            },
            {
                "name": "にんじん",
                "amount": "1本"
            },
            {
                "name": "玉ねぎ",
                "amount": "2個"
            },
            {
                "name": "牛乳",
                "amount": "200ml"
            },
            {
                "name": "水",
                "amount": "600ml"
            }
        ],
        "tags": [
            "こってり",
            "長い",
            "簡単",
            "主菜",
            "洋食"
        ],
        "steps": [
            "じゃがいも、にんじん、玉ねぎを一口大に切ります。",
            "鍋で鶏肉を炒め、色が変わったら野菜を加えて炒めます。",
            "水を加えて、沸騰させてアクを取ります。",
            "20分ほど煮込みます。",
            "シチュールーと牛乳を入れて、さらに10分煮込んで完成です。"
        ]
    },
    {
        "id": 4,
        "name": "からあげ",
        "taste": "spicy",
        "isCheap": true,
        "isShort": false,
        "isEasy": true,
        "mealType":"main",
        "cuisine":"japanese",
        "image": karaage,
        "ingredients": [
            {
                "name": "鶏もも肉",
                "amount": "300g"
            },
            {
                "name": "醤油",
                "amount": "大さじ2"
            },
            {
                "name": "酒",
                "amount": "大さじ1"
            },
            {
                "name": "しょうが",
                "amount": "少々"
            },
            {
                "name": "にんにく",
                "amount": "少々"
            },
            {
                "name": "片栗粉",
                "amount": "適量"
            },
            {
                "name": "油",
                "amount": "適量"
            }
        ],
        "tags": [
            "安い",
            "主菜",
            "和食"
        ],
        "steps": [
            "鶏肉を一口大に切り、醤油、酒、しょうが、にんにくで下味をつけます。",
            "片栗粉をまぶし、油でカリッと揚げます。",
            "揚げたら油を切って完成です。"
        ]
    },
    {
        "id": 5,
        "name": "豚汁",
        "taste": "light",
        "isCheap": true,
        "isShort": false,
        "isEasy": true,
        "mealType":"soup",
        "cuisine":"japanese",
        "image": tonjiru,
        "ingredients": [
            {
                "name": "豚バラ肉",
                "amount": "100g"
            },
            {
                "name": "大根",
                "amount": "1/4本"
            },
            {
                "name": "にんじん",
                "amount": "1本"
            },
            {
                "name": "こんにゃく",
                "amount": "1/2枚"
            },
            {
                "name": "味噌",
                "amount": "大さじ2"
            },
            {
                "name": "出汁",
                "amount": "600ml"
            }
        ],
        "tags": [
            "汁物",
            "和食"
        ],
        "steps": [
            "大根、にんじん、こんにゃくを食べやすい大きさに切ります。",
            "鍋で豚肉を炒め、出汁を加えて野菜を煮ます。",
            "野菜が柔らかくなったら味噌を溶き入れます。",
            "煮立たせずに火を止めて完成です。"
        ]
    },
    {
        "id": 6,
        "name": "麻婆豆腐",
        "taste": "spicy",
        "isCheap": true,
        "isShort": true,
        "isEasy": true,
        "mealType":"main",
        "cuisine":"chinese",
        "image": mabodoufu,
        "ingredients": [
            {
                "name": "絹ごし豆腐",
                "amount": "1丁"
            },
            {
                "name": "豚ひき肉",
                "amount": "150g"
            },
            {
                "name": "ねぎ",
                "amount": "1/2本"
            },
            {
                "name": "豆板醤",
                "amount": "小さじ1"
            },
            {
                "name": "甜麺醤",
                "amount": "大さじ1"
            },
            {
                "name": "醤油",
                "amount": "大さじ1"
            },
            {
                "name": "酒",
                "amount": "大さじ1"
            },
            {
                "name": "片栗粉",
                "amount": "小さじ1"
            }
        ],
        "tags": [
            "中華",
            "メイン",
            "豆腐料理"
        ],
        "steps": [
            "豆腐を一口大に切り、湯通しして水を切ります。",
            "フライパンでひき肉を炒め、豆板醤と甜麺醤を加えます。",
            "豆腐を入れ、酒と醤油で味を整えます。",
            "片栗粉を水で溶いて加え、とろみをつけたら完成です。"
        ]
    },
    {
        "id": 7,
        "name": "マルゲリータピザ",
        "taste": "light",
        "isCheap": false,
        "isShort": false,
        "isEasy": false,
        "mealType":"staple",
        "cuisine":"italian",
        "image": pizza,
        "ingredients": [
            {
                "name": "ピザ生地",
                "amount": "1枚"
            },
            {
                "name": "トマトソース",
                "amount": "大さじ4"
            },
            {
                "name": "モッツァレラチーズ",
                "amount": "100g"
            },
            {
                "name": "バジルの葉",
                "amount": "適量"
            },
            {
                "name": "オリーブオイル",
                "amount": "大さじ1"
            }
        ],
        "tags": [
            "イタリアン",
            "ピザ",
            "メイン"
        ],
        "steps": [
            "ピザ生地にトマトソースを塗ります。",
            "モッツァレラチーズをのせ、オリーブオイルを少し振りかけます。",
            "250℃のオーブンで10分焼きます。",
            "焼き上がったらバジルの葉を散らして完成です。"
        ]
    },
    {
        "id": 8,
        "name": "きゅうりの漬物",
        "taste": "light",
        "isCheap": true,
        "isShort": true,
        "isEasy": true,
        "mealType":"side",
        "cuisine":"chinese",
        "image": tsukemono,
        "ingredients": [
            {
                "name": "きゅうり",
                "amount": "2本"
            },
            {
                "name": "塩",
                "amount": "小さじ1"
            },
            {
                "name": "昆布",
                "amount": "少々"
            },
            {
                "name": "鷹の爪",
                "amount": "1本"
            },
            {
                "name": "酢",
                "amount": "大さじ2"
            },
            {
                "name": "砂糖",
                "amount": "大さじ1"
            }
        ],
        "tags": [
            "中華",
            "副菜",
            "漬物"
        ],
        "steps": [
            "きゅうりを縦半分に切り、食べやすい大きさにします。",
            "塩をふり、軽くもんで水分を出し、余分な水分を拭き取ります。",
            "保存袋に昆布、鷹の爪、酢、砂糖を入れ、きゅうりと一緒に漬け込みます。",
            "冷蔵庫で1〜2時間漬け込み、味がなじんだら完成です。"
        ]
    }
]