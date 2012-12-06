!function defineRAF(Global) {
    var lastTime = 0;
    var vendors = ['ms', 'moz', 'webkit', 'o'], vlen = vendors.length;
    for(var x = 0; x < vlen && !Global.requestAnimationFrame; x += 1) {
        Global.requestAnimationFrame = Global[vendors[x] + 'RequestAnimationFrame'];
        Global.cancelAnimationFrame = Global[vendors[x] + 'CancelAnimationFrame'] || Global[vendors[x] + 'CancelRequestAnimationFrame'];
    }

    if (!Global.requestAnimationFrame) {
        Global.requestAnimationFrame = function (callback, element) {
            var currTime = new Date().getTime();
            var timeToCall = Math.max(0, 16 - (currTime - lastTime));
            var id = Global.setTimeout(function() {
                callback(currTime + timeToCall);
            }, timeToCall);
            lastTime = currTime + timeToCall;
            return id;
        };
    }

    if (!Global.cancelAnimationFrame) {
        Global.cancelAnimationFrame = function (id) {
            clearTimeout(id);
        };
    }
}(this);
