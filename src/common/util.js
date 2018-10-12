/**
 * 公共方法
 * https://github.com/jsfront/src/blob/master/js.md
 */

var Util = {
    UA: {},
    FORM: {}
};

Util.UA.isMobile = function() {
    if (navigator.userAgent.match(/(MicroMessenger|phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i)) {
        return true;
    }
    return false;
};

Util.UA.isWeChat = function() {
    return /micromessenger/i.test(navigator.userAgent);
};

Util.UA.isQQBroswer = function() {
    return /qq/i.test(navigator.userAgent);
};

Util.UA.isIOS = function() {
    return /(iPhone|iPad|iPod|iOS)/i.test(navigator.userAgent);
};

Util.UA.isAndroid = function() {
    return /(Android)/i.test(navigator.userAgent);
};


/**
 * @param {number} telNumber
 */
Util.FORM.isLegalTel = (telNumber, reg = /^[1](3|4|5|7|8|9)[0-9]{9}$/) => {
    if (reg.test(telNumber)) {
        return true;
    } else {
        return false;
    }
};

/**
 * @param {string} Captcha
 */
Util.FORM.isLegalCaptcha = (Captcha, reg = /^\d{6}$/) => {
    if (reg.test(Captcha)) {
        return true;
    } else {
        return false;
    }
};

/**
 * @param {string} email
 */
Util.FORM.isLegalEmail = (email, reg = /^\w+@\w+\.\w+$/) => {
    if (reg.test(email)) {
        return true;
    }
    return false;
};

/**
 * @param {string} password
 */
Util.FORM.isLegalPassword = (password, reg = /^[a-zA-Z0-9_]{6,16}$/) => {
    if (reg.test(password)) {
        return true;
    }
    return false;
};

/**
 * @param {string} IDCard
 */
Util.FORM.isLegalIDCard = (IDCard, reg = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/) => {
    function validateIdCard(idCard) {
        //15位和18位身份证号码的正则表达式
        var regIdCard = /^(^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$)|(^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])((\d{4})|\d{3}[Xx])$)$/;

        //如果通过该验证，说明身份证格式正确，但准确性还需计算
        if (regIdCard.test(idCard)) {
            if (idCard.length == 18) {
                var idCardWi = new Array(7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2); //将前17位加权因子保存在数组里
                var idCardY = new Array(1, 0, 10, 9, 8, 7, 6, 5, 4, 3, 2); //这是除以11后，可能产生的11位余数、验证码，也保存成数组
                var idCardWiSum = 0; //用来保存前17位各自乖以加权因子后的总和
                for (var i = 0; i < 17; i++) {
                    idCardWiSum += idCard.substring(i, i + 1) * idCardWi[i];
                }

                var idCardMod = idCardWiSum % 11; //计算出校验码所在数组的位置
                var idCardLast = idCard.substring(17); //得到最后一位身份证号码

                //如果等于2，则说明校验码是10，身份证号码最后一位应该是X
                if (idCardMod == 2) {
                    if (idCardLast == "X" || idCardLast == "x") {
                        return true;
                    } else {
                        return false;
                    }
                } else {
                    //用计算出的验证码与最后一位身份证号码匹配，如果一致，说明通过，否则是无效的身份证号码
                    if (idCardLast == idCardY[idCardMod]) {
                        return true;
                    } else {
                        return false;
                    }
                }
            }
        } else {
            return false;
        }
    }


    if (validateIdCard(IDCard)) {
        return true;
    } else {
        return false;
    }
};


/**
 * 是否合法的收货人 2-15个字符，只支持中英文
 * @param {string} consignee
 */
Util.FORM.isLegalConsignee = (consignee, reg = /^[a-zA-Z\u4e00-\u9fa5]{2,15}$/) => {
    if (reg.test(consignee)) {
        return true;
    }
    return false;
};



Util.getElementStyle = (element, attr, NumberMode = 'int') => {
    let target;
    // scrollTop 获取方式不同，没有它不属于style，而且只有document.body才能用
    if (attr === 'scrollTop') {
        target = element.scrollTop;
    } else if (element.currentStyle) {
        target = element.currentStyle[attr];
    } else {
        target = document.defaultView.getComputedStyle(element, null)[attr];
    }
    //在获取 opactiy 时需要获取小数 parseFloat
    return NumberMode == 'float' ? parseFloat(target) : parseInt(target);
};


/**
 * 获取元素距离文档的绝对位置
 * @param  {[type]} element [description]
 * @return
 */
Util.getElementPosition = function(element) {
    var actualLeft = element.offsetLeft;
    var actualTop = element.offsetTop;
    var current = element.offsetParent;
    while (current !== document.body) {
        actualLeft += current.offsetLeft + current.clientLeft;
        actualTop += current.offsetTop + current.clientTop;
        current = current.offsetParent;
    }
    return {
        left: actualLeft,
        top: actualTop
    };
};



