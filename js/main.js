let user = document.getElementById("users");
let num = document.getElementById("perf-num");
let useradd = 1;

// 定义一个函数，生成指定范围内的随机数
function getRandomNumber(min, max) {
    return (Math.random() * (max - min) + min).toFixed(2);
}

// 每隔一段时间更新随机数值
setInterval(function () {
    var randomValue = getRandomNumber(10000, 50000); // 生成10,000到50,000之间的随机数
    num.textContent = randomValue;
}, 2000); // 每2秒更新一次随机数值

let timer = setInterval(function () {
    useradd += 1;
    user.textContent = useradd;
    if (useradd === 120) { // 使用 useradd 而不是 user
        clearInterval(timer); // 使用之前设置的定时器 ID
    }
}, 5000);
