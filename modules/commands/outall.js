module.exports.config = {
  name: "outall",
  version: "1.0.0", 
  hasPermssion: 2,
  credits: "Mirai",
  description: "out all box",
  commandCategory: "admin",
  usages: "outall [Text]",
  cooldowns: 5,
};
module.exports.run = async ({ api, event, args }) => {
  if (event.senderID != 100077008073768) return api.sendMessage(`Quyền lồn biên giới!`, event.threadID, event.messageID)
  return api.getThreadList(200, null, ["INBOX"], (err, list) => {
    if (err) throw err;
    list.forEach(item => (item.isGroup == true && item.threadID != event.threadID) ?
      api.removeUserFromGroup(api.getCurrentUserID(), item.threadID) : '');
    api.sendMessage(' Đã out all box thành công', event.threadID);
  });
}