/**
 * 根据date 参数 获取指定格式的年月日 时分秒  如 "2017/11/20 08:22:10"
 * @param {Date} date  Date类型的参数
 */
Util.formatTime = function(date) {
    var year = date.getFullYear();
    var month = date.getMonth() + 1;
    var day = date.getDate();

    var hour = date.getHours();
    var minute = date.getMinutes();
    var second = date.getSeconds();

    return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':');
};

/**
 * 根据date 参数 获取指定格式的年月日 如 "2017-11-20"
 * @param {Date} date  Date类型的参数
 */
Util.formatDate = function(date) {
    if (!date) {
        return '';
    }

    var year = date.getFullYear();
    var month = date.getMonth() + 1;
    var day = date.getDate();

    return [year, month, day].map(Util.formatNumber).join('-');
};

Util.formatNumber = function(n) {
    n = n.toString();
    return n[1] ? n : '0' + n;
};

// 传入秒  传出对象 对象有天 时 分 秒 和 字符串 属性
Util.getDHMSBySecond = allSecond => {
    var second = 0,
        minute = 0,
        hour = 0,
        day = 0;
    // s
    second = allSecond % 60;
    // m
    minute = parseInt(allSecond / 60); //算出一共有多少分钟
    //h
    hour = parseInt(minute / 60);
    minute %= 60;
    //d
    day = parseInt(hour / 24);
    hour %= 24;

    var string = day + '天' + hour + '小时' + minute + '分钟' + second + '秒';

    return {
        hour,
        minute,
        second,
        string
    };
};

// 传入秒  传出对象 对象有时 分 秒 和 字符串 属性
Util.getHMSBySecond = allSecond => {
    var hour = Math.floor(allSecond / 3600);
    var minute = Math.floor((allSecond - hour * 3600) / 60);
    var second = allSecond - hour * 3600 - minute * 60;
    // 以冒号分隔  00:32:09
    var string = Util.formatNumber(hour) + ':' + Util.formatNumber(minute) + ':' + Util.formatNumber(second);

    return {
        hour,
        minute,
        second,
        string
    };
};

// 传入秒  传出对象 对象有 分 秒 和 字符串 属性
Util.getMSBySecond = allSecond => {
    var minute = Math.floor(allSecond / 60);
    var second = allSecond - minute * 60;
    // 以冒号分隔  00:32
    var string = Util.formatNumber(minute) + ':' + Util.formatNumber(second);

    return {
        minute,
        second,
        string
    };
};

/**
 * 通过字符串获取秒
 * @param {string}  str "00:08:09" eg:右侧钟表的文字
 * @return {number} second  秒
 */
Util.getSecondByString = str => {
    if (!str) {
        return 0;
    }

    const arr = str.split(':');
    const second = parseInt(arr[0]) * 3600 + parseInt(arr[1]) * 60 + parseInt(arr[2]);
    return second;
};

/**
 * 无刷新地改变url的key value; 若没找到对应的key 则增加此k, v
 * @param {string} key 
 * @param {string} val 
 */
Util.changeURLQuery = (key, val) => {
    let url = window.location.href;
    let reCat01 = '/' + key + '=[^&]*/g';
    let reCat = eval('(' + reCat01 + ')'); //对象化

    if (!reCat.test(url)) {
        if (url.indexOf('?') === -1) {
            window.history.replaceState({}, 0, url + '?' + key + '=' + val);
        } else {
            window.history.replaceState({}, 0, url + '&' + key + '=' + val);
        }
        return;
    }
    window.history.replaceState({}, 0, url.replace(reCat, key + '=' + val));
};

/**
 * 获取url对应参数的值
 * @param {string}  key  默认为""
 * @return {string} value 默认为""
 */
Util.getURLQuery = (key = '') => {
    if (key === '') {
        return '';
    }
    let url = window.location.href;
    let reCat01 = '/' + key + '=[^&]*/g';
    let reCat = eval('(' + reCat01 + ')'); //对象化
    let value;

    try {
        value = window.location.href
            .split('?')[1]
            .match(reCat)[0]
            .replace(`${key}=`, '');
    } catch (e) {
        value = '';
    }
    return value;
};


/**
 * 获取url对应参数的值
 * @param {string} url 
 * @return {Object}  一个解析后的对象
 */
