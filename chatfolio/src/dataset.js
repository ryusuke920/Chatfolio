const defaultDataset = {
    "init": {
        answers: [
            {content: "お問い合わせをしたい", nextId: "contact"},
            {content: "SNSなどのアカウント知りたい", nextId: "account"},
            {content: "制作物について知りたい", nextId: "github"},
            {content: "貢ぎたい・祝いたい", nextId: "https://www.amazon.co.jp/hz/wishlist/ls/32CYK9U1XENI6/ref=nav_wishlist_lists_1"},
        ],
        question: "お越し頂きありがとうございます！どのようなご用件になりますでしょうか？",
    },
    "account": {
        answers: [
            {content: "Twitter", nextId: "https://twitter.com/ryusuke__h"},
            {content: "GitHub", nextId: "https://github.com/ryusuke920"},
            {content: "AtCoder", nextId: "https://atcoder.jp/users/ryusuke_h"},
            {content: "ブログのアカウントについて知りたい", nextId: "blog-account"}
        ],
        question: "下記が主なSNS等のリンク先になります。",
    },
    "github": {
        answers: [
            {content: "AtCoderList", nextId: "https://atcoder-list.herokuapp.com/"},
            {content: "競プロ典型90問（Python版）", nextId: "https://github.com/ryusuke920/kyopro_educational_90_python"},
            {content: "AtCoder-Library（Python版）", nextId: "https://github.com/ryusuke920/AtCoder-Library"},
            {content: "最初に戻る", nextId: "init"}
        ],
        question: "制作物は以下のようなものがあります。",
    },
    "blog-account": {
        answers: [
            {content: "Qiita", nextId: "https://qiita.com/ryusuke920"},
            {content: "はてなブログ", nextId: "https://ryusuke920.hatenablog.jp"},
            {content: "note", nextId: "https://note.com/ryusuke_920"},
            {content: "最初の質問に戻る", nextId: "init"}
        ],
        question: "下記が主なブログ等のリンク先になります。",
    },
}

export default defaultDataset;