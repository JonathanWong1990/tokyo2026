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
  version: 24,
  updated: "2026-10-19",
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
    kappabashi:{ zh: "合羽橋道具街", en: "Kappabashi Kitchenware Town", ja: "かっぱ橋道具街", q: "Kappabashi Kitchenware Town", url: "https://www.kappabashi.or.jp/" },
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
    ukaittei: { zh: "銀座うかい亭", en: "Ginza Ukai-tei", ja: "銀座うかい亭", q: "Ginza Ukai-tei", url: "https://www.ukai.co.jp/ginza/reservation/" },
    icho: { zh: "鐵板燒 銀杏", en: "Teppanyaki ICHO", ja: "鉄板焼 銀杏", q: "Teppanyaki ICHO Grand Nikko Tokyo Daiba", url: "https://www.tokyo.grandnikko.com/tw/restaurant/icho/" },
    nikushabuya: { zh: "東京肉しゃぶ家", en: "Tokyo Nikushabuya", ja: "東京肉しゃぶ家", q: "Tokyo Nikushabuya Higashi-Shinjuku", url: "https://tokyonikushabuya.favy.jp/" },
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
    unis:      { zh: "unis", en: "unis", ja: "unis 虎ノ門ヒルズ", q: "unis Toranomon Hills", url: "https://tabelog.com/tokyo/A1308/A130802/13253159/" },
    gomei:     { zh: "秋田牛鐵板燒 銀座 Gomei", en: "Akita Beef Teppanyaki Ginza Gomei", q: "Akita Beef Teppanyaki Ginza Gomei", url: "https://tabelog.com/tokyo/A1301/A130101/13187289/" },
    yamashina: { zh: "本店 山科", en: "Honten Yamashina", q: "Honten Yamashina Ginza Place", url: "https://res-reserve.com/en/restaurants/honten-yamashina" },
    kitafuku:  { zh: "銀座 北福", en: "Ginza Kitafuku", ja: "銀座 きた福", q: "Ginza Kitafuku crab", url: "https://kanikitafuku.com/" },
    nakamura:  { zh: "麻布台 Nakamura", en: "Azabudai Nakamura", q: "Azabudai Nakamura teppanyaki", url: "https://naka-mura.net/" },
    sugalabo:  { zh: "SUGALABO", en: "SUGALABO", q: "SUGALABO Kamiyacho", url: "https://sugalabo.com/" },
    hommage:   { zh: "Hommage", en: "Hommage", q: "Hommage Asakusa", url: "https://www.hommage-arai.com/en/" },
    metis:     { zh: "Métis", en: "Métis", q: "Metis Roppongi", url: "https://www.tablecheck.com/en/shops/metis-roppongi/reserve" },
    bia:       { zh: "Bia", en: "Bia", q: "Bia Roppongi Nogizaka", url: "https://www.tablecheck.com/zh-TW/bia-roppongi" },
    heritage:  { zh: "Héritage by Kei Kobayashi", en: "Héritage by Kei Kobayashi", q: "Heritage by Kei Kobayashi Tokyo Midtown", url: "https://www.heritagebykei.com/restaurants-in-tokyo" },
    leffervescence: { zh: "L'Effervescence", en: "L'Effervescence", ja: "レフェルヴェソンス", q: "L'Effervescence Nishiazabu", url: "https://www.leffervescence.jp/en/" },
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
    sumoclub:  { zh: "淺草相撲表演", en: "Asakusa Sumo Club show", q: "Asakusa Sumo Club", url: "https://asakusa-sumo.com/reserve/" },
    sakecenter:{ zh: "日本酒資訊中心", en: "Japan Sake and Shochu Information Center", ja: "日本の酒情報館", q: "Japan Sake and Shochu Information Center", url: "https://japansake.or.jp/sake/en/jss/information-center/" },
    oshino:    { zh: "忍野八海", en: "Oshino Hakkai", ja: "忍野八海", q: "Oshino Hakkai" },
    yamanaka:  { zh: "山中湖", en: "Lake Yamanaka", ja: "山中湖", q: "Lake Yamanaka Hirano lakeside" },
    onda:      { zh: "Pizzeria Onda", en: "Pizzeria Onda", ja: "ピッツェリア オンダ", q: "Pizzeria Onda Fujikawaguchiko", url: "https://tabelog.com/yamanashi/A1903/A190303/19011964/" },
    honcho:    { zh: "富士吉田本町通", en: "Honcho Street, Fujiyoshida", ja: "本町通り 富士吉田", q: "Honcho Street Fujiyoshida" },
    chureito:  { zh: "新倉山淺間公園・忠靈塔", en: "Chureito Pagoda, Arakurayama Sengen Park", ja: "新倉山浅間公園 忠霊塔", q: "Chureito Pagoda" },
    kawaguchiko:{ zh: "河口湖", en: "Lake Kawaguchi", ja: "河口湖", q: "Lake Kawaguchi" },
    fujicharter:{ zh: "富士五湖包車的士", en: "Fuji Five Lakes charter taxi", ja: "富士急山梨ハイヤー", q: "Fuji Q Yamanashi Hire private taxi", url: "https://www.fujiq-taxi.jp/en/plan/info.php?no=29" },
    senkyaku:  { zh: "豐洲千客萬來", en: "Toyosu Senkyaku Banrai", ja: "豊洲 千客万来", q: "Toyosu Senkyaku Banrai", url: "https://www.toyosu-senkyakubanrai.jp/" },
    uogashi:   { zh: "築地魚河岸", en: "Tsukiji Uogashi", ja: "築地魚河岸", q: "Tsukiji Uogashi" },
    chazen:    { zh: "銀座茶禪 茶道體驗", en: "Ginza Chazen tea ceremony", q: "Ginza Chazen tea ceremony", url: "https://teaceremony-tokyo.jp/ginza/" },
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
        { time: { zh: "傍晚", en: "Early evening" }, place: "hibiya", sub: { zh: "如時間許可，晚餐前短逛日比谷燈飾或銀座", en: "If time allows, a short look at the Hibiya lights or Ginza before dinner" }, optional: true },
        { time: { zh: "18:30", en: "18:30" }, place: "ushigoro", sub: { zh: "銀座高級和牛燒肉，私人房間由店員代烤；四人，Q 套餐（已預付）", en: "Premium wagyu yakiniku in Ginza, grilled for you in a private room; four people, Q course (prepaid)" }, status: "booked" },
        { type: "tbd", text: { zh: "航班尚未訂；須選能趕及 18:30 晚餐的班次。", en: "Flight not booked yet; pick one that lands in time for the 18:30 dinner." } }
      ] },
    { date: "2026-12-21", who: "all", title: { zh: "明治神宮、表參道及澀谷購物", en: "Meiji Jingu, Omotesando and main Shibuya shopping" },
      items: [
        { time: { zh: "09:00", en: "09:00" }, place: "meiji", sub: { zh: "在神社內參觀約一小時", en: "About an hour at the shrine" } },
        { type: "branches", mode: "or", head: { zh: "下午購物取捨", en: "Choose the afternoon shopping pace" }, options: [
          { label: { zh: "舒適：表參道及澀谷", en: "Comfortable: Omotesando and Shibuya" }, items: [
            { time: { zh: "午餐後至晚上", en: "After lunch to evening" }, place: "shibuya", sub: { zh: "表參道午餐及短逛，然後以澀谷為主", en: "Lunch and a short browse in Omotesando, then Shibuya as the main stop" } }
          ] },
          { label: { zh: "仍有精神：澀谷後短到新宿", en: "More energy: short Shinjuku visit after Shibuya" }, items: [
            { time: { zh: "下午", en: "Afternoon" }, place: "shibuya", sub: { zh: "十字路口及主要商場", en: "Crossing and main shopping complexes" } },
            { type: "leg", from: { zh: "澀谷", en: "Shibuya" }, to: { zh: "新宿", en: "Shinjuku" }, via: { zh: "JR 車程約 7 分鐘；連進出車站另預留時間", en: "JR ride about 7 minutes; allow more for station walking" }, dur: "~20–30 min" },
            { time: { zh: "傍晚", en: "Early evening" }, place: "shinjuku", sub: { zh: "只作短逛或晚餐集合點，不安排完整購物時段", en: "Short browse or dinner meeting point, not a full shopping block" } }
          ] }
        ] },
        { time: { zh: "晚餐", en: "Dinner" }, place: "shibuya", sub: { zh: "購物後在澀谷或表參道就近用餐", en: "Dinner near wherever the shopping ends, in Shibuya or Omotesando" } },
        { type: "branches", mode: "split", head: { zh: "晚飯後可分頭活動（可選）", en: "Optional split after dinner" }, options: [
          { label: { zh: "John 與 Vanjai", en: "John and Vanjai" }, items: [
            { time: { zh: "晚上", en: "Evening" }, place: "namcotokyo", sub: { zh: "歌舞伎町夜景與夾公仔機", en: "Kabukicho lights and crane games" }, optional: true }
          ] },
          { label: { zh: "Ben 與 Christine", en: "Ben and Christine" }, items: [
            { time: { zh: "晚上", en: "Evening" }, place: "benfiddich", sub: { zh: "西新宿 15 席雞尾酒吧；21 日營業及座位待確認", en: "15-seat west Shinjuku cocktail bar; 21 Dec opening and seats to check" }, optional: true }
          ] }
        ] },
        { type: "note", text: { zh: "新宿的完整購物時段在 24 日由富士山返回之後。", en: "The full Shinjuku shopping time is on the 24th, after returning from Fuji." } }
      ] },
    { date: "2026-12-22", who: "all", title: { zh: "淺草、清酒品酒", en: "Asakusa and a sake tasting" },
      items: [
        { time: { zh: "上午", en: "Morning" }, place: "sensoji", sub: { zh: "淺草寺與周邊老街", en: "Senso-ji and the nearby old streets" } },
        { type: "branches", mode: "or", head: { zh: "淺草之後的路線", en: "After Asakusa" }, options: [
          { label: { zh: "合羽橋＋相撲", en: "Kappabashi + sumo" }, items: [
            { time: { zh: "上午較後", en: "Late morning" }, place: "kappabashi", sub: { zh: "合羽橋道具街；約一小時短逛", en: "Kappabashi Kitchenware Town; about one hour" } },
            { time: { zh: "12:00", en: "12:00" }, place: "sumoclub", sub: { zh: "坐著觀賞兩小時相撲表演，並享用相撲火鍋", en: "Two-hour seated sumo show with chanko hotpot" }, status: "tobook" }
          ] },
          { label: { zh: "合羽橋＋晴空塔", en: "Kappabashi + Skytree" }, items: [
            { time: { zh: "中午前後", en: "Late morning" }, place: "kappabashi", sub: { zh: "合羽橋道具街；約 1.5–2 小時慢慢逛", en: "Kappabashi Kitchenware Town; about 1.5–2 hours" } },
            { time: { zh: "下午", en: "Afternoon" }, place: "skytree", sub: { zh: "從淺草方向前往；可按體力縮短", en: "Continue from Asakusa; shorten based on energy" } }
          ] },
          { label: { zh: "晴空塔", en: "Skytree" }, items: [
            { time: { zh: "下午", en: "Afternoon" }, place: "skytree", sub: { zh: "由淺草直接前往，步行較少", en: "Straight from Asakusa, with less walking" } }
          ] }
        ] },
        { time: { zh: "16:00", en: "16:00" }, place: "sakecenter", sub: { zh: "酒店附近的清酒品酒，約 16:00–17:00；免費入場，試飲另付。若下午行程較趕，可略過並直接回酒店休息", en: "Sake tasting near the hotel, about 16:00–17:00; free entry, tastings paid. Skip it and rest at the hotel if the afternoon runs late" } },
        { time: { zh: "17:00–20:00", en: "17:00–20:00" }, place: "blossom", sub: { zh: "回酒店休息", en: "Rest at the hotel" } },
        { time: { zh: "20:30", en: "20:30" }, place: "kitafuku", sub: { zh: "銀座螃蟹料理，冬季活松葉蟹套餐；四人。由酒店步行或乘的士約 10 分鐘", en: "Crab in Ginza: the winter live Matsuba crab course; four people. About 10 minutes from the hotel on foot or by taxi" }, status: "booked" },
        { type: "branches", mode: "split", head: { zh: "晚飯後可分頭活動（可選）", en: "Optional split after dinner" }, options: [
          { label: { zh: "John 與 Vanjai", en: "John and Vanjai" }, items: [
            { type: "note", text: { zh: "自由散步，或返回酒店休息。", en: "A stroll of your own, or back to the hotel." } }
          ] },
          { label: { zh: "Ben 與 Christine：選一間酒吧", en: "Ben and Christine: pick a bar" }, items: [
            { place: "sotoroku", sub: { zh: "酒店內，葡萄酒、清酒及威士忌", en: "In the hotel: wine, sake and whisky" }, optional: true },
            { place: "imperialbar", sub: { zh: "經典雞尾酒；晚上不設預約", en: "Classic cocktails; evening walk-in only" }, optional: true }
          ] }
        ] },
        { type: "tbd", text: { zh: "合羽橋多數店舖約 10:00–17:00 營業。清酒中心 12 月的開放時間待確認。", en: "Most Kappabashi shops open about 10:00–17:00. The sake centre's December hours are still to check." } }
      ] },
    { date: "2026-12-23", who: "all", title: { zh: "前往富士吉田，入住溫泉旅館", en: "To Fujiyoshida for a night at the ryokan" },
      items: [
        { type: "leg", from: { zh: "東京", en: "Tokyo" }, to: { zh: "富士吉田", en: "Fujiyoshida" }, via: { zh: "富士回遊直達列車或高速巴士，約 2 小時；連轉車及行李，門到門約 3–4 小時", en: "Fuji Excursion direct train or highway bus, about 2 hours; about 3–4 hours door to door with transfers and luggage" }, dur: "~3–4h" },
        { type: "branches", mode: "or", head: { zh: "視乎出發時間", en: "Depending on when we leave" }, options: [
          { label: { zh: "直接到旅館休息", en: "Straight to the ryokan to rest" }, items: [
            { type: "note", text: { zh: "抵達後直接入住，下午留給溫泉及休息。", en: "Check in on arrival and keep the afternoon for the baths and rest." } }
          ] },
          { label: { zh: "提早出發：約 12:00 到河口湖站", en: "Early start: Kawaguchiko Station by about 12:00" }, items: [
            { time: { zh: "12:00–13:00", en: "12:00–13:00" }, place: "onda", sub: { zh: "河口湖站附近的薄餅午餐；行李先放車站儲物櫃或直接送往旅館", en: "Pizza lunch near Kawaguchiko Station; leave luggage in station lockers or send it straight to the ryokan" } },
            { time: { zh: "13:10–13:35", en: "13:10–13:35" }, place: "honcho", sub: { zh: "以富士山為背景的老街，短暫停留拍照", en: "Old street with Mt Fuji behind it; a short photo stop" } },
            { time: { zh: "13:50–15:20", en: "13:50–15:20" }, place: "chureito", sub: { zh: "五重塔與富士山同框；上山樓梯較多。想輕鬆些可改到河口湖大石公園湖畔散步", en: "The pagoda framed with Mt Fuji; lots of uphill stairs. For an easier walk, the Oishi Park lakeside at Lake Kawaguchi instead" } },
            { type: "note", text: { zh: "15:20–16:00 乘的士或旅館接駁車到旅館。如列車延誤，先刪本町通；抵達遲過 12:30 便午餐後直接到旅館。", en: "15:20–16:00: taxi or the ryokan shuttle to the ryokan. If the train is late, drop Honcho Street first; if we arrive after 12:30, go straight to the ryokan after lunch." } }
          ] }
        ] },
        { time: { zh: "下午至晚上", en: "Afternoon to evening" }, place: "besshosasa", sub: { zh: "入住、泡溫泉及私人風呂；旅館晚餐，欣賞富士山景色。山梨葡萄酒視乎房價計劃是否包括", en: "Check in, hot spring and private bath; ryokan dinner with the Fuji view. Yamanashi wine depends on whether the rate plan includes it" }, status: "booked" },
        { type: "note", text: { zh: "旅館提供免費車站接送（13:00–18:00），須抵達富士山站或河口湖站後致電旅館，無法事先以電郵預約。", en: "The ryokan's free station pickup runs 13:00–18:00; call after reaching Fujisan or Kawaguchiko Station. It can't be booked ahead by email." } },
        { type: "tbd", text: { zh: "旅館已預訂，但截圖看不到日期；是否為 23–24 日須以完整憑證確認。Pizzeria Onda 逢星期四休息，假期營業時間待確認。", en: "Hotel booked, but the screenshots cut off the dates; confirm 23–24 Dec from the full vouchers. Pizzeria Onda closes Thursdays; check its holiday hours." } }
      ] },
    { date: "2026-12-24", who: "all", title: { zh: "包車遊山中湖及忍野八海，之後返回東京", en: "Lake Yamanaka and Oshino by car, then back to Tokyo" },
      items: [
        { time: { zh: "08:00–09:00", en: "08:00–09:00" }, place: "besshosasa", sub: { zh: "旅館早餐、最後一次私人風呂、收拾行李及退房", en: "Ryokan breakfast, a last private bath, pack and check out" } },
        { time: { zh: "09:30", en: "09:30" }, place: "fujicharter", sub: { zh: "包車在旅館接載四人及行李；富士急山梨包車的士，此路線須另行報價", en: "Private car picks up four people and luggage at the ryokan; Fuji Q Yamanashi charter taxi, this route needs its own quote" }, status: "tobook" },
        { type: "branches", mode: "or", head: { zh: "包車路線", en: "Car route" }, options: [
          { label: { zh: "山中湖＋忍野八海", en: "Lake Yamanaka + Oshino Hakkai" }, items: [
            { time: { zh: "10:00–11:00", en: "10:00–11:00" }, place: "yamanaka", sub: { zh: "選長池親水公園或平野其中一處湖畔看富士山；湖上有野生天鵝。天鵝船冬季停航", en: "One lakeside viewpoint, Nagaike or Hirano, for the Fuji view; wild swans live on the lake. The swan boat doesn't run in winter" } },
            { time: { zh: "11:15–12:30", en: "11:15–12:30" }, place: "oshino", sub: { zh: "以中央泉池及湧水一帶為主", en: "Mainly the central ponds and springs" } }
          ] },
          { label: { zh: "河口湖大石公園＋忍野八海", en: "Oishi Park + Oshino Hakkai" }, items: [
            { place: "kawaguchiko", sub: { zh: "大石公園湖畔步道，平坦易行", en: "The Oishi Park lakeside promenade, flat and easy" } },
            { place: "oshino", sub: { zh: "以中央泉池及湧水一帶為主", en: "Mainly the central ponds and springs" } }
          ] },
          { label: { zh: "天氣或體力欠佳：只去忍野八海", en: "Poor weather or tired: Oshino Hakkai only" }, items: [
            { place: "oshino", sub: { zh: "距旅館最近，之後直接到河口湖站", en: "Closest to the ryokan, then straight to Kawaguchiko Station" } }
          ] }
        ] },
        { time: { zh: "13:00–14:00", en: "13:00–14:00" }, name: { zh: "餺飥午餐", en: "Hōtō lunch" }, sub: { zh: "山梨名物：南瓜味噌湯煮粗麵；在河口湖站附近，不預約", en: "Yamanashi's specialty: thick noodles in pumpkin-miso broth; near Kawaguchiko Station, no booking" } },
        { time: { zh: "14:00–15:00", en: "14:00–15:00" }, place: "fujicharter", sub: { zh: "包車送到河口湖站；處理行李，預留時間上車", en: "Car drops us at Kawaguchiko Station; sort luggage and leave time before the train" }, status: "tobook" },
        { type: "leg", from: { zh: "河口湖站", en: "Kawaguchiko Station" }, to: { zh: "新宿", en: "Shinjuku" }, via: { zh: "富士回遊直達列車 15:39 → 17:45；如午餐或交通延誤，改乘 16:48 → 18:46", en: "Fuji Excursion direct train 15:39 → 17:45; if lunch or traffic runs late, the 16:48 → 18:46" }, dur: "~2h" },
        { time: { zh: "抵達後", en: "On arrival" }, place: "shinjuku", sub: { zh: "在新宿購物", en: "Shopping in Shinjuku" } },
        { time: { zh: "晚餐", en: "Dinner" }, name: { zh: "爐端燒晚餐", en: "Robatayaki dinner" }, sub: { zh: "炭火燒烤海鮮及蔬菜；餐廳待定，時間較晚及彈性", en: "Charcoal-grilled seafood and vegetables; restaurant TBC, late and flexible" } },
        { time: { zh: "晚餐後", en: "After dinner" }, place: "peterbar", sub: { zh: "Ben 與 Christine 若想喝一杯；視乎回程時間，不預約", en: "For Ben and Christine if they'd like a drink; depends on the return, no booking" }, optional: true },
        { type: "note", text: { zh: "連停留時間，包車全程約 5 小時。山中湖只選一個觀景點，不環湖。忠靈塔樓梯較多，不宜帶著行李再加入。旅館不代運行李。", en: "The car day is about 5 hours including stops. Only one viewpoint at Lake Yamanaka, no lap of the lake. Chureito has many stairs, so it isn't added with luggage in tow. The ryokan won't transport luggage." } },
        { type: "note", text: { zh: "富士回遊直達列車（河口湖 → 新宿）：14:08 → 16:06、14:58 → 16:58、15:39 → 17:45、16:48 → 18:46，另有約 17:41 一班。全車指定座，須預先買票。", en: "Fuji Excursion direct trains (Kawaguchiko → Shinjuku): 14:08 → 16:06, 14:58 → 16:58, 15:39 → 17:45, 16:48 → 18:46, plus one around 17:41. All seats reserved; buy tickets ahead." } },
        { type: "tbd", text: { zh: "包車須報價及確認 12 月 24 日有車（四位成人連行李，約 15:00 前送到河口湖站）；直達列車車票待購買。當晚不預訂正式晚餐。", en: "Private car needs a quote and 24 Dec availability (four adults with luggage, at Kawaguchiko Station by about 15:00); train tickets not yet bought. No formal dinner booking that evening." } }
      ] },
    { date: "2026-12-25", who: "all", plan: "D", title: { zh: "豐洲、teamLab 及聖誕夜", en: "Toyosu, teamLab and Christmas night" },
      items: [
        { time: { zh: "早上", en: "Morning" }, place: "toyosu", sub: { zh: "簡短參觀市場，可品嚐海鮮早餐", en: "A short look at the market, with an optional seafood breakfast" }, optional: true },
        { time: { zh: "上午", en: "Late morning" }, place: "senkyaku", sub: { zh: "江戶風美食街，8 樓免費足湯", en: "Edo-style food street and the free 8th-floor footbath" } },
        { time: { zh: "14:00", en: "14:00" }, place: "planets", sub: { zh: "本日重點；建議 14:00–15:00 入場，館內約兩至兩個半小時", en: "The main event; suggested entry 14:00–15:00, about 2–2½ hours inside" }, status: "tobook" },
        { type: "branches", mode: "or", head: { zh: "聖誕晚上二選一", en: "Christmas evening: choose one" }, options: [
          { label: { zh: "聖誕晚餐：霞關 L'ARGENT", en: "Christmas dinner: L'ARGENT, Kasumigaseki" }, items: [
            { time: { zh: "18:30", en: "18:30" }, place: "largent", sub: { zh: "法國菜聖誕套餐，每位 ¥28,600；四人 18:30", en: "French Christmas course, ¥28,600 pp; four at 18:30" }, status: "tobook" }
          ] },
          { label: { zh: "新豐洲聖誕市集及簡單晚餐", en: "Shin-Toyosu Christmas market and a simple dinner" }, items: [
            { time: { zh: "晚上", en: "Evening" }, place: "shintoyosu", sub: { zh: "市集最後一晚，21:30 關門（20:30 最後入場），每位成人 ¥2,000；在市集內簡單用餐", en: "The market's last night, closes 21:30 (last entry 20:30), ¥2,000 per adult; eat simply at the market" } }
          ] }
        ] },
        { type: "note", text: { zh: "早上的市場參觀為可選。", en: "The morning market visit is optional." } },
        { type: "tbd", text: { zh: "L'ARGENT 尚未訂位；teamLab 門票尚未購買。聖誕節當天足湯的開放時間未公布，臨近出發再查是否臨時休息。", en: "L'ARGENT not booked; teamLab tickets not bought. Footbath hours for Christmas Day aren't published; check for closures closer to the date." } }
      ] },
    { date: "2026-12-26", who: "all", title: { zh: "台場慢遊及鐵板燒銀杏", en: "Odaiba day and Teppanyaki ICHO" },
      items: [
        { type: "branches", mode: "or", head: { zh: "白天路線選擇", en: "Choose the daytime route" }, options: [
          { label: { zh: "台場海濱及商場", en: "Odaiba waterfront and malls" }, items: [
            { time: { zh: "上午至下午", en: "Morning to afternoon" }, place: "odaiba", sub: { zh: "海濱公園、Decks／Aqua City／DiverCity；步行量可按體力調整", en: "Seaside Park, Decks / Aqua City / DiverCity; adjust walking to the group's energy" } }
          ] },
          { label: { zh: "築地／銀座後前往台場", en: "Tsukiji / Ginza, then Daiba" }, items: [
            { time: { zh: "上午", en: "Morning" }, place: "tsukiji", sub: { zh: "築地場外市場短逛", en: "Short visit to Tsukiji Outer Market" } },
            { time: { zh: "下午", en: "Afternoon" }, place: "ginza", sub: { zh: "銀座慢逛及咖啡，之後前往台場", en: "Easy Ginza browse and coffee, then travel to Daiba" } }
          ] }
        ] },
        { time: { zh: "晚餐時間待訂", en: "Dinner time TBC" }, place: "icho", sub: { zh: "東京台場格蘭日航酒店 30 樓鐵板燒，可看東京灣夜景；四人", en: "Teppanyaki on the 30th floor of Grand Nikko Tokyo Daiba, overlooking Tokyo Bay; four people" }, status: "tobook" },
        { type: "tbd", text: { zh: "鐵板燒銀杏尚未訂位，四人座位及時間待確認。", en: "Teppanyaki ICHO is not booked; four-person availability and time to confirm." } }
      ] },
    { date: "2026-12-27", who: "split", title: { zh: "Ben 與 Christine 回程", en: "Ben and Christine fly home" },
      items: [
        { type: "note", text: { zh: "Ben 與 Christine 返回香港；John 與 Vanjai 留在東京。航班時間待定。", en: "Ben and Christine fly back to Hong Kong; John and Vanjai stay in Tokyo. Flight times TBC." } }
      ],
      notes: [{ zh: "豐洲市場週日特別開放", en: "Toyosu Market has a special Sunday opening" }] },
    { date: "2026-12-28", who: "jv", title: { zh: "John 與 Vanjai 自由行", en: "John and Vanjai's own day" },
      items: [
        { type: "branches", mode: "or", head: { zh: "兩人晚餐候選（28 或 29 日各一間）", en: "Dinner for two (one on the 28th, one on the 29th)" }, options: [
          { label: { zh: "紀尾井町", en: "Kioicho" }, items: [ { time: { zh: "晚餐", en: "Dinner" }, place: "maz", sub: { zh: "秘魯創意菜，每位 ¥33,000（含稅）+ 10% 服務費；12 月訂位已開放，尚未訂位", en: "Creative Peruvian, ¥33,000 pp incl. tax + 10% service; December bookings are open, not booked" }, status: "tobook" } ] },
          { label: { zh: "南青山", en: "Minami-Aoyama" }, items: [ { time: { zh: "晚餐", en: "Dinner" }, place: "maerge", sub: { zh: "現代法國菜；12 月訂位 11 月 1 日開放。逢星期日及不定期休息，衣著須半正式，取消政策嚴格", en: "Modern French; December bookings open 1 Nov. Closed Sundays and some irregular days; smart dress, strict cancellation policy" }, status: "tobook" } ] }
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
      why: { zh: "目前未排入行程；如想去，可用一整天。", en: "Not in the current plan; it would take a full day." },
      items: [
        { time: { zh: "全日", en: "All day" }, place: "disney" },
        { type: "note", text: { zh: "看完夜間表演後不宜再趕往遠處的餐廳，晚餐宜留在酒店附近。", en: "No far-away dinner after the nighttime show; keep dinner near the hotel." } }
      ]
    },
    {
      code: "G", pick: "alt", hours: { zh: "兩日一夜", en: "2 days, 1 night" }, walk: 2,
      title: { zh: "箱根溫泉一晚", en: "Hakone onsen overnight" },
      why: { zh: "溫泉之夜安排在富士吉田（23–24 日）；箱根是另一個溫泉選擇。", en: "Our onsen night is in Fujiyoshida (23–24 Dec); Hakone is another onsen option." },
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
      { place: "dawn", sub: { zh: "可安排在銀座或東京站附近的一天，約一至兩小時", en: "Fits a Ginza or Tokyo Station day, one to two hours" } },
      { place: "chazen", sub: { zh: "45 分鐘茶道體驗；可安排在銀座的日子", en: "45-minute tea ceremony; fits a Ginza day" } },
      { place: "artaquarium", sub: { zh: "展覽至 2027 年 1 月 6 日，可在銀座的日子加入", en: "Runs until 6 Jan 2027; fits any Ginza day" } }
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
      title: { zh: "四人晚餐", en: "Dinners for all four" },
      intro: { zh: "20 日及 22 日已訂位；其餘尚未訂位。", en: "20 and 22 Dec are booked; the rest are not yet." },
      items: [
        { place: "ushigoro", kind: { zh: "燒肉 · 銀座 · 20 日", en: "Yakiniku · Ginza · 20 Dec" }, price: { zh: "Q 套餐 ¥22,500／位，已預付", en: "Q course ¥22,500 pp, prepaid" }, status: "booked", note: { zh: "20 日 18:30，四人。已訂位。", en: "18:30 on 20 Dec, four people. Booked." } },
        { place: "kitafuku", kind: { zh: "螃蟹料理 · 銀座 · 22 日", en: "Crab · Ginza · 22 Dec" }, price: { zh: "活松葉蟹套餐 ¥55,000／位，另加 10% 服務費；在店內付款，或按當日蟹價調整", en: "Live Matsuba crab course ¥55,000 pp plus 10% service; paid at the restaurant, may rise with the day's crab price" }, status: "booked", note: { zh: "22 日 20:30，四人。已訂位。", en: "20:30 on 22 Dec, four people. Booked." } },
        { place: "largent", kind: { zh: "法國菜 · 霞關 · 25 日", en: "French · Kasumigaseki · 25 Dec" }, price: { zh: "聖誕套餐每位 ¥28,600（最終金額以付款頁為準）", en: "Christmas course ¥28,600 pp (check final total at checkout)" }, status: "first", note: { zh: "25 日 18:30 四人聖誕晚餐，與新豐洲聖誕市集二選一。尚未訂位。", en: "Christmas dinner for four at 18:30 on 25 Dec, instead of the Shin-Toyosu market. Not booked." } },
        { place: "icho", kind: { zh: "鐵板燒 · 台場 · 26 日", en: "Teppanyaki · Daiba · 26 Dec" }, price: { zh: "晚餐約 ¥28,000–35,000（含稅及服務費）", en: "Dinner about ¥28,000–35,000 pp incl. tax and service" }, status: "first", note: { zh: "26 日四人晚餐，配合台場一天；時間及座位尚未確認。尚未訂位。", en: "Four-person dinner on 26 Dec, after a day in Odaiba; time and seats to confirm. Not booked." } },
        { place: "sezanne", kind: { zh: "法國菜 · 京橋／丸之內", en: "French · Kyobashi / Marunouchi" }, price: { zh: "節日套餐每位 ¥75,900，未計飲品", en: "Festive course ¥75,900 pp before drinks" }, status: "idea", note: { zh: "仍在考慮中；逢星期一、二休息，日期待定。男士須穿外套。尚未訂位。", en: "Still under consideration; closed Mondays and Tuesdays, date TBC. Jacket for men. Not booked." } },
        { place: "yamashina", kind: { zh: "鐵板燒 · 銀座", en: "Teppanyaki · Ginza" }, price: { zh: "近江牛及海鮮套餐每位約 ¥22,000（含稅）", en: "Omi beef and seafood course about ¥22,000 pp incl. tax" }, status: "idea", note: { zh: "其他候選，尚未安排日子。", en: "Another option; no date set." } }
      ]
    },
    {
      title: { zh: "John 與 Vanjai 兩人晚餐", en: "John and Vanjai's dinners" },
      intro: { zh: "目標是 12 月 28 或 29 日；27 日先留給 Ben 與 Christine 回程。", en: "Aim for 28 or 29 Dec; keep the 27th light for Ben and Christine's departure." },
      items: [
        { place: "maz", kind: { zh: "秘魯創意菜 · 紀尾井町", en: "Creative Peruvian · Kioicho" }, price: { zh: "每位 ¥33,000（含稅）+ 10% 服務費", en: "¥33,000 pp incl. tax + 10% service" }, status: "first", note: { zh: "12 月訂位已開放；目標 28 或 29 日兩位，尚未訂位。", en: "December bookings are open; aiming for two on the 28th or 29th. Not booked." } },
        { place: "maerge", kind: { zh: "現代法國菜 · 南青山", en: "Modern French · Minami-Aoyama" }, status: "first", note: { zh: "12 月訂位於 11 月 1 日開放；逢星期日休息，衣著半正式，取消政策嚴格。尚未訂位。", en: "December bookings open 1 Nov; closed Sundays, smart dress, strict cancellations. Not booked." } }
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
        { place: "mementomori", kind: { zh: "可可及植物雞尾酒 · 虎之門之丘", en: "Cacao and botanical cocktails · Toranomon Hills" }, note: { zh: "平日營業至 23:00；聖誕週的營業時間及訂位待確認", en: "Weekdays to 23:00; Christmas-week hours and booking to check" } },
        { place: "sotoroku", kind: { zh: "葡萄酒、清酒、威士忌 · 酒店內", en: "Wine, sake, whisky · in the hotel" }, note: { zh: "最方便的後備選擇；23:00 關門（22:30 最後入場）", en: "The easiest fallback; closes 23:00 (last entry 22:30)" } },
        { place: "imperialbar", kind: { zh: "經典雞尾酒 · 帝國酒店", en: "Classic cocktails · Imperial Hotel" }, note: { zh: "營業至午夜；晚上不設預約，即場候位", en: "Open to midnight; evening is walk-in only" } },
        { place: "peterbar", kind: { zh: "夜景、雞尾酒及葡萄酒 · 半島酒店", en: "Views, cocktails and wine · The Peninsula" }, note: { zh: "24 日或其他晚上；不設預約、不收服務費", en: "The 24th or another evening; no reservations or cover charge" } },
        { place: "mixologysalon", kind: { zh: "日本茶雞尾酒 · GINZA SIX", en: "Japanese tea cocktails · GINZA SIX" }, note: { zh: "在銀座的晚上；只有 8 席，宜預早查兩人空位", en: "An evening in Ginza; only 8 seats, check a two-person slot early" } }
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
