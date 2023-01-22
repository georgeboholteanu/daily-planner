var planner = {9:"xx",10:"",11:"",12:"",13:"",14:"",15:"",16:"",17:""};

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



//fn read planner from local storage
$( document ).ready(function() {
    var tasks = $('textarea');
    tasks.each(function (index) {
        tasks[index].value = JSON.parse(localStorage.getItem('planner'))[index + 9];       
    });

});


// set click event on save button
$('.saveBtn').on('click', function () {
    var hourFound = $(this).parent().prev().prev().html().split(':')[0];
    var taskInput = $(this).parent().prev().children().val();

    if (localStorage.getItem('planner') === null) {
        localStorage.setItem('planner', JSON.stringify(planner));
    }else{
        var plannerUpdate = JSON.parse(localStorage.getItem('planner'));
        plannerUpdate[Number(hourFound)] = taskInput;
        localStorage.setItem('planner', JSON.stringify(plannerUpdate));

        console.log(JSON.parse(localStorage.getItem('planner')));        
    }
});






