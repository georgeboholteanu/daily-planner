
var planner = {9:"",10:"",11:"",12:"",13:"",14:"",15:"",16:"",17:""};

//fn returns curent time
function getTime() {
    var now = moment();
    return now.format('dddd, MMMM Do - HH:mm:ss');
}


//fn sets planner CSS
function setBGcolor() {
    var tdd = $('td[class="time-block"]');
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
function readPlanner() {
    var tasks = $('textarea');
    tasks.each(function (index) {
        tasks[index].value = JSON.parse(localStorage.getItem('planner'))[index + 9];       
    });
};


// set click event on save button
$('.saveBtn').on('click', function () {
    var hourFound = $(this).prev().prev().html().split(':')[0];
    var taskInput = $(this).prev().children().val();

    if (localStorage.getItem('planner') === null) {
        localStorage.setItem('planner', JSON.stringify(planner));
    }else{
        var plannerUpdate = JSON.parse(localStorage.getItem('planner'));
        plannerUpdate[Number(hourFound)] = taskInput;
        localStorage.setItem('planner', JSON.stringify(plannerUpdate));
        
        if (taskInput !== "") {
            $('.savedMessage').text('Task Saved!');
            setTimeout(function () {                               
                $('.savedMessage').text('');            
                    
            },3000);   
        }
           
    }
});


// clear tasks from local storage
$('.removeBtn').on('click', function () {
    const answer = confirm("Are you sure to delete all todos?");

    if (answer) {
        localStorage.setItem('planner', JSON.stringify(planner));
        readPlanner();
    }else{
        return false;

    }
});
  
readPlanner();







