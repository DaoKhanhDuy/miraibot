module.exports.config = {
  name: "gaixinhtik",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "Trung Kiên mod by Kaneki",
  description: "",
  commandCategory: "video",
  usages: "boobs",
  cooldowns: 5
};

module.exports.run = async ({ api, event, Currencies}) => {
  const axios = require('axios');
  const request = require('request');
  const fs = require("fs");
  var money = (await Currencies.getData(event.senderID)).money
  if (money >= 1000) {
  axios.get('https://apiquyenkaneki.tk/api/gaixinhtiktok.php').then(res => {
  var video = res.data.data;
  let callback = function () {
          api.sendMessage({
            body: `⚡️Video gái xinh tiktok của bạn đây\n-1000 đô`,
            attachment: fs.createReadStream(__dirname + `/cache/tiktok.mp4`)
          }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/tiktok.mp4`), event.messageID);
        };
        request(video).pipe(fs.createWriteStream(__dirname + `/cache/tiktok.mp4`)).on("close", callback);
        Currencies.setData(event.senderID, options = {money: money - 1000})
      })
  } else return api.sendMessage("Bạn cần 1000 đô",event.threadID,event.messageID);
}