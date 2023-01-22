
//fn returns curent time
function getTime() {
    var now = moment();
    return now.format('dddd, MMMM Do - HH:mm:ss');
}


//fn sets planner CSS
function setBGcolor() {
    var tdd = $('td[class="hour"]');
    tdd.each(function (index) {
        var eL = tdd[index];
        if ($(tdd[index]).html().split(":")[0] < moment().format('HH')) {         
            $(eL).next().addClass("past");
        }else if ($(eL).html().split(":")[0] > moment().format('HH')) {
            $(eL).next().addClass("future");
        }else {
            $(eL).next().addClass("present");
        }
    });
}


// refresh planner css and time
setInterval(function () {
    $('#currentDay').text(getTime());
    setBGcolor();
}, 1000);






