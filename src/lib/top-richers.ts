export type TopRicher = {
  rank: number;
  name: string;
  netWorthBillion: number;
  netWorthLabel: string;
  age: number;
  country: string;
  category: string;
  profileSlug?: string;
};

export type TopRicherLocale = "ko" | "en" | "ja" | "zh" | "es" | "fr";

export const topRichersSource = {
  name: "Forbes 실시간 억만장자 순위",
  url: "https://www.forbes.com/real-time-billionaires/",
  publishedAt: "2026-03-10",
  informationAsOf: "2026-06-22",
  retrievedAt: "2026-06-23",
  note: "Real-time Forbes data as of June 22, 2026. Stock prices fluctuate daily.",
  stats: {
    totalBillionaires: 3383,
    totalNetWorthTrillion: 20.1,
    increaseFrom2025: 400,
    unitedStatesBillionaires: 989,
    chinaIncludingHongKongBillionaires: 610,
    indiaBillionaires: 229,
  },
};

export type TopRicherImage = {
  src: string;
  sourceUrl: string;
  credit: string;
};

export const topRicherImages: Record<string, TopRicherImage> = {
  "Elon Musk": {
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Elon_Musk_-_54820081119_%28cropped%29.jpg/250px-Elon_Musk_-_54820081119_%28cropped%29.jpg",
    sourceUrl: "https://en.wikipedia.org/wiki/Elon_Musk",
    credit: "Wikimedia",
  },
  "Larry Page": {
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Larry_Page_in_the_European_Parliament%2C_17.06.2009_%28cropped%29.jpg/250px-Larry_Page_in_the_European_Parliament%2C_17.06.2009_%28cropped%29.jpg",
    sourceUrl: "https://en.wikipedia.org/wiki/Larry_Page",
    credit: "Wikimedia",
  },
  "Sergey Brin": {
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Sergey_Brin_Ted_2010_%28cropped%29.jpg/250px-Sergey_Brin_Ted_2010_%28cropped%29.jpg",
    sourceUrl: "https://en.wikipedia.org/wiki/Sergey_Brin",
    credit: "Wikimedia",
  },
  "Jeff Bezos": {
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/260202-D-PM193-2205_SECWAR_Arsenal_of_Freedom_Tour_-_Florida_%283x4_cropped_on_Bezos_and_rotated%29.jpg/250px-260202-D-PM193-2205_SECWAR_Arsenal_of_Freedom_Tour_-_Florida_%283x4_cropped_on_Bezos_and_rotated%29.jpg",
    sourceUrl: "https://en.wikipedia.org/wiki/Jeff_Bezos",
    credit: "Wikimedia",
  },
  "Mark Zuckerberg": {
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/F20250904AH-2824_%2854778373111%29_%283x4_cropped_on_Zuckerberg_following_the_rule_of_thirds%29.jpg/250px-F20250904AH-2824_%2854778373111%29_%283x4_cropped_on_Zuckerberg_following_the_rule_of_thirds%29.jpg",
    sourceUrl: "https://en.wikipedia.org/wiki/Mark_Zuckerberg",
    credit: "Wikimedia",
  },
  "Larry Ellison": {
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/Larry_Ellison_picture.png/250px-Larry_Ellison_picture.png",
    sourceUrl: "https://en.wikipedia.org/wiki/Larry_Ellison",
    credit: "Wikimedia",
  },
  "Bernard Arnault & family": {
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Bernard_Arnault_%283%29_-_2017_%28cropped%29.jpg/250px-Bernard_Arnault_%283%29_-_2017_%28cropped%29.jpg",
    sourceUrl: "https://en.wikipedia.org/wiki/Bernard_Arnault",
    credit: "Wikimedia",
  },
  "Jensen Huang": {
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Jen-Hsun_Huang_2025.jpg/250px-Jen-Hsun_Huang_2025.jpg",
    sourceUrl: "https://en.wikipedia.org/wiki/Jensen_Huang",
    credit: "Wikimedia",
  },
  "Warren Buffett": {
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Warren_Buffett_at_the_2015_SelectUSA_Investment_Summit_%28cropped%29.jpg/250px-Warren_Buffett_at_the_2015_SelectUSA_Investment_Summit_%28cropped%29.jpg",
    sourceUrl: "https://en.wikipedia.org/wiki/Warren_Buffett",
    credit: "Wikimedia",
  },
  "Rob Walton & family": {
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/S._Robson_Walton_by_Gage_Skidmore.jpg/250px-S._Robson_Walton_by_Gage_Skidmore.jpg",
    sourceUrl: "https://en.wikipedia.org/wiki/Rob_Walton",
    credit: "Wikimedia",
  },
  "Jim Walton & family": {
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/Jim_Walton_attends_shareholders_meeting.jpg/250px-Jim_Walton_attends_shareholders_meeting.jpg",
    sourceUrl: "https://en.wikipedia.org/wiki/Jim_Walton",
    credit: "Wikimedia",
  },
  "Michael Dell": {
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Michael_Dell_%2852548152888%29_%28cropped%29.jpg/250px-Michael_Dell_%2852548152888%29_%28cropped%29.jpg",
    sourceUrl: "https://en.wikipedia.org/wiki/Michael_Dell",
    credit: "Wikimedia",
  },
  "Alice Walton": {
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Alice_Walton_portrait_%28cropped%29.jpg/250px-Alice_Walton_portrait_%28cropped%29.jpg",
    sourceUrl: "https://en.wikipedia.org/wiki/Alice_Walton",
    credit: "Wikimedia",
  },
  "Steve Ballmer": {
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/Steve_ballmer_2007_outdoors2-2.jpg/250px-Steve_ballmer_2007_outdoors2-2.jpg",
    sourceUrl: "https://en.wikipedia.org/wiki/Steve_Ballmer",
    credit: "Wikimedia",
  },
  "Carlos Slim Helu & family": {
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/Carlos_Slim_%2845680472234%29_%28cropped%29.jpg/250px-Carlos_Slim_%2845680472234%29_%28cropped%29.jpg",
    sourceUrl: "https://en.wikipedia.org/wiki/Carlos_Slim",
    credit: "Wikimedia",
  },
  "Changpeng Zhao": {
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Changpeng_Zhao_in_2022.jpg/250px-Changpeng_Zhao_in_2022.jpg",
    sourceUrl: "https://en.wikipedia.org/wiki/Changpeng_Zhao",
    credit: "Wikimedia",
  },
  "Michael Bloomberg": {
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/MichaelBloomberg-byPhilipRomano_%28cropped%29.jpg/250px-MichaelBloomberg-byPhilipRomano_%28cropped%29.jpg",
    sourceUrl: "https://en.wikipedia.org/wiki/Michael_Bloomberg",
    credit: "Wikimedia",
  },
  "Bill Gates": {
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Bill_Gates_at_the_European_Commission_-_P067383-987995_%28cropped%29_5.jpg/250px-Bill_Gates_at_the_European_Commission_-_P067383-987995_%28cropped%29_5.jpg",
    sourceUrl: "https://en.wikipedia.org/wiki/Bill_Gates",
    credit: "Wikimedia",
  },
  "Mukesh Ambani": {
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Mukesh_Ambani.jpg/250px-Mukesh_Ambani.jpg",
    sourceUrl: "https://en.wikipedia.org/wiki/Mukesh_Ambani",
    credit: "Wikimedia",
  },
  "Julia Koch & family": {
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/Julia_Koch.jpg/250px-Julia_Koch.jpg",
    sourceUrl: "https://en.wikipedia.org/wiki/Julia_Koch",
    credit: "Wikimedia",
  },
  "Charles Koch & family": {
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Charles_Koch_portrait_%28cropped%29.jpg/250px-Charles_Koch_portrait_%28cropped%29.jpg",
    sourceUrl: "https://en.wikipedia.org/wiki/Charles_Koch",
    credit: "Wikimedia",
  },
  "Zhang Yiming": {
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/The_CEO_Magazine_Cover.jpg/250px-The_CEO_Magazine_Cover.jpg",
    sourceUrl: "https://en.wikipedia.org/wiki/Zhang_Yiming",
    credit: "Wikimedia",
  },
  "Gautam Adani": {
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Gautam_Adani.jpg/250px-Gautam_Adani.jpg",
    sourceUrl: "https://en.wikipedia.org/wiki/Gautam_Adani",
    credit: "Wikimedia",
  },
  "Tadashi Yanai & family": {
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Tadashi_Yanai%2C_in_Japan_on_May_23%2C_2022_%281%29_%28cropped%29.jpg/250px-Tadashi_Yanai%2C_in_Japan_on_May_23%2C_2022_%281%29_%28cropped%29.jpg",
    sourceUrl: "https://en.wikipedia.org/wiki/Tadashi_Yanai",
    credit: "Wikimedia",
  },
  "Ma Huateng": {
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/%E9%A9%AC%E5%8C%96%E8%85%BE_Pony_Ma_2019.jpg/250px-%E9%A9%AC%E5%8C%96%E8%85%BE_Pony_Ma_2019.jpg",
    sourceUrl: "https://en.wikipedia.org/wiki/Pony_Ma",
    credit: "Wikimedia",
  },
  "Robin Zeng": {
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Robin_Zeng_2023.jpg/250px-Robin_Zeng_2023.jpg",
    sourceUrl: "https://en.wikipedia.org/wiki/Robin_Zeng",
    credit: "Wikimedia",
  },
  "Masayoshi Son": {
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Masayoshi_Son_%28P066533-522034%2C_cropped%29.jpg/250px-Masayoshi_Son_%28P066533-522034%2C_cropped%29.jpg",
    sourceUrl: "https://en.wikipedia.org/wiki/Masayoshi_Son",
    credit: "Wikimedia",
  },
  "Ken Griffin": {
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Kenneth_C._Griffin_photo.jpg/250px-Kenneth_C._Griffin_photo.jpg",
    sourceUrl: "https://en.wikipedia.org/wiki/Kenneth_C._Griffin",
    credit: "Wikimedia",
  },
  "Li Ka-shing": {
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Li_Ka_Shing.jpg/250px-Li_Ka_Shing.jpg",
    sourceUrl: "https://en.wikipedia.org/wiki/Li_Ka-shing",
    credit: "Wikimedia",
  },
  "Gianluigi Aponte": {
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Diego_Aponte%2C_Louis_Sola_and_Capt_Gianluigi_Aponte_cropped.png/250px-Diego_Aponte%2C_Louis_Sola_and_Capt_Gianluigi_Aponte_cropped.png",
    sourceUrl: "https://en.wikipedia.org/wiki/Gianluigi_Aponte",
    credit: "Wikimedia",
  },
  "Klaus-Michael Kuehne": {
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Kuehne_Taufe.jpg/250px-Kuehne_Taufe.jpg",
    sourceUrl: "https://en.wikipedia.org/wiki/Klaus-Michael_K%C3%BChne",
    credit: "Wikimedia",
  },
  "Thomas Frist Jr & family": {
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/Thomas_F._Frist_Jr._May%2C_2010.jpg/250px-Thomas_F._Frist_Jr._May%2C_2010.jpg",
    sourceUrl: "https://en.wikipedia.org/wiki/Thomas_F._Frist_Jr.",
    credit: "Wikimedia",
  },
  "Stephen Schwarzman": {
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/DBT_Magdalen_College%2C_Oxford_%26_Stephen_Schwarzman_19_March_2024-5_-_53600715712_%28cropped%29.jpg/250px-DBT_Magdalen_College%2C_Oxford_%26_Stephen_Schwarzman_19_March_2024-5_-_53600715712_%28cropped%29.jpg",
    sourceUrl: "https://en.wikipedia.org/wiki/Stephen_A._Schwarzman",
    credit: "Wikimedia",
  },
  "Paolo Ardoino": {
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/Paolo_Ardoino_by_Gage_Skidmore.jpg/250px-Paolo_Ardoino_by_Gage_Skidmore.jpg",
    sourceUrl: "https://en.wikipedia.org/wiki/Paolo_Ardoino",
    credit: "Wikimedia",
  },
  "William Ding": {
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Ding_Lei_-_Founder_of_NetEase_-_12_-_12_-_2025.jpg/250px-Ding_Lei_-_Founder_of_NetEase_-_12_-_12_-_2025.jpg",
    sourceUrl: "https://en.wikipedia.org/wiki/Ding_Lei",
    credit: "Wikimedia",
  },
  "Miriam Adelson & family": {
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Miriam_Adelson_2023.jpg/250px-Miriam_Adelson_2023.jpg",
    sourceUrl: "https://en.wikipedia.org/wiki/Miriam_Adelson",
    credit: "Wikimedia",
  },
  "Alexey Mordashov & family": {
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Alexey_Mordashov%2C_2018.jpg/250px-Alexey_Mordashov%2C_2018.jpg",
    sourceUrl: "https://en.wikipedia.org/wiki/Alexei_Mordashov",
    credit: "Wikimedia",
  },
  "Eduardo Saverin": {
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Eduardo_Saverin_CHINICT.JPG/250px-Eduardo_Saverin_CHINICT.JPG",
    sourceUrl: "https://en.wikipedia.org/wiki/Eduardo_Saverin",
    credit: "Wikimedia",
  },
  "Eric Schmidt": {
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/Eric_Schmidt_at_the_37th_G8_Summit_in_Deauville_037_%28cropped%29.jpg/250px-Eric_Schmidt_at_the_37th_G8_Summit_in_Deauville_037_%28cropped%29.jpg",
    sourceUrl: "https://en.wikipedia.org/wiki/Eric_Schmidt",
    credit: "Wikimedia",
  },
  "Idan Ofer": {
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Idan_offer.webp/250px-Idan_offer.webp.png",
    sourceUrl: "https://en.wikipedia.org/wiki/Idan_Ofer",
    credit: "Wikimedia",
  },
  "Eyal Ofer": {
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7f/Eyal_Ofer_2020.jpg/250px-Eyal_Ofer_2020.jpg",
    sourceUrl: "https://en.wikipedia.org/wiki/Eyal_Ofer",
    credit: "Wikimedia",
  },
  "Abigail Johnson": {
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/Abigail_Johnson_at_Village_Global_%28cropped%29.jpg/250px-Abigail_Johnson_at_Village_Global_%28cropped%29.jpg",
    sourceUrl: "https://en.wikipedia.org/wiki/Abigail_Johnson",
    credit: "Wikimedia",
  },
  "Phil Knight & family": {
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Phil_Knight_with_Tom_Matthyssens_in_Universal_Studios_Orlando_1999_%28cropped%29.jpg/250px-Phil_Knight_with_Tom_Matthyssens_in_Universal_Studios_Orlando_1999_%28cropped%29.jpg",
    sourceUrl: "https://en.wikipedia.org/wiki/Phil_Knight",
    credit: "Wikimedia",
  },
  "Lakshmi Mittal": {
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Lakshmi_Mittal_LM.jpg/250px-Lakshmi_Mittal_LM.jpg",
    sourceUrl: "https://en.wikipedia.org/wiki/Lakshmi_Mittal",
    credit: "Wikimedia",
  },
  "Shiv Nadar": {
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Shiv_Nadar.png/250px-Shiv_Nadar.png",
    sourceUrl: "https://en.wikipedia.org/wiki/Shiv_Nadar",
    credit: "Wikimedia",
  },
  "Henry Samueli": {
    src: "https://upload.wikimedia.org/wikipedia/commons/c/c0/Henry_Samueli%2C_Bush_and_Anaheim_Ducks_%28cropped%29.jpg",
    sourceUrl: "https://en.wikipedia.org/wiki/Henry_Samueli",
    credit: "Wikimedia",
  },
  "Melinda French Gates": {
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Melinda_Gates_2014.jpg/250px-Melinda_Gates_2014.jpg",
    sourceUrl: "https://en.wikipedia.org/wiki/Melinda_French_Gates",
    credit: "Wikimedia",
  },
  "Stefan Quandt": {
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Blickachsen-10-Eroeffnung-Stefan-Quandt-2015-HG-789_%28cropped%29.jpg/250px-Blickachsen-10-Eroeffnung-Stefan-Quandt-2015-HG-789_%28cropped%29.jpg",
    sourceUrl: "https://en.wikipedia.org/wiki/Stefan_Quandt",
    credit: "Wikimedia",
  },
  "Reinhold Wuerth & family": {
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Reinhold_W%C3%BCrth.jpg/250px-Reinhold_W%C3%BCrth.jpg",
    sourceUrl: "https://en.wikipedia.org/wiki/Reinhold_W%C3%BCrth",
    credit: "Wikimedia",
  },
  "Len Blavatnik": {
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Len_Blavatnik.png/250px-Len_Blavatnik.png",
    sourceUrl: "https://en.wikipedia.org/wiki/Len_Blavatnik",
    credit: "Wikimedia",
  },
  "Susanne Klatten": {
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Susanne_Klatten_2017.jpg/250px-Susanne_Klatten_2017.jpg",
    sourceUrl: "https://en.wikipedia.org/wiki/Susanne_Klatten",
    credit: "Wikimedia",
  },
  "Vladimir Potanin": {
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/2021_Vladimir_Potanin.jpg/250px-2021_Vladimir_Potanin.jpg",
    sourceUrl: "https://en.wikipedia.org/wiki/Vladimir_Potanin",
    credit: "Wikimedia",
  },
  "Vagit Alekperov": {
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/%D0%92%D0%B0%D0%B3%D0%B8%D1%82_%D0%90%D0%BB%D0%B5%D0%BA%D0%BF%D0%B5%D1%80%D0%BE%D0%B2.jpg/250px-%D0%92%D0%B0%D0%B3%D0%B8%D1%82_%D0%90%D0%BB%D0%B5%D0%BA%D0%BF%D0%B5%D1%80%D0%BE%D0%B2.jpg",
    sourceUrl: "https://en.wikipedia.org/wiki/Vagit_Alekperov",
    credit: "Wikimedia",
  },
  "Jack Ma": {
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/20th_Anniversary_Schwab_Foundation_Gala_Dinner_%2844887783681%29_%28cropped%29.jpg/250px-20th_Anniversary_Schwab_Foundation_Gala_Dinner_%2844887783681%29_%28cropped%29.jpg",
    sourceUrl: "https://en.wikipedia.org/wiki/Jack_Ma",
    credit: "Wikimedia",
  },
  "Peter Thiel": {
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Peter_Thiel_by_Gage_Skidmore.jpg/250px-Peter_Thiel_by_Gage_Skidmore.jpg",
    sourceUrl: "https://en.wikipedia.org/wiki/Peter_Thiel",
    credit: "Wikimedia",
  },
  "Leonid Mikhelson & family": {
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/11-03-2020_Leonid_Mikhelson.png/250px-11-03-2020_Leonid_Mikhelson.png",
    sourceUrl: "https://en.wikipedia.org/wiki/Leonid_Mikhelson",
    credit: "Wikimedia",
  },
  "Lei Jun": {
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Lei_Jun_%282026%29_01.jpg/250px-Lei_Jun_%282026%29_01.jpg",
    sourceUrl: "https://en.wikipedia.org/wiki/Lei_Jun",
    credit: "Wikimedia",
  },
  "Andreas von Bechtolsheim & family": {
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/Andreas_bechtolsheim_%28cropped%29.jpg/250px-Andreas_bechtolsheim_%28cropped%29.jpg",
    sourceUrl: "https://en.wikipedia.org/wiki/Andy_Bechtolsheim",
    credit: "Wikimedia",
  },
  "Pham Nhat Vuong": {
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Ph%E1%BA%A1m_Nh%E1%BA%ADt_V%C6%B0%E1%BB%A3ng.jpg/250px-Ph%E1%BA%A1m_Nh%E1%BA%ADt_V%C6%B0%E1%BB%A3ng.jpg",
    sourceUrl: "https://en.wikipedia.org/wiki/Ph%E1%BA%A1m_Nh%E1%BA%ADt_V%C6%B0%E1%BB%A3ng",
    credit: "Wikimedia",
  },
  "Jay Y. Lee": {
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Lee_Jae-yong_in_2016.jpg/250px-Lee_Jae-yong_in_2016.jpg",
    sourceUrl: "https://en.wikipedia.org/wiki/Lee_Jae-yong",
    credit: "Wikimedia",
  },
  "Cyrus Poonawalla": {
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/The_Union_Minister_for_Finance%2C_Corporate_Affairs_and_Information_%26_Broadcasting%2C_Shri_Arun_Jaitley_felicitating_Dr._Cyrus_Poonawalla%2C_at_the_Iranshah_Udvada_Utsav%2C_in_Udvada%2C_Gujarat_on_December_27%2C_2015.jpg/250px-thumbnail.jpg",
    sourceUrl: "https://en.wikipedia.org/wiki/Cyrus_S._Poonawalla",
    credit: "Wikimedia",
  },
  "Suleiman Kerimov & family": {
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Suleyman_Kerimov_%28cropped%29.jpg/250px-Suleyman_Kerimov_%28cropped%29.jpg",
    sourceUrl: "https://en.wikipedia.org/wiki/Suleyman_Kerimov",
    credit: "Wikimedia",
  },
};

