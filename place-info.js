// What each place is and what to do there. Keyed by the place id in trip-data.js.
// { about: text, todo: [text], tips: [text] } — every text is { zh, en }.
// Keep facts general and stable; date-specific hours belong in trip-data.js notes.

window.PLACE_INFO = {
  sensoji: {
    about: { zh: "東京最古老的寺廟，入口是掛著大紅燈籠的「雷門」。從雷門走到本堂，沿途兩旁是老街小吃店。", en: "Tokyo's oldest temple. You enter through Kaminarimon, the gate with the giant red lantern, then walk a street of old snack shops to the main hall." },
    todo: [
      { zh: "在雷門大燈籠下拍照", en: "Photo under the big lantern at Kaminarimon" },
      { zh: "逛仲見世通，品嚐人形燒、炸饅頭、仙貝", en: "Walk Nakamise street for ningyo-yaki cakes, fried manju and rice crackers" },
      { zh: "在本堂前求籤（100 円），抽到凶籤可綁在架上", en: "Draw an omikuji fortune (¥100) by the main hall; tie a bad one to the rack" },
      { zh: "順道逛附近的傳法院通，有不少老店", en: "Browse the old shops on Denboin-dori nearby" }
    ],
    tips: [
      { zh: "免費入場。早上 9 時前人流少得多", en: "Free. Far quieter before 9am" },
      { zh: "本堂冬季約早上 6 時半開放、下午 5 時關閉；外圍範圍全日開放", en: "Main hall roughly 6:30–17:00 in winter; grounds always open" }
    ]
  },
  sumida: {
    about: { zh: "淺草與晴空塔之間的河畔公園。從淺草過河，一路可遠眺晴空塔。", en: "Riverside park between Asakusa and Skytree, with Skytree in view the whole way." },
    todo: [
      { zh: "沿隅田川散步", en: "Stroll along the Sumida River" },
      { zh: "走「隅田河步道」：鐵路橋旁的行人橋", en: "Cross the Sumida River Walk, a footbridge beside the railway bridge" },
      { zh: "對岸的東京水岸街 (Tokyo Mizumachi) 有咖啡店和小店", en: "Cafés and small shops at Tokyo Mizumachi on the far bank" }
    ],
    tips: [
      { zh: "由淺草步行至晴空塔約 20 分鐘，全是平路", en: "About 20 minutes on foot from Asakusa to Skytree, all flat" }
    ]
  },
  skytree: {
    about: { zh: "高 634 米，是全球最高的電視塔。塔上有兩層觀景台，塔下是大型商場「東京晴空街道 (Solamachi)」。", en: "At 634m, the world's tallest broadcasting tower, with two observation decks above and the big Solamachi mall below." },
    todo: [
      { zh: "登上 350 米的天望甲板俯瞰東京", en: "Ride up to the 350m Tembo Deck for the whole city" },
      { zh: "天晴時或可看見富士山", en: "On a clear day you may see Mt Fuji" },
      { zh: "黃昏登塔，同時欣賞日落與夜景", en: "Go at dusk to catch both sunset and night view" },
      { zh: "下塔後在 Solamachi 購物、用餐，另設水族館", en: "Shop and eat in Solamachi below; there's also an aquarium" }
    ],
    tips: [
      { zh: "網上購票可選擇時段，黃昏時分最多人", en: "Buy timed tickets online; sunset slots are busiest" },
      { zh: "冬季空氣清新，看見富士山的機會最高", en: "Winter air is clearest, the best chance of seeing Fuji" }
    ]
  },
  meiji: {
    about: { zh: "供奉明治天皇及皇后的神社，隱身於原宿站旁的大片森林之中。一走進去便十分寧靜，難以想像旁邊就是澀谷。", en: "Shrine to Emperor Meiji and Empress Shoken, hidden in a forest right beside Harajuku Station. Quiet the moment you step in." },
    todo: [
      { zh: "穿過大鳥居及森林參道", en: "Walk through the great torii gate and forest path" },
      { zh: "欣賞參道旁一排排清酒桶", en: "See the wall of sake barrels along the path" },
      { zh: "在本殿參拜，寫繪馬許願", en: "Pray at the main hall and write a wish on an ema plaque" }
    ],
    tips: [
      { zh: "免費。日出開放，日落關閉", en: "Free. Open sunrise to sunset" },
      { zh: "由鳥居步行至本殿約 10 分鐘，沿途為碎石路", en: "About 10 minutes on gravel from the gate to the main hall" }
    ]
  },
  omotesando: {
    about: { zh: "兩旁種滿櫸樹的大道，有「東京香榭麗舍」之稱，名店、設計建築與咖啡店雲集。", en: "A tree-lined avenue often called Tokyo's Champs-Élysées: flagship stores, striking architecture and cafés." },
    todo: [
      { zh: "沿大道漫步，欣賞名店建築", en: "Walk the avenue and admire the flagship architecture" },
      { zh: "逛 Omotesando Hills 商場", en: "Browse Omotesando Hills" },
      { zh: "轉入「裏原宿」橫街，有不少小咖啡店和小店", en: "Duck into the Ura-Harajuku backstreets for small cafés and shops" }
    ],
    tips: [
      { zh: "由原宿站步行約 10 分鐘", en: "About 10 minutes on foot from Harajuku Station" }
    ]
  },
  shibuya: {
    about: { zh: "全球最繁忙的十字路口，一次綠燈便有成千上萬人同時過馬路，四周盡是巨型電視牆和商場。", en: "The world's busiest pedestrian crossing, with thousands crossing on a single green light, surrounded by giant screens and malls." },
    todo: [
      { zh: "親身走一次十字路口", en: "Walk the scramble crossing yourself" },
      { zh: "登上 Shibuya Sky 天台欣賞夜景", en: "See the night view from the Shibuya Sky rooftop" },
      { zh: "與忠犬八公銅像合照", en: "Photo with the Hachiko statue" },
      { zh: "逛 Scramble Square、PARCO 等商場", en: "Shop at Scramble Square, PARCO and others" }
    ],
    tips: [
      { zh: "晚上燈光最漂亮", en: "Best at night with the lights" },
      { zh: "Shibuya Sky 宜及早網上預訂，日落時段最熱門", en: "Book Shibuya Sky online early; sunset slots go fast" }
    ]
  },
  tsukiji: {
    about: { zh: "舊魚市場遷往豐洲後，外圍的「場外市場」仍有數百間店舖，售賣海鮮、刺身、玉子燒及廚具。", en: "The wholesale market moved to Toyosu, but the outer market still has hundreds of stalls for seafood, sashimi, tamagoyaki and kitchenware." },
    todo: [
      { zh: "以海鮮丼或壽司作早餐", en: "Seafood rice bowl or sushi for breakfast" },
      { zh: "品嚐玉子燒串及燒海鮮小吃", en: "Snack on tamagoyaki skewers and grilled seafood" },
      { zh: "購買日本刀具、乾貨作手信", en: "Pick up Japanese knives and dried goods as gifts" }
    ],
    tips: [
      { zh: "早上 9 時至下午 2 時最佳，不少店舖下午便收市", en: "Best 9:00–14:00; many stalls close early afternoon" },
      { zh: "星期日、假日及部分星期三不少店舖休息", en: "Many stalls close Sundays, holidays and some Wednesdays" },
      { zh: "巷子狹窄，請勿攜帶大型行李", en: "Narrow lanes; no big luggage" }
    ]
  },
  ginza: {
    about: { zh: "東京最高級的購物區。和光大樓的鐘樓是銀座地標，四周盡是百貨公司與名店。", en: "Tokyo's most upscale shopping district. The Wako clock tower is its landmark, surrounded by department stores and flagships." },
    todo: [
      { zh: "在和光鐘樓前拍照", en: "Photo at the Wako clock tower" },
      { zh: "逛三越、松屋、GINZA SIX 等百貨公司", en: "Browse Mitsukoshi, Matsuya, GINZA SIX" },
      { zh: "在百貨公司地庫美食街試吃、購買手信", en: "Taste and buy gifts in the basement food halls" },
      { zh: "伊東屋：大型文具店", en: "Itoya, a huge stationery store" }
    ],
    tips: [
      { zh: "星期六、日中午至黃昏，中央通封路成為行人專用區", en: "Chuo-dori becomes pedestrian-only on weekend afternoons" }
    ]
  },
  marunouchi: {
    about: { zh: "紅磚東京站建於 1914 年，現已修復原貌。站前丸之內一帶冬季有金色燈飾。", en: "The red-brick Tokyo Station dates from 1914 and has been restored. The Marunouchi streets around it glow with golden lights in winter." },
    todo: [
      { zh: "在站前廣場拍攝紅磚車站", en: "Photograph the red-brick station from the plaza" },
      { zh: "漫步丸之內仲通欣賞燈飾", en: "Walk Naka-dori under the winter lights" },
      { zh: "登上 KITTE 商場天台花園俯瞰車站", en: "View the station from the KITTE rooftop garden" },
      { zh: "在車站內的 Gransta 購買手信、便當", en: "Gifts and bento at Gransta inside the station" }
    ],
    tips: [
      { zh: "晚上燈飾最漂亮；KITTE 天台免費開放", en: "Best after dark; the KITTE rooftop is free" }
    ]
  },
  toyosu: {
    about: { zh: "2018 年由築地遷入的新魚市場。遊客可在參觀通道隔著玻璃觀看吞拿魚拍賣，市場內設有壽司店。", en: "The new fish market that replaced Tsukiji in 2018. Watch the tuna auction through glass from visitor walkways, then eat sushi inside." },
    todo: [
      { zh: "清晨觀看吞拿魚拍賣", en: "Watch the early-morning tuna auction" },
      { zh: "在市場內吃壽司或海鮮丼", en: "Sushi or a seafood bowl inside the market" },
      { zh: "到屋頂綠化廣場眺望海景", en: "Rooftop garden with bay views" }
    ],
    tips: [
      { zh: "拍賣很早，約清晨 5 時半至 6 時半", en: "The auction is very early, roughly 5:30–6:30" },
      { zh: "休市日全部不開放，須查看日曆（23 日休市）", en: "Closed on market holidays; check the calendar (closed 23 Dec)" }
    ]
  },
  planets: {
    about: { zh: "沉浸式數碼藝術館。須脫鞋赤腳，部分房間要涉水而行，水深可達膝蓋。", en: "Immersive digital art museum. You go barefoot, and some rooms have you wading through knee-deep water." },
    todo: [
      { zh: "走進光影錦鯉水池", en: "Wade through the pool of projected koi" },
      { zh: "在花海房間躺下觀賞", en: "Lie back in the room of floating flowers" },
      { zh: "在鏡面球房間拍照", en: "Photos in the mirrored-sphere room" }
    ],
    tips: [
      { zh: "須預約時段，約 1.5 至 2 小時", en: "Timed booking; allow 1.5–2 hours" },
      { zh: "請穿可捲起的褲子", en: "Wear trousers you can roll up" }
    ]
  },
  shintoyosu: {
    about: { zh: "德國式聖誕市集：大聖誕樹、小木屋攤位、熱紅酒及德國香腸。", en: "German-style Christmas market: a big tree, wooden stalls, mulled wine and sausages." },
    todo: [
      { zh: "喝熱紅酒，紀念杯可帶走", en: "Mulled wine in a souvenir mug you can keep" },
      { zh: "品嚐德國香腸及聖誕小吃", en: "German sausages and Christmas treats" },
      { zh: "買聖誕手作小禮物", en: "Handmade Christmas gifts" }
    ],
    tips: [
      { zh: "舉行至 12 月 25 日；入場或須收費", en: "Runs until 25 Dec; there may be an entry fee" }
    ]
  },
  borderless: {
    about: { zh: "位於麻布台之丘的數碼藝術館。沒有固定路線，作品會在各房間之間流動，需要自己慢慢發掘。（相片為麻布台之丘外觀。）", en: "Digital art museum in Azabudai Hills with no set route; artworks drift between rooms for you to discover. (Photo shows Azabudai Hills outside.)" },
    todo: [
      { zh: "隨意漫遊，發掘不同的房間", en: "Wander and discover the rooms" },
      { zh: "燈海房間：上千盞燈", en: "The room of thousands of lamps" },
      { zh: "EN TEA HOUSE：茶杯中會綻放花朵", en: "EN TEA HOUSE, where flowers bloom in your tea" }
    ],
    tips: [
      { zh: "須預約時段，約 2 至 3 小時", en: "Timed booking; allow 2–3 hours" },
      { zh: "26 至 30 日開放至晚上，是聖誕節後的好選擇", en: "Open late 26–30 Dec, a good post-Christmas pick" }
    ]
  },
  tower: {
    about: { zh: "1958 年建成、高 333 米的紅白色鐵塔，是東京最經典的地標，夜間亮燈十分漂亮。", en: "The red-and-white 333m tower from 1958, Tokyo's classic landmark, beautifully lit at night." },
    todo: [
      { zh: "登上 150 米的 Main Deck 觀景台", en: "Go up to the 150m Main Deck" },
      { zh: "250 米的 Top Deck 須預約導覽", en: "The 250m Top Deck needs a booked tour" },
      { zh: "在芝公園或增上寺拍攝鐵塔全景", en: "Full-tower photos from Shiba Park or Zojo-ji temple" }
    ],
    tips: [
      { zh: "晚上亮燈時最漂亮", en: "Best after dark when lit" }
    ]
  },
  shiba: {
    about: { zh: "東京鐵塔腳下的公園。12 月設有聖誕市集，可一邊喝熱紅酒一邊欣賞鐵塔。", en: "The park at the foot of Tokyo Tower. In December it hosts a Christmas market with the tower as backdrop." },
    todo: [
      { zh: "聖誕市集：熱紅酒、德國小吃", en: "Christmas market: mulled wine and German snacks" },
      { zh: "拍攝東京鐵塔", en: "Photograph Tokyo Tower" },
      { zh: "順道參觀鐵塔前的增上寺", en: "Visit Zojo-ji temple in front of the tower" }
    ],
    tips: [
      { zh: "市集舉行至 12 月 25 日；入場或須收費", en: "Market runs until 25 Dec; there may be an entry fee" },
      { zh: "入夜後最有氣氛", en: "Most atmospheric after dark" }
    ]
  },
  disney: {
    about: { zh: "共有兩個園區：迪士尼海洋 (DisneySea) 為全球獨有，有火山和威尼斯運河，深受成年人喜愛；迪士尼樂園 (Disneyland) 有城堡和巡遊，較為經典。", en: "Two parks. DisneySea is unique to Tokyo, with a volcano and Venetian canals, and a favourite with adults. Disneyland is the classic castle-and-parades park." },
    todo: [
      { zh: "迪士尼海洋：2024 年開幕的新區 Fantasy Springs（冰雪奇緣、魔髮奇緣、小飛俠）", en: "DisneySea: Fantasy Springs, opened 2024 (Frozen, Tangled, Peter Pan)" },
      { zh: "聖誕裝飾及聖誕表演（至 25 日）", en: "Christmas decorations and shows (until 25 Dec)" },
      { zh: "夜間表演", en: "The nighttime show" }
    ],
    tips: [
      { zh: "門票須網上預先購買，不同日子票價不同", en: "Buy tickets online in advance; prices vary by date" },
      { zh: "可另付費購買快速通行 (Premier Access)", en: "Premier Access fast passes cost extra" },
      { zh: "全日步行，請穿舒適的鞋", en: "A full day on your feet; wear good shoes" }
    ]
  },
  tenyu: {
    about: { zh: "箱根的高級溫泉酒店，每間客房都設有私人露天溫泉，坐擁山景。", en: "Upscale Hakone onsen hotel where every room has its own open-air hot-spring bath with mountain views." },
    todo: [
      { zh: "在房間的露天溫泉浸浴", en: "Soak in your room's open-air bath" },
      { zh: "亦可使用大浴場", en: "Try the large shared baths too" },
      { zh: "旅館晚餐", en: "Dinner at the hotel" }
    ],
    tips: [
      { zh: "強羅站有酒店接駁車", en: "Hotel shuttle from Gora Station" }
    ]
  },
  hakoneShrine: {
    about: { zh: "蘆之湖畔的神社。紅色「平和鳥居」矗立於湖水之中，是箱根最著名的拍照地點。", en: "Lakeside shrine whose red Peace Torii stands in the water of Lake Ashi, Hakone's most famous photo spot." },
    todo: [
      { zh: "在湖邊鳥居拍照", en: "Photo at the torii in the lake" },
      { zh: "穿過杉樹林登上神社參拜", en: "Climb through the cedar forest to the shrine" },
      { zh: "乘坐海盜船遊覽蘆之湖", en: "Cruise Lake Ashi on the pirate ship" },
      { zh: "天晴時可遠眺富士山", en: "Mt Fuji appears on clear days" }
    ],
    tips: [
      { zh: "拍攝鳥居須排隊，可能超過 30 分鐘", en: "The torii photo queue can top 30 minutes" },
      { zh: "前往神社須走樓梯", en: "There are stairs up to the shrine" },
      { zh: "冬季早上最容易看見富士山", en: "Winter mornings give the best Fuji odds" }
    ]
  },
  hachimangu: {
    about: { zh: "鎌倉最重要的神社，有九百多年歷史。神社前的小町通是熱鬧的小吃街。", en: "Kamakura's most important shrine, over 900 years old. Komachi-dori in front is a lively snack street." },
    todo: [
      { zh: "沿大參道走進神社", en: "Walk the grand approach to the shrine" },
      { zh: "登上石階到本宮，回望整條參道", en: "Climb to the main hall for the view down the approach" },
      { zh: "在小町通品嚐小吃、購買手信", en: "Snacks and souvenirs on Komachi-dori" }
    ],
    tips: [
      { zh: "由鎌倉站步行約 10 分鐘", en: "About 10 minutes on foot from Kamakura Station" }
    ]
  },
  daibutsu: {
    about: { zh: "高德院的鎌倉大佛：七百多年前鑄造、高十多米的露天青銅佛像。", en: "The Great Buddha of Kotoku-in: an open-air bronze Buddha over ten metres tall, cast more than 700 years ago." },
    todo: [
      { zh: "參觀大佛並拍照", en: "See and photograph the Buddha" },
      { zh: "順道參觀附近的長谷寺，可眺望大海", en: "Visit nearby Hase-dera for its sea view" }
    ],
    tips: [
      { zh: "須在鎌倉轉乘江之電，於長谷站下車後步行 7 分鐘", en: "Take the Enoden line to Hase, then walk 7 minutes" },
      { zh: "入場須付少量費用", en: "Small entry fee" }
    ]
  },
  minatomirai: {
    about: { zh: "橫濱海旁新區：Landmark Tower、摩天輪、紅磚倉庫及海濱步道。", en: "Yokohama's waterfront district: Landmark Tower, the big Ferris wheel, the Red Brick Warehouses and harbour promenades." },
    todo: [
      { zh: "逛紅磚倉庫", en: "Explore the Red Brick Warehouses" },
      { zh: "乘坐摩天輪", en: "Ride the Ferris wheel" },
      { zh: "杯麵博物館：親手設計杯麵", en: "Cup Noodles Museum: design your own cup" },
      { zh: "在海邊散步欣賞夜景", en: "Harbourside walk for the night view" }
    ],
    tips: [
      { zh: "黃昏至晚上最美", en: "Best from sunset into the evening" }
    ]
  },
  chinatown: {
    about: { zh: "日本最大的唐人街，有數百間中菜館和小吃攤。", en: "Japan's largest Chinatown, with hundreds of Chinese restaurants and food stalls." },
    todo: [
      { zh: "在彩色牌樓前拍照", en: "Photos at the colourful gates" },
      { zh: "品嚐小籠包、肉包及街頭小吃", en: "Soup dumplings, pork buns and street snacks" },
      { zh: "參觀關帝廟", en: "Visit the Kanteibyo temple" }
    ],
    tips: [
      { zh: "元町・中華街站出站即達", en: "Right outside Motomachi-Chukagai Station" }
    ]
  },
  kichijoji: {
    about: { zh: "東京人最喜愛的住宅區之一。井之頭公園有大湖，周邊滿是咖啡店和小店。", en: "One of Tokyo's best-loved neighbourhoods. Inokashira Park has a big pond, with cafés and small shops around it." },
    todo: [
      { zh: "繞湖散步或划天鵝船", en: "Walk around the pond or pedal a swan boat" },
      { zh: "逛吉祥寺站附近的商店街和咖啡店", en: "Browse the shopping streets and cafés near the station" },
      { zh: "公園西面有吉卜力美術館", en: "The Ghibli Museum is on the park's west side" }
    ],
    tips: [
      { zh: "吉卜力美術館務必及早訂票", en: "The Ghibli Museum needs tickets booked well ahead" }
    ]
  },
  yanaka: {
    about: { zh: "東京保存最完好的舊城區，戰時未遭焚毀，至今仍是木屋、寺廟與老店。", en: "Tokyo's best-preserved old neighbourhood, spared in the war: wooden houses, temples and old shops." },
    todo: [
      { zh: "在谷中銀座商店街品嚐炸肉餅等小吃", en: "Fried menchi-katsu and other snacks on Yanaka Ginza" },
      { zh: "在「夕陽階段」觀賞日落", en: "Sunset from the Yuyake Dandan steps" },
      { zh: "步行至根津神社欣賞紅色鳥居", en: "Walk on to Nezu Shrine and its red torii tunnel" }
    ],
    tips: [
      { zh: "由日暮里站步行前往；大部分是平路", en: "Walk from Nippori Station; mostly flat" }
    ]
  },
  akiba: {
    about: { zh: "電器、動漫及模型的天堂，整條街都是電器店、模型店和扭蛋機。", en: "Paradise for electronics, anime and models: streets of gadget shops, hobby stores and capsule-toy machines." },
    todo: [
      { zh: "Yodobashi Akiba 大型電器店", en: "Yodobashi Akiba megastore" },
      { zh: "Radio Kaikan：整棟大樓都是模型及動漫店", en: "Radio Kaikan, a whole building of models and anime" },
      { zh: "扭蛋專門店", en: "Capsule-toy (gacha) shops" }
    ],
    tips: [
      { zh: "星期日下午中央通封路成為行人專用區", en: "Chuo-dori is pedestrian-only on Sunday afternoons" }
    ]
  },
  nakano: {
    about: { zh: "1966 年開業的老商場，內有數百間二手動漫、模型及古董錶店，是 Mandarake 的大本營。", en: "A 1966 shopping complex packed with hundreds of second-hand anime, model and vintage watch shops; home base of Mandarake." },
    todo: [
      { zh: "逛遍 Mandarake 各分店", en: "Explore the many Mandarake branches" },
      { zh: "逛舊玩具及古董錶", en: "Vintage toys and watches" },
      { zh: "地庫有超市及小吃", en: "Supermarket and snacks in the basement" }
    ],
    tips: [
      { zh: "不少店舖中午才開門", en: "Many shops open around noon" },
      { zh: "由中野站北口經 Sun Mall 步行 5 分鐘", en: "5 minutes from Nakano Station's north exit through Sun Mall" }
    ]
  },
  ueno: {
    about: { zh: "上野站旁的阿美橫丁是熱鬧的街市，售賣乾貨、海鮮、零食及平價衣鞋，頗有香港街市的感覺。附近是上野公園及博物館。", en: "Ameyoko, beside Ueno Station, is a lively street market of dried goods, seafood, snacks and bargain clothes, much like a Hong Kong market street. Ueno Park and its museums are next door." },
    todo: [
      { zh: "逛阿美橫丁，品嚐街頭小吃和水果串", en: "Walk Ameyoko and try street snacks and fruit skewers" },
      { zh: "購買朱古力、零食、乾貨作手信", en: "Pick up chocolate, snacks and dried goods as gifts" },
      { zh: "在上野公園散步，欣賞不忍池", en: "Stroll Ueno Park and Shinobazu Pond" }
    ],
    tips: [
      { zh: "東京國立博物館 22–25 日僅部分開放，26 日起休館", en: "Tokyo National Museum is only partly open 22–25 Dec and closed from the 26th" },
      { zh: "由上野乘地鐵往淺草約 5 分鐘", en: "About 5 minutes by subway from Ueno to Asakusa" }
    ]
  },
  shinjuku: {
    about: { zh: "東京最熱鬧的地區之一：大型百貨公司、電器店、霓虹燈街，還有免費的都廳觀景台。新宿站是全球使用人數最多的車站。", en: "One of Tokyo's busiest districts: big department stores, electronics shops, neon streets and a free observatory at the Metropolitan Government Building. Shinjuku Station is the world's busiest." },
    todo: [
      { zh: "伊勢丹、高島屋等百貨公司", en: "Department stores like Isetan and Takashimaya" },
      { zh: "在東京都廳免費觀景台欣賞夜景", en: "Free night view from the Tokyo Metropolitan Government observatory" },
      { zh: "思出橫丁：小巧的燒鳥小店", en: "Omoide Yokocho, an alley of tiny yakitori bars" },
      { zh: "新宿御苑散步（日間）", en: "Stroll Shinjuku Gyoen garden (daytime)" }
    ],
    tips: [
      { zh: "車站範圍很大，與人相約時須說明在哪個出口會合", en: "The station is huge; agree on a specific exit when meeting" },
      { zh: "前往箱根的浪漫特快亦由新宿出發", en: "The Romancecar to Hakone also leaves from here" }
    ]
  },
  roppongi: {
    about: { zh: "東京的藝術與設計區：東京中城、六本木之丘，有美術館、設計店及眾多高級餐廳。", en: "Tokyo's art and design district: Tokyo Midtown and Roppongi Hills, with museums, design shops and many fine restaurants." },
    todo: [
      { zh: "在東京中城逛設計店，冬季有燈飾", en: "Design shops at Tokyo Midtown, with winter lights" },
      { zh: "六本木之丘的森美術館及觀景台", en: "Mori Art Museum and the Roppongi Hills observation deck" },
      { zh: "在附近晚餐", en: "Dinner nearby" }
    ],
    tips: [
      { zh: "美術館在聖誕新年假期或會休館，須查詢日期", en: "Museums may close over the holidays; check dates" },
      { zh: "由麻布台前往很近", en: "A short hop from Azabudai" }
    ]
  },
  daikanyama: {
    about: { zh: "澀谷旁的寧靜小區，有時尚小店、咖啡店，以及著名的蔦屋書店 (T-Site)。", en: "A calm neighbourhood next to Shibuya with stylish boutiques, cafés and the well-known Tsutaya T-Site bookshop." },
    todo: [
      { zh: "在蔦屋書店 T-Site 看書、喝咖啡", en: "Browse books and have coffee at T-Site" },
      { zh: "逛橫街小店", en: "Wander the backstreet boutiques" },
      { zh: "步行前往中目黑或惠比壽", en: "Walk on to Nakameguro or Ebisu" }
    ],
    tips: [
      { zh: "由澀谷步行約 15 分鐘", en: "About 15 minutes on foot from Shibuya" }
    ]
  },
  ebisu: {
    about: { zh: "餐廳與酒吧林立的住宅區。惠比壽花園廣場冬季有大型聖誕燈飾。", en: "A residential area full of restaurants and bars. Yebisu Garden Place has big Christmas illuminations in winter." },
    todo: [
      { zh: "在惠比壽花園廣場欣賞聖誕燈飾", en: "Christmas lights at Yebisu Garden Place" },
      { zh: "在車站附近晚餐", en: "Dinner near the station" }
    ],
    tips: [
      { zh: "由代官山步行前往亦很近", en: "Easy walk from Daikanyama" }
    ]
  },
  odaiba: {
    about: { zh: "東京灣上的人工島，有海濱公園、商場及彩虹橋夜景。", en: "Man-made island on Tokyo Bay with a seaside park, malls and night views of the Rainbow Bridge." },
    todo: [
      { zh: "在海濱公園欣賞彩虹橋夜景", en: "Rainbow Bridge night view from the seaside park" },
      { zh: "逛商場", en: "Browse the malls" },
      { zh: "與實物大小的高達合照", en: "Photo with the life-size Gundam statue" }
    ],
    tips: [
      { zh: "由豐洲乘百合海鷗號前往十分方便", en: "Easy on the Yurikamome line from Toyosu" }
    ]
  },
  shinbashi: {
    about: { zh: "酒店附近的上班族區，大街小巷都是居酒屋、燒鳥及拉麵小店，晚上十分熱鬧，價錢親民。", en: "The office-worker district by the hotel, packed with izakaya, yakitori and ramen spots. Lively at night and good value." },
    todo: [
      { zh: "在高架橋下的居酒屋晚餐", en: "Dinner at an izakaya under the railway arches" },
      { zh: "到 SL 廣場看舊蒸汽火車頭", en: "See the old steam locomotive in SL Square" }
    ],
    tips: [
      { zh: "由酒店步行數分鐘", en: "A few minutes' walk from the hotel" }
    ]
  },
  hibiya: {
    about: { zh: "東京中城日比谷是酒店附近的商場，冬季戶外有聖誕燈飾，對面是日比谷公園及皇居。", en: "Tokyo Midtown Hibiya is the mall near the hotel, with Christmas lights outside in winter; Hibiya Park and the Imperial Palace are opposite." },
    todo: [
      { zh: "欣賞聖誕燈飾（約 16:00–23:00）", en: "See the Christmas lights (around 16:00–23:00)" },
      { zh: "到 6 樓空中花園眺望皇居", en: "Sixth-floor sky garden with views over the Imperial Palace" },
      { zh: "逛商場、晚餐", en: "Shops and dinner" }
    ],
    tips: [
      { zh: "商店約晚上 8 時關門，餐廳營業至 11 時", en: "Shops close around 20:00, restaurants around 23:00" }
    ]
  },
  yoyogi: {
    about: { zh: "明治神宮旁的大型公園，許多東京人在此散步、跑步和遛狗。", en: "The big park beside Meiji Jingu, where Tokyo locals walk, jog and walk their dogs." },
    todo: [
      { zh: "欣賞湖景與大草地", en: "Enjoy the pond and the big lawns" }
    ],
    tips: [
      { zh: "與明治神宮相連，可在參拜後順道散步", en: "Joined to Meiji Jingu, so an easy walk after the shrine" }
    ]
  },
  kappabashi: {
    about: { zh: "位於淺草與上野之間、約 800 米長的廚具街，有逾百間店舖售賣日本刀具、陶瓷餐具、漆器及餐廳用的仿真食物模型。", en: "An 800-metre street of kitchenware shops between Asakusa and Ueno: Japanese knives, ceramics, lacquerware and the plastic food models restaurants display." },
    todo: [
      { zh: "選購日本廚刀，部分店舖可代刻名字", en: "Shop for Japanese kitchen knives; some shops engrave names" },
      { zh: "看看仿真食物模型，可買小型擺設作手信", en: "Browse the plastic food models; small ones make good gifts" },
      { zh: "陶瓷碗碟及筷子", en: "Ceramic bowls, plates and chopsticks" }
    ],
    tips: [
      { zh: "多數店舖約 10:00–17:00 營業，部分星期日休息", en: "Most shops open about 10:00–17:00; some close on Sundays" },
      { zh: "由淺草寺步行約 15 分鐘", en: "About 15 minutes on foot from Senso-ji" }
    ]
  },
  sumoclub: {
    about: { zh: "淺草的相撲表演：坐著觀看真正的相撲手示範並聽取講解，還可享用相撲火鍋 (chanko)。12 月沒有正式相撲比賽，這是表演節目。", en: "A seated sumo show in Asakusa with real wrestlers demonstrating and explaining, plus chanko hotpot. There are no official tournaments in December; this is a show." },
    todo: [
      { zh: "觀看相撲示範並聽取講解", en: "Watch the demonstration and explanation" },
      { zh: "享用相撲火鍋", en: "Eat chanko hotpot" },
      { zh: "與相撲手合照", en: "Photos with the wrestlers" }
    ],
    tips: [
      { zh: "約兩小時；須預約", en: "About two hours; booking required" }
    ]
  },
  sakecenter: {
    about: { zh: "位於西新橋的日本酒資訊中心，設有展覽和試飲吧檯，可品嚐日本各地的清酒及燒酎，就在酒店附近。", en: "The Japan Sake and Shochu Information Center in Nishi-Shimbashi, with displays and a tasting counter for sake and shochu from around Japan. Close to the hotel." },
    todo: [
      { zh: "品嚐數款清酒（每杯約 ¥100 起）", en: "Try a few sakes (tastings from about ¥100)" }
    ],
    tips: [
      { zh: "平日 10:00–18:00；週末及年底休息", en: "Weekdays 10:00–18:00; closed weekends and over New Year" },
      { zh: "免費入場；試飲及品酒套裝另付", en: "Free entry; tastings and flights are paid" }
    ]
  },
  oshino: {
    about: { zh: "位於富士山腳的小村莊，有八個由富士山融雪滲出的清澈泉池，以富士山為背景，並有茅草屋和小吃攤。", en: "A village at the foot of Mt Fuji with eight crystal-clear spring ponds fed by Fuji snowmelt, thatched houses, snack stalls, and the mountain behind." },
    todo: [
      { zh: "欣賞清澈見底的泉池", en: "See the ponds, clear to the bottom" },
      { zh: "拍攝富士山與茅草屋", en: "Photograph Fuji with the thatched houses" },
      { zh: "品嚐草餅、烤糰子等小吃", en: "Try kusamochi and grilled dango" }
    ],
    tips: [
      { zh: "距富士吉田旅館最近；早上人較少", en: "Closest to the Fujiyoshida hotel; quieter in the morning" },
      { zh: "觀光巴士班次不多，須預先查看時間", en: "Sightseeing buses are infrequent; check times ahead" }
    ]
  },
  kawaguchiko: {
    about: { zh: "富士五湖之一，在湖邊遠眺富士山是最經典的明信片景色。", en: "One of the Fuji Five Lakes; Fuji across the water is the classic postcard view." },
    todo: [
      { zh: "在湖邊散步遠眺富士山", en: "Lakeside walk with Fuji views" },
      { zh: "乘纜車登上天上山公園", en: "Ropeway up to Tenjo-yama Park" },
      { zh: "乘坐遊覽船", en: "Take a lake cruise" }
    ],
    tips: [
      { zh: "冬季早上最容易看見富士山", en: "Winter mornings give the clearest Fuji views" }
    ]
  },
  senkyaku: {
    about: { zh: "豐洲市場旁新開的江戶風美食街及溫泉設施，專為遊客而設。8 樓設有免費足湯，可一邊泡腳一邊看海。", en: "The new Edo-style food street and hot-spring complex beside Toyosu Market, built for visitors. The free 8th-floor footbath has bay views." },
    todo: [
      { zh: "8 樓免費足湯", en: "Free footbath on the 8th floor" },
      { zh: "逛江戶風美食街，如有興趣可隨意品嚐", en: "Stroll the Edo-style food street and snack on whatever appeals" }
    ],
    tips: [
      { zh: "大型溫泉須另行收費；足湯免費", en: "The main spa charges admission; the footbath is free" },
      { zh: "市場休市日照常開放", en: "Open even when the market is closed" }
    ]
  },
  uogashi: {
    about: { zh: "築地場外市場內一棟兩層高的建築，由批發商經營的生鮮賣場，早上 9 時起開放一般遊客參觀選購。", en: "A two-storey building inside Tsukiji Outer Market where professional buyers shop for seafood and dry goods; visitors can browse too." },
    todo: [
      { zh: "逛生鮮海鮮攤位", en: "Browse the professional seafood stalls" },
      { zh: "樓上設有食堂", en: "There's a canteen upstairs" }
    ],
    tips: [
      { zh: "早上 9 時前以專業買手優先", en: "Professional buyers have priority before 9:00" }
    ]
  },
  chazen: {
    about: { zh: "歌舞伎座旁的茶道體驗，約 45 分鐘：品嚐和菓子、觀看茶道示範，再親手打一碗抹茶。提供英語及日語講解。", en: "A 45-minute tea ceremony beside Kabukiza: Japanese sweets, a demonstration, then whisking your own matcha. In English or Japanese." },
    todo: [
      { zh: "品嚐和菓子", en: "Eat traditional sweets" },
      { zh: "觀看茶道示範", en: "Watch the ceremony" },
      { zh: "親手打抹茶", en: "Whisk your own matcha" }
    ],
    tips: [
      { zh: "須預約時段；需跪坐一段時間，膝蓋不適可詢問是否提供椅子", en: "Book a time slot; there's some kneeling, so ask about chairs if knees are a concern" },
      { zh: "共用席每位 ¥3,500；包場每位 ¥5,000（兩位起）", en: "Shared seating ¥3,500 pp; private ¥5,000 pp (2+)" }
    ]
  },
  artaquarium: {
    about: { zh: "位於銀座三越內的金魚美術館：數千條真金魚配合燈光與藝術裝置，十分漂亮，非常適合拍照。", en: "A goldfish art museum inside Ginza Mitsukoshi: thousands of live goldfish in lit art installations. Beautiful and very photogenic." },
    todo: [
      { zh: "慢慢欣賞金魚燈光裝置", en: "Wander through the lit goldfish installations" },
      { zh: "拍照", en: "Take photos" }
    ],
    tips: [
      { zh: "10:00–19:00（18:00 最後入場）；網上購票約 ¥2,500", en: "10:00–19:00 (last entry 18:00); about ¥2,500 online" },
      { zh: "年底假期時間須再確認", en: "Check holiday hours near the date" }
    ]
  },
  dawn: {
    about: { zh: "日本橋的機械人咖啡店：店員是 OriHime 機械人，由因身體原因不便外出的人士在家中遙控，與顧客交談，並非 AI。", en: "A robot café in Nihonbashi whose OriHime robot staff are remotely piloted by people who find it hard to leave home. Real people, not AI." },
    todo: [
      { zh: "點一杯飲品，與機械人店員聊天", en: "Have a drink and chat with the robot staff" },
      { zh: "預約 OriHime Diner 可一邊用餐一邊與專屬遙控員交談", en: "Book the OriHime Diner for a meal with your own pilot" }
    ],
    tips: [
      { zh: "直接入場約 ¥2,200（含一杯飲品）；Diner 約 ¥5,500", en: "Walk-in about ¥2,200 with a drink; the Diner about ¥5,500" },
      { zh: "約一至兩小時", en: "Allow one to two hours" }
    ]
  },
  besshosasa: {
    about: { zh: "富士吉田的溫泉旅館，可眺望富士山。我們在此住一晚：下午泡溫泉、小酌、享用晚餐，翌日早餐後才離開。", en: "An onsen ryokan in Fujiyoshida with Mt Fuji views. One night: an afternoon soak, a little wine and dinner, then breakfast before checking out." },
    todo: [
      { zh: "泡溫泉", en: "Soak in the hot spring" },
      { zh: "眺望富士山", en: "Take in the Fuji view" },
      { zh: "旅館晚餐及早餐", en: "Dinner and breakfast at the ryokan" }
    ],
    tips: [
      { zh: "須向旅館確認房間是否真能看到富士山", en: "We still need to confirm with the hotel that the rooms face Mt Fuji" }
    ]
  },
  blossom: {
    about: { zh: "位於新橋與日比谷之間的酒店，鄰近 JR 新橋站及內幸町站，前往銀座、築地、豐洲都很方便。暫定入住，尚未正式預訂。", en: "Hotel between Shinbashi and Hibiya, near JR Shinbashi and Uchisaiwaicho stations, handy for Ginza, Tsukiji and Toyosu. Our likely Tokyo base, not booked yet." },
    todo: [],
    tips: [
      { zh: "入住 15:00；退房 11:00", en: "Check-in 15:00; check-out 11:00" }
    ]
  },
  ushigoroshinjuku: {
    about: { zh: "高級和牛燒肉，由店員代為燒烤。這是 Vanjai 所選銀座店的新宿分店，方便新宿購物後用餐。", en: "Upscale wagyu yakiniku, grilled for you by the staff. The Shinjuku branch of Vanjai's Ginza pick, handy after shopping in Shinjuku." },
    todo: [],
    tips: [
      { zh: "尚未訂位；新宿分店的地址及套餐請以官網為準", en: "Not booked; check the official site for the Shinjuku branch's address and courses" }
    ]
  }
};
