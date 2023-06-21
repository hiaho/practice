let foundList = [];
let uniqueInput = [];
let newList = []; 



document.getElementById("countN5Button").onclick = function(){
	getCurrentInput();
}



var charList = [];

var charHiragana = [	"あ",	"い", 	"う",	"え",	"お",	"ん",  			
						"か",	"き",	"く", 	"け",	"こ",	"っ", 			
						"が",	"ぎ", 	"ぐ", 	"",		"ご",	 "ゃ",			
						"さ", 	"し",	"す", 	"せ",  	"そ",					
						"ざ", 	"ぜ",	"ず",  			"ぞ",					
								"じ", 											
								"ち",	"つ", 	"て",  	"と",					
						"だ",					"で", 	"ど",					
						"な",	"に",			"ね", 	"の",					
						"は", 	"ひ",	"ふ", 	"へ", 	"ほ",					
						"ば",	"び",	"ぶ",	"べ", 	"ぼ",					
						"ぱ", 	"ぺ", 	"ぽ",									
						"ま",	"み",	"む",	"め", 	"も", 					
						"や", 						 	"よ",					
						"ら",	"り",	"る",  	"れ", 	"ろ", 					
						"わ", 							"を", 
						"づ",
						"ょ"];
 
var charKatakana = [

						"ア", 	"イ", 	"ウ", 	"エ", 	"オ",  "ン", 			
						"カ", 	"キ", 	"ク", 	"ケ",	"コ", 							
 						"ガ", 							"ゴ",  							
						"サ",	"シ", 	"ス",	"ソ",									 
						"ズ",															
 						"ジ",															
 						"タ", 	"チ",	"テ", 	"ト",									
						"デ", 	"ド",													
						"ナ", 	"ニ",	"ヌ", 	"ネ", 	"ノ",							
						"ハ", 	"フ", 	"ヘ", 											
						"バ", 	"ブ", 	"ベ",											
						"パ", 	"ピ", 	"プ",	"ペ", 	"ポ", 							
						"マ", 	"ミ", 	"ム", 	"メ", 	"モ",							
						"ヤ", 															
						"ラ", 	"リ", 	"ル", 	"ロ",									
						"ワ",															
						"ッ", 	"ァ", 	"ィ", 	"ゥ", "I", 
						"ャ", 	"ュ", 	"ョ"
					]

var n5char =   ["会", "青", "赤", "明", "秋", "開", "上", "朝", "御", "飯", "足", "日", "遊", "暖", "頭", "新", "暑", "熱", "厚", "後", 
				"兄", "姉", "危", "甘", "雨", "飴", "洗", "歩", "言", "家", "行", "池", "医", "者", "忙", "痛", "一", "五", "緒", "犬", 
				"今", "意", "味", "妹", "嫌", "入", "口", "居", "要", "色", "薄", "歌", "生", "海", "売", "場", "煩", "着", "絵", "映", 
				"画", "館", "英", "語", "駅", "鉛", "筆", "多", "大", "勢", "母", "菓", "子", "金", "起", "置", "奥", "酒", "皿", "伯", 
				"父", "叔", "教", "押", "遅", "茶", "手", "弟", "男", "昨", "年", "人", "同", "風", "呂", "弁", "当", "覚", "重", "泳", 
				"降", "終", "音", "楽", "女", "外", "国", "社", "階", "段", "買", "物", "返", "帰", "書", "学", "傘", "貸", "邪", "族", 
				"方", "校", "庭", "角", "花", "瓶", "紙", "火", "曜", "辛", "体", "借", "軽", "川", "河", "漢", "字", "木", "黄", "消", 
				"聞", "北", "汚", "喫", "店", "切", "符", "九", "牛", "肉", "乳", "室", "去", "銀", "薬", "果", "靴", "下", "曇", "暗", 
				"来", "車", "黒", "警", "官", "結", "構", "婚", "月", "玄", "関", "元", "気", "公", "園", "交", "差", "点", "紅", "番", 
				"声", "午", "前", "答", "葉", "供", "困", "週", "晩", "財", "布", "魚", "先", "咲", "作", "文", "雑", "誌", "砂", "糖", 
				"寒", "三", "散", "四", "塩", "時", "間", "仕", "事", "辞", "静", "七", "質", "問", "自", "転", "動", "死", "引", "分", 
				"閉", "締", "写", "真", "十", "授", "業", "宿", "題", "丈", "夫", "食", "堂", "知", "白", "水", "吸", "好", "少", "涼", 
				"住", "座", "背", "徒", "広", "狭", "千", "濯", "全", "部", "掃", "除", "空", "使", "台", "所", "高", "出", "立", "建", 
				"頼", "卵", "誰", "誕", "小", "近", "違", "地", "鉄", "図", "疲", "次", "机", "勤", "冷", "強", "天", "電", "私", "渡",
				"話", "戸", "遠", "々", "計", "隣", "飛", "止", "友", "達", "土", "鳥", "取", "撮", "中", "長", "鳴", "無", "夏", "休", 
				"名", "習", "並", "何", "二", "賑", "西", "荷", "脱", "温", "猫", "寝", "登", "飲", "乗", "歯", "灰", "箱", "橋", "悪",
				"始", "初", "走", "歳", "働", "八", "鼻", "早", "速", "春", "貼", "晴", "半", "号", "東", "弾", "低", "機", "左", "暇", 
				"百", "病", "院", "昼", "封", "筒", "吹", "服", "豚", "太", "冬", "古", "章", "屋", "辺", "勉", "便", "利", "帽", "欲", 
				"細", "本", "棚", "毎", "曲", "町", "待", "窓", "丸", "円", "万", "磨", "右", "短", "見", "道", "緑", "皆", "南", "耳", 
				"観", "六", "向", "難", "村", "目", "眼", "鏡", "度", "持", "門", "野", "菜", "易", "安", "山", "夕", "郵", "局", "夜", 
				"有", "雪", "洋", "横", "呼", "読", "弱", "留", "両", "親", "料", "理", "旅", "零", "蔵", "庫", "練", "廊", "若", "忘",
			];

