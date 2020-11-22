// 某公司 1 到 12 月份的销售额存在一个对象里面

// 如下：{1:222, 2:123, 5:888}，请把数据处理为如下结构：[222, 123, null, null, 888, null, null, null, null, null, null, null]。
let obj = {1:222, 2:123, 5:888};        //直接创建一个数组 有12个空
const result = Array.from({ length: 12 }).map(( item, index) => obj[index + 1] || null);
console.log(result)