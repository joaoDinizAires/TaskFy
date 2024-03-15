$(document).ready(function () {
    $('#todo-form').submit(function(e){
        e.preventDefault();
        const taskVal = $('#todo-input').val();
        let newTask = $(document.createElement('li'));
        newTask.text(taskVal);
        $("#todo-list").append(newTask);
        newTask.hide().slideDown();
    })
    $('#todo-list').on('click','li',function(){ 
        $(this).toggleClass('task-done');
     })
});