var n4char =   ["合", "坊", "浅", "集", "謝", "心", "案", "内", "以", "石", "急", "致", "懸", "命", "糸", "田", "舎", "祈", "植", "受", 
				"付", "打", "美", "移", "腕", "裏", "運", "枝", "選", "慮", "祝", "億", "贈", "送", "怒", "嬢", "宅", "落", "踊", "驚", 
				"祭", "舞", "産", "思", "表", "折", "礼", "岸", "議", "変", "科", "掛", "飾", "堅", "硬", "固", "形", "片", "課", "勝", 
				"悲", "必", "彼", "壁", "髪", "噛", "通", "乾", "代", "考", "係", "看", "護", "婦", "簡", "単", "険", "汽", "技", "術", 
				"季", "節", "規", "則", "絹", "厳", "決", "君", "客", "育", "競", "争", "興", "具", "港", "草", "首", "雲", "比", "暮", 
				"毛", "経", "験", "済", "察", "景", "原", "因", "研", "究", "郊", "講", "義", "工", "等", "務", "員", "際", "主", "故", 
				"障", "存", "込", "米", "怖", "壊", "最", "坂", "探", "盛", "げ", "寂", "騒", "触", "残", "念", "市", "試", "震", "支", 
				"失", "敗", "典", "品", "島", "民", "由", "慣", "柔", "席", "発", "趣", "準", "備", "紹", "介", "説", "招", "承", "将", 
				"性", "調", "神", "配", "数", "過", "凄", "進", "捨", "滑", "隅", "活", "政", "治", "世", "界", "線", "戦", "輩", 
				"相", "談", "卒", "祖", "退", "倒", "確", "訪", "尋", "正", "畳", "例", "為", "房", "血", "力", "注", "射", "駐", "捕", 
				"漬", "都", "伝", "続", "包", "妻", "釣", "連", "丁", "寧", "適", "袋", "寺", "予", "報", "灯", "展", "覧", "特", "別", 
				"途", "届", "泊", "替", "泥", "棒", "直", "泣", "亡", "投", "苦", "逃", "記", "似", "盗", "塗", "眠", "換", "倍", "拝", 
				"恥", "林", "払", "組", "反", "対", "光", "久", "非", "常", "越", "拾", "増", "深", "複", "復", "普", "団", "舟", "不", 
				"踏", "化", "法", "貿", "放", "律", "僕", "星", "翻", "訳", "参", "負", "周", "回", "漫", "湖", "噌", "迎", "昔", "虫", 
				"息", "娘", "召", "珍", "申", "戻", "綿", "森", "焼", "約", "束", "役", "優", "痩", "湯", "輸", "指", "輪", "夢", 
				"揺", "用", "定", "寄", "喜", "守", "歴", "史", "絡", "沸", "笑", "割"];

