//fn returns curent time
function getTime() {
    var now = moment();
    return now.format('dddd, MMMM Do - HH:mm:ss');
}

// refresh planner css every 1s
setInterval(function () {
    $('#currentDay').text(getTime());
}, 1000);