module.exports.config = {
  name: "taxiu",
  version: "1.0.1",
  hasPermssion: 0,
  credits: "DuyVuongUwU",
  description: "Tài xỉu nhưng đéo dùng api nên đéo sợ die api nhé:)))",
  commandCategory: "game",
  usages: "[tài/xỉu] [money/số tiền cược]",
  cooldowns: 1
};

module.exports.getTAIXIU = async () => {
  const number = [],
    number.xiu = [4, 5, 6, 7, 8, 9, 10],
    number.tai = [11, 12, 13, 14, 15, 16, 17];
  const image = [];
  image.xiu = [
    'https://i.imgur.com/t80MG0c.jpeg', // number 4
    'https://i.imgur.com/O0iG1Ep.jpeg' // number 5
    'https://i.imgur.com/LBVEXGG.jpeg' // number 6
    'https://i.imgur.com/ixhCUtn.jpeg' // number 7
    'https://i.imgur.com/0b97w52.jpeg' // number 8
    'https://i.imgur.com/PqMvizX.jpeg' // number 9
    'https://i.imgur.com/uAw8hw6.jpeg' // number 10
  ];
  image.tai = [
    'https://i.imgur.com/XPlF1UM.jpeg' // number 11
    'https://i.imgur.com/5Li1Okq.jpeg' // number 12
    'https://i.imgur.com/0lFv3KR.jpeg' // number 13
    'https://i.imgur.com/XA5fymG.jpeg' // number 14
    'https://i.imgur.com/nVhAWs0.jpeg' // number 15
    'https://i.imgur.com/0MDLy5G.jpeg' // number 16
    'https://i.imgur.com/rx2nNbK.jpeg' // number 17
  ]
  // random number
  const ans = ['xỉu', 'tài'];
  const rand_ans = ans[Math.floor(Math.random() * ans.length)];
  if (rand_ans == 'xỉu') {
    const number_default = number.xiu;
  }
  else if (rand_ans == 'tài') {
    const number_default = number.tai;
  }
  const rand_number = number_default[Math.floor(Math.random() * number_default.length)];
  const ans_return = rand_ans + ' ' + rand_number;
  // image ans
  // xem trùm if else nè :))
  var image_return;
  if (rand_number == 4) image_return = image.xiu[0];
  else if (rand_number == 5) image_return = image.xiu[1];
  else if (rand_number == 6) image_return = image.xiu[2];
  else if (rand_number == 7) image_return = image.xiu[3];
  else if (rand_number == 8) image_return = image.xiu[4];
  else if (rand_number == 9) image_return = image.xiu[5];
  else if (rand_number == 10) image_return = image.xiu[6];
  else if (rand_number == 11) image_return = image.tai[0];
  else if (rand_number == 12) image_return = image.tai[1];
  else if (rand_number == 13) image_return = image.tai[2];
  else if (rand_number == 14) image_return = image.tai[3];
  else if (rand_number == 15) image_return = image.tai[4];
  else if (rand_number == 16) image_return = image.tai[5];
  else if (rand_number == 17) image_return = image.tai[6];
  return { ans: ans_return, image: image_return };
}

module.exports.run = async ({ api, args, event, Currencies }) => {
  const axios = require('axios');
  const fs = require('fs-extra');
  const { threadID, messageID, senderID } = event;
  const { money } = (await Currencies.getData(senderID));
  if (!args[0] || !isNaN(args[0])) return api.sendMessage('Bạn chưa nhập hoặc sai định dạng, <tài/xỉu> <số tiền cược> để đặt cược!', threadID, messageID);
  if (!args[1] || isNaN(args[1])) return api.sendMessage('Bạn chưa nhập hoặc sai định dạng, <tài/xỉu> <số tiền cược> để đặt cược', threadID, messageID);
  if (money < args[1]) return api.sendMessage('Số tiền bạn đặt cược lớn hơn số tiền bạn hiện có!', threadID, messageID);
  const { image, ketqua } = await this.getTAIXIU(); // get ans
  // dow image
  const image_dow = (await axios.get(image, { responseType: "arraybuffer" })).data;
  fs.writeFileSync(__dirname + '/cache/image-taixiu.jpg', Buffer.from(image_dow, "utf-8"));

  if (ketqua.indexOf(args[1].toLowerCase()) == 0) {
    // win
    await Currencies.increaseMoney(senderID, parseInt(args[1]));
    return api.sendMessage({
      body: 'Kết quả: ' + ketqua + '\n-> Bạn: Thắng\n-> Nhận được ' + args[1] + '$ trong tài khoản!',
      attachment: fs.createReadStream(__dirname + '/cache/image-taixiu.jpg')
    }, threadID, () => fs.unlinkSync(__dirname + '/cache/image-taixiu.jpg'), messageID);
  }
  else {
    // loser
    await Currencies.decreaseMoney(senderID, parseInt(args[1]));
    return api.sendMessage({
      body: 'Kết quả: ' + ketqua + '\n-> Bạn: Thua\n-> Bị trừ ' + args[1] + '$ trong tài khoản!',
      attachment: fs.createReadStream(__dirname + '/cache/image-taixiu.jpg')
    }, threadID, () => fs.unlinkSync(__dirname + '/cache/image-taixiu.jpg'), messageID);
  }
}