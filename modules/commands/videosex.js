module.exports.config = {
  name: "videosex",
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
  if (money >= 1000000) {
  axios.get('https://apiquyenkaneki.tk/api/videosex.php').then(res => {
  var video = res.data.data;
  let callback = function () {
          api.sendMessage({
            body: `⚡️Video sex gái xinh cực đã đây\n-1000000 đô`,
            attachment: fs.createReadStream(__dirname + `/cache/videosex.mp4`)
          }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/videosex.mp4`), event.messageID);
        };
        request(video).pipe(fs.createWriteStream(__dirname + `/cache/videosex.mp4`)).on("close", callback);
        Currencies.setData(event.senderID, options = {money: money - 1000000})
      })
  } else return api.sendMessage("Bạn cần 1000000 đô",event.threadID,event.messageID);
}