// 억만장자 순위는 동일 순위를 허용하는 방식으로, 테이블은 100개 행을 유지합니다.
export const topRichers: TopRicher[] = [
  {
    rank: 1,
    name: "Elon Musk",
    netWorthBillion: 1100,
    netWorthLabel: "$1.1T",
    age: 54,
    country: "United States",
    category: "Technology",
    profileSlug: "elon-musk",
  },

  {
    rank: 2,
    name: "Larry Page",
    netWorthBillion: 286.5,
    netWorthLabel: "$286.5B",
    age: 52,
    country: "United States",
    category: "Technology",
    profileSlug: "larry-page",
  },

  {
    rank: 3,
    name: "Sergey Brin",
    netWorthBillion: 264.3,
    netWorthLabel: "$264.3B",
    age: 52,
    country: "United States",
    category: "Technology",
    profileSlug: "sergey-brin",
  },

  {
    rank: 4,
    name: "Jeff Bezos",
    netWorthBillion: 243.8,
    netWorthLabel: "$243.8B",
    age: 62,
    country: "United States",
    category: "Technology",
    profileSlug: "jeff-bezos",
  },

  {
    rank: 5,
    name: "Michael Dell",
    netWorthBillion: 233.7,
    netWorthLabel: "$233.7B",
    age: 61,
    country: "United States",
    category: "Technology",
    profileSlug: "mark-zuckerberg",
  },

  {
    rank: 6,
    name: "Larry Ellison",
    netWorthBillion: 221.3,
    netWorthLabel: "$221.3B",
    age: 81,
    country: "United States",
    category: "Technology",
    profileSlug: "larry-ellison",
  },

  {
    rank: 7,
    name: "Mark Zuckerberg",
    netWorthBillion: 193.7,
    netWorthLabel: "$193.7B",
    age: 41,
    country: "United States",
    category: "Technology",
  },

  {
    rank: 8,
    name: "Jensen Huang",
    netWorthBillion: 180.3,
    netWorthLabel: "$180.3B",
    age: 63,
    country: "United States",
    category: "Technology",
    profileSlug: "jensen-huang",
  },

  {
    rank: 9,
    name: "Bernard Arnault & family",
    netWorthBillion: 148,
    netWorthLabel: "$148B",
    age: 77,
    country: "France",
    category: "Fashion & Retail",
    profileSlug: "bernard-arnault",
  },

  {
    rank: 10,
    name: "Warren Buffett",
    netWorthBillion: 144.9,
    netWorthLabel: "$144.9B",
    age: 95,
    country: "United States",
    category: "Finance & Investments",
    profileSlug: "warren-buffett",
  },

  {
    rank: 11,
    name: "Amancio Ortega",
    netWorthBillion: 140.5,
    netWorthLabel: "$140.5B",
    age: 89,
    country: "Spain",
    category: "Fashion & Retail",
    profileSlug: "amancio-ortega",
  },

  {
    rank: 12,
    name: "Rob Walton & family",
    netWorthBillion: 136.2,
    netWorthLabel: "$136.2B",
    age: 81,
    country: "United States",
    category: "Fashion & Retail",
    profileSlug: "rob-walton",
  },

  {
    rank: 13,
    name: "Jim Walton & family",
    netWorthBillion: 133.5,
    netWorthLabel: "$133.5B",
    age: 77,
    country: "United States",
    category: "Fashion & Retail",
    profileSlug: "jim-walton",
  },

  {
    rank: 14,
    name: "Alice Walton",
    netWorthBillion: 124.5,
    netWorthLabel: "$124.5B",
    age: 76,
    country: "United States",
    category: "Fashion & Retail",
    profileSlug: "alice-walton",
  },

  {
    rank: 15,
    name: "Carlos Slim Helu & family",
    netWorthBillion: 124.3,
    netWorthLabel: "$124.3B",
    age: 86,
    country: "Mexico",
    category: "Telecom",
    profileSlug: "carlos-slim-helu",
  },

  {
    rank: 16,
    name: "Steve Ballmer",
    netWorthBillion: 119.9,
    netWorthLabel: "$119.9B",
    age: 69,
    country: "United States",
    category: "Technology",
  },

  {
    rank: 17,
    name: "Thomas Peterffy",
    netWorthBillion: 110.8,
    netWorthLabel: "$110.8B",
    age: 81,
    country: "United States",
    category: "Finance & Investments",
    profileSlug: "changpeng-zhao",
  },

  {
    rank: 18,
    name: "Michael Bloomberg",
    netWorthBillion: 109.4,
    netWorthLabel: "$109.4B",
    age: 84,
    country: "United States",
    category: "Finance & Investments",
    profileSlug: "michael-bloomberg",
  },

  {
    rank: 19,
    name: "Changpeng Zhao",
    netWorthBillion: 108.9,
    netWorthLabel: "$108.9B",
    age: 49,
    country: "Canada",
    category: "Finance & Investments",
  },

  {
    rank: 20,
    name: "Bill Gates",
    netWorthBillion: 103.4,
    netWorthLabel: "$103.4B",
    age: 70,
    country: "United States",
    category: "Technology",
    profileSlug: "bill-gates",
  },
  {
    rank: 21,
    name: "Mukesh Ambani",
    netWorthBillion: 99.7,
    netWorthLabel: "$99.7B",
    age: 68,
    country: "India",
    category: "Diversified",
    profileSlug: "mukesh-ambani",
  },
  {
    rank: 22,
    name: "Giancarlo Devasini",
    netWorthBillion: 89.3,
    netWorthLabel: "$89.3B",
    age: 61,
    country: "Italy",
    category: "Finance & Investments",
    profileSlug: "giancarlo-devasini",
  },
  {
    rank: 23,
    name: "Thomas Peterffy",
    netWorthBillion: 82.9,
    netWorthLabel: "$82.9B",
    age: 81,
    country: "United States",
    category: "Finance & Investments",
    profileSlug: "thomas-peterffy",
  },
  {
    rank: 24,
    name: "Julia Koch & family",
    netWorthBillion: 81.2,
    netWorthLabel: "$81.2B",
    age: 63,
    country: "United States",
    category: "Diversified",
    profileSlug: "julia-koch",
  },
  {
    rank: 25,
    name: "Charles Koch & family",
    netWorthBillion: 73.8,
    netWorthLabel: "$73.8B",
    age: 90,
    country: "United States",
    category: "Diversified",
    profileSlug: "charles-koch",
  },
  {
    rank: 26,
    name: "Zhang Yiming",
    netWorthBillion: 69.3,
    netWorthLabel: "$69.3B",
    age: 41,
    country: "China",
    category: "Technology",
    profileSlug: "zhang-yiming",
  },
  {
    rank: 27,
    name: "Zhong Shanshan",
    netWorthBillion: 68.1,
    netWorthLabel: "$68.1B",
    age: 71,
    country: "China",
    category: "Food & Beverage",
    profileSlug: "zhong-shanshan",
  },
  {
    rank: 28,
    name: "Jeff Yass",
    netWorthBillion: 67.4,
    netWorthLabel: "$67.4B",
    age: 67,
    country: "United States",
    category: "Finance & Investments",
    profileSlug: "jeff-yass",
  },
  {
    rank: 29,
    name: "Dieter Schwarz",
    netWorthBillion: 67.2,
    netWorthLabel: "$67.2B",
    age: 86,
    country: "Germany",
    category: "Fashion & Retail",
    profileSlug: "dieter-schwarz",
  },
  {
    rank: 30,
    name: "Germán Larrea Mota Velasco & family",
    netWorthBillion: 67.1,
    netWorthLabel: "$67.1B",
    age: 72,
    country: "Mexico",
    category: "Metals & Mining",
    profileSlug: "german-larrea-mota-velasco",
  },
  {
    rank: 31,
    name: "Gautam Adani",
    netWorthBillion: 63.8,
    netWorthLabel: "$63.8B",
    age: 63,
    country: "India",
    category: "Diversified",
    profileSlug: "gautam-adani",
  },
  {
    rank: 32,
    name: "Tadashi Yanai & family",
    netWorthBillion: 61.8,
    netWorthLabel: "$61.8B",
    age: 77,
    country: "Japan",
    category: "Fashion & Retail",
    profileSlug: "tadashi-yanai",
  },
  {
    rank: 33,
    name: "Ma Huateng",
    netWorthBillion: 53.8,
    netWorthLabel: "$53.8B",
    age: 54,
    country: "China",
    category: "Technology",
    profileSlug: "ma-huateng",
  },
  {
    rank: 34,
    name: "Robin Zeng",
    netWorthBillion: 53.2,
    netWorthLabel: "$53.2B",
    age: 57,
    country: "Hong Kong",
    category: "Energy",
    profileSlug: "robin-zeng",
  },
  {
    rank: 35,
    name: "Iris Fontbona & family",
    netWorthBillion: 52.6,
    netWorthLabel: "$52.6B",
    age: 83,
    country: "Chile",
    category: "Metals & Mining",
    profileSlug: "iris-fontbona",
  },
  {
    rank: 36,
    name: "Masayoshi Son",
    netWorthBillion: 51.5,
    netWorthLabel: "$51.5B",
    age: 68,
    country: "Japan",
    category: "Finance & Investments",
    profileSlug: "masayoshi-son",
  },
  {
    rank: 37,
    name: "Ken Griffin",
    netWorthBillion: 49.8,
    netWorthLabel: "$49.8B",
    age: 57,
    country: "United States",
    category: "Finance & Investments",
    profileSlug: "ken-griffin",
  },
  {
    rank: 38,
    name: "Jacqueline Mars",
    netWorthBillion: 49.1,
    netWorthLabel: "$49.1B",
    age: 86,
    country: "United States",
    category: "Food & Beverage",
    profileSlug: "jacqueline-mars",
  },
  {
    rank: 38,
    name: "John Mars",
    netWorthBillion: 49.1,
    netWorthLabel: "$49.1B",
    age: 90,
    country: "United States",
    category: "Food & Beverage",
    profileSlug: "john-mars",
  },
  {
    rank: 40,
    name: "Lukas Walton",
    netWorthBillion: 48.9,
    netWorthLabel: "$48.9B",
    age: 39,
    country: "United States",
    category: "Fashion & Retail",
    profileSlug: "lukas-walton",
  },
  {
    rank: 41,
    name: "Giovanni Ferrero",
    netWorthBillion: 48.8,
    netWorthLabel: "$48.8B",
    age: 61,
    country: "Italy",
    category: "Food & Beverage",
    profileSlug: "giovanni-ferrero",
  },
  {
    rank: 42,
    name: "Li Ka-shing",
    netWorthBillion: 47,
    netWorthLabel: "$47B",
    age: 97,
    country: "Hong Kong",
    category: "Diversified",
    profileSlug: "li-ka-shing",
  },
  {
    rank: 43,
    name: "Mark Mateschitz",
    netWorthBillion: 45.8,
    netWorthLabel: "$45.8B",
    age: 33,
    country: "Austria",
    category: "Food & Beverage",
    profileSlug: "mark-mateschitz",
  },
  {
    rank: 44,
    name: "Gianluigi Aponte",
    netWorthBillion: 44.5,
    netWorthLabel: "$44.5B",
    age: 85,
    country: "Switzerland",
    category: "Logistics",
    profileSlug: "gianluigi-aponte",
  },
  {
    rank: 44,
    name: "Rafaela Aponte-Diamant",
    netWorthBillion: 44.5,
    netWorthLabel: "$44.5B",
    age: 80,
    country: "Switzerland",
    category: "Logistics",
    profileSlug: "rafaela-aponte-diamant",
  },
  {
    rank: 46,
    name: "Andrea Pignataro",
    netWorthBillion: 42.6,
    netWorthLabel: "$42.6B",
    age: 55,
    country: "Italy",
    category: "Finance & Investments",
    profileSlug: "andrea-pignataro",
  },
  {
    rank: 47,
    name: "Klaus-Michael Kuehne",
    netWorthBillion: 41.9,
    netWorthLabel: "$41.9B",
    age: 88,
    country: "Germany",
    category: "Logistics",
    profileSlug: "klaus-michael-kuehne",
  },
  {
    rank: 48,
    name: "Thomas Frist Jr & family",
    netWorthBillion: 41.1,
    netWorthLabel: "$41.1B",
    age: 87,
    country: "United States",
    category: "Healthcare",
    profileSlug: "thomas-frist-jr",
  },
  {
    rank: 49,
    name: "Alain Wertheimer",
    netWorthBillion: 39.4,
    netWorthLabel: "$39.4B",
    age: 77,
    country: "France",
    category: "Fashion & Retail",
    profileSlug: "alain-wertheimer",
  },
  {
    rank: 49,
    name: "Gerard Wertheimer",
    netWorthBillion: 39.4,
    netWorthLabel: "$39.4B",
    age: 75,
    country: "France",
    category: "Fashion & Retail",
    profileSlug: "gerard-wertheimer",
  },
  {
    rank: 51,
    name: "Savitri Jindal & family",
    netWorthBillion: 39.1,
    netWorthLabel: "$39.1B",
    age: 75,
    country: "India",
    category: "Metals & Mining",
    profileSlug: "savitri-jindal",
  },
  {
    rank: 52,
    name: "Stephen Schwarzman",
    netWorthBillion: 38.3,
    netWorthLabel: "$38.3B",
    age: 79,
    country: "United States",
    category: "Finance & Investments",
    profileSlug: "stephen-schwarzman",
  },
  {
    rank: 53,
    name: "Paolo Ardoino",
    netWorthBillion: 38,
    netWorthLabel: "$38B",
    age: 41,
    country: "Italy",
    category: "Finance & Investments",
    profileSlug: "paolo-ardoino",
  },
  {
    rank: 53,
    name: "Jean-Louis van der Velde",
    netWorthBillion: 38,
    netWorthLabel: "$38B",
    age: 62,
    country: "Netherlands",
    category: "Finance & Investments",
    profileSlug: "jean-louis-van-der-velde",
  },
  {
    rank: 55,
    name: "William Ding",
    netWorthBillion: 37.9,
    netWorthLabel: "$37.9B",
    age: 54,
    country: "China",
    category: "Technology",
    profileSlug: "william-ding",
  },
  {
    rank: 56,
    name: "Miriam Adelson & family",
    netWorthBillion: 37.5,
    netWorthLabel: "$37.5B",
    age: 80,
    country: "United States",
    category: "Gambling & Casinos",
    profileSlug: "miriam-adelson",
  },
  {
    rank: 57,
    name: "Alexey Mordashov & family",
    netWorthBillion: 37,
    netWorthLabel: "$37B",
    age: 60,
    country: "Russia",
    category: "Metals & Mining",
    profileSlug: "alexey-mordashov",
  },
  {
    rank: 58,
    name: "Colin Huang",
    netWorthBillion: 36.6,
    netWorthLabel: "$36.6B",
    age: 46,
    country: "China",
    category: "Technology",
    profileSlug: "colin-huang",
  },
  {
    rank: 59,
    name: "Eduardo Saverin",
    netWorthBillion: 35.9,
    netWorthLabel: "$35.9B",
    age: 43,
    country: "Brazil",
    category: "Technology",
    profileSlug: "eduardo-saverin",
  },
  {
    rank: 60,
    name: "Eric Schmidt",
    netWorthBillion: 35.5,
    netWorthLabel: "$35.5B",
    age: 70,
    country: "United States",
    category: "Technology",
    profileSlug: "eric-schmidt",
  },
  {
    rank: 61,
    name: "Idan Ofer",
    netWorthBillion: 34.6,
    netWorthLabel: "$34.6B",
    age: 70,
    country: "Israel",
    category: "Diversified",
    profileSlug: "idan-ofer",
  },
  {
    rank: 62,
    name: "Eyal Ofer",
    netWorthBillion: 33.6,
    netWorthLabel: "$33.6B",
    age: 75,
    country: "Israel",
    category: "Diversified",
    profileSlug: "eyal-ofer",
  },
  {
    rank: 63,
    name: "He Xiangjian & family",
    netWorthBillion: 33.2,
    netWorthLabel: "$33.2B",
    age: 83,
    country: "China",
    category: "Manufacturing",
    profileSlug: "he-xiangjian",
  },
  {
    rank: 63,
    name: "Abigail Johnson",
    netWorthBillion: 33.2,
    netWorthLabel: "$33.2B",
    age: 64,
    country: "United States",
    category: "Finance & Investments",
    profileSlug: "abigail-johnson",
  },
  {
    rank: 63,
    name: "Zheng Shuliang & family",
    netWorthBillion: 33.2,
    netWorthLabel: "$33.2B",
    age: 80,
    country: "China",
    category: "Metals & Mining",
    profileSlug: "zheng-shuliang",
  },
  {
    rank: 66,
    name: "Marilyn Simons & family",
    netWorthBillion: 32.5,
    netWorthLabel: "$32.5B",
    age: 75,
    country: "United States",
    category: "Finance & Investments",
    profileSlug: "marilyn-simons",
  },
  {
    rank: 67,
    name: "Robert Pera",
    netWorthBillion: 31.7,
    netWorthLabel: "$31.7B",
    age: 48,
    country: "United States",
    category: "Technology",
    profileSlug: "robert-pera",
  },
  {
    rank: 68,
    name: "Phil Knight & family",
    netWorthBillion: 31.1,
    netWorthLabel: "$31.1B",
    age: 88,
    country: "United States",
    category: "Fashion & Retail",
    profileSlug: "phil-knight",
  },
  {
    rank: 68,
    name: "Michal Strnad",
    netWorthBillion: 31.1,
    netWorthLabel: "$31.1B",
    age: 33,
    country: "Czech Republic",
    category: "Manufacturing",
    profileSlug: "michal-strnad",
  },
  {
    rank: 70,
    name: "Lakshmi Mittal",
    netWorthBillion: 31,
    netWorthLabel: "$31B",
    age: 75,
    country: "India",
    category: "Metals & Mining",
    profileSlug: "lakshmi-mittal",
  },
  {
    rank: 71,
    name: "Elaine Marshall & family",
    netWorthBillion: 30.9,
    netWorthLabel: "$30.9B",
    age: 83,
    country: "United States",
    category: "Diversified",
    profileSlug: "elaine-marshall",
  },
  {
    rank: 71,
    name: "Shiv Nadar",
    netWorthBillion: 30.9,
    netWorthLabel: "$30.9B",
    age: 80,
    country: "India",
    category: "Technology",
    profileSlug: "shiv-nadar",
  },
  {
    rank: 73,
    name: "Henry Samueli",
    netWorthBillion: 30.8,
    netWorthLabel: "$30.8B",
    age: 71,
    country: "United States",
    category: "Technology",
    profileSlug: "henry-samueli",
  },
  {
    rank: 74,
    name: "Melinda French Gates",
    netWorthBillion: 30.3,
    netWorthLabel: "$30.3B",
    age: 61,
    country: "United States",
    category: "Technology",
    profileSlug: "melinda-french-gates",
  },
  {
    rank: 75,
    name: "Stefan Quandt",
    netWorthBillion: 30.1,
    netWorthLabel: "$30.1B",
    age: 59,
    country: "Germany",
    category: "Automotive",
    profileSlug: "stefan-quandt",
  },
  {
    rank: 75,
    name: "Reinhold Wuerth & family",
    netWorthBillion: 30.1,
    netWorthLabel: "$30.1B",
    age: 90,
    country: "Germany",
    category: "Manufacturing",
    profileSlug: "reinhold-wuerth",
  },
  {
    rank: 77,
    name: "Lyndal Stephens Greth & family",
    netWorthBillion: 30,
    netWorthLabel: "$30B",
    age: 51,
    country: "United States",
    category: "Energy",
    profileSlug: "lyndal-stephens-greth",
  },
  {
    rank: 78,
    name: "Len Blavatnik",
    netWorthBillion: 29.9,
    netWorthLabel: "$29.9B",
    age: 68,
    country: "United States",
    category: "Diversified",
    profileSlug: "len-blavatnik",
  },
  {
    rank: 79,
    name: "Susanne Klatten",
    netWorthBillion: 29.7,
    netWorthLabel: "$29.7B",
    age: 63,
    country: "Germany",
    category: "Automotive",
    profileSlug: "susanne-klatten",
  },
  {
    rank: 79,
    name: "Vladimir Potanin",
    netWorthBillion: 29.7,
    netWorthLabel: "$29.7B",
    age: 65,
    country: "Russia",
    category: "Metals & Mining",
    profileSlug: "vladimir-potanin",
  },
  {
    rank: 81,
    name: "Vagit Alekperov",
    netWorthBillion: 29.5,
    netWorthLabel: "$29.5B",
    age: 75,
    country: "Russia",
    category: "Energy",
    profileSlug: "vagit-alekperov",
  },
  {
    rank: 81,
    name: "François Pinault & family",
    netWorthBillion: 29.5,
    netWorthLabel: "$29.5B",
    age: 89,
    country: "France",
    category: "Fashion & Retail",
    profileSlug: "francois-pinault",
  },
  {
    rank: 83,
    name: "Jack Ma",
    netWorthBillion: 29.1,
    netWorthLabel: "$29.1B",
    age: 61,
    country: "China",
    category: "Technology",
    profileSlug: "jack-ma",
  },
  {
    rank: 84,
    name: "Prajogo Pangestu",
    netWorthBillion: 28.6,
    netWorthLabel: "$28.6B",
    age: 81,
    country: "Indonesia",
    category: "Diversified",
    profileSlug: "prajogo-pangestu",
  },
  {
    rank: 84,
    name: "MacKenzie Scott",
    netWorthBillion: 28.6,
    netWorthLabel: "$28.6B",
    age: 55,
    country: "United States",
    category: "Technology",
    profileSlug: "mackenzie-scott",
  },
  {
    rank: 86,
    name: "Aliko Dangote",
    netWorthBillion: 28.5,
    netWorthLabel: "$28.5B",
    age: 68,
    country: "Nigeria",
    category: "Manufacturing",
    profileSlug: "aliko-dangote",
  },
  {
    rank: 87,
    name: "Peter Thiel",
    netWorthBillion: 28.4,
    netWorthLabel: "$28.4B",
    age: 58,
    country: "United States",
    category: "Finance & Investments",
    profileSlug: "peter-thiel",
  },
  {
    rank: 88,
    name: "Emmanuel Besnier",
    netWorthBillion: 28.3,
    netWorthLabel: "$28.3B",
    age: 55,
    country: "France",
    category: "Food & Beverage",
    profileSlug: "emmanuel-besnier",
  },
  {
    rank: 88,
    name: "Leonid Mikhelson & family",
    netWorthBillion: 28.3,
    netWorthLabel: "$28.3B",
    age: 70,
    country: "Russia",
    category: "Energy",
    profileSlug: "leonid-mikhelson",
  },
  {
    rank: 90,
    name: "Daniel Gilbert",
    netWorthBillion: 27.9,
    netWorthLabel: "$27.9B",
    age: 64,
    country: "United States",
    category: "Finance & Investments",
    profileSlug: "daniel-gilbert",
  },
  {
    rank: 90,
    name: "Lei Jun",
    netWorthBillion: 27.9,
    netWorthLabel: "$27.9B",
    age: 56,
    country: "China",
    category: "Technology",
    profileSlug: "lei-jun",
  },
  {
    rank: 90,
    name: "Andreas von Bechtolsheim & family",
    netWorthBillion: 27.9,
    netWorthLabel: "$27.9B",
    age: 70,
    country: "Germany",
    category: "Technology",
    profileSlug: "andreas-von-bechtolsheim",
  },
  {
    rank: 93,
    name: "Pham Nhat Vuong",
    netWorthBillion: 27.7,
    netWorthLabel: "$27.7B",
    age: 57,
    country: "Vietnam",
    category: "Diversified",
    profileSlug: "pham-nhat-vuong",
  },
  {
    rank: 94,
    name: "Vicky Safra & family",
    netWorthBillion: 27.1,
    netWorthLabel: "$27.1B",
    age: 73,
    country: "Greece",
    category: "Finance & Investments",
    profileSlug: "vicky-safra",
  },
  {
    rank: 95,
    name: "Jay Y. Lee",
    netWorthBillion: 27,
    netWorthLabel: "$27B",
    age: 57,
    country: "South Korea",
    category: "Technology",
    profileSlug: "jay-y-lee",
  },
  {
    rank: 95,
    name: "Cyrus Poonawalla",
    netWorthBillion: 27,
    netWorthLabel: "$27B",
    age: 84,
    country: "India",
    category: "Healthcare",
    profileSlug: "cyrus-poonawalla",
  },
  {
    rank: 97,
    name: "Rick Cohen & family",
    netWorthBillion: 26.3,
    netWorthLabel: "$26.3B",
    age: 73,
    country: "United States",
    category: "Technology",
    profileSlug: "rick-cohen",
  },
  {
    rank: 98,
    name: "Israel Englander",
    netWorthBillion: 25.8,
    netWorthLabel: "$25.8B",
    age: 77,
    country: "United States",
    category: "Finance & Investments",
    profileSlug: "israel-englander",
  },
  {
    rank: 99,
    name: "Suleiman Kerimov & family",
    netWorthBillion: 25.7,
    netWorthLabel: "$25.7B",
    age: 59,
    country: "Russia",
    category: "Finance & Investments",
    profileSlug: "suleiman-kerimov",
  },
  {
    rank: 100,
    name: "Dilip Shanghvi",
    netWorthBillion: 25.6,
    netWorthLabel: "$25.6B",
    age: 70,
    country: "India",
    category: "Healthcare",
    profileSlug: "dilip-shanghvi",
  },
];

