module.exports.config = {
  name: "dú",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "Trung Kiên mod by Kaneki",
  description: "",
  commandCategory: "nsfw",
  usages: "boobs",
  cooldowns: 5
};

module.exports.run = async ({ api, event, Currencies}) => {
  const axios = require('axios');
  const request = require('request');
  const fs = require("fs");
  var money = (await Currencies.getData(event.senderID)).money
  if (money >= 500) {
  axios.get('https://apiquyenkaneki.tk/api/gaivuto.php').then(res => {
  var image = res.data.data;
  let callback = function () {
          api.sendMessage({
            body: `⚡️Gái xinh khoe dú nè <3\n-500 đô`,
            attachment: fs.createReadStream(__dirname + `/cache/boobs.png`)
          }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/boobs.png`), event.messageID);
        };
        request(image).pipe(fs.createWriteStream(__dirname + `/cache/boobs.png`)).on("close", callback);
        Currencies.setData(event.senderID, options = {money: money - 500})
      })
  } else return api.sendMessage("Bạn cần 1000 đô",event.threadID,event.messageID);
}