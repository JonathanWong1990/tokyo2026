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
  version: 11,
  updated: "2026-10-12",
  changes: {
    zh: "有每日行程喇！20–26 日四個人一齊，每日去邊、做咩都排好咗（全部仲係計劃，未訂）。23–24 日住富士吉田溫泉旅館。東京暫定住 THE BLOSSOM HIBIYA。Ben 同 Christine 27 日返；John 同 Vanjai 30 日返。",
    en: "We now have a day-by-day plan! 20–26 Dec for all four of us, with where we go each day (still plans, nothing booked). 23–24 Dec at the Fujiyoshida ryokan. Tokyo base likely THE BLOSSOM HIBIYA. Ben and Christine fly home on the 27th; John and Vanjai on the 30th."
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

    // Restaurants
    honda:     { zh: "麵處 本田（秋葉原本店）", en: "Mendokoro Honda, Akihabara", ja: "麺処 ほん田 秋葉原本店", q: "Mendokoro Honda Akihabara", url: "https://www.tablecheck.com/en/shops/mendokoro-honda-akihabara/reserve" },
    hachigo:   { zh: "銀座 八五", en: "Ginza Hachigo", ja: "銀座 八五", q: "Ginza Hachigo ramen", url: "https://www.tablecheck.com/en/shops/ginza-hachigou/reserve" },
    denkushi:  { zh: "DEN KUSHI FLORI", en: "DEN KUSHI FLORI", ja: "デンクシフロリ", q: "DEN KUSHI FLORI", url: "https://www.denkushiflori.com/" },
    florilege: { zh: "Florilège", en: "Florilège", ja: "フロリレージュ 麻布台ヒルズ", q: "Florilege Azabudai Hills", url: "https://www.aoyama-florilege.jp/en/reservations" },
    bistro0711:{ zh: "0711 GiNZA BiSTRO", en: "0711 GiNZA BiSTRO", ja: "銀座8丁目 0711 GiNZA BiSTRO", q: "0711 GiNZA BiSTRO", url: "https://www.0711ginzabistro.com/" },
    largent:   { zh: "L'ARGENT", en: "L'ARGENT", ja: "ラルジャン 霞が関", q: "L'ARGENT Kasumigaseki", url: "https://largent.tokyo/en/reservation/" },
    maz:       { zh: "MAZ", en: "MAZ", ja: "東京ガーデンテラス紀尾井町 MAZ", q: "MAZ Tokyo Garden Terrace Kioicho", url: "https://maztokyo.jp/?lang=en" },
    ushigoro:  { zh: "USHIGORO S. 銀座", en: "USHIGORO S. Ginza", ja: "銀座 USHIGORO S.", q: "USHIGORO S. GINZA", url: "https://ushigoro-s.com/menu.html" },
    seishin:   { zh: "Menya Seishin", en: "Menya Seishin", q: "Menya Seishin Ochiai" },
    sincere:   { zh: "Sincère", en: "Sincère", q: "Sincere restaurant Sendagaya", url: "https://www.tablecheck.com/ja/shops/sincere/reserve" },
    lature:    { zh: "LATURE", en: "LATURE", q: "LATURE Shibuya", url: "https://www.lature.jp/" },
    monolith:  { zh: "MONOLITH", en: "MONOLITH", q: "MONOLITH Shibuya French", url: "https://neo-monolith.com/information/" },
    maerge:    { zh: "mærge", en: "mærge", q: "maerge Minami-Aoyama", url: "https://maerge.tokyo/access/" },
    narisawa:  { zh: "NARISAWA", en: "NARISAWA", q: "NARISAWA Minami-Aoyama", url: "https://www.narisawa-yoshihiro.com/reservation" },
    esquisse:  { zh: "ESqUISSE", en: "ESqUISSE", q: "ESqUISSE Ginza", url: "https://www.esquissetokyo.com/en/reserve/" },
    sezanne:   { zh: "SÉZANNE", en: "SÉZANNE", q: "SEZANNE Four Seasons Marunouchi", url: "https://www.sezanne.tokyo/" },
    gomei:     { zh: "秋田牛鐵板燒 銀座 Gomei", en: "Akita Beef Teppanyaki Ginza Gomei", q: "Akita Beef Teppanyaki Ginza Gomei", url: "https://tabelog.com/tokyo/A1301/A130101/13187289/" },
    yamashina: { zh: "本店 山科", en: "Honten Yamashina", q: "Honten Yamashina Ginza", url: "https://honten-yamashina.jp/" },
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

    azur:      { zh: "AZUR et MASA UEKI", en: "AZUR et MASA UEKI", ja: "アズール エ マサ ウエキ 西麻布", q: "AZUR et MASA UEKI", url: "https://restaurant-azur.com/" }
  },

  calendar: [
    { date: "2026-12-20", who: "all", title: { zh: "抵達東京", en: "Arrive in Tokyo" },
      items: [
        { type: "leg", from: { zh: "香港", en: "Hong Kong" }, to: { zh: "東京", en: "Tokyo" }, via: { zh: "航班待定", en: "Flight TBC" }, dur: "~4h" },
        { time: { zh: "入住", en: "Check in" }, place: "blossom", sub: { zh: "暫定，未訂", en: "Likely, not booked" } },
        { time: { zh: "晚餐", en: "Dinner" }, place: "shinbashi", sub: { zh: "酒店附近食居酒屋", en: "Izakaya near the hotel" } },
        { time: { zh: "夜晚", en: "Evening" }, place: "hibiya", sub: { zh: "睇聖誕燈飾；早到可以行吓商場", en: "Christmas lights; browse the shops if we arrive early" }, optional: true },
        { type: "tbd", text: { zh: "航班幾點到未知，夜晚安排要跟航班調整。", en: "Arrival time unknown; the evening depends on the flight." } }
      ] },
    { date: "2026-12-21", who: "all", plan: "B", title: { zh: "明治神宮、代代木公園拖狗、新宿", en: "Meiji Jingu, a dog walk in Yoyogi Park, Shinjuku" },
      items: [
        { time: { zh: "朝早", en: "Morning" }, place: "meiji", sub: { zh: "喺神社入面大約一個鐘", en: "About an hour at the shrine" } },
        { time: { zh: "11:00", en: "11:00" }, place: "dogheart", sub: { zh: "租狗仔一個鐘", en: "Borrow a dog for an hour" }, status: "tobook" },
        { time: { zh: "", en: "" }, place: "yoyogi", sub: { zh: "拖狗仔喺公園散步", en: "Walk the dog in the park" } },
        { time: { zh: "下晝", en: "Afternoon" }, place: "shinjuku", sub: { zh: "行街，夜晚睇歌舞伎町燈光、夾公仔、食晚餐", en: "Shopping, then Kabukicho lights, crane games and dinner" } },
        { type: "note", text: { zh: "朝早行路比較多：由神社行去公園另一邊嘅狗仔舖大約 25–35 分鐘。", en: "A fairly active morning: about 25–35 minutes on foot from the shrine to the dog shop." } },
        { type: "tbd", text: { zh: "狗仔要打電話預約，12 月有冇位仲要確認。", en: "The dog walk is booked by phone; December availability still to check." } }
      ] },
    { date: "2026-12-22", who: "all", plan: "A", title: { zh: "淺草（彈性日）", en: "Asakusa (flexible day)" },
      items: [
        { time: { zh: "上晝", en: "Morning" }, place: "sensoji", sub: { zh: "淺草寺同附近老街", en: "The temple and old streets" } },
        { time: { zh: "下晝", en: "Afternoon" }, place: "sumoclub", sub: { zh: "坐低睇兩個鐘相撲表演，食相撲火鍋", en: "Two-hour seated sumo show with chanko hotpot" }, optional: true },
        { time: { zh: "傍晚", en: "Early evening" }, place: "sakecenter", sub: { zh: "酒店附近試清酒，6 點前", en: "Sake tasting near the hotel, before 18:00" }, optional: true },
        { type: "tbd", text: { zh: "呢日主要節目未定：想唔想睇相撲表演？", en: "The main event is open: would you like the sumo show?" } }
      ] },
    { date: "2026-12-23", who: "all", title: { zh: "去富士吉田，住溫泉旅館", en: "To Fujiyoshida for a night at the ryokan" },
      items: [
        { type: "leg", from: { zh: "東京", en: "Tokyo" }, to: { zh: "富士吉田", en: "Fujiyoshida" }, via: { zh: "交通方式待定", en: "Transport to be decided" }, dur: "~2h" },
        { time: { zh: "下晝", en: "Afternoon" }, place: "besshosasa", sub: { zh: "浸溫泉、飲少少酒、食晚餐", en: "Hot spring, a little wine, dinner" }, status: "booked" },
        { type: "tbd", text: { zh: "訂房截圖睇唔到日期，要等完整憑證確認係咪 23–24 號。", en: "The booking screenshots cut off the dates; confirm 23–24 Dec from the full vouchers." } }
      ] },
    { date: "2026-12-24", who: "all", title: { zh: "富士山，然後返東京", en: "Mt Fuji, then back to Tokyo" },
      items: [
        { time: { zh: "朝早", en: "Morning" }, place: "besshosasa", sub: { zh: "旅館早餐，退房", en: "Ryokan breakfast, check out" } },
        { type: "branches", mode: "or", options: [
          { label: { zh: "忍野八海", en: "Oshino Hakkai" }, items: [ { place: "oshino", sub: { zh: "離酒店最近", en: "Closest to the hotel" } } ] },
          { label: { zh: "河口湖", en: "Lake Kawaguchi" }, items: [ { place: "kawaguchiko", sub: { zh: "湖景望富士山", en: "Fuji across the lake" } } ] }
        ] },
        { type: "leg", from: { zh: "富士", en: "Fuji" }, to: { zh: "東京", en: "Tokyo" }, via: { zh: "交通方式待定", en: "Transport to be decided" }, dur: "~2h" },
        { time: { zh: "夜晚", en: "Evening" }, place: "hibiya", sub: { zh: "平安夜晚餐，睇聖誕燈飾", en: "Christmas Eve dinner and lights" } },
        { type: "note", text: { zh: "富士山淨係去一個地方。要安排行李同交通，預留塞車時間。", en: "Just one Fuji stop. Sort out luggage and transport, and allow for delays." } }
      ] },
    { date: "2026-12-25", who: "all", plan: "D", title: { zh: "豐洲：市場、足湯、teamLab、聖誕市集", en: "Toyosu: market, footbath, teamLab, Christmas market" },
      items: [
        { time: { zh: "朝早", en: "Morning" }, place: "toyosu", sub: { zh: "短短睇吓市場，可以食海鮮早餐", en: "A short look at the market, with an optional seafood breakfast" }, optional: true },
        { time: { zh: "上晝", en: "Late morning" }, place: "senkyaku", sub: { zh: "江戶風格美食街，8 樓免費足湯", en: "Edo-style food street and the free 8th-floor footbath" } },
        { time: { zh: "下晝", en: "Afternoon" }, place: "planets", sub: { zh: "大約兩個至兩個半鐘", en: "About 2–2½ hours inside" }, status: "tobook" },
        { time: { zh: "夜晚", en: "Evening" }, place: "shintoyosu", sub: { zh: "聖誕日係最後一晚", en: "Christmas Day is the last night" }, status: "tobook" },
        { type: "note", text: { zh: "攰嘅話，第一個唔去嘅係市場參觀。", en: "If tired, the market visit is the first thing to skip." } }
      ] },
    { date: "2026-12-26", who: "all", plan: "C", title: { zh: "築地、銀座茶道、金魚美術館", en: "Tsukiji, a Ginza tea ceremony, goldfish art" },
      items: [
        { time: { zh: "09:00", en: "09:00" }, place: "tsukiji", sub: { zh: "大約 9 點至 10 點半，熱鬧嘅美食街", en: "Roughly 9:00–10:30, the lively food lanes" } },
        { time: { zh: "", en: "" }, place: "uogashi", sub: { zh: "專業海鮮批發樓", en: "The professional seafood building" } },
        { time: { zh: "中午", en: "Midday" }, place: "chazen", sub: { zh: "45 分鐘茶道體驗", en: "45-minute tea ceremony" }, status: "tobook" },
        { time: { zh: "下晝", en: "Afternoon" }, place: "artaquarium", sub: { zh: "午餐之後去", en: "After lunch" } },
        { time: { zh: "夜晚", en: "Evening" }, place: "ginza", sub: { zh: "慢慢行街，食晚餐", en: "An unhurried browse and dinner" } },
        { type: "note", text: { zh: "應該係四個人一齊嘅最後一個完整日。", en: "Likely the last full day for all four of us." } },
        { type: "tbd", text: { zh: "茶道時段同美術館年尾開放時間要確認。", en: "Tea ceremony slot and the museum's holiday hours to confirm." } }
      ] },
    { date: "2026-12-27", who: "split", title: { zh: "Ben 同 Christine 回程", en: "Ben and Christine fly home" },
      items: [
        { type: "note", text: { zh: "Ben 同 Christine 返香港；John 同 Vanjai 留喺東京。航班時間待定。", en: "Ben and Christine fly back to Hong Kong; John and Vanjai stay in Tokyo. Flight times TBC." } }
      ],
      notes: [{ zh: "豐洲市場特別星期日開放", en: "Toyosu Market has a special Sunday opening" }] },
    { date: "2026-12-28", who: "jv", title: { zh: "John 同 Vanjai 自由行", en: "John and Vanjai's own day" },
      items: [ { type: "note", text: { zh: "Vanjai 揀；John 嘅秋葉原・中野日都係其中一個選擇。睇「其他選擇」。", en: "Vanjai's pick; John's Akihabara and Nakano day is one option. See Other options." } } ] },
    { date: "2026-12-29", who: "jv", title: { zh: "John 同 Vanjai 自由行", en: "John and Vanjai's own day" },
      items: [ { type: "note", text: { zh: "自由安排。", en: "Free to plan." } } ] },
    { date: "2026-12-30", who: "jv", title: { zh: "John 同 Vanjai 回程", en: "John and Vanjai fly home" },
      items: [ { type: "note", text: { zh: "航班時間待定，唔去遠。", en: "Flight time TBC; nothing far." } } ] }
  ],

  periods: [
    { from: "2026-12-20", to: "2026-12-26", title: { zh: "四個人一齊", en: "All four of us" }, hint: { zh: "Ben、Christine、John、Vanjai", en: "Ben, Christine, John, Vanjai" } },
    { from: "2026-12-27", to: "2026-12-30", title: { zh: "John 同 Vanjai", en: "John and Vanjai" }, hint: { zh: "Ben 同 Christine 27 日返香港", en: "Ben and Christine fly home on the 27th" } }
  ],

  ideas: [
    {
      code: "A", pick: "suggested", hours: "6–8", walk: 2,
      title: { zh: "東京東邊：淺草", en: "Eastern Tokyo: Asakusa" },
      why: { zh: "寺廟同老街。之後揀一個：上晴空塔睇全東京，或者去上野阿美橫丁行街市。", en: "Temple and old streets, then either the Skytree view or the Ueno street market." },
      items: [
        { type: "branches", mode: "or", options: [
          { label: { zh: "淺草 → 晴空塔", en: "Asakusa → Skytree" }, items: [
            { time: { zh: "上晝", en: "Morning" }, place: "sensoji", sub: { zh: "雷門、仲見世通小食", en: "Kaminarimon gate, Nakamise snack street" } },
            { time: { zh: "中午", en: "Midday" }, place: "sumida", sub: { zh: "沿河行過去，約 20 分鐘", en: "Riverside walk across, about 20 min" } },
            { time: { zh: "下晝", en: "Afternoon" }, place: "skytree", sub: { zh: "觀景台、下面商場", en: "Observation deck and the mall below" } }
          ] },
          { label: { zh: "上野 → 淺草", en: "Ueno → Asakusa" }, items: [
            { time: { zh: "上晝", en: "Morning" }, place: "ueno", sub: { zh: "街市、小食、平價貨", en: "Street market, snacks, bargains" } },
            { time: { zh: "下晝", en: "Afternoon" }, place: "sensoji", sub: { zh: "喺淺草完結", en: "Finish in Asakusa" } }
          ] }
        ] },
        { type: "note", text: { zh: "想喺淺草食 Hommage 晚餐，就要揀「上野 → 淺草」，喺淺草完結。", en: "For dinner at Hommage, take the Ueno → Asakusa route so the day ends in Asakusa." } }
      ]
    },
    {
      code: "B", pick: "suggested", hours: "5–7", walk: 2,
      title: { zh: "明治神宮，然後揀一個結尾", en: "Meiji Jingu, then pick a finish" },
      why: { zh: "由原宿出發，兩個方向都好順路。揀邊個視乎晚餐想喺邊度食。", en: "Both directions flow easily from Harajuku. Choose by where you want dinner." },
      items: [
        { time: { zh: "上晝", en: "Morning" }, place: "meiji", sub: { zh: "森林入面嘅神社，原宿站旁邊", en: "Forest shrine beside Harajuku Station" } },
        { type: "branches", mode: "or", options: [
          { label: { zh: "表參道・青山", en: "Omotesando · Aoyama" }, items: [
            { time: { zh: "下晝", en: "Afternoon" }, place: "omotesando", sub: { zh: "晚餐：DEN KUSHI FLORI、mærge、NARISAWA", en: "Dinner: DEN KUSHI FLORI, mærge, NARISAWA" } }
          ] },
          { label: { zh: "澀谷", en: "Shibuya" }, items: [
            { time: { zh: "夜晚", en: "Evening" }, place: "shibuya", sub: { zh: "晚餐：LATURE", en: "Dinner: LATURE" } }
          ] }
        ] },
        { type: "note", text: { zh: "三個區都去會太攰。夠精神先順便行過第三個。", en: "All three areas is too much; only pass through the third if everyone has energy." } }
      ]
    },
    {
      code: "C", pick: "suggested", hours: "5–7", walk: 2,
      title: { zh: "築地、銀座", en: "Tsukiji and Ginza" },
      why: { zh: "兩個區好近。John 去食銀座 八五 拉麵，其他人喺銀座行街。", en: "Two close areas. John has Ginza Hachigo ramen while the others browse Ginza." },
      items: [
        { time: { zh: "朝早", en: "Morning" }, place: "tsukiji", sub: { zh: "早餐食少少，留肚食拉麵", en: "Keep breakfast light if ramen is lunch" } },
        { time: { zh: "中午", en: "Midday" }, place: "ginza", sub: { zh: "John 自己食拉麵（銀座 八五），其他人行街", en: "John's solo ramen (Ginza Hachigo) while the others browse" } },
        { time: { zh: "夜晚", en: "Evening" }, place: "marunouchi", sub: { zh: "如果銀座冇訂晚餐，可以順便睇燈飾", en: "Only if there's no Ginza dinner booked" }, optional: true },
        { type: "note", text: { zh: "唔好同去箱根嗰日排喺同一日。", en: "Keep this separate from the Hakone travel day." } }
      ]
    },
    {
      code: "D", pick: "either", hours: "6–8", walk: 2,
      title: { zh: "豐洲：市場、teamLab Planets", en: "Toyosu: market and teamLab Planets" },
      why: { zh: "幾個地方都喺新豐洲附近，唔使走來走去。", en: "Everything is close to Shin-Toyosu." },
      items: [
        { time: { zh: "朝早", en: "Morning" }, place: "toyosu", sub: { zh: "睇魚市場，食海鮮", en: "Fish market and seafood" } },
        { time: { zh: "下晝", en: "Afternoon" }, place: "planets", sub: { zh: "沉浸式藝術，要赤腳行水", en: "Immersive art; you walk barefoot through water" } },
        { time: { zh: "夜晚", en: "Evening" }, place: "shintoyosu", sub: { zh: "25 日或之前先有", en: "Only on or before 25 Dec" }, optional: true },
        { type: "note", text: { zh: "聖誕之後，豐洲同 teamLab 已經夠一日；想多啲海景可以改去台場。", en: "After Christmas, Toyosu and teamLab are enough for the day; Odaiba is an option for more waterfront." } },
        { type: "tbd", text: { zh: "同 E 二揀一（兩個都係 teamLab）。要揀市場開門嘅日子。", en: "Pick D or E (both feature teamLab). Needs a day the market is open." } }
      ]
    },
    {
      code: "E", pick: "either", hours: "5–8", walk: 2,
      title: { zh: "麻布台，然後揀一個結尾", en: "Azabudai, then pick a finish" },
      why: { zh: "teamLab Borderless 之後，揀東京鐵塔聖誕市集，或者六本木藝術同晚餐。", en: "After teamLab Borderless, choose either Tokyo Tower's Christmas market or Roppongi for art and dinner." },
      items: [
        { time: { zh: "下晝", en: "Afternoon" }, place: "borderless", sub: { zh: "要預約入場時間", en: "Timed entry, book ahead" } },
        { type: "branches", mode: "or", options: [
          { label: { zh: "東京鐵塔・芝公園", en: "Tokyo Tower · Shiba Park" }, items: [
            { time: { zh: "黃昏", en: "Dusk" }, place: "tower" },
            { time: { zh: "夜晚", en: "Evening" }, place: "shiba", sub: { zh: "聖誕市集，開到 12 月 25 日", en: "Christmas market, until 25 Dec" } }
          ] },
          { label: { zh: "六本木・東京中城", en: "Roppongi · Tokyo Midtown" }, items: [
            { time: { zh: "夜晚", en: "Evening" }, place: "roppongi", sub: { zh: "晚餐：Métis、Bia、Héritage、AZUR", en: "Dinner: Métis, Bia, Héritage, AZUR" } }
          ] }
        ] },
        { type: "note", text: { zh: "淨係揀一個結尾。想喺麻布台食 Florilège，就留喺麻布台。", en: "Choose one finish only. For Florilège, stay in Azabudai for dinner." } },
        { type: "tbd", text: { zh: "同 D 二揀一（兩個都係 teamLab）。", en: "Pick D or E (both feature teamLab)." } }
      ]
    },
    {
      code: "F", pick: "alt", hours: { zh: "全日", en: "Full day" }, walk: 3,
      title: { zh: "迪士尼", en: "Disney" },
      why: { zh: "而家冇排入日程。想去嘅話可以代替 22 日。聖誕活動做到 12 月 25 日。", en: "Not in the current schedule; it could replace 22 Dec if wanted. Christmas events run until 25 Dec." },
      items: [
        { time: { zh: "全日", en: "All day" }, place: "disney" },
        { type: "tbd", text: { zh: "去迪士尼海洋定迪士尼樂園？", en: "DisneySea or Disneyland?" } },
        { type: "note", text: { zh: "22 日門票比 24、25 日平。睇完夜場唔好再趕去遠嘅餐廳，第二日朝早輕鬆啲。", en: "22 Dec tickets are cheaper than 24–25. No far-away dinner booking after the night show; keep the next morning easy." } }
      ]
    },
    {
      code: "G", pick: "alt", hours: { zh: "兩日一夜", en: "2 days, 1 night" }, walk: 2,
      title: { zh: "箱根溫泉一晚", en: "Hakone onsen overnight" },
      why: { zh: "已經訂咗富士吉田溫泉（23–24 日），箱根暫時唔需要。保留做參考。", en: "We've booked the Fujiyoshida ryokan (23–24 Dec), so Hakone isn't needed for now. Kept for reference." },
      items: [
        { type: "leg", from: { zh: "新宿", en: "Shinjuku" }, to: { zh: "箱根湯本", en: "Hakone-Yumoto" }, via: { zh: "小田急浪漫特快", en: "Odakyu Romancecar" }, dur: "80 min" },
        { type: "leg", from: { zh: "箱根湯本", en: "Hakone-Yumoto" }, to: { zh: "強羅", en: "Gora" }, via: { zh: "登山電車，再轉酒店接駁車", en: "Mountain railway, then hotel shuttle" }, dur: "~40 min" },
        { time: { zh: "第一晚", en: "Night 1" }, place: "tenyu", sub: { zh: "或者其他溫泉旅館", en: "Or another ryokan" } },
        { time: { zh: "第二日", en: "Day 2" }, place: "hakoneShrine", sub: { zh: "湖邊紅色鳥居，之後返東京", en: "Red gate on the lake, then back to Tokyo" } },
        { type: "note", text: { zh: "去箱根嗰日唔好再去市場。返東京嗰晚唔好排嘢。", en: "No market stop on the way there. Keep the return evening free." } },
        { type: "tbd", text: { zh: "箱根住一晚，定係多留東京一日？", en: "One night in Hakone, or an extra day in Tokyo?" } }
      ]
    },
    {
      code: "K", pick: "suggested", hours: "6–8", walk: 2,
      title: { zh: "分頭行，新宿食晚飯", en: "Split day, dinner together in Shinjuku" },
      why: { zh: "John 去秋葉原同中野；Ben、Christine、Vanjai 唔使跟住行模型舖，可以自己喺新宿逛。夜晚大家喺新宿會合食飯。", en: "John does Akihabara and Nakano; Ben, Christine and Vanjai needn't follow him round hobby shops and can explore Shinjuku. Everyone meets in Shinjuku for dinner." },
      items: [
        { type: "branches", mode: "split", options: [
          { label: { zh: "John", en: "John" }, items: [
            { time: { zh: "上晝", en: "Morning" }, place: "akiba", sub: { zh: "電器、模型、動漫舖", en: "Electronics, models, anime shops" } },
            { time: { zh: "中午", en: "Midday" }, place: "honda", sub: { zh: "John 自己食拉麵，可能要等位", en: "John's solo ramen; may need to queue" } },
            { type: "leg", from: { zh: "秋葉原", en: "Akihabara" }, to: { zh: "中野", en: "Nakano" }, via: { zh: "JR 中央・總武線", en: "JR Chuo-Sobu Line" }, dur: "30 min" },
            { time: { zh: "下晝", en: "Afternoon" }, place: "nakano", sub: { zh: "出站行 5 分鐘", en: "5 min walk from the station" } }
          ] },
          { label: { zh: "Ben、Christine、Vanjai", en: "Ben, Christine, Vanjai" }, items: [
            { time: { zh: "下晝", en: "Afternoon" }, place: "shinjuku", sub: { zh: "行街、睇夜景，自己決定", en: "Shopping and city views, your choice" } }
          ] }
        ] },
        { time: { zh: "晚餐", en: "Dinner" }, place: "shinjuku", sub: { zh: "四個人喺新宿會合食飯", en: "All four meet in Shinjuku for dinner" } },
        { type: "note", text: { zh: "拉麵或者行街搞耐咗，晚餐時間可以彈性啲。", en: "Keep dinner flexible in case the ramen queue or shopping runs late." } }
      ]
    },
    {
      code: "L", pick: "suggested", hours: "4–7", walk: 2,
      title: { zh: "澀谷、代官山、惠比壽", en: "Shibuya, Daikanyama, Ebisu" },
      why: { zh: "如果 B 喺青山完結，呢日就可以好好行澀谷。代官山由澀谷行過去約 15 分鐘，惠比壽係晚餐好地方。", en: "A proper Shibuya day if B ends in Aoyama. Daikanyama is a 15-minute walk from Shibuya, and Ebisu is a good dinner area." },
      items: [
        { time: { zh: "下晝", en: "Afternoon" }, place: "shibuya" },
        { time: { zh: "黃昏", en: "Dusk" }, place: "daikanyama", sub: { zh: "小店、書店、咖啡店", en: "Boutiques, bookshop, cafés" } },
        { time: { zh: "晚餐", en: "Dinner" }, place: "ebisu", sub: { zh: "或者澀谷嘅 LATURE", en: "Or LATURE in Shibuya" } },
        { type: "note", text: { zh: "如果住澀谷，可以做抵達日或者休息日。B 已經喺澀谷完結就唔使。", en: "Could be a light arrival or rest day if staying in Shibuya. Skip it if B already ended in Shibuya." } }
      ]
    },
    {
      code: "H", pick: "alt", hours: "7–9", walk: 3,
      title: { zh: "鎌倉一日遊", en: "Kamakura day trip" },
      why: { zh: "古都風景，代替多一日東京行街。", en: "Historic town, instead of another Tokyo shopping day." },
      items: [
        { type: "leg", from: { zh: "東京站", en: "Tokyo Station" }, to: { zh: "鎌倉", en: "Kamakura" }, via: { zh: "JR", en: "JR" }, dur: "55 min" },
        { time: { zh: "上晝", en: "Morning" }, place: "hachimangu" },
        { time: { zh: "下晝", en: "Afternoon" }, place: "daibutsu", sub: { zh: "要轉江之電", en: "Change to the local Enoden line" } }
      ]
    },
    {
      code: "I", pick: "alt", hours: "6–8", walk: 2,
      title: { zh: "橫濱一日遊", en: "Yokohama day trip" },
      why: { zh: "海港景色加中華街食嘢，比鎌倉輕鬆。", en: "Harbour views and Chinatown food; lighter than Kamakura." },
      items: [
        { time: { zh: "下晝", en: "Afternoon" }, place: "minatomirai", sub: { zh: "由東京市中心去唔使一個鐘", en: "Under an hour from central Tokyo" } },
        { time: { zh: "夜晚", en: "Evening" }, place: "chinatown" }
      ]
    },
    {
      code: "J", pick: "alt", hours: "4–6", walk: 1,
      title: { zh: "慢活一日", en: "Slow day" },
      why: { zh: "散步、咖啡店、小店。迪士尼或者箱根之後休息用。", en: "Strolls, cafés and small shops. A rest day after Disney or Hakone." },
      items: [
        { type: "branches", mode: "or", options: [
          { label: { zh: "西邊：吉祥寺", en: "West: Kichijoji" }, items: [ { place: "kichijoji" } ] },
          { label: { zh: "北邊：谷中・根津", en: "North: Yanaka · Nezu" }, items: [ { place: "yanaka", sub: { zh: "可以配上野", en: "Pairs with Ueno" } } ] }
        ] }
      ]
    }
  ],

  extras: {
    title: { zh: "其他可以加嘅地方", en: "Other places we could fit in" },
    intro: { zh: "唔使另外用一整日，可以放入其他行程或者夜晚。", en: "These don't need a full day; they can slot into other plans or evenings." },
    items: [
      { place: "shinjuku", sub: { zh: "K 日分頭行時去，或者住新宿嘅夜晚", en: "During split day K, or an evening if staying in Shinjuku" } },
      { place: "roppongi", sub: { zh: "E 嘅其中一個結尾", en: "One of E's finishes" } },
      { place: "ueno", sub: { zh: "A 嘅其中一條路線，或者配谷中", en: "One of A's routes, or with Yanaka" } },
      { place: "odaiba", sub: { zh: "聖誕之後代替 D 嘅聖誕市集", en: "Instead of D's Christmas market after Christmas" } },
      { place: "dawn", sub: { zh: "可以放喺銀座或者東京站附近嘅一日，一至兩個鐘", en: "Fits a Ginza or Tokyo Station day, one to two hours" } }
    ]
  },

  hotels: [
    {
      place: "besshosasa", status: "booked",
      area: { zh: "富士吉田 · 富士山附近", en: "Fujiyoshida · near Mt Fuji" },
      facts: [
    { title: { zh: "邊幾日一齊", en: "Who's there when" }, text: { zh: "20–26 日四個人一齊；27 日 Ben 同 Christine 返香港；28–29 日 John 同 Vanjai 自由行，30 日返。", en: "All four together 20–26 Dec; Ben and Christine fly home on the 27th; John and Vanjai have 28–29 Dec to themselves and leave on the 30th." } },
        { zh: "已有兩張 Agoda 訂房確認", en: "Two Agoda booking confirmations received" },
        { zh: "完整憑證要核對入住日期、房型同房號", en: "Check the full vouchers for stay dates, room types and numbers" },
        { zh: "呢間喺富士吉田，唔係箱根", en: "This hotel is in Fujiyoshida, not Hakone" }
      ],
      note: { zh: "打算留返下晝、夜晚同第二朝喺酒店浸溫泉、望富士山；交通同房間景觀要等完整憑證再定。", en: "Keep the afternoon, evening and next morning for the ryokan, bath and Fuji view; transport and the exact room view need the full vouchers." }
    },
    {
      place: "blossom", status: "first",
      area: { zh: "東京・新橋／日比谷", en: "Tokyo · Shinbashi / Hibiya" },
      facts: [
        { zh: "東京住宿暫定選呢間；未有訂房確認", en: "Likely Tokyo base; no booking confirmation yet" },
        { zh: "JR 新橋站日比谷口步行約 5 分鐘；內幸町站約 2 分鐘", en: "About 5 min from JR Shinbashi Hibiya Exit; 2 min from Uchisaiwaicho" },
        { zh: "入住 15:00；退房 11:00", en: "Check-in 15:00; check-out 11:00" },
        { zh: "東京住宿暫定：至 26 號晚要兩間房（富士山嗰晚另計）；27–29 號晚 John 同 Vanjai 要一間房", en: "Tokyo stay plan: two rooms for nights through 26 Dec (Fuji night to decide separately); one room for John and Vanjai on 27–29 Dec" }
      ],
      note: { zh: "富士山酒店嗰晚係保留東京房定退房寄存行李，要等日期同房價確認。", en: "Whether to keep the Tokyo rooms during the Fuji night or check out and store luggage depends on the voucher dates and price." }
    },
    {
      place: "sequence", status: "idea",
      area: { zh: "澀谷・原宿之間", en: "Between Shibuya and Harajuku" },
      facts: [
        { zh: "澀谷站行 3–7 分鐘，明治神宮前行 8 分鐘", en: "3–7 min walk to Shibuya Station, 8 min to Meiji-jingumae" },
        { zh: "下晝 5 點先入住，2 點退房", en: "Check-in 17:00, check-out 14:00" },
        { zh: "房間兩日先清潔一次", en: "Rooms cleaned every two days" }
      ],
      note: { zh: "位置好、有氣氛。但入住好夜，抵達日同箱根返嚟要留意。去東邊（淺草、築地）要搭耐啲車。", en: "Great location and feel. Late check-in matters on arrival day and after Hakone. East-side days need longer train rides." }
    },
    {
      place: "tokyustay", status: "idea",
      area: { zh: "新宿東邊", en: "East Shinjuku" },
      facts: [
        { zh: "東新宿站行 3 分鐘；唔係 JR 新宿站", en: "3 min to Higashi-shinjuku Station; not at JR Shinjuku itself" },
        { zh: "房間有洗衣乾衣機同微波爐", en: "In-room washer/dryer and microwave" },
        { zh: "雙床房 23–25 平方米，有相連房", en: "Twin rooms 23–25 m², adjoining rooms exist" }
      ],
      note: { zh: "住 10 晚好實用，可以洗衫。去中野同搭車去箱根都方便。", en: "Practical for 10 nights with laundry. Handy for Nakano and the Hakone train." }
    },
    {
      place: "stream", status: "idea",
      area: { zh: "澀谷站上面", en: "Above Shibuya Station" },
      facts: [
        { zh: "直接連住澀谷站，拖行李最方便", en: "Directly connected to Shibuya Station; easiest with luggage" },
        { zh: "下晝 2 點入住，11 點退房", en: "Check-in 14:00, check-out 11:00" },
        { zh: "雙床房 30 平方米起", en: "Twin rooms from 30 m²" }
      ],
      note: { zh: "較高級。房間唔保證望到澀谷十字路口，要另外問清楚。", en: "The premium option. Rooms don't guarantee a Shibuya Crossing view; ask before paying extra." }
    }
  ],

  food: [
    {
      title: { zh: "John 自己食嘅拉麵", en: "John's solo ramen" },
      intro: { zh: "東京拉麵大賞 (TRY) 得獎店。", en: "Tokyo Ramen of the Year (TRY) winners." },
      items: [
        { place: "honda", plan: "K", kind: { zh: "醬油沾麵", en: "Shoyu tsukemen" }, status: "first", note: { zh: "可以網上預約「優先到店時間」，但都可能要等。逢星期三休息。", en: "Can request a priority arrival time online; may still wait. Closed Wednesdays." } },
        { place: "hachigo", plan: "C", kind: { zh: "鹽味拉麵，法國廚師背景", en: "Shio ramen, French-chef background" }, price: { zh: "訂位費 ¥500", en: "¥500 booking fee" }, status: "first", note: { zh: "每個星期六朝早 9 點（日本時間）開放下個星期嘅訂位。", en: "Bookings for the following week open Saturdays 9:00 Japan time." } },
        { place: "seishin", kind: { zh: "2025 新店大獎 · 落合（中野附近）", en: "2025 newcomer grand prize · Ochiai (near Nakano)" }, status: "idea", note: { zh: "得 8 個位，唔接受訂位，可能排好耐。", en: "Eight seats, no reservations, possibly a long queue." } }
      ]
    },
    {
      title: { zh: "Vanjai 揀嘅創意菜", en: "Vanjai's creative dinners" },
      intro: { zh: "揀嗰日行程完結附近嘅餐廳，唔使專登過區。", en: "Chosen to match where that day ends, so no cross-town trips." },
      items: [
        { place: "denkushi", plan: "B", kind: { zh: "日法融合 · 表參道", en: "Japanese-French · Omotesando" }, price: { zh: "每位 ¥13,000 + 10%", en: "¥13,000 pp + 10%" }, status: "first" },
        { place: "florilege", plan: "E", kind: { zh: "創意法國菜 · 麻布台", en: "Creative French · Azabudai" }, price: { zh: "每位 ¥24,000 + 10%", en: "¥24,000 pp + 10%" }, status: "idea", note: { zh: "大約三個鐘。要留喺麻布台食，唔好先去東京鐵塔再返轉頭。", en: "About three hours. Stay in Azabudai for it rather than going to Tokyo Tower first." } },
        { place: "bistro0711", plan: "C", kind: { zh: "法式小館 · 銀座", en: "French bistro · Ginza" }, status: "idea", note: { zh: "散叫，比套餐輕鬆。", en: "À la carte; lighter than a tasting menu." } },
        { place: "largent", kind: { zh: "現代法國菜 · 霞關", en: "Modern French · Kasumigaseki" }, status: "idea", note: { zh: "去年計劃入面有。最遲 7:30pm 落單，逢星期四休息。", en: "From last year's plan. Last order 7:30pm, closed Thursdays." } },
        { place: "maz", kind: { zh: "秘魯菜配日本食材 · 紀尾井町（赤坂見附）", en: "Peruvian with Japanese produce · Kioicho (Akasaka-mitsuke)" }, price: { zh: "每位 ¥33,000 + 10%", en: "¥33,000 pp + 10%" }, status: "idea", note: { zh: "唔順路，除非嗰日剛好喺附近。", en: "Off-route unless we're already nearby." } }
      ]
    },
    {
      title: { zh: "Christine 想食嘅", en: "Christine's picks" },
      empty: { zh: "Christine 有冇想食嘅？話我哋知，我哋會排入行程。", en: "Anywhere Christine would like to eat? Let us know and we'll fit it in." }
    },
    {
      title: { zh: "更多晚餐候選", en: "More dinner options" },
      intro: { zh: "嚟自去年嘅餐廳清單，按地區分。全部未查位，價錢係舊資料或者要再確認。撳開睇。", en: "From last year's restaurant list, by area. No availability checked; prices need rechecking. Tap to open." },
      sub: [
        {
          title: { zh: "表參道・澀谷", en: "Omotesando · Shibuya" }, plan: "B",
          items: [
            { place: "sincere", kind: { zh: "法國菜 · 千駄谷", en: "French · Sendagaya" }, status: "idea", note: { zh: "12 月 19–26 日有聖誕套餐，最多 4 位。", en: "Christmas course 19–26 Dec; max four." } },
            { place: "lature", plan: "L", kind: { zh: "法國菜（野味）· 澀谷", en: "French (game meats) · Shibuya" }, status: "idea", note: { zh: "B 喺澀谷完結或者 L 日都啱。有野味，要問大家食唔食。", en: "Fits a Shibuya finish to B, or day L. Game meats; check everyone's OK with that." } },
            { place: "monolith", kind: { zh: "古典法國菜 · 澀谷至表參道之間", en: "Classic French · between Shibuya and Omotesando" }, status: "idea" },
            { place: "maerge", kind: { zh: "現代法國菜 · 南青山", en: "Modern French · Minami-Aoyama" }, status: "idea", note: { zh: "較貴，同 DEN KUSHI FLORI 比較。", en: "Higher spend; compare with DEN KUSHI FLORI." } },
            { place: "narisawa", kind: { zh: "創新菜 · 南青山", en: "Innovative · Minami-Aoyama" }, status: "idea", note: { zh: "每月 1 號朝早 10 點（日本時間）開放下個月訂位，好難訂。", en: "Next month's bookings open on the 1st, 10:00 Japan time; very limited." } }
          ]
        },
        {
          title: { zh: "銀座・東京站", en: "Ginza · Tokyo Station" }, plan: "C",
          items: [
            { place: "esquisse", kind: { zh: "法國菜 · 銀座", en: "French · Ginza" }, price: { zh: "聖誕套餐（23–25 日）每位 ¥52,000 + 12%", en: "Christmas menu (23–25 Dec) ¥52,000 pp + 12%" }, status: "idea", note: { zh: "26–29 日只做午餐，30–31 日休息。", en: "Lunch only 26–29 Dec; closed 30–31." } },
            { place: "sezanne", kind: { zh: "法國菜 · 東京站", en: "French · Tokyo Station" }, price: { zh: "每位 ¥56,925", en: "¥56,925 pp" }, status: "idea", note: { zh: "最貴嘅選擇。", en: "The splurge option." } },
            { place: "gomei", kind: { zh: "秋田牛鐵板燒 · 銀座", en: "Akita beef teppanyaki · Ginza" }, status: "idea" },
            { place: "yamashina", kind: { zh: "鐵板燒 · 銀座", en: "Teppanyaki · Ginza" }, status: "idea" },
            { place: "kitafuku", kind: { zh: "蟹料理 · 銀座／新富", en: "Crab · Ginza / Shintomi" }, status: "idea", note: { zh: "赤坂分店已經冇咗，要揀其他分店。", en: "The Akasaka branch has closed; pick another branch." } },
            { place: "ushigoro", kind: { zh: "高級燒肉 · 銀座", en: "Upscale yakiniku · Ginza" }, status: "review", note: { zh: "去年計劃入面有。", en: "From last year's plan." } }
          ]
        },
        {
          title: { zh: "麻布台", en: "Azabudai" }, plan: "E",
          items: [
            { place: "nakamura", kind: { zh: "鐵板燒 · 麻布台之丘", en: "Teppanyaki · Azabudai Hills" }, price: { zh: "每位約 ¥60,000–100,000", en: "About ¥60,000–100,000 pp" }, status: "idea", note: { zh: "2024 年由神樂坂搬咗嚟。", en: "Moved here from Kagurazaka in 2024." } },
            { place: "sugalabo", kind: { zh: "創新菜 · 神谷町", en: "Innovative · Kamiyacho" }, status: "idea", note: { zh: "冇公開訂位，要有人介紹。", en: "No public booking; introduction only." } }
          ]
        },
        {
          title: { zh: "淺草", en: "Asakusa" }, plan: "A",
          items: [
            { place: "hommage", kind: { zh: "法國菜 · 淺草", en: "French · Asakusa" }, price: { zh: "每位 ¥50,000 + 15%", en: "¥50,000 pp + 15%" }, status: "idea", note: { zh: "12 月 26 日同 29 日起休息。好貴。", en: "Closed 26 Dec and from 29 Dec. Very costly." } }
          ]
        },
        {
          title: { zh: "六本木・西麻布", en: "Roppongi · Nishiazabu" }, plan: "E",
          items: [
            { place: "metis", kind: { zh: "法國菜 · 六本木", en: "French · Roppongi" }, price: { zh: "每位約 ¥30,239（已包服務費）", en: "About ¥30,239 pp incl. service" }, status: "idea", note: { zh: "有私人房（2–5 位）。好啱 Vanjai 口味。", en: "Private room for 2–5. A strong match for Vanjai." } },
            { place: "bia", kind: { zh: "日泰融合 · 乃木坂", en: "Japanese-Thai · Nogizaka" }, price: { zh: "每位 ¥35,455 + 服務費", en: "¥35,455 pp + service" }, status: "idea" },
            { place: "heritage", kind: { zh: "法國菜 · 東京中城", en: "French · Tokyo Midtown" }, status: "idea", note: { zh: "逢星期二、三休息。", en: "Closed Tuesdays and Wednesdays." } },
            { place: "leffervescence", kind: { zh: "創新菜 · 西麻布", en: "Innovative · Nishiazabu" }, status: "idea", note: { zh: "好難訂。", en: "High demand." } },
            { place: "azur", kind: { zh: "法國菜 · 西麻布", en: "French · Nishiazabu" }, status: "review", note: { zh: "去年計劃入面有。聖誕新年期間只做特別套餐。", en: "From last year's plan. Special Christmas/New Year course only." } }
          ]
        },
        {
          title: { zh: "其他地區", en: "Other areas" },
          items: [
            { place: "asahina", kind: { zh: "法國菜 · 茅場町", en: "French · Kayabacho" }, status: "idea", note: { zh: "年尾有休息，要查日子。", en: "Year-end closures; check dates." } },
            { place: "jambo", kind: { zh: "燒肉 · 本鄉三丁目", en: "Yakiniku · Hongo-sanchome" }, status: "idea", note: { zh: "最多 6 位，限時 2 個鐘。", en: "Up to six, two-hour seating." } },
            { place: "satobriand", kind: { zh: "燒肉 · 阿佐谷（中野再過啲）", en: "Yakiniku · Asagaya (past Nakano)" }, status: "idea", note: { zh: "12 月訂位 10 月 25 日中午（日本時間）開放。", en: "December bookings open 25 Oct, noon Japan time." } }
          ]
        }
      ]
    },
    {
      title: { zh: "早餐・咖啡・午餐", en: "Breakfast · coffee · lunch" },
      intro: { zh: "唔使訂位，路過就入。", en: "Walk-in places, no booking needed." },
      sub: [
        {
          title: { zh: "銀座・日比谷", en: "Ginza · Hibiya" }, plan: "C",
          items: [
            { place: "fransuya", kind: { zh: "早餐 · 朝早 8 點開", en: "Breakfast · opens 8:00" } },
            { place: "petitmec", kind: { zh: "麵包早餐 · 朝早 8 點開", en: "Bakery breakfast · opens 8:00" } },
            { place: "coffeerin", kind: { zh: "咖啡 · 10 點開", en: "Coffee · opens 10:00" } },
            { place: "hanayama", kind: { zh: "烏冬午餐 · 11 點開", en: "Udon lunch · opens 11:00" }, note: { zh: "唔接受訂位，買飛排隊。", en: "No bookings; ticket machine queue." } },
            { place: "nanakura", kind: { zh: "平日午餐 · 新橋", en: "Weekday lunch · Shimbashi" } }
          ]
        },
        {
          title: { zh: "東京站", en: "Tokyo Station" }, plan: "C",
          items: [
            { place: "viron", kind: { zh: "麵包店 · 9 點開", en: "Bakery · opens 9:00" } },
            { place: "burdigala", kind: { zh: "麵包咖啡 · 站內 · 7 點開", en: "Bakery café · inside the station · opens 7:00" } }
          ]
        },
        {
          title: { zh: "麻布台", en: "Azabudai" }, plan: "E",
          items: [
            { place: "landemaine", kind: { zh: "麵包早餐 · 8 點開", en: "Bakery breakfast · opens 8:00" } }
          ]
        },
        {
          title: { zh: "池袋", en: "Ikebukuro" },
          items: [
            { place: "anpuku", kind: { zh: "未有行程去池袋", en: "No Ikebukuro day planned yet" } }
          ]
        }
      ]
    }
  ],

  facts: [
    { title: { zh: "聖誕活動做到 25 日", en: "Christmas ends on the 25th" }, text: { zh: "迪士尼聖誕、芝公園同新豐洲聖誕市集，全部 12 月 25 日完。", en: "Disney Christmas and both Christmas markets end on 25 Dec." } },
    { title: { zh: "豐洲市場", en: "Toyosu Market" }, text: { zh: "23 日休市；27 日（星期日）特別開放。", en: "Closed 23 Dec; special Sunday opening on 27 Dec." } },
    { title: { zh: "東京國立博物館", en: "Tokyo National Museum" }, text: { zh: "呢段時間唔適合：22–25 日只開少部分，26–31 日休館。", en: "Not a good fit: only partly open 22–25 Dec, closed 26–31 Dec." } },
    { title: { zh: "每日兩個區", en: "Two areas a day" }, text: { zh: "每日大約去兩個區，中間食飯同搭車，唔會太攰。", en: "About two areas a day, with a meal and travel between, keeps the pace comfortable." } },
    { title: { zh: "時間係估計", en: "Times are estimates" }, text: { zh: "上面寫嘅時數係大概，未計門口到門口。揀好東京酒店、核對富士住宿日期之後再計準。", en: "Durations are rough, not door to door. We'll firm them up after choosing the Tokyo hotel and verifying the Fuji stay dates." } }
  ]
};