export const topRicherCountries = Array.from(
  new Set(topRichers.map((person) => person.country)),
);

export const topRicherCategories = Array.from(
  new Set(topRichers.map((person) => person.category)),
);

const topRicherCountryLabels: Record<string, string> = {
  Austria: "오스트리아",
  Brazil: "브라질",
  Canada: "캐나다",
  Chile: "칠레",
  China: "중국",
  "Czech Republic": "체코",
  France: "프랑스",
  Germany: "독일",
  Greece: "그리스",
  "Hong Kong": "홍콩",
  India: "인도",
  Indonesia: "인도네시아",
  Israel: "이스라엘",
  Italy: "이탈리아",
  Japan: "일본",
  Mexico: "멕시코",
  Netherlands: "네덜란드",
  Nigeria: "나이지리아",
  Russia: "러시아",
  "South Korea": "대한민국",
  Spain: "스페인",
  Switzerland: "스위스",
  "United States": "미국",
  Vietnam: "베트남",
};

const topRicherCategoryLabels: Record<string, string> = {
  Automotive: "자동차",
  Diversified: "복합 자산",
  Energy: "에너지",
  "Fashion & Retail": "패션/리테일",
  "Finance & Investments": "금융/투자",
  "Food & Beverage": "식음료",
  "Gambling & Casinos": "카지노/게이밍",
  Healthcare: "헬스케어",
  Logistics: "물류",
  Manufacturing: "제조",
  "Metals & Mining": "금속/광업",
  Technology: "기술",
  Telecom: "통신",
};

