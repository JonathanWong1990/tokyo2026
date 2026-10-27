// Trip content. Edit this file to update the page; index.html only handles layout.
// Source of truth for planning is the markdown in the parent folder; this file is the family-facing version.
// Every text field has zh (Traditional Chinese, shown by default) and en.
//
// Shapes
//   base:       place id of the usual hotel (the home page's "back to hotel" taxi card)
//   places[id]: { zh, en, ja (taxi card), addr? (Japanese address, public venues only), q (Google Maps search), url (official site, optional) }
//   calendar[]: { date, who: "all" | "split" | "jv", title, stay?: hotel place id if not base, items: [...], notes?: [text], xmas?: [...same as items] }
//               times like "09:30" or "11:45–12:45" drive the home page's Now / Next during the trip; "上午" etc. have no clock time
//               xmas = Christmas lights & markets, shown as a separate section under the day plan
//   ideas[]:    empty since v32 (the old Options tab was removed)
//   items[]:    place row { time?, place | name, sub?, status?, optional? } | { type: "leg", from, to, via, dur } | { type: "tbd" | "note", text }
//               | { type: "branches", mode: "or" (pick one) | "split" (people go separate ways), options: [{ label, backup?: true (shown collapsed), items }] }
//   hotels[]:   { place, status, area, facts: [text], note }
//   food[]:     { title, intro?, empty?, items?: [row], sub?: [{ title, plan?, items: [row] }] (sub groups render collapsed) }
//               row = { place, kind, price?, status?, note?, plan? }
//   status:     "booked" (✓ 已訂) | "tobook" or "first" (未訂); "idea"/"review" show no tag. optional: true shows "· 可選"
//   leg dur:    "80 min", "~40m", "~45–60m" (~ = approx, shown as 約), "2.5h"

