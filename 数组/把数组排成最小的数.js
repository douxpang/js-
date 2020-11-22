// 输入一个正整数数组，把数组里所有数字拼接起来排成一个数，打印能拼接出的所有数字中最小的一个。

// 例如输入数组{3，32，321}，则打印出这三个数字能排成的最小数字为321323


function getMinNumber(nums) {
    //我们可以定义一个我们的排序方式
    if(!nums || !nums.length === 0) {
        return ''
    }
    return nums.sort(getMin).join('')
}

function getMin(a,b) {
    let l1 = '' + a + b
    let l2 = '' + b + a
    return l1 - l2
}
console.log(getMinNumber([3,32,321]))