const topRicherKoreanNameLabels: Record<string, string> = {
  "Elon Musk": "일론 머스크",
  "Larry Page": "래리 페이지",
  "Sergey Brin": "세르게이 브린",
  "Jeff Bezos": "제프 베이조스",
  "Mark Zuckerberg": "마크 저커버그",
  "Larry Ellison": "래리 엘리슨",
  "Bernard Arnault & family": "베르나르 아르노 일가",
  "Jensen Huang": "젠슨 황",
  "Warren Buffett": "워런 버핏",
  "Amancio Ortega": "아만시오 오르테가",
  "Rob Walton & family": "롭 월턴 일가",
  "Jim Walton & family": "짐 월턴 일가",
  "Michael Dell": "마이클 델",
  "Alice Walton": "앨리스 월턴",
  "Steve Ballmer": "스티브 발머",
  "Carlos Slim Helu & family": "카를로스 슬림 엘루 일가",
  "Changpeng Zhao": "창펑 자오",
  "Michael Bloomberg": "마이클 블룸버그",
  "Bill Gates": "빌 게이츠",
  "Francoise Bettencourt Meyers & family": "프랑수아즈 베탕쿠르 메이예 일가",
  "Mukesh Ambani": "무케시 암바니",
  "Giancarlo Devasini": "잔카를로 데바시니",
  "Thomas Peterffy": "토머스 피터피",
  "Julia Koch & family": "줄리아 코크 일가",
  "Charles Koch & family": "찰스 코크 일가",
  "Zhang Yiming": "장이밍",
  "Zhong Shanshan": "중산산",
  "Jeff Yass": "제프 야스",
  "Dieter Schwarz": "디터 슈바르츠",
  "Germán Larrea Mota Velasco & family": "헤르만 라레아 모타 벨라스코 일가",
  "Gautam Adani": "가우탐 아다니",
  "Tadashi Yanai & family": "야나이 다다시 일가",
  "Ma Huateng": "마화텅",
  "Robin Zeng": "로빈 쩡",
  "Iris Fontbona & family": "아이리스 폰트보나 일가",
  "Masayoshi Son": "손정의",
  "Ken Griffin": "켄 그리핀",
  "Jacqueline Mars": "재클린 마스",
  "John Mars": "존 마스",
  "Lukas Walton": "루카스 월턴",
  "Giovanni Ferrero": "조반니 페레로",
  "Li Ka-shing": "리카싱",
  "Mark Mateschitz": "마크 마테시츠",
  "Gianluigi Aponte": "잔루이지 아폰테",
  "Rafaela Aponte-Diamant": "라파엘라 아폰테-디아만트",
  "Andrea Pignataro": "안드레아 피냐타로",
  "Klaus-Michael Kuehne": "클라우스-미하엘 퀴네",
  "Thomas Frist Jr & family": "토머스 프리스트 주니어 일가",
  "Alain Wertheimer": "알랭 베르트하이머",
  "Gerard Wertheimer": "제라드 베르트하이머",
  "Savitri Jindal & family": "사비트리 진달 일가",
  "Stephen Schwarzman": "스티븐 슈워츠먼",
  "Paolo Ardoino": "파올로 아르도이노",
  "Jean-Louis van der Velde": "장-루이 반 데르 벨데",
  "William Ding": "윌리엄 딩",
  "Miriam Adelson & family": "미리엄 애덜슨 일가",
  "Alexey Mordashov & family": "알렉세이 모르다쇼프 일가",
  "Colin Huang": "콜린 황",
  "Eduardo Saverin": "에두아르도 세이버린",
  "Eric Schmidt": "에릭 슈밋",
  "Idan Ofer": "이단 오퍼",
  "Eyal Ofer": "에얄 오퍼",
  "He Xiangjian & family": "허샹젠 일가",
  "Abigail Johnson": "애비게일 존슨",
  "Zheng Shuliang & family": "정수량 일가",
  "Marilyn Simons & family": "메릴린 사이먼스 일가",
  "Robert Pera": "로버트 페라",
  "Phil Knight & family": "필 나이트 일가",
  "Michal Strnad": "미할 스트르나드",
  "Lakshmi Mittal": "락슈미 미탈",
  "Elaine Marshall & family": "일레인 마셜 일가",
  "Shiv Nadar": "시브 나다르",
  "Henry Samueli": "헨리 새뮤얼리",
  "Melinda French Gates": "멀린다 프렌치 게이츠",
  "Stefan Quandt": "슈테판 크반트",
  "Reinhold Wuerth & family": "라인홀트 뷔르트 일가",
  "Lyndal Stephens Greth & family": "린달 스티븐스 그레스 일가",
  "Len Blavatnik": "렌 블라바트닉",
  "Susanne Klatten": "수잔 클라텐",
  "Vladimir Potanin": "블라디미르 포타닌",
  "Vagit Alekperov": "바기트 알렉페로프",
  "François Pinault & family": "프랑수아 피노 일가",
  "Jack Ma": "마윈",
  "Prajogo Pangestu": "프라조고 팡에스투",
  "MacKenzie Scott": "매켄지 스콧",
  "Aliko Dangote": "알리코 단고테",
  "Peter Thiel": "피터 틸",
  "Emmanuel Besnier": "에마뉘엘 베스니에",
  "Leonid Mikhelson & family": "레오니드 미켈손 일가",
  "Daniel Gilbert": "대니얼 길버트",
  "Lei Jun": "레이쥔",
  "Andreas von Bechtolsheim & family": "안드레아스 폰 베히톨스하임 일가",
  "Pham Nhat Vuong": "팜녓브엉",
  "Vicky Safra & family": "비키 사프라 일가",
  "Jay Y. Lee": "이재용",
  "Cyrus Poonawalla": "사이러스 푸나왈라",
  "Rick Cohen & family": "릭 코언 일가",
  "Israel Englander": "이스라엘 잉글랜더",
  "Suleiman Kerimov & family": "술레이만 케리모프 일가",
  "Dilip Shanghvi": "딜립 샹비",
};

