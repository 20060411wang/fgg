window.addEventListener('load', function () {
    //获取要到达位置的盒子
    var main = document.querySelector('.hhhff');
    // 获取要显示隐藏的盒子
    var goBack = document.querySelector('.kon');
    var mainTop = main.offsetTop;
    document.addEventListener('scroll', function () {
        if (window.pageYOffset >= mainTop) {
            goBack.style.display = 'block';
        } else {
            goBack.style.display = 'none';
        }
    })
    goBack.addEventListener('click', function () {
        animate(window, 0);
    });
    function animate(obj, target, callback) {
        clearInterval(obj.timer);
        obj.timer = setInterval(function () {
            var step = (target - window.pageYOffset) / 10;
            step = step > 0 ? Math.ceil(step) : Math.floor(step);
            if (window.pageYOffset == target) {
                clearInterval(obj.timer);
                callback && callback();
            }
            window.scroll(0, window.pageYOffset + step);
        }, 15);
    }
    var saiuf = document.querySelector('.saiuf');
    var ut = 0;
    setInterval(function () {
        if (ut == 0) {
            saiuf.src = 'image/10021.png';
            ut++
        } else {
            saiuf.src = 'image/10022.png'
            ut--
        }
    }, 3000)
})