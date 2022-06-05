var time5 = 5 * 60;
var time10 = 10 * 60;

var implement = "Implement";
var approach = "FindApproach";
var selftest = "PrepareTestcases";
var read = "ReadGivenTestcases";
var extra = "Exceededtime";
var timeover = 0;
var add = 0.2;
var startbtn = document.getElementById("startbtn");
var endbtn = document.getElementById("endbtn");
var totaltimetaken = "Totaltimetaken";
var timetaken = document.getElementById(totaltimetaken);
var intervals = [];
startbtn.onclick = function () {

    let i = 0; timeover = 0;
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
    timetaken.innerHTML = 0 + " min " + 0 + " sec";

}
endbtn.onclick = function () {
    for (let j = 0; j < 5; j++)clearInterval(intervals[j]);
    let minutes = Math.floor(timeover / 60);
    let seconds = Math.ceil(timeover) % 60;
    timetaken.innerHTML = minutes + " min " + seconds + " sec";
    timeover = 0;
}
var countdown = function (id, end, exptime) {
    let minutes = Math.floor(exptime / 60);
    let seconds = exptime % 60;
    if (timeover + exptime >= end) {
        minutes = Math.floor((end - timeover) / 60);
        seconds = Math.floor(end - timeover) % 60;
    }
    if (timeover >= end) {
        document.getElementById(id).innerHTML = "Time Out";
    }
    else {
        document.getElementById(id).innerHTML = minutes + " min " + seconds + " sec";
    }
    timeover += add;
}
var countup = function (id, start) {
    let minutes = Math.floor((timeover - start) / 60);
    let seconds = Math.floor(timeover - start) % 60;
    if (timeover <= start) {
        minutes = 0; seconds = 0;
    }
    document.getElementById(id).innerHTML = minutes + " min " + seconds + " sec";
    timeover += add;
}