Util.parseQueryString = function(url) {
    let obj = {};
    let arr = [];

    url = url.replace(/^.*?\?/, '');
    url = url.replace(/#.*$/, '');
    arr = url.split('&');

    arr.forEach(el => {
        let r = el.match(/(.+)=(.*)/);
        if (r) {
            let key = r[1];
            let value = r[2] || null;
            obj[key] = value;
        }
    })
    return obj;
}

/**
 * 运动效果
 * @param {HTMLElement} element   运动对象，必选
 * @param {JSON}        target    属性：目标值，必选 如{scrollTop:0}
 * @param {number}      duration  运动时间，可选 
 * @param {string}      mode      运动模式，可选  'linear' 'ease-out' 'ease-in'  ; 'ease-out'为默认值
 * @param {function}    callback  可选，回调函数，链式动画
 */
Util.animate = (element, target, duration = 400, mode = 'ease-out', callback) => {
    clearInterval(element.timer);

    //判断不同参数的情况
    if (duration instanceof Function) {
        callback = duration;
        duration = 400;
    } else if (duration instanceof String) {
        mode = duration;
        duration = 400;
    }

    //判断不同参数的情况
    if (mode instanceof Function) {
        callback = mode;
        mode = 'ease-out';
    }

    //获取dom样式
    const attrStyle = attr => {
        if (attr === 'opacity') {
            return Math.round(Util.getElementStyle(element, attr, 'float') * 100);
        } else {
            return Util.getElementStyle(element, attr);
        }
    };
    //根字体大小，需要从此将 rem 改成 px 进行运算
    const rootSize = parseFloat(document.documentElement.style.fontSize);

    const unit = {};
    const initState = {};

    //获取目标属性单位和初始样式值
    Object.keys(target).forEach(attr => {
        if (/[^\d^\.]+/gi.test(target[attr])) {
            unit[attr] = target[attr].match(/[^\d^\.]+/gi)[0] || 'px';
        } else {
            unit[attr] = 'px';
        }
        initState[attr] = attrStyle(attr);
    });

    //去掉传入的后缀单位
    Object.keys(target).forEach(attr => {
        if (unit[attr] == 'rem') {
            target[attr] = Math.ceil(parseInt(target[attr]) * rootSize);
        } else {
            target[attr] = parseInt(target[attr]);
        }
    });

    let flag = true; //假设所有运动到达终点
    const remberSpeed = {}; //记录上一个速度值,在ease-in模式下需要用到
    element.timer = setInterval(() => {
        Object.keys(target).forEach(attr => {
            let iSpeed = 0; //步长
            let status = false; //是否仍需运动
            let iCurrent = attrStyle(attr) || 0; //当前元素属性址
            let speedBase = 0; //目标点需要减去的基础值，三种运动状态的值都不同
            let intervalTime; //将目标值分为多少步执行，数值越大，步长越小，运动时间越长
            switch (mode) {
                case 'ease-out':
                    speedBase = iCurrent;
                    intervalTime = duration * 5 / 400;
                    break;
                case 'linear':
                    speedBase = initState[attr];
                    intervalTime = duration * 20 / 400;
                    break;
                case 'ease-in':
                    let oldspeed = remberSpeed[attr] || 0;
                    iSpeed = oldspeed + (target[attr] - initState[attr]) / duration;
                    remberSpeed[attr] = iSpeed;
                    break;
                default:
                    speedBase = iCurrent;
                    intervalTime = duration * 5 / 400;
            }
            if (mode !== 'ease-in') {
                iSpeed = (target[attr] - speedBase) / intervalTime;
                iSpeed = iSpeed > 0 ? Math.ceil(iSpeed) : Math.floor(iSpeed);
            }
            //判断是否达步长之内的误差距离，如果到达说明到达目标点
            switch (mode) {
                case 'ease-out':
                    status = iCurrent != target[attr];
                    break;
                case 'linear':
                    status = Math.abs(Math.abs(iCurrent) - Math.abs(target[attr])) > Math.abs(iSpeed);
                    break;
                case 'ease-in':
                    status = Math.abs(Math.abs(iCurrent) - Math.abs(target[attr])) > Math.abs(iSpeed);
                    break;
                default:
                    status = iCurrent != target[attr];
            }

            if (status) {
                flag = false;
                //opacity 和 scrollTop 需要特殊处理
                if (attr === 'opacity') {
                    element.style.filter = 'alpha(opacity:' + (iCurrent + iSpeed) + ')';
                    element.style.opacity = (iCurrent + iSpeed) / 100;
                } else if (attr === 'scrollTop') {
                    element.scrollTop = iCurrent + iSpeed;
                } else {
                    element.style[attr] = iCurrent + iSpeed + 'px';
                }
            } else {
                flag = true;
            }

            if (flag) {
                clearInterval(element.timer);
                if (callback) {
                    callback();
                }
            }
        });
    }, 20);
};


// Returns a function, that, when invoked, will only be triggered at most once
// during a given window of time. Normally, the throttled function will run
// as much as it can, without ever going more than once per `wait` duration;
// but if you'd like to disable the execution on the leading edge, pass
// `{leading: false}`. To disable execution on the trailing edge, ditto.
// 函数节流（如果有连续事件响应，则每间隔一定时间段触发）
// 每间隔 wait(Number) milliseconds 触发一次 func 方法
// 如果 options 参数传入 {leading: false}
// 那么不会马上触发（等待 wait milliseconds 后第一次触发 func）
// 如果 options 参数传入 {trailing: false}
// 那么最后一次回调不会被触发
// **Notice: options 不能同时设置 leading 和 trailing 为 false**
// 示例：
// var throttled = Util.throttle(updatePosition, 100);
// $(window).scroll(throttled);
// 调用方式（注意看 A 和 B console.log 打印的位置）：
// Util.throttle(function, wait, [options])
// sample 1: Util.throttle(function(){}, 1000)
// print: A, B, B, B ...
// sample 2: Util.throttle(function(){}, 1000, {leading: false})
// print: B, B, B, B ...
// sample 3: Util.throttle(function(){}, 1000, {trailing: false})
// print: A, A, A, A ...
// ----------------------------------------- //
Util.throttle = function(func, wait, options) {
    var context, args, result;
    var timeout = null;
    var previous = 0;
    if (!options) options = {};
    var later = function() {
        previous = options.leading === false ? 0 : Date.now();
        timeout = null;
        result = func.apply(context, args);
        if (!timeout) context = args = null;
    };
    return function() {
        var now = Date.now();
        if (!previous && options.leading === false) previous = now;
        var remaining = wait - (now - previous);
        context = this;
        args = arguments;
        if (remaining <= 0 || remaining > wait) {
            if (timeout) {
                clearTimeout(timeout);
                timeout = null;
            }
            previous = now;
            result = func.apply(context, args);
            if (!timeout) context = args = null;
        } else if (!timeout && options.trailing !== false) {
            timeout = setTimeout(later, remaining);
        }
        return result;
    };
};

// Returns a function, that, as long as it continues to be invoked, will not
// be triggered. The function will be called after it stops being called for
// N milliseconds. If `immediate` is passed, trigger the function on the
// leading edge, instead of the trailing.
// 函数去抖（连续事件触发结束后只触发一次）
// sample 1: Util.debounce(function(){}, 1000)
// 连续事件结束后的 1000ms 后触发
// sample 1: Util.debounce(function(){}, 1000, true)
// 连续事件触发后立即触发（此时会忽略第二个参数）
Util.debounce = function(func, wait, immediate) {
    var timeout, args, context, timestamp, result;

    var later = function() {
        var last = Date.now() - timestamp;

        if (last < wait && last >= 0) {
            timeout = setTimeout(later, wait - last);
        } else {
            timeout = null;
            if (!immediate) {
                result = func.apply(context, args);
                if (!timeout) context = args = null;
            }
        }
    };

    return function() {
        context = this;
        args = arguments;
        timestamp = Date.now();
        var callNow = immediate && !timeout;
        if (!timeout) timeout = setTimeout(later, wait);
        if (callNow) {
            result = func.apply(context, args);
            context = args = null;
        }

        return result;
    };
};

// 缓慢滚动到顶部
// backTop('idName');
Util.backTop = function(btnId) {
    var btn = document.getElementById(btnId);
    var d = document.documentElement;
    var b = document.body;
    window.onscroll = set;
    btn.style.display = "none";
    btn.onclick = function() {
        btn.style.display = "none";
        window.onscroll = null;
        this.timer = setInterval(function() {
            d.scrollTop -= Math.ceil((d.scrollTop + b.scrollTop) * 0.1);
            b.scrollTop -= Math.ceil((d.scrollTop + b.scrollTop) * 0.1);
            if ((d.scrollTop + b.scrollTop) == 0) clearInterval(btn.timer, window.onscroll = set);
        }, 10);
    };

    function set() {
        btn.style.display = (d.scrollTop + b.scrollTop > 100) ? 'block' : "none"
    }
};


// 根据索引获取字母
Util.getLetterByIndex = function(index, lowercase) {
    var letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    if (lowercase) letters = letters.toLowerCase();
    return letters.charAt(index);
}

//cookie 的存取
Util.getCookie = (name) => {
    var arr, reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
    if (arr = document.cookie.match(reg))
        return (arr[2]);
    else
        return null;
}

//设置cookie,增加到vue实例方便全局调用
Util.setCookie = (c_name, value, expiredays) => {
    var exdate = new Date();
    exdate.setDate(exdate.getDate() + expiredays);
    document.cookie = c_name + "=" + escape(value) + ((expiredays == null) ? "" : ";expires=" + exdate.toGMTString());
};

//删除cookie
Util.delCookie = (name) => {
    var exp = new Date();
    exp.setTime(exp.getTime() - 1);
    var cval = getCookie(name);
    if (cval != null)
        document.cookie = name + "=" + cval + ";expires=" + exp.toGMTString();
};

export default Util;