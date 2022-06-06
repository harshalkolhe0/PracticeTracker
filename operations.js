var time5;
var time10;

var implement = "Implement";
var approach = "FindApproach";
var selftest = "PrepareTestcases";
var read = "ReadGivenTestcases";
var extra = "Exceededtime";
var timeover = 0;
var add = 0.2;
var startbtn = document.getElementById("startbtn");
var endbtn = document.getElementById("endbtn");
var resetbtn = document.getElementById("resetbtn");
var totaltimetaken = "Totaltimetaken";
var timetaken = document.getElementById(totaltimetaken);
var intervals = [];
function ReturnTime(time) {
    let minutes = Math.floor(time / 60);
    let seconds = Math.floor(time) % 60;
    return minutes + " min " + seconds + " sec";
}
function initialize() {
    time5 = 5 * 60; time10 = 10 * 60;
    document.getElementById(totaltimetaken).innerHTML = ReturnTime(0);
    document.getElementById(implement).innerHTML = ReturnTime(time10);
    document.getElementById(approach).innerHTML = ReturnTime(time5);
    document.getElementById(selftest).innerHTML = ReturnTime(time5);
    document.getElementById(read).innerHTML = ReturnTime(time5);
    document.getElementById(extra).innerHTML = ReturnTime(0);
};
initialize();
startbtn.onclick = function () {
    let i = 0;
    clearInterval(intervals[i]);
    intervals[i++] = setInterval("countdown(read,time5,time5)", 1000);
    clearInterval(intervals[i]);
    intervals[i++] = setInterval("countdown(selftest,2*time5,time5)", 1000);
    clearInterval(intervals[i]);
    intervals[i++] = setInterval("countdown(approach,3*time5,time5)", 1000);
    clearInterval(intervals[i]);
    intervals[i++] = setInterval("countdown(implement,(3*time5+time10),time10)", 1000);
    clearInterval(intervals[i]);
    intervals[i++] = setInterval("countup(extra,(3*time5+time10))", 1000);
    timetaken.innerHTML = ReturnTime(timeover);
}
endbtn.onclick = function () {
    for (let j = 0; j < 5; j++)clearInterval(intervals[j]);
}
resetbtn.onclick = function () {
    for (let j = 0; j < 5; j++)clearInterval(intervals[j]);
    timeover = 0;
    initialize();
}

var countdown = function (id, end, exptime) {
    let time = ReturnTime(exptime);
    if (timeover + exptime >= end) {
        time = ReturnTime(end - timeover);
    }
    if (timeover >= end) {
        document.getElementById(id).innerHTML = "Time Out";
    }
    else {
        document.getElementById(id).innerHTML = time;
    }
    timeover += add;
}
var countup = function (id, start) {
    let time = ReturnTime(timeover - start);
    if (timeover <= start) time = ReturnTime(0);
    document.getElementById(id).innerHTML = time;
    timetaken.innerHTML = ReturnTime(timeover);
    timeover += add;
}

