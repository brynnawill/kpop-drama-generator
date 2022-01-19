const fandomArray = [
  "ARMY",
  "Carat",
  "MOA",
  "Cheshire",
  "Reveluv",
  "Love",
  "Orbit",
  "Blink",
  "Atiny",
  "Stay",
  "iGOT7",
  "Universe",
  "Merrie",
  "Ki-Ling",
  "VIP",
  "Buddie",
  "Once",
  "Pink Panda",
  "Ikonic",
  "EXO-L",
  "Sone",
  "Midzy",
  "Monbebe",
  "ELF",
  "My Day",
  "MooMoo",
  "Shawol",
  "Ujung",
];
const timeArray = [
  "Yesterday morning",
  "Last week",
  "Two nights ago",
  "Earlier this month",
  "Last year",
  "Mere moments ago",
  "Just now",
  "15 years ago",
];
const idolArray = [
  "Jeonghan",
  "Kim Doyeon",
  "Park Jimin",
  "S. Coups",
  "Joshua Hong",
  "Lisa",
  "Jennie Kim",
  "Jisoo",
  "Rose",
  "Choi Yoojung",
  "Wen Junhui",
  "Hoshi",
  "Bobby",
  "Peniel",
  "Woozi",
  "Jeon Wonwoo",
  "Rap Monster",
  "Sorn",
  "Jeon Somi",
  "Samuel Kim",
  "Kim Sohye",
  "Key",
  "Lee Taemin",
  "Exy",
  "Seola",
  "Dayoung",
  "Moonbyul",
  "Hwasa",
  "Kang Seulgi",
  "Wendy",
  "Irene",
  "Jae",
  "Dino",
  "Luda",
  "Kim Lip",
  "Heejin",
  "Yeojin",
];
const actArray = [
  "defacing public property",
  "committing fraud",
  "laundering money",
  "jopping",
  "doing the stanky leg",
  "eating expired food",
  "belching too loudly",
  "breaking traffic laws",
  "being too hot",
  "being misogynist",
  "having no morals",
  "eating excessively",
  "Naruto running",
  "having bad vibes",
  "lying and cheating",
  "adultery",
  "disturbing the peace",
  "public indecency",
  "being too wacky",
  "getting no bitches",
  "sharting",
  "tax evasion",
];
const hashtagArray = [
  "Save",
  "Free",
  "EnoughAbout",
  "WeLoveYou",
  "DoNotCry",
  "OurAngel",
  "IgnoreTheHaters",
  "WeBelieve",
  "AlwaysWith",
  "MyBaby",
];
const getRandFandom = () => {
  let fanNumber = Math.floor(Math.random() * 23);
  let fandom = fandomArray[fanNumber];
  return fandom;
};
const getRandTimeFrame = () => {
  let timeNumber = Math.floor(Math.random() * 8);
  let timeframe = timeArray[timeNumber];
  return timeframe;
};
const getRandIdol = () => {
  let idolNumber = Math.floor(Math.random() * 37);
  let idol = idolArray[idolNumber];
  return idol;
};
const getRandAct = () => {
  let actNumber = Math.floor(Math.random() * 22);
  let accusedAct = actArray[actNumber];
  return accusedAct;
};
const getRandHash = () => {
  let hashtagNum = Math.floor(Math.random() * 10);
  let hashtag = hashtagArray[hashtagNum];
  return hashtag;
};
const breakingNews = () => {
  let newsFandom = getRandFandom();
  let secondFandom = getRandFandom();
  let newsIdol = getRandIdol();
  let newsTime = getRandTimeFrame();
  let newsAct = getRandAct();
  let newsTag = getRandHash();
  let hashtagName;
  if (newsIdol.includes(" ")) {
    hashtagName = newsIdol.split(" ");
    hashtagName = hashtagName.join("");
  } else {
    hashtagName = newsIdol;
  }
  console.log(
    `${newsTime}, ${newsFandom}s began to spread the malicious rumor that ${newsIdol} is guilty of ${newsAct}. Now, ${secondFandom}s have taken to Twitter to spread the hashtag #${newsTag}${hashtagName}.`
  );
};
breakingNews();