const topRicherCompanyLabels: Record<string, string> = {
  "Elon Musk": "테슬라, 스페이스X, 엑스에이아이",
  "Larry Page": "알파벳, 구글",
  "Sergey Brin": "알파벳, 구글",
  "Jeff Bezos": "아마존, 블루 오리진",
  "Mark Zuckerberg": "메타 플랫폼스",
  "Larry Ellison": "오라클",
  "Bernard Arnault & family": "엘브이엠에이치",
  "Jensen Huang": "엔비디아",
  "Warren Buffett": "버크셔 해서웨이",
  "Amancio Ortega": "인디텍스, 자라",
  "Rob Walton & family": "월마트",
  "Jim Walton & family": "월마트",
  "Michael Dell": "델 테크놀로지스",
  "Alice Walton": "월마트",
  "Steve Ballmer": "마이크로소프트",
  "Carlos Slim Helu & family": "아메리카 모빌, 그루포 카르소",
  "Changpeng Zhao": "바이낸스",
  "Michael Bloomberg": "블룸버그 엘피",
  "Bill Gates": "마이크로소프트, 캐스케이드 인베스트먼트",
  "Francoise Bettencourt Meyers & family": "로레알",
  "Mukesh Ambani": "릴라이언스 인더스트리",
  "Giancarlo Devasini": "테더",
  "Thomas Peterffy": "인터랙티브 브로커스",
  "Julia Koch & family": "코크 인더스트리",
  "Charles Koch & family": "코크 인더스트리",
  "Zhang Yiming": "바이트댄스",
  "Zhong Shanshan": "농푸스프링, 완타이 바이오팜",
  "Jeff Yass": "서스퀘해나 인터내셔널 그룹",
  "Dieter Schwarz": "슈바르츠 그룹, 리들, 카우플란트",
  "Germán Larrea Mota Velasco & family": "그루포 멕시코",
  "Gautam Adani": "아다니 그룹",
  "Tadashi Yanai & family": "패스트 리테일링, 유니클로",
  "Ma Huateng": "텐센트",
  "Robin Zeng": "씨에이티엘",
  "Iris Fontbona & family": "안토파가스타",
  "Masayoshi Son": "소프트뱅크 그룹",
  "Ken Griffin": "시타델",
  "Jacqueline Mars": "마스",
  "John Mars": "마스",
  "Lukas Walton": "월마트",
  "Giovanni Ferrero": "페레로 그룹",
  "Li Ka-shing": "씨케이 허치슨, 씨케이 애셋",
  "Mark Mateschitz": "레드불",
  "Gianluigi Aponte": "엠에스씨",
  "Rafaela Aponte-Diamant": "엠에스씨",
  "Andrea Pignataro": "아이온 그룹",
  "Klaus-Michael Kuehne": "퀴네+나겔",
  "Thomas Frist Jr & family": "에이치시에이 헬스케어",
  "Alain Wertheimer": "샤넬",
  "Gerard Wertheimer": "샤넬",
  "Savitri Jindal & family": "제이에스더블유 그룹",
  "Stephen Schwarzman": "블랙스톤",
  "Paolo Ardoino": "테더",
  "Jean-Louis van der Velde": "테더, 비트파이넥스",
  "William Ding": "넷이즈",
  "Miriam Adelson & family": "라스베이거스 샌즈",
  "Alexey Mordashov & family": "세베르스탈",
  "Colin Huang": "피디디 홀딩스, 핀둬둬",
  "Eduardo Saverin": "메타 플랫폼스",
  "Eric Schmidt": "구글, 알파벳",
  "Idan Ofer": "퀀텀 퍼시픽, 이스턴 퍼시픽 쉬핑",
  "Eyal Ofer": "조디악 그룹, 글로벌 홀딩스",
  "He Xiangjian & family": "미디어 그룹",
  "Abigail Johnson": "피델리티 인베스트먼트",
  "Zheng Shuliang & family": "중국 훙차오 그룹",
  "Marilyn Simons & family": "르네상스 테크놀로지스",
  "Robert Pera": "유비퀴티",
  "Phil Knight & family": "나이키",
  "Michal Strnad": "체코슬로바크 그룹",
  "Lakshmi Mittal": "아르셀로미탈",
  "Elaine Marshall & family": "코크 인더스트리",
  "Shiv Nadar": "에이치씨엘 테크놀로지스",
  "Henry Samueli": "브로드컴",
  "Melinda French Gates": "마이크로소프트, 피보탈 벤처스",
  "Stefan Quandt": "비엠더블유",
  "Reinhold Wuerth & family": "뷔르트 그룹",
  "Lyndal Stephens Greth & family": "엔데버 에너지 리소스",
  "Len Blavatnik": "액세스 인더스트리",
  "Susanne Klatten": "비엠더블유, 알타나",
  "Vladimir Potanin": "노릴스크 니켈",
  "Vagit Alekperov": "루코일",
  "François Pinault & family": "케링",
  "Jack Ma": "알리바바 그룹, 앤트 그룹",
  "Prajogo Pangestu": "바리토 퍼시픽, 찬드라 아스리",
  "MacKenzie Scott": "아마존",
  "Aliko Dangote": "단고테 그룹",
  "Peter Thiel": "팔란티어, 파운더스 펀드",
  "Emmanuel Besnier": "락탈리스",
  "Leonid Mikhelson & family": "노바텍",
  "Daniel Gilbert": "로켓 컴퍼니즈",
  "Lei Jun": "샤오미",
  "Andreas von Bechtolsheim & family": "선 마이크로시스템즈, 아리스타 네트웍스",
  "Pham Nhat Vuong": "빈그룹, 빈패스트",
  "Vicky Safra & family": "제이 사프라 그룹",
  "Jay Y. Lee": "삼성전자",
  "Cyrus Poonawalla": "세럼 인스티튜트 오브 인디아",
  "Rick Cohen & family": "씨앤에스 홀세일 그로서스, 심보틱",
  "Israel Englander": "밀레니엄 매니지먼트",
  "Suleiman Kerimov & family": "나프타 모스크바, 폴리우스",
  "Dilip Shanghvi": "선 파마슈티컬 인더스트리즈",
};