var n3char =   ["愛", "挨", "拶", "情", "諦", "飽", "握", "魔", "預", "汗", "与", "た", "扱", "跡", "穴", "浴", "油", "余", "誤", "粗", 
				"嵐", "ゆ", "現", "或", "泡", "哀", "胃", "委", "幾", "師", "志", "維", "識", "異", "椅", "泉", "板", "偉", "抱", "頂", 
				"至", "位", "種", "瞬", "層", "般", "従", "稲", "衣", "否", "依", "療", "岩", "印", "刷", "象", "伺", "兎", "嘘", "湾",
				"疑", "宇", "宙", "撃", "訴", "奪", "馬", "梅", "嬉", "噂", "柄", "永", "影", "響", "営", "衛", "栄", "養", "顔", "描", 
				"餌", "得", "延", "期", "演", "援", "助", "奏", "老", "追", "王", "様", "応", "断", "覆", "丘", "沖", "幼", "収", "染", 
				"恐", "互", "穏", "劣", "腹", "鬼", "帯", "溺", "及", "恩", "可", "害", "解", "釈", "改", "善", "列", "脇", "僅", "量",
				"快", "飼", "香", "価", "格", "輝", "罹", "鍵", "限", "額", "悟", "実", "隠", "拡", "認", "陰", "欠", "加", "減", "籠", 
				"囲", "災", "賢", "稼", "型", "肩", "刀", "値", "能", "株", "被", "我", "慢", "雷", "刈", "皮", "革", "缶", "勘", "感", 
				"環", "境", "歓", "患", "完", "成", "監", "督", "管", "了", "憶", "械", "企", "効", "候", "傷", "貴", "毒", "希", "望", 
				"基", "奇", "妙", "逆", "旧", "級", "球", "憩", "激", "救", "給", "器", "儀", "共", "協", "許", "巨", "霧", "録", "論", 
				"禁", "煙", "銭", "属", "緊", "張", "筋", "融", "句", "偶", "然", "臭", "鎖", "腐", "癖", "区", "繰", "狂", "労", "詳", 
				"訓", "軍", "隊", "敬", "傾", "告", "算", "掲", "示", "刑", "芸", "契", "怪", "劇", "粧", "陥", "券", "県", "軒", "喧", 
				"嘩", "健", "康", "検", "査", "在", "状", "設", "築", "討", "憲", "権", "恋", "濃", "幸", "貨", "豪", "華", "航", "攻", 
				"貢", "献", "福", "平", "補", "氷", "凍", "郷", "極", "克", "穀", "腰", "個", "骨", "諺", "粉", "塵", "麦", "頃", "殺", 
				"混", "乱", "才", "裁", "判", "材", "桜", "叫", "避", "誘", "札", "漠", "更", "猿", "賛", "酸", "素", "氏", "詩", "裕",
				"叱", "式", "刺", "資", "源", "件", "刻", "身", "沈", "想", "舌", "第", "態", "施", "導", "芝", "宜", "益", "率", "派",
				"占", "霜", "州", "銃", "穫", "宗", "視", "就", "職", "修", "渋", "滞", "版", "需", "類", "順", "賞", "奨", "京", "況", 
				"条", "症", "冗", "衝", "突", "商", "費", "防", "証", "卓", "糧", "斎", "徐", "署", "処", "尻", "城", "剣", "信", "仰", 
				"診", "戚", "鮮", "臓", "慎", "審", "巣", "推", "薦", "随", "睡", "末", "姿", "勧", "既", "鋭", "税", "紀", "請", "酔",
				"求", "清", "潔", "制", "功", "精", "績", "製", "造", "贅", "沢", "府", "整", "咳", "炭", "責", "任", "積", "的", "絶", 
				"滅", "是", "専", "択", "操", "像", "装", "底", "織", "袖", "側", "損", "尊", "他", "屈", "臣", "抵", "統", "領", "譲", 
				"逮", "陽", "陸", "宝", "唯", "叩", "縦", "谷", "玉", "黙", "駄", "純", "担", "域", "恵", "央", "貯", "接", "著", "愉",
				"遂", "掴", "繋", "翼", "罪", "詰", "提", "抗", "程", "停", "敵", "哲", "徹", "党", "塔", "詞", "到", "徳", "測", "嫁", 
				"票", "僚", "路", "独", "徴", "端", "虎", "努", "容", "仲", "流", "眺", "謎", "納", "鍋", "怠", "波", "涙", "悩", "縄", 
				"匂", "抜", "濡", "根", "願", "鼠", "齢", "農", "ー", "喉", "伸", "述", "昇", "雇", "俳", "墓", "鹿", "博", "士", "床",
				"履", "吐", "拍", "莫", "爆", "破", "旗", "肌", "裸", "畑", "罰", "離", "羽", "幅", "省", "面", "針", "範", "犯", "販", 
				"較", "轢", "膝", "批", "評", "秘", "密", "微", "紐", "秒", "笛", "武", "含", "双", "再", "縁", "船", "満", "振", "勇",
				"雰", "析", "塀", "均", "和", "冒", "豊", "富", "吠", "誇", "埃", "保", "仏", "炎", "頬", "褒", "濠", "迷", "幕", "孫", 
				"貧", "又", "未", "街", "松", "豆", "魅", "胸", "芽", "令", "惑", "免", "燃", "標", "勿", "尤", "模", "貰", "賃", "秀",
				"厄", 
				];

