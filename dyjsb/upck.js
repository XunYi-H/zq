

/*
自用cookie上传脚本，上传至青龙自动更新cookie
*/



const $ = new Env('抖音极速版');
let awyuserck = 1;
let awyapp = $['getjson']('dyjsbapp', []);
let appid = 4;
let updatetoken = $.getdata("updatetoken") || '';
let updateurl = $.getdata("updateurl") || '';
let devicetag = $.getdata("tag") || '';
let qqydqlid = 0;

!(async () => {if (typeof $request !== "undefined") {
    console.log('测试抓取ck上传')
    await getCk();
}})()
.catch((e) => $.logErr(e))
.finally(() => $.done())

async function getCk() {
    if ($request && $request['url']['indexOf']('aweme' && 'sign_in') >= 0) {
        const cookie = $request['headers']['Cookie'];
        const url = $request['url']['split']('?')[0];
        const ua = $request['headers']['User-Agent'];
        let _0x4156cd = awyuserck - 0x1;
        if (awyapp[_0x4156cd]) {
            awyapp[_0x4156cd]['dyjsb_sign_url'] = url;
            awyapp[_0x4156cd]['dyjsb_sign_cookie'] = cookie;
        } else {
            awyapp[_0x4156cd] = {
                'dyjsb_sign_url': url,
                'dyjsb_sign_cookie': cookie
            };
        }
        resdata = await upck(JSON.stringify(ua),awyapp[_0x4156cd])
        try{            
            awyapp[_0x4156cd]['sqlid'] = resdata.data.id
        }catch{
            print(resdata)
        }finally{
            $['setdata'](JSON['stringify'](awyapp, null, 0x2), 'dyjsbapp');
        }
        $['log']('抖音极速版签到url: ' + url);
        $['log']('抖音极速版签到Cookie: ' + cookie);
        $['msg']($['name'], '成功获取到签到数据🎉');
    }
    if ($request && $request['url']['indexOf']('aweme' && 'done/read') >= 0x0) {
        const _0x1ed2d7 = JSON['stringify']($request['headers']);
        const _0x1251c8 = $request['url']['split']('?')[0x1];
        const ua = $request['headers']['User-Agent'];
        let _0x439cdc = awyuserck - 0x1;
        awyapp[_0x439cdc]['dyjsb_host'] = $request['headers']['Host'];
        awyapp[_0x439cdc]['dyjsb_read_url'] = _0x1251c8;
        awyapp[_0x439cdc]['dyjsb_read_header'] = _0x1ed2d7;
        resdata = await upck(JSON.stringify(ua),awyapp[_0x439cdc])
        try{            
            awyapp[_0x439cdc]['sqlid'] = resdata.data.id
        }catch{
            print(resdata)
        }finally{
            $['setdata'](JSON['stringify'](awyapp, null, 0x2), 'dyjsbapp');
        }

        $['log']('抖音极速版视频url: ' + _0x1251c8);
        $['log']('抖音极速版视频headers:\x20' + _0x1ed2d7);
        $['msg']($['name'], '成功获取到视频数据🎉');
    }
    if ($request && $request['url']['indexOf']('aweme' && 'done/treasure_task') >= 0x0) {
        const _0x1e4966 = JSON['stringify']($request['headers']);
        const _0x3efaf4 = $request['url']['split']('?')[0x1];
        const ua = $request['headers']['User-Agent'];
        let _0x4fda0e = awyuserck - 0x1;
        awyapp[_0x4fda0e]['dyjsb_box_url'] = _0x3efaf4;
        awyapp[_0x4fda0e]['dyjsb_box_header'] = _0x1e4966;
        resdata = await upck(JSON.stringify(ua),awyapp[_0x4fda0e])
        try{            
            awyapp[_0x4fda0e]['sqlid'] = resdata.data.id
        }catch{
            print(resdata)
        }finally{
            $['setdata'](JSON['stringify'](awyapp, null, 0x2), 'dyjsbapp');
        }

        $['log']('抖音极速版开宝箱任务url: ' + _0x3efaf4);
        $['log']('抖音极速版开宝箱任务headers: ' + _0x1e4966);
        $['msg']($['name'], '成功获取到开宝箱任务数据🎉');
    }
    if ($request && $request['url']['indexOf']('aweme' && 'done/excitation_ad_treasure_box') >= 0x0) {
        const _0x70899b = JSON['stringify']($request['headers']);
        const _0x5a884d = $request['url']['split']('?')[0x1];
        const ua = $request['headers']['User-Agent'];

        let _0xe9d046 = awyuserck - 0x1;
        awyapp[_0xe9d046]['dyjsb_box_ad_url'] = _0x5a884d;
        awyapp[_0xe9d046]['dyjsb_box_ad_header'] = _0x70899b;
        resdata = await upck(JSON.stringify(ua),awyapp[_0xe9d046])
        try{            
            awyapp[_0xe9d046]['sqlid'] = resdata.data.id
        }catch{
            print(resdata)
        }finally{
            $['setdata'](JSON['stringify'](awyapp, null, 0x2), 'dyjsbapp');
        }

        $['log']('抖音极速版开宝箱看广告任务url:\x20' + _0x5a884d);
        $['log']('抖音极速版开宝箱看广告任务headers:\x20' + _0x70899b);
        $['msg']($['name'], '成功获取到开宝箱看广告任务数据🎉');
        return
    }
    if ($request && $request['url']['indexOf']('aweme' && 'done/excitation_ad') >= 0x0) {// && $request['url']['indexOf']('treasure_box') < 0x0
        const _0x1458d9 = JSON['stringify']($request['headers']);
        const _0xb1b271 = $request['url']['split']('?')[0x1];
        const ua = $request['headers']['User-Agent'];

        let _0x5a29cf = awyuserck - 0x1;
        awyapp[_0x5a29cf]['dyjsb_limit_task_url'] = _0xb1b271;
        awyapp[_0x5a29cf]['dyjsb_limit_task_header'] = _0x1458d9;
        resdata = await upck(JSON.stringify(ua),awyapp[_0x5a29cf])
        try{            
            awyapp[_0x5a29cf]['sqlid'] = resdata.data.id
        }catch{
            print(resdata)
        }finally{
            $['setdata'](JSON['stringify'](awyapp, null, 0x2), 'dyjsbapp');
        }
        $['log']('抖音极速版限时广告任务url: ' + _0xb1b271);
        $['log']('抖音极速版限时广告任务headers: ' + _0x1458d9);
        $['msg']($['name'], "现时广告任务获取成功");


    }
}
function upck(ua,cookie) {
    return new Promise((resolve) => {
        const url = updateurl+'/admin/projects/'+updatetoken;
        console.log(url)
        const tag = devicetag.toString()
        const coostr = JSON.stringify(cookie)
        console.log(qqydqlid)
        datas = {id:qqydqlid, name:$.name,cookies: coostr,ua:ua,app: appid,"tag": tag}
        if(ua==""){
            console.log("删除uakey");
            delete datas.ua
        }
        const body = {
            url: url,
            headers: {'accept': 'application/json','Content-Type': 'application/json'},
            body:JSON.stringify(datas),
        };
        $.post(body, (err, resp, data) => {
            try {
                data = JSON.parse(data);
                
            } catch (e) {
                $.logErr(e, resp);
            } finally {
                resolve(data);
            }
        })
    })
}