const topRicherCompanyEnglishLabels: Record<string, string> = {
  "Elon Musk": "Tesla, SpaceX, xAI",
  "Larry Page": "Alphabet, Google",
  "Sergey Brin": "Alphabet, Google",
  "Jeff Bezos": "Amazon, Blue Origin",
  "Mark Zuckerberg": "Meta Platforms",
  "Larry Ellison": "Oracle",
  "Bernard Arnault & family": "LVMH",
  "Jensen Huang": "NVIDIA",
  "Warren Buffett": "Berkshire Hathaway",
  "Amancio Ortega": "Inditex, Zara",
  "Rob Walton & family": "Walmart",
  "Jim Walton & family": "Walmart",
  "Michael Dell": "Dell Technologies",
  "Alice Walton": "Walmart",
  "Steve Ballmer": "Microsoft",
  "Carlos Slim Helu & family": "America Movil, Grupo Carso",
  "Changpeng Zhao": "Binance",
  "Michael Bloomberg": "Bloomberg LP",
  "Bill Gates": "Microsoft, Cascade Investment",
  "Francoise Bettencourt Meyers & family": "L'Oreal",
  "Mukesh Ambani": "Reliance Industries",
  "Giancarlo Devasini": "Tether",
  "Thomas Peterffy": "Interactive Brokers",
  "Julia Koch & family": "Koch Industries",
  "Charles Koch & family": "Koch Industries",
  "Zhang Yiming": "ByteDance",
  "Zhong Shanshan": "Nongfu Spring, Wantai BioPharm",
  "Jeff Yass": "Susquehanna International Group",
  "Dieter Schwarz": "Schwarz Group, Lidl, Kaufland",
  "Germán Larrea Mota Velasco & family": "Grupo Mexico",
  "Gautam Adani": "Adani Group",
  "Tadashi Yanai & family": "Fast Retailing, Uniqlo",
  "Ma Huateng": "Tencent",
  "Robin Zeng": "CATL",
  "Iris Fontbona & family": "Antofagasta",
  "Masayoshi Son": "SoftBank Group",
  "Ken Griffin": "Citadel",
  "Jacqueline Mars": "Mars",
  "John Mars": "Mars",
  "Lukas Walton": "Walmart",
  "Giovanni Ferrero": "Ferrero Group",
  "Li Ka-shing": "CK Hutchison, CK Asset",
  "Mark Mateschitz": "Red Bull",
  "Gianluigi Aponte": "MSC",
  "Rafaela Aponte-Diamant": "MSC",
  "Andrea Pignataro": "ION Group",
  "Klaus-Michael Kuehne": "Kuehne + Nagel",
  "Thomas Frist Jr & family": "HCA Healthcare",
  "Alain Wertheimer": "Chanel",
  "Gerard Wertheimer": "Chanel",
  "Savitri Jindal & family": "JSW Group",
  "Stephen Schwarzman": "Blackstone",
  "Paolo Ardoino": "Tether",
  "Jean-Louis van der Velde": "Tether, Bitfinex",
  "William Ding": "NetEase",
  "Miriam Adelson & family": "Las Vegas Sands",
  "Alexey Mordashov & family": "Severstal",
  "Colin Huang": "PDD Holdings, Pinduoduo",
  "Eduardo Saverin": "Meta Platforms",
  "Eric Schmidt": "Google, Alphabet",
  "Idan Ofer": "Quantum Pacific, Eastern Pacific Shipping",
  "Eyal Ofer": "Zodiac Group, Global Holdings",
  "He Xiangjian & family": "Midea Group",
  "Abigail Johnson": "Fidelity Investments",
  "Zheng Shuliang & family": "China Hongqiao Group",
  "Marilyn Simons & family": "Renaissance Technologies",
  "Robert Pera": "Ubiquiti",
  "Phil Knight & family": "Nike",
  "Michal Strnad": "Czechoslovak Group",
  "Lakshmi Mittal": "ArcelorMittal",
  "Elaine Marshall & family": "Koch Industries",
  "Shiv Nadar": "HCL Technologies",
  "Henry Samueli": "Broadcom",
  "Melinda French Gates": "Microsoft, Pivotal Ventures",
  "Stefan Quandt": "BMW",
  "Reinhold Wuerth & family": "Wuerth Group",
  "Lyndal Stephens Greth & family": "Endeavor Energy Resources",
  "Len Blavatnik": "Access Industries",
  "Susanne Klatten": "BMW, Altana",
  "Vladimir Potanin": "Norilsk Nickel",
  "Vagit Alekperov": "Lukoil",
  "François Pinault & family": "Kering",
  "Jack Ma": "Alibaba Group, Ant Group",
  "Prajogo Pangestu": "Barito Pacific, Chandra Asri",
  "MacKenzie Scott": "Amazon",
  "Aliko Dangote": "Dangote Group",
  "Peter Thiel": "Palantir, Founders Fund",
  "Emmanuel Besnier": "Lactalis",
  "Leonid Mikhelson & family": "Novatek",
  "Daniel Gilbert": "Rocket Companies",
  "Lei Jun": "Xiaomi",
  "Andreas von Bechtolsheim & family": "Sun Microsystems, Arista Networks",
  "Pham Nhat Vuong": "Vingroup, VinFast",
  "Vicky Safra & family": "J. Safra Group",
  "Jay Y. Lee": "Samsung Electronics",
  "Cyrus Poonawalla": "Serum Institute of India",
  "Rick Cohen & family": "C&S Wholesale Grocers, Symbotic",
  "Israel Englander": "Millennium Management",
  "Suleiman Kerimov & family": "Nafta Moskva, Polyus",
  "Dilip Shanghvi": "Sun Pharmaceutical Industries",
};

