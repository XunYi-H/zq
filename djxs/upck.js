
const $ = new Env("测试环境")



let updatetoken = $.getdata('updatetoken') || '';
let updateurl = $.getdata("updateurl") || '';
let djxsapp = $.getdata("djxsapp") || [];

console.log(updatecookie)
console.log(updateurl)
console.log(djxsapp[0])


// await updatecookie(JSON.stringify(djxsapp[0]))
// function updatecookie(cookes) {
//     return new Promise((_0x2eb918, _0x548581) => {
//         const _0x395e24 = updateurl+'/admin/projects/'+updatetoken;
//         console.log(_0x395e24)
//         console.log(cookes)
//         const _0x1b9d74 = {
//             url: _0x395e24,
//             headers: {'accept': 'application/json','Content-Type': 'application/json'},
//             json: {name:'namm',cookies:`${cookes}`,'ua':'ua','app':1}
//         };
//         $['post'](_0x1b9d74, async (_0x5475dd, _0x55f1f8, _0x3d8e05) => {
//             const _0x1d73e6 = JSON['parse'](_0x3d8e05);
//             console.log(_0x1d73e6)
//             resolve()
//         });
//     });
// }