var n2char = [	"遭", "扇", "揚", "挙", "憧", "圧", "縮", "宛", "暴", "脂", "編", "荒", "児", "佚", "斉", "旦", "井", "緯", "威", "煎", 
				"炒", "飢", "浮", "埋", "恨", "羨", "液", "宴", "往", "欧", "凡", "仮", "惜", "各", "卸", "蚊", "貝", "概", "却", "垣", 
				"掻", "嗅", "架", "充", "剰", "塊", "括", "弧", "躍", "遣", "鐘", "兼", "釜", "屑", "剃", "謡", "殻", "枯", "渇", "瓦", 
				"隔", "鑑", "燥", "庁", "杯", "冠", "饉", "礎", "盤", "漁", "斬", "釘", "櫛", "崩", "砕", "唇", "汲", "酌", "悔", "鉢",
				"咥", "郡", "稽", "蛍", "継", "系", "旬", "削", "桁", "傑", "蹴", "謙", "虚", "稿", "遜", "顕", "碁", "孝", "衆", "椀",
				"耕", "肯", "鉱", "項", "超", "焦", "籍", "胡", "椒", "擦", "馳", "琴", "沙", "汰", "芥", "娯", "紺", "催", "促", "採", 
				"縫", "捜", "遡", "裂", "索", "囁", "匙", "敷", "挿", "錆", "妨", "司", "茂", "磁", "湿", "執", "童", "縛", "幣", "絞", 
				"縞", "蛇", "掌", "洒", "繕", "ゅ", "熟", "寿", "循", "巡", "序", "粋", "棋", "蒸", "耗", "醤", "略", "汁", "芯", "幹", 
				"侵", "酢", "炊", "垂", "滴", "杉", "透", "隙", "鈴", "棄", "脳", "墨", "澄", "撲", "掏", "摸", "狡", "寸", "姓", "暦", 
				"鹸", "瀬", "迫", "栓", "剤", "宣", "巾", "倉", "創", "葬", "総", "蕎", "逸", "揃", "鼓", "策", "照", "楕", "滝", "焚", 
				"蓄", "竹", "只", "但", "妥", "溜", "淡", "誓", "碗", "抽", "彫", "径", "帳", "浸", "綱", "粒", "潰", "爪", "艶", "吊", 
				"凸", "凹", "砲", "拭", "柱", "皇", "銅", "峠", "溶", "尖", "殊", "跳", "丼", "良", "慰", "懐", "撫", "斜", "倣", "馴", 
				"煮", "憎", "濁", "虹", "鈍", "睨", "俄", "捩", "巻", "狙", "載", "覗", "糊", "呑", "這", "剥", "秤", "挟", "箸", "梯",  
				"揮", "甚", "卑", "怯", "髭", "肘", "瞳", "捻", "膚", "箋", "殖", "副", "膨", "塞", "襖", "附", "蓋", "麓", "噴", "脈", 
				"兵", "荘", "箒", "庖", "朗", "牧", "畜", "募", "干", "堀", "掘", "盆", "枚", "蒔", "撒", "枕", "摩", "纏", "稀", "詫",
				"岬", "醜", "矛", "盾", "紫", "群", "姪", "銘", "儲", "潜", "餅", "揉", "矢", "軟", "刊", "悠", "緩", "旨", "稚", "羊", 
				"漸", "蘇", "慶", "欄", "寮", "臨", "煉", "蝋", "燭", "湧", 
];