export function getTopRicherCountryLabel(
  country: string,
  locale: TopRicherLocale = "ko",
) {
  return locale === "ko" ? topRicherCountryLabels[country] ?? country : country;
}

export function getTopRicherCategoryLabel(
  category: string,
  locale: TopRicherLocale = "ko",
) {
  return locale === "ko" ? topRicherCategoryLabels[category] ?? category : category;
}

export function getTopRicherDisplayName(
  person: Pick<TopRicher, "name">,
  locale: TopRicherLocale = "ko",
) {
  return locale === "ko" ? topRicherKoreanNameLabels[person.name] ?? person.name : person.name;
}

export function getTopRicherCompanyLabel(
  person: Pick<TopRicher, "name">,
  locale: TopRicherLocale = "ko",
) {
  if (locale === "ko") {
    return topRicherCompanyLabels[person.name] ?? "대표 기업 확인 예정";
  }

  return topRicherCompanyEnglishLabels[person.name] ?? "Primary company pending";
}

export function getTopRicherNetWorthKoreanLabel(
  person: Pick<TopRicher, "netWorthBillion">,
) {
  return getTopRicherNetWorthLabel(person, "ko");
}

export function getTopRicherNetWorthLabel(
  person: Pick<TopRicher, "netWorthBillion">,
  locale: TopRicherLocale = "ko",
) {
  const value = person.netWorthBillion;

  if (locale === "ko") {
    return `${formatInteger(value * 10, "ko-KR")}억 달러`;
  }

  if (locale === "ja") {
    return `${formatInteger(value * 10, "ja-JP")}億ドル`;
  }

  if (locale === "zh") {
    return `${formatInteger(value * 10, "zh-CN")}亿美元`;
  }

  if (locale === "es") {
    return `${formatBillionNumber(value, "es-ES")} mil millones USD`;
  }

  if (locale === "fr") {
    return `${formatBillionNumber(value, "fr-FR")} Md USD`;
  }

  return `$${formatBillionNumber(value, "en-US")}B`;
}

