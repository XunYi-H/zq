

/*
子用
*/



const $ = new Env('中青看点极速版');
let awyuserck = 1;
let awyapp = $['getjson']('zqkdapp', []);
let appid = 20;
let updatetoken = $.getdata("updatetoken") || '';
let updateurl = $.getdata("updateurl") || '';
let devicetag = $.getdata("tag") || '';
let qqydqlid = 0;

!(async () => {if (typeof $request !== "undefined") {
    await getCk();
}})()
.catch((e) => $.logErr(e))
.finally(() => $.done())

async function getCk() {
    // 1
    if ($request['url']['match'](/\/getAllPromotion/)) {
        if (false) {
        } else {
            const _0xc9847f = $request['url']['split']('token=')[0x1]['split']('&')[0x0];
            const _0x1c50fc = $request['headers']['User-Agent'];
            let _0x1380f2 = _0x4963dc - 0x1;
            if (_0x53d697[_0x1380f2]) {
                _0x53d697[_0x1380f2]['token'] = _0xc9847f;
                _0x53d697[_0x1380f2]['ua'] = _0x1c50fc;
            } else {
                    const _0x56cf41 = {};
                    _0x56cf41['token'] = _0xc9847f;
                    _0x56cf41['ua'] = _0x1c50fc;
                    _0x53d697[_0x1380f2] = _0x56cf41;
            }
        }
    }
    // 2
    if ($request['url']['match'](/\/open-app/)) {

        const _0x1e3505 = $request['headers']['Cookie'];
        const _0x183c58 = $request['headers']['User-Agent'];
        const _0x4e2c91 = $request['headers']['X-Device-Id'];
        let _0x5b4a69 = _0x4963dc - 0x1;
        if (_0x53d697[_0x5b4a69]) {
                _0x53d697[_0x5b4a69]['cookie'] = _0x1e3505;
                _0x53d697[_0x5b4a69]['xua'] = _0x183c58;
                _0x53d697[_0x5b4a69]['deviceId'] = _0x4e2c91;
        } else {
            const _0x32b0b6 = {};
            _0x32b0b6['cookie'] = _0x1e3505;
            _0x32b0b6['xua'] = _0x183c58;
            _0x32b0b6['deviceId'] = _0x4e2c91;
            _0x53d697[_0x5b4a69] = _0x32b0b6;                
        }

    }
    // 3
    if ($request['url']['match'](/\/user_popup_configs/)) {
        const _0x97dafc = $request['url']['split']('distinct_id=')[0x1]['split']('&')[0x0];
        let _0x14248e = _0x4963dc - 1;
        if (_0x53d697[_0x14248e]) {
                _0x53d697[_0x14248e]['userid'] = _0x97dafc;
        } else {
                const _0x30351b = {};
                _0x30351b['userid'] = _0x97dafc;
                _0x53d697[_0x14248e] = _0x30351b;
        }
    }
    // 4 
    if ($request['url']['match'](/\/incentiveVideo/)) {
        const _0x5c1fee = JSON['parse']($request['body']);
        const _0x2e0792 = _0x5c1fee['data'];
        const _0x15bcf3 = _0x2e0792['substring'](0x0, 0x2);
        let _0x423ed5 = _0x4963dc - 0x1;
        if (_0x53d697[_0x423ed5]) {
            _0x53d697[_0x423ed5]['prefix'] = _0x15bcf3;
        } else {
            const _0x2e0431 = {};
            _0x2e0431['prefix'] = _0x15bcf3;
            _0x53d697[_0x423ed5] = _0x2e0431;
        }
    }
    // 5 
    
    if ($request['method'] != 'OPTIONS' && $request['url']['match'](/\/bind-promoter/)) {

        const _0xb2cf4b = $request['headers']['third-token'];
        let _0x2d0fb6 = _0x4963dc - 0x1;
        let _0x2620dc = _0x53d697[_0x2d0fb6]['thirdTokens'] || [];
        let _0x114a71 = _0x2620dc['length'];
        _0x2620dc['push'](_0xb2cf4b);
        _0x53d697[_0x2d0fb6]['thirdTokens'] = _0x2620dc;
    }





    if ($request['url']['match'](/\/v5\/article\/info/)) {
        const _0x527f6a = $request['url'];
        const _0x411fa6 = _0x527f6a['split']('?')[0x1];
        let _0x23050f = awyuserck - 0x1;
        if (awyapp[_0x23050f]) {
            awyapp[_0x23050f]['wz_body'] = _0x411fa6;
        } else {
            awyapp[_0x23050f] = {
                'wz_body': _0x411fa6
            };
        }
        const ua = $request['headers']['User-Agent'];
        resdata = await upck(JSON.stringify(ua),awyapp[_0x23050f])
        try{            
            awyapp[_0x23050f]['sqlid'] = resdata.data.id
        }catch{
            print(resdata)
        }finally{
            $['setdata'](JSON['stringify'](awyapp, null, 0x2), 'zqkdapp');
        }
        $['msg']($['name'], '中青看点账号' + (_0x23050f + 0x1) + '文章请求数据获取成功！🎉');
    }
    if ($request['url']['match'](/\/Nameless\/getTaskBrowse/)) {
        const _0x4e42da = JSON['stringify']($request['headers']);
        const _0x2be336 = $request['url'];
        let _0xf4f9cb = awyuserck - 0x1;
        if (awyapp[_0xf4f9cb]) {
            awyapp[_0xf4f9cb]['kkz_headers'] = _0x4e42da;
            awyapp[_0xf4f9cb]['kkz_url'] = _0x2be336;
        } else {
            awyapp[_0xf4f9cb] = {
                'kkz_headers': _0x4e42da,
                'kkz_url': _0x2be336
            };
        }
        const ua = $request['headers']['User-Agent'];
        resdata = await upck(JSON.stringify(ua),awyapp[_0xf4f9cb])
        try{            
            awyapp[_0xf4f9cb]['sqlid'] = resdata.data.id
        }catch{
            print(resdata)
        }finally{
            $['setdata'](JSON['stringify'](awyapp, null, 0x2), 'zqkdapp');
        }
        $['msg']($['name'], '中青看点账号' + (_0xf4f9cb + 0x1) + '看看赚请求数据获取成功！🎉');
    }
    if ($request['url']['match'](/\/NewTaskIos\/getTaskList/)) {
        const _0x4363ad = $request['url']['split']('?')[0x1];
        let _0x4aa2b3 = awyuserck - 0x1;
        if (awyapp[_0x4aa2b3]) {
            awyapp[_0x4aa2b3]['tasks_url'] = _0x4363ad;
        } else {
            awyapp[_0x4aa2b3] = {
                'tasks_url': _0x4363ad
            };
        }
        const ua = $request['headers']['User-Agent'];
        resdata = await upck(JSON.stringify(ua),awyapp[_0x4aa2b3])
        try{            
            awyapp[_0x4aa2b3]['sqlid'] = resdata.data.id
        }catch{
            print(resdata)
        }finally{
            $['setdata'](JSON['stringify'](awyapp, null, 0x2), 'zqkdapp');
        }
        $['msg']($['name'], '中青看点账号' + (_0x4aa2b3 + 0x1) + '任务请求数据获取成功！🎉');
    }
}
function upck(ua,cookie) {
    return new Promise((resolve) => {
        const url = updateurl+'/admin/projects/'+updatetoken;
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
            body:JSON.stringify(datas),//这段到底提交啥
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