function Env(t,e){"undefined"!=typeof process&&JSON.stringify(process.env).indexOf("GITHUB")>-1&&process.exit(0);class s{constructor(t){this.env=t}send(t,e="GET"){t="string"==typeof t?{url:t}:t;let s=this.get;return"POST"===e&&(s=this.post),new Promise((e,i)=>{s.call(this,t,(t,s,r)=>{t?i(t):e(s)})})}get(t){return this.send.call(this.env,t)}post(t){return this.send.call(this.env,t,"POST")}}return new class{constructor(t,e){this.name=t,this.http=new s(this),this.data=null,this.dataFile="box.dat",this.logs=[],this.isMute=!1,this.isNeedRewrite=!1,this.logSeparator="\n",this.startTime=(new Date).getTime(),Object.assign(this,e),this.log("",`\ud83d\udd14${this.name}, \u5f00\u59cb!`)}isNode(){return"undefined"!=typeof module&&!!module.exports}isQuanX(){return"undefined"!=typeof $task}isSurge(){return"undefined"!=typeof $httpClient&&"undefined"==typeof $loon}isLoon(){return"undefined"!=typeof $loon}toObj(t,e=null){try{return JSON.parse(t)}catch{return e}}toStr(t,e=null){try{return JSON.stringify(t)}catch{return e}}getjson(t,e){let s=e;const i=this.getdata(t);if(i)try{s=JSON.parse(this.getdata(t))}catch{}return s}setjson(t,e){try{return this.setdata(JSON.stringify(t),e)}catch{return!1}}getScript(t){return new Promise(e=>{this.get({url:t},(t,s,i)=>e(i))})}runScript(t,e){return new Promise(s=>{let i=this.getdata("@chavy_boxjs_userCfgs.httpapi");i=i?i.replace(/\n/g,"").trim():i;let r=this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");r=r?1*r:20,r=e&&e.timeout?e.timeout:r;const[o,h]=i.split("@"),a={url:`http://${h}/v1/scripting/evaluate`,body:{script_text:t,mock_type:"cron",timeout:r},headers:{"X-Key":o,Accept:"*/*"}};this.post(a,(t,e,i)=>s(i))}).catch(t=>this.logErr(t))}loaddata(){if(!this.isNode())return{};{this.fs=this.fs?this.fs:require("fs"),this.path=this.path?this.path:require("path");const t=this.path.resolve(this.dataFile),e=this.path.resolve(process.cwd(),this.dataFile),s=this.fs.existsSync(t),i=!s&&this.fs.existsSync(e);if(!s&&!i)return{};{const i=s?t:e;try{return JSON.parse(this.fs.readFileSync(i))}catch(t){return{}}}}}writedata(){if(this.isNode()){this.fs=this.fs?this.fs:require("fs"),this.path=this.path?this.path:require("path");const t=this.path.resolve(this.dataFile),e=this.path.resolve(process.cwd(),this.dataFile),s=this.fs.existsSync(t),i=!s&&this.fs.existsSync(e),r=JSON.stringify(this.data);s?this.fs.writeFileSync(t,r):i?this.fs.writeFileSync(e,r):this.fs.writeFileSync(t,r)}}lodash_get(t,e,s){const i=e.replace(/\[(\d+)\]/g,".$1").split(".");let r=t;for(const t of i)if(r=Object(r)[t],void 0===r)return s;return r}lodash_set(t,e,s){return Object(t)!==t?t:(Array.isArray(e)||(e=e.toString().match(/[^.[\]]+/g)||[]),e.slice(0,-1).reduce((t,s,i)=>Object(t[s])===t[s]?t[s]:t[s]=Math.abs(e[i+1])>>0==+e[i+1]?[]:{},t)[e[e.length-1]]=s,t)}getdata(t){let e=this.getval(t);if(/^@/.test(t)){const[,s,i]=/^@(.*?)\.(.*?)$/.exec(t),r=s?this.getval(s):"";if(r)try{const t=JSON.parse(r);e=t?this.lodash_get(t,i,""):e}catch(t){e=""}}return e}setdata(t,e){let s=!1;if(/^@/.test(e)){const[,i,r]=/^@(.*?)\.(.*?)$/.exec(e),o=this.getval(i),h=i?"null"===o?null:o||"{}":"{}";try{const e=JSON.parse(h);this.lodash_set(e,r,t),s=this.setval(JSON.stringify(e),i)}catch(e){const o={};this.lodash_set(o,r,t),s=this.setval(JSON.stringify(o),i)}}else s=this.setval(t,e);return s}getval(t){return this.isSurge()||this.isLoon()?$persistentStore.read(t):this.isQuanX()?$prefs.valueForKey(t):this.isNode()?(this.data=this.loaddata(),this.data[t]):this.data&&this.data[t]||null}setval(t,e){return this.isSurge()||this.isLoon()?$persistentStore.write(t,e):this.isQuanX()?$prefs.setValueForKey(t,e):this.isNode()?(this.data=this.loaddata(),this.data[e]=t,this.writedata(),!0):this.data&&this.data[e]||null}initGotEnv(t){this.got=this.got?this.got:require("got"),this.cktough=this.cktough?this.cktough:require("tough-cookie"),this.ckjar=this.ckjar?this.ckjar:new this.cktough.CookieJar,t&&(t.headers=t.headers?t.headers:{},void 0===t.headers.Cookie&&void 0===t.cookieJar&&(t.cookieJar=this.ckjar))}get(t,e=(()=>{})){t.headers&&(delete t.headers["Content-Type"],delete t.headers["Content-Length"]),this.isSurge()||this.isLoon()?(this.isSurge()&&this.isNeedRewrite&&(t.headers=t.headers||{},Object.assign(t.headers,{"X-Surge-Skip-Scripting":!1})),$httpClient.get(t,(t,s,i)=>{!t&&s&&(s.body=i,s.statusCode=s.status),e(t,s,i)})):this.isQuanX()?(this.isNeedRewrite&&(t.opts=t.opts||{},Object.assign(t.opts,{hints:!1})),$task.fetch(t).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>e(t))):this.isNode()&&(this.initGotEnv(t),this.got(t).on("redirect",(t,e)=>{try{if(t.headers["set-cookie"]){const s=t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();this.ckjar.setCookieSync(s,null),e.cookieJar=this.ckjar}}catch(t){this.logErr(t)}}).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>{const{message:s,response:i}=t;e(s,i,i&&i.body)}))}post(t,e=(()=>{})){if(t.body&&t.headers&&!t.headers["Content-Type"]&&(t.headers["Content-Type"]="application/x-www-form-urlencoded"),t.headers&&delete t.headers["Content-Length"],this.isSurge()||this.isLoon())this.isSurge()&&this.isNeedRewrite&&(t.headers=t.headers||{},Object.assign(t.headers,{"X-Surge-Skip-Scripting":!1})),$httpClient.post(t,(t,s,i)=>{!t&&s&&(s.body=i,s.statusCode=s.status),e(t,s,i)});else if(this.isQuanX())t.method="POST",this.isNeedRewrite&&(t.opts=t.opts||{},Object.assign(t.opts,{hints:!1})),$task.fetch(t).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>e(t));else if(this.isNode()){this.initGotEnv(t);const{url:s,...i}=t;this.got.post(s,i).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>{const{message:s,response:i}=t;e(s,i,i&&i.body)})}}time(t){let e={"M+":(new Date).getMonth()+1,"d+":(new Date).getDate(),"H+":(new Date).getHours(),"m+":(new Date).getMinutes(),"s+":(new Date).getSeconds(),"q+":Math.floor(((new Date).getMonth()+3)/3),S:(new Date).getMilliseconds()};/(y+)/.test(t)&&(t=t.replace(RegExp.$1,((new Date).getFullYear()+"").substr(4-RegExp.$1.length)));for(let s in e)new RegExp("("+s+")").test(t)&&(t=t.replace(RegExp.$1,1==RegExp.$1.length?e[s]:("00"+e[s]).substr((""+e[s]).length)));return t}msg(e=t,s="",i="",r){const o=t=>{if(!t)return t;if("string"==typeof t)return this.isLoon()?t:this.isQuanX()?{"open-url":t}:this.isSurge()?{url:t}:void 0;if("object"==typeof t){if(this.isLoon()){let e=t.openUrl||t.url||t["open-url"],s=t.mediaUrl||t["media-url"];return{openUrl:e,mediaUrl:s}}if(this.isQuanX()){let e=t["open-url"]||t.url||t.openUrl,s=t["media-url"]||t.mediaUrl;return{"open-url":e,"media-url":s}}if(this.isSurge()){let e=t.url||t.openUrl||t["open-url"];return{url:e}}}};this.isMute||(this.isSurge()||this.isLoon()?$notification.post(e,s,i,o(r)):this.isQuanX()&&$notify(e,s,i,o(r)));let h=["","==============\ud83d\udce3\u7cfb\u7edf\u901a\u77e5\ud83d\udce3=============="];h.push(e),s&&h.push(s),i&&h.push(i),console.log(h.join("\n")),this.logs=this.logs.concat(h)}log(...t){t.length>0&&(this.logs=[...this.logs,...t]),console.log(t.join(this.logSeparator))}logErr(t,e){const s=!this.isSurge()&&!this.isQuanX()&&!this.isLoon();s?this.log("",`\u2757\ufe0f${this.name}, \u9519\u8bef!`,t.stack):this.log("",`\u2757\ufe0f${this.name}, \u9519\u8bef!`,t)}wait(t){return new Promise(e=>setTimeout(e,t))}done(t={}){const e=(new Date).getTime(),s=(e-this.startTime)/1e3;this.log("",`\ud83d\udd14${this.name}, \u7ed3\u675f! \ud83d\udd5b ${s} \u79d2`),this.log(),(this.isSurge()||this.isQuanX()||this.isLoon())&&$done(t)}}(t,e)}