export function getTopRicherDeltaNetWorthLabel(
  value: number,
  locale: TopRicherLocale = "ko",
) {
  if (value === 0) {
    return getTopRicherNetWorthLabel({ netWorthBillion: 0 }, locale);
  }

  const sign = value > 0 ? "+" : "-";
  return `${sign}${getTopRicherNetWorthLabel(
    { netWorthBillion: Math.abs(value) },
    locale,
  )}`;
}

export function getTopRicherGlobalRankLabel(
  rank: number,
  locale: TopRicherLocale = "ko",
) {
  if (locale === "ko") {
    return `${rank}위`;
  }

  if (locale === "ja") {
    return `${rank}位`;
  }

  if (locale === "zh") {
    return `第 ${rank} 位`;
  }

  if (locale === "es") {
    return `puesto ${rank}`;
  }

  if (locale === "fr") {
    return `rang ${rank}`;
  }

  return `#${rank}`;
}

export function getTopRicherListRankLabel(
  position: number,
  rank: number,
  locale: TopRicherLocale = "ko",
) {
  if (locale === "ko") {
    return `앱 순번 ${position} · 글로벌 ${rank}위`;
  }

  if (locale === "ja") {
    return `アプリNo.${position} · 世界 ${rank}位`;
  }

  if (locale === "zh") {
    return `应用序号 ${position} · 全球 第 ${rank} 位`;
  }

  if (locale === "es") {
    return `N.º app ${position} · puesto mundial ${rank}`;
  }

  if (locale === "fr") {
    return `No app ${position} · rang mondial ${rank}`;
  }

  return `App No. ${position} · Global rank ${rank}`;
}

export function getTopRicherScenarioRankLabel(
  rank: number,
  locale: TopRicherLocale = "ko",
) {
  if (locale === "ko") {
    return `시나리오 ${rank}위`;
  }

  if (locale === "ja") {
    return `シナリオ ${rank}位`;
  }

  if (locale === "zh") {
    return `情景第 ${rank} 位`;
  }

  if (locale === "es") {
    return `Escenario puesto ${rank}`;
  }

  if (locale === "fr") {
    return `Scénario rang ${rank}`;
  }

  return `Scenario rank ${rank}`;
}

function formatInteger(value: number, locale: string) {
  return Math.round(value).toLocaleString(locale);
}

function formatBillionNumber(value: number, locale: string) {
  return new Intl.NumberFormat(locale, {
    maximumFractionDigits: 1,
    minimumFractionDigits: 0,
  }).format(value);
}

export function getTopRicherSlug(person: Pick<TopRicher, "name" | "profileSlug">) {
  if (person.profileSlug) {
    return person.profileSlug;
  }

  return person.name
    .toLowerCase()
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

export function getTopRicherBySlug(slug: string) {
  return topRichers.find((person) => getTopRicherSlug(person) === slug);
}

export function getTopRicherProfileHref(person: Pick<TopRicher, "name" | "profileSlug">) {
  return `/app/people/${getTopRicherSlug(person)}`;
}
