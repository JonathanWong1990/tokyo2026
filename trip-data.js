// Trip content. Edit this file to update the page; index.html only handles layout.
// Source of truth for planning is the markdown in the parent folder; this file is the family-facing version.
// Every text field has zh (Traditional Chinese, shown by default) and en.
//
// Shapes
//   places[id]: { zh, en, ja (taxi card), q (Google Maps search), url (official site, optional) }
//   calendar[]: { date, who: "all" | "split" | "jv", title, plan?: related idea code, items: [...same as ideas], notes?: [text] }
//   ideas[]:    { code, pick: "suggested" | "either" | "alt", hours, walk 1-3, title, why, items: [...] }
//   items[]:    place row { time?, place | name, sub?, status?, optional? } | { type: "leg", from, to, via, dur } | { type: "tbd" | "note", text }
//               | { type: "branches", mode: "or" (pick one) | "split" (people go separate ways), options: [{ label, items }] }
//   extras:     { title, intro, items: [{ place, sub }] } — places that fit into other days or evenings
//   hotels[]:   { place, status, area, facts: [text], note }
//   food[]:     { title, intro?, empty?, items?: [row], sub?: [{ title, plan?, items: [row] }] (sub groups render collapsed) }
//               row = { place, kind, price?, status?, note?, plan? }
//   status:     "booked" (已訂) | "tobook" (未訂) | "first" (優先考慮) | "idea" (候選) | "review" (保留？)
//   leg dur:    "80 min", "~40 min" (~ = approx, shown as 約), "2.5h"

