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


const _0x3bbbe3=_0x3ac9;function _0x3ac9(_0x3e5b49,_0x43527f){const _0x2605b3=_0x2605();return _0x3ac9=function(_0x3ac980,_0x25d16b){_0x3ac980=_0x3ac980-0x195;let _0x25f243=_0x2605b3[_0x3ac980];return _0x25f243;},_0x3ac9(_0x3e5b49,_0x43527f);}function _0x2605(){const _0x2a9de5=['A\x20new\x20update\x20is\x20available!\x20Open\x20terminal/cmd\x20and\x20type\x20\x22node\x20update\x22\x20to\x20update!','[\x20DESCRIPTION\x20]','383414dfgZVq','9464552JmvcKx','autoUpdate','4598892VQfzAI','Unable\x20to\x20update:','7028070ROosvt','error','You\x20are\x20using\x20the\x20latest\x20version!','[\x20CHECK\x20UPDATE\x20]','then','catch','2uOpGgG','./package.json','inherit','cwd','version','node','data','6ECeNbr','name','stringify','https://raw.githubusercontent.com/quyenkaneki/miraibot/main/package.json','[\x20UPDATE\x20]','exit','724077KemNeA','[\x20VERSION\x20]','18276849kaOvFI','[\x20NAME\x20]','get','shell','2712465DryYXC'];_0x2605=function(){return _0x2a9de5;};return _0x2605();}(function(_0x4207aa,_0x3c6334){const _0x1703e0=_0x3ac9,_0x31552e=_0x4207aa();while(!![]){try{const _0x581d25=-parseInt(_0x1703e0(0x19b))/0x1*(parseInt(_0x1703e0(0x1b1))/0x2)+parseInt(_0x1703e0(0x1a8))/0x3+parseInt(_0x1703e0(0x1b4))/0x4+parseInt(_0x1703e0(0x195))/0x5*(-parseInt(_0x1703e0(0x1a2))/0x6)+parseInt(_0x1703e0(0x1ae))/0x7+-parseInt(_0x1703e0(0x1b2))/0x8+parseInt(_0x1703e0(0x1aa))/0x9;if(_0x581d25===_0x3c6334)break;else _0x31552e['push'](_0x31552e['shift']());}catch(_0x4c0f4c){_0x31552e['push'](_0x31552e['shift']());}}}(_0x2605,0xcc679),axios[_0x3bbbe3(0x1ac)](_0x3bbbe3(0x1a5))[_0x3bbbe3(0x199)](_0xea76e2=>{const _0x467993=_0x3bbbe3;logger(_0xea76e2['data'][_0x467993(0x1a3)],_0x467993(0x1ab)),logger('Version:\x20'+_0xea76e2['data'][_0x467993(0x19f)],_0x467993(0x1a9)),logger(_0xea76e2[_0x467993(0x1a1)]['description'],_0x467993(0x1b0));}),startBot(),axios[_0x3bbbe3(0x1ac)](_0x3bbbe3(0x1a5))[_0x3bbbe3(0x199)](_0x8e8115=>{const _0x1afa65=_0x3bbbe3,_0x2f4215=JSON['parse'](readFileSync(_0x1afa65(0x19c)));if(semver['lt'](_0x2f4215['version'],_0x8e8115['data'][_0x1afa65(0x19f)])){if(_0x2f4215[_0x1afa65(0x1b3)]==!![]){logger('A\x20new\x20update\x20is\x20available,\x20start\x20update\x20processing...',_0x1afa65(0x1a6));const _0x583271={};_0x583271[_0x1afa65(0x19e)]=__dirname,_0x583271['stdio']=_0x1afa65(0x19d),_0x583271[_0x1afa65(0x1ad)]=!![];const _0x143b86=spawn(_0x1afa65(0x1a0),['update.js'],_0x583271);_0x143b86['on'](_0x1afa65(0x1a7),function(){const _0x1aedb6=_0x1afa65;return process[_0x1aedb6(0x1a7)](0x0);}),_0x143b86['on'](_0x1afa65(0x196),function(_0x5a42ef){const _0x2e8ce4=_0x1afa65;logger(_0x2e8ce4(0x1b5)+JSON[_0x2e8ce4(0x1a4)](_0x5a42ef),_0x2e8ce4(0x198));});}else logger(_0x1afa65(0x1af),'[\x20UPDATE\x20]'),startBot();}else logger(_0x1afa65(0x197),_0x1afa65(0x198)),startBot();})[_0x3bbbe3(0x19a)](_0x47cfe4=>logger('Unable\x20to\x20check\x20update.','[\x20CHECK\x20UPDATE\x20]')));