var n1char = [	"嗚", "曖", "昧", "敢", "垢", "亜", "呆", "顎", "麻", "欺", "此", "誂", "溢", "炙", "網", "慌", "伊", "如", "歪", "碑", 
				"苛", "弄", "遺", "託", "戯", "戴", "挑", "鼾", "厭", "愈", "謂", "嗽", "潮", "渦", "鬱", "陶", "饂", "飩", "唸", "惚", 
				"潤", "蝿", "云", "搬", "雄", "閲", "獲", "襟", "沿", "婉", "尾", "於", "甥", "蔭", "臆", "傲", "喋", "襲", "煽", "稍",
				"乙", "衰", "脅", "夥", "宮", "襁", "褓", "玩", "赴", "檻", "俺", "愚", "疎", "峡", "獣", "拓", "訂", "剖", "顧", "踵", 
				"核", "佳", "賭", "駆", "ヶ", "嵩", "畏", "奢", "箇", "霞", "繊", "偏", "傍", "壇", "且", "嘗", "叶", "槌", "粥", "痒", 
				"揶", "揄", "吏", "涸", "慨", "還", "渉", "肝", "璧", "寛", "貫", "禄", "該", "譜", "崖", "雅", "唱", "併", "癌", "頑", 
				"贋", "兆", "軋", "鍛", "几", "屹", "軌", "甲", "伏", "脚", "窮", "殿", "乏", "陵", "遇", "凶", "愁", "享", "里", "烈", 
				"拒", "距", "煌", "桐", "麗", "衡", "犠", "牲", "偽", "吟", "茎", "嚏", "籤", "擽", "臥", "嘴", "朽", "諄", "呉", "痴", 
				"艦", "戒", "携", "蔑", "吝", "嗇", "晶", "貶", "圏", "倹", "励", "賦", "痢", "溝", "尚", "控", "洪", "拘", "購", "廃", 
				"奮", "巧", "漕", "凝", "拵", "孤", "拗", "梢", "堪", "燵", "董", "悉", "篭", "懲", "魂", "拠", "昆", "彙", "佐", "菌", 
				"栽", "培", "胞", "遮", "囀", "冴", "竿", "詐", "柵", "錯", "捧", "些", "嘸", "冊", "偖", "侍", "拐", "爽", "岳", "桟", 
				"酷", "而", "彩", "頻", "嗜", "繍", "雫", "慕", "嫉", "妬", "躾", "摘", "萎", "嫋", "屎", "尿", "凌", "屡", "暫", "痺", 
				"肪", "泌", "吃", "賀", "諸", "称", "諾", "庶", "幽", "霊", "茹", "弓", "抑", "葦", "酪", "邦", "浪", "碌", "枠", "藁",
				"皺", "紳", "珠", "聖", "呈", "軸", "己", "獄", "践", "拳", "絨", "毯", "塾", "樹", "尉", "迅", "崇", "据", "掬", "裾", 
				"即", "誠", "征", "伜", "衷", "仙", "闘", "舶", "膳", "禅", "僧", "添", "壮", "其", "阻", "訟", "措", "儘", "聳", "朴", 
				"耐", "逞", "漂", "忽", "奉", "辿", "賜", "躊", "躇", "弛", "歎", "箪", "笥", "蛋", "胆", "騙", "那", "窒", "秩", "忠", 
				"枢", "腸", "蝶", "聴", "恰", "没", "陳", "墜", "杖", "尽", "辻", "褄", "津", "抓", "唾", "呟", "瞑", "壷", "蕾", "躓", 
				"露", "邸", "堤", "錠", "鋼", "筈", "鱈", "棟", "咎", "綴", "疾", "咄", "嗟", "迚", "扉", "伴", "蕩", "胴", "盟", "憂",
				"俵", "閣", "乃", "苗", "殴", "嘆", "皰", "滲", "妊", "娠", "沼", "粘", "鋸", "閑", "罵", "刃", "把", "肺", "啓", "排", 
				"捗", "諮", "鋏", "蓮", "蜂", "蜜", "浜", "填", "遥", "腫", "班", "繁", "氾", "濫", "黴", "賠", "償", "伐", "匹", "惨", 
				"雛", "肥", "敏", "俗", "吉", "祉", "債", "騰", "遍", "扶", "憤", "紛", "侮", "辱", "斑", "辟", "臍", "遷", "穂", "酬", 
				"廷", "鯨", "綻", "舗", "殆", "虜", "卯", "紡", "脹", "藍", "褸", "賄", "膜", "捲", "股", "跨", "眩", "眉", "鞠", "峰", 
				"婿", "毟", "闇", "簿", "誉", "瞭", "雌", "盲", "猛", "藻", "齎", "凭", "腿", "漏", "脆", "哉", "軈", "奴" 
				];

