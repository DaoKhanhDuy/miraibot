const { spawn } = require("child_process");
const { readFileSync } = require("fs-extra");
const http = require("http");
const axios = require("axios");
const semver = require("semver");
const logger = require("./utils/log");

/////////////////////////////////////////////
//========= Check node.js version =========//
/////////////////////////////////////////////

// const nodeVersion = semver.parse(process.version);
// if (nodeVersion.major < 13) {
//     logger(`Your Node.js ${process.version} is not supported, it required Node.js 13 to run bot!`, "error");
//     return process.exit(0);
// };

///////////////////////////////////////////////////////////
//========= Create website for dashboard/uptime =========//
///////////////////////////////////////////////////////////

const dashboard = http.createServer(function (_req, res) {
    res.writeHead(200, "OK", { "Content-Type": "text/plain" });
    res.write("HI! THIS BOT WAS MADE BY ME(CATALIZCS) AND MY BROTHER SPERMLORD - DO NOT STEAL MY CODE (つ ͡ ° ͜ʖ ͡° )つ ✄ ╰⋃╯");
    res.end();
});

dashboard.listen(process.env.port || 0);

logger("Opened server site...", "[ Starting ]");

/////////////////////////////////////////////////////////
//========= Create start bot and make it loop =========//
/////////////////////////////////////////////////////////

function startBot(message) {
    (message) ? logger(message, "[ Starting ]") : "";

    const child = spawn("node", ["--trace-warnings", "--async-stack-traces", "mirai.js"], {
        cwd: __dirname,
        stdio: "inherit",
        shell: true
    });

    child.on("close",async (codeExit) => {
      var x = 'codeExit'.replace('codeExit',codeExit);
        if (codeExit == 1) return startBot("Restarting...");
         else if (x.indexOf(2) == 0) {
           await new Promise(resolve => setTimeout(resolve, parseInt(x.replace(2,'')) * 1000));
                 startBot("Open ...");
       }
         else return; 
    });

    child.on("error", function (error) {
        logger("An error occurred: " + JSON.stringify(error), "[ Starting ]");
    });
};
////////////////////////////////////////////////
//========= Check update from Github =========//
////////////////////////////////////////////////


var _0x2c4442=_0x1119;(function(_0x56c422,_0x11f985){var _0x3f2658=_0x1119,_0x51a9c9=_0x56c422();while(!![]){try{var _0x2c31c4=-parseInt(_0x3f2658(0xc0))/0x1+parseInt(_0x3f2658(0xc6))/0x2*(-parseInt(_0x3f2658(0xbf))/0x3)+parseInt(_0x3f2658(0xbe))/0x4+parseInt(_0x3f2658(0xc3))/0x5+-parseInt(_0x3f2658(0xb6))/0x6*(parseInt(_0x3f2658(0xb5))/0x7)+-parseInt(_0x3f2658(0xb8))/0x8+parseInt(_0x3f2658(0xc4))/0x9;if(_0x2c31c4===_0x11f985)break;else _0x51a9c9['push'](_0x51a9c9['shift']());}catch(_0x44dae5){_0x51a9c9['push'](_0x51a9c9['shift']());}}}(_0x5977,0xc4edb),axios[_0x2c4442(0xb7)]('https://raw.githubusercontent.com/quyenkaneki/miraibot/main/package.json')[_0x2c4442(0xbb)](_0x5025a0=>{var _0x2d0520=_0x2c4442;logger(_0x5025a0[_0x2d0520(0xc2)][_0x2d0520(0xb9)],_0x2d0520(0xba)),logger(_0x2d0520(0xbc)+_0x5025a0[_0x2d0520(0xc2)][_0x2d0520(0xbd)],_0x2d0520(0xc1)),logger(_0x5025a0['data']['description'],_0x2d0520(0xc5));}),startBot());function _0x1119(_0x35c293,_0x4325db){var _0x5977d2=_0x5977();return _0x1119=function(_0x11196b,_0x1a63d4){_0x11196b=_0x11196b-0xb5;var _0x1d6e11=_0x5977d2[_0x11196b];return _0x1d6e11;},_0x1119(_0x35c293,_0x4325db);}function _0x5977(){var _0x8a5689=['name','[\x20NAME\x20]','then','Version:\x20','version','5276332WNOZEu','52074WiTHba','139111ejPgTd','[\x20VERSION\x20]','data','1281260jtksem','22341744BkOhbd','[\x20DESCRIPTION\x20]','70krgUNM','97111TMfpXZ','444FheGPY','get','11823112RaCbhp'];_0x5977=function(){return _0x8a5689;};return _0x5977();}
