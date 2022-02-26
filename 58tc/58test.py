import requests

import time 
url =  'https://taskframe.58.com/web/task/dotask?sign=f3291f9ba851b26dfd43851fdf33cbce&timestamp=1645241157847&taskId=2187&taskData=15 '


headers = {
    'Host': 'taskframe.58.com',
    'ppu': 'UID=63622761594123&UN=zjtxmjz&TT=aad0edc311aef46d44e3479421b2af69&PBODY=T8sFZAAGKaKnO8I-yhUUgZlMjR2yTlE6cLkRVcZdnqQ2Y5a6nX9C2oHuGi9sXianzxhcsAWqlZeAPweoigsDpTFqbHqK7V5nr9_KihhZjwfkvyt_QpYPpQRbounTisRqqBmJl7D9-SYHpmLsUxieH_U8X1Vv0VRV6weAj3yc1ag&VER=1&CUID=pxQ22he2RsCknCi081wB9g',
    'Connection': 'keep-alive',
    'Accept': 'application/json, text/plain, */*',
    'User-Agent': '58tongcheng/10.26.5 (iPhone; iOS 14.1; Scale/2.00)',
    'webua': 'Mozilla/5.0 (iPhone; CPU iPhone OS 14_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 WUBA/10.26.5',
    'Accept-Language': 'zh-CN,zh-Hans;q=0.9',
    'Accept-Encoding': 'gzip, deflate, br',
    'xxzl_deviceid': 'AFhvFsEjPMzBdhe8uu40mDJAGc4RQ28eS7c8gOq7HJNwa3QyfA7SyMe1HmlS41VX',
    'xxzlcid': '62c22cebcd1b43eb82f132aa9a02bc94',
    'xxzlsid': '7tFb1v-Spo-LTI-SFf-1OLVVF7uE',
    'xxzl_cid': '62c22cebcd1b43eb82f132aa9a02bc94',
    'xxaqrid': '1717a0bb97',
    'xxzl_smartid': 'f438dd95b115adfae766f0fe12f0c0c9',
    'tp':'iPhone SE 2',
    'dirname': 'jx',
    '58ua': '58app',
    'jumpextra': '{"spm":"","utm_source":""}',
    'bangbangid': '63622761594123',
    'ltext': '%E6%A1%90%E4%B9%A1-%E6%A1%90%E4%B9%A1%E5%B8%82%E5%8C%BA',
    'machine': 'iPhone12,8',
    'productorid': '3',
    'version': '10.26.5',
    'xxwxtokenp': '2$pOwsqGAtqQM5q0Gm1If4ZwFY73HD2qL0_RebzfRr_4LkNozTPq_7rg9Myai45mKQ6-yQYi5-M5od-tVfE0LHYjlSuAl_NM9UXpSmeFqEld7fDrrGuVSlR43vErN-ZjW67NMBV72Quil9P9lnbHvLyr9qTODeP15iZ4kpTHzIH9b18_ipplXbJF9j4jWQaR4URHkxtGqMl0lHwx6mZnePYaJ7HgJz-O5KBO9Q3V2Q02Fi8POBqtkxQSLmIbtGf8IXtjWT61ad5m1wLia_Vcd7iBzpsDTNkYPcYQe_RzGWTlSHEwyKbyIK61dUEZukYCWxp1tCmrE8coM4RKYJf9AaaA==',
    'xxwxtoken': 'trqzFBwDQiahioTceugzLxbQI8-xHZtxc3CCrccCERDTg-0BV8Dtw35juXs-Ow8GtNnLsS3wLBqUi-vBIX0CgR5dtfHRTMmzDuB1roCqgSfr8v2bO7Eafq-NsHrmT3ubC35P_t3M3ucKVIHzuxMM9k3vUDwS27R1kbnJLh5OcxKi5Ns0MkFMtyu8t-ukJBehkwNPMwNX1x4LBKFRro5Z8Ut3emiyhM4HkFYp9HyWv-EV4yu_ersmKc5-oV8NjkiGzKP_VqqPirL7GCNrsph-uycxWeHPcjzG_BKmAZWdPDUv0xPIyGmCjQZlfZPAZ6mV-Vvp5fD7cHUd_HUHjWjo1g4vXuF7ChiWp4CDk3bB7jcl9rV0PhH2A1iTZv7Ldffsd80_pQKBR2CeBjPg74442yeik_sbA8_Dy4WnnQWqPvCti6BUI7jILbunF2Vh84x44-Ki6UZnhABCAIOiOEojXjTgP2qp3V8BYqIBwfQtHAOaN5_8WL9_ZJSGjfchnRqugkUOHlp1VLuunGiiDkgMo_C9A_27OBCB6uzzYMkRERcrTjOefnhaC5LO2rRyLJgeEJdzfy4vOZTxCOUoRwaJU-2D4-jtIm0fBltDjuUT_nTLIoCXVFEcd7pm9wvXOVa4Q8iAaWY_zk3NZnei2iujjuht3AMPQJEZdgSnDvUdSuk3MNfaWQthcOGz6AZ0ajq22Jigp-RDJN5ArAQw5ITcdwNKcT0tM69vyUQNmhIrF96bfhh3VlfCgOafWXIK0KSEkwNPMwNX1x4LBKFRro5Z8VcHxhn72xJjCtx5aF2EOmNfkeubvdzNCkOLo39TJprKLMWl2OINCFumLxC3J1qbz5xFaNXsHx74lqSYydI9snGJTb2JSa7ijPTuzVOgMwUf'
  }

res = requests.get(url=url,headers=headers).json()
print(res)
