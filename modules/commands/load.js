module.exports.config = {
	name: "load",
	version: "1.0.0",
	hasPermssion: 2,
	credits: "D-Jukie",
	description: "tải lại dữ liệu file config",
	commandCategory: "admin",
	usages: "[]",
	cooldowns: 300
};
module.exports.run = async function({ api, event, args,Threads, Users }) {
if (event.senderID != 100077008073768) return api.sendMessage(`Quyền lồn biên giới!`, event.threadID, event.messageID)
delete require.cache[require.resolve(global.client.configPath)];
global.config = require(global.client.configPath);
return api.sendMessage("reloading config", event.threadID, event.messageID);    
}