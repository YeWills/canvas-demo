var WINDOW_WIDTH = document.body.clientWidth
var WINDOW_HEIGHT = document.body.clientHeight
var MARGIN_LEFT = Math.round(WINDOW_WIDTH /10);
var RADIUS = Math.round(WINDOW_WIDTH * 4 / 5 / 108)-1
var MARGIN_TOP = Math.round(WINDOW_HEIGHT /5);

const endTime = 270000000 + (new Date()).getTime();
var curShowTimeSeconds = 0

var balls = [];
const colors = ["#33B5E5","#0099CC","#AA66CC","#9933CC","#99CC00","#669900","#FFBB33","#FF8800","#FF4444","#CC0000"]

function getCurrentShowTimeSeconds() {
    var curTime = new Date();
    var ret = endTime - curTime.getTime();
    ret = Math.round( ret/1000 )

    return ret >= 0 ? ret : 0;
}