var beyondjlpt = [	"斐", "須", "弥", "謳", "晋",  "劫",  "擁", "孜", "赳"];

var alphabets =	[	"a", "b", "c", "d", "e", "f", "g", "h", "i", "j", 
					"k", "l", "m", "n", "o", "p", "q", "r", "s", "t",
					"u", "v", "w", "x", "y", "z",
					"A", "B", "C", "D", "E", "F", "G", "H", "I", "J", 
					"K", "L", "M", "N", "O", "P", "Q", "R", "S", "T",
					"U", "V", "W", "X", "Y", "Z"
				];

var numbers = 	[	"0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];				

function displayLatestCharList(){
	for(let i=0; i<n5char.length; i++)
		charList.push(n5char[i]);

	for(let i=0; i<n4char.length; i++)
		charList.push(n4char[i]);

	for(let i=0; i<n3char.length; i++)
		charList.push(n3char[i]);

	for(let i=0; i<n2char.length; i++)
		charList.push(n2char[i]);

	for(let i=0; i<n1char.length; i++)
		charList.push(n1char[i]);
/*
	for(let i=0; i<beyondjlpt.length; i++)
		charList.push(beyondjlpt[i]);

	for(let i=0; i<alphabets.length; i++)
		charList.push(alphabets[i]);

	for(let i=0; i<numbers.length; i++)
		charList.push(numbers[i]);

	for(let i=0; i<charHiragana.length; i++)
		charList.push(charHiragana[i]);

	for(let i=0; i<charKatakana.length; i++)
		charList.push(charKatakana[i]);
*/
		alert(
		"N1 kanji = " + n1char.length + " " + 
		"N2 kanji = " + n2char.length + " " +
		"N3 kanji = " + n3char.length + " " +
		"N4 kanji = " + n4char.length + " " +
		"N5 kanji = " + n5char.length);

	
}

function clearInput(){
	userInput = [];
	uniqueInput = []; 
	foundList = [];
	newList = [];
	charList = [];
}

function compareWithCharList(userInput){

	userInput.replace(/\s+/g, '');

	for (let i=0; i<userInput.length; i++) {
		//TOGGLE console.log("user input " + userInput[i]);
		if (uniqueInput.indexOf(userInput[i]) === -1) {
			uniqueInput.push(userInput[i]);
		}
	}

	for(let i=0; i<uniqueInput.length; i++){
		//TOGGLE console.log("unique input " + uniqueInput[i]);
		for(let j=0; j<charList.length; j++){
			if(uniqueInput[i] === charList[j])
				foundList.push(uniqueInput[i]) 
		}
	}

	//DUPLICATE UNIQUEINPUT ELEMENTS INTO NEWLIST ELEMENTS
	for(let i=0; i<uniqueInput.length; i++){
			newList[i] = uniqueInput[i];
	}

	//TOGGLEconsole.log(newList + "UNIQUE LIST");
	//TOGGLEconsole.log(newList + "NEW LIST");
	
	for(let i=0; i<newList.length; i++)
		for(let j=0; j<foundList.length; j++)
			if(newList[i] === foundList[j]){

				//console.log("BEOFRE SPLICE" + newList);
				newList.splice([i],1);
				//console.log("AFTER SPLICE" + newList);

			}

			

	console.log("This text has a total of " + userInput.length + "characters");
	//console.log("It contains " + uniqueInput.length + "unique characters");
	console.log("It contains " + foundList.length + " unique characters from the given list");
	console.log("They are: " + foundList);
	//console.log("Elements NOT found in the list: " + newList);
	console.log("END OF NEW LIST");
	//for(let i=0; i<newList.length;i++)
	//		document.getElementById("teks").innerHTML += "x" + newList[i]+ "x, ";
	//for(let i=0; i<charList.length;i++)
	//		document.getElementById("teks").innerHTML += "x" + charList[i]+ "x, ";
}	

function getCurrentInput(){
	
	var userInput = document.getElementById("textInput").value;
	
	displayLatestCharList();
	compareWithCharList(userInput);
	document.getElementById("jumlah").innerHTML = (foundList.length + " kanji characters found. They are: ");
	for(let i=0; i<foundList.length; i++){
		document.getElementById("jumlahList").innerHTML += (foundList[i] + ", ");
	}
	clearInput();
	


}


