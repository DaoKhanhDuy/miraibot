module.exports.config = {
name: "bot",
version: "1.0.1",
hasPermssion: 1,
credits: "Kaneki",
description: "bot",
commandCategory: "admin",
usages: "test",
cooldowns: 5,
};
module.exports.run = async function ({ api, event, args, Users, permssion, getText }) {
const { threadID, messageID } = event;
const { ADMINBOT } = global.config;
const { commands } = global.client;
const { events } = global.client;
const axios = global.nodemodule["axios"];
const fast = global.nodemodule["fast-speedtest-api"];
const speedTest = new fast({
token: "YXNkZmFzZGxmbnNkYWZoYXNkZmhrYWxm",
verbose: false,
timeout: 10000,
https: true,
urlCount: 5,
bufferSize: 8,
unit: fast.UNITS.Mbps
});
const ketqua = await speedTest.getSpeed();
const fs = global.nodemodule["fs-extra"];
const listAdmin = ADMINBOT || config.ADMINBOT || []; {
        // const moment = require("moment-timezone");
        const prefix = config.PREFIX
        const namebot = config.BOTNAME
        const dateNow = Date.now();
        var i = 1
        var msg = [];
        // const time = moment.tz("Asia/Ho_Chi_minh").format("HH:MM:ss L");
        // const thu = moment().weekday();
        /*
         switch (thu) {
             case 0: {
                 textt = "Thứ Hai"
                 break;
             }
             case 1: {
                 textt = "Thứ Ba"
                 break;
             }
             case 2: {
                 textt = "Thứ Tư"
                 break;
             }
             case 3: {
                 textt = "Thứ Năm"
                 break;
             }
             case 4: {
                 textt = "Thứ Sáu"
                 break;
             }
             case 5: {
                 textt = "Thứ Bảy"
                 break;
             }
             default: {
                 textt = "Chủ Nhật"
             }
         }
         */
        // Đối tượng thời gian hiện tại
        var d = new Date();
        const bb = d.getDate();
        const cc = d.getDay();
        const qq = d.getFullYear();
        const ss = d.getYear();
        const zz = d.getHours();
        const rr = d.getMilliseconds();
        const tt = d.getMinutes();
        const yy = d.getMonth();
        const uu = d.getSeconds();
        const ii = d.getTime();
        switch (cc) {
            case 0: {
                textt = "Chủ Nhật"
                break;
            }
            case 1: {
                textt = "Thứ Hai"
                break;
            }
            case 2: {
                textt = "Thứ Ba"
                break;
            }
            case 3: {
                textt = "Thứ Bốn"
                break;
            }
            case 4: {
                textt = "Thứ Năm"
                break;
            }
            case 5: {
                textt = "Thứ Sáu"
                break;
            }
            default: {
                textt = "Chủ Bảy"
            }
        }
        switch (yy) {
            case 0: {
                texttt = "1"
                break;
            }
            case 1: {
                texttt = "2"
                break;
            }
            case 2: {
                texttt = "3"
                break;
            }
            case 3: {
                texttt = "4"
                break;
            }
            case 4: {
                texttt = "5"
                break;
            }
            case 5: {
                texttt = "6"
                break;
            }
            case 6: {
                texttt = "7"
                break;
            }
            case 7: {
                texttt = "8"
                break;
            }
            case 8: {
                texttt = "9"
                break;
            }
            case 9: {
                texttt = "10"
                break;
            }
            case 10: {
                texttt = "11"
                break;
            }
            default: {
                texttt = "12"
            }
        }
        for (const idAdmin of listAdmin) {
            if (parseInt(idAdmin)) {
                const name = await Users.getNameUser(idAdmin);
                msg.push(`${i++}: ${name}\n-${idAdmin}`);
            }
        }
        const pidusage = await global.nodemodule["pidusage"](process.pid);
        const res = await axios.get(`https://apiquyenkaneki.tk/api/gaisexy.php`);
        const { data } = await axios.get(res.data.data, { responseType: 'arraybuffer' });
        fs.writeFileSync(__dirname + '/cache/cac.png', Buffer.from(data));
        return api.sendMessage({
            body: `» 🎭Mirai Bot🎭 «` +
                `\n❯ ${textt}/ Ngày ${bb} Tháng ${texttt} Năm ${qq}` +
                `\n====》 ADMIN 《====` +
                `\n❯ ${msg.join("\n")}` +
                `\n❤️──────────────❤️` +
                `\n❯ PREFIX: ${prefix} ` +
                `\n❯ BOT NAME: ${namebot}` +
                `\n❯ PING: ${Date.now() - dateNow}` +
                `\n❯ FAST: ${ketqua}` +
                `\n❯ THREADS: ${global.data.allThreadID.length}` +
                `\n❯ USERS: ${global.data.allUserID.length}` +
                `\n❯ COMMANDS: ${commands.size}` +
                `\n❯ EVENTS: ${events.size}`,
            attachment: fs.createReadStream(__dirname + '/cache/cac.png')
        }, threadID, messageID);
    }
}