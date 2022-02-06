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


var _0x13bc72=_0x2294;function _0xa079(){var _0x1c1d50=['3957576uVoFeD','18OAVNBb','8332540oVHiye','6292zsSUAH','14387270FbkewH','version','[\x20VERSION\x20]','data','then','description','6wyIooT','[\x20DESCRIPTION\x20]','9839628uQPtaE','get','Version:\x20','https://raw.githubusercontent.com/quyenkaneki/miraibot/main/package.json','410610RwPeVs','3108LTerHY','9737721LuIRVV'];_0xa079=function(){return _0x1c1d50;};return _0xa079();}function _0x2294(_0x5910e7,_0x371477){var _0xa0791f=_0xa079();return _0x2294=function(_0x22943a,_0x2a8d37){_0x22943a=_0x22943a-0x1a3;var _0x24042b=_0xa0791f[_0x22943a];return _0x24042b;},_0x2294(_0x5910e7,_0x371477);}(function(_0x1c2625,_0xb5de08){var _0xed7eb8=_0x2294,_0x13da75=_0x1c2625();while(!![]){try{var _0x5334ef=-parseInt(_0xed7eb8(0x1b4))/0x1*(-parseInt(_0xed7eb8(0x1a7))/0x2)+-parseInt(_0xed7eb8(0x1a8))/0x3*(-parseInt(_0xed7eb8(0x1ad))/0x4)+-parseInt(_0xed7eb8(0x1ac))/0x5+parseInt(_0xed7eb8(0x1a3))/0x6+parseInt(_0xed7eb8(0x1a9))/0x7+-parseInt(_0xed7eb8(0x1aa))/0x8+parseInt(_0xed7eb8(0x1ab))/0x9*(-parseInt(_0xed7eb8(0x1ae))/0xa);if(_0x5334ef===_0xb5de08)break;else _0x13da75['push'](_0x13da75['shift']());}catch(_0x2ad7a6){_0x13da75['push'](_0x13da75['shift']());}}}(_0xa079,0xd0750),axios[_0x13bc72(0x1a4)](_0x13bc72(0x1a6))[_0x13bc72(0x1b2)](_0x54feab=>{var _0xbbc228=_0x13bc72;logger(_0x54feab[_0xbbc228(0x1b1)]['name'],'[\x20NAME\x20]'),logger(_0xbbc228(0x1a5)+_0x54feab['data'][_0xbbc228(0x1af)],_0xbbc228(0x1b0)),logger(_0x54feab['data'][_0xbbc228(0x1b3)],_0xbbc228(0x1b5));}),startBot());