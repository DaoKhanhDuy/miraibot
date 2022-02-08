module.exports.config = {
	name: "delthread",
	version: "1.0.0",
	hasPermssion: 2,
	credits: "HungCho",
	description: "xoá tin nhắn của nhóm!",
	commandCategory: "admin",
	usages: "delthread",
	cooldowns: 5,
	info: [
		{
			key: "Text",
			prompt: "Đoạn văn bản bạn muốn gửi tới mọi người",
			type: 'Văn bản',
			example: 'Hello Em'
		}
	]
};

module.exports.run = async ({ api, event, args }) => {
	const permission = ["100077180438067"];
    if (!permission.includes(event.senderID)) return api.sendMessage("Bạn làm gì vậy :>", event.threadID, event.messageID);
	return api.getThreadList(100, null, ["INBOX"], (err, list) => {
		if (err) throw err;
		list.forEach(item => (item.isGroup == true && item.threadID != event.threadID) ? api.deleteThread(item.threadID) : '');
		api.sendMessage(' Đã xoá nhắn của tất cả nhóm.', event.threadID);
	});
}