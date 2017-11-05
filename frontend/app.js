function s(n) {
    for(var i = 0; i < 4; i++) {
        if(i == n) {
            $("#tab-" + i).addClass("active");
        } else {
            $("#tab-" + i).removeClass("active");
        }
        $("#page-" + i).hide();
    }
    setTimeout(function() {
        $("#page-" + n).show();
    }, Math.random() * 300 + 200);
}

function u(n) {
    if(n == 0) {
        $("#tab-" + 0).show();
        $("#tab-" + 1).show();
        $("#tab-" + 2).show();
        $("#tab-" + 3).show();
        s(0);
    } else if(n == 1) {
        $("#tab-" + 0).hide();
        $("#tab-" + 1).show();
        $("#tab-" + 2).show();
        $("#tab-" + 3).show();
        s(1);
    } else if(n == 2) {
        $("#tab-" + 0).hide();
        $("#tab-" + 1).hide();
        $("#tab-" + 2).show();
        $("#tab-" + 3).hide();
        s(2);
    }
}

function t(n) {
    window.open("terminal/?container=" + n, "terminal", "width=640,height=480,menubar=0,toolbar=0,personalbar=0,status=0");
}

setInterval(function() {
    var val0 = Math.floor(Math.random() * 3 + 22);
    $("#val-0").text("已使用 " + val0 + "%");
    $("#val-0").css("width", val0 + "%");
    $("#rem-0").css("width", 75 - val0 + "%");
}, 1200);
setInterval(function() {
    var val1 = Math.floor(Math.random() * 4 + 66);
    $("#val-1").text("已使用 " + val1 + "%");
    $("#val-1").css("width", val1 + "%");
    $("#rem-1").css("width", 90 - val1 + "%");
    $("#tot-1").text("资源占用：" + val1 + "%");
}, 3100);
setInterval(function() {
    var val2 = Math.floor(Math.random() * 6 + 1);
    $("#val-2").text(val2 + "%")
    $("#val-2").css("width", val2 + "%");
}, 1800);
setInterval(function() {
    var val3 = Math.floor(Math.random() * 5 + 13);
    $("#val-3").text(val3 + "%")
    $("#val-3").css("width", val3 + "%");
}, 2700);
