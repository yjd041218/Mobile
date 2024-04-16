var num = document.getElementById("perf-num");

// 定义一个函数，生成指定范围内的随机数
function getRandomNumber(min, max) {
    return (Math.random() * (max - min) + min).toFixed(2);
}

// 每隔一段时间更新随机数值
setInterval(function () {
    var randomValue = getRandomNumber(10000, 50000); // 生成10,000到50,000之间的随机数
    num.textContent = randomValue;
}, 1000); // 每2秒更新一次随机数值