window.TRIP = {
  version: 34,
  updated: "2026-10-27",
  status: { zh: "計劃中 · 富士住宿已訂，東京酒店暫定", en: "Still planning · Fuji stay booked, Tokyo hotel likely" },
  base: "blossom",
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
    shogunburger: { zh: "SHOGUN BURGER 新宿", en: "SHOGUN BURGER Shinjuku", ja: "ショーグンバーガー 新宿", q: "SHOGUN BURGER Shinjuku", url: "https://shogun-burger.com/store" },
    omotesandolights:{ zh: "表參道燈飾", en: "Omotesando Illumination", ja: "表参道イルミネーション", q: "Omotesando Illumination" },
    bluecave:  { zh: "青之洞窟 SHIBUYA", en: "Blue Cave SHIBUYA", ja: "青の洞窟 SHIBUYA", q: "青の洞窟 SHIBUYA 代々木公園" },
    minamilumi:{ zh: "新宿南口燈飾 Minamilumi", en: "Shinjuku Minamilumi lights", ja: "新宿サザンテラス ミナミルミ", q: "Shinjuku Southern Terrace" },
    azabudaixmas:{ zh: "麻布台之丘聖誕市集", en: "Azabudai Hills Christmas Market", ja: "麻布台ヒルズ クリスマスマーケット", q: "Azabudai Hills Central Plaza" },
    meguro:    { zh: "目黑川燈飾（五反田）", en: "Meguro River lights (Gotanda)", ja: "目黒川みんなのイルミネーション", q: "Gotanda Fureai Mizube Hiroba", url: "https://www.minna-no-illumi.com/" },
    domecity:  { zh: "東京巨蛋城燈飾", en: "Tokyo Dome City lights", ja: "東京ドームシティ", q: "Tokyo Dome City" },
    roppongihills:{ zh: "六本木之丘・櫸木坂", en: "Roppongi Hills · Keyakizaka", ja: "六本木ヒルズ けやき坂", q: "Roppongi Hills Keyakizaka" },
    roppongi:  { zh: "六本木・東京中城", en: "Roppongi · Tokyo Midtown", ja: "東京ミッドタウン", q: "Tokyo Midtown Roppongi" },
    daikanyama:{ zh: "代官山", en: "Daikanyama", ja: "代官山駅", q: "Daikanyama T-Site" },
    ebisu:     { zh: "惠比壽", en: "Ebisu", ja: "恵比寿ガーデンプレイス", q: "Yebisu Garden Place" },
    odaiba:    { zh: "台場", en: "Odaiba", ja: "お台場海浜公園", q: "Odaiba Seaside Park" },
    // B · Harajuku to Shibuya
    meiji:     { zh: "明治神宮", en: "Meiji Jingu", ja: "明治神宮", q: "Meiji Jingu" },
    omotesando:{ zh: "表參道", en: "Omotesando", ja: "表参道駅", q: "Omotesando" },
    shibuya:   { zh: "澀谷", en: "Shibuya", ja: "渋谷駅", q: "Shibuya Scramble Crossing" },
    shibuyaSky:{ zh: "SHIBUYA SKY", en: "SHIBUYA SKY observation deck", ja: "渋谷スカイ", q: "SHIBUYA SKY" , url: "https://www.shibuya-scramble-square.com/sky/" },
    // C · Central
    tsukiji:   { zh: "築地場外市場", en: "Tsukiji Outer Market", ja: "築地場外市場", q: "Tsukiji Outer Market" },
    kappabashi:{ zh: "合羽橋道具街", en: "Kappabashi Kitchenware Town", ja: "かっぱ橋道具街", q: "Kappabashi Kitchenware Town", url: "https://www.kappabashi.or.jp/" },
    asakusaUnderground:{ zh: "淺草地下街", en: "Asakusa Underground Street", ja: "浅草地下街", q: "Asakusa Underground Shopping Street" },
    asakusaObservation:{ zh: "淺草文化觀光中心展望台", en: "Asakusa Culture Tourist Information Center observation deck", ja: "浅草文化観光センター 展望テラス", q: "Asakusa Culture Tourist Information Center observation deck", url: "https://www.city.taito.lg.jp/bunka_kanko/kankoinfo/info/oyakudachi/kankocenter/a-tic-gaiyo.html" },
    ginza:     { zh: "銀座", en: "Ginza", ja: "銀座四丁目交差点", q: "Ginza 4-chome" },
    nihombashi:{ zh: "日本橋三越本店", en: "Nihombashi Mitsukoshi main store", ja: "日本橋三越本店", q: "Nihombashi Mitsukoshi Main Store", url: "https://www.mistore.jp/store/nihombashi.html" },
    takashimaya:{ zh: "日本橋高島屋", en: "Nihombashi Takashimaya", ja: "日本橋高島屋", q: "Nihombashi Takashimaya S.C.", url: "https://www.takashimaya.co.jp/nihombashi/" },
    nihonbashibridge:{ zh: "日本橋", en: "Nihonbashi Bridge", ja: "日本橋", q: "Nihonbashi Bridge Tokyo" },
    fukutoku:{ zh: "福德神社・COREDO 室町", en: "Fukutoku Shrine · COREDO Muromachi", ja: "福徳神社", q: "Fukutoku Shrine Nihonbashi", url: "https://mitsui-shopping-park.com/urban/muromachi/" },
    eastgardens:{ zh: "皇居東御苑", en: "Imperial Palace East Gardens", ja: "皇居東御苑", q: "Imperial Palace East Gardens", url: "https://www.kunaicho.go.jp/e-event/higashigyoen02.html" },
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
    ramenmuseum:{ zh: "新橫濱拉麵博物館", en: "Shin-Yokohama Ramen Museum", ja: "新横浜ラーメン博物館", q: "Shin-Yokohama Ramen Museum", url: "https://www.raumen.co.jp/english/" },
    cupnoodles:{ zh: "杯麵博物館橫濱", en: "CUPNOODLES MUSEUM YOKOHAMA", ja: "カップヌードルミュージアム 横浜", q: "CUPNOODLES MUSEUM YOKOHAMA", url: "https://www.cupnoodles-museum.jp/en/yokohama/" },
    chinatown: { zh: "橫濱中華街", en: "Yokohama Chinatown", ja: "横浜中華街", q: "Yokohama Chinatown" },
    yamashita: { zh: "山下公園", en: "Yamashita Park", ja: "山下公園", q: "Yamashita Park Yokohama" },
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
    sassa:     { zh: "日本料理 佐々", en: "Sassa", ja: "日本料理 佐々 広尾", q: "日本料理 佐々 広尾 Sassa Hiroo", url: "https://guide.michelin.com/hk/zh_HK/tokyo-region/tokyo/restaurant/sassa" },
    ugai:      { zh: "銀座 有涯", en: "Ginza Ugai", ja: "銀座 有涯", q: "銀座 有涯 Ginza Ugai", url: "https://tabelog.com/tw/tokyo/A1301/A130101/13280675/" },
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
    besshosasa:{ zh: "富士山溫泉 別墅然然", en: "Bessho Sasa Hotel", ja: "富士山温泉 別墅然然", addr: "山梨県富士吉田市上吉田東9-1-18", q: "Bessho Sasa Fujiyoshida", url: "https://bessho-sasa.com/" },
    blossom:   { zh: "THE BLOSSOM HIBIYA", en: "THE BLOSSOM HIBIYA", ja: "THE BLOSSOM HIBIYA（ザ ブラッサム 日比谷）", addr: "東京都港区新橋1-1-13", q: "THE BLOSSOM HIBIYA Tokyo", url: "https://www.jrk-hotels.co.jp/en/Hibiya/" },
    sequence:  { zh: "sequence MIYASHITA PARK", en: "sequence MIYASHITA PARK", ja: "sequence MIYASHITA PARK（渋谷 ミヤシタパーク）", q: "sequence MIYASHITA PARK", url: "https://www.sequencehotels.com/miyashita-park/eng/" },
    tokyustay: { zh: "東急 Stay 新宿 Eastside", en: "Tokyu Stay Shinjuku Eastside", ja: "東急ステイ新宿イーストサイド", q: "Tokyu Stay Shinjuku Eastside", url: "https://www.tokyustay.co.jp/chn_tc/hotel/SE/" },
    stream:    { zh: "澀谷 Stream Excel 東急酒店", en: "Shibuya Stream Excel Hotel Tokyu", ja: "渋谷ストリームエクセルホテル東急", q: "Shibuya Stream Excel Hotel Tokyu", url: "https://www.tokyuhotels.co.jp/en/shibuyastream/index.html" },

    azur:      { zh: "AZUR et MASA UEKI", en: "AZUR et MASA UEKI", ja: "アズール エ マサ ウエキ 西麻布", q: "AZUR et MASA UEKI", url: "https://www.tablecheck.com/en/shops/restaurant-azur/reserve" }
  },

  calendar: [
    { date: "2026-12-20", who: "all", title: { zh: "抵達東京", en: "Arrive in Tokyo" },
      items: [
        { type: "leg", from: { zh: "香港", en: "Hong Kong" }, to: { zh: "東京", en: "Tokyo" }, via: { zh: "航班待定", en: "Flight TBC" }, dur: "~4h" },
        { time: { zh: "入住", en: "Check in" }, place: "blossom", sub: { zh: "放下行李，稍作休息", en: "Drop the bags and rest a little" } },
        { time: { zh: "18:30", en: "18:30" }, place: "ushigoro", sub: { zh: "銀座高級和牛燒肉，私人房間由店員代烤；四人，Q 套餐（已預付）", en: "Premium wagyu yakiniku in Ginza, grilled for you in a private room; four people, Q course (prepaid)" }, status: "booked" },
      ],
      xmas: [
        { time: { zh: "16:00–23:00", en: "16:00–23:00" }, place: "hibiya", sub: { zh: "HIBIYA Magic Time Illumination：酒店旁東京中城日比谷的聖誕樹及燈飾，晚餐前步行即達。11 月 12 日至 2 月 28 日", en: "HIBIYA Magic Time Illumination: the tree and lights at Tokyo Midtown Hibiya next to the hotel, a short walk before dinner. 12 Nov to 28 Feb" } },
        { time: { zh: "晚上", en: "Evening" }, place: "marunouchi", sub: { zh: "丸之內仲通約 1.2 公里的香檳金色樹燈，由酒店步行約 10 分鐘。11 月 12 日至 2 月 14 日", en: "About 1.2 km of champagne-gold tree lights along Marunouchi Naka-dori, about 10 minutes' walk from the hotel. 12 Nov to 14 Feb" } }
      ] },
    { date: "2026-12-21", who: "all", title: { zh: "明治神宮、表參道・青山及澀谷", en: "Meiji Jingu, Omotesando–Aoyama and Shibuya" },
      items: [
        { time: { zh: "09:00", en: "09:00" }, place: "meiji", sub: { zh: "在神社內參觀約一小時", en: "About an hour at the shrine" } },
        { time: { zh: "中午至下午", en: "Midday to afternoon" }, place: "omotesando", sub: { zh: "原宿午餐，再沿表參道逛至青山：建築、名店、百貨及設計店，是本日的主要購物時間", en: "Lunch in Harajuku, then along Omotesando into Aoyama: architecture, flagship stores, department stores and design shops. This is the day's main shopping" } },
        { time: { zh: "黃昏", en: "Late afternoon / sunset" }, place: "shibuyaSky", sub: { zh: "預約時段入場，黃昏時看日落及夜景；229 米高的露天觀景台", en: "Timed entry around sunset for the view into the night; a 229-metre open-air rooftop" }, status: "tobook" },
        { time: { zh: "傍晚", en: "Early evening" }, place: "shibuya", sub: { zh: "澀谷精簡購物：十字路口、PARCO、Scramble Square 等", en: "A compact Shibuya browse: the crossing, PARCO, Scramble Square and more" } },
        { type: "branches", mode: "split", head: { zh: "晚餐分頭活動", en: "Separate dinners" }, options: [
          { label: { zh: "John 與 Vanjai", en: "John and Vanjai" }, items: [
            { time: { zh: "晚餐", en: "Dinner" }, name: { zh: "澀谷就近晚餐", en: "Dinner nearby in Shibuya" } },
            { time: { zh: "晚上", en: "Evening" }, place: "namcotokyo", sub: { zh: "歌舞伎町夜景與夾公仔機", en: "Kabukicho lights and crane games" }, optional: true }
          ] },
          { label: { zh: "Ben 與 Christine", en: "Ben and Christine" }, items: [
            { time: { zh: "18:00", en: "18:00" }, place: "sassa", sub: { zh: "廣尾的日本料理 omakase，八個吧枱座位，18:00 全店同時開始；約 17:30 由澀谷乘的士前往", en: "Japanese omakase in Hiroo at an eight-seat counter; everyone starts together at 18:00. Take a taxi from Shibuya at about 17:30" }, status: "booked" },
            { time: { zh: "晚上", en: "Evening" }, place: "benfiddich", sub: { zh: "西新宿 15 席雞尾酒吧，21:00 或 23:00 入座", en: "A 15-seat west Shinjuku cocktail bar, 21:00 or 23:00 sittings" }, optional: true }
          ] }
        ] },
      ],
      xmas: [
        { time: { zh: "黃昏", en: "Dusk" }, place: "omotesandolights", sub: { zh: "表參道櫸樹大道燈飾，黃昏至 22:00；本日行程本身會經過。12 月 1–25 日", en: "The zelkova avenue lights on Omotesando, dusk to 22:00; the day's route walks right through them. 1–25 Dec" } },
        { time: { zh: "17:00–22:00", en: "17:00–22:00" }, place: "bluecave", sub: { zh: "公園通至代代木公園的藍色燈飾大道，由澀谷步行約 10 分鐘。12 月 11–27 日", en: "A tunnel of blue lights from Koen-dori to Yoyogi Park, about 10 minutes' walk from Shibuya. 11–27 Dec" } }
      ] },
    { date: "2026-12-22", who: "all", title: { zh: "淺草寺、合羽橋及銀座茶道體驗", en: "Senso-ji, Kappabashi and a Ginza tea ceremony" },
      items: [
        { time: { zh: "上午", en: "Morning" }, place: "asakusaObservation", sub: { zh: "雷門對面的 8 樓免費展望台，可俯瞰仲見世通、淺草寺及晴空塔", en: "Free 8F observation terrace opposite Kaminarimon, overlooking Senso-ji and Skytree" } },
        { time: { zh: "上午較後", en: "Late morning" }, place: "sensoji", sub: { zh: "淺草寺、雷門及仲見世通", en: "Senso-ji, Kaminarimon and Nakamise" } },
        { time: { zh: "中午前後", en: "Late morning / midday" }, place: "asakusaUnderground", sub: { zh: "短暫參觀淺草地下街，再步行往合羽橋", en: "Short visit to Asakusa Underground Street, then walk toward Kappabashi" } },
        { time: { zh: "下午", en: "Afternoon" }, place: "kappabashi", sub: { zh: "短逛廚具及食品模型街；店舖約 10:00–17:00 營業", en: "A short browse along the kitchenware and food-model street; shops open about 10:00–17:00" } },
        { time: { zh: "下午較後", en: "Late afternoon" }, place: "chazen", sub: { zh: "約 45 分鐘的茶道體驗：品嚐和菓子、觀看茶道示範，再親手打抹茶；位於歌舞伎座附近", en: "A 45-minute tea ceremony: Japanese sweets, a demonstration, then whisking your own matcha; near Kabukiza" }, status: "tobook" },
        { time: { zh: "傍晚", en: "Early evening" }, place: "ginza", sub: { zh: "銀座輕鬆購物", en: "Some relaxed shopping in Ginza" } },
        { time: { zh: "晚餐前", en: "Before dinner" }, place: "blossom", sub: { zh: "回酒店休息", en: "Rest at the hotel" } },
        { time: { zh: "20:30", en: "20:30" }, place: "kitafuku", sub: { zh: "銀座螃蟹料理，冬季活松葉蟹套餐；四人。由酒店步行或乘的士約 10 分鐘", en: "Crab in Ginza: the winter live Matsuba crab course; four people. About 10 minutes from the hotel on foot or by taxi" }, status: "booked" },
        { time: { zh: "晚餐後", en: "After dinner" }, place: "sotoroku", sub: { zh: "Ben 與 Christine 可到酒吧坐坐：酒店內，葡萄酒、清酒及威士忌", en: "A nightcap for Ben and Christine: in the hotel, wine, sake and whisky" }, optional: true },
        { time: { zh: "晚餐後", en: "After dinner" }, place: "imperialbar", sub: { zh: "或到帝國酒店的經典雞尾酒吧，晚上不設預約", en: "Or classic cocktails at the Imperial Hotel, evening walk-in only" }, optional: true },
      ],
      xmas: [
        { time: { zh: "下午", en: "Afternoon" }, place: "ginza", sub: { zh: "銀座逛街時順道欣賞百貨公司的聖誕櫥窗及裝飾", en: "Department-store Christmas windows and decorations while shopping in Ginza" } },
        { time: { zh: "晚上", en: "Evening" }, place: "marunouchi", sub: { zh: "北福晚餐後可散步前往，12 月燈飾亮至深夜", en: "A stroll after dinner at Kitafuku; in December the lights stay on late" } }
      ] },
    { date: "2026-12-23", who: "all", stay: "besshosasa", title: { zh: "前往富士吉田，入住溫泉旅館", en: "To Fujiyoshida for a night at the ryokan" },
      items: [
        { type: "leg", from: { zh: "東京", en: "Tokyo" }, to: { zh: "富士吉田", en: "Fujiyoshida" }, via: { zh: "上午乘富士回遊直達列車由新宿出發，約兩小時，中午前抵達河口湖站", en: "A morning Fuji Excursion direct train from Shinjuku, about two hours, reaching Kawaguchiko Station before noon" }, dur: "~3h" },
        { time: { zh: "11:45–12:45", en: "11:45–12:45" }, place: "onda", sub: { zh: "河口湖站附近午餐；行李先放車站儲物櫃或直接送往旅館", en: "Lunch near Kawaguchiko Station; leave luggage in station lockers or send it straight to the ryokan" } },
        { time: { zh: "13:00–13:25", en: "13:00–13:25" }, place: "honcho", sub: { zh: "以富士山為背景的老街，短暫停留拍照；由河口湖站乘的士約 15 分鐘", en: "Old street with Mt Fuji behind it; a short photo stop, about 15 minutes by taxi from Kawaguchiko Station" } },
        { time: { zh: "13:35–15:05", en: "13:35–15:05" }, place: "chureito", sub: { zh: "五重塔與富士山同框；上山約 400 級樓梯，慢慢走約 30 分鐘", en: "The pagoda framed with Mt Fuji; about 400 steps up, roughly 30 minutes at an easy pace" } },
        { time: { zh: "15:30 起", en: "From 15:30" }, place: "besshosasa", sub: { zh: "入住、泡溫泉及私人風呂；旅館晚餐，欣賞富士山景色", en: "Check in, hot spring and private bath; ryokan dinner with the Fuji view" }, status: "booked" },
        { type: "note", text: { zh: "到達河口湖站或富士山站後致電旅館，免費接送（13:00–18:00）。", en: "On reaching Kawaguchiko or Fujisan Station, call the ryokan for the free pickup (13:00–18:00)." } },
      ] },
    { date: "2026-12-24", who: "all", title: { zh: "包車遊山中湖及忍野八海，之後返回東京", en: "Lake Yamanaka and Oshino by car, then back to Tokyo" },
      items: [
        { time: { zh: "08:00–10:00", en: "08:00–10:00" }, place: "besshosasa", sub: { zh: "旅館早餐、最後一次私人風呂、收拾行李及退房", en: "Ryokan breakfast, a last private bath, pack and check out" } },
        { time: { zh: "10:30", en: "10:30" }, place: "fujicharter", sub: { zh: "包車在旅館接載四人及行李，連停留全程約 5 小時", en: "Private car picks up four people and luggage at the ryokan; about 5 hours including stops" }, status: "tobook" },
        { time: { zh: "11:00–12:00", en: "11:00–12:00" }, place: "yamanaka", sub: { zh: "在長池親水公園湖畔看富士山，可尋找湖上的野生天鵝", en: "The Fuji view from the Nagaike park lakeside; look for the resident swans" } },
        { time: { zh: "12:15–13:30", en: "12:15–13:30" }, place: "oshino", sub: { zh: "忍野八海只走中央泉池及湧水一帶", en: "Oshino Hakkai: focus on the central ponds and springs" } },
        { time: { zh: "14:00–15:00", en: "14:00–15:00" }, name: { zh: "餺飥午餐", en: "Hōtō lunch" }, sub: { zh: "山梨名物：南瓜味噌湯煮粗麵；在河口湖站附近，不預約", en: "Yamanashi's specialty: thick noodles in pumpkin-miso broth; near Kawaguchiko Station, no booking" } },
        { time: { zh: "15:30–16:30", en: "15:30–16:30" }, place: "fujicharter", sub: { zh: "包車送到河口湖站；處理行李，準備上車", en: "Car drops us at Kawaguchiko Station; sort the luggage and get ready for the train" }, status: "tobook" },
        { type: "leg", from: { zh: "河口湖站", en: "Kawaguchiko Station" }, to: { zh: "新宿", en: "Shinjuku" }, via: { zh: "富士回遊直達列車 16:48 → 18:46", en: "Fuji Excursion direct train 16:48 → 18:46" }, dur: "~2h" },
        { time: { zh: "18:55–20:00", en: "18:55–20:00" }, place: "shogunburger", sub: { zh: "抵達新宿後的簡單晚餐；和牛漢堡快餐店", en: "A simple dinner on arrival in Shinjuku; a wagyu burger counter" }, optional: true },
        { time: { zh: "20:00–21:00", en: "20:00–21:00" }, place: "shinjuku", sub: { zh: "歌舞伎町霓虹及 Don Quijote 短途散步", en: "Short walk through Kabukicho neon and Don Quijote" }, optional: true },
        { time: { zh: "晚上", en: "Evening" }, name: { zh: "返回日比谷酒店休息", en: "Back to the hotel in Hibiya to rest" }, sub: { zh: "由新宿返回日比谷，門到門約 25–35 分鐘", en: "Shinjuku back to Hibiya, about 25–35 minutes door to door" } },
      ],
      xmas: [
        { time: { zh: "16:30–24:00", en: "16:30–24:00" }, place: "minamilumi", sub: { zh: "新宿站南口旁 Southern Terrace 的燈飾，富士回遊列車抵達後就在旁邊。11 月 11 日至 2 月 14 日", en: "The Southern Terrace lights beside Shinjuku Station's south exit, right where the Fuji train arrives. 11 Nov to 14 Feb" } },
      ] },
    { date: "2026-12-25", who: "all", title: { zh: "teamLab Borderless、麻布台及六本木聖誕燈飾", en: "teamLab Borderless, Azabudai and Roppongi Christmas lights" },
      items: [
        { time: { zh: "上午", en: "Morning" }, name: { zh: "輕鬆的早上", en: "An easy morning" }, sub: { zh: "在酒店附近早餐，午前出發往麻布台之丘", en: "Breakfast near the hotel, then head to Azabudai Hills before lunch" } },
        { time: { zh: "下午", en: "Afternoon" }, place: "borderless", sub: { zh: "本日重點；預約時段入場，作品在各房間之間流動，館內約兩至三小時", en: "The day's highlight; timed entry, with artworks drifting between rooms; about 2–3 hours inside" }, status: "tobook" },
        { time: { zh: "聖誕晚餐", en: "Christmas dinner" }, place: "largent", sub: { zh: "霞關法國菜聖誕套餐，每位 ¥28,600；由麻布台或六本木乘的士約 10 分鐘", en: "French Christmas course in Kasumigaseki, ¥28,600 pp; about 10 minutes from Azabudai or Roppongi by taxi" }, status: "tobook" },
      ],
      xmas: [
        { time: { zh: "11:00–21:00", en: "11:00–21:00" }, place: "azabudaixmas", sub: { zh: "麻布台之丘中央廣場的聖誕市集，免費入場，就在 teamLab Borderless 旁。11 月 21 日至 12 月 25 日", en: "The Christmas market in Azabudai Hills' central plaza, free entry, right by teamLab Borderless. 21 Nov to 25 Dec" } },
        { time: { zh: "17:00–22:00", en: "17:00–22:00" }, place: "roppongihills", sub: { zh: "櫸木坂「SNOW & BLUE」燈飾，遠望東京鐵塔；旁邊大屋根廣場另有六本木之丘聖誕市集（11:00–21:00）。兩者均至 12 月 25 日", en: "Keyakizaka's 'SNOW & BLUE' lights with Tokyo Tower in view, plus the Roppongi Hills Christmas Market in the Ōyane Plaza (11:00–21:00). Both run until 25 Dec" } },
        { time: { zh: "晚上", en: "Evening" }, place: "shiba", sub: { zh: "東京聖誕市集芝公園會場：德國式市集，以東京鐵塔為背景，位於麻布台與霞關之間。須付入場費（約 ¥1,000–2,000），可在 KKday 預先購票。12 月 4–25 日", en: "Tokyo Christmas Market at Shiba Park: a German-style market with Tokyo Tower behind it, between Azabudai and Kasumigaseki. Paid entry (about ¥1,000–2,000), with advance tickets on KKday. 4–25 Dec" }, optional: true },
      ] },
    { date: "2026-12-26", who: "all", title: { zh: "皇居東御苑、東京站及日本橋，晚餐銀座有涯", en: "Imperial Palace East Gardens, Tokyo Station and Nihombashi, dinner at Ginza Ugai" },
      items: [
        { type: "branches", mode: "or", head: { zh: "主要行程為東京站一帶；橫濱為後備", en: "The Tokyo Station area is the plan; Yokohama is the backup" }, options: [
          { label: { zh: "主要：皇居、東京站及日本橋", en: "Plan: the Imperial Palace, Tokyo Station and Nihombashi" }, items: [
            { time: { zh: "09:30–10:45", en: "09:30–10:45" }, place: "eastgardens", sub: { zh: "由酒店乘的士到大手門。江戶城的石牆、天守台遺址及二之丸庭園；冬天以歷史及綠意為主。免費入場", en: "Taxi from the hotel to Ote-mon gate. Edo Castle's stone walls, the old keep's base and the Ninomaru garden; in winter this is about history and green space. Free entry" } },
            { time: { zh: "11:05–11:40", en: "11:05–11:40" }, place: "marunouchi", sub: { zh: "步行約 15–20 分鐘到東京站丸之內側：在站前廣場欣賞 1914 年落成的紅磚站舍，再上 KITTE 6 樓屋上庭園從高處觀看", en: "A 15–20 minute walk to the Marunouchi side of Tokyo Station: the 1914 red-brick building from the plaza, then a second view from the KITTE 6F rooftop garden" } },
            { time: { zh: "11:45–12:45", en: "11:45–12:45" }, name: { zh: "東京拉麵街午餐", en: "Lunch at Tokyo Ramen Street" }, sub: { zh: "穿過東京站到八重洲側地庫一層，多間拉麵名店任選；宜在正午人潮前入座", en: "Cross Tokyo Station to the Yaesu side, basement level 1, where several well-known ramen shops sit side by side; aim to sit down before the noon rush" } },
            { time: { zh: "13:00–13:35", en: "13:00–13:35" }, place: "takashimaya", sub: { zh: "由八重洲向北步行約 10–15 分鐘。欣賞百貨公司的古典建築，短暫逛地庫美食或手信", en: "A 10–15 minute walk north from Yaesu. Admire the heritage building, with a short stop for the food hall or gifts" } },
            { time: { zh: "13:45–14:00", en: "13:45–14:00" }, place: "nihonbashibridge", sub: { zh: "江戶時代全國道路的起點，短暫停留；橋上現有高速公路經過", en: "The Edo-era starting point of Japan's road network, a short stop; an expressway now runs overhead" } },
            { time: { zh: "14:00–15:00", en: "14:00–15:00" }, place: "nihombashi", sub: { zh: "本日主要購物：百年老店的古典中庭及地庫美食街", en: "The day's main shopping: the century-old store's grand atrium and its basement food hall" } },
            { time: { zh: "15:00–15:45", en: "15:00–15:45" }, place: "fukutoku", sub: { zh: "參觀小巧的福德神社，再到 COREDO 室町逛日本工藝及手信店，或坐下喝茶", en: "A visit to the small Fukutoku Shrine, then Japanese craft and gift shops at COREDO Muromachi, or a sit-down tea break" } },
            { type: "leg", from: { zh: "室町", en: "Muromachi" }, to: { zh: "日比谷酒店", en: "the hotel in Hibiya" }, via: { zh: "乘的士", en: "Taxi" }, dur: "~15m" },
            { time: { zh: "16:15 起", en: "From 16:15" }, place: "blossom", sub: { zh: "回酒店休息", en: "Rest at the hotel" } },
            { time: { zh: "晚餐前後", en: "Around dinner" }, place: "marunouchi", sub: { zh: "丸之內仲通冬季燈飾，按有涯的晚餐時間安排", en: "The Marunouchi Naka-dori winter lights, timed around the Ugai dinner" }, optional: true }
          ] },
          { label: { zh: "後備：橫濱", en: "Backup: Yokohama" }, backup: true, items: [
            { type: "leg", from: { zh: "日比谷", en: "Hibiya" }, to: { zh: "新橫濱", en: "Shin-Yokohama" }, via: { zh: "09:00 左右出發，乘鐵路前往", en: "Leave around 09:00 by train" }, dur: "~45–60m" },
            { time: { zh: "10:30–12:30", en: "10:30–12:30" }, place: "ramenmuseum", sub: { zh: "昭和懷舊街景中的拉麵店，各自點小碗拉麵作午餐", en: "Ramen shops in a retro Showa-era street; everyone picks small bowls for lunch" } },
            { time: { zh: "下午", en: "Afternoon" }, place: "cupnoodles", sub: { zh: "港未來的杯麵博物館，可親手設計杯麵", en: "The Cup Noodles Museum in Minato Mirai, where you design your own cup" }, optional: true },
            { time: { zh: "下午", en: "Afternoon" }, place: "chinatown", sub: { zh: "散步及小食", en: "A stroll and snacks" } },
            { time: { zh: "下午較後", en: "Late afternoon" }, place: "yamashita", sub: { zh: "中華街旁的海濱公園，望向橫濱港", en: "The waterfront park next to Chinatown, looking out over the harbour" }, optional: true },
            { type: "leg", from: { zh: "橫濱", en: "Yokohama" }, to: { zh: "銀座", en: "Ginza" }, via: { zh: "乘鐵路返回東京", en: "Train back to Tokyo" }, dur: "~45–60m" }
          ] }
        ] },
        { time: { zh: "晚餐", en: "Dinner" }, place: "ugai", sub: { zh: "四人同行的最後一晚；銀座傳統懷石料理，只有七個吧枱座位", en: "The last night all four are together; traditional kaiseki in Ginza at a seven-seat counter" }, status: "tobook" }
      ] },
    { date: "2026-12-27", who: "split", title: { zh: "Ben 與 Christine 回程", en: "Ben and Christine fly home" },
      items: [
        { type: "note", text: { zh: "Ben 與 Christine 返回香港；John 與 Vanjai 留在東京。", en: "Ben and Christine fly back to Hong Kong; John and Vanjai stay in Tokyo." } }
      ],
      xmas: [
        { time: { zh: "晚上", en: "Evening" }, place: "hibiya", sub: { zh: "日比谷及丸之內燈飾仍然亮著，在酒店附近散步即可", en: "The Hibiya and Marunouchi lights are still on; just a stroll near the hotel" } },
        { time: { zh: "17:00–22:00", en: "17:00–22:00" }, place: "bluecave", sub: { zh: "藍洞燈飾的最後一晚，由日比谷乘地鐵約 25 分鐘", en: "The Blue Cave's last night, about 25 minutes from Hibiya by subway" } }
      ] },
    { date: "2026-12-28", who: "jv", title: { zh: "John 與 Vanjai 自由行", en: "John and Vanjai's own day" },
      items: [
        { time: { zh: "28 或 29 日晚餐", en: "Dinner, 28th or 29th" }, place: "maz", sub: { zh: "紀尾井町秘魯創意菜，每位 ¥33,000（含稅）+ 10% 服務費", en: "Creative Peruvian in Kioicho, ¥33,000 pp incl. tax + 10% service" }, status: "tobook" },
        { time: { zh: "28 或 29 日晚餐", en: "Dinner, 28th or 29th" }, place: "maerge", sub: { zh: "南青山現代法國菜，衣著須半正式", en: "Modern French in Minami-Aoyama; smart dress" }, status: "tobook" },
        { type: "note", text: { zh: "MAZ 及 mærge 各佔一晚，次序視乎訂位。", en: "MAZ and mærge take one night each; the order depends on bookings." } },
        { type: "note", text: { zh: "日間由 Vanjai 決定。", en: "Vanjai picks the daytime." } } ],
      xmas: [
        { time: { zh: "16:00–23:00", en: "16:00–23:00" }, place: "ebisu", sub: { zh: "惠比壽花園廣場冬季燈飾，11 月 14 日至 2 月 28 日，另有 Baccarat 水晶吊燈", en: "Yebisu Garden Place winter lights, 14 Nov to 28 Feb, plus the Baccarat crystal chandelier" } },
        { time: { zh: "17:00–22:00", en: "17:00–22:00" }, place: "meguro", sub: { zh: "五反田一帶的目黑川沿岸燈飾，由惠比壽乘 JR 山手線兩個站。12 月 4 日至 1 月 31 日", en: "Lights along the Meguro River around Gotanda, two stops from Ebisu on the JR Yamanote Line. 4 Dec to 31 Jan" } }
      ] },
    { date: "2026-12-29", who: "jv", title: { zh: "John 與 Vanjai 自由行", en: "John and Vanjai's own day" },
      items: [ { type: "note", text: { zh: "自由安排；晚餐是 MAZ 或 mærge 其中一間（見 28 日）。", en: "Free to plan; dinner is whichever of MAZ or mærge isn't on the 28th." } } ],
      xmas: [
        { time: { zh: "17:00–24:00", en: "17:00–24:00" }, place: "domecity", sub: { zh: "東京巨蛋城冬季燈飾。11 月 19 日至 2 月 28 日", en: "Tokyo Dome City's winter lights. 19 Nov to 28 Feb" } },
        { time: { zh: "16:30–24:00", en: "16:30–24:00" }, place: "minamilumi", sub: { zh: "新宿南口燈飾，至 2 月 14 日", en: "The Shinjuku south exit lights, until 14 Feb" } }
      ] },
    { date: "2026-12-30", who: "jv", title: { zh: "John 與 Vanjai 回程", en: "John and Vanjai fly home" },
      items: [ { type: "note", text: { zh: "回程日，不安排遠行。", en: "Travel day; nothing far." } } ],
      xmas: [
        { time: { zh: "出發前", en: "Before leaving" }, place: "hibiya", sub: { zh: "如乘夜機，出發前可在酒店旁再看一次日比谷燈飾", en: "With a night flight, one more look at the Hibiya lights beside the hotel before leaving" } }
      ] }
  ],

  periods: [
    { from: "2026-12-20", to: "2026-12-26", title: { zh: "四人同行", en: "All four of us" }, hint: { zh: "Ben、Christine、John、Vanjai", en: "Ben, Christine, John, Vanjai" } },
    { from: "2026-12-27", to: "2026-12-30", title: { zh: "John 與 Vanjai", en: "John and Vanjai" }, hint: { zh: "Ben 與 Christine 27 日返回香港", en: "Ben and Christine fly home on the 27th" } }
  ],

  ideas: [],

  hotels: [
    {
      place: "besshosasa", status: "booked",
      area: { zh: "富士吉田 · 富士山附近", en: "Fujiyoshida · near Mt Fuji" },
      facts: [
    { zh: "12 月 23 日入住一晚，24 日早上退房", en: "One night: check in 23 Dec, check out the morning of the 24th" }
      ],
      note: { zh: "下午、晚上及翌日早上都留在旅館泡溫泉、欣賞富士山。", en: "The afternoon, evening and next morning are for the ryokan, the baths and the Fuji view." }
    },
    {
      place: "blossom", status: "first",
      area: { zh: "東京・新橋／日比谷", en: "Tokyo · Shinbashi / Hibiya" },
      facts: [
        { zh: "JR 新橋站日比谷口步行約 5 分鐘；內幸町站約 2 分鐘", en: "About 5 min from JR Shinbashi Hibiya Exit; 2 min from Uchisaiwaicho" },
        { zh: "入住 15:00；退房 11:00", en: "Check-in 15:00; check-out 11:00" },
        { zh: "20–26 日晚兩間房；27–29 日晚 John 與 Vanjai 一間房", en: "Two rooms for the nights of 20–26 Dec; one room for John and Vanjai on 27–29 Dec" }
      ],
      note: { zh: "入住富士山旅館當晚，東京的房間是保留還是退房並寄存行李，須待日期及房價確認後決定。", en: "Whether to keep the Tokyo rooms during the Fuji night or check out and store luggage depends on the voucher dates and price." }
    }
  ],

  food: [
    {
      title: { zh: "John 獨自品嚐的拉麵", en: "John's solo ramen" },
      intro: { zh: "東京拉麵大賞 (TRY) 得獎店。", en: "Tokyo Ramen of the Year (TRY) winners." },
      items: [
        { place: "honda", kind: { zh: "醬油沾麵", en: "Shoyu tsukemen" }, status: "first", note: { zh: "可網上預約「優先到店時間」，但仍可能需要等候。逢星期三休息。", en: "Can request a priority arrival time online; may still wait. Closed Wednesdays." } },
        { place: "hachigo", kind: { zh: "鹽味拉麵，法國廚師背景", en: "Shio ramen, French-chef background" }, price: { zh: "訂位費 ¥500", en: "¥500 booking fee" }, status: "first", note: { zh: "每週六早上 9 時（日本時間）開放下一週的訂位。", en: "Bookings for the following week open Saturdays 9:00 Japan time." } },
        { place: "seishin", kind: { zh: "2025 新店大獎 · 落合（中野附近）", en: "2025 newcomer grand prize · Ochiai (near Nakano)" }, status: "idea", note: { zh: "只有 8 個座位，不接受訂位，可能需要長時間排隊。", en: "Eight seats, no reservations, possibly a long queue." } }
      ]
    },
    {
      title: { zh: "四人晚餐", en: "Dinners for all four" },
      intro: { zh: "四人同行期間的晚餐。", en: "Dinners while all four of us are together." },
      items: [
        { place: "ushigoro", kind: { zh: "燒肉 · 銀座 · 20 日", en: "Yakiniku · Ginza · 20 Dec" }, price: { zh: "Q 套餐 ¥22,500／位，已預付", en: "Q course ¥22,500 pp, prepaid" }, status: "booked", note: { zh: "20 日 18:30，四人。已訂位。", en: "18:30 on 20 Dec, four people. Booked." } },
        { place: "kitafuku", kind: { zh: "螃蟹料理 · 銀座 · 22 日", en: "Crab · Ginza · 22 Dec" }, price: { zh: "活松葉蟹套餐 ¥55,000／位，另加 10% 服務費；在店內付款，或按當日蟹價調整", en: "Live Matsuba crab course ¥55,000 pp plus 10% service; paid at the restaurant, may rise with the day's crab price" }, status: "booked", note: { zh: "22 日 20:30，四人。已訂位。", en: "20:30 on 22 Dec, four people. Booked." } },
        { place: "largent", kind: { zh: "法國菜 · 霞關 · 25 日", en: "French · Kasumigaseki · 25 Dec" }, price: { zh: "聖誕套餐每位 ¥28,600", en: "Christmas course ¥28,600 pp" }, status: "first", note: { zh: "25 日四人聖誕晚餐，麻布台及六本木行程之後。", en: "Christmas dinner for four on 25 Dec, after Azabudai and Roppongi." } },
        { place: "ugai", kind: { zh: "懷石料理 · 銀座 · 26 日", en: "Kaiseki · Ginza · 26 Dec" }, status: "first", note: { zh: "26 日四人晚餐；七個吧枱座位。", en: "Four-person dinner on 26 Dec; seven counter seats." } }
      ]
    },
    {
      title: { zh: "John 與 Vanjai 兩人晚餐", en: "John and Vanjai's dinners" },
      intro: { zh: "12 月 28 及 29 日，各佔一晚。", en: "28 and 29 Dec, one each." },
      items: [
        { place: "maz", kind: { zh: "秘魯創意菜 · 紀尾井町", en: "Creative Peruvian · Kioicho" }, price: { zh: "每位 ¥33,000（含稅）+ 10% 服務費", en: "¥33,000 pp incl. tax + 10% service" }, status: "first", note: { zh: "28 或 29 日兩位。", en: "Two people, on the 28th or 29th." } },
        { place: "maerge", kind: { zh: "現代法國菜 · 南青山", en: "Modern French · Minami-Aoyama" }, status: "first", note: { zh: "逢星期日休息；衣著須半正式。", en: "Closed Sundays; smart dress." } }
      ]
    },
    {
      title: { zh: "Ben 與 Christine 兩人晚餐", en: "Ben and Christine's dinner" },
      intro: { zh: "21 日晚上，其他人在澀谷用餐。", en: "The evening of 21 Dec, while the others eat in Shibuya." },
      items: [
        { place: "sassa", kind: { zh: "日本料理 omakase · 廣尾 · 21 日", en: "Japanese omakase · Hiroo · 21 Dec" }, price: { zh: "每位 ¥35,200（含稅）+ 10% 服務費，在店內以非現金付款", en: "¥35,200 pp incl. tax + 10% service, paid cashless at the restaurant" }, status: "booked", note: { zh: "21 日 18:00，兩位。八個吧枱座位，全店同時開始；菜式按季節更換。", en: "18:00 on 21 Dec, two people. Eight counter seats, all starting together; the menu changes with the seasons." } }
      ]
    },
    {
      title: { zh: "Christine 想吃的", en: "Christine's picks" },
      empty: { zh: "Christine 有想品嚐的餐廳嗎？請告訴我們，我們會安排在行程中。", en: "Anywhere Christine would like to eat? Let us know and we'll fit it in." }
    },
    {
      title: { zh: "晚飯後喝一杯（Ben 與 Christine）", en: "A drink after dinner (Ben and Christine)" },
      intro: { zh: "可選的兩人晚間活動。", en: "Optional evenings for two." },
      items: [
        { place: "benfiddich", kind: { zh: "創意雞尾酒 · 西新宿", en: "Inventive cocktails · west Shinjuku" }, note: { zh: "21 日 Sassa 晚餐後；15 席，設 19:00、21:00、23:00 預約時段", en: "After dinner at Sassa on the 21st; 15 seats, sittings at 19:00, 21:00 and 23:00" } },
        { place: "mementomori", kind: { zh: "可可及植物雞尾酒 · 虎之門之丘", en: "Cacao and botanical cocktails · Toranomon Hills" }, note: { zh: "平日營業至 23:00", en: "Weekdays to 23:00" } },
        { place: "sotoroku", kind: { zh: "葡萄酒、清酒、威士忌 · 酒店內", en: "Wine, sake, whisky · in the hotel" }, note: { zh: "最方便，就在酒店內；23:00 關門（22:30 最後入場）", en: "The easiest, right in the hotel; closes 23:00 (last entry 22:30)" } },
        { place: "imperialbar", kind: { zh: "經典雞尾酒 · 帝國酒店", en: "Classic cocktails · Imperial Hotel" }, note: { zh: "營業至午夜；晚上不設預約，即場候位", en: "Open to midnight; evening is walk-in only" } },
        { place: "peterbar", kind: { zh: "夜景、雞尾酒及葡萄酒 · 半島酒店", en: "Views, cocktails and wine · The Peninsula" }, note: { zh: "26 日或其他晚上；不設預約、不收服務費", en: "The 26th or another evening; no reservations or cover charge" } },
        { place: "mixologysalon", kind: { zh: "日本茶雞尾酒 · GINZA SIX", en: "Japanese tea cocktails · GINZA SIX" }, note: { zh: "在銀座的晚上；只有 8 席，宜預早查兩人空位", en: "An evening in Ginza; only 8 seats, check a two-person slot early" } }
      ]
    },
    {
      title: { zh: "早餐・咖啡・午餐", en: "Breakfast · coffee · lunch" },
      intro: { zh: "毋須訂位，路過即可光顧。", en: "Walk-in places, no booking needed." },
      sub: [
        {
          title: { zh: "銀座・日比谷", en: "Ginza · Hibiya" },
          items: [
            { place: "fransuya", kind: { zh: "早餐 · 早上 8 時開門", en: "Breakfast · opens 8:00" } },
            { place: "petitmec", kind: { zh: "麵包早餐 · 早上 8 時開門", en: "Bakery breakfast · opens 8:00" } },
            { place: "coffeerin", kind: { zh: "咖啡 · 10 時開門", en: "Coffee · opens 10:00" } },
            { place: "hanayama", kind: { zh: "烏冬午餐 · 11 時開門", en: "Udon lunch · opens 11:00" }, note: { zh: "不接受訂位，購票後排隊。", en: "No bookings; ticket machine queue." } },
            { place: "nanakura", kind: { zh: "平日午餐 · 新橋", en: "Weekday lunch · Shimbashi" } }
          ]
        },
        {
          title: { zh: "東京站", en: "Tokyo Station" },
          items: [
            { place: "viron", kind: { zh: "麵包店 · 9 時開門", en: "Bakery · opens 9:00" } },
            { place: "burdigala", kind: { zh: "麵包咖啡 · 站內 · 7 時開門", en: "Bakery café · inside the station · opens 7:00" } }
          ]
        },
        {
          title: { zh: "麻布台", en: "Azabudai" },
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
    { title: { zh: "聖誕活動日期", en: "Christmas event dates" }, text: { zh: "大部分聖誕市集及聖誕樹於 12 月 25 日結束；丸之內、日比谷、新宿、惠比壽等冬季燈飾則延續至 2 月。每日頁面另有「聖誕燈飾及市集」一欄。", en: "Most Christmas markets and trees finish on 25 Dec; winter lights in Marunouchi, Hibiya, Shinjuku, Ebisu and elsewhere stay on until February. Each day page has its own Christmas lights and markets section." } },
    { title: { zh: "購物地區", en: "Where to shop" }, text: { zh: "表參道・青山是主要的共同購物區，名店、百貨及設計店較集中，氣氛成熟。澀谷時間較短，感受熱鬧氣氛。日本橋的三越及高島屋環境寧靜傳統，地庫美食街適合購買手信。24 日由富士返回後可順道逛新宿。喜歡古著及二手店的話，可去下北澤。", en: "Omotesando–Aoyama is the main shared shopping area, with flagships, department stores and design shops in a grown-up setting. Shibuya is a shorter, livelier stop. Nihombashi's Mitsukoshi and Takashimaya are calm and traditional, with food halls good for gifts. Shinjuku fits in after the Fuji return on the 24th. Shimokitazawa is the place for vintage and second-hand shops." } },
    { title: { zh: "每天兩個區", en: "Two areas a day" }, text: { zh: "每天約遊覽兩個區，中間用餐和乘車，不會太累。", en: "About two areas a day, with a meal and travel between, keeps the pace comfortable." } },
    { title: { zh: "時間為估計", en: "Times are estimates" }, text: { zh: "所列時間均為約數；註明「門到門」的已包括轉車及步行。", en: "All times are approximate; anything marked door to door includes transfers and walking." } }
  ]
};
