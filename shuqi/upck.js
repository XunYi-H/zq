

/*
自用cookie上传脚本，上传至青龙自动更新cookie
*/



const $ = new Env('书旗小说');
let sqxsuserck = 1;
let sqxsapp = $['getjson']('sqxsapp', []);
let appid = 23;
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
    if ($request['url']['match'](/\/v5\/signInAction/)) {
        const _0x4ce3d1 = $request['body'];
        const _0x111f10 = JSON['stringify']($request['headers']);
        let _0x186cb4 = sqxsuserck - 0x1;
        if (_0x111f10['indexOf']('1.0.5') > -0x1) {//如果版本是极速版1.0.5则抓jsbsignbody，否则抓signbody
            if (!sqxsapp[_0x186cb4]) {
                sqxsapp[_0x186cb4]['jsbsign_body'] = _0x4ce3d1;
            } else {
                sqxsapp[_0x186cb4] = {
                    'jsbsign_body': _0x4ce3d1
                };
            }
            $['log']('极速版签到数据: ' + _0x4ce3d1);
            $['msg']($['name'], '书旗小说极速版账号' + (_0x186cb4 + 0x1) + '签到数据获取成功！🎉');
        } else {
            if (sqxsapp[_0x186cb4]) {
                sqxsapp[_0x186cb4]['sign_body'] = _0x4ce3d1;
            } else {
                sqxsapp[_0x186cb4] = {
                    'sign_body': _0x4ce3d1
                };
            }
            $['log']('签到数据: ' + _0x4ce3d1);
            $['msg']($['name'], '书旗小说账号' + (_0x186cb4 + 0x1) + '签到数据获取成功！🎉');
        }
        //如果抓到，则上传信息，
        if(sqxsapp[_0x186cb4]){
            const ua = $request['headers']['User-Agent'];
            resdata = await upck(JSON.stringify(ua),sqxsapp[_0x186cb4])
            try{            
                sqxsapp[_0x186cb4]['sqlid'] = resdata.data.id
            }catch{
                print(resdata)
            }finally{
                $['setdata'](JSON['stringify'](sqxsapp, null, 0x2), 'sqxsapp');
            }
        }


    }
    if ($request['url']['match'](/\/v1\/task\/reward/)) {
        const _0x143d8f = $request['body'];
        let _0x28c2fb = sqxsuserck - 0x1;
        let _0x4fe86c = sqxsapp[_0x28c2fb]['welfare_bodys'] || [];
        let _0x56f1f6 = _0x4fe86c['length'];
        if (_0x56f1f6 < 0xa) {
            _0x4fe86c['push'](_0x143d8f);
            sqxsapp[_0x28c2fb]['welfare_bodys'] = _0x4fe86c;
            $['msg']($['name'], '书旗小说账号' + (_0x28c2fb + 0x1) + '福利数据' + (_0x56f1f6 + 0x1) + '获取成功！🎉');
        } else {
            $['msg']($['name'], '', '福利数据获取已达上限⚠️ 想重新获取，删除对应数据.');
        }
        //如果抓到，则上传信息，
        if(sqxsapp[_0x28c2fb]){
            const ua = $request['headers']['User-Agent'];
            resdata = await upck(JSON.stringify(ua),sqxsapp[_0x28c2fb])
            try{            
                sqxsapp[_0x28c2fb]['sqlid'] = resdata.data.id
            }catch{
                print(resdata)
            }finally{
                $['setdata'](JSON['stringify'](sqxsapp, null, 0x2), 'sqxsapp');
            }
        }
    }
    if ($request['url']['match'](/\/prize\/manual\/receive/)) {
        const _0x3a6034 = $request['body'];
        let _0x3b8177 = sqxsuserck - 0x1;
        sqxsapp[_0x3b8177]['bubble_body'] = _0x3a6034;
        $['log']('福利中心气泡数据: ' + _0x3a6034);
        $['msg']($['name'], '书旗小说账号' + (_0x3b8177 + 0x1) + '福利中心气泡数据获取成功！🎉');
        //如果抓到，则上传信息，
        if(sqxsapp[_0x3b8177]){
            const ua = $request['headers']['User-Agent'];
            resdata = await upck(JSON.stringify(ua),sqxsapp[_0x3b8177])
            try{            
                sqxsapp[_0x3b8177]['sqlid'] = resdata.data.id
            }catch{
                print(resdata)
            }finally{
                $['setdata'](JSON['stringify'](sqxsapp, null, 0x2), 'sqxsapp');
            }
        }
    }
    if ($request['url']['match'](/\/sdk\/reward_video\/reward/)) {
        const _0xe5bf15 = $request['body'];
        let _0x3f9e71 = sqxsuserck - 0x1;
        const _0x2b4fb6 = sqxsapp[_0x3f9e71]['video_bodys'] || [];
        let _0x29414b = _0x2b4fb6['length'];
        if (_0x29414b < 0x3) {
            _0x2b4fb6['push'](_0xe5bf15);
            sqxsapp[_0x3f9e71]['video_bodys'] = _0x2b4fb6;
            $['msg']($['name'], '书旗小说账号' + (_0x3f9e71 + 0x1) + '视频数据获取成功！🎉, 一共3个ck,当前第' + (_0x29414b + 0x1) + '个');
        } else {
            $['msg']($['name'], '书旗小说账号' + (_0x3f9e71 + 0x1) + '视频数据获取已达上限,想重新获取，删除对应数据.');
        }
        //如果抓到，则上传信息，
        if(sqxsapp[_0x3f9e71]){
            const ua = $request['headers']['User-Agent'];
            resdata = await upck(JSON.stringify(ua),sqxsapp[_0x3f9e71])
            try{            
                sqxsapp[_0x3f9e71]['sqlid'] = resdata.data.id
            }catch{
                print(resdata)
            }finally{
                $['setdata'](JSON['stringify'](sqxsapp, null, 0x2), 'sqxsapp');
            }
        }
    }
    if ($request['url']['match'](/\/activity\/pendant\/lottery/)) {
        const _0x27d58e = $request['url'];
        const _0x45865a = $request['body'];
        let _0x511fea = sqxsuserck - 0x1;
        sqxsapp[_0x511fea]['jsbread_url'] = _0x27d58e;
        sqxsapp[_0x511fea]['jsbread_body'] = _0x45865a;
        $['log']('极速版阅读30秒数据url: ' + _0x27d58e);
        $['log']('极速版阅读30秒数据body: ' + _0x45865a);
        $['msg']($[name], '书旗小说极速版账号' + (_0x511fea + 0x1) + '阅读30秒数据获取成功！🎉');
        //如果抓到，则上传信息，
        if(sqxsapp[_0x511fea]){
            const ua = $request['headers']['User-Agent'];
            resdata = await upck(JSON.stringify(ua),sqxsapp[_0x511fea])
            try{            
                sqxsapp[_0x511fea]['sqlid'] = resdata.data.id
            }catch{
                print(resdata)
            }finally{
                $['setdata'](JSON['stringify'](sqxsapp, null, 0x2), 'sqxsapp');
            }
        }
    }
    if ($request && $request['method'] != 'OPTIONS' && $request['url']['match'](/\/lottery\/draw/)) {
        const _0x6e9b = JSON['stringify']($request['headers']);
        const _0x2a6c11 = $request['body'];
        let _0xe9a70c = sqxsuserck - 0x1;
        sqxsapp[_0xe9a70c]['lucky_draw_header'] = _0x6e9b;
        sqxsapp[_0xe9a70c]['lucky_draw_body'] = _0x2a6c11;
        $['log']('视频转转转抽奖数据header: ' + _0x6e9b);
        $['log']('视频转转转抽奖数据body:\x20' + _0x2a6c11);
        $['msg']($['name'], '书旗小说账号' + (_0xe9a70c + 0x1) + '视频转转转抽奖数据获取成功！🎉');
        //如果抓到，则上传信息，
        if(sqxsapp[_0xe9a70c]){
            const ua = $request['headers']['User-Agent'];
            resdata = await upck(JSON.stringify(ua),sqxsapp[_0xe9a70c])
            try{            
                sqxsapp[_0xe9a70c]['sqlid'] = resdata.data.id
            }catch{
                print(resdata)
            }finally{
                $['setdata'](JSON['stringify'](sqxsapp, null, 0x2), 'sqxsapp');
            }
        }
    }
    if ($request['method'] != 'OPTIONS' && $request['url']['match'](/\/v1\/lottery\/info/)) {
        const _0x4b439d = $request['body'];
        let _0x4bbb57 = sqxsuserck - 0x1;
        if (_0x4b439d['indexOf']('activityId=311') > -0x1) {
            sqxsapp[_0x4bbb57]['zzz_info_body'] = _0x4b439d;
            $['log']('视频转转转信息body: ' + _0x4b439d);
            $['msg']($['name'], '书旗小说账号' + (_0x4bbb57 + 0x1) + '转转转信息数据获取成功！🎉');
                    //如果抓到，则上传信息，
            if(sqxsapp[_0x4bbb57]){
                const ua = $request['headers']['User-Agent'];
                resdata = await upck(JSON.stringify(ua),sqxsapp[_0x4bbb57])
                try{            
                    sqxsapp[_0x4bbb57]['sqlid'] = resdata.data.id
                }catch{
                    print(resdata)
                }finally{
                    $['setdata'](JSON['stringify'](sqxsapp, null, 0x2), 'sqxsapp');
                }
            }
        }
    }
    if ($request && $request['method'] != 'OPTIONS' && $request['url']['match'](/\/api\/getAdInfo/)) {
        const _0x14e638 = $request['url'];
        let _0x185239 = sqxsuserck - 0x1;
        if (_0x14e638['indexOf']('4.3.0') > -0x1) {
            sqxsapp[_0x185239]['new_video_info_url'] = _0x14e638;
            $['log']('新版激励视频信息url:\x20' + _0x14e638);
            $['msg']($['name'], '书旗小说账号' + (_0x185239 + 0x1) + '新版激励视频信息获取成功！🎉');
        } else if (_0x14e638['indexOf']('4.2.6') > -0x1) {
            sqxsapp[_0x185239]['old_video_info_url'] = _0x14e638;
            $['log']('旧版激励视频信息url: ' + _0x14e638);
            $['msg']($['name'], '书旗小说账号' + (_0x185239 + 0x1) +'旧版激励视频信息获取成功！🎉');
        } else if (_0x14e638['indexOf']('1.0.5') > -0x1 && _0x14e638['indexOf']('resourceId=719') > -0x1) {
            sqxsapp[_0x185239]['jsb_video_info_url'] = _0x14e638;
            $['log']('极速版激励视频信息url: ' + _0x14e638);
            $['msg']($['name'], '书旗小说账号' + (_0x185239 + 0x1) +'极速版激励视频信息获取成功！🎉');
        } else if (_0x14e638['indexOf']('1.0.5') > -0x1 && _0x14e638['indexOf']('resourceId=717') > -0x1) {
            sqxsapp[_0x185239]['jsb_sign_video_info_url'] = _0x14e638;
            $['log']('极速版签到视频信息url: ' + _0x14e638);
            $['msg']($['name'], '书旗小说账号' + (_0x185239 + 0x1) + '极速版签到视频信息获取成功！🎉');
        } else {
            if (_0x14e638['indexOf']('1.0.3') > -0x1) {
                sqxsapp[_0x185239]['jsb_oldest_sign_video_info_url'] = _0x14e638;
                $['log']('极速版1.0.3签到视频信息url: ' + _0x14e638);
                $['msg']($['name'], '书旗小说账号' + (_0x185239 + 0x1) + '极速版1.0.3签到视频信息获取成功！🎉');
            }
        }
        //如果抓到，则上传信息，
        if(sqxsapp[_0x185239]){
            const ua = $request['headers']['User-Agent'];
            resdata = await upck(JSON.stringify(ua),sqxsapp[_0x185239])
            try{            
                sqxsapp[_0x185239]['sqlid'] = resdata.data.id
            }catch{
                print(resdata)
            }finally{
                $['setdata'](JSON['stringify'](sqxsapp, null, 0x2), 'sqxsapp');
            }
        }
    }
    if ($request && $request['method'] != 'OPTIONS' && $request['url']['match'](/\/activity\/boxTask/)) {
        const _0x3b9f34 = $request['url'];
        const _0x47c00b = JSON['stringify']($request['headers']);
        let _0x1fbb0d = sqxsuserck - 0x1;
        sqxsapp[_0x1fbb0d]['task_box_header'] = _0x47c00b;
        sqxsapp[_0x1fbb0d]['task_box_url'] = _0x3b9f34;
        $['log']('书旗小说阅读进度数据url: ' + _0x3b9f34);
        $['log']('书旗小说阅读进度数据header: ' + _0x47c00b);
        $['msg']($['name'], '书旗小说账号' + (_0x1fbb0d + 0x1) +'阅读进度数据获取成功！🎉');
        if(sqxsapp[_0x1fbb0d]){
            const ua = $request['headers']['User-Agent'];
            resdata = await upck(JSON.stringify(ua),sqxsapp[_0x1fbb0d])
            try{            
                sqxsapp[_0x1fbb0d]['sqlid'] = resdata.data.id
            }catch{
                print(resdata)
            }finally{
                $['setdata'](JSON['stringify'](sqxsapp, null, 0x2), 'sqxsapp');
            }
        }
    }

    if ($request && $request['method'] != 'OPTIONS' && $request['url']['match'](/\/prize\/lottery/)) {
        const _0x52211d = JSON['stringify']($request['headers']);
        const _0x16564d = $request['body'];
        let _0x2b917f = sqxsuserck - 0x1;
        if (_0x52211d['indexOf']('1.0.3') > -0x1) {
            sqxsapp[_0x2b917f]['jsb_oldest_sign_video_header'] = _0x52211d;
            sqxsapp[_0x2b917f]['jsb_oldest_sign_video_body'] = _0x16564d;
            $['log']('极速版1.0.3签到视频数据header: ' + _0x52211d);
            $['log']('极速版1.0.3签到视频数据body: ' + _0x16564d);
            $['msg']($['name'], '书旗小说极速版1.0.3账号' + (_0x2b917f + 0x1) + '签到视频数据获取成功！');
        } else if (_0x52211d['indexOf']('1.0.5') > -0x1 && _0x16564d['indexOf']('1.0.5') > -0x1) {
            sqxsapp[_0x2b917f]['jsb_video_header'] = _0x52211d;
            sqxsapp[_0x2b917f]['jsb_video_body'] = _0x16564d;
            $['log']('极速版激励视频数据header:\x20' + _0x52211d);
            $['log']('极速版激励视频数据body:\x20' + _0x16564d);
            $['msg']($['name'], '书旗小说极速版账号' + (_0x2b917f + 0x1) + '激励视频数据获取成功！');
        } else {
            sqxsapp[_0x2b917f]['jsb_sign_video_header'] = _0x52211d;
            sqxsapp[_0x2b917f]['jsb_sign_video_body'] = _0x16564d;
            $['log']('极速版1.0.5签到视频数据header: ' + _0x52211d);
            $['log']('极速版1.0.5签到视频数据body: ' + _0x16564d);
            $['msg']($['name'], '书旗小说极速版账号' + (_0x2b917f + 0x1) + '签到视频数据获取成功！');
        }
        if(sqxsapp[_0x2b917f]){
            const ua = $request['headers']['User-Agent'];
            resdata = await upck(JSON.stringify(ua),sqxsapp[_0x2b917f])
            try{            
                sqxsapp[_0x2b917f]['sqlid'] = resdata.data.id
            }catch{
                print(resdata)
            }finally{
                $['setdata'](JSON['stringify'](sqxsapp, null, 0x2), 'sqxsapp');
            }
        }
    }
    if ($request && $request['method'] != 'OPTIONS' && $request['url']['match'](/\/reading\/upload/)) {
        const _0x2d30c2 = JSON['stringify']($request['headers']);
        const _0xd9359f = $request['body'];
        let _0x3934db = sqxsuserck - 0x1;
        sqxsapp[_0x3934db]['read_upload_header'] = _0x2d30c2;
        sqxsapp[_0x3934db]['read_upload_body'] = _0xd9359f;
        decode_rdtime = decodeURIComponent(_0xd9359f);
        // console.log(decode_rdtime);    
        rdsectime = decode_rdtime['split']('{')[0x1]['split']('}')[0x0]['split'](':')[0x4]['split'](',')[0x0];
        console.log(rdsectime)
        if(parseInt(rdsectime)>=100){
            if(sqxsapp[_0x3934db]){
                const ua = $request['headers']['User-Agent'];
                resdata = await upck(JSON.stringify(ua),sqxsapp[_0x3934db])
                try{            
                    sqxsapp[_0x3934db]['sqlid'] = resdata.data.id
                }catch{
                    print(resdata)
                }finally{
                    $['setdata'](JSON['stringify'](sqxsapp, null, 0x2), 'sqxsapp');
                    $['log']('阅读上传时间数据header: ' + _0x2d30c2);
                    $['log']('阅读上传时间数据body: ' + _0xd9359f);
                    $['msg']($['name'],'书旗小说账号' + (_0x3934db + 0x1) + '阅读上传时间数据获取成功！');
                }
            }
        }

    }
    if ($request && $request['method'] != 'OPTIONS' && $request['url']['match'](/\/pendant\/lottery\/action/)) {
        const _0x3e1997 = JSON['stringify']($request['headers']);
        const _0x4b2016 = $request['body'];
        let _0x55578f = sqxsuserck - 0x1;
        sqxsapp[_0x55578f]['read_lottery_header'] = _0x3e1997;
        sqxsapp[_0x55578f]['read_lottery_body'] = _0x4b2016;
        $['log']('阅读30秒奖励数据header: ' + _0x3e1997);
        $['log']('阅读30秒奖励数据body: ' + _0x4b2016);
        $['msg']($['name'], '书旗小说账号' + (_0x55578f + 0x1) + '阅读30秒奖励数据获取成功！');
        if(sqxsapp[_0x55578f]){
            const ua = $request['headers']['User-Agent'];
            resdata = await upck(JSON.stringify(ua),sqxsapp[_0x55578f])
            try{            
                sqxsapp[_0x55578f]['sqlid'] = resdata.data.id
            }catch{
                print(resdata)
            }finally{
                $['setdata'](JSON['stringify'](sqxsapp, null, 0x2), 'sqxsapp');
            }
        }
    }
    if ($request['url']['match'](/\/v1\/task\/reward/)) {
        const _0x4c388b = $request['url'];
        const _0x1adfb9 = $request['body'];
        let _0x580008 = sqxsuserck - 0x1;
        sqxsapp[_0x580008]['jsbwelfare_url'] = _0x4c388b;
        sqxsapp[_0x580008]['jsbwelfare_body'] = _0x1adfb9;
        $['log']('极速版福利中心浏览书城数据url: ' + _0x4c388b);
        $['log']('极速版福利中心浏览书城数据body: '+ _0x1adfb9);
        $['msg']($['name'], '书旗小说极速版账号' + (_0x580008 + 0x1) + '福利中心浏览书城数据获取成功！');
        if(sqxsapp[_0x580008]){
            const ua = $request['headers']['User-Agent'];
            resdata = await upck(JSON.stringify(ua),sqxsapp[_0x580008])
            try{            
                sqxsapp[_0x580008]['sqlid'] = resdata.data.id
            }catch{
                print(resdata)
            }finally{
                $['setdata'](JSON['stringify'](sqxsapp, null, 0x2), 'sqxsapp');
            }
        }
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