window.TRIP = {
  version: 16,
  updated: "2026-10-15",
  changes: {
    zh: "餐廳已收窄：22 日晚餐選 L'ARGENT（霞關）或 AZUR；26 日在 USHIGORO S. 銀座、本店山科或 SÉZANNE 之中選一間；28–29 日 John 與 Vanjai 的兩人晚餐候選為 MAZ 及 mærge。全部尚未訂位，價錢已列出。",
    en: "Restaurants narrowed down: L'ARGENT (Kasumigaseki) or AZUR on the 22nd; one of USHIGORO S. Ginza, Honten Yamashina or SÉZANNE on the 26th; MAZ and mærge for John and Vanjai on 28–29 Dec. None booked; prices listed."
  },
  status: { zh: "計劃中 · 富士住宿已訂，東京酒店暫定", en: "Still planning · Fuji stay booked, Tokyo hotel likely" },
  start: "2026-12-20",
  end: "2026-12-30",
  datesConfirmed: false,
  people: { zh: "Ben、Christine、John、Vanjai", en: "Ben, Christine, John, Vanjai" },

  places: {
    // A · Old Tokyo
    sensoji:   { zh: "淺草寺", en: "Senso-ji, Asakusa", ja: "浅草寺", q: "Senso-ji Temple" },
    sumida:    { zh: "隅田川河畔", en: "Sumida riverside", ja: "隅田公園", q: "Sumida Park" },
    skytree:   { zh: "東京晴空塔", en: "Tokyo Skytree", ja: "東京スカイツリー", q: "Tokyo Skytree" },
    ueno:      { zh: "上野・阿美橫丁", en: "Ueno · Ameyoko", ja: "アメ横商店街", q: "Ameyoko Shopping Street" },
    // New areas from the revised plans
    shinjuku:  { zh: "新宿", en: "Shinjuku", ja: "新宿駅", q: "Shinjuku Station" },
    roppongi:  { zh: "六本木・東京中城", en: "Roppongi · Tokyo Midtown", ja: "東京ミッドタウン", q: "Tokyo Midtown Roppongi" },
    daikanyama:{ zh: "代官山", en: "Daikanyama", ja: "代官山駅", q: "Daikanyama T-Site" },
    ebisu:     { zh: "惠比壽", en: "Ebisu", ja: "恵比寿ガーデンプレイス", q: "Yebisu Garden Place" },
    odaiba:    { zh: "台場", en: "Odaiba", ja: "お台場海浜公園", q: "Odaiba Seaside Park" },
    // B · Harajuku to Shibuya
    meiji:     { zh: "明治神宮", en: "Meiji Jingu", ja: "明治神宮", q: "Meiji Jingu" },
    omotesando:{ zh: "表參道", en: "Omotesando", ja: "表参道駅", q: "Omotesando" },
    shibuya:   { zh: "澀谷", en: "Shibuya", ja: "渋谷駅", q: "Shibuya Scramble Crossing" },
    // C · Central
    tsukiji:   { zh: "築地場外市場", en: "Tsukiji Outer Market", ja: "築地場外市場", q: "Tsukiji Outer Market" },
    ginza:     { zh: "銀座", en: "Ginza", ja: "銀座四丁目交差点", q: "Ginza 4-chome" },
    marunouchi:{ zh: "東京站・丸之內", en: "Tokyo Station, Marunouchi", ja: "東京駅 丸の内駅舎", q: "Tokyo Station Marunouchi" },
    // D · Toyosu
    toyosu:    { zh: "豐洲市場", en: "Toyosu Market", ja: "豊洲市場", q: "Toyosu Market" },
    planets:   { zh: "teamLab Planets", en: "teamLab Planets", ja: "チームラボプラネッツ TOKYO", q: "teamLab Planets TOKYO" },
    shintoyosu:{ zh: "新豐洲聖誕市集", en: "Shin-Toyosu Christmas Market", ja: "新豊洲駅", q: "Tokyo Christmas Market Shin-Toyosu" },
    // E · Azabudai / Tokyo Tower
    borderless:{ zh: "teamLab Borderless（麻布台之丘）", en: "teamLab Borderless (Azabudai Hills)", ja: "麻布台ヒルズ チームラボボーダレス", q: "teamLab Borderless Azabudai Hills" },
    tower:     { zh: "東京鐵塔", en: "Tokyo Tower", ja: "東京タワー", q: "Tokyo Tower" },
    shiba:     { zh: "芝公園聖誕市集", en: "Shiba Park Christmas Market", ja: "芝公園", q: "Tokyo Christmas Market Shiba Park" },
    // F · Disney
    disney:    { zh: "東京迪士尼度假區", en: "Tokyo Disney Resort", ja: "東京ディズニーリゾート", q: "Tokyo Disney Resort" },
    // G · Hakone
    tenyu:     { zh: "箱根小涌園 天悠", en: "Hakone Kowakien Ten-yu", ja: "箱根小涌園 天悠", q: "Hakone Kowakien Ten-yu", url: "https://www.ten-yu.com/en/" },
    hakoneShrine: { zh: "箱根神社・蘆之湖", en: "Hakone Shrine, Lake Ashi", ja: "箱根神社", q: "Hakone Shrine" },
    // H · Kamakura
    hachimangu:{ zh: "鶴岡八幡宮・小町通", en: "Tsurugaoka Hachimangu, Komachi-dori", ja: "鶴岡八幡宮", q: "Tsurugaoka Hachimangu" },
    daibutsu:  { zh: "鎌倉大佛", en: "Great Buddha of Kamakura", ja: "鎌倉大仏 高徳院", q: "Kotoku-in Great Buddha" },
    // I · Yokohama
    minatomirai:{ zh: "港未來", en: "Minato Mirai", ja: "みなとみらい", q: "Minato Mirai Yokohama" },
    chinatown: { zh: "橫濱中華街", en: "Yokohama Chinatown", ja: "横浜中華街", q: "Yokohama Chinatown" },
    // J · Slow day
    kichijoji: { zh: "吉祥寺・井之頭公園", en: "Kichijoji, Inokashira Park", ja: "井の頭恩賜公園", q: "Inokashira Park" },
    yanaka:    { zh: "谷中・根津", en: "Yanaka and Nezu", ja: "谷中銀座商店街", q: "Yanaka Ginza" },
    // K · Hobby day
    akiba:     { zh: "秋葉原", en: "Akihabara", ja: "秋葉原駅", q: "Akihabara Station" },
    nakano:    { zh: "中野百老匯", en: "Nakano Broadway", ja: "中野ブロードウェイ", q: "Nakano Broadway" },

    // Optional two-person evenings
    namcotokyo:{ zh: "namco TOKYO 夾公仔機", en: "namco TOKYO crane games", ja: "namco TOKYO", q: "namco TOKYO Kabukicho", url: "https://bandainamco-am.co.jp/namco_tokyo/amusement/" },
    benfiddich:{ zh: "Bar BenFiddich", en: "Bar BenFiddich", ja: "Bar BenFiddich 西新宿", q: "Bar BenFiddich Shinjuku", url: "https://www.benfiddich.tokyo/jp/index.html" },
    mementomori:{ zh: "memento mori", en: "memento mori", ja: "memento mori 虎ノ門ヒルズ", q: "memento mori Toranomon Hills", url: "https://www.memento-mixology.com/" },
    sotoroku:  { zh: "十十六（酒店酒吧）", en: "Sotoroku (hotel bar)", ja: "十十六 THE BLOSSOM HIBIYA", q: "Sotoroku The Blossom Hibiya", url: "https://www.jrk-hotels.co.jp/en/Hibiya/restaurant/" },
    imperialbar:{ zh: "Old Imperial Bar", en: "Old Imperial Bar", ja: "オールドインペリアルバー 帝国ホテル", q: "Old Imperial Bar Tokyo", url: "https://www.imperialhotel.co.jp/en/tokyo/restaurant/old-imperialbar" },
    peterbar:  { zh: "Peter: The Bar", en: "Peter: The Bar", ja: "Peter: The Bar ザ・ペニンシュラ東京", q: "Peter The Bar Peninsula Tokyo", url: "https://www.peninsula.com/en/tokyo/hotel-fine-dining/peter-the-bar" },
    mixologysalon:{ zh: "MIXOLOGY SALON", en: "MIXOLOGY SALON", ja: "ミクソロジーサロン GINZA SIX", q: "MIXOLOGY SALON Ginza Six", url: "https://ginza6.tokyo/shops/detail/1304305/?tenant_cd=1304305" },

    // Restaurants
    honda:     { zh: "麵處 本田（秋葉原本店）", en: "Mendokoro Honda, Akihabara", ja: "麺処 ほん田 秋葉原本店", q: "Mendokoro Honda Akihabara", url: "https://www.tablecheck.com/en/shops/mendokoro-honda-akihabara/reserve" },
    hachigo:   { zh: "銀座 八五", en: "Ginza Hachigo", ja: "銀座 八五", q: "Ginza Hachigo ramen", url: "https://www.tablecheck.com/en/shops/ginza-hachigou/reserve" },
    denkushi:  { zh: "DEN KUSHI FLORI", en: "DEN KUSHI FLORI", ja: "デンクシフロリ", q: "DEN KUSHI FLORI", url: "https://www.denkushiflori.com/" },
    florilege: { zh: "Florilège", en: "Florilège", ja: "フロリレージュ 麻布台ヒルズ", q: "Florilege Azabudai Hills", url: "https://www.aoyama-florilege.jp/en/reservations" },
    bistro0711:{ zh: "0711 GiNZA BiSTRO", en: "0711 GiNZA BiSTRO", ja: "銀座8丁目 0711 GiNZA BiSTRO", q: "0711 GiNZA BiSTRO", url: "https://www.0711ginzabistro.com/" },
    largent:   { zh: "L'ARGENT", en: "L'ARGENT", ja: "ラルジャン 霞が関", q: "L'ARGENT Kasumigaseki", url: "https://www.tablecheck.com/en/shops/largelt/reserve" },
    maz:       { zh: "MAZ", en: "MAZ", ja: "東京ガーデンテラス紀尾井町 MAZ", q: "MAZ Tokyo Garden Terrace Kioicho", url: "https://maztokyo.jp/882/?lang=en" },
    ushigoroshinjuku: { zh: "USHIGORO S. 新宿", en: "USHIGORO S. Shinjuku", q: "USHIGORO S. Shinjuku", url: "https://ushigoro-s.com/" },
    ushigoro:  { zh: "USHIGORO S. 銀座", en: "USHIGORO S. Ginza", ja: "銀座 USHIGORO S.", q: "USHIGORO S. GINZA", url: "https://www.tablecheck.com/en/shops/ushigoro-s-ginza/reserve" },
    seishin:   { zh: "Menya Seishin", en: "Menya Seishin", q: "Menya Seishin Ochiai" },
    sincere:   { zh: "Sincère", en: "Sincère", q: "Sincere restaurant Sendagaya", url: "https://www.tablecheck.com/ja/shops/sincere/reserve" },
    lature:    { zh: "LATURE", en: "LATURE", q: "LATURE Shibuya", url: "https://www.lature.jp/" },
    monolith:  { zh: "MONOLITH", en: "MONOLITH", q: "MONOLITH Shibuya French", url: "https://neo-monolith.com/information/" },
    maerge:    { zh: "mærge", en: "mærge", q: "maerge Minami-Aoyama", url: "https://www.tablecheck.com/en/maerge/reserve/landing" },
    narisawa:  { zh: "NARISAWA", en: "NARISAWA", q: "NARISAWA Minami-Aoyama", url: "https://www.narisawa-yoshihiro.com/reservation" },
    esquisse:  { zh: "ESqUISSE", en: "ESqUISSE", q: "ESqUISSE Ginza", url: "https://www.esquissetokyo.com/en/reserve/" },
    sezanne:   { zh: "SÉZANNE", en: "SÉZANNE", q: "SEZANNE Four Seasons Marunouchi", url: "https://omakase.in/r/rz444182" },
    gomei:     { zh: "秋田牛鐵板燒 銀座 Gomei", en: "Akita Beef Teppanyaki Ginza Gomei", q: "Akita Beef Teppanyaki Ginza Gomei", url: "https://tabelog.com/tokyo/A1301/A130101/13187289/" },
    yamashina: { zh: "本店 山科", en: "Honten Yamashina", q: "Honten Yamashina Ginza Place", url: "https://res-reserve.com/en/restaurants/honten-yamashina" },
    kitafuku:  { zh: "Kita Fuku", en: "Kita Fuku", q: "Kani Kita Fuku Ginza", url: "https://kanikitafuku.com/" },
    nakamura:  { zh: "麻布台 Nakamura", en: "Azabudai Nakamura", q: "Azabudai Nakamura teppanyaki", url: "https://naka-mura.net/" },
    sugalabo:  { zh: "SUGALABO", en: "SUGALABO", q: "SUGALABO Kamiyacho", url: "https://sugalabo.com/" },
    hommage:   { zh: "Hommage", en: "Hommage", q: "Hommage Asakusa", url: "https://www.hommage-arai.com/en/" },
    metis:     { zh: "Métis", en: "Métis", q: "Metis Roppongi", url: "https://www.tablecheck.com/en/shops/metis-roppongi/reserve" },
    bia:       { zh: "Bia", en: "Bia", q: "Bia Roppongi Nogizaka", url: "https://www.tablecheck.com/zh-TW/bia-roppongi" },
    heritage:  { zh: "Héritage by Kei Kobayashi", en: "Héritage by Kei Kobayashi", q: "Heritage by Kei Kobayashi Tokyo Midtown", url: "https://www.heritagebykei.com/restaurants-in-tokyo" },
    leffervescence: { zh: "L'Effervescence", en: "L'Effervescence", q: "L'Effervescence Nishiazabu", url: "https://www.leffervescence.jp/en/" },
    asahina:   { zh: "ASAHINA Gastronome", en: "ASAHINA Gastronome", q: "ASAHINA Gastronome Kayabacho", url: "https://asahinagastronome.com/en/" },
    jambo:     { zh: "燒肉 Jambo Hanare", en: "Yakiniku Jambo Hanare", q: "Yakiniku Jambo Hanare Hongo", url: "https://yakiniku-jambo.com/hanare.html" },
    satobriand:{ zh: "SATO Briand 本店", en: "SATO Briand Honten", q: "SATO Briand Asagaya", url: "https://satobriand.yoyaku.at/" },
    fransuya:  { zh: "銀座 Fransuya", en: "Ginza Fransuya", q: "Ginza Fransuya cafe" },
    petitmec:  { zh: "Le Petit Mec 日比谷", en: "Le Petit Mec Hibiya", q: "Le Petit Mec Hibiya", url: "https://www.lepetitmec.com/" },
    coffeerin: { zh: "Coffee Rin 並木通本店", en: "Coffee Rin, Namiki-dori", q: "Coffee Rin Ginza Namiki-dori", url: "https://coffee-rin.com/mainshop/" },
    hanayama:  { zh: "花山烏冬 銀座", en: "Hanayama Udon Ginza", q: "Hanayama Udon Ginza", url: "https://www.kappo-shimizuya.pro/ginza/" },
    nanakura:  { zh: "Nanakura", en: "Nanakura", q: "Nanakura Shimbashi lunch", url: "https://nanakura.co.jp/company/" },
    viron:     { zh: "VIRON 丸之內", en: "VIRON Marunouchi", q: "VIRON Marunouchi" },
    burdigala: { zh: "BURDIGALA TOKYO", en: "BURDIGALA TOKYO", q: "BURDIGALA TOKYO Gransta", url: "https://burdigala.co.jp/shop/burdigala-tokyo" },
    landemaine:{ zh: "Maison Landemaine 麻布台", en: "Maison Landemaine Azabudai", q: "Maison Landemaine Azabudai", url: "https://www.maisonlandemainejapon.com/access" },
    anpuku:    { zh: "Anpuku 池袋", en: "Anpuku Ikebukuro", q: "Anpuku Ikebukuro", url: "https://anpuku.net/reservation/" },

    // Scheduled stops (Oct 12 plan)
    shinbashi: { zh: "新橋", en: "Shinbashi", ja: "新橋駅 SL広場", q: "Shimbashi Station SL Square" },
    hibiya:    { zh: "東京中城日比谷", en: "Tokyo Midtown Hibiya", ja: "東京ミッドタウン日比谷", q: "Tokyo Midtown Hibiya", url: "https://www.hibiya.tokyo-midtown.com/" },
    yoyogi:    { zh: "代代木公園", en: "Yoyogi Park", ja: "代々木公園", q: "Yoyogi Park" },
    dogheart:  { zh: "DOG HEART（富谷）", en: "DOG HEART (Tomigaya)", q: "DOG HEART Aquamarine Tomigaya", url: "https://dog-heart.ico.bz/" },
    sumoclub:  { zh: "淺草相撲表演", en: "Asakusa Sumo Club show", q: "Asakusa Sumo Club", url: "https://asakusa-sumo.com/reserve/" },
    sakecenter:{ zh: "日本酒資訊中心", en: "Japan Sake and Shochu Information Center", ja: "日本の酒情報館", q: "Japan Sake and Shochu Information Center", url: "https://japansake.or.jp/sake/en/jss/information-center/" },
    oshino:    { zh: "忍野八海", en: "Oshino Hakkai", ja: "忍野八海", q: "Oshino Hakkai" },
    kawaguchiko:{ zh: "河口湖", en: "Lake Kawaguchi", ja: "河口湖", q: "Lake Kawaguchi" },
    senkyaku:  { zh: "豐洲千客萬來", en: "Toyosu Senkyaku Banrai", ja: "豊洲 千客万来", q: "Toyosu Senkyaku Banrai", url: "https://www.toyosu-senkyakubanrai.jp/" },
    uogashi:   { zh: "築地魚河岸", en: "Tsukiji Uogashi", ja: "築地魚河岸", q: "Tsukiji Uogashi" },
    chazen:    { zh: "銀座茶禪 茶道體驗", en: "Ginza Chazen tea ceremony", q: "Ginza Chazen tea ceremony", url: "https://www.chazen-co.jp/ginza/" },
    artaquarium:{ zh: "Art Aquarium 金魚美術館 GINZA", en: "Art Aquarium Museum GINZA", ja: "銀座三越 アートアクアリウム美術館", q: "Art Aquarium Museum GINZA", url: "https://artaquarium.jp/" },
    dawn:      { zh: "機械人咖啡店 DAWN（日本橋）", en: "Avatar Robot Café DAWN (Nihonbashi)", q: "Avatar Robot Cafe DAWN Nihonbashi", url: "https://dawn2021.orylab.com/en/" },

    // Hotels
    besshosasa:{ zh: "富士山溫泉 別墅然然", en: "Bessho Sasa Hotel", ja: "富士山温泉 別墅然然", q: "Bessho Sasa Fujiyoshida", url: "https://bessho-sasa.com/" },
    blossom:   { zh: "THE BLOSSOM HIBIYA", en: "THE BLOSSOM HIBIYA", ja: "THE BLOSSOM HIBIYA（ザ ブラッサム 日比谷）", q: "THE BLOSSOM HIBIYA Tokyo", url: "https://www.jrk-hotels.co.jp/en/Hibiya/" },
    sequence:  { zh: "sequence MIYASHITA PARK", en: "sequence MIYASHITA PARK", ja: "sequence MIYASHITA PARK（渋谷 ミヤシタパーク）", q: "sequence MIYASHITA PARK", url: "https://www.sequencehotels.com/miyashita-park/eng/" },
    tokyustay: { zh: "東急 Stay 新宿 Eastside", en: "Tokyu Stay Shinjuku Eastside", ja: "東急ステイ新宿イーストサイド", q: "Tokyu Stay Shinjuku Eastside", url: "https://www.tokyustay.co.jp/chn_tc/hotel/SE/" },
    stream:    { zh: "澀谷 Stream Excel 東急酒店", en: "Shibuya Stream Excel Hotel Tokyu", ja: "渋谷ストリームエクセルホテル東急", q: "Shibuya Stream Excel Hotel Tokyu", url: "https://www.tokyuhotels.co.jp/en/shibuyastream/index.html" },

    azur:      { zh: "AZUR et MASA UEKI", en: "AZUR et MASA UEKI", ja: "アズール エ マサ ウエキ 西麻布", q: "AZUR et MASA UEKI", url: "https://www.tablecheck.com/en/shops/restaurant-azur/reserve" }
  },

  calendar: [
    { date: "2026-12-20", who: "all", title: { zh: "抵達東京", en: "Arrive in Tokyo" },
      items: [
        { type: "leg", from: { zh: "香港", en: "Hong Kong" }, to: { zh: "東京", en: "Tokyo" }, via: { zh: "航班待定", en: "Flight TBC" }, dur: "~4h" },
        { time: { zh: "入住", en: "Check in" }, place: "blossom", sub: { zh: "暫定，尚未預訂", en: "Likely, not booked" } },
        { type: "branches", mode: "or", head: { zh: "抵達當晚視乎時間選擇", en: "Choose by arrival time" }, options: [
          { label: { zh: "約 16:30 前放下行李，仍有精神", en: "Bags dropped by about 16:30 and still energetic" }, items: [
            { time: { zh: "17:00–20:00", en: "17:00–20:00" }, place: "shibuya", sub: { zh: "看十字路口、逛商場及晚餐；由新橋乘銀座線直達", en: "Crossing, shopping and dinner; direct Ginza Line from Shinbashi" }, optional: true }
          ] },
          { label: { zh: "抵達較晚或想休息", en: "Later arrival or prefer an easy night" }, items: [
            { time: { zh: "晚餐", en: "Dinner" }, place: "shinbashi", sub: { zh: "在酒店附近用餐", en: "Dinner near the hotel" } },
            { time: { zh: "晚上", en: "Evening" }, place: "hibiya", sub: { zh: "若有精神，短逛日比谷燈飾", en: "Short Hibiya lights walk if energy remains" }, optional: true }
          ] }
        ] },
        { type: "note", text: { zh: "航班時間未定，不預約當晚固定晚餐。若 20 日已逛澀谷，21 日便直接前往新宿購物；若未逛，21 日仍有澀谷時段。", en: "Flight time unknown; no fixed arrival-night dinner. If Shibuya happens on the 20th, go straight to Shinjuku shopping on the 21st. Otherwise Shibuya stays on the 21st." } }
      ] },
    { date: "2026-12-21", who: "all", title: { zh: "明治神宮、代代木公園、澀谷（如有需要）及新宿", en: "Meiji Jingu, Yoyogi Park, Shibuya if needed, Shinjuku" },
      items: [
        { time: { zh: "09:00", en: "09:00" }, place: "meiji", sub: { zh: "在神社內參觀約一小時", en: "About an hour at the shrine" } },
        { time: { zh: "11:00", en: "11:00" }, place: "dogheart", sub: { zh: "租借小狗一小時", en: "Borrow a dog for an hour" }, status: "tobook" },
        { time: { zh: "", en: "" }, place: "yoyogi", sub: { zh: "帶小狗在公園散步", en: "Walk the dog in the park" } },
        { type: "branches", mode: "or", head: { zh: "20 日有否逛澀谷？", en: "Did Shibuya happen on the 20th?" }, options: [
          { label: { zh: "已逛：新宿悠閒購物", en: "Yes: more time in Shinjuku" }, items: [
            { time: { zh: "13:30–19:00", en: "13:30–19:00" }, place: "shinjuku", sub: { zh: "四人可慢慢逛百貨公司及商店；晚飯後夜遊可選", en: "Unhurried shops and department stores together; nightlife after dinner is optional" } }
          ] },
          { label: { zh: "未逛：澀谷及新宿", en: "No: Shibuya and Shinjuku" }, items: [
            { time: { zh: "13:30–16:00", en: "13:30–16:00" }, place: "shibuya", sub: { zh: "十字路口及一兩處商場", en: "Crossing and one or two shopping stops" } },
            { type: "leg", from: { zh: "澀谷", en: "Shibuya" }, to: { zh: "新宿", en: "Shinjuku" }, via: { zh: "JR 車程約 7 分鐘；連進出車站另預留時間", en: "JR ride about 7 minutes; allow more for station walking" }, dur: "~20–30 min" },
            { time: { zh: "16:30–19:00", en: "16:30–19:00" }, place: "shinjuku", sub: { zh: "四人一起購物，晚飯後夜遊可選", en: "Shop together; nightlife after dinner is optional" } }
          ] }
        ] },
        { type: "note", text: { zh: "晚餐可在新宿隨意用餐；若特別想吃 AZUR，可另乘車前往西麻布。", en: "Keep dinner flexible in Shinjuku; AZUR is a separate Nishiazabu transfer if the group chooses it." } },
        { type: "branches", mode: "split", head: { zh: "晚飯後可分頭活動（可選）", en: "Optional split after dinner" }, options: [
          { label: { zh: "John 與 Vanjai", en: "John and Vanjai" }, items: [
            { time: { zh: "晚上", en: "Evening" }, place: "namcotokyo", sub: { zh: "歌舞伎町夜景與夾公仔機", en: "Kabukicho lights and crane games" }, optional: true }
          ] },
          { label: { zh: "Ben 與 Christine", en: "Ben and Christine" }, items: [
            { time: { zh: "晚上", en: "Evening" }, place: "benfiddich", sub: { zh: "西新宿 15 席雞尾酒吧；21 日營業及座位待確認", en: "15-seat west Shinjuku cocktail bar; 21 Dec opening and seats to check" }, optional: true }
          ] }
        ] },
        { type: "note", text: { zh: "若 20 日已逛澀谷，21 日新宿可多逛約兩小時；若未逛，21 日兩個商區皆會安排，時間較緊。若感疲累，省略晚間酒吧或夾公仔機。小狗散步仍未預約，可於訂位前再決定是否保留。若選 AZUR 晚餐，晚間分頭活動可能不合適。", en: "If Shibuya is done on the 20th, Shinjuku gains about two hours on the 21st. Otherwise both shopping areas remain, making the day fuller. If tired, skip the late bar or arcade. The dog walk is unbooked and can be reconsidered before reserving. An AZUR dinner transfer may leave no time for the evening split." } },
        { type: "note", text: { zh: "上午步行較多：從神社步行至公園另一側的小狗店約 25–35 分鐘，如感疲累，可改乘的士。", en: "A fairly active morning: about 25–35 minutes on foot from the shrine to the dog shop; take a taxi if tired." } },
        { type: "tbd", text: { zh: "遛狗須電話預約；12 月是否有空位、四位成人可否共用一隻小狗，均待確認。晚餐尚未訂位。", en: "The dog walk is booked by phone; still to check December availability and whether four adults can share one dog. Dinner not booked." } }
      ] },
    { date: "2026-12-22", who: "all", title: { zh: "淺草、清酒品酒", en: "Asakusa and a sake tasting" },
      items: [
        { time: { zh: "上午", en: "Morning" }, place: "sensoji", sub: { zh: "淺草寺與周邊老街", en: "The temple and old streets" } },
        { type: "branches", mode: "or", options: [
          { label: { zh: "相撲表演", en: "Sumo show" }, items: [
            { time: { zh: "12:00", en: "12:00" }, place: "sumoclub", sub: { zh: "坐著觀賞兩小時相撲表演，並享用相撲火鍋", en: "Two-hour seated sumo show with chanko hotpot" }, optional: true }
          ] },
          { label: { zh: "東京晴空塔", en: "Tokyo Skytree" }, items: [
            { time: { zh: "下午", en: "Afternoon" }, place: "skytree", sub: { zh: "從淺草步行前往", en: "Walk over from Asakusa" }, optional: true }
          ] }
        ] },
        { time: { zh: "16:00", en: "16:00" }, place: "sakecenter", sub: { zh: "酒店附近的清酒品酒，約 16:00–17:00", en: "Sake tasting near the hotel, about 16:00–17:00" } },
        { type: "branches", mode: "or", head: { zh: "現時晚餐選擇", en: "Current dinner choices" }, options: [
          { label: { zh: "較順路：霞關", en: "Easier: Kasumigaseki" }, items: [
            { time: { zh: "18:30", en: "18:30" }, place: "largent", sub: { zh: "已搬離銀座；10 月 14 日網上表格可選四人 22 日 18:30，尚未訂位", en: "Moved from Ginza; on 14 Oct the form allowed four for 22 Dec 18:30. Not booked." }, status: "tobook" }
          ] },
          { label: { zh: "特別轉車：西麻布", en: "Special transfer: Nishiazabu" }, items: [
            { time: { zh: "20:00", en: "20:00" }, place: "azur", sub: { zh: "聖誕新年限定套餐；10 月 14 日網上表格可選四人 22 日 20:00，尚未訂位", en: "Festive course; on 14 Oct the form allowed four for 22 Dec 20:00. Not booked." }, status: "tobook" }
          ] }
        ] },
        { type: "branches", mode: "split", head: { zh: "晚飯後可分頭活動（可選）", en: "Optional split after dinner" }, options: [
          { label: { zh: "John 與 Vanjai", en: "John and Vanjai" }, items: [
            { type: "note", text: { zh: "自由散步，或返回酒店休息。", en: "A stroll of your own, or back to the hotel." } }
          ] },
          { label: { zh: "Ben 與 Christine：選一間酒吧", en: "Ben and Christine: pick a bar" }, items: [
            { place: "mementomori", sub: { zh: "若在 L'ARGENT 晚餐，可再前往虎之門之丘", en: "Another short hop after L'ARGENT" }, optional: true },
            { place: "sotoroku", sub: { zh: "酒店內，葡萄酒、清酒及威士忌", en: "In the hotel: wine, sake and whisky" }, optional: true },
            { place: "imperialbar", sub: { zh: "經典雞尾酒；晚上不設預約", en: "Classic cocktails; evening walk-in only" }, optional: true }
          ] }
        ] },
        { type: "tbd", text: { zh: "相撲表演或晴空塔二選一，也可以在淺草慢慢逛。品酒中心 12 月的開放時間待確認。晚餐尚未訂位。", en: "Choose the sumo show or Skytree, or simply take Asakusa slowly. The sake centre's December hours still to check. Dinner not booked." } }
      ] },
    { date: "2026-12-23", who: "all", title: { zh: "前往富士吉田，入住溫泉旅館", en: "To Fujiyoshida for a night at the ryokan" },
      items: [
        { type: "leg", from: { zh: "東京", en: "Tokyo" }, to: { zh: "富士吉田", en: "Fujiyoshida" }, via: { zh: "門到門估計，交通方式待定", en: "Door to door, estimate; transport TBC" }, dur: "~3–4h" },
        { time: { zh: "下午", en: "Afternoon" }, place: "besshosasa", sub: { zh: "泡溫泉、晚餐，或許小酌一杯", en: "Hot spring and dinner, perhaps a little wine" }, status: "booked" },
        { type: "note", text: { zh: "旅館提供免費車站接送（13:00–18:00），須抵達富士山站或河口湖站後致電旅館，無法事先以電郵預約。", en: "The ryokan's free station pickup runs 13:00–18:00; call after reaching Fujisan or Kawaguchiko Station. It can't be booked ahead by email." } },
        { type: "tbd", text: { zh: "旅館已預訂，但截圖看不到日期；是否為 23–24 日須以完整憑證確認。", en: "Hotel booked, but the screenshots cut off the dates; confirm 23–24 Dec from the full vouchers." } }
      ] },
    { date: "2026-12-24", who: "all", title: { zh: "富士山，之後返回東京", en: "Mt Fuji, then back to Tokyo" },
      items: [
        { time: { zh: "早上", en: "Morning" }, place: "besshosasa", sub: { zh: "旅館早餐，退房", en: "Ryokan breakfast, check out" } },
        { type: "branches", mode: "or", options: [
          { label: { zh: "較簡單：從富士吉田出發", en: "Simpler: straight from Fujiyoshida" }, items: [ { place: "oshino" } ] },
          { label: { zh: "若從河口湖乘車回東京", en: "If the ride back leaves from Kawaguchiko" }, items: [ { place: "kawaguchiko" } ] }
        ] },
        { type: "leg", from: { zh: "富士", en: "Fuji" }, to: { zh: "東京", en: "Tokyo" }, via: { zh: "門到門估計，交通方式待定", en: "Door to door, estimate; transport TBC" }, dur: "~3–4h" },
        { time: { zh: "晚餐", en: "Dinner" }, place: "hibiya", sub: { zh: "平安夜晚餐在酒店附近；日比谷燈飾最方便", en: "Christmas Eve dinner near the hotel; the Hibiya lights are the easy option" } },
        { time: { zh: "晚餐後", en: "After dinner" }, place: "marunouchi", sub: { zh: "若時間及體力許可，欣賞丸之內聖誕燈飾", en: "Marunouchi Christmas lights if time and energy allow" }, optional: true },
        { time: { zh: "晚餐後", en: "After dinner" }, place: "peterbar", sub: { zh: "Ben 與 Christine 若想喝一杯；視乎回程時間，不預約", en: "For Ben and Christine if they'd like a drink; depends on the return, no booking" }, optional: true },
        { type: "note", text: { zh: "富士山一帶只去一個地點。旅館回程接駁車 08:30–12:00 每 30 分鐘一班，須在櫃台預約；旅館不代運行李。建議每人帶一個過夜小包，大行李寄存在東京酒店（待確認），景點之間可用車站儲物櫃、的士或包車。", en: "Just one Fuji-area stop. The return shuttle runs 08:30–12:00 every 30 minutes, booked at the front desk; the ryokan won't transport luggage. Bring one overnight bag each and leave big cases at the Tokyo hotel (to confirm); use station lockers, a taxi or a hired car between stops." } },
        { type: "note", text: { zh: "晚餐避免訂太早或不能改的時段，預留交通延誤的時間。", en: "Avoid an early or fixed dinner booking; allow for travel delays." } }
      ] },
    { date: "2026-12-25", who: "all", plan: "D", title: { zh: "豐洲：市場、足湯、teamLab、聖誕市集", en: "Toyosu: market, footbath, teamLab, Christmas market" },
      items: [
        { time: { zh: "早上", en: "Morning" }, place: "toyosu", sub: { zh: "簡短參觀市場，可品嚐海鮮早餐", en: "A short look at the market, with an optional seafood breakfast" }, optional: true },
        { time: { zh: "上午", en: "Late morning" }, place: "senkyaku", sub: { zh: "江戶風美食街，8 樓免費足湯", en: "Edo-style food street and the free 8th-floor footbath" } },
        { time: { zh: "14:00", en: "14:00" }, place: "planets", sub: { zh: "建議 14:00–15:00 入場，館內約兩至兩個半小時", en: "Suggested entry 14:00–15:00; about 2–2½ hours inside" }, status: "tobook" },
        { time: { zh: "晚上", en: "Evening" }, place: "shintoyosu", sub: { zh: "聖誕節當晚是最後一晚；21:30 關門（20:30 最後入場），每位成人 ¥2,000", en: "Christmas Day is the last night; closes 21:30 (last entry 20:30), ¥2,000 per adult" }, status: "tobook" },
        { type: "note", text: { zh: "若感到疲累，最先省略的是市場參觀。聖誕節當天足湯的開放時間未公布。", en: "If tired, skip the market visit first. Footbath hours for Christmas Day aren't published." } }
      ] },
    { date: "2026-12-26", who: "all", title: { zh: "築地、銀座茶道、金魚美術館", en: "Tsukiji, a Ginza tea ceremony, goldfish art" },
      items: [
        { time: { zh: "09:00", en: "09:00" }, place: "tsukiji", sub: { zh: "約 9:00–10:30；年底人潮非常多", en: "About 9:00–10:30; very crowded at year-end" } },
        { time: { zh: "", en: "" }, place: "uogashi", sub: { zh: "批發商經營的生鮮賣場，9:00 起開放一般遊客選購", en: "Wholesaler-run fresh-food building, open to visitors from 9:00" } },
        { time: { zh: "11:00", en: "11:00" }, place: "chazen", sub: { zh: "45 分鐘茶道體驗，目標 11:00 或 12:00 場次", en: "45-minute tea ceremony; aim for the 11:00 or 12:00 slot" }, status: "tobook" },
        { type: "note", text: { zh: "在銀座輕鬆午餐，留胃口及時間給今晚選定的一間特別餐廳。", en: "Keep lunch casual in Ginza; save time and appetite for one chosen special dinner." } },
        { time: { zh: "下午", en: "Afternoon" }, place: "artaquarium", sub: { zh: "展覽至 2027 年 1 月 6 日", en: "The exhibition runs until 6 Jan 2027" } },
        { time: { zh: "晚上", en: "Evening" }, place: "ginza", sub: { zh: "悠閒逛街", en: "An unhurried browse" } },
        { type: "branches", mode: "or", head: { zh: "四人晚餐：只選一間", en: "Four-person dinner: choose one" }, options: [
          { label: { zh: "銀座燒肉", en: "Ginza yakiniku" }, items: [ { time: { zh: "18:30", en: "18:30" }, place: "ushigoro", sub: { zh: "10 月 14 日網上表格可選四人時段；尚未訂位", en: "Four-person time selectable on 14 Oct; not booked." }, status: "tobook" } ] },
          { label: { zh: "銀座鐵板燒", en: "Ginza teppanyaki" }, items: [ { time: { zh: "晚餐", en: "Dinner" }, place: "yamashina", sub: { zh: "鐵板燒套餐；10 月 14 日日曆只開放至 12 月 14 日", en: "Teppanyaki course; on 14 Oct calendar reached only 14 Dec." }, status: "tobook" } ] },
          { label: { zh: "丸之內法國菜", en: "Marunouchi French" }, items: [ { time: { zh: "晚餐", en: "Dinner" }, place: "sezanne", sub: { zh: "26 日只供應節日套餐，每位 ¥75,900；四人空位未查證", en: "Festive course only on the 26th, ¥75,900 pp; four seats unverified." }, status: "tobook" } ] }
        ] },
        { type: "note", text: { zh: "三間是同一晚的不同選擇，只需選一間；全部尚未訂位。", en: "Three options for the same evening; choose one. None is booked." } },
        { type: "branches", mode: "split", head: { zh: "晚飯後可分頭活動（可選）", en: "Optional split after dinner" }, options: [
          { label: { zh: "John 與 Vanjai", en: "John and Vanjai" }, items: [
            { type: "note", text: { zh: "自行散步。", en: "A stroll of your own." } }
          ] },
          { label: { zh: "Ben 與 Christine：選一間酒吧", en: "Ben and Christine: pick a bar" }, items: [
            { place: "peterbar", sub: { zh: "日比谷夜景，雞尾酒及葡萄酒；不設預約", en: "Hibiya views, cocktails and wine; no reservations" }, optional: true },
            { place: "mixologysalon", sub: { zh: "銀座茶雞尾酒，只有 8 席，宜較早前往", en: "Ginza tea cocktails; only 8 seats, go early" }, optional: true }
          ] }
        ] },
        { type: "note", text: { zh: "預計是四人同行的最後一個完整日。", en: "Likely the last full day for all four of us." } },
        { type: "tbd", text: { zh: "茶道時段與美術館年底開放時間待確認。午餐及晚餐尚未訂位。", en: "Tea ceremony slot and the museum's holiday hours to confirm. Lunch and dinner not booked." } }
      ] },
    { date: "2026-12-27", who: "split", title: { zh: "Ben 與 Christine 回程", en: "Ben and Christine fly home" },
      items: [
        { type: "note", text: { zh: "Ben 與 Christine 返回香港；John 與 Vanjai 留在東京。航班時間待定。", en: "Ben and Christine fly back to Hong Kong; John and Vanjai stay in Tokyo. Flight times TBC." } }
      ],
      notes: [{ zh: "豐洲市場週日特別開放", en: "Toyosu Market has a special Sunday opening" }] },
    { date: "2026-12-28", who: "jv", title: { zh: "John 與 Vanjai 自由行", en: "John and Vanjai's own day" },
      items: [
        { type: "branches", mode: "or", head: { zh: "兩人晚餐候選（28 或 29 日各一間）", en: "Dinner for two (one on the 28th, one on the 29th)" }, options: [
          { label: { zh: "紀尾井町", en: "Kioicho" }, items: [ { time: { zh: "晚餐", en: "Dinner" }, place: "maz", sub: { zh: "12 月訂位 10 月 15 日中午（日本時間）開放", en: "December bookings open 15 Oct, noon Japan time" }, status: "tobook" } ] },
          { label: { zh: "南青山", en: "Minami-Aoyama" }, items: [ { time: { zh: "晚餐", en: "Dinner" }, place: "maerge", sub: { zh: "12 月訂位 11 月 1 日開放；逢星期日休息", en: "December bookings open 1 Nov; closed Sundays" }, status: "tobook" } ] }
        ] },
        { type: "note", text: { zh: "日間由 Vanjai 決定；John 的秋葉原・中野行程也是選項之一。", en: "Vanjai picks the daytime; John's Akihabara and Nakano day is also an option." } } ] },
    { date: "2026-12-29", who: "jv", title: { zh: "John 與 Vanjai 自由行", en: "John and Vanjai's own day" },
      items: [ { type: "note", text: { zh: "自由安排；晚餐見 28 日的 MAZ 或 mærge，兩間可分別安排在 28 及 29 日。", en: "Free to plan; for dinner see MAZ or mærge on the 28th, one on each night." } } ] },
    { date: "2026-12-30", who: "jv", title: { zh: "John 與 Vanjai 回程", en: "John and Vanjai fly home" },
      items: [ { type: "note", text: { zh: "航班時間待定，不安排遠行。", en: "Flight time TBC; nothing far." } } ] }
  ],

  periods: [
    { from: "2026-12-20", to: "2026-12-26", title: { zh: "四人同行", en: "All four of us" }, hint: { zh: "Ben、Christine、John、Vanjai", en: "Ben, Christine, John, Vanjai" } },
    { from: "2026-12-27", to: "2026-12-30", title: { zh: "John 與 Vanjai", en: "John and Vanjai" }, hint: { zh: "Ben 與 Christine 27 日返回香港", en: "Ben and Christine fly home on the 27th" } }
  ],

  ideas: [
    {
      code: "A", pick: "suggested", hours: "6–8", walk: 2,
      title: { zh: "東京東部：淺草", en: "Eastern Tokyo: Asakusa" },
      why: { zh: "寺廟與老街。之後二選一：登上晴空塔俯瞰東京，或到上野阿美橫丁逛街市。", en: "Temple and old streets, then either the Skytree view or the Ueno street market." },
      items: [
        { type: "branches", mode: "or", options: [
          { label: { zh: "淺草 → 晴空塔", en: "Asakusa → Skytree" }, items: [
            { time: { zh: "上午", en: "Morning" }, place: "sensoji", sub: { zh: "雷門、仲見世通小吃", en: "Kaminarimon gate, Nakamise snack street" } },
            { time: { zh: "中午", en: "Midday" }, place: "sumida", sub: { zh: "沿河步行前往，約 20 分鐘", en: "Riverside walk across, about 20 min" } },
            { time: { zh: "下午", en: "Afternoon" }, place: "skytree", sub: { zh: "觀景台及塔下商場", en: "Observation deck and the mall below" } }
          ] },
          { label: { zh: "上野 → 淺草", en: "Ueno → Asakusa" }, items: [
            { time: { zh: "上午", en: "Morning" }, place: "ueno", sub: { zh: "街市、小吃、平價貨品", en: "Street market, snacks, bargains" } },
            { time: { zh: "下午", en: "Afternoon" }, place: "sensoji", sub: { zh: "在淺草結束", en: "Finish in Asakusa" } }
          ] }
        ] },
        { type: "note", text: { zh: "如選此行程，晚餐可再作決定。", en: "Choose dinner after deciding this route." } }
      ]
    },
    {
      code: "B", pick: "suggested", hours: "5–7", walk: 2,
      title: { zh: "明治神宮，然後選擇一個結尾", en: "Meiji Jingu, then pick a finish" },
      why: { zh: "從原宿出發，兩個方向都很順路，視乎晚餐想在哪裡用餐而選擇。", en: "Both directions flow easily from Harajuku. Choose by where you want dinner." },
      items: [
        { time: { zh: "上午", en: "Morning" }, place: "meiji", sub: { zh: "森林中的神社，位於原宿站旁", en: "Forest shrine beside Harajuku Station" } },
        { type: "branches", mode: "or", options: [
          { label: { zh: "表參道・青山", en: "Omotesando · Aoyama" }, items: [
            { time: { zh: "下午", en: "Afternoon" }, place: "omotesando", sub: { zh: "Vanjai 與 John 的 mærge 候選可配此區", en: "mærge is a possible John-and-Vanjai dinner in this area" } }
          ] },
          { label: { zh: "澀谷", en: "Shibuya" }, items: [
            { time: { zh: "晚上", en: "Evening" }, place: "shibuya", sub: { zh: "晚餐待選", en: "Dinner TBD" } }
          ] }
        ] },
        { type: "note", text: { zh: "三個區都去會太累。若體力充足，才順道經過第三個區。", en: "All three areas is too much; only pass through the third if everyone has energy." } }
      ]
    },
    {
      code: "C", pick: "suggested", hours: "5–7", walk: 2,
      title: { zh: "築地、銀座", en: "Tsukiji and Ginza" },
      why: { zh: "兩區相距很近。John 去銀座 八五 吃拉麵，其他人在銀座逛街。", en: "Two close areas. John has Ginza Hachigo ramen while the others browse Ginza." },
      items: [
        { time: { zh: "早上", en: "Morning" }, place: "tsukiji", sub: { zh: "早餐宜吃少一些，留待中午品嚐拉麵", en: "Keep breakfast light if ramen is lunch" } },
        { time: { zh: "中午", en: "Midday" }, place: "ginza", sub: { zh: "John 獨自吃拉麵（銀座 八五），其他人逛街", en: "John's solo ramen (Ginza Hachigo) while the others browse" } },
        { time: { zh: "晚上", en: "Evening" }, place: "marunouchi", sub: { zh: "若銀座沒有預訂晚餐，可順道欣賞燈飾", en: "Only if there's no Ginza dinner booked" }, optional: true },
        { type: "note", text: { zh: "不宜與前往箱根安排在同一天。", en: "Keep this separate from the Hakone travel day." } }
      ]
    },
    {
      code: "D", pick: "either", hours: "6–8", walk: 2,
      title: { zh: "豐洲：市場、teamLab Planets", en: "Toyosu: market and teamLab Planets" },
      why: { zh: "幾個地點都在新豐洲附近，不必來回奔波。", en: "Everything is close to Shin-Toyosu." },
      items: [
        { time: { zh: "早上", en: "Morning" }, place: "toyosu", sub: { zh: "參觀魚市場，品嚐海鮮", en: "Fish market and seafood" } },
        { time: { zh: "下午", en: "Afternoon" }, place: "planets", sub: { zh: "沉浸式藝術，須赤腳涉水", en: "Immersive art; you walk barefoot through water" } },
        { time: { zh: "晚上", en: "Evening" }, place: "shintoyosu", sub: { zh: "只在 25 日或之前舉行", en: "Only on or before 25 Dec" }, optional: true },
        { type: "note", text: { zh: "聖誕節後，豐洲與 teamLab 已足夠一天；想多看海景可改往台場。", en: "After Christmas, Toyosu and teamLab are enough for the day; Odaiba is an option for more waterfront." } },
        { type: "tbd", text: { zh: "與 E 二選一（兩者都是 teamLab）。須選市場開放的日子。", en: "Pick D or E (both feature teamLab). Needs a day the market is open." } }
      ]
    },
    {
      code: "E", pick: "either", hours: "5–8", walk: 2,
      title: { zh: "麻布台，然後選擇一個結尾", en: "Azabudai, then pick a finish" },
      why: { zh: "參觀 teamLab Borderless 後，可選擇東京鐵塔聖誕市集，或到六本木欣賞藝術並晚餐。", en: "After teamLab Borderless, choose either Tokyo Tower's Christmas market or Roppongi for art and dinner." },
      items: [
        { time: { zh: "下午", en: "Afternoon" }, place: "borderless", sub: { zh: "須預約入場時間", en: "Timed entry, book ahead" } },
        { type: "branches", mode: "or", options: [
          { label: { zh: "東京鐵塔・芝公園", en: "Tokyo Tower · Shiba Park" }, items: [
            { time: { zh: "黃昏", en: "Dusk" }, place: "tower" },
            { time: { zh: "晚上", en: "Evening" }, place: "shiba", sub: { zh: "聖誕市集，舉行至 12 月 25 日", en: "Christmas market, until 25 Dec" } }
          ] },
          { label: { zh: "六本木・東京中城", en: "Roppongi · Tokyo Midtown" }, items: [
            { time: { zh: "晚上", en: "Evening" }, place: "roppongi", sub: { zh: "若選 AZUR，須再往西麻布", en: "For AZUR, continue to Nishiazabu" } }
          ] }
        ] },
        { type: "note", text: { zh: "只選一個結尾。若要在西麻布的 AZUR 用餐，預留轉車時間。", en: "Choose one finish only. Allow a transfer to Nishiazabu if choosing AZUR." } },
        { type: "tbd", text: { zh: "與 D 二選一（兩者都是 teamLab）。", en: "Pick D or E (both feature teamLab)." } }
      ]
    },
    {
      code: "F", pick: "alt", hours: { zh: "全日", en: "Full day" }, walk: 3,
      title: { zh: "迪士尼", en: "Disney" },
      why: { zh: "目前未排入行程。如想前往，可替換 22 日。聖誕活動舉行至 12 月 25 日。", en: "Not in the current schedule; it could replace 22 Dec if wanted. Christmas events run until 25 Dec." },
      items: [
        { time: { zh: "全日", en: "All day" }, place: "disney" },
        { type: "tbd", text: { zh: "去迪士尼海洋還是迪士尼樂園？", en: "DisneySea or Disneyland?" } },
        { type: "note", text: { zh: "22 日的門票比 24、25 日便宜。看完夜間表演後不宜再趕往遠處的餐廳，翌日早上宜安排輕鬆些。", en: "22 Dec tickets are cheaper than 24–25. No far-away dinner booking after the night show; keep the next morning easy." } }
      ]
    },
    {
      code: "G", pick: "alt", hours: { zh: "兩日一夜", en: "2 days, 1 night" }, walk: 2,
      title: { zh: "箱根溫泉一晚", en: "Hakone onsen overnight" },
      why: { zh: "已預訂富士吉田溫泉（23–24 日），暫時不需要去箱根，保留作參考。", en: "We've booked the Fujiyoshida ryokan (23–24 Dec), so Hakone isn't needed for now. Kept for reference." },
      items: [
        { type: "leg", from: { zh: "新宿", en: "Shinjuku" }, to: { zh: "箱根湯本", en: "Hakone-Yumoto" }, via: { zh: "小田急浪漫特快", en: "Odakyu Romancecar" }, dur: "80 min" },
        { type: "leg", from: { zh: "箱根湯本", en: "Hakone-Yumoto" }, to: { zh: "強羅", en: "Gora" }, via: { zh: "登山電車，再轉酒店接駁車", en: "Mountain railway, then hotel shuttle" }, dur: "~40 min" },
        { time: { zh: "第一晚", en: "Night 1" }, place: "tenyu", sub: { zh: "或其他溫泉旅館", en: "Or another ryokan" } },
        { time: { zh: "第二日", en: "Day 2" }, place: "hakoneShrine", sub: { zh: "湖邊的紅色鳥居，之後返回東京", en: "Red gate on the lake, then back to Tokyo" } },
        { type: "note", text: { zh: "前往箱根當天不宜再去市場。返回東京當晚不作安排。", en: "No market stop on the way there. Keep the return evening free." } },
        { type: "tbd", text: { zh: "在箱根住一晚，還是多留東京一天？", en: "One night in Hakone, or an extra day in Tokyo?" } }
      ]
    },
    {
      code: "K", pick: "suggested", hours: "6–8", walk: 2,
      title: { zh: "分頭行動，新宿共進晚餐", en: "Split day, dinner together in Shinjuku" },
      why: { zh: "John 前往秋葉原與中野；Ben、Christine、Vanjai 不必陪同逛模型店，可自行在新宿遊覽。晚上大家在新宿會合用餐。", en: "John does Akihabara and Nakano; Ben, Christine and Vanjai needn't follow him round hobby shops and can explore Shinjuku. Everyone meets in Shinjuku for dinner." },
      items: [
        { type: "branches", mode: "split", options: [
          { label: { zh: "John", en: "John" }, items: [
            { time: { zh: "上午", en: "Morning" }, place: "akiba", sub: { zh: "電器、模型、動漫店", en: "Electronics, models, anime shops" } },
            { time: { zh: "中午", en: "Midday" }, place: "honda", sub: { zh: "John 獨自吃拉麵，可能需要排隊", en: "John's solo ramen; may need to queue" } },
            { type: "leg", from: { zh: "秋葉原", en: "Akihabara" }, to: { zh: "中野", en: "Nakano" }, via: { zh: "JR 中央・總武線", en: "JR Chuo-Sobu Line" }, dur: "30 min" },
            { time: { zh: "下午", en: "Afternoon" }, place: "nakano", sub: { zh: "出站步行 5 分鐘", en: "5 min walk from the station" } }
          ] },
          { label: { zh: "Ben、Christine、Vanjai", en: "Ben, Christine, Vanjai" }, items: [
            { time: { zh: "下午", en: "Afternoon" }, place: "shinjuku", sub: { zh: "購物、看夜景，自行決定", en: "Shopping and city views, your choice" } }
          ] }
        ] },
        { time: { zh: "晚餐", en: "Dinner" }, place: "shinjuku", sub: { zh: "四人在新宿會合用餐", en: "All four meet in Shinjuku for dinner" } },
        { type: "note", text: { zh: "若拉麵或購物耽擱，晚餐時間可彈性處理。", en: "Keep dinner flexible in case the ramen queue or shopping runs late." } }
      ]
    },
    {
      code: "L", pick: "suggested", hours: "4–7", walk: 2,
      title: { zh: "澀谷、代官山、惠比壽", en: "Shibuya, Daikanyama, Ebisu" },
      why: { zh: "若 B 在青山結束，這天便可好好遊覽澀谷。代官山由澀谷步行約 15 分鐘，惠比壽是晚餐的好去處。", en: "A proper Shibuya day if B ends in Aoyama. Daikanyama is a 15-minute walk from Shibuya, and Ebisu is a good dinner area." },
      items: [
        { time: { zh: "下午", en: "Afternoon" }, place: "shibuya" },
        { time: { zh: "黃昏", en: "Dusk" }, place: "daikanyama", sub: { zh: "小店、書店、咖啡店", en: "Boutiques, bookshop, cafés" } },
        { time: { zh: "晚餐", en: "Dinner" }, place: "ebisu", sub: { zh: "視乎當日地點選擇", en: "Choose near the day’s finish" } },
        { type: "note", text: { zh: "若住在澀谷，可作為抵達日或休息日。若 B 已在澀谷結束則毋須安排。", en: "Could be a light arrival or rest day if staying in Shibuya. Skip it if B already ended in Shibuya." } }
      ]
    },
    {
      code: "H", pick: "alt", hours: "7–9", walk: 3,
      title: { zh: "鎌倉一日遊", en: "Kamakura day trip" },
      why: { zh: "古都風光，可代替多一天在東京逛街。", en: "Historic town, instead of another Tokyo shopping day." },
      items: [
        { type: "leg", from: { zh: "東京站", en: "Tokyo Station" }, to: { zh: "鎌倉", en: "Kamakura" }, via: { zh: "JR", en: "JR" }, dur: "55 min" },
        { time: { zh: "上午", en: "Morning" }, place: "hachimangu" },
        { time: { zh: "下午", en: "Afternoon" }, place: "daibutsu", sub: { zh: "須轉乘江之電", en: "Change to the local Enoden line" } }
      ]
    },
    {
      code: "I", pick: "alt", hours: "6–8", walk: 2,
      title: { zh: "橫濱一日遊", en: "Yokohama day trip" },
      why: { zh: "海港景色加上中華街美食，比鎌倉輕鬆。", en: "Harbour views and Chinatown food; lighter than Kamakura." },
      items: [
        { time: { zh: "下午", en: "Afternoon" }, place: "minatomirai", sub: { zh: "由東京市中心出發不需一小時", en: "Under an hour from central Tokyo" } },
        { time: { zh: "晚上", en: "Evening" }, place: "chinatown" }
      ]
    },
    {
      code: "J", pick: "alt", hours: "4–6", walk: 1,
      title: { zh: "慢活一日", en: "Slow day" },
      why: { zh: "散步、咖啡店、小店。適合在迪士尼或箱根之後休息。", en: "Strolls, cafés and small shops. A rest day after Disney or Hakone." },
      items: [
        { type: "branches", mode: "or", options: [
          { label: { zh: "西面：吉祥寺", en: "West: Kichijoji" }, items: [ { place: "kichijoji" } ] },
          { label: { zh: "北面：谷中・根津", en: "North: Yanaka · Nezu" }, items: [ { place: "yanaka", sub: { zh: "可與上野同遊", en: "Pairs with Ueno" } } ] }
        ] }
      ]
    }
  ],

  extras: {
    title: { zh: "其他可加入的地方", en: "Other places we could fit in" },
    intro: { zh: "不必另用一整天，可安排在其他行程或晚上。", en: "These don't need a full day; they can slot into other plans or evenings." },
    items: [
      { place: "shinjuku", sub: { zh: "K 日分頭行動時前往，或住在新宿時於晚上前往", en: "During split day K, or an evening if staying in Shinjuku" } },
      { place: "roppongi", sub: { zh: "E 的其中一個結尾", en: "One of E's finishes" } },
      { place: "ueno", sub: { zh: "A 的其中一條路線，或與谷中同遊", en: "One of A's routes, or with Yanaka" } },
      { place: "odaiba", sub: { zh: "聖誕節後可代替 D 的聖誕市集", en: "Instead of D's Christmas market after Christmas" } },
      { place: "dawn", sub: { zh: "可安排在銀座或東京站附近的一天，約一至兩小時", en: "Fits a Ginza or Tokyo Station day, one to two hours" } }
    ]
  },

  hotels: [
    {
      place: "besshosasa", status: "booked",
      area: { zh: "富士吉田 · 富士山附近", en: "Fujiyoshida · near Mt Fuji" },
      facts: [
    { title: { zh: "哪幾天同行", en: "Who's there when" }, text: { zh: "20–26 日四人同行；27 日 Ben 與 Christine 返回香港；28–29 日 John 與 Vanjai 自由行，30 日回程。", en: "All four together 20–26 Dec; Ben and Christine fly home on the 27th; John and Vanjai have 28–29 Dec to themselves and leave on the 30th." } },
        { zh: "已有兩張 Agoda 訂房確認", en: "Two Agoda booking confirmations received" },
        { zh: "須以完整憑證核對入住日期、房型及房號", en: "Check the full vouchers for stay dates, room types and numbers" },
        { zh: "此酒店位於富士吉田，並非箱根", en: "This hotel is in Fujiyoshida, not Hakone" }
      ],
      note: { zh: "計劃把下午、晚上及翌日早上留在旅館泡溫泉、觀賞富士山；交通及房間景觀待完整憑證後確定。", en: "Keep the afternoon, evening and next morning for the ryokan, bath and Fuji view; transport and the exact room view need the full vouchers." }
    },
    {
      place: "blossom", status: "first",
      area: { zh: "東京・新橋／日比谷", en: "Tokyo · Shinbashi / Hibiya" },
      facts: [
        { zh: "東京住宿暫定此酒店；尚未有訂房確認", en: "Likely Tokyo base; no booking confirmation yet" },
        { zh: "JR 新橋站日比谷口步行約 5 分鐘；內幸町站約 2 分鐘", en: "About 5 min from JR Shinbashi Hibiya Exit; 2 min from Uchisaiwaicho" },
        { zh: "入住 15:00；退房 11:00", en: "Check-in 15:00; check-out 11:00" },
        { zh: "東京住宿暫定：至 26 日晚需要兩間房（富士山當晚另計）；27–29 日晚 John 與 Vanjai 需要一間房", en: "Tokyo stay plan: two rooms for nights through 26 Dec (Fuji night to decide separately); one room for John and Vanjai on 27–29 Dec" }
      ],
      note: { zh: "入住富士山旅館當晚，東京的房間是保留還是退房並寄存行李，須待日期及房價確認後決定。", en: "Whether to keep the Tokyo rooms during the Fuji night or check out and store luggage depends on the voucher dates and price." }
    },
    {
      place: "sequence", status: "idea",
      area: { zh: "澀谷・原宿之間", en: "Between Shibuya and Harajuku" },
      facts: [
        { zh: "步行至澀谷站 3–7 分鐘，至明治神宮前站 8 分鐘", en: "3–7 min walk to Shibuya Station, 8 min to Meiji-jingumae" },
        { zh: "下午 5 時才可入住，下午 2 時退房", en: "Check-in 17:00, check-out 14:00" },
        { zh: "房間每兩天清潔一次", en: "Rooms cleaned every two days" }
      ],
      note: { zh: "位置佳、富氣氛。但入住時間很晚，抵達當日須留意。前往東邊（淺草、築地）車程較長。", en: "Great location and feel. Late check-in matters on arrival day and after Hakone. East-side days need longer train rides." }
    },
    {
      place: "tokyustay", status: "idea",
      area: { zh: "新宿東面", en: "East Shinjuku" },
      facts: [
        { zh: "東新宿站步行 3 分鐘；並非 JR 新宿站", en: "3 min to Higashi-shinjuku Station; not at JR Shinjuku itself" },
        { zh: "房間設有洗衣乾衣機及微波爐", en: "In-room washer/dryer and microwave" },
        { zh: "雙床房 23–25 平方米，設有相連房", en: "Twin rooms 23–25 m², adjoining rooms exist" }
      ],
      note: { zh: "住 10 晚十分實用，可以洗衣。往中野及乘車往箱根都很方便。", en: "Practical for 10 nights with laundry. Handy for Nakano and the Hakone train." }
    },
    {
      place: "stream", status: "idea",
      area: { zh: "澀谷站上蓋", en: "Above Shibuya Station" },
      facts: [
        { zh: "與澀谷站直接相連，攜帶行李最方便", en: "Directly connected to Shibuya Station; easiest with luggage" },
        { zh: "下午 2 時入住，上午 11 時退房", en: "Check-in 14:00, check-out 11:00" },
        { zh: "雙床房 30 平方米起", en: "Twin rooms from 30 m²" }
      ],
      note: { zh: "較高級。房間不保證可看到澀谷十字路口，須另行查詢。", en: "The premium option. Rooms don't guarantee a Shibuya Crossing view; ask before paying extra." }
    }
  ],

  food: [
    {
      title: { zh: "John 獨自品嚐的拉麵", en: "John's solo ramen" },
      intro: { zh: "東京拉麵大賞 (TRY) 得獎店。", en: "Tokyo Ramen of the Year (TRY) winners." },
      items: [
        { place: "honda", plan: "K", kind: { zh: "醬油沾麵", en: "Shoyu tsukemen" }, status: "first", note: { zh: "可網上預約「優先到店時間」，但仍可能需要等候。逢星期三休息。", en: "Can request a priority arrival time online; may still wait. Closed Wednesdays." } },
        { place: "hachigo", plan: "C", kind: { zh: "鹽味拉麵，法國廚師背景", en: "Shio ramen, French-chef background" }, price: { zh: "訂位費 ¥500", en: "¥500 booking fee" }, status: "first", note: { zh: "每週六早上 9 時（日本時間）開放下一週的訂位。", en: "Bookings for the following week open Saturdays 9:00 Japan time." } },
        { place: "seishin", kind: { zh: "2025 新店大獎 · 落合（中野附近）", en: "2025 newcomer grand prize · Ochiai (near Nakano)" }, status: "idea", note: { zh: "只有 8 個座位，不接受訂位，可能需要長時間排隊。", en: "Eight seats, no reservations, possibly a long queue." } }
      ]
    },
    {
      title: { zh: "四人晚餐候選（最新）", en: "Four-person dinner targets (current)" },
      intro: { zh: "10 月 15 日更新：去年訂過的餐廳均須重新預約。以下五間是候選，不是五頓已安排的晚餐。", en: "Updated 15 Oct: restaurants booked for last year's cancelled trip need new reservations. These five are choices, not five scheduled meals." },
      items: [
        { place: "ushigoro", kind: { zh: "銀座燒肉 · 最適合 26 日", en: "Ginza yakiniku · best on 26 Dec" }, price: { zh: "套餐每位約 ¥25,000–32,000 + 10% 服務費", en: "Courses about ¥25,000–32,000 pp + 10% service" }, status: "first", note: { zh: "網上表格可選 26 日 18:30 四人；尚未訂位。", en: "Form allowed four at 18:30 on 26 Dec; not booked." } },
        { place: "largent", kind: { zh: "法國菜 · 霞關 · 最適合 22 日", en: "French · Kasumigaseki · best on 22 Dec" }, price: { zh: "聖誕套餐每位 ¥28,600（最終金額以付款頁為準）", en: "Christmas course ¥28,600 pp (check final total at checkout)" }, status: "first", note: { zh: "已搬離銀座。網上表格可選 22 日 18:30 四人；尚未訂位。", en: "Moved from Ginza. Form allowed four at 18:30 on 22 Dec; not booked." } },
        { place: "azur", kind: { zh: "法國菜 · 西麻布", en: "French · Nishiazabu" }, price: { zh: "節日套餐每位 ¥41,800 + 服務費", en: "Festive course ¥41,800 pp + service" }, status: "idea", note: { zh: "22 日 20:00 可在網上表格選四人，惟須特別轉車前往；尚未訂位。", en: "Form allowed four at 20:00 on 22 Dec, but needs a separate transfer; not booked." } },
        { place: "yamashina", kind: { zh: "鐵板燒 · 銀座 · 最適合 26 日", en: "Teppanyaki · Ginza · best on 26 Dec" }, price: { zh: "近江牛及海鮮套餐每位約 ¥22,000（含稅）", en: "Omi beef and seafood course about ¥22,000 pp incl. tax" }, status: "idea", note: { zh: "10 月 14 日預約日曆只開放至 12 月 14 日；26 日仍未可查。", en: "On 14 Oct the booking calendar reached only 14 Dec; 26 Dec cannot yet be checked." } },
        { place: "sezanne", kind: { zh: "法國菜 · 丸之內 · 26 日候選", en: "French · Marunouchi · 26 Dec option" }, price: { zh: "節日套餐每位 ¥75,900", en: "Festive course ¥75,900 pp" }, status: "idea", note: { zh: "12 月 23–31 日只供應節日套餐（四人約 ¥303,600，未計飲品）；四人空位未查證。", en: "Festive course only 23–31 Dec; four seats unverified." } }
      ]
    },
    {
      title: { zh: "John 與 Vanjai 兩人晚餐", en: "John and Vanjai's dinners" },
      intro: { zh: "目標是 12 月 28 或 29 日；27 日先留給 Ben 與 Christine 回程。", en: "Aim for 28 or 29 Dec; keep the 27th light for Ben and Christine's departure." },
      items: [
        { place: "maz", kind: { zh: "秘魯創意菜 · 紀尾井町", en: "Creative Peruvian · Kioicho" }, price: { zh: "每位 ¥33,000（含稅）+ 10% 服務費", en: "¥33,000 pp incl. tax + 10% service" }, status: "first", note: { zh: "12 月訂位按最新通知於 10 月 15 日中午 12 時（日本時間）開放；尚未訂位。", en: "December release is scheduled for 15 Oct at noon Japan time; no table has been confirmed." } },
        { place: "maerge", kind: { zh: "現代法國菜 · 南青山", en: "Modern French · Minami-Aoyama" }, status: "first", note: { zh: "12 月訂位按現行規則於 11 月 1 日開放；尚未訂位。", en: "December bookings open 1 Nov under current policy; not booked." } }
      ]
    },
    {
      title: { zh: "Christine 想吃的", en: "Christine's picks" },
      empty: { zh: "Christine 有想品嚐的餐廳嗎？請告訴我們，我們會安排在行程中。", en: "Anywhere Christine would like to eat? Let us know and we'll fit it in." }
    },
    {
      title: { zh: "晚飯後喝一杯（Ben 與 Christine）", en: "A drink after dinner (Ben and Christine)" },
      intro: { zh: "可選的兩人晚間活動，全部尚未訂位；12 月的營業時間及座位待確認。", en: "Optional evenings for two. None booked; December hours and seats to check." },
      items: [
        { place: "benfiddich", kind: { zh: "創意雞尾酒 · 西新宿", en: "Inventive cocktails · west Shinjuku" }, note: { zh: "21 日新宿晚餐後；15 席，設 19:00、21:00、23:00 預約時段", en: "After a Shinjuku dinner on the 21st; 15 seats, sittings at 19:00, 21:00 and 23:00" } },
        { place: "mementomori", kind: { zh: "可可及植物雞尾酒 · 虎之門之丘", en: "Cacao and botanical cocktails · Toranomon Hills" }, note: { zh: "22 日若在 L'ARGENT 晚餐，可再前往虎之門之丘", en: "Close by if dinner on the 22nd is at L'ARGENT" } },
        { place: "sotoroku", kind: { zh: "葡萄酒、清酒、威士忌 · 酒店內", en: "Wine, sake, whisky · in the hotel" }, note: { zh: "最方便的後備選擇；23:00 關門（22:30 最後入場）", en: "The easiest fallback; closes 23:00 (last entry 22:30)" } },
        { place: "imperialbar", kind: { zh: "經典雞尾酒 · 帝國酒店", en: "Classic cocktails · Imperial Hotel" }, note: { zh: "營業至午夜；晚上不設預約，即場候位", en: "Open to midnight; evening is walk-in only" } },
        { place: "peterbar", kind: { zh: "夜景、雞尾酒及葡萄酒 · 半島酒店", en: "Views, cocktails and wine · The Peninsula" }, note: { zh: "24 或 26 日；不設預約、不收服務費", en: "The 24th or 26th; no reservations or cover charge" } },
        { place: "mixologysalon", kind: { zh: "日本茶雞尾酒 · GINZA SIX", en: "Japanese tea cocktails · GINZA SIX" }, note: { zh: "26 日銀座；只有 8 席，宜預早查兩人空位", en: "Ginza on the 26th; only 8 seats, check a two-person slot early" } }
      ]
    },
    {
      title: { zh: "早餐・咖啡・午餐", en: "Breakfast · coffee · lunch" },
      intro: { zh: "毋須訂位，路過即可光顧。", en: "Walk-in places, no booking needed." },
      sub: [
        {
          title: { zh: "銀座・日比谷", en: "Ginza · Hibiya" }, plan: "C",
          items: [
            { place: "fransuya", kind: { zh: "早餐 · 早上 8 時開門", en: "Breakfast · opens 8:00" } },
            { place: "petitmec", kind: { zh: "麵包早餐 · 早上 8 時開門", en: "Bakery breakfast · opens 8:00" } },
            { place: "coffeerin", kind: { zh: "咖啡 · 10 時開門", en: "Coffee · opens 10:00" } },
            { place: "hanayama", kind: { zh: "烏冬午餐 · 11 時開門", en: "Udon lunch · opens 11:00" }, note: { zh: "不接受訂位，購票後排隊。", en: "No bookings; ticket machine queue." } },
            { place: "nanakura", kind: { zh: "平日午餐 · 新橋", en: "Weekday lunch · Shimbashi" } }
          ]
        },
        {
          title: { zh: "東京站", en: "Tokyo Station" }, plan: "C",
          items: [
            { place: "viron", kind: { zh: "麵包店 · 9 時開門", en: "Bakery · opens 9:00" } },
            { place: "burdigala", kind: { zh: "麵包咖啡 · 站內 · 7 時開門", en: "Bakery café · inside the station · opens 7:00" } }
          ]
        },
        {
          title: { zh: "麻布台", en: "Azabudai" }, plan: "E",
          items: [
            { place: "landemaine", kind: { zh: "麵包早餐 · 8 時開門", en: "Bakery breakfast · opens 8:00" } }
          ]
        },
        {
          title: { zh: "池袋", en: "Ikebukuro" },
          items: [
            { place: "anpuku", kind: { zh: "暫無前往池袋的行程", en: "No Ikebukuro day planned yet" } }
          ]
        }
      ]
    }
  ],

  facts: [
    { title: { zh: "聖誕活動舉行至 25 日", en: "Christmas ends on the 25th" }, text: { zh: "迪士尼聖誕活動、芝公園及新豐洲聖誕市集，全部於 12 月 25 日結束。", en: "Disney Christmas and both Christmas markets end on 25 Dec." } },
    { title: { zh: "豐洲市場", en: "Toyosu Market" }, text: { zh: "23 日休市；27 日（星期日）特別開放。", en: "Closed 23 Dec; special Sunday opening on 27 Dec." } },
    { title: { zh: "東京國立博物館", en: "Tokyo National Museum" }, text: { zh: "此段時間不宜前往：22–25 日僅部分開放，26–31 日休館。", en: "Not a good fit: only partly open 22–25 Dec, closed 26–31 Dec." } },
    { title: { zh: "每天兩個區", en: "Two areas a day" }, text: { zh: "每天約遊覽兩個區，中間用餐和乘車，不會太累。", en: "About two areas a day, with a meal and travel between, keeps the pace comfortable." } },
    { title: { zh: "時間為估計", en: "Times are estimates" }, text: { zh: "除註明「門到門」的行程外，所列時數僅為約數。待選定東京酒店、核實富士住宿日期後再準確計算。", en: "Durations are rough, not door to door. We'll firm them up after choosing the Tokyo hotel and verifying the Fuji stay dates." } }
  ]
};
