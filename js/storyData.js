var story = [
    {
        "id" : "s101-01",
        "content" : [
            {
                "avatar" : "kuso",
                "words" : "這裡是那裡啊？"
            },
            {
                "avatar" : "kuso",
                "words" : "咦～牆上的畫作有些部分不見了，發生什麼事了？"
            }
        ],
        "next" : ["load", "scene2"]        
    },
    {
        "id" : "s102-01",
        "content" : [
            {
                "avatar" : "npc01",
                "words" : "是酷獸啊，你怎麼在這邊呢？"
            },
            {
                "avatar" : "kuso",
                "words" : "原來是荷精靈，我正在找碧玉如意，請問你有看到嗎？"
            },
            {
                "avatar" : "npc01",
                "words" : "嗯...我沒看到耶，抱歉沒能幫上忙。"
            },
            {
                "avatar" : "kuso",
                "words" : "沒關係～"
            },
            {
                "avatar" : "kuso",
                "words" : "咦？妳為什麼看起來心事重重的呢？"
            },
            {
                "avatar" : "npc01",
                "words" : "唉...牆上的荷花畫作都亂掉了，該怎麼辦呢？"
            },
            {
                "avatar" : "kuso",
                "words" : "我來幫幫妳吧！雖然我對荷花不是很熟。"
            },
            {
                "avatar" : "npc01",
                "words" : "太好了，謝謝酷獸，讓我來跟你分享荷花的祕密吧！"                
            }
        ],
        "next" : ["run", "s102-01"]        
    },
    {
        "id" : "s102-02",
        "content" :[
            {
                "avatar" : "npc01",
                "words" : "太好了！你已經觀察到荷花不同部位的質感知識。"
            },
            {
                "avatar" : "npc01",
                "words" : "這是質感錦囊，或許能幫你找到如意！"
            },
            {
                "avatar" : "kuso",
                "words" : "謝謝！那我就收下囉！"
            }
        ],
        "next" : ["run", ""]
    },
    {
        "id" : "s103-01",
        "content" :[
            {
                "avatar" : "npc01",
                "words" : "接下來，請把獲得的拼圖碎片，歸回畫作裡吧！"
            }
        ],
        "next" : ["", ""]
    }
];